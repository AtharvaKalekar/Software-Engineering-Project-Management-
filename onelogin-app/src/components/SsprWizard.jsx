import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Key, ShieldAlert, CheckCircle, Lock, Unlock, ArrowRight, ShieldCheck, RefreshCw, Sparkles, AlertTriangle } from 'lucide-react';

export default function SsprWizard({ currentRole }) {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState('usr_std_18204@university.edu');
  const [otpCode, setOtpCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [accountLocked, setAccountLocked] = useState(false);
  const [unlockSuccess, setUnlockSuccess] = useState(false);

  // Compute Password Strength
  const evaluatePassword = (pass) => {
    let score = 0;
    if (pass.length >= 8) score += 20;
    if (pass.length >= 12) score += 20;
    if (/[A-Z]/.test(pass)) score += 20;
    if (/[0-9]/.test(pass)) score += 20;
    if (/[^A-Za-z0-9]/.test(pass)) score += 20;
    return score;
  };

  const strengthScore = evaluatePassword(newPassword);

  const getStrengthLabel = (score) => {
    if (score <= 20) return { label: 'Very Weak', color: '#e11d48' };
    if (score <= 40) return { label: 'Weak', color: '#ea580c' };
    if (score <= 60) return { label: 'Moderate', color: '#d97706' };
    if (score <= 80) return { label: 'Strong', color: '#2563eb' };
    return { label: 'Ultra Strong (Shield Secured)', color: '#059669' };
  };

  const strengthInfo = getStrengthLabel(strengthScore);

  const handleStep1Submit = (e) => {
    e.preventDefault();
    if (username.trim()) setStep(2);
  };

  const handleStep2Submit = (e) => {
    e.preventDefault();
    if (otpCode.length >= 4) setStep(3);
  };

  const handleStep3Submit = (e) => {
    e.preventDefault();
    if (newPassword && newPassword === confirmPassword && strengthScore >= 60) {
      setStep(4);
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.log('Confetti error:', err);
      }
    }
  };

  const resetWizard = () => {
    setStep(1);
    setOtpCode('');
    setNewPassword('');
    setConfirmPassword('');
  };

  const handleUnlockAccount = () => {
    setUnlockSuccess(true);
    setTimeout(() => {
      setAccountLocked(false);
      setUnlockSuccess(false);
    }, 2500);
  };

  return (
    <div>
      {/* Top Banner */}
      <div className="glass-card" style={{ padding: '24px', marginBottom: '24px', background: '#ffffff' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Key size={24} color="#d97706" />
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a' }}>Self-Service Credential & Unlock Hub</h2>
              <span className="badge badge-amber">FR-05 & FR-07</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '4px' }}>
              Empower students & staff to reset passwords and unlock accounts without waiting for Helpdesk tickets.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="badge badge-emerald">
              Reduces Helpdesk Tickets by 75%
            </span>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '24px' }}>
        
        {/* SSPR Wizard */}
        <div className="glass-card" style={{ padding: '24px', background: '#ffffff' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a' }}>Self-Service Password Reset (SSPR)</h3>
            <span style={{ fontSize: '0.8rem', color: '#2563eb', fontWeight: 600 }}>Step {step} of 4</span>
          </div>

          {/* Progress Bar */}
          <div style={{ display: 'flex', gap: '6px', marginBottom: '24px' }}>
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                style={{
                  flex: 1,
                  height: '4px',
                  borderRadius: '2px',
                  background: s <= step ? 'linear-gradient(90deg, #2563eb, #3b82f6)' : '#e2e8f0',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>

          {/* STEP 1 */}
          {step === 1 && (
            <form onSubmit={handleStep1Submit}>
              <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '16px' }}>
                Enter your university email address or roll number to initiate identity verification.
              </p>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontSize: '0.8rem', color: '#475569', display: 'block', marginBottom: '6px' }}>
                  University User ID / Email:
                </label>
                <input
                  type="email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="cyber-input"
                  required
                />
              </div>
              <button type="submit" className="btn-cyber btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Send MFA Challenge Code <ArrowRight size={16} />
              </button>
            </form>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <form onSubmit={handleStep2Submit}>
              <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', padding: '12px', borderRadius: '8px', marginBottom: '16px', fontSize: '0.82rem', color: '#1e40af' }}>
                OTP verification code sent to recovery mobile <strong>+1 (***) ***-9421</strong> and registered email.
              </div>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontSize: '0.8rem', color: '#475569', display: 'block', marginBottom: '6px' }}>
                  Enter 6-Digit OTP / TOTP Code:
                </label>
                <input
                  type="text"
                  placeholder="e.g. 582910"
                  value={otpCode}
                  onChange={(e) => setOtpCode(e.target.value)}
                  className="cyber-input"
                  style={{ fontFamily: 'var(--font-mono)', letterSpacing: '3px', textAlign: 'center', fontSize: '1.2rem' }}
                  maxLength={6}
                  required
                />
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button type="button" className="btn-cyber" onClick={() => setStep(1)} style={{ flex: 1 }}>
                  Back
                </button>
                <button type="submit" className="btn-cyber btn-primary" style={{ flex: 2, justifyContent: 'center' }}>
                  Verify OTP Code <ArrowRight size={16} />
                </button>
              </div>
            </form>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <form onSubmit={handleStep3Submit}>
              <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '16px' }}>
                Choose a strong new password adhering to security entropy guidelines (Min 8 chars, uppercase, digits, symbols).
              </p>

              <div style={{ marginBottom: '14px' }}>
                <label style={{ fontSize: '0.8rem', color: '#475569', display: 'block', marginBottom: '6px' }}>
                  New Password:
                </label>
                <input
                  type="password"
                  placeholder="Enter new password..."
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="cyber-input"
                  required
                />
              </div>

              {/* Entropy Meter */}
              {newPassword.length > 0 && (
                <div style={{ marginBottom: '16px', background: '#f8fafc', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '6px' }}>
                    <span style={{ color: '#64748b' }}>Passphrase Entropy Score:</span>
                    <strong style={{ color: strengthInfo.color }}>{strengthInfo.label} ({strengthScore}%)</strong>
                  </div>
                  <div style={{ width: '100%', height: '6px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: `${strengthScore}%`, height: '100%', background: strengthInfo.color, transition: 'all 0.3s ease' }} />
                  </div>
                </div>
              )}

              <div style={{ marginBottom: '20px' }}>
                <label style={{ fontSize: '0.8rem', color: '#475569', display: 'block', marginBottom: '6px' }}>
                  Confirm New Password:
                </label>
                <input
                  type="password"
                  placeholder="Re-enter new password..."
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="cyber-input"
                  required
                />
                {confirmPassword && confirmPassword !== newPassword && (
                  <span style={{ color: '#e11d48', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>
                    Passwords do not match.
                  </span>
                )}
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button type="button" className="btn-cyber" onClick={() => setStep(2)} style={{ flex: 1 }}>
                  Back
                </button>
                <button 
                  type="submit" 
                  className="btn-cyber btn-cyber-success" 
                  disabled={!newPassword || newPassword !== confirmPassword || strengthScore < 60}
                  style={{ flex: 2, justifyContent: 'center', opacity: (newPassword && newPassword === confirmPassword && strengthScore >= 60) ? 1 : 0.5 }}
                >
                  Update Credential <CheckCircle size={16} />
                </button>
              </div>
            </form>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: '#ecfdf5',
                border: '2px solid #10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}>
                <CheckCircle size={36} color="#059669" />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#059669', marginBottom: '8px' }}>
                Password Updated Successfully!
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#64748b', maxWidth: '320px', margin: '0 auto 20px', lineHeight: 1.5 }}>
                Your central identity credentials have been updated across all 9 university applications. No Helpdesk ticket needed!
              </p>

              <button className="btn-cyber btn-primary" onClick={resetWizard}>
                Done / Start New Reset
              </button>
            </div>
          )}
        </div>

        {/* Self-Service Account Unlock Card */}
        <div className="glass-card" style={{ padding: '24px', background: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: accountLocked ? '#fff1f2' : '#ecfdf5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {accountLocked ? <Lock size={20} color="#e11d48" /> : <Unlock size={20} color="#059669" />}
              </div>
              <div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a' }}>Self-Service Account Unlock</h3>
                <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Automated Locked Account Recovery</span>
              </div>
            </div>

            <div style={{
              background: accountLocked ? '#fff1f2' : '#f8fafc',
              border: accountLocked ? '1px solid #fda4af' : '1px solid #e2e8f0',
              borderRadius: '10px',
              padding: '20px',
              marginBottom: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#0f172a' }}>Target Account:</span>
                <code style={{ fontFamily: 'var(--font-mono)', color: '#2563eb' }}>usr_std_18204</code>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#0f172a' }}>Lock Status:</span>
                <span className={`badge ${accountLocked ? 'badge-amber' : 'badge-emerald'}`}>
                  {accountLocked ? 'LOCKED (5 Failed Retries)' : 'NORMAL (Active)'}
                </span>
              </div>

              <p style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.4 }}>
                {accountLocked
                  ? 'Your account was automatically locked for security after consecutive failed authentication attempts. Use biometrics/MFA to self-unlock immediately.'
                  : 'Account is operating normally. You can simulate a lock event to test the self-service unlock workflow.'}
              </p>
            </div>
          </div>

          <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
            {accountLocked ? (
              <button 
                className="btn-cyber btn-cyber-success" 
                onClick={handleUnlockAccount}
                disabled={unlockSuccess}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                {unlockSuccess ? (
                  <>Unlocking Account via MFA... <Sparkles size={16} className="spin" /></>
                ) : (
                  <>Unlock My Account Now <Unlock size={16} /></>
                )}
              </button>
            ) : (
              <button 
                className="btn-cyber btn-cyber-danger" 
                onClick={() => setAccountLocked(true)}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Simulate Account Lock Event <AlertTriangle size={16} />
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

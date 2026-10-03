import React, { useState, useEffect } from 'react';
import { Shield, Smartphone, Key, RefreshCw, CheckCircle, Copy, ShieldAlert, Lock, QrCode, Sparkles } from 'lucide-react';

export default function MfaHub({ currentRole }) {
  const [totpCode, setTotpCode] = useState('582 910');
  const [secondsLeft, setSecondsLeft] = useState(30);
  const [testInput, setTestInput] = useState('');
  const [verifyStatus, setVerifyStatus] = useState(null);
  const [copied, setCopied] = useState(false);

  // Generate new code every 30 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          const newCode = Math.floor(100000 + Math.random() * 900000).toString();
          setTotpCode(`${newCode.slice(0, 3)} ${newCode.slice(3)}`);
          return 30;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleVerify = (e) => {
    e.preventDefault();
    const cleanInput = testInput.replace(/\s+/g, '');
    const cleanTotp = totpCode.replace(/\s+/g, '');
    if (cleanInput === cleanTotp) {
      setVerifyStatus('success');
    } else {
      setVerifyStatus('error');
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(totpCode.replace(/\s+/g, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <div className="glass-card" style={{ padding: '24px', marginBottom: '24px', background: '#ffffff' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Shield size={24} color="#2563eb" />
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a' }}>Multi-Factor Authentication (MFA) Hub</h2>
              <span className="badge badge-emerald">FR-04 Enforced</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '4px' }}>
              Time-based One-Time Passwords (TOTP), SMS OTP Fallback, and WebAuthn Biometrics for {currentRole}.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              background: '#ecfdf5',
              border: '1px solid #a7f3d0',
              borderRadius: '10px',
              padding: '8px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <CheckCircle size={20} color="#059669" />
              <div>
                <div style={{ fontSize: '0.7rem', color: '#047857' }}>Security Posture Score</div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: '#065f46' }}>98% (Strong)</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '24px' }}>
        
        {/* TOTP Generator Card */}
        <div className="glass-card" style={{ padding: '24px', background: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: '#eff6ff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Smartphone size={20} color="#2563eb" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a' }}>TOTP Authenticator Generator</h3>
                  <span style={{ fontSize: '0.75rem', color: '#64748b' }}>HMAC-SHA1 Algorithm</span>
                </div>
              </div>

              {/* Rolling Timer Ring */}
              <div style={{
                position: 'relative',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="44" height="44" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#e2e8f0"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="3"
                    strokeDasharray={`${(secondsLeft / 30) * 100}, 100`}
                    style={{ transition: 'stroke-dasharray 1s linear' }}
                  />
                </svg>
                <span style={{ position: 'absolute', fontSize: '0.75rem', fontWeight: 700, color: '#2563eb' }}>
                  {secondsLeft}s
                </span>
              </div>
            </div>

            {/* Light Display Box */}
            <div style={{
              background: '#f8fafc',
              border: '1px dashed #bfdbfe',
              borderRadius: '12px',
              padding: '24px',
              textAlign: 'center',
              marginBottom: '20px'
            }}>
              <span style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
                OneTime Code for OneLogin
              </span>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '2.5rem',
                fontWeight: 800,
                color: '#2563eb',
                letterSpacing: '6px',
                margin: '10px 0'
              }}>
                {totpCode}
              </div>

              <button 
                className="btn-cyber" 
                onClick={copyToClipboard}
                style={{ padding: '6px 14px', fontSize: '0.78rem', background: '#ffffff' }}
              >
                {copied ? <CheckCircle size={14} color="#059669" /> : <Copy size={14} />}
                {copied ? 'Copied to Clipboard!' : 'Copy TOTP Code'}
              </button>
            </div>
          </div>

          {/* Test Form */}
          <form onSubmit={handleVerify} style={{ borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
            <label style={{ fontSize: '0.8rem', color: '#475569', display: 'block', marginBottom: '8px' }}>
              Test TOTP Verification Engine:
            </label>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input
                type="text"
                placeholder="Enter 6-digit code..."
                value={testInput}
                onChange={(e) => {
                  setTestInput(e.target.value);
                  setVerifyStatus(null);
                }}
                className="cyber-input"
                style={{ fontFamily: 'var(--font-mono)', letterSpacing: '2px', textAlign: 'center' }}
                maxLength={7}
              />
              <button type="submit" className="btn-cyber btn-primary">
                Verify
              </button>
            </div>

            {verifyStatus === 'success' && (
              <div style={{ marginTop: '10px', color: '#059669', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}>
                <CheckCircle size={16} /> Token Verified! MFA challenge passed.
              </div>
            )}
            {verifyStatus === 'error' && (
              <div style={{ marginTop: '10px', color: '#e11d48', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}>
                <ShieldAlert size={16} /> Invalid code. Please enter active TOTP.
              </div>
            )}
          </form>
        </div>

        {/* QR Code Pairer Card */}
        <div className="glass-card" style={{ padding: '24px', background: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: '#f5f3ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <QrCode size={20} color="#7c3aed" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a' }}>Device Pair / QR Registration</h3>
                <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Google Authenticator / Duo Mobile</span>
              </div>
            </div>

            <div style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '20px'
            }}>
              {/* Stylized QR Code */}
              <div style={{
                width: '110px',
                height: '110px',
                background: '#ffffff',
                borderRadius: '8px',
                padding: '8px',
                display: 'grid',
                gridTemplateColumns: 'repeat(6, 1fr)',
                gap: '4px',
                border: '1px solid #cbd5e1'
              }}>
                {Array.from({ length: 36 }).map((_, i) => (
                  <div
                    key={i}
                    style={{
                      background: (i % 2 === 0 || i % 5 === 0) ? '#0f172a' : '#2563eb',
                      borderRadius: i % 7 === 0 ? '50%' : '2px'
                    }}
                  />
                ))}
              </div>

              <div>
                <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block', marginBottom: '4px' }}>
                  Secret Provisioning Key:
                </span>
                <code style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  color: '#7c3aed',
                  background: '#f1f5f9',
                  padding: '4px 8px',
                  borderRadius: '6px',
                  display: 'block',
                  marginBottom: '10px'
                }}>
                  JBSWY3DPEHPK3PXP
                </code>
                <p style={{ fontSize: '0.78rem', color: '#64748b', lineHeight: 1.4 }}>
                  Scan with your mobile authenticator app to enable hardware MFA tokens.
                </p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '20px', borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 600, color: '#0f172a', marginBottom: '10px' }}>Configured Secondary MFA Methods:</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.82rem', padding: '8px 12px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#334155' }}>
                  <Smartphone size={14} color="#059669" /> SMS OTP (+1 ***-***-9421)
                </span>
                <span className="badge badge-emerald">Verified</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.82rem', padding: '8px 12px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#334155' }}>
                  <Sparkles size={14} color="#2563eb" /> WebAuthn Biometric Passkey
                </span>
                <span className="badge badge-cyan">Active</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

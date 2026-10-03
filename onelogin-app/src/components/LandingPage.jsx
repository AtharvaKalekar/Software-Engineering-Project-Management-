import React from 'react';
import { 
  Shield, Key, Cpu, Users, ArrowRight, CheckCircle, Smartphone, 
  Lock, RefreshCw, Zap, Clock, TrendingUp, Building2, GraduationCap, 
  UserCheck, Mail, BookOpen, Briefcase, ExternalLink, Sparkles, ChevronRight, IndianRupee
} from 'lucide-react';

export default function LandingPage({ onLaunchPortal, onGoToAnalytics }) {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '10px 0 60px' }}>
      
      {/* Hero Section */}
      <section style={{ textAlign: 'center', padding: '50px 20px 40px', maxWidth: '860px', margin: '0 auto' }}>
        
        {/* Announcement Pill Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: '#eff6ff',
          border: '1px solid #bfdbfe',
          borderRadius: '20px',
          padding: '6px 14px',
          fontSize: '0.8rem',
          color: '#2563eb',
          marginBottom: '24px',
          fontWeight: 600,
          boxShadow: 'var(--shadow-xs)'
        }}>
          <Sparkles size={14} color="#2563eb" />
          OneLogin v2.4 &bull; Centralized Campus Identity Governance & SSO
        </div>

        {/* Hero Title */}
        <h1 style={{
          fontSize: '3.4rem',
          fontWeight: 800,
          lineHeight: 1.15,
          letterSpacing: '-1.5px',
          marginBottom: '20px',
          color: '#0f172a'
        }}>
          Unified Single Sign-On for Campus Security & Efficiency
        </h1>

        {/* Hero Subtitle */}
        <p style={{
          fontSize: '1.125rem',
          color: '#475569',
          lineHeight: 1.6,
          marginBottom: '36px',
          maxWidth: '740px',
          margin: '0 auto 36px'
        }}>
          Eliminate password friction across 9 core university applications. Centralize access, enforce hardware TOTP multi-factor security, and reduce helpdesk password resets by <strong style={{ color: '#059669' }}>75%</strong>.
        </p>

        {/* Hero Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <button 
            className="btn-cyber btn-primary" 
            onClick={onLaunchPortal}
            style={{ padding: '12px 26px', fontSize: '0.95rem', borderRadius: '10px' }}
          >
            Launch SSO Portal Dashboard <ArrowRight size={18} />
          </button>
          
          <button 
            className="btn-cyber" 
            onClick={onGoToAnalytics}
            style={{ padding: '12px 26px', fontSize: '0.95rem', borderRadius: '10px', background: '#ffffff' }}
          >
            View Schedule & ROI Calculator <Cpu size={18} />
          </button>
        </div>

      </section>

      {/* Product Showcase Card */}
      <div className="glass-card" style={{
        margin: '10px auto 60px',
        padding: '24px',
        maxWidth: '1020px',
        borderColor: '#e2e8f0',
        background: '#ffffff',
        boxShadow: 'var(--shadow-xl)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }}></span>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }}></span>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }}></span>
            <span style={{ fontSize: '0.8rem', color: '#64748b', marginLeft: '8px', fontFamily: 'var(--font-mono)' }}>
              https://onelogin.university.edu/launchpad
            </span>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <span className="badge badge-emerald">99.98% Uptime</span>
            <span className="badge badge-cyan">142ms Response</span>
          </div>
        </div>

        {/* Minimal Grid Mockup */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
          <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <GraduationCap size={20} color="#2563eb" />
              <strong style={{ fontSize: '0.95rem', color: '#0f172a' }}>LMS Canvas Cloud</strong>
            </div>
            <p style={{ fontSize: '0.78rem', color: '#64748b' }}>SAML 2.0 assertion &bull; Pass-through active</p>
          </div>

          <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <Building2 size={20} color="#0284c7" />
              <strong style={{ fontSize: '0.95rem', color: '#0f172a' }}>ERP Operations Portal</strong>
            </div>
            <p style={{ fontSize: '0.78rem', color: '#64748b' }}>OpenID Connect &bull; Authenticated</p>
          </div>

          <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <BookOpen size={20} color="#7c3aed" />
              <strong style={{ fontSize: '0.95rem', color: '#0f172a' }}>Digital Library Catalog</strong>
            </div>
            <p style={{ fontSize: '0.78rem', color: '#64748b' }}>Custom JWT &bull; RSA-256 Token Signed</p>
          </div>
        </div>
      </div>

      {/* Quantitative Impact Highlights Bar in INR */}
      <section style={{ marginBottom: '60px' }}>
        <div className="glass-card" style={{ padding: '32px 24px', background: '#ffffff' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', textAlign: 'center' }}>
            
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#059669', letterSpacing: '-1px' }}>
                75%
              </div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#0f172a', marginTop: '4px' }}>
                Ticket Volume Reduction
              </div>
              <p style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '2px' }}>
                Eliminates 1,050 manual reset tickets/month
              </p>
            </div>

            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#2563eb', letterSpacing: '-1px' }}>
                210 Hrs
              </div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#0f172a', marginTop: '4px' }}>
                Helpdesk Hours Reclaimed/Mo
              </div>
              <p style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '2px' }}>
                2,520 hours/year reallocated to tech support
              </p>
            </div>

            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#7c3aed', letterSpacing: '-1px' }}>
                6.5 Wks
              </div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#0f172a', marginTop: '4px' }}>
                Fast Phased Schedule
              </div>
              <p style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '2px' }}>
                52 person-days delivery (9.5-wk safety buffer)
              </p>
            </div>

            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#d97706', letterSpacing: '-1px' }}>
                ₹63 Lakhs
              </div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#0f172a', marginTop: '4px' }}>
                Annual Savings (INR ₹)
              </div>
              <p style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '2px' }}>
                Reclaims 1.31 FTE helpdesk staff capacity
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Core Capabilities Features Grid */}
      <section style={{ marginBottom: '60px' }}>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#0f172a' }}>
            Enterprise Identity Capabilities
          </h2>
          <p style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '6px' }}>
            Engineered according to IEEE 830 standards for university access governance.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
          
          <div className="glass-card" style={{ padding: '24px', background: '#ffffff' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <Key size={22} color="#2563eb" />
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '8px', color: '#0f172a' }}>Unified SSO Assertion Propagation</h3>
            <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}>
              Issue secure SAML 2.0 assertions, OIDC ID tokens, and signed JWTs to enable seamless single sign-on across all 9 connected apps.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '24px', background: '#ffffff' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#ecfdf5', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <Smartphone size={22} color="#059669" />
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '8px', color: '#0f172a' }}>TOTP & WebAuthn Multi-Factor (MFA)</h3>
            <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}>
              Protect administrative & faculty access with rolling TOTP 30-second authenticators, SMS backup codes, and biometric passkeys.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '24px', background: '#ffffff' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#f5f3ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <Lock size={22} color="#7c3aed" />
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '8px', color: '#0f172a' }}>Self-Service Credential Recovery (SSPR)</h3>
            <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}>
              Empower students to safely reset forgotten passwords and self-unlock locked accounts without waiting for helpdesk tickets.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '24px', background: '#ffffff' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#fffbeb', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <Users size={22} color="#d97706" />
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '8px', color: '#0f172a' }}>Role-Based Access Control (RBAC)</h3>
            <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}>
              Centralized mapping for Students, Faculty, Staff, and IT Admins with exact permission scopes passed in identity assertions.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '24px', background: '#ffffff' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#fdf4ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <RefreshCw size={22} color="#c084fc" />
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '8px', color: '#0f172a' }}>LDAP Directory Synchronization</h3>
            <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}>
              Automated nightly synchronization with master University Active Directory to auto-provision accounts and deactivate personnel.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '24px', background: '#ffffff' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#fff1f2', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <Shield size={22} color="#e11d48" />
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '8px', color: '#0f172a' }}>Single Sign-Out (SLO) Broadcast</h3>
            <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}>
              Centralized logout propagates token revocation signals across all connected web application sessions simultaneously.
            </p>
          </div>

        </div>
      </section>

      {/* Call-to-Action Section */}
      <section style={{ textAlign: 'center' }}>
        <div className="glass-card" style={{ padding: '40px 24px', background: '#ffffff', borderColor: '#cbd5e1' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
            Ready to Experience OneLogin Single Sign-On?
          </h2>
          <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '24px', maxWidth: '540px', margin: '0 auto 24px' }}>
            Explore the clean application launchpad, test MFA TOTP generation, calculate helpdesk savings in INR (₹), and inspect identity tokens.
          </p>
          <button 
            className="btn-cyber btn-primary"
            onClick={onLaunchPortal}
            style={{ padding: '12px 28px', fontSize: '0.95rem', borderRadius: '10px' }}
          >
            Open OneLogin Portal Dashboard <ArrowRight size={18} />
          </button>
        </div>
      </section>

    </div>
  );
}

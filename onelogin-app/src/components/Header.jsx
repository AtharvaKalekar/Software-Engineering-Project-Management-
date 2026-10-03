import React from 'react';
import { Shield, LayoutGrid, Key, Cpu, Users, RefreshCw, LogOut, CheckCircle, Zap, Globe, Sparkles } from 'lucide-react';

export default function Header({ activeTab, setActiveTab, currentRole, setCurrentRole, onOpenSlo }) {
  const mainTabs = [
    { id: 'landing', label: 'Overview & Landing', icon: Globe },
    { id: 'launchpad', label: 'App Launchpad', icon: LayoutGrid, count: 9 },
    { id: 'mfa', label: 'MFA Security Hub', icon: Shield },
    { id: 'sspr', label: 'SSPR & Unlock', icon: Key },
    { id: 'analytics', label: 'Helpdesk ROI & Schedule', icon: Cpu },
    { id: 'rbac', label: 'RBAC Claims', icon: Users },
    { id: 'sync', label: 'Directory & Audit Stream', icon: RefreshCw },
  ];

  return (
    <header className="glass-card" style={{ borderRadius: '16px', padding: '16px 24px', marginBottom: '28px', background: '#ffffff', borderColor: '#e2e8f0', boxShadow: 'var(--shadow-sm)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        
        {/* Brand Logo & Tagline */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }} onClick={() => setActiveTab('landing')}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 10px rgba(37, 99, 235, 0.25)'
          }}>
            <Shield size={22} color="#ffffff" />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <h1 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.3px' }}>
                OneLogin
              </h1>
              <span className="badge badge-emerald">
                <span className="pulse-dot"></span>
                99.98% Uptime
              </span>
              <span className="badge badge-cyan" style={{ fontSize: '0.7rem' }}>
                52 Person-Days Scope
              </span>
            </div>
            <p style={{ color: '#64748b', fontSize: '0.78rem', marginTop: '1px' }}>
              University Identity Governance & Single Sign-On Platform
            </p>
          </div>
        </div>

        {/* Status Metrics & Quick Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
          
          <div style={{
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            padding: '6px 12px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '0.8rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#2563eb' }}>
              <Zap size={14} />
              <span>Latency: <strong>142ms</strong></span>
            </div>
            <div style={{ width: '1px', height: '14px', background: '#cbd5e1' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#059669' }}>
              <CheckCircle size={14} />
              <span>Auth: <strong>Ready</strong></span>
            </div>
          </div>

          {/* Role Selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '0.78rem', color: '#64748b' }}>Role:</span>
            <select
              value={currentRole}
              onChange={(e) => setCurrentRole(e.target.value)}
              className="cyber-input"
              style={{ padding: '5px 10px', fontSize: '0.82rem', width: 'auto', background: '#ffffff' }}
            >
              <option value="Student">Student (usr_std_18204)</option>
              <option value="Faculty">Faculty (usr_fac_94021)</option>
              <option value="Administrative Staff">Staff (usr_staff_4091)</option>
              <option value="IT Administrator">IT Admin (usr_admin_001)</option>
            </select>
          </div>

          {/* Master Single Logout Button */}
          <button 
            className="btn-cyber btn-cyber-danger"
            onClick={onOpenSlo}
            style={{ fontSize: '0.82rem', padding: '6px 12px' }}
          >
            <LogOut size={15} />
            Single Sign-Out (SLO)
          </button>
        </div>

      </div>

      {/* Navigation Tabs Bar */}
      <nav style={{ display: 'flex', gap: '6px', marginTop: '16px', overflowX: 'auto', paddingBottom: '2px', background: '#f8fafc', padding: '6px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
        {mainTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              className={`nav-tab ${isActive ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <Icon size={16} />
              <span>{tab.label}</span>
              {tab.count && (
                <span style={{
                  background: isActive ? '#eff6ff' : '#e2e8f0',
                  color: isActive ? '#2563eb' : '#64748b',
                  fontSize: '0.7rem',
                  padding: '2px 6px',
                  borderRadius: '6px',
                  fontWeight: 600
                }}>
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}
      </nav>
    </header>
  );
}

import React, { useState } from 'react';
import { CORE_APPS, VENDOR_DEFERRED_APPS } from '../data/appsData';
import { 
  Building2, GraduationCap, UserCheck, Mail, BookOpen, Briefcase, 
  Home, Trophy, FlaskConical, ShieldAlert, Bus, Users, Search, 
  ExternalLink, Key, CheckCircle, ShieldCheck, FileText, Lock, X, RefreshCw, AlertTriangle, ChevronDown, ChevronUp
} from 'lucide-react';

const ICON_MAP = {
  Building2, GraduationCap, UserCheck, Mail, BookOpen, Briefcase,
  Home, Trophy, FlaskConical, ShieldAlert, Bus, Users
};

export default function AppLaunchpad({ currentRole }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [inspectTokenApp, setInspectTokenApp] = useState(null);
  const [activeSessions, setActiveSessions] = useState([1, 2, 4]); // default active session IDs
  const [showDeferredVendorApps, setShowDeferredVendorApps] = useState(false);

  const categories = ['All', 'Cloud', 'In-House'];

  const filteredApps = CORE_APPS.filter((app) => {
    const matchesCategory = selectedCategory === 'All' || app.category === selectedCategory;
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          app.protocol.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleSession = (appId) => {
    if (activeSessions.includes(appId)) {
      setActiveSessions(activeSessions.filter(id => id !== appId));
    } else {
      setActiveSessions([...activeSessions, appId]);
    }
  };

  return (
    <div>
      {/* Scope Banner: Vendor Apps Cut Down */}
      <div style={{
        background: '#fffbeb',
        border: '1px solid #fde68a',
        borderRadius: '12px',
        padding: '16px 20px',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
        boxShadow: 'var(--shadow-xs)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <AlertTriangle size={20} color="#d97706" />
          <div>
            <strong style={{ color: '#92400e', fontSize: '0.92rem' }}>
              Option 2 Scope Reduction: Legacy Vendor Apps Deferred
            </strong>
            <p style={{ fontSize: '0.82rem', color: '#b45309', marginTop: '2px' }}>
              Excluded 3 legacy vendor apps (45 person-days). Core scope is <strong>9 Applications (52 Person-Days / 6.5 Weeks)</strong> with a 9.5-week safety buffer.
            </p>
          </div>
        </div>

        <button
          className="btn-cyber"
          onClick={() => setShowDeferredVendorApps(!showDeferredVendorApps)}
          style={{ fontSize: '0.78rem', padding: '6px 12px', background: '#ffffff', borderColor: '#fcd34d', color: '#b45309' }}
        >
          {showDeferredVendorApps ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          {showDeferredVendorApps ? 'Hide Deferred Apps' : 'Inspect 3 Deferred Apps (Phase 2)'}
        </button>
      </div>

      {/* Deferred Vendor Apps Drawer (If toggled) */}
      {showDeferredVendorApps && (
        <div className="glass-card" style={{ padding: '20px', marginBottom: '24px', borderColor: '#fcd34d', background: '#fffbeb' }}>
          <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#92400e', marginBottom: '12px' }}>
            Cut / Deferred Vendor Applications (3 Apps - 45 Person-Days Saved)
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
            {VENDOR_DEFERRED_APPS.map((app) => {
              const IconComponent = ICON_MAP[app.icon] || Building2;
              return (
                <div key={app.id} style={{ background: '#ffffff', border: '1px dashed #fcd34d', borderRadius: '10px', padding: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <IconComponent size={18} color="#d97706" />
                      <strong style={{ fontSize: '0.9rem', color: '#0f172a' }}>{app.name}</strong>
                    </div>
                    <span className="badge badge-amber" style={{ fontSize: '0.68rem' }}>Phase 2 Deferred</span>
                  </div>
                  <p style={{ fontSize: '0.78rem', color: '#64748b' }}>{app.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Search & Filter Bar */}
      <div className="glass-card" style={{ padding: '20px', marginBottom: '24px', background: '#ffffff' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a' }}>
              University Single Sign-On Portal (9 Integrated Applications)
            </h2>
            <p style={{ fontSize: '0.82rem', color: '#64748b', marginTop: '4px' }}>
              Logged in as <strong style={{ color: '#2563eb' }}>{currentRole}</strong>. Authenticated SSO tokens grant instant pass-through access.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            {/* Category Filter Pills */}
            <div style={{ display: 'flex', background: '#f1f5f9', padding: '3px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '5px 12px',
                    borderRadius: '6px',
                    border: 'none',
                    background: selectedCategory === cat ? '#ffffff' : 'transparent',
                    color: selectedCategory === cat ? '#2563eb' : '#64748b',
                    fontWeight: selectedCategory === cat ? 600 : 400,
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    boxShadow: selectedCategory === cat ? 'var(--shadow-xs)' : 'none',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div style={{ position: 'relative', width: '240px' }}>
              <Search size={16} color="#94a3b8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                placeholder="Search apps or protocols..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="cyber-input"
                style={{ paddingLeft: '36px', paddingRight: '12px', paddingTop: '7px', paddingBottom: '7px', fontSize: '0.85rem' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Grid of 9 Core Applications */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
        {filteredApps.map((app) => {
          const IconComponent = ICON_MAP[app.icon] || Building2;
          const isAllowed = app.allowedRoles.includes(currentRole);
          const hasActiveSession = activeSessions.includes(app.id);

          return (
            <div 
              key={app.id} 
              className="glass-card glass-card-interactive"
              style={{
                padding: '20px',
                background: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                opacity: isAllowed ? 1 : 0.65,
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Category Gradient Top Accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: app.category === 'Cloud' ? 'linear-gradient(90deg, #2563eb, #3b82f6)' :
                            'linear-gradient(90deg, #10b981, #059669)'
              }} />

              <div>
                {/* App Header & Badges */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: `${app.color}15`,
                    border: `1px solid ${app.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <IconComponent size={22} color={app.color} />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                    <span className={`badge ${app.category === 'Cloud' ? 'badge-cyan' : 'badge-emerald'}`}>
                      {app.category}
                    </span>
                    <span style={{ fontSize: '0.7rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                      {app.protocol}
                    </span>
                  </div>
                </div>

                {/* App Title & Description */}
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
                  {app.name}
                </h3>
                <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.45, marginBottom: '16px' }}>
                  {app.description}
                </p>
              </div>

              {/* Status & Action Buttons */}
              <div style={{ paddingTop: '14px', borderTop: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem' }}>
                  {hasActiveSession ? (
                    <span style={{ color: '#059669', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
                      <CheckCircle size={14} /> Session Active
                    </span>
                  ) : isAllowed ? (
                    <span style={{ color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Lock size={14} /> Authenticated Ready
                    </span>
                  ) : (
                    <span style={{ color: '#e11d48', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <ShieldAlert size={14} /> Role Restricted
                    </span>
                  )}
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    className="btn-cyber"
                    onClick={() => setInspectTokenApp(app)}
                    style={{ padding: '6px 10px', fontSize: '0.75rem', background: '#f8fafc' }}
                    title="Inspect SSO Token Assertion"
                  >
                    <FileText size={14} />
                    Token
                  </button>

                  <button
                    className={`btn-cyber ${hasActiveSession ? 'btn-cyber-success' : 'btn-primary'}`}
                    onClick={() => toggleSession(app.id)}
                    disabled={!isAllowed}
                    style={{ padding: '6px 12px', fontSize: '0.78rem', opacity: isAllowed ? 1 : 0.5, cursor: isAllowed ? 'pointer' : 'not-allowed' }}
                  >
                    <ExternalLink size={14} />
                    {hasActiveSession ? 'Re-Launch' : 'Launch SSO'}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* SSO Token Inspection Modal */}
      {inspectTokenApp && (
        <div className="modal-overlay" onClick={() => setInspectTokenApp(null)}>
          <div className="glass-card" onClick={(e) => e.stopPropagation()} style={{ width: '100%', maxWidth: '600px', padding: '24px', background: '#ffffff' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <ShieldCheck size={24} color="#2563eb" />
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a' }}>SSO Security Assertion Inspector</h3>
                  <p style={{ fontSize: '0.8rem', color: '#64748b' }}>
                    Target: {inspectTokenApp.name} ({inspectTokenApp.protocol})
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setInspectTokenApp(null)}
                style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                <span className="badge badge-purple">RSA-256 Signed</span>
                <span className="badge badge-cyan">{inspectTokenApp.protocol}</span>
                <span className="badge badge-emerald">Integration Effort: {inspectTokenApp.effortDays} Days</span>
              </div>

              <p style={{ fontSize: '0.85rem', color: '#475569', marginBottom: '8px' }}>
                Decoded Identity Token Claims (JWT Payload / SAML Attribute Statement):
              </p>

              <div className="code-block">
                <pre>{JSON.stringify(inspectTokenApp.sampleToken, null, 2)}</pre>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button className="btn-cyber" onClick={() => setInspectTokenApp(null)}>
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

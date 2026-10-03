import React, { useState } from 'react';
import { CORE_APPS } from '../data/appsData';
import { Users, Shield, CheckCircle, XCircle, Code, Key, Copy, Sparkles } from 'lucide-react';

export default function RbacInspector({ currentRole, setCurrentRole }) {
  const roles = ['Student', 'Faculty', 'Administrative Staff', 'IT Administrator'];
  const [selectedRole, setSelectedRole] = useState(currentRole);
  const [customClaimDept, setCustomClaimDept] = useState('Computer Science & Engineering');
  const [includeMfaClaim, setIncludeMfaClaim] = useState(true);
  const [copiedToken, setCopiedToken] = useState(false);

  const mockUserPayload = {
    iss: "https://onelogin.university.edu",
    sub: selectedRole === 'Student' ? "usr_std_18204" :
         selectedRole === 'Faculty' ? "usr_fac_94021" :
         selectedRole === 'Administrative Staff' ? "usr_staff_4091" : "usr_admin_001",
    name: selectedRole === 'Student' ? "Alex Morgan" :
          selectedRole === 'Faculty' ? "Dr. Aris Thorne" :
          selectedRole === 'Administrative Staff' ? "Eleanor Vance" : "Root System Administrator",
    email: `${selectedRole.toLowerCase().replace(/\s+/g, '')}@university.edu`,
    role: selectedRole,
    department: customClaimDept,
    mfa_verified: includeMfaClaim,
    authorized_apps_count: CORE_APPS.filter(a => a.allowedRoles.includes(selectedRole)).length,
    scopes: selectedRole === 'IT Administrator' ? ["*"] :
            selectedRole === 'Faculty' ? ["lms:write", "grades:post", "research:access"] :
            selectedRole === 'Administrative Staff' ? ["erp:admin", "hostel:manage", "payroll:read"] :
            ["lms:read", "fees:pay", "library:borrow"],
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 3600
  };

  const copyJwt = () => {
    navigator.clipboard.writeText(JSON.stringify(mockUserPayload, null, 2));
    setCopiedToken(true);
    setTimeout(() => setCopiedToken(false), 2000);
  };

  return (
    <div>
      {/* Title Header */}
      <div className="glass-card" style={{ padding: '24px', marginBottom: '24px', background: '#ffffff' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Users size={24} color="#7c3aed" />
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a' }}>Role-Based Access Control (RBAC) & Claims Inspector</h2>
              <span className="badge badge-purple">FR-06 Enforced</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '4px' }}>
              Centralized identity assertion scopes mapped to university personnel categories.
            </p>
          </div>

          {/* Role Switcher Pills */}
          <div style={{ display: 'flex', background: '#f1f5f9', padding: '4px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
            {roles.map((r) => (
              <button
                key={r}
                onClick={() => {
                  setSelectedRole(r);
                  setCurrentRole(r);
                }}
                style={{
                  padding: '7px 14px',
                  borderRadius: '6px',
                  border: 'none',
                  background: selectedRole === r ? '#ffffff' : 'transparent',
                  color: selectedRole === r ? '#7c3aed' : '#64748b',
                  fontWeight: selectedRole === r ? 700 : 400,
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  boxShadow: selectedRole === r ? 'var(--shadow-xs)' : 'none',
                  transition: 'all 0.15s ease'
                }}
              >
                {r}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
        
        {/* Application Authorization Matrix Table */}
        <div className="glass-card" style={{ padding: '24px', background: '#ffffff' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
            Application Entitlement Matrix for <span style={{ color: '#7c3aed' }}>{selectedRole}</span>
          </h3>
          <p style={{ fontSize: '0.82rem', color: '#64748b', marginBottom: '16px' }}>
            9 Core Applications entitlement verification check.
          </p>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #e2e8f0', textAlign: 'left', color: '#64748b' }}>
                  <th style={{ padding: '10px 8px' }}>Application Name</th>
                  <th style={{ padding: '10px 8px' }}>Type</th>
                  <th style={{ padding: '10px 8px', textAlign: 'center' }}>Access Grant</th>
                </tr>
              </thead>
              <tbody>
                {CORE_APPS.map((app) => {
                  const hasAccess = app.allowedRoles.includes(selectedRole);
                  return (
                    <tr key={app.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '10px 8px', fontWeight: 600, color: '#0f172a' }}>
                        {app.name}
                      </td>
                      <td style={{ padding: '10px 8px', color: '#64748b', fontSize: '0.78rem' }}>
                        {app.category} ({app.protocol})
                      </td>
                      <td style={{ padding: '10px 8px', textAlign: 'center' }}>
                        {hasAccess ? (
                          <span className="badge badge-emerald" style={{ padding: '2px 8px', fontSize: '0.7rem' }}>
                            <CheckCircle size={12} /> Granted
                          </span>
                        ) : (
                          <span style={{ color: '#e11d48', fontSize: '0.75rem', display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
                            <XCircle size={14} /> Denied
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Live JWT Claim Sandbox */}
        <div className="glass-card" style={{ padding: '24px', background: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Code size={20} color="#2563eb" />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a' }}>Identity Assertion JWT Sandbox</h3>
              </div>
              <button className="btn-cyber" onClick={copyJwt} style={{ padding: '4px 10px', fontSize: '0.75rem', background: '#f8fafc' }}>
                {copiedToken ? 'Copied!' : 'Copy JWT'}
              </button>
            </div>

            {/* Custom Claims Controls */}
            <div style={{ background: '#f8fafc', padding: '14px', borderRadius: '10px', marginBottom: '16px', border: '1px solid #e2e8f0' }}>
              <label style={{ fontSize: '0.78rem', color: '#475569', display: 'block', marginBottom: '4px' }}>
                Department Claim:
              </label>
              <input
                type="text"
                value={customClaimDept}
                onChange={(e) => setCustomClaimDept(e.target.value)}
                className="cyber-input"
                style={{ padding: '6px 10px', fontSize: '0.82rem', marginBottom: '10px' }}
              />

              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#0f172a', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={includeMfaClaim}
                  onChange={(e) => setIncludeMfaClaim(e.target.checked)}
                />
                Require MFA Claim Assertion (`mfa_verified: true`)
              </label>
            </div>

            {/* Code Display */}
            <div className="code-block" style={{ maxHeight: '280px' }}>
              <pre>{JSON.stringify(mockUserPayload, null, 2)}</pre>
            </div>
          </div>

          <div style={{ marginTop: '16px', fontSize: '0.78rem', color: '#64748b', textAlign: 'center' }}>
            Signed with RSA-256 Private Key &bull; Cryptographically Verified by IdP Core
          </div>
        </div>

      </div>
    </div>
  );
}

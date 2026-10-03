import React, { useState, useEffect } from 'react';
import { CORE_APPS } from '../data/appsData';
import { LogOut, CheckCircle, ShieldAlert, X, RefreshCw } from 'lucide-react';

export default function SloModal({ isOpen, onClose }) {
  const [revokedAppIds, setRevokedAppIds] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setRevokedAppIds([]);
      setIsComplete(false);

      // Sequentially revoke each app session
      CORE_APPS.forEach((app, index) => {
        setTimeout(() => {
          setRevokedAppIds((prev) => [...prev, app.id]);
          if (index === CORE_APPS.length - 1) {
            setIsComplete(true);
          }
        }, (index + 1) * 150);
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="glass-card" onClick={(e) => e.stopPropagation()} style={{ width: '100%', maxWidth: '540px', padding: '24px', background: '#ffffff' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: '#fff1f2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <LogOut size={22} color="#e11d48" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a' }}>Single Sign-Out (SLO) Broadcast</h3>
              <p style={{ fontSize: '0.8rem', color: '#64748b' }}>
                Terminating active sessions across 9 core university applications (FR-03).
              </p>
            </div>
          </div>

          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer' }}>
            <X size={20} />
          </button>
        </div>

        {/* Revocation Feed */}
        <div style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '10px',
          padding: '16px',
          maxHeight: '260px',
          overflowY: 'auto',
          marginBottom: '20px'
        }}>
          {CORE_APPS.map((app) => {
            const isRevoked = revokedAppIds.includes(app.id);
            return (
              <div
                key={app.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '6px 0',
                  borderBottom: '1px solid #e2e8f0',
                  fontSize: '0.82rem'
                }}
              >
                <span style={{ color: isRevoked ? '#0f172a' : '#64748b', fontWeight: isRevoked ? 600 : 400 }}>
                  {app.name} ({app.category})
                </span>

                {isRevoked ? (
                  <span className="badge badge-emerald" style={{ fontSize: '0.7rem' }}>
                    <CheckCircle size={12} /> Token Revoked
                  </span>
                ) : (
                  <span style={{ color: '#64748b', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <RefreshCw size={12} className="spin" /> Sending Logout assertion...
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Modal Bottom Actions */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: '0.82rem', color: '#64748b' }}>
            {isComplete ? (
              <strong style={{ color: '#059669' }}>All 9 application sessions terminated!</strong>
            ) : (
              <span>Broadcasting SAML LogoutResponse & OAuth Revokes...</span>
            )}
          </div>

          <button
            className="btn-cyber btn-primary"
            onClick={onClose}
            disabled={!isComplete}
            style={{ opacity: isComplete ? 1 : 0.5 }}
          >
            {isComplete ? 'Close SLO Manager' : 'Logging Out...'}
          </button>
        </div>

      </div>
    </div>
  );
}

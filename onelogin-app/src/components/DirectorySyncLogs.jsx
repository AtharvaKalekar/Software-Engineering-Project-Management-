import React, { useState, useEffect } from 'react';
import { RefreshCw, Shield, FileText, CheckCircle, AlertTriangle, ShieldAlert, Sparkles, Database, Play } from 'lucide-react';

const INITIAL_LOGS = [
  { id: 1, timestamp: '04:08:12', event: 'SSO_TOKEN_ISSUED', user: 'usr_std_18204', app: 'LMS Canvas Cloud', level: 'SUCCESS', ip: '10.20.4.112' },
  { id: 2, timestamp: '04:07:45', event: 'MFA_TOTP_VERIFIED', user: 'usr_fac_94021', app: 'OneLogin IdP', level: 'SUCCESS', ip: '10.20.8.44' },
  { id: 3, timestamp: '04:05:10', event: 'PASSWORD_RESET_SUCCESS', user: 'usr_std_19002', app: 'SSPR Self-Service', level: 'SUCCESS', ip: '192.168.1.5' },
  { id: 4, timestamp: '04:02:33', event: 'FAILED_LOGIN_ATTEMPT', user: 'usr_unknown', app: 'Library Digital', level: 'WARN', ip: '185.220.101.4' },
  { id: 5, timestamp: '04:00:20', event: 'ACCOUNT_LOCKED_AUTO', user: 'usr_staff_1029', app: 'ERP Cloud', level: 'ALERT', ip: '10.20.12.99' },
  { id: 6, timestamp: '03:45:00', event: 'LDAP_NIGHTLY_SYNC', user: 'SYSTEM_CRON', app: 'Active Directory', level: 'SUCCESS', ip: '127.0.0.1' },
];

export default function DirectorySyncLogs() {
  const [logs, setLogs] = useState(INITIAL_LOGS);
  const [logFilter, setLogFilter] = useState('ALL');
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncProgress, setSyncProgress] = useState(0);
  const [lastSyncTime, setLastSyncTime] = useState('Today at 03:45 AM');

  // Simulated live event logger stream
  useEffect(() => {
    const eventsList = [
      { event: 'SSO_TOKEN_ISSUED', level: 'SUCCESS', app: 'Google Mail Cloud' },
      { event: 'MFA_CHALLENGE_PASSED', level: 'SUCCESS', app: 'OneLogin Core' },
      { event: 'SESSION_REFRESHED', level: 'SUCCESS', app: 'Library Digital' },
      { event: 'SECURITY_SCAN_CLEARED', level: 'SUCCESS', app: 'Research Repo' },
      { event: 'INVALID_CREDENTIALS', level: 'WARN', app: 'Placement Portal' },
    ];

    const interval = setInterval(() => {
      const randomEvent = eventsList[Math.floor(Math.random() * eventsList.length)];
      const randomUserNum = Math.floor(10000 + Math.random() * 90000);
      const newLog = {
        id: Date.now(),
        timestamp: new Date().toLocaleTimeString('en-US', { hour12: false }),
        event: randomEvent.event,
        user: `usr_${randomUserNum}`,
        app: randomEvent.app,
        level: randomEvent.level,
        ip: `10.20.${Math.floor(Math.random()*50)}.${Math.floor(Math.random()*250)}`
      };
      setLogs((prev) => [newLog, ...prev.slice(0, 19)]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const triggerLdapSync = () => {
    setIsSyncing(true);
    setSyncProgress(0);

    const syncInterval = setInterval(() => {
      setSyncProgress((prev) => {
        if (prev >= 100) {
          clearInterval(syncInterval);
          setIsSyncing(false);
          setLastSyncTime(new Date().toLocaleTimeString());
          setLogs((prevLogs) => [
            {
              id: Date.now(),
              timestamp: new Date().toLocaleTimeString('en-US', { hour12: false }),
              event: 'LDAP_SYNC_COMPLETED',
              user: 'SYSTEM_CRON',
              app: 'Master Active Directory',
              level: 'SUCCESS',
              ip: '127.0.0.1'
            },
            ...prevLogs
          ]);
          return 100;
        }
        return prev + 25;
      });
    }, 400);
  };

  const filteredLogs = logs.filter((log) => {
    if (logFilter === 'ALL') return true;
    return log.level === logFilter;
  });

  return (
    <div>
      {/* Title Header */}
      <div className="glass-card" style={{ padding: '24px', marginBottom: '24px', background: '#ffffff' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <RefreshCw size={24} color="#2563eb" />
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a' }}>Directory Sync Engine & Real-Time Audit Logs</h2>
              <span className="badge badge-cyan">FR-08 & FR-09</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '4px' }}>
              Synchronize LDAP user schemas and record tamper-evident authentication audit trails.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <span className="badge badge-emerald">Master Directory: Connected</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
        
        {/* LDAP Directory Sync Card */}
        <div className="glass-card" style={{ padding: '24px', background: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: '#eff6ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Database size={22} color="#2563eb" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a' }}>LDAP / Active Directory Sync (FR-08)</h3>
                <p style={{ fontSize: '0.8rem', color: '#64748b' }}>
                  Auto-provisions new students/staff and revokes departed accounts nightly.
                </p>
              </div>
            </div>

            <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0', marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '10px' }}>
                <span style={{ color: '#475569' }}>Last Automated Sync:</span>
                <strong style={{ color: '#059669' }}>{lastSyncTime}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '10px' }}>
                <span style={{ color: '#475569' }}>Total Provisioned Identities:</span>
                <strong style={{ color: '#2563eb' }}>14,280 Accounts</strong>
              </div>

              {isSyncing && (
                <div style={{ marginTop: '14px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#2563eb', marginBottom: '4px' }}>
                    <span>Syncing delta records from LDAP master...</span>
                    <span>{syncProgress}%</span>
                  </div>
                  <div style={{ width: '100%', height: '6px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: `${syncProgress}%`, height: '100%', background: 'linear-gradient(90deg, #2563eb, #3b82f6)', transition: 'all 0.3s ease' }} />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
            <button
              className="btn-cyber btn-primary"
              onClick={triggerLdapSync}
              disabled={isSyncing}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              {isSyncing ? (
                <>Synchronizing Directory... <Sparkles size={16} className="spin" /></>
              ) : (
                <>Trigger LDAP Directory Sync Now <Play size={16} /></>
              )}
            </button>
          </div>
        </div>

        {/* Real-Time Audit Log Stream Card */}
        <div className="glass-card" style={{ padding: '24px', background: '#ffffff' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FileText size={20} color="#059669" />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a' }}>Real-Time Audit Stream (FR-09)</h3>
            </div>

            {/* Log Level Filters */}
            <div style={{ display: 'flex', gap: '6px' }}>
              {['ALL', 'SUCCESS', 'WARN', 'ALERT'].map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setLogFilter(lvl)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '6px',
                    border: 'none',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    background: logFilter === lvl ? '#eff6ff' : '#f1f5f9',
                    color: logFilter === lvl ? '#2563eb' : '#64748b'
                  }}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          {/* Audit Feed Table */}
          <div className="code-block" style={{ maxHeight: '300px', overflowY: 'auto' }}>
            {filteredLogs.map((log) => (
              <div
                key={log.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '6px 0',
                  borderBottom: '1px solid #1e293b',
                  fontSize: '0.78rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: '#94a3b8' }}>[{log.timestamp}]</span>
                  <span style={{
                    color: log.level === 'SUCCESS' ? '#34d399' :
                           log.level === 'WARN' ? '#fbbf24' : '#f87171',
                    fontWeight: 600
                  }}>
                    {log.event}
                  </span>
                  <span style={{ color: '#cbd5e1' }}>{log.user}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: '#38bdf8' }}>{log.app}</span>
                  <span style={{ color: '#64748b', fontSize: '0.72rem' }}>{log.ip}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

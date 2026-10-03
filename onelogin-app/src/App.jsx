import React, { useState } from 'react';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import AppLaunchpad from './components/AppLaunchpad';
import MfaHub from './components/MfaHub';
import SsprWizard from './components/SsprWizard';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import RbacInspector from './components/RbacInspector';
import DirectorySyncLogs from './components/DirectorySyncLogs';
import SloModal from './components/SloModal';
import { Shield } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('landing');
  const [currentRole, setCurrentRole] = useState('Student');
  const [isSloOpen, setIsSloOpen] = useState(false);

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px 40px' }}>
      
      {/* Navigation Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        currentRole={currentRole}
        setCurrentRole={setCurrentRole}
        onOpenSlo={() => setIsSloOpen(true)}
      />

      {/* Main Content Body Container */}
      <main>
        {activeTab === 'landing' && (
          <LandingPage 
            onLaunchPortal={() => setActiveTab('launchpad')}
            onGoToAnalytics={() => setActiveTab('analytics')}
          />
        )}
        {activeTab === 'launchpad' && <AppLaunchpad currentRole={currentRole} />}
        {activeTab === 'mfa' && <MfaHub currentRole={currentRole} />}
        {activeTab === 'sspr' && <SsprWizard currentRole={currentRole} />}
        {activeTab === 'analytics' && <AnalyticsDashboard />}
        {activeTab === 'rbac' && <RbacInspector currentRole={currentRole} setCurrentRole={setCurrentRole} />}
        {activeTab === 'sync' && <DirectorySyncLogs />}
      </main>

      {/* Single Sign-Out (SLO) Modal */}
      <SloModal
        isOpen={isSloOpen}
        onClose={() => setIsSloOpen(false)}
      />

      {/* Clean Minimal Footer */}
      <footer style={{
        marginTop: '60px',
        paddingTop: '20px',
        borderTop: '1px solid var(--border-subtle)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
        color: 'var(--text-tertiary)',
        fontSize: '0.8rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Shield size={16} color="#38bdf8" />
          <span>OneLogin Identity Governance Platform &bull; IEEE 830 Standard</span>
        </div>
        <div>
          <span>Clean Enterprise SaaS UI &bull; 9 Core Applications (52 Person-Days Scope)</span>
        </div>
      </footer>

    </div>
  );
}

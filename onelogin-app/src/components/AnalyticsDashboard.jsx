import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Cpu, IndianRupee, Clock, Users, TrendingUp, Zap, CalendarCheck, ShieldAlert, CheckCircle } from 'lucide-react';

const THROUGHPUT_DATA = [
  { time: '06:00', authentications: 35, latency: 95 },
  { time: '07:00', authentications: 85, latency: 110 },
  { time: '08:00', authentications: 245, latency: 142 },
  { time: '09:00', authentications: 210, latency: 135 },
  { time: '10:00', authentications: 165, latency: 120 },
  { time: '11:00', authentications: 140, latency: 115 },
  { time: '12:00', authentications: 180, latency: 130 },
  { time: '13:00', authentications: 195, latency: 138 },
  { time: '14:00', authentications: 220, latency: 145 },
  { time: '15:00', authentications: 150, latency: 122 },
  { time: '16:00', authentications: 110, latency: 105 },
  { time: '17:00', authentications: 60, latency: 98 },
];

export default function AnalyticsDashboard() {
  const [ticketVolume, setTicketVolume] = useState(1400);
  const [minutesPerReset, setMinutesPerReset] = useState(12);
  const [reductionTarget, setReductionTarget] = useState(75); // 75% reduction
  const [hourlyRateINR, setHourlyRateINR] = useState(2500); // ₹2,500/hr helpdesk rate

  // Helpdesk Computations in INR
  const savedTicketsPerMonth = ticketVolume * (reductionTarget / 100); // 1,050 tickets
  const savedHoursPerMonth = (savedTicketsPerMonth * minutesPerReset) / 60; // 210 hrs
  const savedHoursPerYear = savedHoursPerMonth * 12; // 2,520 hrs
  const annualFinancialSavingsINR = savedHoursPerYear * hourlyRateINR; // ₹63,00,000 (₹63 Lakhs)
  const fteStaffReclaimed = (savedHoursPerMonth / 160).toFixed(2); // ~1.31 FTE

  // Format INR numbers using Indian numbering system
  const formatINR = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const formatLakhs = (val) => {
    const lakhs = (val / 100000).toFixed(2);
    return `₹${lakhs} Lakhs`;
  };

  return (
    <div>
      {/* Top Title Bar */}
      <div className="glass-card" style={{ padding: '24px', marginBottom: '24px', background: '#ffffff' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Cpu size={24} color="#2563eb" />
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a' }}>Project Schedule & Helpdesk ROI Analytics (INR)</h2>
              <span className="badge badge-amber">Option 2 Active: Vendor Apps Deferred</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '4px' }}>
              Reduced integration effort from 97 to <strong>52 Person-Days</strong> (6.5 Wks completion vs 16 Wk deadline).
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <span className="badge badge-emerald">6.5 Wks vs 16 Wk Deadline</span>
            <span className="badge badge-purple">Safety Buffer: 9.5 Weeks</span>
          </div>
        </div>
      </div>

      {/* Schedule Computation Banner */}
      <div className="glass-card" style={{ padding: '20px', marginBottom: '24px', borderColor: '#bfdbfe', background: '#eff6ff' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <CalendarCheck size={26} color="#2563eb" />
            <div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1e40af' }}>
                Phased Schedule Computation (2-Engineer Team &bull; 9 Core Applications)
              </h3>
              <p style={{ fontSize: '0.82rem', color: '#1d4ed8', marginTop: '2px' }}>
                Excluding 3 Legacy Vendor Apps eliminated <strong>45 person-days</strong> of third-party integration risk.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            <div style={{ textAlign: 'center', padding: '0 12px', borderRight: '1px solid #bfdbfe' }}>
              <div style={{ fontSize: '0.72rem', color: '#1e40af' }}>Core Apps Effort</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#2563eb' }}>52 Person-Days</div>
            </div>
            <div style={{ textAlign: 'center', padding: '0 12px', borderRight: '1px solid #bfdbfe' }}>
              <div style={{ fontSize: '0.72rem', color: '#1e40af' }}>Buffered Schedule</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#059669' }}>6.5 Weeks</div>
            </div>
            <div style={{ textAlign: 'center', padding: '0 12px' }}>
              <div style={{ fontSize: '0.72rem', color: '#1e40af' }}>Deadline Safety</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#7c3aed' }}>+9.5 Wks Buffer</div>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Cards in INR */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '24px' }}>
        
        <div className="glass-card" style={{ padding: '20px', background: '#ffffff' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Helpdesk Hours Saved</span>
            <Clock size={20} color="#059669" />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#059669' }}>
            {savedHoursPerMonth} hrs/mo
          </div>
          <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '4px' }}>
            <strong>{savedHoursPerYear.toLocaleString()} hours</strong> reclaimed per year
          </div>
        </div>

        <div className="glass-card" style={{ padding: '20px', background: '#ffffff' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Annual Savings (INR)</span>
            <IndianRupee size={20} color="#2563eb" />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#2563eb' }}>
            {formatLakhs(annualFinancialSavingsINR)}
          </div>
          <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '4px' }}>
            {formatINR(annualFinancialSavingsINR)} at ₹{hourlyRateINR}/hr rate
          </div>
        </div>

        <div className="glass-card" style={{ padding: '20px', background: '#ffffff' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span style={{ fontSize: '0.8rem', color: '#64748b' }}>FTE Staff Capacity Reclaimed</span>
            <Users size={20} color="#7c3aed" />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#7c3aed' }}>
            {fteStaffReclaimed} FTE
          </div>
          <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '4px' }}>
            Reallocated to high-priority tech support
          </div>
        </div>

        <div className="glass-card" style={{ padding: '20px', background: '#ffffff' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Ticket Reduction Rate</span>
            <TrendingUp size={20} color="#d97706" />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#d97706' }}>
            -{reductionTarget}%
          </div>
          <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '4px' }}>
            Saved <strong>{savedTicketsPerMonth.toLocaleString()} reset requests</strong>/mo
          </div>
        </div>

      </div>

      {/* ROI Calculator & Recharts Load Graph */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
        
        {/* Interactive ROI Calculator Box in INR */}
        <div className="glass-card" style={{ padding: '24px', background: '#ffffff' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
            Interactive Helpdesk ROI Calculator (INR ₹)
          </h3>
          <p style={{ fontSize: '0.82rem', color: '#64748b', marginBottom: '20px' }}>
            Adjust parameters to recalculate labor savings in Indian Rupees (₹).
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            {/* Slider 1: Ticket Volume */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '6px' }}>
                <span style={{ color: '#475569' }}>Monthly Password Reset Tickets:</span>
                <strong style={{ color: '#2563eb' }}>{ticketVolume} tickets/month</strong>
              </div>
              <input
                type="range"
                min="500"
                max="3000"
                step="50"
                value={ticketVolume}
                onChange={(e) => setTicketVolume(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#2563eb' }}
              />
            </div>

            {/* Slider 2: Reset Minutes */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '6px' }}>
                <span style={{ color: '#475569' }}>Avg Helpdesk Time per Ticket:</span>
                <strong style={{ color: '#7c3aed' }}>{minutesPerReset} minutes</strong>
              </div>
              <input
                type="range"
                min="5"
                max="25"
                step="1"
                value={minutesPerReset}
                onChange={(e) => setMinutesPerReset(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#7c3aed' }}
              />
            </div>

            {/* Slider 3: Hourly Rate in INR */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '6px' }}>
                <span style={{ color: '#475569' }}>Helpdesk Staffing Rate (INR):</span>
                <strong style={{ color: '#059669' }}>₹{hourlyRateINR.toLocaleString()}/hr</strong>
              </div>
              <input
                type="range"
                min="500"
                max="5000"
                step="100"
                value={hourlyRateINR}
                onChange={(e) => setHourlyRateINR(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#059669' }}
              />
            </div>

            {/* Slider 4: Adoption Rate */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '6px' }}>
                <span style={{ color: '#475569' }}>Target Self-Service Adoption (%):</span>
                <strong style={{ color: '#d97706' }}>{reductionTarget}% Reduction</strong>
              </div>
              <input
                type="range"
                min="50"
                max="95"
                step="5"
                value={reductionTarget}
                onChange={(e) => setReductionTarget(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#d97706' }}
              />
            </div>

          </div>

          <div style={{
            marginTop: '24px',
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '10px',
            padding: '16px',
            fontSize: '0.82rem',
            lineHeight: 1.6
          }}>
            <strong style={{ color: '#2563eb', display: 'block', marginBottom: '4px' }}>INR Computation Formula:</strong>
            <code style={{ fontFamily: 'var(--font-mono)', color: '#334155', display: 'block' }}>
              Annual Savings = 2,520 Hours &times; ₹{hourlyRateINR.toLocaleString()}/hr = <strong>{formatLakhs(annualFinancialSavingsINR)}</strong> ({formatINR(annualFinancialSavingsINR)})
            </code>
          </div>
        </div>

        {/* Live Authentication Load & Latency Chart */}
        <div className="glass-card" style={{ padding: '24px', background: '#ffffff' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a' }}>Peak Login Load & Response Latency</h3>
            <span className="badge badge-emerald">NFR-02 & NFR-04</span>
          </div>

          <div style={{ width: '100%', height: '260px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={THROUGHPUT_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorAuth" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorLat" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#7c3aed" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="time" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip 
                  contentStyle={{ background: '#ffffff', borderColor: '#cbd5e1', borderRadius: '8px', color: '#0f172a', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                />
                <Area type="monotone" dataKey="authentications" name="Authentications / sec" stroke="#2563eb" fillOpacity={1} fill="url(#colorAuth)" />
                <Area type="monotone" dataKey="latency" name="Latency (ms)" stroke="#7c3aed" fillOpacity={1} fill="url(#colorLat)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-around', fontSize: '0.8rem', color: '#64748b', marginTop: '12px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '10px', height: '10px', background: '#2563eb', borderRadius: '50%' }}></span>
              Peak Authentications: <strong>245 req/sec</strong> (Target &ge; 200)
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '10px', height: '10px', background: '#7c3aed', borderRadius: '50%' }}></span>
              95th %ile Latency: <strong>142 ms</strong> (Target &le; 500ms)
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}

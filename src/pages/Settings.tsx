import { useState } from 'react';

export default function Settings() {
  const [pollInterval, setPollInterval] = useState(30);
  const [theme, setTheme] = useState('dark');
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="page-content">
      <header className="page-header animate-fade-in">
        <div>
          <h1>Einstellungen</h1>
          <p className="text-secondary">Dashboard- und Integrations-Konfiguration</p>
        </div>
      </header>

      <div className="settings-layout">
        {/* Appearance */}
        <section className="glass-card-static settings-section animate-fade-in-up delay-1">
          <h2 className="section-title">Darstellung</h2>
          <div className="setting-row">
            <div>
              <div className="setting-label">Theme</div>
              <div className="setting-desc text-muted">Aktuell nur Dark-Mode verfügbar</div>
            </div>
            <select className="setting-select" value={theme} onChange={e => setTheme(e.target.value)}>
              <option value="dark">Dark (Glassmorphism)</option>
            </select>
          </div>
          <div className="setting-row">
            <div>
              <div className="setting-label">Benachrichtigungen</div>
              <div className="setting-desc text-muted">Status-Meldungen im Dashboard</div>
            </div>
            <button
              className={`toggle ${notifications ? 'active' : ''}`}
              onClick={() => setNotifications(!notifications)}
            >
              <span className="toggle-knob" />
            </button>
          </div>
        </section>

        {/* Data / Performance */}
        <section className="glass-card-static settings-section animate-fade-in-up delay-2">
          <h2 className="section-title">Daten & Performance</h2>
          <div className="setting-row">
            <div>
              <div className="setting-label">Polling-Intervall</div>
              <div className="setting-desc text-muted">Wie oft UniFi / HA abgefragt werden (Sekunden)</div>
            </div>
            <div className="setting-control">
              <input
                type="range"
                min={10}
                max={120}
                step={5}
                value={pollInterval}
                onChange={e => setPollInterval(Number(e.target.value))}
                className="setting-range"
              />
              <span className="range-value">{pollInterval}s</span>
            </div>
          </div>
          <div className="setting-row">
            <div>
              <div className="setting-label">Cache TTL</div>
              <div className="setting-desc text-muted">Zwischenspeicherung von API-Antworten</div>
            </div>
            <span className="text-secondary" style={{ fontSize: '0.875rem' }}>20 Sekunden</span>
          </div>
        </section>

        {/* Integrations (read-only hints) */}
        <section className="glass-card-static settings-section animate-fade-in-up delay-3">
          <h2 className="section-title">Integrationen</h2>
          <div className="integration-row">
            <div className="int-status"><span className="status-dot online" /></div>
            <div className="int-info">
              <div className="setting-label">UniFi Dream Machine</div>
              <div className="setting-desc text-muted">https://192.168.1.1 · Site: default</div>
            </div>
            <span className="int-badge connected">verbunden</span>
          </div>
          <div className="integration-row">
            <div className="int-status"><span className="status-dot online" /></div>
            <div className="int-info">
              <div className="setting-label">Home Assistant</div>
              <div className="setting-desc text-muted">http://192.168.1.50:8123</div>
            </div>
            <span className="int-badge connected">verbunden</span>
          </div>
          <p className="settings-hint text-muted">
            API-Zugangsdaten werden nur im Backend gespeichert und sind hier nicht sichtbar.
          </p>
        </section>
      </div>

      <style>{`
        .page-content { padding: 28px 32px; height: 100%; overflow-y: auto; }
        .page-header { margin-bottom: 28px; }
        .page-header h1 { font-size: 1.6rem; font-weight: 600; letter-spacing: -0.02em; margin-bottom: 4px; }
        .page-header p { font-size: 0.875rem; }

        .settings-layout {
          display: flex; flex-direction: column; gap: 16px; max-width: 720px;
        }
        .settings-section { padding: 20px 22px; }
        .section-title {
          font-size: 0.9rem; font-weight: 560; color: var(--text-secondary); margin-bottom: 16px;
        }

        .setting-row {
          display: flex; align-items: center; justify-content: space-between;
          gap: 16px; padding: 12px 0;
          border-bottom: 1px solid rgba(148,163,184,0.08);
        }
        .setting-row:last-child { border-bottom: none; }
        .setting-label { font-size: 0.9rem; font-weight: 530; margin-bottom: 2px; }
        .setting-desc { font-size: 0.75rem; }

        .setting-select {
          padding: 8px 12px; border-radius: 8px; border: 1px solid var(--border-glass);
          background: rgba(10,14,23,0.5); color: var(--text-primary);
          font-family: inherit; font-size: 0.85rem; outline: none;
        }

        .setting-control { display: flex; align-items: center; gap: 10px; }
        .setting-range {
          width: 120px; accent-color: var(--neon-blue);
        }
        .range-value {
          font-size: 0.85rem; font-weight: 560; min-width: 36px; text-align: right;
        }

        .toggle {
          width: 44px; height: 24px; border-radius: 12px; border: none;
          background: rgba(148,163,184,0.25); cursor: pointer; position: relative;
          transition: background 0.2s; padding: 0; flex-shrink: 0;
        }
        .toggle.active {
          background: var(--turquoise);
          box-shadow: 0 0 10px var(--turquoise-glow);
        }
        .toggle-knob {
          position: absolute; top: 3px; left: 3px; width: 18px; height: 18px;
          border-radius: 50%; background: white; transition: transform 0.2s var(--ease);
        }
        .toggle.active .toggle-knob { transform: translateX(20px); }

        .integration-row {
          display: flex; align-items: center; gap: 12px;
          padding: 12px 0; border-bottom: 1px solid rgba(148,163,184,0.08);
        }
        .integration-row:last-of-type { border-bottom: none; }
        .int-info { flex: 1; min-width: 0; }
        .int-badge {
          font-size: 0.7rem; font-weight: 560; padding: 3px 8px; border-radius: 6px;
          text-transform: uppercase; letter-spacing: 0.03em;
        }
        .int-badge.connected {
          background: rgba(34, 197, 94, 0.12); color: var(--green);
        }
        .settings-hint {
          font-size: 0.75rem; margin-top: 12px; line-height: 1.5;
        }
      `}</style>
    </div>
  );
}

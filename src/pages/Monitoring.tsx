import { systemStatus } from '../data/mockData';

const services = [
  { name: 'UniFi Controller', status: 'online', latency: '4 ms', uptime: '14d 7h' },
  { name: 'Home Assistant', status: 'online', latency: '12 ms', uptime: '21d 3h' },
  { name: 'Nginx', status: 'online', latency: '1 ms', uptime: '21d 3h' },
  { name: 'Dashboard Backend', status: 'online', latency: '2 ms', uptime: '2d 8h' },
  { name: 'DNS (Pi-hole)', status: 'warning', latency: '8 ms', uptime: '12d 1h' },
  { name: 'MQTT Broker', status: 'online', latency: '3 ms', uptime: '21d 3h' },
];

const alerts = [
  { level: 'warning', text: 'Pi-hole: Hohe Query-Last in den letzten 15 Min', time: 'vor 8 Min' },
  { level: 'info', text: 'UDM Firmware-Check erfolgreich', time: 'vor 2 Std' },
  { level: 'info', text: 'Backup der Dashboard-DB erstellt', time: 'heute 03:00' },
];

export default function Monitoring() {
  const pi = systemStatus.pi;
  const udm = systemStatus.udm;

  return (
    <div className="page-content">
      <header className="page-header animate-fade-in">
        <div>
          <h1>Monitoring</h1>
          <p className="text-secondary">Live-Status aller Dienste und Health-Checks</p>
        </div>
        <div className="header-badge">
          <span className="status-dot online" />
          <span>5/6 Dienste online</span>
        </div>
      </header>

      {/* Quick health */}
      <div className="health-row animate-fade-in-up delay-1">
        <div className="glass-card health-card">
          <div className="health-value text-green">{pi.cpu}%</div>
          <div className="health-label">Pi CPU</div>
        </div>
        <div className="glass-card health-card">
          <div className="health-value text-violet">{pi.ram}%</div>
          <div className="health-label">Pi RAM</div>
        </div>
        <div className="glass-card health-card">
          <div className="health-value text-orange">{pi.temp}°C</div>
          <div className="health-label">Pi Temp</div>
        </div>
        <div className="glass-card health-card">
          <div className="health-value text-blue">{udm.cpu}%</div>
          <div className="health-label">UDM CPU</div>
        </div>
        <div className="glass-card health-card">
          <div className="health-value text-turquoise">{systemStatus.internet.ping} ms</div>
          <div className="health-label">Ping</div>
        </div>
      </div>

      <div className="monitor-grid">
        {/* Services */}
        <section className="animate-fade-in-up delay-2">
          <h2 className="section-title">Dienste</h2>
          <div className="service-list">
            {services.map((s, i) => (
              <div key={s.name} className="glass-card service-row" style={{ animationDelay: `${0.1 + i * 0.04}s` }}>
                <span className={`status-dot ${s.status === 'online' ? 'online' : s.status === 'warning' ? 'warning' : 'offline'}`} />
                <div className="service-info">
                  <div className="service-name">{s.name}</div>
                  <div className="service-meta text-muted">Uptime {s.uptime}</div>
                </div>
                <div className="service-latency">{s.latency}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Alerts */}
        <section className="animate-fade-in-up delay-3">
          <h2 className="section-title">Meldungen</h2>
          <div className="alert-list">
            {alerts.map((a, i) => (
              <div key={i} className={`glass-card alert-row alert-${a.level}`}>
                <div className="alert-text">{a.text}</div>
                <div className="alert-time text-muted">{a.time}</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <style>{`
        .page-content { padding: 28px 32px; height: 100%; overflow-y: auto; }
        .page-header {
          display: flex; align-items: flex-start; justify-content: space-between;
          margin-bottom: 28px; flex-wrap: wrap; gap: 12px;
        }
        .page-header h1 { font-size: 1.6rem; font-weight: 600; letter-spacing: -0.02em; margin-bottom: 4px; }
        .page-header p { font-size: 0.875rem; }
        .header-badge {
          display: flex; align-items: center; gap: 8px; padding: 8px 14px;
          border-radius: 20px; background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.2); font-size: 0.8rem;
          color: var(--green); font-weight: 500;
        }

        .health-row {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 12px; margin-bottom: 28px;
        }
        .health-card { padding: 16px; text-align: center; }
        .health-value { font-size: 1.5rem; font-weight: 600; letter-spacing: -0.02em; }
        .health-label { font-size: 0.75rem; color: var(--text-muted); margin-top: 4px; }

        .monitor-grid {
          display: grid; grid-template-columns: 1.2fr 1fr; gap: 24px;
        }
        @media (max-width: 900px) { .monitor-grid { grid-template-columns: 1fr; } }

        .section-title {
          font-size: 0.95rem; font-weight: 560; color: var(--text-secondary); margin-bottom: 12px;
        }

        .service-list { display: flex; flex-direction: column; gap: 8px; }
        .service-row {
          padding: 12px 16px; display: flex; align-items: center; gap: 12px;
          animation: fadeInUp 0.35s var(--ease) both;
        }
        .service-info { flex: 1; min-width: 0; }
        .service-name { font-weight: 530; font-size: 0.9rem; }
        .service-meta { font-size: 0.75rem; }
        .service-latency {
          font-size: 0.8rem; font-weight: 500; color: var(--text-secondary);
          font-variant-numeric: tabular-nums;
        }

        .alert-list { display: flex; flex-direction: column; gap: 8px; }
        .alert-row { padding: 14px 16px; }
        .alert-row.alert-warning {
          border-color: rgba(249, 115, 22, 0.3);
          background: rgba(249, 115, 22, 0.06);
        }
        .alert-text { font-size: 0.875rem; margin-bottom: 4px; }
        .alert-time { font-size: 0.75rem; }
      `}</style>
    </div>
  );
}

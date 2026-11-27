import { systemStatus } from '../data/mockData';
import { Download, Upload, Wifi, Thermometer, HardDrive, Server, Cpu } from '../components/Icons';

function StatCard({
  title,
  children,
  delay = 0,
  status,
}: {
  title: string;
  children: React.ReactNode;
  delay?: number;
  status?: 'online' | 'offline' | 'warning';
}) {
  return (
    <div
      className="glass-card stat-card animate-fade-in-up"
      style={{ animationDelay: `${delay * 0.07}s` }}
    >
      <div className="stat-card-header">
        <h3>{title}</h3>
        {status && <span className={`status-dot ${status}`} />}
      </div>
      <div className="stat-card-body">{children}</div>
    </div>
  );
}

function Metric({
  label,
  value,
  unit,
  icon,
  color = 'blue',
}: {
  label: string;
  value: string | number;
  unit?: string;
  icon?: React.ReactNode;
  color?: string;
}) {
  return (
    <div className="metric">
      <div className="metric-label">
        {icon && <span className={`metric-icon text-${color}`}>{icon}</span>}
        {label}
      </div>
      <div className="metric-value">
        {value}
        {unit && <span className="metric-unit">{unit}</span>}
      </div>
    </div>
  );
}

function UsageBar({ label, value, color = 'blue' }: { label: string; value: number; color?: string }) {
  const barColor = value > 85 ? 'red' : value > 65 ? 'orange' : color;
  return (
    <div className="usage-row">
      <div className="usage-header">
        <span>{label}</span>
        <span className="usage-pct">{value}%</span>
      </div>
      <div className="progress-bar">
        <div className={`progress-bar-fill ${barColor}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

export default function Overview() {
  const s = systemStatus;

  return (
    <div className="page-content">
      <header className="page-header animate-fade-in">
        <div>
          <h1>Übersicht</h1>
          <p className="text-secondary">Zentrale Systemübersicht deines HomeLabs</p>
        </div>
        <div className="header-badge">
          <span className="status-dot online" />
          <span>Alle Systeme online</span>
        </div>
      </header>

      <div className="overview-grid">
        {/* Internet */}
        <StatCard title="Internet" status="online" delay={1}>
          <div className="metrics-row">
            <Metric label="Download" value={s.internet.download} unit=" Mbit/s" icon={<Download size={14} />} color="blue" />
            <Metric label="Upload" value={s.internet.upload} unit=" Mbit/s" icon={<Upload size={14} />} color="turquoise" />
          </div>
          <div className="metrics-row" style={{ marginTop: 12 }}>
            <Metric label="Ping" value={s.internet.ping} unit=" ms" color="violet" />
            <Metric label="Qualität" value={s.internet.quality} unit="%" color="green" />
          </div>
        </StatCard>

        {/* UniFi Dream Machine */}
        <StatCard title="UniFi Dream Machine" status="online" delay={2}>
          <UsageBar label="CPU" value={s.udm.cpu} />
          <UsageBar label="RAM" value={s.udm.ram} />
          <div className="metrics-row" style={{ marginTop: 12 }}>
            <Metric label="Temperatur" value={s.udm.temp} unit="°C" icon={<Thermometer size={14} />} color="orange" />
            <Metric label="Uptime" value={s.udm.uptime} color="turquoise" />
          </div>
        </StatCard>

        {/* Netzwerk */}
        <StatCard title="Netzwerkgeräte" status="online" delay={3}>
          <div className="metrics-row">
            <Metric label="Clients" value={s.network.clients} color="blue" />
            <Metric label="Access Points" value={s.network.aps} color="turquoise" />
          </div>
          <div className="metrics-row" style={{ marginTop: 12 }}>
            <Metric label="Switches" value={s.network.switches} color="violet" />
            <Metric label="PoE Last" value={s.network.poeUsage} unit="%" color="orange" />
          </div>
        </StatCard>

        {/* Home Assistant */}
        <StatCard title="Home Assistant" status="online" delay={4}>
          <div className="metrics-row">
            <Metric label="Geräte" value={s.homeAssistant.devices} color="blue" />
            <Metric label="Automationen" value={s.homeAssistant.automations} color="violet" />
          </div>
          <div className="metrics-row" style={{ marginTop: 12 }}>
            <Metric label="Sensoren" value={s.homeAssistant.sensors} color="turquoise" />
            <Metric label="Status" value="Verbunden" color="green" />
          </div>
        </StatCard>

        {/* Raspberry Pi */}
        <StatCard title="Raspberry Pi" status="online" delay={5}>
          <UsageBar label="CPU" value={s.pi.cpu} />
          <UsageBar label="RAM" value={s.pi.ram} color="violet" />
          <UsageBar label="Speicher" value={s.pi.disk} color="turquoise" />
          <div className="metrics-row" style={{ marginTop: 12 }}>
            <Metric label="Temp" value={s.pi.temp} unit="°C" icon={<Thermometer size={14} />} color="orange" />
            <Metric label="Uptime" value={s.pi.uptime} icon={<Server size={14} />} color="green" />
          </div>
        </StatCard>

        {/* Quick Traffic */}
        <StatCard title="Live Traffic" delay={6}>
          <div className="traffic-visual">
            <div className="traffic-bar-group">
              <div className="traffic-label"><Download size={14} /> Down</div>
              <div className="traffic-track">
                <div className="traffic-fill down" style={{ width: '72%' }} />
              </div>
              <div className="traffic-value text-blue">{s.internet.download} Mbit/s</div>
            </div>
            <div className="traffic-bar-group">
              <div className="traffic-label"><Upload size={14} /> Up</div>
              <div className="traffic-track">
                <div className="traffic-fill up" style={{ width: '28%' }} />
              </div>
              <div className="traffic-value text-turquoise">{s.internet.upload} Mbit/s</div>
            </div>
          </div>
        </StatCard>
      </div>

      <style>{`
        .page-content {
          padding: 28px 32px;
          height: 100%;
          overflow-y: auto;
        }

        .page-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 28px;
        }

        .page-header h1 {
          font-size: 1.6rem;
          font-weight: 600;
          letter-spacing: -0.02em;
          margin-bottom: 4px;
        }

        .page-header p {
          font-size: 0.875rem;
        }

        .header-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: 20px;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.2);
          font-size: 0.8rem;
          color: var(--green);
          font-weight: 500;
        }

        .overview-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 18px;
        }

        .stat-card {
          padding: 20px;
        }

        .stat-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .stat-card-header h3 {
          font-size: 0.9rem;
          font-weight: 560;
          color: var(--text-secondary);
          letter-spacing: 0.01em;
        }

        .metrics-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .metric {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .metric-label {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .metric-icon {
          display: flex;
        }

        .metric-value {
          font-size: 1.15rem;
          font-weight: 600;
          letter-spacing: -0.02em;
        }

        .metric-unit {
          font-size: 0.8rem;
          font-weight: 400;
          color: var(--text-muted);
          margin-left: 2px;
        }

        .usage-row {
          margin-bottom: 10px;
        }

        .usage-header {
          display: flex;
          justify-content: space-between;
          font-size: 0.78rem;
          color: var(--text-secondary);
          margin-bottom: 5px;
        }

        .usage-pct {
          font-weight: 500;
          color: var(--text-primary);
        }

        .traffic-visual {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .traffic-bar-group {
          display: grid;
          grid-template-columns: 60px 1fr 90px;
          align-items: center;
          gap: 10px;
        }

        .traffic-label {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .traffic-track {
          height: 10px;
          background: rgba(148, 163, 184, 0.12);
          border-radius: 5px;
          overflow: hidden;
        }

        .traffic-fill {
          height: 100%;
          border-radius: 5px;
          transition: width 1s var(--ease);
        }

        .traffic-fill.down {
          background: linear-gradient(90deg, var(--neon-blue), var(--turquoise));
          box-shadow: 0 0 10px var(--neon-blue-glow);
        }

        .traffic-fill.up {
          background: linear-gradient(90deg, #0891b2, var(--turquoise));
          box-shadow: 0 0 10px var(--turquoise-glow);
        }

        .traffic-value {
          font-size: 0.8rem;
          font-weight: 560;
          text-align: right;
        }
      `}</style>
    </div>
  );
}

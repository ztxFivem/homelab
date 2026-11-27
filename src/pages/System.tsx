import { systemStatus } from '../data/mockData';
import { Cpu, HardDrive, Thermometer, Server } from '../components/Icons';

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

export default function System() {
  const pi = systemStatus.pi;
  const udm = systemStatus.udm;

  return (
    <div className="page-content">
      <header className="page-header animate-fade-in">
        <div>
          <h1>System</h1>
          <p className="text-secondary">Raspberry Pi & UniFi Hardware-Status</p>
        </div>
      </header>

      <div className="system-grid">
        {/* Raspberry Pi */}
        <div className="glass-card system-card animate-fade-in-up delay-1">
          <div className="system-card-header">
            <div className="system-icon"><Server size={22} /></div>
            <div>
              <h2>Raspberry Pi 3 B</h2>
              <span className="status-line"><span className="status-dot online" /> Online · {pi.uptime}</span>
            </div>
          </div>
          <UsageBar label="CPU Auslastung" value={pi.cpu} />
          <UsageBar label="RAM" value={pi.ram} color="violet" />
          <UsageBar label="Speicherplatz" value={pi.disk} color="turquoise" />
          <div className="metric-grid">
            <div className="mini-metric">
              <Thermometer size={16} className="text-orange" />
              <div>
                <div className="mini-label">Temperatur</div>
                <div className="mini-value">{pi.temp}°C</div>
              </div>
            </div>
            <div className="mini-metric">
              <HardDrive size={16} className="text-turquoise" />
              <div>
                <div className="mini-label">Festplatte</div>
                <div className="mini-value">{pi.disk}% belegt</div>
              </div>
            </div>
          </div>
        </div>

        {/* UDM */}
        <div className="glass-card system-card animate-fade-in-up delay-2">
          <div className="system-card-header">
            <div className="system-icon blue"><Cpu size={22} /></div>
            <div>
              <h2>UniFi Dream Machine</h2>
              <span className="status-line"><span className="status-dot online" /> Online · {udm.uptime}</span>
            </div>
          </div>
          <UsageBar label="CPU Auslastung" value={udm.cpu} />
          <UsageBar label="RAM" value={udm.ram} color="violet" />
          <div className="metric-grid">
            <div className="mini-metric">
              <Thermometer size={16} className="text-orange" />
              <div>
                <div className="mini-label">Temperatur</div>
                <div className="mini-value">{udm.temp}°C</div>
              </div>
            </div>
            <div className="mini-metric">
              <Server size={16} className="text-green" />
              <div>
                <div className="mini-label">Uptime</div>
                <div className="mini-value">{udm.uptime}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .page-content { padding: 28px 32px; height: 100%; overflow-y: auto; }
        .page-header { margin-bottom: 28px; }
        .page-header h1 { font-size: 1.6rem; font-weight: 600; letter-spacing: -0.02em; margin-bottom: 4px; }
        .page-header p { font-size: 0.875rem; }

        .system-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 18px;
        }
        .system-card { padding: 24px; }
        .system-card-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 22px;
        }
        .system-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(34, 197, 94, 0.12);
          color: var(--green);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .system-icon.blue {
          background: rgba(59, 130, 246, 0.12);
          color: var(--neon-blue);
        }
        .system-card-header h2 {
          font-size: 1.05rem;
          font-weight: 600;
          margin-bottom: 4px;
        }
        .status-line {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .usage-row { margin-bottom: 14px; }
        .usage-header {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          color: var(--text-secondary);
          margin-bottom: 6px;
        }
        .usage-pct { font-weight: 560; color: var(--text-primary); }

        .metric-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-top: 18px;
          padding-top: 16px;
          border-top: 1px solid var(--border-glass);
        }
        .mini-metric {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .mini-label { font-size: 0.72rem; color: var(--text-muted); }
        .mini-value { font-size: 0.95rem; font-weight: 560; }
      `}</style>
    </div>
  );
}

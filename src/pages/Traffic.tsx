import { systemStatus, trafficHistory } from '../data/mockData';
import { Download, Upload } from '../components/Icons';

export default function Traffic() {
  const maxDown = Math.max(...trafficHistory.download);
  const maxUp = Math.max(...trafficHistory.upload);

  return (
    <div className="page-content">
      <header className="page-header animate-fade-in">
        <div>
          <h1>Traffic</h1>
          <p className="text-secondary">Live- und historische Bandbreitennutzung</p>
        </div>
        <div className="range-tabs">
          {['1 Std', '24 Std', '7 Tage', '30 Tage'].map((r, i) => (
            <button key={r} className={`range-tab ${i === 0 ? 'active' : ''}`}>{r}</button>
          ))}
        </div>
      </header>

      {/* Live numbers */}
      <div className="live-row animate-fade-in-up delay-1">
        <div className="glass-card live-card">
          <div className="live-icon text-blue"><Download size={22} /></div>
          <div>
            <div className="live-label">Download</div>
            <div className="live-value text-blue">{systemStatus.internet.download} <span>Mbit/s</span></div>
          </div>
        </div>
        <div className="glass-card live-card">
          <div className="live-icon text-turquoise"><Upload size={22} /></div>
          <div>
            <div className="live-label">Upload</div>
            <div className="live-value text-turquoise">{systemStatus.internet.upload} <span>Mbit/s</span></div>
          </div>
        </div>
        <div className="glass-card live-card">
          <div className="live-icon text-violet">↓↑</div>
          <div>
            <div className="live-label">Gesamt heute</div>
            <div className="live-value">12.4 <span>GB</span></div>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="glass-card-static chart-card animate-fade-in-up delay-2">
        <h2 className="chart-title">Bandbreite (letzte 24 Stunden)</h2>
        <div className="chart-area">
          <div className="chart-bars">
            {trafficHistory.labels.map((label, i) => (
              <div key={label} className="bar-group">
                <div className="bars">
                  <div
                    className="bar down"
                    style={{ height: `${(trafficHistory.download[i] / maxDown) * 100}%` }}
                    title={`Down: ${trafficHistory.download[i]} Mbit/s`}
                  />
                  <div
                    className="bar up"
                    style={{ height: `${(trafficHistory.upload[i] / maxUp) * 100}%` }}
                    title={`Up: ${trafficHistory.upload[i]} Mbit/s`}
                  />
                </div>
                <span className="bar-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="chart-legend">
          <span className="legend-item"><span className="legend-dot down" /> Download</span>
          <span className="legend-item"><span className="legend-dot up" /> Upload</span>
        </div>
      </div>

      <style>{`
        .page-content { padding: 28px 32px; height: 100%; overflow-y: auto; }
        .page-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 28px;
          flex-wrap: wrap;
          gap: 12px;
        }
        .page-header h1 { font-size: 1.6rem; font-weight: 600; letter-spacing: -0.02em; margin-bottom: 4px; }
        .page-header p { font-size: 0.875rem; }

        .range-tabs {
          display: flex;
          gap: 4px;
          background: rgba(148,163,184,0.08);
          padding: 4px;
          border-radius: 10px;
        }
        .range-tab {
          padding: 6px 14px;
          border: none;
          border-radius: 8px;
          background: transparent;
          color: var(--text-muted);
          font-family: inherit;
          font-size: 0.8rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }
        .range-tab.active {
          background: rgba(59,130,246,0.2);
          color: var(--neon-blue);
        }
        .range-tab:hover:not(.active) {
          color: var(--text-primary);
        }

        .live-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 14px;
          margin-bottom: 20px;
        }
        .live-card {
          padding: 18px 20px;
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .live-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(59,130,246,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          flex-shrink: 0;
        }
        .live-label { font-size: 0.78rem; color: var(--text-muted); margin-bottom: 2px; }
        .live-value { font-size: 1.35rem; font-weight: 600; letter-spacing: -0.02em; }
        .live-value span { font-size: 0.8rem; font-weight: 400; color: var(--text-muted); }

        .chart-card { padding: 24px; }
        .chart-title {
          font-size: 0.9rem;
          font-weight: 560;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }
        .chart-area {
          height: 220px;
          display: flex;
          align-items: flex-end;
        }
        .chart-bars {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          width: 100%;
          height: 100%;
          gap: 8px;
        }
        .bar-group {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100%;
        }
        .bars {
          flex: 1;
          display: flex;
          align-items: flex-end;
          gap: 3px;
          width: 100%;
          justify-content: center;
        }
        .bar {
          width: 12px;
          border-radius: 4px 4px 0 0;
          min-height: 4px;
          transition: height 0.8s var(--ease);
        }
        .bar.down {
          background: linear-gradient(to top, var(--neon-blue), var(--turquoise));
          box-shadow: 0 0 8px var(--neon-blue-glow);
        }
        .bar.up {
          background: linear-gradient(to top, #0891b2, var(--turquoise));
          box-shadow: 0 0 6px var(--turquoise-glow);
        }
        .bar-label {
          font-size: 0.7rem;
          color: var(--text-muted);
          margin-top: 8px;
        }
        .chart-legend {
          display: flex;
          gap: 20px;
          margin-top: 16px;
          justify-content: center;
        }
        .legend-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          color: var(--text-secondary);
        }
        .legend-dot {
          width: 10px;
          height: 10px;
          border-radius: 3px;
        }
        .legend-dot.down { background: var(--neon-blue); }
        .legend-dot.up { background: var(--turquoise); }
      `}</style>
    </div>
  );
}

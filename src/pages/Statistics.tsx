const weeklyTraffic = [
  { day: 'Mo', down: 18.2, up: 3.1 },
  { day: 'Di', down: 22.4, up: 4.2 },
  { day: 'Mi', down: 15.8, up: 2.9 },
  { day: 'Do', down: 28.1, up: 5.4 },
  { day: 'Fr', down: 31.5, up: 6.1 },
  { day: 'Sa', down: 42.0, up: 7.8 },
  { day: 'So', down: 25.3, up: 4.5 },
];

const topClients = [
  { name: 'MacBook Pro', down: '8.4 GB', up: '1.2 GB', share: 28 },
  { name: 'PS5', down: '6.1 GB', up: '0.4 GB', share: 20 },
  { name: 'Samsung TV', down: '4.8 GB', up: '0.3 GB', share: 16 },
  { name: 'iPhone 15 Pro', down: '2.2 GB', up: '0.9 GB', share: 10 },
  { name: 'Andere', down: '7.9 GB', up: '2.1 GB', share: 26 },
];

export default function Statistics() {
  const maxDown = Math.max(...weeklyTraffic.map(d => d.down));

  return (
    <div className="page-content">
      <header className="page-header animate-fade-in">
        <div>
          <h1>Statistiken</h1>
          <p className="text-secondary">Langzeit-Auswertungen und Verbräuche</p>
        </div>
      </header>

      {/* Summary cards */}
      <div className="stat-summary animate-fade-in-up delay-1">
        <div className="glass-card summary-card">
          <div className="summary-label">Traffic diese Woche</div>
          <div className="summary-value">183.3 <span>GB</span></div>
        </div>
        <div className="glass-card summary-card">
          <div className="summary-label">Ø Download</div>
          <div className="summary-value text-blue">26.2 <span>GB/Tag</span></div>
        </div>
        <div className="glass-card summary-card">
          <div className="summary-label">Ø Upload</div>
          <div className="summary-value text-turquoise">4.9 <span>GB/Tag</span></div>
        </div>
        <div className="glass-card summary-card">
          <div className="summary-label">Peak Clients</div>
          <div className="summary-value text-violet">34</div>
        </div>
      </div>

      <div className="stats-grid">
        {/* Weekly chart */}
        <div className="glass-card-static chart-block animate-fade-in-up delay-2">
          <h2 className="section-title">Traffic pro Tag (GB)</h2>
          <div className="week-chart">
            {weeklyTraffic.map((d, i) => (
              <div key={d.day} className="week-bar-group">
                <div className="week-bars">
                  <div
                    className="week-bar down"
                    style={{ height: `${(d.down / maxDown) * 100}%` }}
                    title={`${d.down} GB`}
                  />
                </div>
                <span className="week-label">{d.day}</span>
              </div>
            ))}
          </div>
          <div className="chart-legend">
            <span className="legend-item"><span className="legend-dot down" /> Download (GB)</span>
          </div>
        </div>

        {/* Top clients */}
        <div className="glass-card-static chart-block animate-fade-in-up delay-3">
          <h2 className="section-title">Top Clients (diese Woche)</h2>
          <div className="top-list">
            {topClients.map((c, i) => (
              <div key={c.name} className="top-row">
                <div className="top-rank">{i + 1}</div>
                <div className="top-info">
                  <div className="top-name">{c.name}</div>
                  <div className="top-bar-track">
                    <div className="top-bar-fill" style={{ width: `${c.share}%` }} />
                  </div>
                </div>
                <div className="top-usage">
                  <div>{c.down}</div>
                  <div className="text-muted">↑ {c.up}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .page-content { padding: 28px 32px; height: 100%; overflow-y: auto; }
        .page-header { margin-bottom: 28px; }
        .page-header h1 { font-size: 1.6rem; font-weight: 600; letter-spacing: -0.02em; margin-bottom: 4px; }
        .page-header p { font-size: 0.875rem; }

        .stat-summary {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 12px; margin-bottom: 24px;
        }
        .summary-card { padding: 16px 18px; }
        .summary-label { font-size: 0.75rem; color: var(--text-muted); margin-bottom: 4px; }
        .summary-value { font-size: 1.35rem; font-weight: 600; letter-spacing: -0.02em; }
        .summary-value span { font-size: 0.8rem; font-weight: 400; color: var(--text-muted); }

        .stats-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 18px;
        }
        @media (max-width: 900px) { .stats-grid { grid-template-columns: 1fr; } }

        .chart-block { padding: 20px; }
        .section-title {
          font-size: 0.9rem; font-weight: 560; color: var(--text-secondary); margin-bottom: 18px;
        }

        .week-chart {
          display: flex; align-items: flex-end; justify-content: space-between;
          height: 180px; gap: 8px;
        }
        .week-bar-group {
          flex: 1; display: flex; flex-direction: column; align-items: center; height: 100%;
        }
        .week-bars {
          flex: 1; display: flex; align-items: flex-end; width: 100%; justify-content: center;
        }
        .week-bar {
          width: 70%; max-width: 36px; border-radius: 6px 6px 0 0; min-height: 4px;
          transition: height 0.8s var(--ease);
        }
        .week-bar.down {
          background: linear-gradient(to top, var(--neon-blue), var(--turquoise));
          box-shadow: 0 0 10px var(--neon-blue-glow);
        }
        .week-label { font-size: 0.75rem; color: var(--text-muted); margin-top: 8px; }

        .chart-legend {
          display: flex; gap: 16px; margin-top: 14px; justify-content: center;
        }
        .legend-item {
          display: flex; align-items: center; gap: 6px;
          font-size: 0.8rem; color: var(--text-secondary);
        }
        .legend-dot {
          width: 10px; height: 10px; border-radius: 3px;
        }
        .legend-dot.down { background: var(--neon-blue); }

        .top-list { display: flex; flex-direction: column; gap: 14px; }
        .top-row { display: flex; align-items: center; gap: 12px; }
        .top-rank {
          width: 24px; height: 24px; border-radius: 6px;
          background: rgba(59,130,246,0.12); color: var(--neon-blue);
          display: flex; align-items: center; justify-content: center;
          font-size: 0.75rem; font-weight: 600; flex-shrink: 0;
        }
        .top-info { flex: 1; min-width: 0; }
        .top-name { font-size: 0.875rem; font-weight: 530; margin-bottom: 4px; }
        .top-bar-track {
          height: 6px; background: rgba(148,163,184,0.12); border-radius: 3px; overflow: hidden;
        }
        .top-bar-fill {
          height: 100%; border-radius: 3px;
          background: linear-gradient(90deg, var(--neon-blue), var(--turquoise));
        }
        .top-usage {
          text-align: right; font-size: 0.8rem; font-weight: 500;
          flex-shrink: 0; min-width: 70px;
        }
      `}</style>
    </div>
  );
}

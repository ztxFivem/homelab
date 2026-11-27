import { networkDevices, clients } from '../data/mockData';

export default function Topology() {
  const gateway = networkDevices.find(d => d.type === 'gateway');
  const switches = networkDevices.filter(d => d.type === 'switch');
  const aps = networkDevices.filter(d => d.type === 'ap');
  const onlineClients = clients.filter(c => c.status === 'online');

  return (
    <div className="page-content">
      <header className="page-header animate-fade-in">
        <div>
          <h1>Topologie</h1>
          <p className="text-secondary">Grafische Netzwerkstruktur</p>
        </div>
      </header>

      <div className="topo-canvas glass-card-static animate-fade-in-up">
        {/* Internet */}
        <div className="topo-level">
          <div className="topo-node internet">
            <div className="node-icon">🌐</div>
            <div className="node-label">Internet</div>
            <span className="status-dot online" />
          </div>
        </div>

        <div className="topo-line" />

        {/* Gateway */}
        <div className="topo-level">
          <div className="topo-node gateway glow-blue">
            <div className="node-icon">🛡️</div>
            <div className="node-info">
              <div className="node-label">{gateway?.name || 'UDM'}</div>
              <div className="node-sub">{gateway?.ip}</div>
            </div>
            <span className="status-dot online" />
          </div>
        </div>

        <div className="topo-line" />

        {/* Switches */}
        <div className="topo-level multi">
          {switches.map((s, i) => (
            <div key={s.id} className="topo-node switch" style={{ animationDelay: `${0.15 + i * 0.08}s` }}>
              <div className="node-icon">🔌</div>
              <div className="node-info">
                <div className="node-label">{s.name}</div>
                <div className="node-sub">{s.ports} Ports · PoE {s.poe}W</div>
              </div>
              <span className={`status-dot ${s.status}`} />
            </div>
          ))}
        </div>

        <div className="topo-line" />

        {/* Access Points */}
        <div className="topo-level multi">
          {aps.map((ap, i) => (
            <div key={ap.id} className="topo-node ap" style={{ animationDelay: `${0.25 + i * 0.08}s` }}>
              <div className="node-icon">📡</div>
              <div className="node-info">
                <div className="node-label">{ap.name}</div>
                <div className="node-sub">{ap.clients} Clients · {ap.signal} dBm</div>
              </div>
              <span className={`status-dot ${ap.status}`} />
            </div>
          ))}
        </div>

        <div className="topo-line" />

        {/* Clients summary */}
        <div className="topo-level">
          <div className="topo-node clients">
            <div className="node-icon">💻</div>
            <div className="node-info">
              <div className="node-label">{onlineClients.length} Clients online</div>
              <div className="node-sub">{clients.filter(c => c.status === 'offline').length} offline</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .page-content { padding: 28px 32px; height: 100%; overflow-y: auto; }
        .page-header { margin-bottom: 28px; }
        .page-header h1 { font-size: 1.6rem; font-weight: 600; letter-spacing: -0.02em; margin-bottom: 4px; }
        .page-header p { font-size: 0.875rem; }

        .topo-canvas {
          padding: 40px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
          min-height: 520px;
        }

        .topo-level {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
          width: 100%;
        }

        .topo-line {
          width: 2px;
          height: 28px;
          background: linear-gradient(to bottom, var(--neon-blue), rgba(59,130,246,0.2));
          margin: 4px 0;
          border-radius: 1px;
          box-shadow: 0 0 8px var(--neon-blue-glow);
        }

        .topo-node {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 18px;
          border-radius: 14px;
          background: rgba(20, 28, 43, 0.7);
          border: 1px solid var(--border-glass);
          position: relative;
          animation: fadeInUp 0.45s var(--ease) both;
          transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
          cursor: default;
        }

        .topo-node:hover {
          border-color: var(--border-glow);
          box-shadow: 0 0 20px rgba(59,130,246,0.12);
          transform: translateY(-2px);
        }

        .topo-node.gateway {
          border-color: rgba(59,130,246,0.35);
        }

        .topo-node.internet {
          background: rgba(34, 211, 238, 0.08);
          border-color: rgba(34, 211, 238, 0.25);
        }

        .node-icon {
          font-size: 1.4rem;
          flex-shrink: 0;
        }

        .node-info {
          min-width: 0;
        }

        .node-label {
          font-weight: 560;
          font-size: 0.9rem;
          white-space: nowrap;
        }

        .node-sub {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: 1px;
        }

        .topo-node .status-dot {
          position: absolute;
          top: 10px;
          right: 10px;
        }
      `}</style>
    </div>
  );
}

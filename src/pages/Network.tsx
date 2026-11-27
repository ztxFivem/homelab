import { networkDevices, clients } from '../data/mockData';

export default function Network() {
  return (
    <div className="page-content">
      <header className="page-header animate-fade-in">
        <div>
          <h1>Netzwerk</h1>
          <p className="text-secondary">UniFi Geräte und verbundene Clients</p>
        </div>
      </header>

      <section className="section animate-fade-in-up delay-1">
        <h2 className="section-title">Infrastruktur</h2>
        <div className="device-grid">
          {networkDevices.map((d, i) => (
            <div key={d.id} className="glass-card device-card" style={{ animationDelay: `${0.05 + i * 0.05}s` }}>
              <div className="device-top">
                <span className={`status-dot ${d.status}`} />
                <span className="device-type">{d.type}</span>
              </div>
              <h3 className="device-name">{d.name}</h3>
              <p className="device-ip text-muted">{d.ip}</p>
              <div className="device-meta">
                {d.clients !== undefined && <span>{d.clients} Clients</span>}
                {d.ports !== undefined && <span>{d.ports} Ports</span>}
                {d.poe !== undefined && <span>PoE {d.poe}W</span>}
                {d.signal !== undefined && <span>{d.signal} dBm</span>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section animate-fade-in-up delay-3">
        <h2 className="section-title">Verbundene Clients</h2>
        <div className="glass-card-static table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Status</th>
                <th>Name</th>
                <th>Typ</th>
                <th>IP</th>
                <th>AP / Verbindung</th>
                <th>Signal</th>
              </tr>
            </thead>
            <tbody>
              {clients.map(c => (
                <tr key={c.id}>
                  <td><span className={`status-dot ${c.status}`} /></td>
                  <td className="font-medium">{c.name}</td>
                  <td className="text-secondary">{c.type}</td>
                  <td className="text-muted">{c.ip}</td>
                  <td className="text-secondary">{c.ap || 'Kabel'}</td>
                  <td>{c.signal ? `${c.signal} dBm` : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <style>{`
        .page-content { padding: 28px 32px; height: 100%; overflow-y: auto; }
        .page-header { margin-bottom: 28px; }
        .page-header h1 { font-size: 1.6rem; font-weight: 600; letter-spacing: -0.02em; margin-bottom: 4px; }
        .page-header p { font-size: 0.875rem; }
        .section { margin-bottom: 32px; }
        .section-title { font-size: 0.95rem; font-weight: 560; color: var(--text-secondary); margin-bottom: 14px; }
        .device-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 14px;
        }
        .device-card {
          padding: 16px;
          animation: fadeInUp 0.4s var(--ease) both;
        }
        .device-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }
        .device-type {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--text-muted);
          background: rgba(148,163,184,0.1);
          padding: 2px 8px;
          border-radius: 4px;
        }
        .device-name { font-size: 0.95rem; font-weight: 560; margin-bottom: 2px; }
        .device-ip { font-size: 0.8rem; margin-bottom: 10px; }
        .device-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          font-size: 0.75rem;
          color: var(--text-muted);
        }
        .table-wrap { overflow-x: auto; padding: 0; }
        .data-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.85rem;
        }
        .data-table th {
          text-align: left;
          padding: 12px 16px;
          color: var(--text-muted);
          font-weight: 500;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          border-bottom: 1px solid var(--border-glass);
        }
        .data-table td {
          padding: 12px 16px;
          border-bottom: 1px solid rgba(148,163,184,0.06);
        }
        .data-table tr:last-child td { border-bottom: none; }
        .data-table tr:hover td { background: rgba(59,130,246,0.04); }
        .font-medium { font-weight: 500; }
      `}</style>
    </div>
  );
}

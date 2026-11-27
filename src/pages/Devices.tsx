import { networkDevices, clients } from '../data/mockData';

export default function Devices() {
  return (
    <div className="page-content">
      <header className="page-header animate-fade-in">
        <div>
          <h1>Geräte</h1>
          <p className="text-secondary">Alle Netzwerk- und Client-Geräte</p>
        </div>
      </header>

      <section className="section animate-fade-in-up delay-1">
        <h2 className="section-title">Infrastruktur ({networkDevices.length})</h2>
        <div className="glass-card-static table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Status</th>
                <th>Name</th>
                <th>Typ</th>
                <th>IP</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {networkDevices.map(d => (
                <tr key={d.id}>
                  <td><span className={`status-dot ${d.status}`} /></td>
                  <td className="font-medium">{d.name}</td>
                  <td className="text-secondary">{d.type}</td>
                  <td className="text-muted">{d.ip}</td>
                  <td className="text-secondary">
                    {d.clients != null && `${d.clients} Clients`}
                    {d.ports != null && `${d.ports} Ports`}
                    {d.poe != null && ` · PoE ${d.poe}W`}
                    {d.signal != null && ` · ${d.signal} dBm`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section animate-fade-in-up delay-2">
        <h2 className="section-title">Clients ({clients.length})</h2>
        <div className="glass-card-static table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Status</th>
                <th>Name</th>
                <th>Typ</th>
                <th>IP</th>
                <th>MAC</th>
                <th>Verbindung</th>
              </tr>
            </thead>
            <tbody>
              {clients.map(c => (
                <tr key={c.id}>
                  <td><span className={`status-dot ${c.status}`} /></td>
                  <td className="font-medium">{c.name}</td>
                  <td className="text-secondary">{c.type}</td>
                  <td className="text-muted">{c.ip}</td>
                  <td className="text-muted" style={{ fontFamily: 'monospace', fontSize: '0.8rem' }}>{c.mac}</td>
                  <td className="text-secondary">{c.ap || 'Kabel'}</td>
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
        .table-wrap { overflow-x: auto; padding: 0; }
        .data-table { width: 100%; border-collapse: collapse; font-size: 0.85rem; }
        .data-table th {
          text-align: left; padding: 12px 16px; color: var(--text-muted); font-weight: 500;
          font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.03em;
          border-bottom: 1px solid var(--border-glass);
        }
        .data-table td { padding: 12px 16px; border-bottom: 1px solid rgba(148,163,184,0.06); }
        .data-table tr:last-child td { border-bottom: none; }
        .data-table tr:hover td { background: rgba(59,130,246,0.04); }
        .font-medium { font-weight: 500; }
      `}</style>
    </div>
  );
}

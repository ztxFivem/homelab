const users = [
  { id: 1, name: 'admin', display: 'Administrator', role: 'Admin', active: true, lastLogin: 'gerade eben' },
  { id: 2, name: 'partner', display: 'Partner', role: 'Benutzer', active: true, lastLogin: 'vor 2 Std' },
  { id: 3, name: 'kind1', display: 'Kind 1', role: 'Benutzer', active: true, lastLogin: 'gestern' },
  { id: 4, name: 'gast', display: 'Gast', role: 'Benutzer', active: false, lastLogin: 'vor 12 Tagen' },
];

const auditLog = [
  { user: 'admin', action: 'Benutzer „kind1“ Rechte geändert', time: 'vor 15 Min' },
  { user: 'admin', action: 'Login erfolgreich', time: 'vor 22 Min' },
  { user: 'partner', action: 'Login erfolgreich', time: 'vor 2 Std' },
  { user: 'admin', action: 'Systemeinstellungen gespeichert', time: 'gestern 18:40' },
  { user: 'kind1', action: 'Login erfolgreich', time: 'gestern 16:12' },
];

export default function Admin() {
  return (
    <div className="page-content">
      <header className="page-header animate-fade-in">
        <div>
          <h1>Administration</h1>
          <p className="text-secondary">Benutzer, Rechte und Aktivitätsprotokoll</p>
        </div>
        <button className="btn btn-primary">+ Benutzer anlegen</button>
      </header>

      {/* Users table */}
      <section className="section animate-fade-in-up delay-1">
        <h2 className="section-title">Benutzer</h2>
        <div className="glass-card-static table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Status</th>
                <th>Anzeigename</th>
                <th>Benutzername</th>
                <th>Rolle</th>
                <th>Letzter Login</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u.id}>
                  <td><span className={`status-dot ${u.active ? 'online' : 'offline'}`} /></td>
                  <td className="font-medium">{u.display}</td>
                  <td className="text-secondary">{u.name}</td>
                  <td>
                    <span className={`role-badge ${u.role === 'Admin' ? 'admin' : ''}`}>{u.role}</span>
                  </td>
                  <td className="text-muted">{u.lastLogin}</td>
                  <td>
                    <button className="btn-link">Bearbeiten</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Permission overview */}
      <section className="section animate-fade-in-up delay-2">
        <h2 className="section-title">Rechte-Übersicht (Konzept)</h2>
        <div className="perm-grid">
          <div className="glass-card perm-card">
            <h3>Allgemeine Rechte</h3>
            <p className="text-muted">Pro User: 0 = unsichtbar, 1 = ansehen, 2 = bearbeiten</p>
            <ul className="perm-list">
              <li>dashboard.overview</li>
              <li>network.topology</li>
              <li>network.devices.control</li>
              <li>system.reboot</li>
              <li>admin.users.*</li>
            </ul>
          </div>
          <div className="glass-card perm-card">
            <h3>Home Assistant</h3>
            <p className="text-muted">Raum-Rechte + einzelne Entity-Rechte</p>
            <ul className="perm-list">
              <li>Raum: Wohnzimmer → Steuern</li>
              <li>Raum: Kinderzimmer → Steuern</li>
              <li>Entity: light.wohnzimmer_decke → 2</li>
              <li>Entity: switch.tv → 0 (gesperrt)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Audit log */}
      <section className="section animate-fade-in-up delay-3">
        <h2 className="section-title">Aktivitätsprotokoll</h2>
        <div className="glass-card-static audit-list">
          {auditLog.map((e, i) => (
            <div key={i} className="audit-row">
              <span className="audit-user">{e.user}</span>
              <span className="audit-action">{e.action}</span>
              <span className="audit-time text-muted">{e.time}</span>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .page-content { padding: 28px 32px; height: 100%; overflow-y: auto; }
        .page-header {
          display: flex; align-items: flex-start; justify-content: space-between;
          margin-bottom: 28px; flex-wrap: wrap; gap: 12px;
        }
        .page-header h1 { font-size: 1.6rem; font-weight: 600; letter-spacing: -0.02em; margin-bottom: 4px; }
        .page-header p { font-size: 0.875rem; }

        .section { margin-bottom: 28px; }
        .section-title {
          font-size: 0.95rem; font-weight: 560; color: var(--text-secondary); margin-bottom: 12px;
        }

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

        .role-badge {
          font-size: 0.7rem; font-weight: 560; padding: 2px 8px; border-radius: 4px;
          background: rgba(148,163,184,0.12); color: var(--text-secondary);
        }
        .role-badge.admin {
          background: rgba(59,130,246,0.15); color: var(--neon-blue);
        }

        .btn-link {
          background: none; border: none; color: var(--neon-blue); font-family: inherit;
          font-size: 0.8rem; cursor: pointer; font-weight: 500;
        }
        .btn-link:hover { text-decoration: underline; }

        .perm-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 14px;
        }
        @media (max-width: 700px) { .perm-grid { grid-template-columns: 1fr; } }
        .perm-card { padding: 18px; }
        .perm-card h3 { font-size: 0.9rem; font-weight: 560; margin-bottom: 6px; }
        .perm-card p { font-size: 0.75rem; margin-bottom: 12px; }
        .perm-list {
          list-style: none; font-size: 0.8rem; color: var(--text-secondary);
          display: flex; flex-direction: column; gap: 4px;
        }
        .perm-list li::before {
          content: '→ '; color: var(--neon-blue);
        }

        .audit-list { padding: 8px 0; }
        .audit-row {
          display: grid; grid-template-columns: 100px 1fr 120px;
          gap: 12px; padding: 10px 16px; font-size: 0.85rem;
          border-bottom: 1px solid rgba(148,163,184,0.06);
          align-items: center;
        }
        .audit-row:last-child { border-bottom: none; }
        .audit-user { font-weight: 560; color: var(--neon-blue); }
        .audit-action { color: var(--text-primary); }
        .audit-time { text-align: right; font-size: 0.8rem; }
      `}</style>
    </div>
  );
}

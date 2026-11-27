const automations = [
  { id: 1, name: 'Sonnenuntergang → Wohnzimmerlicht', status: 'on', last: 'heute 17:42' },
  { id: 2, name: 'Bewegung Flur → Licht 2 Min', status: 'on', last: 'heute 14:11' },
  { id: 3, name: 'Alle Lichter aus um 23:30', status: 'on', last: 'gestern 23:30' },
  { id: 4, name: 'Fenster offen + Heizung aus', status: 'off', last: 'vor 3 Tagen' },
  { id: 5, name: 'Waschmaschine fertig → Benachrichtigung', status: 'on', last: 'heute 11:05' },
  { id: 6, name: 'Abwesenheit → Alarm aktiv', status: 'on', last: 'vor 2 Std' },
];

export default function Automations() {
  return (
    <div className="page-content">
      <header className="page-header animate-fade-in">
        <div>
          <h1>Automationen</h1>
          <p className="text-secondary">Home Assistant Automationen</p>
        </div>
      </header>

      <div className="auto-list">
        {automations.map((a, i) => (
          <div
            key={a.id}
            className={`glass-card auto-card animate-fade-in-up`}
            style={{ animationDelay: `${0.05 + i * 0.05}s` }}
          >
            <div className="auto-left">
              <span className={`status-dot ${a.status === 'on' ? 'online' : 'offline'}`} />
              <div>
                <div className="auto-name">{a.name}</div>
                <div className="auto-last text-muted">Zuletzt: {a.last}</div>
              </div>
            </div>
            <button className={`toggle ${a.status === 'on' ? 'active' : ''}`}>
              <span className="toggle-knob" />
            </button>
          </div>
        ))}
      </div>

      <style>{`
        .page-content { padding: 28px 32px; height: 100%; overflow-y: auto; }
        .page-header { margin-bottom: 28px; }
        .page-header h1 { font-size: 1.6rem; font-weight: 600; letter-spacing: -0.02em; margin-bottom: 4px; }
        .page-header p { font-size: 0.875rem; }

        .auto-list { display: flex; flex-direction: column; gap: 10px; max-width: 720px; }
        .auto-card {
          padding: 16px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .auto-left { display: flex; align-items: center; gap: 12px; min-width: 0; }
        .auto-name { font-weight: 560; font-size: 0.9rem; margin-bottom: 2px; }
        .auto-last { font-size: 0.75rem; }

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
      `}</style>
    </div>
  );
}

import { haRooms, haEntities } from '../data/mockData';
import { useState } from 'react';

export default function SmartHome() {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const filtered = selectedRoom
    ? haEntities.filter(e => e.room === selectedRoom)
    : haEntities;

  return (
    <div className="page-content">
      <header className="page-header animate-fade-in">
        <div>
          <h1>Smart Home</h1>
          <p className="text-secondary">Home Assistant – Räume & Geräte</p>
        </div>
      </header>

      <section className="section animate-fade-in-up delay-1">
        <h2 className="section-title">Räume</h2>
        <div className="room-grid">
          <button
            className={`glass-card room-card ${!selectedRoom ? 'active' : ''}`}
            onClick={() => setSelectedRoom(null)}
          >
            <span className="room-name">Alle</span>
            <span className="room-count">{haEntities.length} Entities</span>
          </button>
          {haRooms.map((r, i) => (
            <button
              key={r.id}
              className={`glass-card room-card ${selectedRoom === r.id ? 'active' : ''}`}
              onClick={() => setSelectedRoom(r.id)}
              style={{ animationDelay: `${0.05 + i * 0.04}s` }}
            >
              <span className="room-name">{r.name}</span>
              <span className="room-meta">{r.devices} Geräte · {r.temp}°C</span>
            </button>
          ))}
        </div>
      </section>

      <section className="section animate-fade-in-up delay-2">
        <h2 className="section-title">Geräte & Entities</h2>
        <div className="entity-grid">
          {filtered.map((e, i) => (
            <div
              key={e.id}
              className={`glass-card entity-card ${e.state === 'on' || e.state === 'open' ? 'on' : ''}`}
              style={{ animationDelay: `${0.08 + i * 0.04}s` }}
            >
              <div className="entity-top">
                <span className={`entity-type ${e.type}`}>{e.type}</span>
                {(e.type === 'light' || e.type === 'switch') && (
                  <button className={`toggle ${e.state === 'on' ? 'active' : ''}`}>
                    <span className="toggle-knob" />
                  </button>
                )}
              </div>
              <h3 className="entity-name">{e.name}</h3>
              <p className="entity-state">
                {e.type === 'sensor' && `${e.state} ${e.unit || ''}`}
                {e.type === 'light' && (e.state === 'on' ? `${e.brightness}%` : 'Aus')}
                {e.type === 'switch' && (e.state === 'on' ? 'An' : 'Aus')}
                {e.type === 'cover' && (e.state === 'open' ? `Offen ${e.position}%` : 'Geschlossen')}
              </p>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .page-content { padding: 28px 32px; height: 100%; overflow-y: auto; }
        .page-header { margin-bottom: 28px; }
        .page-header h1 { font-size: 1.6rem; font-weight: 600; letter-spacing: -0.02em; margin-bottom: 4px; }
        .page-header p { font-size: 0.875rem; }
        .section { margin-bottom: 32px; }
        .section-title { font-size: 0.95rem; font-weight: 560; color: var(--text-secondary); margin-bottom: 14px; }

        .room-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .room-card {
          padding: 12px 16px;
          cursor: pointer;
          text-align: left;
          font-family: inherit;
          color: inherit;
          min-width: 120px;
          animation: fadeInUp 0.35s var(--ease) both;
        }
        .room-card.active {
          border-color: var(--neon-blue);
          box-shadow: 0 0 16px var(--neon-blue-glow);
          background: rgba(59, 130, 246, 0.12);
        }
        .room-name { display: block; font-weight: 560; font-size: 0.9rem; margin-bottom: 2px; }
        .room-meta, .room-count { font-size: 0.75rem; color: var(--text-muted); }

        .entity-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 12px;
        }
        .entity-card {
          padding: 16px;
          animation: fadeInUp 0.4s var(--ease) both;
        }
        .entity-card.on {
          border-color: rgba(34, 211, 238, 0.25);
        }
        .entity-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }
        .entity-type {
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 2px 7px;
          border-radius: 4px;
          background: rgba(148,163,184,0.12);
          color: var(--text-muted);
        }
        .entity-type.light { background: rgba(250, 204, 21, 0.15); color: #facc15; }
        .entity-type.switch { background: rgba(59, 130, 246, 0.15); color: var(--neon-blue); }
        .entity-type.sensor { background: rgba(167, 139, 250, 0.15); color: var(--violet); }
        .entity-type.cover { background: rgba(34, 211, 238, 0.15); color: var(--turquoise); }

        .entity-name { font-size: 0.9rem; font-weight: 560; margin-bottom: 4px; }
        .entity-state { font-size: 0.8rem; color: var(--text-secondary); }

        .toggle {
          width: 40px;
          height: 22px;
          border-radius: 11px;
          border: none;
          background: rgba(148,163,184,0.25);
          cursor: pointer;
          position: relative;
          transition: background 0.2s;
          padding: 0;
        }
        .toggle.active {
          background: var(--turquoise);
          box-shadow: 0 0 10px var(--turquoise-glow);
        }
        .toggle-knob {
          position: absolute;
          top: 3px;
          left: 3px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: white;
          transition: transform 0.2s var(--ease);
        }
        .toggle.active .toggle-knob {
          transform: translateX(18px);
        }
      `}</style>
    </div>
  );
}

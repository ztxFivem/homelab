import { useState } from 'react';

interface LoginProps {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!username || !password) {
      setError('Bitte Benutzername und Passwort eingeben.');
      return;
    }
    setLoading(true);
    // Simulate login
    setTimeout(() => {
      setLoading(false);
      onLogin();
    }, 800);
  };

  return (
    <div className="login-page">
      <div className="login-card glass-card-static animate-scale-in">
        <div className="login-logo">
          <div className="logo-mark">
            <div className="logo-inner" />
          </div>
          <h1>HomeLab Dashboard</h1>
          <p className="text-secondary">Melde dich an, um fortzufahren</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="field">
            <label htmlFor="username">Benutzername</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="admin"
              autoComplete="username"
              autoFocus
            />
          </div>
          <div className="field">
            <label htmlFor="password">Passwort</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </div>

          {error && <div className="error-msg">{error}</div>}

          <button type="submit" className="btn btn-primary login-btn" disabled={loading}>
            {loading ? 'Anmelden…' : 'Anmelden'}
          </button>
        </form>

        <p className="login-hint text-muted">
          Demo: beliebige Zugangsdaten eingeben
        </p>
      </div>

      <style>{`
        .login-page {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          position: relative;
          z-index: 1;
        }

        .login-card {
          width: 100%;
          max-width: 400px;
          padding: 40px 36px;
        }

        .login-logo {
          text-align: center;
          margin-bottom: 32px;
        }

        .login-logo .logo-mark {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: linear-gradient(135deg, var(--neon-blue), var(--turquoise));
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
          box-shadow: 0 0 28px var(--neon-blue-glow);
        }

        .login-logo .logo-inner {
          width: 18px;
          height: 18px;
          border-radius: 5px;
          background: rgba(255,255,255,0.9);
        }

        .login-logo h1 {
          font-size: 1.35rem;
          font-weight: 600;
          letter-spacing: -0.02em;
          margin-bottom: 6px;
        }

        .login-logo p {
          font-size: 0.875rem;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .field label {
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .field input {
          padding: 12px 14px;
          border-radius: 10px;
          border: 1px solid var(--border-glass);
          background: rgba(10, 14, 23, 0.5);
          color: var(--text-primary);
          font-family: inherit;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .field input:focus {
          border-color: var(--neon-blue);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
        }

        .field input::placeholder {
          color: var(--text-muted);
        }

        .error-msg {
          font-size: 0.8rem;
          color: var(--red);
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.2);
          padding: 8px 12px;
          border-radius: 8px;
        }

        .login-btn {
          width: 100%;
          justify-content: center;
          padding: 12px;
          margin-top: 4px;
          font-size: 0.9rem;
        }

        .login-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .login-hint {
          text-align: center;
          font-size: 0.75rem;
          margin-top: 24px;
        }
      `}</style>
    </div>
  );
}

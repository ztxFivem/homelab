import { menuItems } from '../data/mockData';
import { iconMap, ChevronLeft, ChevronRight, LogOut } from './Icons';

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  collapsed: boolean;
  onToggle: () => void;
  isAdmin?: boolean;
}

export default function Sidebar({ currentPage, onNavigate, collapsed, onToggle, isAdmin = true }: SidebarProps) {
  const visibleItems = menuItems.filter(item => !item.adminOnly || isAdmin);

  return (
    <aside
      className="sidebar"
      style={{
        width: collapsed ? 'var(--sidebar-collapsed)' : 'var(--sidebar-width)',
        transition: 'width 0.3s var(--ease)',
      }}
    >
      {/* Logo */}
      <div className="sidebar-header">
        <div className="logo-mark">
          <div className="logo-inner" />
        </div>
        {!collapsed && (
          <div className="logo-text animate-fade-in">
            <span className="logo-title">HomeLab</span>
            <span className="logo-sub">Dashboard</span>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        {visibleItems.map((item, index) => {
          const Icon = iconMap[item.icon];
          const active = currentPage === item.id;
          return (
            <button
              key={item.id}
              className={`nav-item ${active ? 'active' : ''}`}
              onClick={() => onNavigate(item.id)}
              title={collapsed ? item.label : undefined}
              style={{ animationDelay: `${index * 0.03}s` }}
            >
              <span className="nav-icon">{Icon && <Icon size={20} />}</span>
              {!collapsed && <span className="nav-label">{item.label}</span>}
              {active && <span className="nav-indicator" />}
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="sidebar-footer">
        <button className="nav-item" onClick={onToggle} title={collapsed ? 'Ausklappen' : 'Einklappen'}>
          <span className="nav-icon">
            {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </span>
          {!collapsed && <span className="nav-label">Einklappen</span>}
        </button>
        <button className="nav-item logout" title="Abmelden">
          <span className="nav-icon"><LogOut size={18} /></span>
          {!collapsed && <span className="nav-label">Abmelden</span>}
        </button>
      </div>

      <style>{`
        .sidebar {
          height: 100%;
          background: var(--bg-sidebar);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-right: 1px solid var(--border-glass);
          display: flex;
          flex-direction: column;
          position: relative;
          z-index: 20;
          flex-shrink: 0;
        }

        .sidebar-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 20px 16px;
          border-bottom: 1px solid var(--border-glass);
          min-height: 72px;
        }

        .logo-mark {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: linear-gradient(135deg, var(--neon-blue), var(--turquoise));
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 0 16px var(--neon-blue-glow);
        }

        .logo-inner {
          width: 14px;
          height: 14px;
          border-radius: 4px;
          background: rgba(255,255,255,0.9);
        }

        .logo-text {
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .logo-title {
          font-weight: 600;
          font-size: 0.95rem;
          letter-spacing: -0.01em;
        }

        .logo-sub {
          font-size: 0.7rem;
          color: var(--text-muted);
          font-weight: 400;
        }

        .sidebar-nav {
          flex: 1;
          overflow-y: auto;
          padding: 12px 8px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          border-radius: 10px;
          border: none;
          background: transparent;
          color: var(--text-secondary);
          cursor: pointer;
          font-family: inherit;
          font-size: 0.875rem;
          font-weight: 450;
          position: relative;
          transition: all 0.2s var(--ease);
          width: 100%;
          text-align: left;
          animation: fadeInUp 0.4s var(--ease) both;
        }

        .nav-item:hover {
          background: rgba(59, 130, 246, 0.08);
          color: var(--text-primary);
        }

        .nav-item.active {
          background: rgba(59, 130, 246, 0.12);
          color: var(--neon-blue);
        }

        .nav-item.active .nav-icon {
          color: var(--neon-blue);
        }

        .nav-indicator {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 20px;
          background: var(--neon-blue);
          border-radius: 0 3px 3px 0;
          box-shadow: 0 0 8px var(--neon-blue-glow);
        }

        .nav-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 24px;
        }

        .nav-label {
          white-space: nowrap;
          overflow: hidden;
        }

        .sidebar-footer {
          padding: 8px;
          border-top: 1px solid var(--border-glass);
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .nav-item.logout:hover {
          background: rgba(239, 68, 68, 0.1);
          color: var(--red);
        }
      `}</style>
    </aside>
  );
}

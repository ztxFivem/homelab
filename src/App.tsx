import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import Overview from './pages/Overview';
import Network from './pages/Network';
import SmartHome from './pages/SmartHome';
import Topology from './pages/Topology';
import Traffic from './pages/Traffic';
import System from './pages/System';
import Devices from './pages/Devices';
import Automations from './pages/Automations';
import Monitoring from './pages/Monitoring';
import Statistics from './pages/Statistics';
import Settings from './pages/Settings';
import Admin from './pages/Admin';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('overview');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  if (!loggedIn) {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'overview':
        return <Overview />;
      case 'network':
        return <Network />;
      case 'topology':
        return <Topology />;
      case 'traffic':
        return <Traffic />;
      case 'smarthome':
        return <SmartHome />;
      case 'devices':
        return <Devices />;
      case 'automations':
        return <Automations />;
      case 'system':
        return <System />;
      case 'monitoring':
        return <Monitoring />;
      case 'statistics':
        return <Statistics />;
      case 'settings':
        return <Settings />;
      case 'admin':
        return <Admin />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="app-shell">
      <Sidebar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(c => !c)}
        isAdmin={true}
      />
      <main className="main-content">
        {renderPage()}
      </main>

      <style>{`
        .app-shell {
          display: flex;
          height: 100%;
          width: 100%;
          position: relative;
          z-index: 1;
        }
        .main-content {
          flex: 1;
          min-width: 0;
          height: 100%;
          overflow: hidden;
          background: transparent;
        }
      `}</style>
    </div>
  );
}

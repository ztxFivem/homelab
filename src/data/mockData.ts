/* Mock data for the frontend prototype */

export const systemStatus = {
  internet: { online: true, download: 287.4, upload: 42.1, ping: 12, quality: 98 },
  udm: { online: true, cpu: 23, ram: 41, temp: 48, uptime: '14d 7h' },
  network: { clients: 28, aps: 4, switches: 2, poeUsage: 67 },
  homeAssistant: { online: true, devices: 86, automations: 24, sensors: 142 },
  pi: { cpu: 18, ram: 62, temp: 51, disk: 47, uptime: '21d 3h' },
};

export const trafficHistory = {
  labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', 'Now'],
  download: [42, 28, 65, 120, 210, 185, 287],
  upload: [12, 8, 18, 35, 48, 40, 42],
};

export const networkDevices = [
  { id: '1', name: 'UDM-Pro', type: 'gateway', status: 'online', ip: '192.168.1.1', clients: 28 },
  { id: '2', name: 'USW-24-PoE', type: 'switch', status: 'online', ip: '192.168.1.2', ports: 24, poe: 45 },
  { id: '3', name: 'U6-Pro Wohnzimmer', type: 'ap', status: 'online', ip: '192.168.1.10', clients: 8, signal: -42 },
  { id: '4', name: 'U6-Lite Büro', type: 'ap', status: 'online', ip: '192.168.1.11', clients: 5, signal: -51 },
  { id: '5', name: 'U6-LR Garten', type: 'ap', status: 'online', ip: '192.168.1.12', clients: 3, signal: -58 },
  { id: '6', name: 'USW-Lite-8', type: 'switch', status: 'online', ip: '192.168.1.3', ports: 8, poe: 12 },
];

export const clients = [
  { id: 'c1', name: 'iPhone 15 Pro', type: 'wifi', status: 'online', ip: '192.168.1.45', mac: 'AA:BB:CC:11:22:33', ap: 'U6-Pro Wohnzimmer', signal: -48 },
  { id: 'c2', name: 'MacBook Pro', type: 'wifi', status: 'online', ip: '192.168.1.52', mac: 'AA:BB:CC:11:22:44', ap: 'U6-Lite Büro', signal: -55 },
  { id: 'c3', name: 'PS5', type: 'wired', status: 'online', ip: '192.168.1.60', mac: 'AA:BB:CC:11:22:55', ap: null, signal: null },
  { id: 'c4', name: 'Samsung TV', type: 'wifi', status: 'online', ip: '192.168.1.70', mac: 'AA:BB:CC:11:22:66', ap: 'U6-Pro Wohnzimmer', signal: -62 },
  { id: 'c5', name: 'Laptop Gast', type: 'wifi', status: 'offline', ip: '192.168.1.88', mac: 'AA:BB:CC:11:22:77', ap: null, signal: null },
];

export const haRooms = [
  { id: 'wohnzimmer', name: 'Wohnzimmer', devices: 12, lights: 4, temp: 21.4 },
  { id: 'kueche', name: 'Küche', devices: 8, lights: 2, temp: 22.1 },
  { id: 'schlafzimmer', name: 'Schlafzimmer', devices: 6, lights: 2, temp: 19.8 },
  { id: 'buero', name: 'Büro', devices: 9, lights: 3, temp: 20.5 },
  { id: 'bad', name: 'Bad', devices: 4, lights: 2, temp: 23.0 },
  { id: 'flur', name: 'Flur', devices: 5, lights: 3, temp: 20.2 },
];

export const haEntities = [
  { id: 'light.wohnzimmer_decke', name: 'Deckenlicht', room: 'wohnzimmer', type: 'light', state: 'on', brightness: 80 },
  { id: 'light.wohnzimmer_steh', name: 'Stehlampe', room: 'wohnzimmer', type: 'light', state: 'off', brightness: 0 },
  { id: 'sensor.wohnzimmer_temp', name: 'Temperatur', room: 'wohnzimmer', type: 'sensor', state: '21.4', unit: '°C' },
  { id: 'switch.wohnzimmer_tv', name: 'TV Steckdose', room: 'wohnzimmer', type: 'switch', state: 'on' },
  { id: 'cover.wohnzimmer_rolladen', name: 'Rollladen', room: 'wohnzimmer', type: 'cover', state: 'open', position: 100 },
  { id: 'light.kueche_decke', name: 'Küchenlicht', room: 'kueche', type: 'light', state: 'on', brightness: 60 },
  { id: 'sensor.kueche_temp', name: 'Temperatur', room: 'kueche', type: 'sensor', state: '22.1', unit: '°C' },
];

export const menuItems = [
  { id: 'overview', label: 'Übersicht', icon: 'LayoutDashboard' },
  { id: 'network', label: 'Netzwerk', icon: 'Network' },
  { id: 'topology', label: 'Topologie', icon: 'GitBranch' },
  { id: 'traffic', label: 'Traffic', icon: 'Activity' },
  { id: 'smarthome', label: 'Smart Home', icon: 'Home' },
  { id: 'devices', label: 'Geräte', icon: 'Cpu' },
  { id: 'automations', label: 'Automationen', icon: 'Zap' },
  { id: 'system', label: 'System', icon: 'Server' },
  { id: 'monitoring', label: 'Monitoring', icon: 'BarChart3' },
  { id: 'statistics', label: 'Statistiken', icon: 'PieChart' },
  { id: 'settings', label: 'Einstellungen', icon: 'Settings' },
  { id: 'admin', label: 'Administration', icon: 'Shield', adminOnly: true },
];

# HomeLab Dashboard – Frontend

Modernes Glassmorphism-Dashboard für Netzwerk & Smart Home.

## Features

- Dunkles Anthrazit/Navy Design mit Neon-Blau, Türkis, Violett
- Glassmorphism-Karten, Glow-Effekte, pulsierende Status-Punkte
- Sanfte CSS-Animationen (performant für Raspberry Pi)
- Einklappbare Sidebar
- Login-Seite
- Alle Hauptseiten mit Mock-Daten

## Seiten

| Seite | Inhalt |
|-------|--------|
| Login | Anmeldung (Demo: beliebige Daten) |
| Übersicht | Internet, UDM, Netzwerk, HA, Pi, Live-Traffic |
| Netzwerk | UniFi-Geräte + Client-Tabelle |
| Topologie | Grafische Netzwerkstruktur |
| Traffic | Live-Werte + 24h-Diagramm |
| Smart Home | Räume, Entities, Toggle-Schalter |
| Geräte | Infrastruktur + Clients |
| Automationen | HA-Automationen mit Toggles |
| System | Raspberry Pi + UDM Hardware |
| Monitoring | Dienste, Health, Meldungen |
| Statistiken | Wochen-Traffic, Top-Clients |
| Einstellungen | Theme, Polling, Integrationen |
| Administration | Benutzer, Rechte-Konzept, Audit-Log |

## Starten

```bash
cd frontend
npm install
npm run dev
```

Browser: http://localhost:5173

## Build

```bash
npm run build
```

Ausgabe: `frontend/dist/` → mit Nginx ausliefern.

---
title: Firmware flashen
---

# Firmware flashen

Je hebt verschillende manieren om de OpenAmber-firmware op het board te zetten:

1. **Release build flashen via web flasher of ESPHome-Flasher**: snelste route voor de meeste gebruikers. Gebruik de juiste firmwarevariant (`openamber-esp32s3` of `openamber-esp32`).
2. **Lokaal flashen via USB**: sluit het board met een USB-C kabel aan op je computer en flash de release build via ESPHome-Flasher of een vergelijkbare tool.
3. **Custom build via ESPHome**: download de configuratie en bouw zelf een aangepaste firmware, bijvoorbeeld om eigen sensoren toe te voegen.
4. **OTA-update**: alleen relevant als OpenAmber al draait op het board en je wilt upgraden naar een nieuwere release.

Tips bij de eerste flash:

1. Flash bij voorkeur voordat je het board mechanisch in de regelmodule monteert.
2. Controleer na flashen via de seriele monitor of het board zonder fouten opstart.
3. Sluit daarna kort aan op WiFi via de captive portal (Improv of ESPHome web-portal) zodat het board bereikbaar is op je netwerk.

Volgende stap: [Hardware aansluiten](./hardware-aansluiten.html).

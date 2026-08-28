---
title: Eerste configuratie
---

# Eerste configuratie

Gebruik deze checklist na het flashen en aansluiten van je controller.

## Eerste opstart

1. Controleer dat het board opstart en zich aanmeldt op je WiFi-netwerk.
2. Controleer in de ESPHome-logs of de WiFi-status klopt.
3. Voeg optioneel het apparaat toe in Home Assistant via de ESPHome-integratie.
4. Home Assistant is niet vereist voor basiswerking, maar wel sterk aanbevolen voor geavanceerde historie en uitgebreide analysemogelijkheden.

## Basiscontrole

1. Verifieer dat binnen- en buitenunit online zijn.
2. Controleer of temperatuursensoren plausibele waarden tonen.
3. Controleer dat Modbus-communicatie stabiel binnenkomt.
4. Controleer dat het systeem niet in noodbedrijf staat.

## Veilige basisinstellingen

Controleer op [Instellingen - Algemeen](./configuratie-algemeen.html):

1. `switch.dhw_enabled_switch` staat goed voor jouw installatie.
2. Sensor offsets zijn alleen aangepast als daar een duidelijke reden voor is.
3. `switch.emergency_mode_enabled` staat uit.

## Vervolg

1. Ga verder met [Installatie](./installatie.html) voor de volledige procedure.
2. Stel daarna verwarmen, tapwater en optionele functies in via [Configuratie](./configuratie.html).

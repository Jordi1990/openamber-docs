---
title: Algemeen
---

# Algemeen

Alle instellingen op deze pagina zijn ook via Home Assistant aanpasbaar.

## Categorie: Systeem

![Systeem](/images/instellingen-algemeen-systeem.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Tapwater aanwezig | `switch.dhw_enabled_switch` | Tapwatervat is aanwezig in het systeem. Schakelt tapwaterlogica en gerelateerde tabs in of uit. Alleen uitzetten bij installaties zonder actief tapwatercircuit of tijdens diagnose. |
| Regeltemperatuur bron | `select.heat_cool_control_temperature_source_select` | Selecteert de temperatuursensor welke gebruikt wordt door de PID controller om de doeltemperatuur op te regelen. Opties: CV-aanvoer (Tc), CV-aanvoer zone 1 (Tv1). |
| Geavanceerde instellingen | `switch.advanced_settings_enabled` | Toon geavanceerde instellingen. Maakt PID, bodemplaat en defrost instellingen zichtbaar in het instellingen menu. |
| Analytics versturen | `switch.analytics_enabled_switch` | Deel anonieme gebruiksdata voor het OpenAmber dashboard. Als je dit inschakelt, wordt elke 5 minuten diagnose-data naar [https://openamber.nl/devices](https://openamber.nl/devices) verstuurd. |

## Categorie: Mengventielen

![Mengventielen](/images/instellingen-algemeen-mengventielen-1.jpg)
![Mengventielen](/images/instellingen-algemeen-mengventielen-2.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Mengventiel zone 1 aanwezig | `switch.mixing_valve_zone1_enabled` | Mengventiel zone 1 is aanwezig in het systeem. Activeert mengventiel logica en gerelateerde tabs voor zone 1. |
| Minimum positie | `number.mixing_valve_zone1_min_position` | Minimale ventielopening zone 1. |
| Maximum positie | `number.mixing_valve_zone1_max_position` | Maximale ventielopening zone 1. |
| Mengventiel zone 2 aanwezig | `switch.mixing_valve_zone2_enabled` | Mengventiel zone 2 is aanwezig in het systeem. Activeert mengventiel logica en gerelateerde tabs voor zone 2. |
| Minimum positie | `number.mixing_valve_zone2_min_position` | Minimale ventielopening zone 2. |
| Maximum positie | `number.mixing_valve_zone2_max_position` | Maximale ventielopening zone 2. |

## Categorie: Sensor kalibratie

![Sensor kalibratie](/images/instellingen-algemeen-sensor-kalibratie-1.jpg)
![Sensor kalibratie](/images/instellingen-algemeen-sensor-kalibratie-2.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Ruimtetemperatuur offset | `number.tr_offset` | Correctie voor interne ruimtetemperatuurmeting. Start met kleine stappen van 0.1°C en controleer gedurende minimaal 24 uur. |
| Tapwatertemperatuur offset | `number.tw_offset` | Correctie voor tapwatertemperatuurmeting. Verander in kleine stappen en beoordeel na een volledige opwarmcyclus. |
| CV-aanvoertemperatuur offset | `number.tc_offset` | Correctie voor CV-aanvoertemperatuurmeting. |
| CV-retourtemperatuur (Tui) offset | `number.tui_offset` | Correctie voor CV-retourtemperatuurmeting (Tui). |
| CV-aanvoertemperatuur (Tuo) offset | `number.tuo_offset` | Correctie voor CV-aanvoertemperatuurmeting (Tuo). |

## Categorie: Opties

![Opties](/images/instellingen-algemeen-opties.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Flow sensor aanwezig | `switch.flow_sensor_enabled` | Gebruik de flowsensor voor flow en energie-berekeningen. Om dit te gebruiken is een aangesloten flow sensor nodig. |
| Flow sensor kalibratie | `number.flow_sensor_calibration` | Aantal pulses per liter voor de flowsensor. Afhankelijk van de aangesloten pulse sensor. |

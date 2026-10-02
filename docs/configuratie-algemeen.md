---
title: Algemeen
---

# Algemeen

Alle instellingen op deze pagina zijn ook via Home Assistant aanpasbaar.

## Categorie: Systeem

![Systeem](/images/instellingen-algemeen-systeem.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Tapwater aanwezig | `switch.dhw_enabled_switch` | Activeert of de installatie tapwaterlogica en gerelateerde tabs gebruikt. Alleen bij installaties zonder actief tapwatercircuit of tijdens diagnose. Aan voor systemen met boilervat/tapwaterfunctie. Uitzetten op een actief tapwatersysteem schakelt DHW-regeling uit. |
| Regeltemperatuur bron | `select.heat_cool_control_temperature_source_select` | Selecteert de temperatuursensor welke gebruikt wordt door de PID controller om de doeltemperatuur op te regelen, bijvoorbeeld Tc of Tv1. |
| Geavanceerde instellingen | `switch.advanced_settings_enabled` | Maakt gevanceerde instellingen zichtbaar in het instellingen menu. |
| Analytics ingeschakeld | `switch.analytics_enabled_switch` | Als je dit inschakelt, wordt elke 5 minuten diagnose-data naar [https://openamber.nl/devices](https://openamber.nl/devices) verstuurd. Deze data is anoniem en wordt gebruikt om inzicht te geven in alle OpenAmber-gebruikers die analytics hebben ingeschakeld. |

## Categorie: Mengventielen

![Mengventielen](/images/instellingen-algemeen-mengventielen-1.jpg)
![Mengventielen](/images/instellingen-algemeen-mengventielen-2.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
|Mengventiel zone 1 aanwezig| `switch.mengventiel_zone_1_aanwezig` | Activeert of de installatie mengventiel logica en gerelateerde tabs gebruikt. Alleen bij installaties zonder actief mengventiel of tijdens diagnose. Aan voor systemen met mengventiel/kraan logica. Uitzetten op een actief mengventiel schakelt mengventiel regeling uit. |
|Minimum positie zone 1 | `number.min_pos_zone_1` |  |
|Maximum positie zone 1 | `number.max_pos_zone_1` |  |
|Mengventiel zone 2 aanwezig| `switch.mengventiel_zone_2_aanwezig` | Activeert of de installatie mengventiel logica en gerelateerde tabs gebruikt. Alleen bij installaties zonder actief mengventiel of tijdens diagnose. Aan voor systemen met mengventiel/kraan logica. Uitzetten op een actief mengventiel schakelt mengventiel regeling uit. |
|Minimum positie zone 2 | `number.min_pos_zone_2` |  |
|Maximum positie zone 2 | `number.max_pos_zone_2` |  |
## Categorie: Sensor kalibratie

![Sensor kalibratie](/images/instellingen-algemeen-sensor-kalibratie-1.jpg)
![Sensor kalibratie](/images/instellingen-algemeen-sensor-kalibratie-2.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Ruimtetemperatuur offset | `number.tr_offset` | Corrigeert de gemeten ruimtetemperatuur (Tr) met een vaste offset. Als de gemeten waarde in OpenAmber structureel afwijkt van een betrouwbare referentiesensor. Start met kleine stappen van 0.1 C en controleer gedurende minimaal 24 uur. Te grote offset veroorzaakt foutieve warmtevraag, pendelgedrag of comfortklachten. |
| Tapwatertemperatuur offset | `number.tw_offset` | Corrigeert de tapwatertemperatuurmeting (Tw) met een vaste offset. Bij consistente afwijking tussen OpenAmber en externe meting aan buffervat of leiding. Verander in kleine stappen en beoordeel na een volledige opwarmcyclus. Onjuiste offset kan leiden tot te heet of te koud tapwater en onnodig energieverbruik. |
| CV-aanvoertemperatuur offset | `number.tc_offset` | Corrigeert de CV-aanvoertemperatuur sensor (Tc) met een vaste offset. |
| CV-retourtemperatuur (Tui) offset | `number.tui_offset` | Corrigeert de CV-retourtemperatuur (Tui) in de buiten unit met een vaste offset. |
| CV-aanvoertemperatuur (Tuo) offset | `number.tuo_offset` | Corrigeert de CV-aanvoertemperatuur (Tuo) in de buiten unit met een vaste offset. |

## Categorie: Opties

![Noodbedrijf](/images/instellingen-algemeen-opties.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Flow sensor aanwezig | `switch.flow_sensor_enabled` | Schakelt het uitlezen van de flow sensor in voor energie berekeningen. Om dit te gebruiken is een aangesloten flow sensor nodig, zie pagina TODO. |
| Flow sensor kalibratie | `number.flow_sensor_calibration` | Kalibratie waarde voor het uitlezen van de flow sensor, afhankelijk van de aangesloten pulse sensor. |


---
title: Algemeen
---

# Algemeen

Alle instellingen op deze pagina zijn ook via Home Assistant aanpasbaar.

## Categorie: Systeem

![Systeem](/images/instellingen-algmeen-systeem.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Tapwater aanwezig | `switch.dhw_enabled_switch` | Activeert of de installatie tapwaterlogica en gerelateerde tabs gebruikt. Alleen bij installaties zonder actief tapwatercircuit of tijdens diagnose. Aan voor systemen met boilervat/tapwaterfunctie. Uitzetten op een actief tapwatersysteem schakelt DHW-regeling uit. |
| Regeltemperatuur bron | `select.heat_cool_control_temperature_source_select` | Selecteert de temperatuursensor welke gebruikt wordt door de PID controller om de doeltemperatuur op te regelen, bijvoorbeeld Tc of Tv1. |
| Geavanceerde instellingen | `switch.advanced_settings_enabled` | Maakt gevanceerde instellingen zichtbaar in het instellingen menu. |
| Analytics ingeschakeld | `switch.analytics_enabled_switch` | Als je dit inschakelt, wordt elke 5 minuten diagnose-data naar [https://openamber.nl/devices](https://openamber.nl/devices) verstuurd. Deze data is anoniem en wordt gebruikt om inzicht te geven in alle OpenAmber-gebruikers die analytics hebben ingeschakeld. |

## Categorie: Analytics

![Systeem](/images/instellingen-algmeen-analytics.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Analytics versturen | `switch.analytics_enabled_switch` | Als je dit inschakelt, wordt elke 5 minuten diagnose-data naar [https://openamber.nl/devices](https://openamber.nl/devices) verstuurd. Deze data is anoniem en wordt gebruikt om inzicht te geven in alle OpenAmber-gebruikers die analytics hebben ingeschakeld. |

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

## Categorie: Noodbedrijf

![Noodbedrijf](/images/instellingen-algemeen-noodbedrijf.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Noodbedrijf inschakelen | `switch.emergency_mode_enabled` | Schakelt compressorlogica uit en laat systeem op back-upstrategie draaien. Alleen bij storingen, testwerk of tijdelijk bedrijf zonder normale compressoraansturing. Normaal uit laten. Alleen handmatig inschakelen bij duidelijke aanleiding. Hogere energiekosten, lagere efficiÃ«ntie en mogelijk minder stabiele regeling. |

## Categorie: Opties

![Noodbedrijf](/images/instellingen-algemeen-opties.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Flow sensor aanwezig | `switch.flow_sensor_enabled` | Schakelt het uitlezen van de flow sensor in voor energie berekeningen. Om dit te gebruiken is een aangesloten flow sensor nodig, zie pagina TODO. |
| Flow sensor kalibratie | `number.flow_sensor_calibration` | Kalibratie waarde voor het uitlezen van de flow sensor, afhankelijk van de aangesloten pulse sensor. |


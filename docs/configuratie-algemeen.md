---
title: Algemeen
---

# Algemeen

Alle instellingen op deze pagina zijn ook via Home Assistant aanpasbaar.

## Categorie: Systeem

![Systeem](/images/instellingen-algmeen-algemeen.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Tapwater aanwezig | `switch.dhw_enabled_switch` | Activeert of de installatie tapwaterlogica en gerelateerde tabs gebruikt. Alleen bij installaties zonder actief tapwatercircuit of tijdens diagnose. Aan voor systemen met boilervat/tapwaterfunctie. Uitzetten op een actief tapwatersysteem schakelt DHW-regeling uit. |
| Analytics ingeschakeld | `switch.analytics_enabled_switch` | Als je dit inschakelt, wordt elke 5 minuten diagnose-data naar [https://openamber.nl/devices](https://openamber.nl/devices) verstuurd. Deze data is anoniem en wordt gebruikt om inzicht te geven in alle OpenAmber-gebruikers die analytics hebben ingeschakeld. |

## Categorie: Sensor kalibratie

![Sensor kalibratie](/images/instellingen-sensor-kalibratie.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Ruimtetemperatuur offset | `number.tr_offset` | Corrigeert de gemeten ruimtetemperatuur (Tr) met een vaste offset. Als de gemeten waarde in OpenAmber structureel afwijkt van een betrouwbare referentiesensor. Start met kleine stappen van 0.1 C en controleer gedurende minimaal 24 uur. Te grote offset veroorzaakt foutieve warmtevraag, pendelgedrag of comfortklachten. |
| Tapwatertemperatuur offset | `number.tw_offset` | Corrigeert de tapwatertemperatuurmeting (Tw) met een vaste offset. Bij consistente afwijking tussen OpenAmber en externe meting aan buffervat of leiding. Verander in kleine stappen en beoordeel na een volledige opwarmcyclus. Onjuiste offset kan leiden tot te heet of te koud tapwater en onnodig energieverbruik. |

## Categorie: Noodbedrijf

![Noodbedrijf](/images/instellingen-algemeen-noodbedrijf.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Noodbedrijf inschakelen | `switch.emergency_mode_enabled` | Schakelt compressorlogica uit en laat systeem op back-upstrategie draaien. Alleen bij storingen, testwerk of tijdelijk bedrijf zonder normale compressoraansturing. Normaal uit laten. Alleen handmatig inschakelen bij duidelijke aanleiding. Hogere energiekosten, lagere efficiÃ«ntie en mogelijk minder stabiele regeling. |





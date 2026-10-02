---
title: Verwarmen
---

# Verwarmen

Alle instellingen op deze pagina zijn ook via Home Assistant aanpasbaar.

## Categorie: Algemeen

![Verwarmen algemeen](/images/instellingen-verwarmen-algemeen.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Verwarmingsmodus | `select.heat_mode_select` | Kies stooklijn of extern aangestuurd setpoint. Bij stooklijn wordt weersafhankelijk geregeld op basis van de ingestelde stooklijnpunten. Bij extern setpoint wordt geregeld op een handmatig ingesteld vast setpoint. |
| Extern setpoint (°C) | `number.manual_setpoint` | Cv-aanvoertemperatuur bij extern setpoint. Alleen actief wanneer verwarmingsmodus op "Extern setpoint" staat. Te hoog setpoint verlaagt COP en vergroot kans op pendelen. |
| Verwarmen vermogen | `select.heat_compressor_mode` | Max compressorvermogen bij verwarmen. Opties: Beperkt, Zeer laag, Laag, Gemiddeld, Verhoogd, Hoog, Maximaal. |

## Categorie: Stooklijn

![Verwarmen stooklijn](/images/instellingen-verwarmen-stooklijn.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| -10°C | `number.heat_curve_m10` | Water doeltemperatuur bij -10°C of lagere buitentemperatuur. |
| 0°C | `number.heat_curve_0` | Water doeltemperatuur bij 0°C buitentemperatuur. |
| +5°C | `number.heat_curve_p5` | Water doeltemperatuur bij +5°C buitentemperatuur. |
| +10°C | `number.heat_curve_p10` | Water doeltemperatuur bij +10°C buitentemperatuur. |
| +15°C | `number.heat_curve_p15` | Water doeltemperatuur bij +15°C buitentemperatuur. |

## Categorie: Start/Stop

![Verwarmen start/stop](/images/instellingen-verwarmen-startstop.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Start delta (°C) | `number.compressor_start_delta_heating` | Verschil met setpoint om compressor te starten. Kleinere waarde = sneller starten; grotere waarde = rustiger gedrag. Te laag geeft pendelen en meer starts; te hoog geeft traag comfortherstel. |
| Stop delta (°C) | `number.compressor_stop_delta_heating` | Verschil met setpoint om compressor te stoppen. Te laag veroorzaakt korte cycli; te hoog veroorzaakt overshoot en minder comfort. |

## Categorie: Noodbedrijf

![Noodbedrijf](/images/instellingen-verwarmen-noodbedrijf.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Noodbedrijf | `switch.emergency_mode_enabled` | Schakel de compressor uit en laat alleen het backup-element werken. Alleen inschakelen bij storingen, testwerk of tijdelijk bedrijf zonder normale compressoraansturing. Hogere energiekosten en lagere efficiëntie. |

---
title: Verwarmen
---

# Verwarmen

De verwarmingsinstellingen bepalen hoe de warmtepomp reageert op de warmtevraag in huis. Je kunt kiezen tussen een weersafhankelijke stooklijn of een vast/extern setpoint, het maximale compressorvermogen begrenzen en de start/stop-temperatuurdrempels finetunen om pendelen te minimaliseren.

::: tip Home Assistant synchronisatie
Alle onderstaande instellingen zijn via het touchscreen en via Home Assistant aanpasbaar. Wijzigingen worden direct doorgevoerd en opgeslagen.
:::

## Categorie: Algemeen

![Verwarmen algemeen](/images/instellingen-verwarmen-algemeen.jpg)

| Instelling | Opties / Bereik | Standaard | Home Assistant entiteit | Beschrijving |
| :-- | :-- | :-- | :-- | :-- |
| **Verwarmingsmodus** | Stooklijn / Extern setpoint | Stooklijn | `select.heat_mode_select` | Bepaalt hoe de doeltemperatuur voor de cv-aanvoer berekend wordt. Bij `Stooklijn` regelt OpenAmber weersafhankelijk aan de hand van de buitentemperatuur. Bij `Extern setpoint` regelt het systeem op een vaste temperatuur of een via Home Assistant berekend setpoint. |
| **Extern setpoint (°C)** | 15 t/m 45 °C (stap 1) | 30 °C | `number.manual_setpoint` | Gewenste cv-aanvoertemperatuur wanneer verwarmingsmodus op *Extern setpoint* staat. Kan dynamisch door Home Assistant automatiseringen worden aangepast (bijv. op basis van een slimme thermostaat of energieprijzen). |
| **Verwarmen vermogen** | Beperkt / Zeer laag / Laag / Gemiddeld / Verhoogd / Hoog / Maximaal | Maximaal | `select.heat_compressor_mode` | Begrenzing van het maximale compressorvermogen tijdens verwarmingsbedrijf. Een lagere stand verlaagt de maximale compressorfrequentie, waardoor de warmtepomp stiller draait, een hogere COP behoudt en minder snel gaat pendelen in het tussenseizoen. |

---

## Categorie: Stooklijn

De stooklijn definieert de gewenste wateraanvoertemperatuur bij vijf specifieke buitentemperaturen. Tussen deze punten interpoleert OpenAmber vloeiend.

::: tip Stooklijn inregelen
Verlaag de stooklijn geleidelijk bij zacht weer (+10°C / +15°C) als het binnen te warm wordt. Verhoog bij koud weer (-10°C / 0°C) als de woning niet op temperatuur komt. Wacht na elke aanpassing minimaal 24 tot 48 uur wegens de traagheid van vloerverwarming.
:::

![Verwarmen stooklijn](/images/instellingen-verwarmen-stooklijn.jpg)

| Instelling | Opties / Bereik | Standaard | Home Assistant entiteit | Beschrijving |
| :-- | :-- | :-- | :-- | :-- |
| **-10°C** | 15 t/m 45 °C (stap 1) | 35 °C | `number.heat_curve_m10` | Gewenste cv-aanvoertemperatuur bij een buitentemperatuur van -10°C of lager. |
| **0°C** | 15 t/m 45 °C (stap 1) | 30 °C | `number.heat_curve_0` | Gewenste cv-aanvoertemperatuur bij 0°C buitentemperatuur. |
| **+5°C** | 15 t/m 45 °C (stap 1) | 28 °C | `number.heat_curve_p5` | Gewenste cv-aanvoertemperatuur bij +5°C buitentemperatuur. |
| **+10°C** | 15 t/m 45 °C (stap 1) | 27 °C | `number.heat_curve_p10` | Gewenste cv-aanvoertemperatuur bij +10°C buitentemperatuur. |
| **+15°C** | 15 t/m 45 °C (stap 1) | 25 °C | `number.heat_curve_p15` | Gewenste cv-aanvoertemperatuur bij +15°C buitentemperatuur. |

---

## Categorie: Start/Stop

De start- en stopdelta bepalen de hysterese rond het actieve stooklijn- of handmatige setpoint. Deze waarden zijn cruciaal om pendelgedrag te voorkomen.

![Verwarmen start/stop](/images/instellingen-verwarmen-startstop.jpg)

| Instelling | Opties / Bereik | Standaard | Home Assistant entiteit | Beschrijving |
| :-- | :-- | :-- | :-- | :-- |
| **Start delta (°C)** | 0.1 t/m 10.0 °C (stap 0.1) | 3.0 °C | `number.compressor_start_delta_heating` | Aantal graden dat de watertemperatuur onder het berekende setpoint moet dalen voordat de compressor mag inschakelen. Een kleinere waarde start sneller; een grotere waarde zorgt voor langere rustpauzes en minder starts. |
| **Stop delta (°C)** | 0.1 t/m 10.0 °C (stap 0.1) | 5.0 °C | `number.compressor_stop_delta_heating` | Aantal graden dat de watertemperatuur boven het setpoint mag oplopen voordat de compressor stopt. Voorkomt vroegtijdige afschakeling tijdens opwarmen. Te laag veroorzaakt korte cycli; te hoog kan leiden tot oververhitting. |

---

## Categorie: Noodbedrijf

![Noodbedrijf](/images/instellingen-verwarmen-noodbedrijf.jpg)

| Instelling | Opties / Bereik | Standaard | Home Assistant entiteit | Beschrijving |
| :-- | :-- | :-- | :-- | :-- |
| **Noodbedrijf** | Aan / Uit | Uit | `switch.emergency_mode_enabled` | Schakelt de compressor van de buitenunit volledig uit en laat alle verwarming uitsluitend over aan het elektrische backupelement. Alleen bedoeld bij storingen, onderhoudswerkzaamheden of het testen van het hulpelement. **Let op:** hoog stroomverbruik! |

---
title: Algemeen
---

# Algemeen

De algemene instellingen beheren de systeemopzet van de warmtepomp, zoals de aanwezigheid van een tapwatervat, sensorkalibraties, mengventielen voor meerdere groepen en optionele hardware zoals de flowsensor.

::: tip Home Assistant synchronisatie
Alle onderstaande instellingen zijn via het touchscreen en via Home Assistant aanpasbaar. Wijzigingen worden direct doorgevoerd en opgeslagen.
:::

## Categorie: Systeem

![Systeem](/images/instellingen-algemeen-systeem.jpg)

| Instelling | Opties / Bereik | Standaard | Home Assistant entiteit | Beschrijving |
| :-- | :-- | :-- | :-- | :-- |
| **Tapwater aanwezig** | Aan / Uit | Uit | `switch.dhw_enabled_switch` | Geeft aan of er een tapwatervat (boiler) op het systeem is aangesloten. Schakelt de tapwaterlogica, sensoren en gerelateerde UI-tabs in of uit. Schakel dit alleen uit bij installaties die uitsluitend voor ruimteverwarming/koeling worden gebruikt. |
| **Regeltemperatuur bron** | CV-aanvoer (Tc) / CV-aanvoer zone 1 (Tv1) | CV-aanvoer (Tc) | `select.heat_cool_control_temperature_source_select` | Bepaalt welke temperatuursensor de regelaar gebruikt als actuele proceswaarde voor de PID-sturing naar het gewenste setpoint. Kies `CV-aanvoer (Tc)` voor standaardsystemen en `CV-aanvoer zone 1 (Tv1)` bij menggroepen met naregeling. |
| **Geavanceerde instellingen** | Aan / Uit | Uit | `switch.advanced_settings_enabled` | Schakelt de weergave van geavanceerde instellingentabbladen in de UI in (zoals compressor-PID, defrost-parameters en bodemplaatverwarming). |
| **Analytics versturen** | Aan / Uit | Uit | `switch.analytics_enabled_switch` | Deel anonieme prestatie- en diagnostische telemetry met het centrale communitydashboard op [openamber.nl/devices](https://openamber.nl/devices). Gegevens worden elke 5 minuten veilig verzonden. |

---

## Categorie: Mengventielen

![Mengventielen](/images/instellingen-algemeen-mengventielen-1.jpg)
![Mengventielen](/images/instellingen-algemeen-mengventielen-2.jpg)

| Instelling | Opties / Bereik | Standaard | Home Assistant entiteit | Beschrijving |
| :-- | :-- | :-- | :-- | :-- |
| **Mengventiel zone 1 aanwezig** | Aan / Uit | Uit | `switch.mixing_valve_zone1_enabled` | Geeft aan of een gemengde afgiftegroep (Zone 1) met motorgestuurd mengventiel aanwezig is. Activeert de automatische klepsturing en bijbehorende regellogica. |
| **Minimum positie** | 0 t/m 100% (stap 1) | 0% | `number.mixing_valve_zone1_min_position` | Minimale openingsstand van mengventiel zone 1. Voorkomt dat het ventiel volledig dichtloopt en zorgt voor een gegarandeerde minimale doorstroming. |
| **Maximum positie** | 0 t/m 100% (stap 1) | 100% | `number.mixing_valve_zone1_max_position` | Maximale toelaatbare openingsstand van mengventiel zone 1. |
| **Mengventiel zone 2 aanwezig** | Aan / Uit | Uit | `switch.mixing_valve_zone2_enabled` | Geeft aan of een tweede gemengde afgiftegroep (Zone 2) aanwezig is. Activeert mengventielsturing voor zone 2. |
| **Minimum positie** | 0 t/m 100% (stap 1) | 0% | `number.mixing_valve_zone2_min_position` | Minimale openingsstand van mengventiel zone 2. |
| **Maximum positie** | 0 t/m 100% (stap 1) | 100% | `number.mixing_valve_zone2_max_position` | Maximale toelaatbare openingsstand van mengventiel zone 2. |

---

## Categorie: Sensor kalibratie

Via sensorkalibratie kun je afwijkingen tussen NTC-temperatuursensoren en externe gekalibreerde thermometers compenseren.

::: tip Kalibratie-advies
Voer kalibratiewijzigingen altijd uit met kleine stappen van 0.1°C en evalueer de metingen pas na een stabiele meetperiode van minimaal 24 uur bij continu draaiende installatie.
:::

![Sensor kalibratie](/images/instellingen-algemeen-sensor-kalibratie-1.jpg)
![Sensor kalibratie](/images/instellingen-algemeen-sensor-kalibratie-2.jpg)

| Instelling | Opties / Bereik | Standaard | Home Assistant entiteit | Beschrijving |
| :-- | :-- | :-- | :-- | :-- |
| **Ruimtetemperatuur offset** | -5.0 t/m +5.0 °C (stap 0.1) | 0.0 °C | `number.tr_offset` | Offset-correctie voor de interne ruimtetemperatuursensor van het touchscreen display of de aangesloten kamerthermostaat. |
| **Tapwatertemperatuur offset** | -5.0 t/m +5.0 °C (stap 0.1) | 0.0 °C | `number.tw_offset` | Offset-correctie voor de dompelsensor van het tapwatervat (Tw). Controleer na een volledige opwarmcyclus. |
| **CV-aanvoertemperatuur offset** | -5.0 t/m +5.0 °C (stap 0.1) | 0.0 °C | `number.tc_offset` | Offset-correctie voor de interne CV-aanvoertemperatuurmeting (Tc). |
| **CV-retourtemperatuur (Tui) offset** | -5.0 t/m +5.0 °C (stap 0.1) | 0.0 °C | `number.tui_offset` | Offset-correctie voor de retourtemperatuursensor naar de buitenunit (Tui). Essentieel voor een accurate delta-T berekening over de verdamper. |
| **CV-aanvoertemperatuur (Tuo) offset** | -5.0 t/m +5.0 °C (stap 0.1) | 0.0 °C | `number.tuo_offset` | Offset-correctie voor de aanvoertemperatuursensor vanaf de buitenunit (Tuo). |

---

## Categorie: Opties

![Opties](/images/instellingen-algemeen-opties.jpg)

| Instelling | Opties / Bereik | Standaard | Home Assistant entiteit | Beschrijving |
| :-- | :-- | :-- | :-- | :-- |
| **Flow sensor aanwezig** | Aan / Uit | Uit | `switch.flow_sensor_enabled` | Schakelt de digitale flowmeter in. Hiermee berekent OpenAmber het actuele debiet (l/min), thermisch afgiftelig vermogen (kW) en realtime COP. Vereist een aangesloten flowpulssensor. |
| **Flow sensor kalibratie** | 1 t/m 1000 p/l (stap 1) | 476 p/l | `number.flow_sensor_calibration` | Aantal pulsen per liter van de gemonteerde debietmeter. De standaardwaarde van 476 p/l is nauwkeurig afgestemd op de veeltoegepaste Grundfos VFS / Sika vortex sensoren. Raadpleeg het datablad van je sensor bij een afwijkend type. |

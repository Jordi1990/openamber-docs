---
title: Tapwater
---

# Tapwater

De instellingen voor sanitair warm water (DHW) regelen het opwarmen van het boilervat. OpenAmber biedt uitgebreide mogelijkheden voor energiezuinige opwarming, tijdschema's (bijv. voor eigen zonnestroom), winterboost en automatische legionellapreventie.

::: tip Aanbevolen inregelvolgorde
1. Stel een realistisch basiscomfort in (`setpoint` en `herstart delta`).
2. Kies het basisvermogen en stel de pompstartmodus in op delta-T.
3. Activeer desgewenst het tijdschema om overdag met zonne-energie te laden.
4. Stel de wintertemperatuurdrempel en het wintervermogen in.
5. Activeer en configureer de periodieke legionellapreventie.
:::

## Categorie: Algemeen

![Tapwater algemeen](/images/instellingen-tapwater-algemeen.jpg)

| Instelling | Opties / Bereik | Standaard | Home Assistant entiteit | Beschrijving |
| :-- | :-- | :-- | :-- | :-- |
| **Setpoint (°C)** | 25 t/m 75 °C (stap 1) | 55 °C | `number.dhw_setpoint_temperature` | Doeltemperatuur voor het tapwatervat. Richtwaarde: 50 tot 55°C biedt een uitstekend compromis tussen warmwatercomfort en hoog warmtepomprendement (COP). |
| **Herstart delta (°C)** | 5 t/m 25 °C (stap 1) | 15 °C | `number.dhw_restart_dhw_delta` | Aantal graden dat de boilertemperatuur onder het setpoint moet zakken voordat de warmtepomp opnieuw start met tapwaterproductie. Bij een setpoint van 55°C en delta 15°C herstart de boiler pas bij 40°C. Dit voorkomt onnodig pendelen. |
| **Basisvermogen** | Beperkt / Zeer laag / Laag / Gemiddeld / Verhoogd / Hoog / Maximaal | Beperkt | `select.dhw_compressor_mode` | Begrenzing van het compressorvermogen tijdens normale tapwaterlading. 'Beperkt' zorgt voor rustige opwarming met lagere persgasteperaturen en maximaal rendement. |
| **Tapwaterpomp startmodus** | Aanvoer warmer dan vat (ΔT) / Samen met compressor | Aanvoer warmer dan vat (ΔT) | `select.dhw_pump_start_mode_select` | Bepaalt wanneer de tapwaterlaadpomp begint te draaien. In de delta-T modus start de pomp pas zodra de aanvoer warmer is dan het vat, waardoor afkoeling van de boiler tijdens het optoeren van de compressor wordt voorkomen. |

---

## Categorie: Schema

Met het weekschema kun je tapwaterverwarming beperken tot specifieke tijden en dagen, bijvoorbeeld om maximaal te profiteren van eigen zonnepanelen of goedkope dalurentarieven.

![Tapwater schema](/images/instellingen-tapwater-schema.jpg)

| Instelling | Opties / Bereik | Standaard | Home Assistant entiteit | Beschrijving |
| :-- | :-- | :-- | :-- | :-- |
| **Tapwater schema** | Aan / Uit | Uit | `switch.dhw_schedule_enabled_switch` | Schakelt de schemabewaking in. Indien uitgeschakeld mag de boiler op elk moment van de dag laden zodra de temperatuur onder `setpoint - herstart delta` daalt. |
| **Ma t/m Zo** | Aan / Uit | Aan (per dag) | `switch.dhw_schedule_monday_enabled_switch` t/m `...sunday_enabled_switch` | Bepaalt per weekdag of het tijdschema actief is. Zet een dag uit om op die dag geen geplande tapwaterproductie toe te staan. |
| **Starttijd** | 00:00 t/m 23:30 (stap 30 min) | 10:00 | `time.dhw_start_time` | Begintijd van het toegestane laadvenster (bijv. 10:00 uur wanneer zonnepanelen beginnen te leveren). |
| **Eindtijd** | 00:00 t/m 23:30 (stap 30 min) | 17:00 | `time.dhw_end_time` | Eindtijd van het laadvenster. Ook vensters die over middernacht lopen worden volledig ondersteund (bijv. 22:00 tot 06:00). |

---

## Categorie: Winter

Bij lage buitentemperaturen duurt het opwarmen van tapwater langer. De wintermodus schakelt automatisch over naar een hoger compressorvermogen onder een instelbare buitentemperatuurdrempel.

![Tapwater winter](/images/instellingen-tapwater-winter.jpg)

| Instelling | Opties / Bereik | Standaard | Home Assistant entiteit | Beschrijving |
| :-- | :-- | :-- | :-- | :-- |
| **Wintervermogen** | Gemiddeld / Verhoogd / Hoog / Maximaal | Gemiddeld | `select.dhw_compressor_mode_max` | Verhoogde compressorvermogenslimiet tijdens de wintermodus om de opwarmtijd bij vriesweer binnen de perken te houden. |
| **Wintertemperatuurdrempel** | -20 t/m 10 °C (stap 1) | 5 °C | `number.dhw_temperature_threshold_max_compressor_mode` | Buitentemperatuur waaronder de wintermodus voor tapwater actief wordt. Pas in kleine stappen aan en monitor de opwarmduur. |

---

## Categorie: Legionella

![Tapwater legionella](/images/instellingen-tapwater-legionella.jpg)

| Instelling | Opties / Bereik | Standaard | Home Assistant entiteit | Beschrijving |
| :-- | :-- | :-- | :-- | :-- |
| **Legionellapreventie** | Aan / Uit | Uit | `switch.legio_enabled_switch` | Schakelt periodieke thermische desinfectie in. Aanbevolen voor huishoudens met een boilervat. |
| **Legionella herhaling (dgn)** | 7 t/m 60 dagen (stap 1) | 7 d | `number.legio_repeat_days_number` | Interval in dagen tussen automatische legionelladesinfectie-runs. Standaard wekelijks (7 dagen). |
| **Legionella doeltemperatuur (°C)** | 55 t/m 65 °C (stap 1) | 60 °C | `number.legio_target_temperature_number` | Doeltemperatuur tijdens de legionellacyclus. Minimaal 60°C volgens de geldende hygiënerichtlijnen. Kan eventueel met behulp van het backupelement worden bereikt. |

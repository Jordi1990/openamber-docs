---
title: Pomp
---

# Pomp

Alle instellingen op deze pagina zijn ook via Home Assistant aanpasbaar.

## Categorie: Algemeen

![Pomp algemeen](/images/instellingen-pomp-algemeen.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Pomp P1 aanwezig | `switch.pump_p1_enabled` | Extra circulatiepomp P1 aanwezig. Alleen inschakelen als P1 fysiek aanwezig en correct aangesloten is. |
| Pompinterval (min) | `number.pump_interval` | Tussentijd periodiek pompen bij warmte-/koudevraag. Start met fabrieksnabije waarden en optimaliseer op stabiele flow. |
| Pompduur (min) | `number.pump_duration` | Draaitijd bij periodiek pompen. Zo kort mogelijk, maar lang genoeg voor stabiele systeemrespons. |
| Flow switch uitvalvertraging (min) | `number.flow_switch_safety_delay_minutes` | Stop bij geen flow na ingesteld aantal minuten. |

## Categorie: Snelheid

![Pomp snelheid](/images/instellingen-pomp-snelheid.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Pompsnelheid verwarmen | `number.pump_speed_heating_number` | Pompsnelheid tijdens verwarmen. Zoek balans tussen voldoende afgifte en laag pompvermogen. |
| Pompsnelheid koelen | `number.pump_speed_cooling_number` | Pompsnelheid tijdens koelen. Rustig opbouwen en binnenklimaat + retourtemperatuur monitoren. |
| Pompsnelheid tapwater | `number.pump_speed_dhw_number` | Pompsnelheid tijdens het verwarmen van tapwater. |

## Categorie: Dynamisch PWM P0

![Pomp dynamisch PWM P0](/images/instellingen-pomp-dynamisch-1.jpg)
![Pomp dynamisch PWM P0](/images/instellingen-pomp-dynamisch-2.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Pomp P0 Dynamisch PWM (Verwarmen) | `switch.pump_p0_pid_enabled` | Regel P0 automatisch op basis van delta-T tijdens verwarmen. |
| Gewenste delta-T | `number.pump_p0_pid_target_delta_t` | Doelwaarde voor Tuo - Tui tijdens verwarmen. |
| Minimale pomp snelheid | `number.pump_p0_pid_min_pwm` | Ondergrens voor automatische P0-regeling. |
| Maximale pomp snelheid | `number.pump_p0_pid_max_pwm` | Bovengrens voor automatische P0-regeling. |
| Pompsnelheid ontdooien | `number.pump_p0_pid_defrost_pwm` | Pompsnelheid tijdens de ontdooicyclus. |
| PID P (Kp) | `number.pump_p0_pid_kp` | Hoger: sneller meer pompcapaciteit bij oplopende delta-T. |
| PID I (Ki) | `number.pump_p0_pid_ki` | Lage integrale correctie voor trage vloerverwarming zonder jagen. |
| PID D (Kd) | `number.pump_p0_pid_kd` | Demping bij snelle schommelingen. |

## Categorie: Vorstbescherming

![Vorstbescherming](/images/instellingen-pomp-vorstbescherming.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Buitentemperatuur 1e trap | `number.frost_protection_stage_1_temp_ta` | Buitentemperatuur waaronder trap 1 activeert. Afstemmen op installatie, isolatie en lokale klimaatomstandigheden. |
| Buitentemperatuur 2e trap | `number.frost_protection_stage_2_temp_ta` | Buitentemperatuur waaronder trap 2 activeert. Fase 2 normaal strenger dan fase 1, zodat escalatie logisch blijft. |
| Watertemperatuur 2e trap | `number.frost_protection_stage_2_temp_tui` | Watertemperatuur waaronder trap 2 activeert. |

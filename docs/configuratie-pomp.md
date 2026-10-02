---
title: Pomp
---

# Pomp

De pompinstellingen regelen het gedrag van de primaire circulatiepomp (P0) en een optionele secundaire pomp (P1). Je kunt vaste snelheden instellen, periodieke spoelcycli finetunen, dynamische PWM-modulatie op basis van delta-T inschakelen en tweetraps vorstbeveiliging configureren.

::: tip Home Assistant synchronisatie
Alle onderstaande instellingen zijn via het touchscreen en via Home Assistant aanpasbaar. Wijzigingen worden direct doorgevoerd en opgeslagen.
:::

## Categorie: Algemeen

![Pomp algemeen](/images/instellingen-pomp-algemeen.jpg)

| Instelling | Opties / Bereik | Standaard | Home Assistant entiteit | Beschrijving |
| :-- | :-- | :-- | :-- | :-- |
| **Pomp P1 aanwezig** | Aan / Uit | Uit | `switch.pump_p1_enabled` | Schakelt de aansturing van een secundaire circulatiepomp (P1) in. Alleen activeren indien fysiek aangesloten op de daarvoor bestemde klemmenstrook. |
| **Pompinterval (min)** | 5 t/m 60 min (stap 1) | 15 min | `number.pump_interval` | Wachttijd tussen periodieke spoelbeurten bij warmte- of koelvraag om stilstaand leidingwater door te spoelen voor een betrouwbare temperatuurmeting. |
| **Pompduur (min)** | 2 t/m 10 min (stap 1) | 2 min | `number.pump_duration` | Looptijd van de pomp tijdens elke periodieke spoelbeurt. Zo kort mogelijk om stroom te besparen, maar lang genoeg voor een stabiele temperatuurmeting. |
| **Flow switch uitvalvertraging (min)** | 0 t/m 10 min (stap 1) | 0 min | `number.flow_switch_safety_delay_minutes` | Toegestane vertraging bij wegvallen van het flowsensorsignaal voordat een storingsalarm wordt getriggerd en de warmtepomp stopt. |

---

## Categorie: Snelheid

Vaste toerentallen van de circulatiepomp voor verschillende bedrijfsmodi (wanneer dynamische PWM-regeling is uitgeschakeld).

![Pomp snelheid](/images/instellingen-pomp-snelheid.jpg)

| Instelling | Opties / Bereik | Standaard | Home Assistant entiteit | Beschrijving |
| :-- | :-- | :-- | :-- | :-- |
| **Pompsnelheid verwarmen** | 0 t/m 100% (stap 1) | 100% | `number.pump_speed_heating_number` | Vaste pompsnelheid tijdens cv-bedrijf. Zoek naar een balans tussen voldoende volumestroom over de warmtewisselaar en minimaal stroomverbruik en stromingsgeluid. |
| **Pompsnelheid koelen** | 0 t/m 100% (stap 1) | 100% | `number.pump_speed_cooling_number` | Vaste pompsnelheid tijdens actief koelbedrijf. |
| **Pompsnelheid tapwater** | 0 t/m 100% (stap 1) | 100% | `number.pump_speed_dhw_number` | Pompsnelheid tijdens de tapwaterlaadcyclus. Een hoge snelheid bevordert snelle warmteoverdracht in de boilerspiraal. |

---

## Categorie: Dynamisch PWM P0

Dynamische PWM-modulatie past het toerental van circulatiepomp P0 continu aan via een PID-regelaar om een constant temperatuurverschil (delta-T) tussen aanvoer en retour te handhaven.

![Pomp dynamisch PWM P0](/images/instellingen-pomp-dynamisch-1.jpg)
![Pomp dynamisch PWM P0](/images/instellingen-pomp-dynamisch-2.jpg)

| Instelling | Opties / Bereik | Standaard | Home Assistant entiteit | Beschrijving |
| :-- | :-- | :-- | :-- | :-- |
| **Pomp P0 Dynamisch PWM (Verwarmen)** | Aan / Uit | Uit | `switch.pump_p0_pid_enabled` | Schakelt de automatische PID-toerentalregeling van pomp P0 tijdens verwarmen in. |
| **Gewenste delta-T** | 2.0 t/m 10.0 °C (stap 0.1) | 3.0 °C | `number.pump_p0_pid_target_delta_t` | Gewenst temperatuurverschil tussen cv-aanvoer en retour (Tuo - Tui) tijdens verwarmen (typisch 3.0 tot 5.0 °C voor vloerverwarming). |
| **Minimale pomp snelheid** | 20 t/m 100% (stap 1) | 70% | `number.pump_p0_pid_min_pwm` | Ondergrens voor het PWM-stuursignaal naar de pomp om te garanderen dat altijd aan het minimum debiet van de buitenunit wordt voldaan. |
| **Maximale pomp snelheid** | 20 t/m 100% (stap 1) | 100% | `number.pump_p0_pid_max_pwm` | Bovengrens voor de pomp tijdens dynamische modulatie. |
| **Pompsnelheid ontdooien** | 20 t/m 100% (stap 1) | 100% | `number.pump_p0_pid_defrost_pwm` | Pompsnelheid tijdens een actieve ontdooicyclus. **Belangrijk:** Altijd op 100% laten staan om maximale warmte uit de cv-installatie naar de verdamper te voeren. |
| **PID P (Kp)** | 0.00 t/m 1.00 (stap 0.01) | 0.12 | `number.pump_p0_pid_kp` | Proportionele versterking: regelt snel meer pompdebiet bij een stijgende delta-T. |
| **PID I (Ki)** | 0.0000 t/m 0.0100 (stap 0.0001) | 0.0015 | `number.pump_p0_pid_ki` | Integrale factor: elimineert aanhoudende kleine delta-T afwijkingen zonder pomp-jagen. |
| **PID D (Kd)** | 0.00 t/m 2.00 (stap 0.01) | 0.00 | `number.pump_p0_pid_kd` | Differentiële demping: stabiliseert bij plotselinge stromings- of temperatuurschommelingen. |

---

## Categorie: Vorstbescherming

Tweetraps vorstbeveiliging beschermt de externe leidingen en warmtewisselaar tegen bevriezing bij koud weer.

![Vorstbescherming](/images/instellingen-pomp-vorstbescherming.jpg)

| Instelling | Opties / Bereik | Standaard | Home Assistant entiteit | Beschrijving |
| :-- | :-- | :-- | :-- | :-- |
| **Buitentemperatuur 1e trap** | 0.0 t/m 10.0 °C (stap 0.1) | 5.0 °C | `number.frost_protection_stage_1_temp_ta` | Buitentemperatuurdrempel (Ta) waaronder de circulatiepomp periodiek start om stilstaand water in het buitenleidingwerk in beweging te houden. |
| **Buitentemperatuur 2e trap** | 0.0 t/m 10.0 °C (stap 0.1) | 4.0 °C | `number.frost_protection_stage_2_temp_ta` | Buitentemperatuurdrempel voor de 2e trap vorstbeveiliging (intensievere pompcyclus of elektrische ondersteuning). |
| **Watertemperatuur 2e trap** | 0.0 t/m 10.0 °C (stap 0.1) | 7.0 °C | `number.frost_protection_stage_2_temp_tui` | Retourwatertemperatuur (Tui) waaronder de 2e trap direct ingrijpt om bevriezing van de platenwisselaar te voorkomen. |

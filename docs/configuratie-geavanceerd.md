---
title: Geavanceerd
---

# Geavanceerd

De geavanceerde instellingenpagina bevat parameters voor het fijnslijpen van de PID-modulatielussen, de bodemplaatverwarming van de buitenunit en de ontdooicyclus (defrost). 

::: tip Zichtbaarheid
Deze pagina en bijbehorende tabbladen worden zichtbaar zodra **Geavanceerde instellingen** is ingeschakeld op de [Algemeen pagina](./configuratie-algemeen.html).
:::

::: warning Let op bij PID- en Defrost-wijzigingen
De fabrieksinstellingen zijn met zorg gekozen voor typische Nederlandse woningen met vloerverwarming. Verander PID-parameters en defrost-registers alleen als je bekend bent met regeltechniek. Pas waarden altijd in zeer kleine stappen aan.
:::

## Categorie: PID Control Verwarmen

De PID-regelaar voor verwarmen stuurt het vermogen en toerental van de compressor aan op basis van het verschil tussen de actuele watertemperatuur en het berekende cv-aanvoersetpoint.

![Verwarmen PID](/images/instellingen-geavanceerd-pid-1.jpg)

| Instelling | Opties / Bereik | Standaard | Home Assistant entiteit | Beschrijving |
| :-- | :-- | :-- | :-- | :-- |
| **Verwarmen PID P (Kp)** | 0.00 t/m 3.00 (stap 0.01) | 0.60 | `number.pid_heat_kp` | Proportionele versterking: bepaalt hoe fel de compressor optoert bij een temperatuurafwijking. Een hogere waarde reageert sneller op afkoeling, maar vergroot de kans op overshoot en pendelen; een lagere waarde geeft een rustiger maar trager verloop. |
| **Verwarmen PID I (Ki)** | 0.0000 t/m 0.0500 (stap 0.0001) | 0.0020 | `number.pid_heat_ki` | Integrale term: elimineert aanhoudende kleine afwijkingen tussen actuele temperatuur en het setpoint. Een lage waarde past het beste bij de trage respons van vloerverwarming. |
| **Verwarmen PID D (Kd)** | 0.00 t/m 25.00 (stap 0.01) | 0.70 | `number.pid_heat_kd` | Derivatieve term: dempt snelle temperatuurschommelingen en voorkomt overshoot wanneer de doeltemperatuur snel nadert. |
| **Verwarmen PID deadband (+/-)** | 0.0 t/m 5.0 °C (stap 0.1) | 1.0 °C | `number.pid_heat_deadband` | Neutrale zone rond het setpoint waarin het PID-uitgangssignaal constant blijft. Voorkomt dat de compressor onrustig continu van frequentie wisselt bij minimale fluctuaties. |

---

## Categorie: PID Control Koelen

De PID-regelaar voor koelen stuurt de compressor aan wanneer het systeem in koelmodus actief is.

![Koelen PID](/images/instellingen-geavanceerd-pid-2.jpg)

| Instelling | Opties / Bereik | Standaard | Home Assistant entiteit | Beschrijving |
| :-- | :-- | :-- | :-- | :-- |
| **Koelen PID P (Kp)** | 0.00 t/m 3.00 (stap 0.01) | 0.60 | `number.pid_cool_kp` | Proportionele actie voor de koelregeling. Bepaalt de felle reactie op een oplopende watertemperatuur. |
| **Koelen PID I (Ki)** | 0.0000 t/m 0.0500 (stap 0.0001) | 0.0020 | `number.pid_cool_ki` | Integrale term voor het compenseren van blijvende koeltemperatuurafwijkingen. |
| **Koelen PID D (Kd)** | 0.00 t/m 25.00 (stap 0.01) | 0.70 | `number.pid_cool_kd` | Derivatieve actie voor stabiliteit rond het koelsetpoint. |
| **Koelen PID deadband (+/-)** | 0.0 t/m 5.0 °C (stap 0.1) | 1.0 °C | `number.pid_cool_deadband` | Dode band rond het koelsetpoint waarin de compressor op een stabiele capaciteit blijft draaien. |

---

## Categorie: PID Deadband

Overzicht en snelle instelling van de neutrale zones rond het setpoint voor zowel verwarmen als koelen.

![Pomp deadband](/images/instellingen-geavanceerd-pid-3.jpg)

| Instelling | Opties / Bereik | Standaard | Home Assistant entiteit | Beschrijving |
| :-- | :-- | :-- | :-- | :-- |
| **Verwarmen PID deadband (+/-)** | 0.0 t/m 5.0 °C (stap 0.1) | 1.0 °C | `number.pid_heat_deadband` | Neutrale band rond het verwarmingssetpoint. |
| **Koelen PID deadband (+/-)** | 0.0 t/m 5.0 °C (stap 0.1) | 1.0 °C | `number.pid_cool_deadband` | Neutrale band rond het koelsetpoint. |

---

## Categorie: PID Control Pomp P0

Regelt de automatische toerentalmodulatie van de primaire circulatiepomp (P0) op basis van de delta-T over de warmtepomp.

![Pomp P0 PID](/images/instellingen-geavanceerd-pid-4.jpg)

| Instelling | Opties / Bereik | Standaard | Home Assistant entiteit | Beschrijving |
| :-- | :-- | :-- | :-- | :-- |
| **Pomp P0 PID P (Kp)** | 0.00 t/m 1.00 (stap 0.01) | 0.12 | `number.pump_p0_pid_kp` | Proportionele versterking: verhoogt het pompdebiet snel wanneer de delta-T (Tuo - Tui) boven het streefniveau oploopt. |
| **Pomp P0 PID I (Ki)** | 0.0000 t/m 0.0100 (stap 0.0001) | 0.0015 | `number.pump_p0_pid_ki` | Integrale factor: zorgt voor een uiterst rustige aanpassing aan de traagheid van het leidingnetwerk zonder pomp-jagen. |
| **Pomp P0 PID D (Kd)** | 0.00 t/m 2.00 (stap 0.01) | 0.00 | `number.pump_p0_pid_kd` | Differentiële demping bij abrupte druk- of debietwisselingen. |

---

## Categorie: Bodemplaat

Deze instellingen sturen het elektrische verwarmingselement in de lekbak van de buitenunit aan om ijsafzetting bij vrieskou en condensafvoer te voorkomen.

::: note Directe Modbus koppeling
Deze instellingen worden direct gecommuniceerd met de EEPROM holding registers van de buitenunit (registers 3236, 3237 en 3238).
:::

![Bodemplaat](/images/instellingen-geavanceerd-bodemplaat.jpg)

| Instelling | Opties / Bereik | Standaard | Home Assistant entiteit | Beschrijving |
| :-- | :-- | :-- | :-- | :-- |
| **Bodemplaat** | Onbekend / Buitentemperatuur / Tijdens defrost | Tijdens defrost | `select.bottomplate_heater_mode` | Bepaalt wanneer het lekbakelement inschakelt (register 3236). Bij `Tijdens defrost` schakelt het element in zodra de ontdooicyclus start en stopt het 2 minuten na afloop. Bij `Buitentemperatuur` schakelt het in onder de ingestelde buitentemperatuur. |
| **Starttemperatuur bodemplaat** | -10 t/m 10 °C (stap 1) | 4 °C *(34 raw)* | `number.bottomplate_heater_ambient_temperature_start` | Buitentemperatuurdrempel waaronder het bodemplaatelement inschakelt in buitentemperatuurmodus (register 3237, raw waarde = T + 30). |
| **Stop-hysterese bodemplaat** | 1 t/m 10 °C (stap 1) | 3 °C | `number.bottomplate_heater_ambient_hysteresis_stop` | Hysterese voor het uitschakelen van de bodemplaatverwarming (register 3238). Uitschakeling vindt plaats bij `Starttemperatuur + Hysterese`. |

---

## Categorie: Defrost

De ontdooiparameters regelen het gedrag van de buitenunit bij rijpvorming op de verdamper. Deze waarden corresponderen direct met de holding registers van de buitenunit.

![Defrost](/images/instellingen-geavanceerd-defrost-1.jpg)
![Defrost](/images/instellingen-geavanceerd-defrost-2.jpg)

| Instelling | Opties / Bereik | Standaard | Home Assistant entiteit | Beschrijving |
| :-- | :-- | :-- | :-- | :-- |
| **Exit defrost temperatuur** | 0 t/m 25 °C (stap 1) | 17 °C *(47 raw)* | `number.exit_defrost_temperature` | Temperatuur van de buitenwarmtewisselaar waarop de ontdooicyclus als voltooid wordt beschouwd en de vierwegklep terugschakelt naar verwarmen (register 3277, raw waarde = T + 30). |
| **Maximale ontdooitijd** | 1 t/m 30 min (stap 1) | 8 min | `number.max_defrost_time` | Maximale tijdsduur van een ontdooicyclus ter beveiliging tegen vastlopende defrost-cycli (register 3278). |
| **Defrost starttemperatuur 1** | -15 t/m 5 °C (stap 1) | -3 °C *(27 raw)* | `number.enter_defrost_temperature` | Primaire temperatuurdrempel van de verdamper om de automatische ontdooiprocedure te starten (register 3276, raw waarde = T + 30). |
| **Defrost starttemperatuur 2** | -3.0 t/m 3.0 °C (stap 0.1) | 0.0 °C | `number.enter_defrost_temperature_2` | Secundaire ontdooitemperatuurdrempel (register 3336). |
| **Defrost starttemperatuur 3** | -10.0 t/m -3.0 °C (stap 0.1) | -5.0 °C | `number.enter_defrost_temperature_3` | Derde ontdooitemperatuurdrempel voor lage omgevingstemperaturen (register 3337). |
| **Defrost starttemperatuur 4** | -10.0 t/m -3.0 °C (stap 0.1) | -7.0 °C | `number.enter_defrost_temperature_4` | Vierde ontdooitemperatuurdrempel voor strenge vorstcondities (register 3338). |

---
title: Geavanceerd
---

# Geavanceerd

Alle instellingen op deze pagina zijn ook via Home Assistant aanpasbaar.

::: tip
Deze instellingen zijn alleen zichtbaar wanneer "Geavanceerde instellingen" is ingeschakeld op de Algemeen pagina.
:::

## Categorie: PID Control Verwarmen

![Verwarmen PID](/images/instellingen-geavanceerd-pid-1.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Verwarmen PID P (Kp) | `number.pid_heat_kp` | Hoger: sneller reageren, lager: rustiger maar trager. Proportionele versterking voor compressorregeling in verwarmingsmodus. |
| Verwarmen PID I (Ki) | `number.pid_heat_ki` | Hoger: corrigeert afwijking sneller, lager: minder agressief. Integrale term die blijvende fout wegregelt. |
| Verwarmen PID D (Kd) | `number.pid_heat_kd` | Hoger: dempt schommelingen, lager: directer maar onrustiger. Derivatieve term voor demping rond setpoint. |
| Verwarmen PID deadband (+/-) | `number.pid_heat_deadband` | Zone rond setpoint waarin PID-output minder wijzigt. Voorkomt onrustig schakelen rond het setpoint. |

## Categorie: PID Control Koelen

![Koelen PID](/images/instellingen-geavanceerd-pid-2.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Koelen PID P (Kp) | `number.pid_cool_kp` | Hoger: sneller reageren, lager: rustiger maar trager. Proportionele versterking voor koelregeling. |
| Koelen PID I (Ki) | `number.pid_cool_ki` | Hoger: corrigeert afwijking sneller, lager: minder agressief. Integrale term die blijvende koelfout corrigeert. |
| Koelen PID D (Kd) | `number.pid_cool_kd` | Hoger: dempt schommelingen, lager: directer maar onrustiger. Derivatieve term voor demping rond koelsetpoint. |
| Koelen PID deadband (+/-) | `number.pid_cool_deadband` | Zone rond setpoint waarin PID-output minder wijzigt. Voorkomt onrustig schakelen rond het koelsetpoint. |

## Categorie: PID Deadband

![Pomp deadband](/images/instellingen-geavanceerd-pid-3.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Verwarmen PID deadband (+/-) | `number.pid_heat_deadband` | Zone rond setpoint waarin PID-output minder wijzigt. Voorkomt onrustig schakelen rond het setpoint. |
| Koelen PID deadband (+/-) | `number.pid_cool_deadband` | Zone rond setpoint waarin PID-output minder wijzigt. Voorkomt onrustig schakelen rond het koelsetpoint. |

## Categorie: PID Control Pomp P0

![Pomp P0 PID](/images/instellingen-geavanceerd-pid-4.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Pomp P0 PID P (Kp) | `number.pump_p0_pid_kp` | Hoger: sneller meer pompcapaciteit bij oplopende delta-T. |
| Pomp P0 PID I (Ki) | `number.pump_p0_pid_ki` | Lage integrale correctie voor trage vloerverwarming zonder jagen. |
| Pomp P0 PID D (Kd) | `number.pump_p0_pid_kd` | Demping bij snelle schommelingen. |

## Categorie: Bodemplaat

![Bodemplaat](/images/instellingen-geavanceerd-bodemplaat.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Bodemplaat | `select.bottomplate_heater_mode` | Kies wanneer actief. Opties: Onbekend, Buitentemperatuur, Tijdens defrost. |
| Starttemperatuur bodemplaat | `number.bottomplate_heater_ambient_temperature_start` | Buitentemperatuur voor inschakelen bodemplaat. Te laat starten verhoogt ijsrisico; te vroeg starten verhoogt energieverbruik. |
| Stop-hysterese bodemplaat | `number.bottomplate_heater_ambient_hysteresis_stop` | Hysterese voor uitschakelen bodemplaat. Genoeg hysterese om schakelen te dempen, maar niet zo groot dat onnodig lang doorverwarmd wordt. |

## Categorie: Defrost

![Defrost](/images/instellingen-geavanceerd-defrost-1.jpg)
![Defrost](/images/instellingen-geavanceerd-defrost-2.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Exit defrost temperatuur | `number.exit_defrost_temperature` | Defrost stoptemperatuur. Zo instellen dat ijs weg is zonder onnodig lang in defrost te blijven. |
| Maximale ontdooitijd | `number.max_defrost_time` | Maximum duur van een defrost-cyclus. Te laag kan incomplete ontdooiing geven; te hoog kan veel energie kosten. |
| Defrost starttemperatuur 1 | `number.enter_defrost_temperature` | Eerste drempel voor starten van ontdooicyclus. Te agressief verlaagt seizoensrendement; te terughoudend verhoogt ijsrisico. |
| Defrost starttemperatuur 2 | `number.enter_defrost_temperature_2` | Tweede defrost startdrempel voor aanvullende triggerlogica. Houd logische relatie met drempel 1. |
| Defrost starttemperatuur 3 | `number.enter_defrost_temperature_3` | Derde defrost startdrempel. |
| Defrost starttemperatuur 4 | `number.enter_defrost_temperature_4` | Vierde defrost startdrempel. |

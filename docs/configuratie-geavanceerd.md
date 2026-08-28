---
title: Geavanceerd
---

# Geavanceerd

Alle instellingen op deze pagina zijn ook via Home Assistant aanpasbaar.

## Categorie: Bodemplaat

![Bodemplaat](/images/instellingen-geavanceerd-bodemplaat.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Starttemperatuur bodemplaatverwarming | `number.bottomplate_heater_ambient_temperature_start` | Buitentemperatuur waarbij bodemplaatverwarming mag starten. Bij ijsvorming, vochtproblemen of onnodig actief bodemplaatgebruik. Conservatief instellen en gedrag in vochtige/koude dagen evalueren. Te laat starten verhoogt ijsrisico; te vroeg starten verhoogt energieverbruik. |
| Stophysterese bodemplaatverwarming | `number.bottomplate_heater_ambient_hysteresis_stop` | Hysterese voor uitschakelen van bodemplaatverwarming om snel schakelen te voorkomen. Bij korte aan/uit cycli van bodemplaatverwarming. Genoeg hysterese om schakelen te dempen, maar niet zo groot dat onnodig lang doorverwarmd wordt. Te kleine hysterese geeft pendelen; te grote hysterese kost extra energie. |

## Categorie: Defrost start

![Defrost 1](/images/instellingen-geavanceerd-defrost-1.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Defrost start drempel 1 | `number.enter_defrost_temperature` | Eerste drempel voor starten van ontdooicyclus. Bij te laat ontdooien (ijsopbouw) of te vaak ontdooien. Kleine stapjes met monitoring van buitenunitgedrag. Te agressief verlaagt seizoensrendement; te terughoudend verhoogt ijsrisico. |
| Defrost start drempel 2 | `number.enter_defrost_temperature_2` | Tweede defroststartniveau voor aanvullende triggerlogica. Alleen in combinatie met analyse van defrostpatroon. Houd logische relatie met drempel 1. Verkeerde combinatie kan onvoorspelbare defrostfrequentie geven. |

## Categorie: Defrost stop

![Defrost 2](/images/instellingen-geavanceerd-defrost-2.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Defrost stoptemperatuur | `number.exit_defrost_temperature` | Temperatuurdoel om ontdooicyclus af te ronden. Bij te korte of juist te lange defrostcycli. Zo instellen dat ijs weg is zonder onnodig lang in defrost te blijven. Te laag kan restijs achterlaten; te hoog verlengt cyclus onnodig. |
| Maximale defrosttijd | `number.max_defrost_time` | Hard limiet op duur van een defrostcyclus. Bij uitzonderlijke weersituaties of beschermingsinstellingen. Alleen voorzichtig aanpassen en effect op veiligheid/comfort beoordelen. Te laag kan incomplete ontdooiing geven; te hoog kan veel energie kosten. |

## Categorie: PID Control Verwarmen

![Verwarmen PID](/images/instellingen-geavanceerd-verwarmenpid.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| PID Kp verwarmen | `number.pid_heat_kp` | Proportionele versterking voor compressorregeling in verwarmingsmodus. Bij te trage respons of overshoot rond setpoint. Kleine stappen, steeds meerdere cycli observeren. Te hoog geeft oscillatie; te laag geeft trage regeling. |
| PID Ki verwarmen | `number.pid_heat_ki` | Integrale term die blijvende fout wegregelt. Bij blijvende afwijking rond setpoint ondanks correcte Kp. Voorzichtig verhogen; let op langzame oscillaties. Te hoog veroorzaakt opbouw en doorschieten. |

## Categorie: PID Control Koelen

![Koelen PID](/images/instellingen-geavanceerd-koelenpid.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| PID Kp koelen | `number.pid_cool_kp` | Proportionele versterking voor koelregeling. Bij traag reageren op warmtelast of te schokkerige reactie. In kleine stappen, met aandacht voor comfort en ontvochtiging. Te hoog geeft pendelen; te laag onvoldoende correctie. |
| PID Ki koelen | `number.pid_cool_ki` | Integrale term die blijvende koelfout corrigeert. Bij structurele afwijking van koelsetpoint. Langzaam tunen en over langere tijd evalueren. Te hoog kan overkoeling en instabiliteit geven. |





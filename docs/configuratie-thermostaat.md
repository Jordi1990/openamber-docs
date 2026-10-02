---
title: Thermostaat
---

# Thermostaat

Alle instellingen op deze pagina zijn ook via Home Assistant aanpasbaar.

## Categorie: Algemeen

![Thermostaat algemeen](/images/instellingen-thermostaat-algemeen.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Thermostaat bron | `select.thermostat_mode_select` | Kies intern of extern thermostaatsignaal. Intern voor standalone gebruik, extern wanneer een externe thermostaat leidend moet zijn. Opties: Intern, Extern. |
| Standaard setpoint verwarmen | `number.thermostat_default_heat_setpoint` | Setpoint verwarmen na herstart. Afstemmen op gebouwtraagheid en gewenst comfortniveau. |
| Standaard setpoint koelen | `number.thermostat_default_cool_setpoint` | Setpoint koelen na herstart. Afstemmen op comfort, gebouwmassa en condensatiegrens van het afgiftesysteem. |

## Categorie: Verwarmen

![Thermostaat verwarmen](/images/instellingen-thermostaat-verwarmen.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Deadband verwarmen | `number.thermostat_heat_deadband` | Temperatuurverschil onder setpoint voor verwarmen. Klein genoeg voor comfort, groot genoeg om pendelen te beperken. |
| Overrun verwarmen | `number.thermostat_heat_overrun` | Temperatuurverschil boven setpoint voor stoppen. In kleine stappen aanpassen in combinatie met deadband. |

## Categorie: Koelen

![Thermostaat koelen](/images/instellingen-thermostaat-koelen.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Deadband koelen | `number.thermostat_cool_deadband` | Temperatuurverschil boven setpoint voor koelen. Zodanig kiezen dat comfort stabiel blijft zonder overmatig schakelen. |
| Overrun koelen | `number.thermostat_cool_overrun` | Temperatuurverschil onder setpoint voor stoppen. Kleine wijzigingen en monitor op comfort + luchtvochtigheid. |

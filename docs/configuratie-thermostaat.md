---
title: Thermostaat
---

# Thermostaat

Deze instellingen zijn ook via Home Assistant aanpasbaar.

## Categorie: Algemeen

![Thermostaat algemeen](/images/instellingen-thermostaat-algemeen.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Thermostaat bron | `select.thermostat_mode_select` | Kiest of de regeling het interne of externe thermostaatsignaal gebruikt. Bij omschakeling tussen interne ruimteregeling en een externe thermostaatbron. Intern voor standalone gebruik, extern wanneer een externe thermostaat leidend moet zijn. Verkeerde bron kan ervoor zorgen dat warmtevraag/koelvraag niet volgens verwachting reageert. |
| Thermostaat setpoint | `number.thermostat_setpoint_number` | Basisdoeltemperatuur voor interne thermostaatlogica. Bij structureel comfortverschil in interne regeling. Kleine stappen en evaluatie over meerdere dagdelen. Te hoog of te laag setpoint kan comfortverlies en hoger verbruik geven. |
| Standaard verwarmsetpoint thermostaat | `number.thermostat_default_heat_setpoint` | Standaard verwarmdoel voor thermostaatbedrijf na herstart. Bij aanpassen van algemene comfortstrategie. Afstemmen op gebouwtraagheid en gewenst comfortniveau. Te agressieve waarden verhogen schakelmomenten en verbruik. |
| Standaard koelsetpoint thermostaat | `number.thermostat_default_cool_setpoint` | Standaard koeldoel voor thermostaatbedrijf na herstart. Bij structureel te koud of te warm koelgedrag direct na opstart. Afstemmen op comfort, gebouwmassa en condensatiegrens van het afgiftesysteem. Te laag standaard koelsetpoint verhoogt comfortklachten en energieverbruik. |

## Categorie: Verwarmen

![Thermostaat verwarmen](/images/instellingen-thermostaat-verwarmen.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Deadband verwarmen | `number.thermostat_heat_deadband` | Temperatuurmarge onder setpoint waarna verwarmen actief wordt. Bij te vaak schakelen rond setpoint of te trage reactie op afkoeling. Klein genoeg voor comfort, groot genoeg om pendelen te beperken. Te kleine deadband geeft veel start/stop, te grote deadband geeft voelbare comfortdip. |
| Overrun verwarmen | `number.thermostat_heat_overrun` | Temperatuurmarge boven setpoint voordat verwarmvraag stopt. Bij doorschieten in temperatuur of te vroeg stoppen van warmteafgifte. In kleine stappen aanpassen in combinatie met deadband. Te hoge overrun geeft overshoot en comfortschommelingen. |

## Categorie: Koelen

![Thermostaat koelen](/images/instellingen-thermostaat-koelen.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Koel overrun thermostaat | `number.thermostat_cool_overrun` | Bepaalt extra marge/doorloop in koelthermostaatgedrag. Bij te abrupt stoppen of juist te lang doorkoelen. Kleine wijzigingen en monitor op comfort + luchtvochtigheid. Verkeerde marge kan pendelen of overkoeling veroorzaken. |
| Deadband koelen | `number.thermostat_cool_deadband` | Temperatuurmarge boven setpoint waarna koelvraag actief wordt. Bij te laat starten van koeling of te vaak schakelen rond setpoint. Zodanig kiezen dat comfort stabiel blijft zonder overmatig schakelen. Te kleine deadband kan pendelgedrag veroorzaken, te grote deadband geeft merkbare warmtepiek. |





---
title: Bijverwarmen
---

# Bijverwarmen

![Bijverwarmen](/images/instellingen-bijverwarmen.jpg)

Alle instellingen op deze pagina zijn ook via Home Assistant aanpasbaar.

## Instellingen

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Defrost boost temperatuurgrens | `number.defrost_backup_heater_boost_temperature_sensor` | Buitentemperatuurgrens waaronder na defrost extra bijverwarming mag ondersteunen. Bij comfortdip na ontdooicyclus of te agressief bijverwarmen. Alleen aanpassen met seizoensdata; stapgrootte klein houden. Te hoge grens geeft vaak onnodig elektrisch bijverwarmen. |
| Degree-minutes drempel voor bijverwarming | `number.backup_heater_degmin_threshold` | Bepaalt bij welk opgeteld temperatuurtekort bijverwarming mag inschakelen. Bij te laat of te vroeg inschakelen van back-upverwarming. Hogere drempel = terughoudender bijverwarmen; lagere drempel = sneller ingrijpen. Te laag verhoogt elektriciteitsverbruik; te hoog kan comfortverlies geven. |





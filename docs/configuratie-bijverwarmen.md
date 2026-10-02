---
title: Bijverwarmen
---

# Bijverwarmen

## Categorie: Algemeen

![Algemeen](/images/instellingen-bijverwarmen-algemeen.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Defrost boost temperatuurgrens | `number.defrost_backup_heater_boost_temperature_sensor` | Buitentemperatuurgrens waaronder na defrost extra bijverwarming mag ondersteunen. Bij comfortdip na ontdooicyclus of te agressief bijverwarmen. Alleen aanpassen met seizoensdata; stapgrootte klein houden. Te hoge grens geeft vaak onnodig elektrisch bijverwarmen. |
| Degree-minutes drempel voor bijverwarming | `number.backup_heater_degmin_threshold` | Bepaalt bij welk opgeteld temperatuurtekort bijverwarming mag inschakelen. Bij te laat of te vroeg inschakelen van back-upverwarming. Hogere drempel = terughoudender bijverwarmen; lagere drempel = sneller ingrijpen. Te laag verhoogt elektriciteitsverbruik; te hoog kan comfortverlies geven. |

## Categorie: Verwarmen

![Verwarmen](/images/instellingen-bijverwarmen-verwarmen.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Backup min drempel | `number.backup_min_threshold` | Graadminuten drempel voor backup element tijdens verwarmen |
## Categorie: Tapwater

![Tapwater](/images/instellingen-bijverwarmen-tapwater.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Min. verwarmsnelheid | `number.backup_heating_min_output` | Minsteverwarmsnelheid van pomp during warmte opvraging. |
| Backupvertraging | `number.backup_delay_time_min` | Tijd onder minimale verwarmsnelheid voordat backup inschakelt. |

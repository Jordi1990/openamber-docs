---
title: Bijverwarmen
---

# Bijverwarmen

Alle instellingen op deze pagina zijn ook via Home Assistant aanpasbaar.

## Categorie: Algemeen

![Algemeen](/images/instellingen-bijverwarmen-algemeen.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Backup element | `select.backup_heating_mode` | Extern is voor Hybride opstellingen. Opties: Intern verwarmingselement, Externe backup verwarming. |
| Boosttemperatuur bij ontdooien | `number.defrost_backup_heater_boost_temperature_sensor` | Buitentemperatuur voor backup bij ontdooien. Onder deze buitentemperatuur mag na defrost extra bijverwarming ondersteunen. |

## Categorie: Verwarmen

![Verwarmen](/images/instellingen-bijverwarmen-verwarmen.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Backup °min drempel | `number.backup_heater_degmin_threshold` | Graadminuten drempel voor backup element tijdens verwarmen. Hogere drempel = terughoudender bijverwarmen; lagere drempel = sneller ingrijpen. |

## Categorie: Tapwater

![Tapwater](/images/instellingen-bijverwarmen-tapwater.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Min. verwarmsnelheid | `number.dhw_backup_min_avg_rate` | Minimale Tapwater-verwarmsnelheid; lager schakelt backup in. |
| Backupvertraging | `number.dhw_backup_min_avg_rate_delay_minutes` | Tijd onder minimale verwarmsnelheid voordat backup inschakelt. |

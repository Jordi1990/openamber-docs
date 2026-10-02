---
title: SmartGrid
---

# SmartGrid

![SmartGrid](/images/instellingen-smartgrid.jpg)

Alle instellingen op deze pagina zijn ook via Home Assistant aanpasbaar.

## Instellingen

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Verwarmingsboost (°C) | `number.sg_ready_heating_boost_temperature_number` | Extra temperatuur verwarming bij SG boost. Wordt toegepast bovenop het actieve verwarmsetpoint wanneer SG Ready boost actief is. Beperk boost tot comfortmarge om oververhitting te voorkomen. |
| Tapwater boost (°C) | `number.sg_ready_dhw_boost_temperature_number` | Extra temperatuur tapwater bij SG boost. Wordt toegepast bovenop het actieve tapwatersetpoint. Houd binnen veilige en efficiënte grenzen. Te hoge boost verhoogt stilstandsverlies. |

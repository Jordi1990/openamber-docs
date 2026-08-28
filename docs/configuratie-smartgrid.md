---
title: SmartGrid
---

# SmartGrid

![SmartGrid](/images/instellingen-smartgrid.jpg)

Alle instellingen op deze pagina zijn ook via Home Assistant aanpasbaar.

## Instellingen

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| SG Ready verwarm-boost | `number.sg_ready_heating_boost_temperature_number` | Extra temperatuurdoel voor verwarmen wanneer SG Ready boost actief is. Bij energiesturing op dynamische tarieven of PV-overschot. Beperk boost tot comfortmarge om oververhitting te voorkomen. Te hoge boost verhoogt verbruik en comfortschommeling. |
| SG Ready tapwater-boost | `number.sg_ready_dhw_boost_temperature_number` | Extra tapwaterdoel tijdens SG Ready boost. Bij slimme energiesturing gecombineerd met DHW-opslag. Houd binnen veilige en efficiÃ«nte grenzen. Te hoge boost verhoogt stilstandsverlies en verbrandingsrisico aan tappunt. |





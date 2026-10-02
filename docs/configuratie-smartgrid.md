---
title: SmartGrid
---

# SmartGrid

Met de SmartGrid (SG Ready) functie kan OpenAmber communiceren met externe energiebeheersystemen, omvormers voor zonnepanelen of dynamische energietarief-automatiseringen. Bij een overschot aan goedkope of zelf opgewekte duurzame elektriciteit kan de warmtepomp tijdelijk een hogere doeltemperatuur aanhouden om thermische energie op te slaan in de woning en het boilervat.

::: tip Home Assistant synchronisatie
Alle onderstaande instellingen zijn via het touchscreen en via Home Assistant aanpasbaar. Wijzigingen worden direct doorgevoerd en opgeslagen.
:::

## Instellingen

![SmartGrid](/images/instellingen-smartgrid.jpg)

| Instelling | Opties / Bereik | Standaard | Home Assistant entiteit | Beschrijving |
| :-- | :-- | :-- | :-- | :-- |
| **Verwarmingsboost (°C)** | 0 t/m 10 °C (stap 1) | 5 °C | `number.sg_ready_heating_boost_temperature_number` | Extra verhoging van de cv-aanvoertemperatuur bovenop het actieve stooklijn- of handmatige setpoint wanneer de SG Ready boost-status actief is. Hiermee wordt de thermische massa van de vloer optimaal opgeladen als energiebuffer. Beperk de boost om oververhitting in huis te voorkomen. |
| **Tapwater boost (°C)** | 0 t/m 25 °C (stap 1) | 5 °C | `number.sg_ready_dhw_boost_temperature_number` | Extra verhoging van de boilertemperatuur bovenop het normale tapwatersetpoint bij SG Ready boost. Hiermee laadt de boiler maximaal door met goedkope stroom, waardoor later op de dag geen dure piekstroom nodig is. |

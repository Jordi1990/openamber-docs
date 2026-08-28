---
title: Tapwater
---

# Tapwater

Alle instellingen op deze pagina zijn ook via Home Assistant aanpasbaar.

## Werkwijze voor veilig inregelen

Aanbevolen volgorde:

1. Basiscomfort (`setpoint` en `restart delta`).
2. Basisvermogen en pomp-startmodus.
3. Schema en dagselecties.
4. Winterinstellingen.
5. Legionellapreventie.

## Categorie: Algemeen

![Tapwater algemeen](/images/instellingen-tapwater-algemeen.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Tapwater setpoint | `number.dhw_setpoint_temperature` | Doeltemperatuur voor tapwaterproductie. Bij comfortklachten of wens om verbruik te optimaliseren. Kies zo laag mogelijk voor comfort en hygienebeleid van je installatie. Te laag kan comfort/hygiene schaden, te hoog verhoogt verliezen en energieverbruik. |
| Tapwater restart delta | `number.dhw_restart_dhw_delta` | Temperatuurdaling onder setpoint waarna nieuwe tapwatercyclus mag starten. Bij te vaak starten of juist te traag bijladen van vat. Balans zoeken tussen comfort en aantal starts. Te laag veroorzaakt vaak bijladen; te hoog kan merkbare temperatuurdip geven. |
| Tapwater basisvermogen | `select.dhw_compressor_mode` | Bepaalt compressorvermogensniveau tijdens normale tapwaterproductie. Te laag kan lange opwarmtijd geven; te hoog verhoogt piekbelasting en mogelijk geluid. |
| Tapwaterpomp startmodus | `select.dhw_pump_start_mode_select` | Bepaalt wanneer de tapwaterpomp start. Keuze tussen starten op temperatuurverschil (Delta-T) of direct samen met compressor. |

### Opties en bereiken

| Setting | Entiteit | Beschikbare waarden |
| --- | --- | --- |
| Tapwater setpoint | `number.dhw_setpoint_temperature` | 25 tot 75 C, stap 1 C |
| Tapwater restart delta | `number.dhw_restart_dhw_delta` | 5 tot 25 C, stap 1 C |
| Tapwater basisvermogen | `select.dhw_compressor_mode` | `Beperkt`, `Zeer laag`, `Laag`, `Gemiddeld`, `Verhoogd`, `Hoog`, `Maximaal` |
| Tapwaterpomp startmodus | `select.dhw_pump_start_mode_select` | `Aanvoer warmer dan vat (Delta-T)`, `Samen met compressor` |

Praktisch:

1. Voor maximale efficientie start met Delta-T pompmodus.
2. Voor voorspelbaar gedrag kan `Samen met compressor` beter passen.

## Categorie: Schema

![Tapwater schema](/images/instellingen-tapwater-schema.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Tapwater schema ingeschakeld | `switch.dhw_schedule_enabled_switch` | Schakelt tijdschema voor tapwaterproductie in of uit. Bij dag/nachtstrategie, dynamische energietarieven of PV-optimalisatie. Aan wanneer je duidelijke tijdvakken wilt afdwingen. Te beperkte schema-uren kunnen comforttekort veroorzaken. |
| Maandag schema actief | `switch.dhw_schedule_monday_enabled_switch` | Dagselectie voor maandag in DHW-schema. Bij weekplanning per dagtype. Alleen uitzetten als die dag bewust geen schema mag volgen. Verkeerde dagselectie leidt tot onverwacht gedrag in weekpatroon. |
| Dinsdag schema actief | `switch.dhw_schedule_tuesday_enabled_switch` | Dagselectie voor dinsdag. |
| Woensdag schema actief | `switch.dhw_schedule_wednesday_enabled_switch` | Dagselectie voor woensdag. |
| Donderdag schema actief | `switch.dhw_schedule_thursday_enabled_switch` | Dagselectie voor donderdag. |
| Vrijdag schema actief | `switch.dhw_schedule_friday_enabled_switch` | Dagselectie voor vrijdag. |
| Zaterdag schema actief | `switch.dhw_schedule_saturday_enabled_switch` | Dagselectie voor zaterdag. |
| Zondag schema actief | `switch.dhw_schedule_sunday_enabled_switch` | Dagselectie voor zondag. |
| Starttijd schema | `time.dhw_start_time` | Start van toegestaan tapwatervenster. Wordt in de UI in stappen van 30 minuten aangepast. |
| Eindtijd schema | `time.dhw_end_time` | Einde van toegestaan tapwatervenster. Wordt in de UI in stappen van 30 minuten aangepast. |

### Belangrijke schemaregels

1. Als schema uit staat, geldt het venster niet en mag DHW altijd draaien.
2. Als schema aan staat, moeten dag en tijdvenster beide actief zijn.
3. Over-middernacht vensters worden ondersteund (bijv. 22:00 tot 06:00).

## Categorie: Winter

![Tapwater winter](/images/instellingen-tapwater-winter.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Tapwater wintervermogen | `select.dhw_compressor_mode_max` | Compressorvermogensmodus die geldt zodra winterconditie actief is. Gebruik dit als koud weer structureel te lange DHW-opwarmtijd veroorzaakt. |
| Temperatuurdrempel max compressor mode | `number.dhw_temperature_threshold_max_compressor_mode` | Drempelwaarde om compressorvermogensstrategie voor DHW in koude omstandigheden te sturen. Bij trage DHW-opwarming in winter of te agressief compressorbedrijf. In kleine stappen aanpassen en effect op opwarmtijd monitoren. Te hoog kan onnodig vermogen vragen, te laag kan comfort vertragen. |

### Opties en bereiken

| Setting | Entiteit | Beschikbare waarden |
| --- | --- | --- |
| Tapwater wintervermogen | `select.dhw_compressor_mode_max` | `Gemiddeld`, `Verhoogd`, `Hoog`, `Maximaal` |
| Wintertemperatuurdrempel | `number.dhw_temperature_threshold_max_compressor_mode` | -20 tot 10 C, stap 1 C |

## Categorie: Legionella

![Tapwater legionella](/images/instellingen-tapwater-legionella.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Legionella functie actief | `switch.legio_enabled_switch` | Schakelt periodieke legionellabeschermingscyclus in. Volgens lokale richtlijnen en installatiebeleid. In de meeste huishoudelijke situaties ingeschakeld laten. Uitschakelen kan hygienerisico geven; inschakelen verhoogt periodiek energieverbruik. |
| Legionella herhaalinterval | `number.legio_repeat_days_number` | Bepaalt na hoeveel dagen de volgende legionellacyclus start. Bij wijziging in gebruiksprofiel of beleidsvereisten. Afstemmen op installatie en lokaal advies. Te lang interval kan hygienerisico verhogen. |
| Legionella doeltemperatuur | `number.legio_target_temperature_number` | Targettemperatuur tijdens legionellacyclus. Alleen wanneer installatie of beleid dat vereist. Volg fabrikant- en veiligheidsrichtlijnen. Te laag verlaagt effectiviteit; te hoog verhoogt risico op verbranding en slijtage. |

### Opties en bereiken

| Setting | Entiteit | Beschikbare waarden |
| --- | --- | --- |
| Legionella herhaalinterval | `number.legio_repeat_days_number` | 7 tot 60 dagen, stap 1 |
| Legionella doeltemperatuur | `number.legio_target_temperature_number` | 55 tot 65 C, stap 1 C |

Veiligheid:

1. Volg altijd lokaal beleid en installateursadvies.
2. Verhoog doeltemperatuur niet verder dan nodig.





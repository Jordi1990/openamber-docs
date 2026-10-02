---
title: Tapwater
---

# Tapwater

Alle instellingen op deze pagina zijn ook via Home Assistant aanpasbaar.

## Werkwijze voor veilig inregelen

Aanbevolen volgorde:

1. Basiscomfort (`setpoint` en `herstart delta`).
2. Basisvermogen en pomp-startmodus.
3. Schema en dagselecties.
4. Winterinstellingen.
5. Legionellapreventie.

## Categorie: Algemeen

![Tapwater algemeen](/images/instellingen-tapwater-algemeen.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Setpoint (°C) | `number.dhw_setpoint_temperature` | Gewenste tapwatertemperatuur. Kies zo laag mogelijk voor comfort en hygiënebeleid van je installatie. Te laag kan comfort/hygiëne schaden, te hoog verhoogt verliezen en energieverbruik. |
| Herstart delta (°C) | `number.dhw_restart_dhw_delta` | Temperatuurdaling waarna verwarming herstart. Balans zoeken tussen comfort en aantal starts. Te laag veroorzaakt vaak bijladen; te hoog kan merkbare temperatuurdip geven. |
| Basisvermogen | `select.dhw_compressor_mode` | Compressorvermogen in normale modus. Opties: Beperkt, Zeer laag, Laag, Gemiddeld, Verhoogd, Hoog, Maximaal. |
| Tapwaterpomp startmodus | `select.dhw_pump_start_mode_select` | Wanneer de tapwaterpomp start. Opties: Aanvoer warmer dan vat (Delta-T), Samen met compressor. |

Praktisch:

1. Voor maximale efficiëntie start met Delta-T pompmodus.
2. Voor voorspelbaar gedrag kan `Samen met compressor` beter passen.

## Categorie: Schema

![Tapwater schema](/images/instellingen-tapwater-schema.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Tapwater schema | `switch.dhw_schedule_enabled_switch` | Verwarming alleen op geplande tijden. Schakelt tijdschema voor tapwaterproductie in of uit. |
| Ma t/m Zo | `switch.dhw_schedule_monday_enabled_switch` t/m `switch.dhw_schedule_sunday_enabled_switch` | Dagselectie per dag in het DHW-schema. Alleen uitzetten als die dag bewust geen schema mag volgen. |
| Starttijd | `time.dhw_start_time` | Start van toegestaan tapwatervenster. Wordt in de UI in stappen van 30 minuten aangepast. |
| Eindtijd | `time.dhw_end_time` | Einde van toegestaan tapwatervenster. Wordt in de UI in stappen van 30 minuten aangepast. |

### Belangrijke schemaregels

1. Als schema uit staat, geldt het venster niet en mag DHW altijd draaien.
2. Als schema aan staat, moeten dag en tijdvenster beide actief zijn.
3. Over-middernacht vensters worden ondersteund (bijv. 22:00 tot 06:00).

## Categorie: Winter

![Tapwater winter](/images/instellingen-tapwater-winter.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Wintervermogen | `select.dhw_compressor_mode_max` | Max compressorvermogen in wintermodus. Opties: Gemiddeld, Verhoogd, Hoog, Maximaal. |
| Wintertemperatuurdrempel | `number.dhw_temperature_threshold_max_compressor_mode` | Buitentemperatuur waaronder wintermodus actief. In kleine stappen aanpassen en effect op opwarmtijd monitoren. |

## Categorie: Legionella

![Tapwater legionella](/images/instellingen-tapwater-legionella.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Legionellapreventie | `switch.legio_enabled_switch` | Periodieke opwarming tegen legionella. In de meeste huishoudelijke situaties ingeschakeld laten. |
| Legionella herhaling (dgn) | `number.legio_repeat_days_number` | Dagen tussen preventieverwarming. Afstemmen op installatie en lokaal advies. |
| Legionella doeltemperatuur (°C) | `number.legio_target_temperature_number` | Doeltemperatuur bij legionellapreventie. Volg fabrikant- en veiligheidsrichtlijnen. Te laag verlaagt effectiviteit; te hoog verhoogt risico op verbranding. |

Veiligheid:

1. Volg altijd lokaal beleid en installateursadvies.
2. Verhoog doeltemperatuur niet verder dan nodig.

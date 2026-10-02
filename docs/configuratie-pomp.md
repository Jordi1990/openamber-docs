---
title: Pomp
---

# Pomp

Alle instellingen op deze pagina zijn ook via Home Assistant aanpasbaar.

## Categorie: Algemeen

![Pomp algemeen](/images/instellingen-pomp-algemeen.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Pomp P1 aanwezig | `switch.pump_p1_enabled` | Activeert aansturing van extra pomp P1 in de regelstrategie. Alleen volgens hydraulische opbouw van jouw systeem. Aan als P1 fysiek aanwezig en correct aangesloten is. Verkeerd geconfigureerd kan leiden tot ontbrekende flow of onnodig pompbedrijf. |
| Pomp interval | `number.pump_interval` | Tijdsinterval tussen pompcycli. Bij flowproblemen, energie-optimalisatie of geluidsreductie. Start met fabrieksnabije waarden en optimaliseer op stabiele flow. Te lang interval kan comfort en warmteafgifte verslechteren. |
| Pomp duur | `number.pump_duration` | Looptijd per pompcyclus. Bij onvoldoende doorspoeling of onnodig lang pompbedrijf. Zo kort mogelijk, maar lang genoeg voor stabiele systeemrespons. Te kort geeft onvoldoende flowopbouw; te lang verhoogt verbruik en slijtage. |
| Flow switch uitvalvertraging (min) | `number.flow_switch_outage_delay` | Vertraging in minuten voordat een flow switch uitval wordt gemeld. | 

## Categorie: Snelheid

![Pomp snelheid](/images/instellingen-pomp-snelheid.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Pompsnelheid verwarmen | `number.pump_speed_heating_number` | Stelt doelpompsnelheid in tijdens verwarmingsbedrijf. Bij Delta-T optimalisatie, geluid, of hydraulische inregeling. Zoek balans tussen voldoende afgifte en laag pompvermogen. Te laag geeft te weinig afgifte, te hoog kan ruis en onnodig verbruik verhogen. |
| Pompsnelheid koelen | `number.pump_speed_cooling_number` | Stelt doelpompsnelheid in tijdens koelbedrijf. Bij comfortproblemen, ongelijkmatige koeling of condensatiebeheer. Rustig opbouwen en binnenklimaat + retourtemperatuur monitoren. Onjuiste snelheid kan koelefficiÃ«ntie verlagen of condensatierisico vergroten. |
| Pompsnelheid tapwater | `number.pump_speed_tapwater_number` | Stelt de doelpompsnelheid in tijdens tapwaterbedrijf. |

## Categorie: Dynamisch PWM P0

![Pomp dynamisch PWM P0](/images/instellingen-pomp-dynamisch-1.jpg)
![Pomp dynamisch PWM P0](/images/instellingen-pomp-dynamisch-2.jpg)
| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Pomp P0 Dynamisch PWM | `switch.dynamic_pwm_enabled` | Schakelt de dynamische PWM-regeling voor pomp P0 in. |
| Gewenste delta-T | `number.dynamic_pwm_desired_delta_t` | Stelt de gewenste delta-T in voor de dynamische PWM-regeling. |
| Minimale pomp snelheid | `number.dynamic_pwm_min_output` | Minimale pomp snelheid tijdens dynamisch PWM P0 regeling. |
| Maximale pomp snelheid | `number.dynamic_pwm_max_output` | Maximale pomp snelheid tijdens dynamisch PWM P0 regeling. |
| Pompsnelheid ontdooien | `number.defrost_pump_speed_number` | Stelt de pompsnelheid in tijdens ontdooien regime. |

## Categorie: Vorstbescherming

![Vorstbescherming](/images/instellingen-pomp-vorstbescherming.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Buitentemperatuur 1e trap | `number.frost_protection_stage_1_temp_ta` | Temperatuurgrens (Ta) voor eerste niveau vorstbescherming, meestal pomp/circulatiegericht. Bij risico op bevriezing in buitenleidingen of ongewenst vaak activeren. Afstemmen op installatie, isolatie en lokale klimaatomstandigheden. Te laag kan bevriezingsrisico geven; te hoog kan onnodig bedrijf veroorzaken. |
| Buitentemperatuur 2e trap | `number.frost_protection_stage_2_temp_ta` | Temperatuurgrens voor zwaardere vorstbescherming (actiever beschermingsgedrag). Alleen bij aantoonbare noodzaak en na observatie van fase 1 gedrag. Fase 2 normaal strenger dan fase 1, zodat escalatie logisch blijft. Onjuiste volgorde of te hoge drempel kan onnodig energiegebruik geven. |
| Watertemperatuur 2e trap | `number.frost_protection_stage_2_temp_tuo` | Watertemperatuur waarbij fase 2 van de vorstbescherming actief wordt. |



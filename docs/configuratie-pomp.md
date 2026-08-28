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

## Categorie: Pompsnelheid

![Pomp snelheid](/images/instellingen-pomp-pompsnelheid.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Pompsnelheid verwarmen | `number.pump_speed_heating_number` | Stelt doelpompsnelheid in tijdens verwarmingsbedrijf. Bij Delta-T optimalisatie, geluid, of hydraulische inregeling. Zoek balans tussen voldoende afgifte en laag pompvermogen. Te laag geeft te weinig afgifte, te hoog kan ruis en onnodig verbruik verhogen. |
| Pompsnelheid koelen | `number.pump_speed_cooling_number` | Stelt doelpompsnelheid in tijdens koelbedrijf. Bij comfortproblemen, ongelijkmatige koeling of condensatiebeheer. Rustig opbouwen en binnenklimaat + retourtemperatuur monitoren. Onjuiste snelheid kan koelefficiÃ«ntie verlagen of condensatierisico vergroten. |





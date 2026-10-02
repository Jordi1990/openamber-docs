---
title: Verwarmen
---

# Verwarmen

Alle instellingen op deze pagina zijn ook via Home Assistant aanpasbaar.

## Categorie: Algemeen

![Verwarmen algemeen](/images/instellingen-verwarmen-algemeen.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Verwarmingsmodus | `select.heat_mode_select` | Schakelt tussen sturing op stooklijn of extern setpoint. Bij integratie met externe regeling of specifieke stooklijnstrategie. Kies stooklijn voor weersafhankelijke basisregeling. |
| Extern setpoint | `number.manual_setpoint` | Doeltemperatuur voor modus waarin niet op stooklijn maar op vast setpoint geregeld wordt. Bij testbedrijf, afwijkende comfortwens of tijdelijk gedrag buiten normale stooklijn. Gebruik als tijdelijke override, niet als permanente vervanging van goed ingestelde stooklijn. Te hoog setpoint verlaagt COP en vergroot kans op pendelen. |
| Verwarmen vermogen | `select.heat_compressor_mode` | Begrenst de maximale stand van de compressor tijdens verwarmen. |

## Categorie: Stooklijn

![Verwarmen stooklijn](/images/instellingen-verwarmen-stooklijn.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Stooklijnpunt bij -10 C | `number.heat_curve_m10` | Water doeltemperatuur bij -10 of lagere buitentemperatuur. |
| Stooklijnpunt bij 0 C | `number.heat_curve_0` | Water doeltemperatuur bij 0 of lagere buitentemperatuur. |
| Stooklijnpunt bij +5 C | `number.heat_curve_p5` |Water doeltemperatuur bij 5 of lagere buitentemperatuur. |
| Stooklijnpunt bij +10 C | `number.heat_curve_p10` | Water doeltemperatuur bij 10 of lagere buitentemperatuur. |
| Stooklijnpunt bij +15 C | `number.heat_curve_p15` | Water doeltemperatuur vanaf 15 graden buiten temperatuur. |

## Categorie: Start/Stop

![Verwarmen start/stop](/images/instellingen-verwarmen-startstop.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Start delta | `number.compressor_start_delta` | Bepaalt hoeveel de temperatuur onder de doelwaarde mag zakken voordat compressorstart wordt toegestaan. Bij te vaak starten of juist te traag reageren op warmtevraag. Kleinere waarde = sneller starten; grotere waarde = rustiger gedrag. Te laag geeft pendelen en meer starts; te hoog geeft traag comfortherstel. |
| Stop delta | `number.compressor_stop_delta` | Bepaalt overshoot boven setpoint waarbij compressor mag stoppen. Bij doorschieten van aanvoertemperatuur of te lange compressorlooptijden. Begin conservatief en wijzig in kleine stappen. Te laag veroorzaakt korte cycli; te hoog veroorzaakt overshoot en minder comfort. |


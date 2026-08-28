---
title: Verwarmen
---

# Verwarmen

Alle instellingen op deze pagina zijn ook via Home Assistant aanpasbaar.

## Werkwijze voor veilig inregelen

Pas verwarmingsinstellingen in deze volgorde aan:

1. Modus kiezen (`select.heat_mode_select`).
2. Start en stop delta stabiel krijgen.
3. Vermogensmodus afstemmen.
4. Pas daarna stooklijnpunten tunen.

Tip: verander bij voorkeur steeds 1 instelling tegelijk en evalueer minimaal een halve dag tot een hele dag.

## Categorie: Algemeen

![Verwarmen algemeen](/images/instellingen-verwarmen-algemeen.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Handmatig setpoint | `number.manual_setpoint` | Doeltemperatuur voor modus waarin niet op stooklijn maar op vast setpoint geregeld wordt. Bij testbedrijf, afwijkende comfortwens of tijdelijk gedrag buiten normale stooklijn. Gebruik als tijdelijke override, niet als permanente vervanging van goed ingestelde stooklijn. Te hoog setpoint verlaagt COP en vergroot kans op pendelen. |
| Verwarmingsmodus | `select.heat_mode_select` | Schakelt tussen sturing op stooklijn of extern setpoint. Bij integratie met externe regeling of specifieke stooklijnstrategie. Kies stooklijn voor weersafhankelijke basisregeling. Verkeerde modus kan onlogisch gedrag geven tussen thermostaatvraag en aanvoertemperatuur. |
| Compressor vermogensmodus verwarmen | `select.heat_compressor_mode` | Begrenst of verruimt het beschikbare compressorvermogensbereik tijdens verwarmen. Bij geluidseisen, netbelasting, comfortproblemen of optimalisatie op deellast. Start middengebied; alleen verhogen bij onvoldoende vermogen. Te laag kan tekort aan verwarmingsvermogen geven, te hoog kan efficientie drukken bij deellast. |

### Opties en bereiken

| Setting | Entiteit | Beschikbare waarden |
| --- | --- | --- |
| Verwarmingsmodus | `select.heat_mode_select` | `Stooklijn`, `Extern setpoint` |
| Handmatig setpoint | `number.manual_setpoint` | 15 tot 45 C, stap 1 C |
| Verwarmen vermogen | `select.heat_compressor_mode` | `Beperkt`, `Zeer laag`, `Laag`, `Gemiddeld`, `Verhoogd`, `Hoog`, `Maximaal` |

## Categorie: Start/Stop

![Verwarmen start/stop](/images/instellingen-verwarmen-startstop.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Start delta | `number.compressor_start_delta` | Bepaalt hoeveel de temperatuur onder de doelwaarde mag zakken voordat compressorstart wordt toegestaan. Bij te vaak starten of juist te traag reageren op warmtevraag. Kleinere waarde = sneller starten; grotere waarde = rustiger gedrag. Te laag geeft pendelen en meer starts; te hoog geeft traag comfortherstel. |
| Stop delta | `number.compressor_stop_delta` | Bepaalt overshoot boven setpoint waarbij compressor mag stoppen. Bij doorschieten van aanvoertemperatuur of te lange compressorlooptijden. Begin conservatief en wijzig in kleine stappen. Te laag veroorzaakt korte cycli; te hoog veroorzaakt overshoot en minder comfort. |

### Bereik start/stop

| Setting | Entiteit | Beschikbare waarden |
| --- | --- | --- |
| Start delta | `number.compressor_start_delta` | 0.1 tot 10.0 C, stap 0.1 C |
| Stop delta | `number.compressor_stop_delta` | 0.1 tot 10.0 C, stap 0.1 C |

Belangrijk voor Home Assistant automations:

1. `number.manual_setpoint` is alleen functioneel als `select.heat_mode_select` op `Extern setpoint` staat.
2. Bij `Stooklijn` wordt de aanvoer bepaald door de curvepunten.

## Categorie: Stooklijn

![Verwarmen stooklijn](/images/instellingen-verwarmen-stooklijn.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Stooklijnpunt bij -10 C | `number.heat_curve_m10` | Definieert gewenste aanvoertemperatuur rond lage buitentemperatuur. Bij comforttekort tijdens vorst of te hoge aanvoer in koude omstandigheden. Kleine wijzigingen, daarna minimaal enkele koude uren evalueren. Te hoog verlaagt rendement; te laag geeft onderverwarming bij kou. |
| Stooklijnpunt bij 0 C | `number.heat_curve_0` | Definieert gewenst aanvoerniveau rond buitentemperatuur van 0 C. Bij structurele afwijking in comfort in herfst/winter overgangen. Stem af op emittertype (vloerverwarming meestal lagere curve). Onbalans tussen curvepunten kan instabiele regeling of abrupte vermogenswisselingen geven. |
| Stooklijnpunt bij +5 C | `number.heat_curve_p5` | Regelt aanvoer rond milde buitentemperaturen. Belangrijk voor comfort in voor- en najaar. Te hoog geeft onnodig warm stoken; te laag geeft trage opwarming van ruimtes. |
| Stooklijnpunt bij +10 C | `number.heat_curve_p10` | Stuurt lage-last gebied van de stooklijn. Nuttig om pendelen in zachte dagen te beperken. Te hoge waarde verlaagt COP; te lage waarde kan comfortdip geven. |
| Stooklijnpunt bij +15 C | `number.heat_curve_p15` | Stuurt bijna-grensgebied van verwarmingsbedrijf. Helpt bij rustig afbouwen richting geen warmtevraag. Te hoog kan leiden tot onnodig doordraaien op zachte dagen. |

### Bereik stooklijnpunten

Alle stooklijnpunten hebben bereik 15 tot 45 C met stap 1 C.

Aanbevolen aanpak:

1. Begin met een vloeiende, dalende lijn van -10 naar +15 C.
2. Corrigeer eerst middengebied (0, +5, +10 C) voor dagelijks comfort.
3. Corrigeer daarna randen (-10 en +15 C) voor extremen.

## Categorie: PID Control

PID-instellingen voor verwarmen staan in de geavanceerde pagina: [Geavanceerd](./configuratie-geavanceerd.html#categorie-pid-control-verwarmen).




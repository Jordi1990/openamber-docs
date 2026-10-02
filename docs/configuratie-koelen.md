---
title: Koelen
---

# Koelen

Alle instellingen op deze pagina zijn ook via Home Assistant aanpasbaar.

## Werkwijze voor veilig inregelen

Volg bij koelen deze volgorde:

1. Koelmodus kiezen (`select.cool_mode_select`).
2. Koelsetpoint of extern setpoint kiezen.
3. Start en stop delta samen afstemmen.
4. Vermogensmodus afstemmen.
5. Daarna pas PID finetunen op de geavanceerde pagina.

Let op: bij systemen met vloerverkoeling altijd rekening houden met dauwpunt en condensatierisico.

## Categorie: Algemeen

![Koelen algemeen](/images/instellingen-koelen-algemeen.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Koelen vermogen | `select.cool_compressor_mode` | Begrenst of verruimt compressorvermogen tijdens koelen. Handig voor balans tussen comfort, geluid en energieverbruik. Te laag kan onvoldoende koelvermogen geven bij piekbelasting; te hoog kan korte cycli en onrustig gedrag geven. |
| Start delta koelen | `number.compressor_start_delta_cooling` | Bepaalt hoeveel de temperatuur boven het koelsetpoint mag uitkomen voordat compressorstart voor koelen wordt toegestaan. Bij te traag starten van koeling of juist te frequent starten. Kleinere waarde start eerder; grotere waarde geeft rustiger gedrag. Te laag kan pendelen geven; te hoog kan comfortdip op warme momenten geven. |
| Stop delta koelen | `number.compressor_stop_delta_cooling` | Bepaalt overshoot in koelrichting waarbij compressor mag stoppen. Bij te koude aanvoer, pendelen of te lang doorgaan van compressor in koelmodus. Werk in kleine stappen en evalueer op comfort en ontvochtiging. Te laag geeft korte cycli, te hoog geeft overkoeling en comfortverlies. |

## Categorie: Setpoint

![Koelen setpoint](/images/instellingen-koelen-setpoint.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Koelmodus | `select.cool_mode_select` | Bepaalt of OpenAmber werkt met intern koelsetpoint of extern aangestuurd setpoint. Kies `Intern setpoint` voor standalone gedrag. Kies `Extern setpoint` als Home Assistant leidend moet zijn. |
| Koelsetpoint (intern) | `number.cooling_setpoint_number` | Primair temperatuurdoel voor koeling in intern-setpoint modus. Bij structureel te warm of te koud binnenklimaat. Houd rekening met comfort, luchtvochtigheid en condensatiegrens. Te agressieve koeling kan comfortklachten of vochtproblemen geven. |
| Extern setpoint | `number.manual_setpoint` | Doeltemperatuur wanneer koelmodus op `Extern setpoint` staat. Typische toepassing is dynamische regeling op dauwpunt of energietarief. Te lage waarde kan condensatie en overkoeling veroorzaken. |

Praktisch advies:

1. Gebruik `Intern setpoint` voor een eenvoudige basisopstelling.
2. Gebruik `Extern setpoint` voor geavanceerde Home Assistant logica, bijvoorbeeld dauwpunt-gestuurd koelen.
3. Houd bij dauwpuntregeling altijd een veiligheidsmarge aan.


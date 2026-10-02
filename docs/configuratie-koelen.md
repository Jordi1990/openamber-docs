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
| Koelen vermogen | `select.cool_compressor_mode` | Max compressorvermogen bij koelen. Opties: Beperkt, Zeer laag, Laag, Gemiddeld, Verhoogd, Hoog, Maximaal. Te laag kan onvoldoende koelvermogen geven; te hoog kan korte cycli geven. |
| Start delta (°C) | `number.compressor_start_delta_cooling` | Verschil met setpoint om compressor te starten tijdens koelen. Kleinere waarde start eerder; grotere waarde geeft rustiger gedrag. Te laag kan pendelen geven. |
| Stop delta (°C) | `number.compressor_stop_delta_cooling` | Verschil met setpoint om compressor te stoppen tijdens koelen. Te laag geeft korte cycli, te hoog geeft overkoeling en comfortverlies. |

## Categorie: Setpoint

![Koelen setpoint](/images/instellingen-koelen-setpoint.jpg)

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Koelmodus | `select.cool_mode_select` | Kies Fixed of Extern setpoint. Bij intern setpoint regelt OpenAmber zelf de koeltemperatuur. Bij extern setpoint is een externe bron (bijv. Home Assistant) leidend. |
| Setpoint (°C) | `number.cooling_setpoint_number` | Doeltemperatuur voor koelen. Alleen actief bij intern setpoint modus. Houd rekening met comfort, luchtvochtigheid en condensatiegrens. |
| Extern setpoint (°C) | `number.manual_setpoint` | Koel setpoint bij extern setpoint. Typische toepassing is dynamische regeling op dauwpunt of energietarief. Te lage waarde kan condensatie en overkoeling veroorzaken. |

Praktisch advies:

1. Gebruik `Intern setpoint` voor een eenvoudige basisopstelling.
2. Gebruik `Extern setpoint` voor geavanceerde Home Assistant logica, bijvoorbeeld dauwpunt-gestuurd koelen.
3. Houd bij dauwpuntregeling altijd een veiligheidsmarge aan.

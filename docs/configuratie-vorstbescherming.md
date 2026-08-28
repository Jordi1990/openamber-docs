---
title: Vorstbescherming
---

# Vorstbescherming

![Vorstbescherming](/images/instellingen-pomp-vorstbescherming.jpg)

Alle instellingen op deze pagina zijn ook via Home Assistant aanpasbaar.

## Instellingen

| Setting | Home Assistant entiteit | Functie |
| --- | --- | --- |
| Fase 1 drempel buitentemperatuur | `number.frost_protection_stage_1_temp_ta` | Temperatuurgrens (Ta) voor eerste niveau vorstbescherming, meestal pomp/circulatiegericht. Bij risico op bevriezing in buitenleidingen of ongewenst vaak activeren. Afstemmen op installatie, isolatie en lokale klimaatomstandigheden. Te laag kan bevriezingsrisico geven; te hoog kan onnodig bedrijf veroorzaken. |
| Fase 2 drempel buitentemperatuur | `number.frost_protection_stage_2_temp_ta` | Temperatuurgrens voor zwaardere vorstbescherming (actiever beschermingsgedrag). Alleen bij aantoonbare noodzaak en na observatie van fase 1 gedrag. Fase 2 normaal strenger dan fase 1, zodat escalatie logisch blijft. Onjuiste volgorde of te hoge drempel kan onnodig energiegebruik geven. |





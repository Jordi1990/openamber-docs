---
title: Configuratie & Instellingen
---

# Configuratie en instellingen

Deze sectie beschrijft alle instellingen uit de OpenAmber UI, gegroepeerd per settings-pagina.

## Belangrijk: instellingen via Home Assistant

Alle instellingen die in de OpenAmber UI aanpasbaar zijn, zijn ook in Home Assistant beschikbaar als entiteit.

- Schakelaars staan onder domein `switch`.
- Numerieke waarden staan onder domein `number`.
- Keuzelijsten staan onder domein `select`.

Per instellingenpagina staat per categorie een compacte tabel met:

1. De settingnaam uit de UI.
2. De bijbehorende Home Assistant entiteit.
3. Een korte functiebeschrijving met beknopt gebruiksadvies.

## Overzicht settings-pagina's

| UI pagina | Documentatie |
| --- | --- |
| Algemeen | [Algemeen](./configuratie-algemeen.html) |
| Verwarmen | [Verwarmen](./configuratie-verwarmen.html) |
| Koelen | [Koelen](./configuratie-koelen.html) |
| Tapwater | [Tapwater](./configuratie-tapwater.html) |
| Pomp | [Pomp](./configuratie-pomp.html) |
| Bijverwarmen | [Bijverwarmen](./configuratie-bijverwarmen.html) |
| Geavanceerd | [Geavanceerd](./configuratie-geavanceerd.html) |
| SmartGrid | [SmartGrid](./configuratie-smartgrid.html) |
| Thermostaat | [Thermostaat](./configuratie-thermostaat.html) |


## Bron en scope

- UI-indeling gebaseerd op de settings YAML-bestanden in OpenAmber (`src/openamber/ui/settings`).
- Screenshots komen uit `docs/.vuepress/public/images`.
- Als een screenshot nog niet beschikbaar is, staat dat expliciet in de betreffende pagina.

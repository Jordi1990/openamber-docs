---
title: Verwarmen instellen
---

# Verwarmen instellen

Open [Instellingen - Verwarmen](./configuratie-verwarmen.html).

## Thermostaatstrategie kiezen

Ga naar [Instellingen - Thermostaat](./configuratie-thermostaat.html) en kies:

1. `select.thermostat_mode_select` = `Intern` als OpenAmber de vraag bepaalt.
2. `select.thermostat_mode_select` = `Extern` als externe vraag leidend moet zijn.

## Verwarmingsmodus kiezen

1. `select.heat_mode_select` = `Stooklijn` voor klassieke weersafhankelijke regeling.
2. `select.heat_mode_select` = `Extern setpoint` voor Home Assistant gestuurde regeling.

## Start en stop delta

Stel in op [Instellingen - Verwarmen](./configuratie-verwarmen.html):

1. `number.compressor_start_delta`.
2. `number.compressor_stop_delta`.

Richtlijn:

1. Te veel starts: start delta iets verhogen.
2. Te trage reactie: start delta iets verlagen.
3. Te veel doorschieten: stop delta iets verlagen.

## Stooklijn of extern setpoint

Bij stooklijn:

1. Stel alle punten in: `number.heat_curve_m10`, `number.heat_curve_0`, `number.heat_curve_p5`, `number.heat_curve_p10`, `number.heat_curve_p15`.
2. Houd de lijn vloeiend en dalend.

Bij extern setpoint:

1. Zet een veilige beginwaarde op `number.manual_setpoint`.
2. Laat daarna eventueel Home Assistant dynamisch sturen.

Volgende stap: [Tapwater instellen](./tapwater.html).

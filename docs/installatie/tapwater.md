---
title: Tapwater instellen
---

# Tapwater instellen

Open [Instellingen - Tapwater](./configuratie-tapwater.html).

## Basiscomfort

1. `number.dhw_setpoint_temperature` instellen.
2. `number.dhw_restart_dhw_delta` instellen.

## Vermogen en pompgedrag

1. `select.dhw_compressor_mode` voor basisvermogen.
2. `select.dhw_pump_start_mode_select` voor pompstartstrategie.

## Schema instellen

1. `switch.dhw_schedule_enabled_switch` aan of uit.
2. Dagen selecteren (`switch.dhw_schedule_*_enabled_switch`).
3. Venster kiezen met `time.dhw_start_time` en `time.dhw_end_time`.

## Legionella

1. `switch.legio_enabled_switch` activeren volgens beleid.
2. Interval via `number.legio_repeat_days_number`.
3. Doeltemperatuur via `number.legio_target_temperature_number`.

Volgende stap: [Koelen (optioneel)](./koelen.html).

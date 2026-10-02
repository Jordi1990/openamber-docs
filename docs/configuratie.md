---
title: Configuratie & Instellingen
---

# Configuratie en instellingen

Deze sectie beschrijft alle instellingen uit de OpenAmber gebruikersinterface (UI) en hun koppeling met Home Assistant. OpenAmber geeft je volledige controle over het gedrag, het rendement en het comfort van je Itho Daalderop Amber warmtepomp.

::: tip Realtime synchronisatie met Home Assistant
Alle instellingen die op het touchscreen display zichtbaar zijn, zijn ook in Home Assistant direct beschikbaar als entiteit. Wijzigingen worden bidirectioneel gesynchroniseerd en bewaard in het niet-vluchtige flashgeheugen (NVS) van de ESP32 of direct in de Modbus EEPROM-registers van de buitenunit.
:::

## Systeempagina's overzicht

Klik op een categorie om direct naar de gedetailleerde instellingenpagina met toelichting, standaardwaarden en Home Assistant entiteiten te gaan:

<div class="config-grid">
  <a class="config-card" href="./configuratie-algemeen.html">
    <h3>⚙️ Algemeen</h3>
    <p>Systeemparameters, regeltemperatuurbron, mengventielen zone 1 & 2, sensorkalibratie en flowsensor instellingen.</p>
  </a>
  <a class="config-card" href="./configuratie-verwarmen.html">
    <h3>🔥 Verwarmen</h3>
    <p>Verwarmingsmodus, weersafhankelijke stooklijn (5 meetpunten), compressorvermogen, start/stop delta's en noodbedrijf.</p>
  </a>
  <a class="config-card" href="./configuratie-koelen.html">
    <h3>❄️ Koelen</h3>
    <p>Koelmodus, intern of extern koelsetpoint, compressorvermogen, start/stop delta's en condensatiebeveiliging.</p>
  </a>
  <a class="config-card" href="./configuratie-tapwater.html">
    <h3>🚿 Tapwater</h3>
    <p>Boilertemperatuur, herstart delta, weekschema met tijdsvensters, wintermodus en legionellapreventie.</p>
  </a>
  <a class="config-card" href="./configuratie-pomp.html">
    <h3>🔄 Pomp</h3>
    <p>Circulatiepomp P0 & P1, spoelintervallen, vaste toerentallen, dynamische delta-T PID en tweetraps vorstbeveiliging.</p>
  </a>
  <a class="config-card" href="./configuratie-bijverwarmen.html">
    <h3>⚡ Bijverwarmen</h3>
    <p>Backupelement (intern elektrisch element of externe bron), ontdooiboost, graadminutendrempel en tapwater-ondersteuning.</p>
  </a>
  <a class="config-card" href="./configuratie-thermostaat.html">
    <h3>🌡️ Thermostaat</h3>
    <p>Interne kamerthermostaat vs. extern potentiaalvrij contact / Home Assistant, standaard setpoints, deadbands en overruns.</p>
  </a>
  <a class="config-card" href="./configuratie-smartgrid.html">
    <h3>⚡ SmartGrid</h3>
    <p>SG Ready integratie met automatische temperatuurboost voor cv en tapwater bij zonne-energieoverschot of dynamische stroomtarieven.</p>
  </a>
  <a class="config-card" href="./configuratie-geavanceerd.html">
    <h3>🔧 Geavanceerd</h3>
    <p>PID-parameters voor compressor en circulatiepomp, bodemplaatverwarming en lage-temperatuur defrost registers.</p>
  </a>
</div>

---

## Uitleg van de tabelkolommen

Op elke configuratiepagina vind je gestructureerde tabellen met de volgende gegevens:

| Kolom | Betekenis |
| :-- | :-- |
| **Instelling** | De naam zoals deze letterlijk op het OpenAmber touchscreen display verschijnt. |
| **Opties / Bereik** | De toegestane waarden, de selectiekeuzes, of het numerieke bereik inclusief eenheid en stapgrootte. |
| **Standaard** | De fabrieksinstelling of aanbevolen standaardwaarde bij ingebruikname. |
| **Home Assistant entiteit** | De exacte entiteitsnaam binnen Home Assistant (ESPHome integratie). |
| **Beschrijving & Advies** | Uitleg over de functie, werking en praktisch advies voor het optimaal inregelen van je installatie. |

## Home Assistant entiteitstypen

De entiteiten in OpenAmber zijn logisch opgebouwd volgens standaarden van Home Assistant:

- **`switch.*`**: Aan/uit-schakelaars voor functies, schema's en componenten (bijv. `switch.dhw_enabled_switch`).
- **`number.*`**: Numerieke instellingen, offsets, temperaturen en PID-parameters (bijv. `number.dhw_setpoint_temperature`).
- **`select.*`**: Keuzemenu's met vooraf gedefinieerde opties (bijv. `select.heat_mode_select`).
- **`time.*`**: Tijdstippen voor schema's en vensters (bijv. `time.dhw_start_time`).
- **`sensor.*`**: Meetwaarden en realtime statussen afkomstig van sensoren of berekeningen.

::: warning Pas op met uiterste waarden
Wijzig geavanceerde parameters (zoals PID-regeling, defrost-drempels en delta's) altijd in kleine stappen en observeer het systeemgedrag gedurende minimaal 24 tot 48 uur voordat je verdere aanpassingen doorvoert.
:::

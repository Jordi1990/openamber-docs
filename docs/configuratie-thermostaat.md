---
title: Thermostaat
---

# Thermostaat

De thermostaatinstellingen configureren de temperatuurregeling van het binnenklimaat. OpenAmber kan als zelfstandige thermostaat functioneren (via de ingebouwde ruimtetemperatuursensor van het touchscreen display) of worden aangestuurd door een externe thermostaat of domoticasysteem.

::: tip Home Assistant synchronisatie
Alle onderstaande instellingen zijn via het touchscreen en via Home Assistant aanpasbaar. Wijzigingen worden direct doorgevoerd en opgeslagen.
:::

## Categorie: Algemeen

![Thermostaat algemeen](/images/instellingen-thermostaat-algemeen.jpg)

| Instelling | Opties / Bereik | Standaard | Home Assistant entiteit | Beschrijving |
| :-- | :-- | :-- | :-- | :-- |
| **Thermostaat bron** | Intern / Extern | Extern | `select.thermostat_mode_select` | Bepaalt welke thermostaat leidend is voor de warmte- en koelvraag. Kies `Intern` als het OpenAmber touchscreen display als kamerthermostaat in de woonkamer hangt. Kies `Extern` wanneer een bestaande kamerthermostaat (potentiaalvrij contact) of Home Assistant de warmtevraag stuurt. |
| **Standaard setpoint verwarmen** | 10.0 t/m 30.0 °C (stap 0.1) | 20.5 °C | `number.thermostat_default_heat_setpoint` | Gewenste kamertemperatuur voor verwarmen na een herstart van het systeem of bij terugkeer naar de standaardinstellingen. |
| **Standaard setpoint koelen** | 18.0 t/m 30.0 °C (stap 0.1) | 24.0 °C | `number.thermostat_default_cool_setpoint` | Gewenste kamertemperatuur voor koelen na een herstart van het systeem. |

---

## Categorie: Verwarmen

Deze parameters bepalen de hysterese en schakelgrenzen van de interne thermostaat bij verwarmen.

![Thermostaat verwarmen](/images/instellingen-thermostaat-verwarmen.jpg)

| Instelling | Opties / Bereik | Standaard | Home Assistant entiteit | Beschrijving |
| :-- | :-- | :-- | :-- | :-- |
| **Deadband verwarmen** | 0.1 t/m 5.0 °C (stap 0.1) | 0.3 °C | `number.thermostat_heat_deadband` | Aantal graden dat de kamertemperatuur onder het setpoint moet zakken voordat de verwarmingsvraag inschakelt (Inschakeltemperatuur = `Setpoint - Deadband`). |
| **Overrun verwarmen** | 0.1 t/m 5.0 °C (stap 0.1) | 0.2 °C | `number.thermostat_heat_overrun` | Aantal graden dat de kamertemperatuur boven het setpoint mag oplopen voordat de verwarmingsvraag stopt (Uitschakeltemperatuur = `Setpoint + Overrun`). Voorkomt dat de verwarming direct bij het bereiken van het setpoint stopt en daarna snel weer start. |

---

## Categorie: Koelen

Deze parameters bepalen de hysterese en schakelgrenzen van de interne thermostaat bij koelen.

![Thermostaat koelen](/images/instellingen-thermostaat-koelen.jpg)

| Instelling | Opties / Bereik | Standaard | Home Assistant entiteit | Beschrijving |
| :-- | :-- | :-- | :-- | :-- |
| **Deadband koelen** | 0.1 t/m 5.0 °C (stap 0.1) | 0.5 °C | `number.thermostat_cool_deadband` | Aantal graden dat de kamertemperatuur boven het koelsetpoint moet stijgen voordat de koelvraag inschakelt (Inschakeltemperatuur = `Setpoint + Deadband`). |
| **Overrun koelen** | 0.1 t/m 10.0 °C (stap 0.1) | 3.0 °C | `number.thermostat_cool_overrun` | Aantal graden dat de kamertemperatuur onder het koelsetpoint mag zakken voordat de koeling stopt (Uitschakeltemperatuur = `Setpoint - Overrun`). |

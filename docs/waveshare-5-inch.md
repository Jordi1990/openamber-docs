---
title: Waveshare ESP32-S3 Touch LCD 5''
---

# Waveshare ESP32-S3 Touch LCD 5'' installatie en mods

Deze handleiding beschrijft de aansluiting, mechanische montage en uitbreidingen voor de Waveshare ESP32-S3 Touch LCD 5'' in de Itho Daalderop Amber module.

## Overzicht

- Productpagina: [Waveshare ESP32-S3 Touch LCD 5'' Wiki](https://www.waveshare.com/wiki/ESP32-S3-Touch-LCD-5)
- Gebruiksscenario: aanbevolen oplossing met geïntegreerd touchscreen
- Firmwarevariant: `openamber-esp32s3`

## Benodigdheden

- Waveshare ESP32-S3 Touch LCD 5''
- 3D geprinte bracketdelen:
  - [OpenAmber Screen Bracket Part 1 v2.0 (STL)](https://github.com/Jordi1990/openamber/blob/main/docs/OpenAmber_Screen_Bracket_Part1-v2.0.stl)
  - [OpenAmber Screen Bracket Part 2 v2.0 (STL)](https://github.com/Jordi1990/openamber/blob/main/docs/OpenAmber_Screen_Bracket_Part2-v2.0.stl)
- 4x originele Amber schermklemmen (tighteners)
- Optioneel: 4x M2.5x10 mm schroeven

Tip: De STL-modellen zijn ontworpen voor printen zonder support en geoptimaliseerd voor 0.2 mm laaghoogte.

## Impressie

<img src="/images/Bracket-Assembly-Front.jpeg" alt="Waveshare 5 inch montage in de regelmodule" width="520">

## Waveshare aansluiten (RS485 en voeding)

Gebruik deze sectie om de basisbekabeling correct aan te sluiten.

1. Sluit de RS485-lijnen correct aan: A naar A en B naar B op de warmtepomp-interface.
2. Verbind GND van de controller en het RS485-circuit met dezelfde referentie.
3. Controleer de voedingsspanning van de Waveshare-module volgens de board-specificatie.
4. Leid de bekabeling zo dat deze niet tegen ventilator of bewegende delen komt.
5. Start op en controleer communicatie in de logs voordat je de module definitief sluit.

## Waveshare 5 inch scherm installatie

Deze handleiding beschrijft de mechanische montage van de Waveshare ESP32-S3 Touch LCD 5'' in de Amber module.

### Stap 1: Achterbeugel monteren

Verwijder eerst de beschermfolie van de 3M tape op de Waveshare-module. Plaats daarna bracketdeel 2 op de achterkant van het scherm en lijn de uitsparing uit met de terminalconnector.

![Stap 1 montage](/images/Bracket-Assembly-Step1.jpeg)

### Stap 2: Voorste bracketdeel plaatsen

Lijn bracketdeel 1 vanaf de achterzijde uit met het scherm en de achterbeugel. Let op de uitsparingen voor USB-poort en schakelaar. Schuif deel 1 over de achterbeugel en druk dit op de vrijgekomen 3M tape.

Het glas van het Waveshare-scherm moet netjes in dit deel vallen. Als dat niet goed past, hecht de bracket ook minder goed. Deze stap borgt de achterbeugel mechanisch.

![Stap 2 montage](/images/Bracket-Assembly-Step2.jpeg)

### Stap 3: Plaatsen in de regelmodule

Monteer de Waveshare-module met bracket in de Amber regelmodule. Gebruik de originele schermklemmen om de module vast te zetten. Niet te hard aandraaien, de beugel is 3D geprint.

Optioneel kun je 4 schroeven toevoegen voor extra zekerheid, voor het geval de 3M tape na lange tijd minder goed hecht.

![Stap 3 montage](/images/Bracket-Assembly-Step3.jpeg)

### Eindresultaat

![Eindresultaat bracket](/images/Bracket-Assembly-Front.jpeg)

## Bekabeling checklist

- RS485 A/B niet omgewisseld
- GND-referentie aanwezig
- Voedingspolariteit gecontroleerd
- Bracketdelen sluiten strak aan op de module
- Scherm en bekabeling zijn mechanisch geborgd
- Communicatie getest na opstart

## Mods

### Optioneel: backlight mod via PWM-soldeerpunt

In de voorbeelden is een draad op het PWM-soldeerpunt van de schermmodule gesoldeerd. Daarmee kan de backlight correct uitgeschakeld worden wanneer het andere uiteinde op CAN_H wordt aangesloten.

Deze functionaliteit wordt ondersteund in firmware vanaf release 0.1.2.

![Backlight PWM mod](/images/Backlight-solder-mod-PWM.jpeg)

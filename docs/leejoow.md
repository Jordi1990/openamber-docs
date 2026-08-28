---
title: Amber Control Module
---

# Amber Control Module (Electropaultje / leejoow)

Deze pagina beschrijft de hardware-aansluiting voor de Itho Daalderop Amber Control Module, bekend van Electropaultje en leejoow.

## Overzicht

- Productpagina: [Itho Daalderop Amber Control Module](https://electropaultje.nl/product/itho-daalderop-amber-control-module/)
- Gebruiksscenario: geschikt als OpenAmber-controller zonder geïntegreerd touchscreen
- Firmwarevariant: `openamber-esp32`

## Benodigdheden

- Amber Control Module (Electropaultje / leejoow)
- Toegang tot de regelmodule
- Basisgereedschap voor het losnemen en vastzetten van bekabeling

## Impressie

<img src="/images/itho-module-install.png" alt="Amber Control Module installatie in de regelkast" width="520">

## Amber Control Module aansluiten (RS485 en voeding)

1. Schakel de installatie spanningsloos voordat je bekabeling losneemt.
2. Verwijder de Modbus-draden A en B van de originele WinCE-controller.
3. Sluit deze draden aan op de RS485-aansluitingen van de Amber Control Module met dezelfde polariteit (A naar A, B naar B).
4. Zorg voor een gedeelde GND-referentie tussen warmtepomp-interface en controller.
5. Sluit voeding aan volgens de pin-aanduiding van de module en controleer polariteit vóór inschakelen.
6. Start op en verifieer dat Modbus-communicatie stabiel binnenkomt in de logs.

## Installatie stappen

1. Plaats de module in de beschikbare ruimte van de regelkast.
2. Zorg dat kabels spanningsvrij en zonder knikken naar de aansluitklemmen lopen.
3. Bevestig de module mechanisch zodat deze niet kan trillen of verschuiven.
4. Controleer na montage nogmaals alle klemverbindingen.

## Bekabeling checklist

- RS485 A/B niet omgewisseld
- GND-referentie aanwezig
- Voedingspolariteit gecontroleerd
- Kabels mechanisch geborgd en weg van bewegende delen
- Communicatie getest na opstart

## Mods

Voor de Amber Control Module zijn geen standaard hardwaremods vereist.

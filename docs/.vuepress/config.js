import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  base: '/',

  lang: 'nl-NL',

  title: 'OpenAmber',
  description: 'OpenAmber vervangt de WinCE controller van je Itho Daalderop Amber warmtepomp met een ESP32, gebaseerd op ESPHome. Volledige controle over je warmtepomp met geavanceerde functies en monitoring. ',

  theme: defaultTheme({
    // Gebruik het lokale logo in de public map
    logo: '/images/icon.png',

    repo: 'Jordi1990/openamber-docs',
    docsRepo: 'https://github.com/Jordi1990/openamber-docs',
    docsBranch: 'main',
    docsDir: 'docs',
    editLink: true,
    editLinkText: 'Bewerk deze pagina op GitHub',
    lastUpdatedText: 'Laatst bijgewerkt',
    contributorsText: 'Bijdragers',

    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Aan de slag', link: '/aan-de-slag.html' },
      { text: 'Installatie', link: '/installatie.html' },
      { text: 'Configuratie', link: '/configuratie.html' },
      { text: 'Hardware', link: '/hardware.html' },
      { text: 'Home Assistant', link: '/home-assistant.html' },
      { text: 'API', link: '/api.html' },
      { text: 'Problemen & FAQ', link: '/troubleshooting.html' },
      { text: 'Bijdragen', link: '/contributing.html' },
    ],

    sidebar: {
      '/': [
        {
          text: 'Aan de slag',
          link: '/aan-de-slag.html',
          children: ['/benodigdheden.html'],
        },
        {
          text: 'Installatie',
          link: '/installatie.html',
          children: [
            '/installatie/firmware-flashen.html',
            '/installatie/hardware-aansluiten.html',
            '/installatie/eerste-opstart.html',
            '/installatie/basiscontrole.html',
            '/installatie/verwarmen.html',
            '/installatie/tapwater.html',
            '/installatie/koelen.html',
            '/installatie/smartgrid.html',
            '/installatie/controle-na-eerste-week.html',
          ],
        },
        {
          text: 'Configuratie & instellingen',
          link: '/configuratie.html',
          children: [
            '/configuratie-algemeen.html',
            '/configuratie-verwarmen.html',
            '/configuratie-koelen.html',
            '/configuratie-tapwater.html',
            '/configuratie-pomp.html',
            '/configuratie-bijverwarmen.html',
            '/configuratie-geavanceerd.html',
            '/configuratie-smartgrid.html',
            '/configuratie-thermostaat.html',
          ],
        },
        {
          text: 'Hardware',
          link: '/hardware.html',
          children: ['/waveshare-5-inch.html', '/leejoow.html'],
        },
        { text: 'Integratie met Home Assistant', link: '/home-assistant.html' },
        { text: 'API Referentie (Modbus)', link: '/api.html' },
        { text: 'Problemen & FAQ', link: '/troubleshooting.html' },
        { text: 'Geavanceerd / Tuning', link: '/advanced.md' },
        { text: 'Bijdragen & Support', link: '/contributing.html' },
      ],
    },
  }),

  bundler: viteBundler(),
})

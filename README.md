<p align="center">
  <img src="docs/.vuepress/public/images/logo-512x512.png" alt="OpenAmber Logo" width="128" height="128" />
</p>

<h1 align="center">OpenAmber Documentation</h1>

<p align="center">
  The official documentation repository for <strong>OpenAmber</strong> — the modern open-source replacement for the legacy WinCE controller in Itho Daalderop Amber heat pumps.
</p>

<p align="center">
  <a href="https://openamber.nl"><strong>openamber.nl »</strong></a>
  <br />
  <a href="https://openamber.nl/devices">Dashboard</a>
  ·
  <a href="#-local-development">Local Development</a>
  ·
  <a href="#-contributing">Contributing</a>
</p>

---

## 📖 About OpenAmber

OpenAmber replaces the sluggish, closed-source WinCE controller on the Itho Daalderop Amber heat pump with a modern ESP32 microcontroller powered by ESPHome. It grants you complete control, superior modulation, and seamless monitoring.

- ⚙️ **Modern ESP32 Controller:** Built on ESPHome for rapid responsiveness and rock-solid communication.
- 🏠 **Home Assistant Integration:** Deep, native integration with Home Assistant via the ESPHome native API.
- 📈 **Extended Modulation Range:** Broader compressor frequency range for more stable modulation and higher part-load efficiency.
- 📊 **PID Compressor Modulation:** Advanced PID-based control loop for optimal seasonal efficiency.
- ❄️ **Smart Defrost Recovery:** Enhanced recovery logic after defrost cycles with an optional boost feature for faster comfort restoration.
- 🔓 **100% Open Source:** Fully transparent and open under the GNU General Public License v3.

<p align="center">
  <img src="docs/.vuepress/public/images/home.jpg" alt="OpenAmber Interface" width="700" />
</p>

---

## 🛠️ Local Development

This documentation site is built using [VuePress v2](https://v2.vuepress.vuejs.org/) and Vite.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/)

### Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Jordi1990/openamber-docs.git
   cd openamber-docs
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run docs:dev
   ```
   Then open your browser at `http://localhost:8080`.

4. Build for production:
   ```bash
   npm run docs:build
   ```
   The generated static files will be placed in `docs/.vuepress/dist/`.

---

## 📂 Project Structure

```text
openamber-docs/
├── .github/workflows/    # GitHub Actions (automated deployment to gh-pages)
├── docs/                 # Documentation source files (Markdown)
│   ├── .vuepress/        # VuePress configuration, theme, and static assets
│   ├── installatie/      # Installation guides
│   ├── index.md          # Documentation website homepage
│   └── ...               # Additional documentation pages
├── package.json          # Scripts and dependencies
└── README.md             # This GitHub repository landing page
```

---

## 🤝 Contributing

Contributions, corrections, and additions to the documentation are warmly welcomed!

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/new-docs`).
3. Commit your changes (`git commit -m 'Add documentation on ...'`).
4. Push to your branch (`git push origin feature/new-docs`).
5. Open a **Pull Request**.

---

## 📄 License

Distributed under the **GNU General Public License v3 (GPL-3.0)**. See [`LICENSE`](file:///g:/openamber-docs/LICENSE) for more details.

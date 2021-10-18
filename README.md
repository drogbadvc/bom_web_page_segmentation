#BOM (Block-o-Matic) Web Page Segmentation

## Installation

- Installation de [Playwright](https://playwright.dev) pour exécuter un navigateur Headless 

```bash
npm i
```
- Installer aussi le fichier jquery.js non fourni

#Usage
```bash
node playwright.js https://www.example.com/
```

#Info
- Attention, c'est une version limité qui n'est pas celle que j'utilise dans mon api pour détecter le (header, footer, sidebar)
- Il va falloir toucher le code pour avoir une meilleur segmentation.

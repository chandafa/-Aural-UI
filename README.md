# Auralix UI

<div align="center">

![Auralix UI](https://img.shields.io/badge/Auralix_UI-Modern_Component_Library-8B5CF6?style=for-the-badge&logo=react&logoColor=white)

[![npm version](https://img.shields.io/npm/v/auralix-ui.svg?style=flat-square&color=8B5CF6)](https://www.npmjs.com/package/auralix-ui)
[![npm downloads](https://img.shields.io/npm/dm/auralix-ui.svg?style=flat-square&color=A855F7)](https://www.npmjs.com/package/auralix-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-100%25-blue?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

**Beautiful, accessible, and highly customizable React UI components for modern web applications.**

[Documentation](https://auralix-ui.netlify.app) · [Components](https://auralix-ui.netlify.app/components/button) · [GitHub](https://github.com/chandafa/auralix-ui)

</div>

---

## ✨ Features

- 🎨 **87+ Components** — Buttons, Cards, Modals, Tooltips, and more
- 🌙 **Dark Mode** — Built-in support with seamless theme switching
- ⚡ **High Performance** — Optimized animations with GSAP, Framer Motion, React Spring & Anime.js
- 📱 **Responsive** — Mobile-first design that works on all devices
- ♿ **Accessible** — WCAG compliant with full keyboard navigation
- 🔧 **Customizable** — Built with Tailwind CSS for easy styling
- 📦 **Tree-shakeable** — Import only what you need
- 💎 **TypeScript** — Full type safety and IntelliSense support

---

## 🚀 Quick Start

### Installation

```bash
npm install auralix-ui
# or
yarn add auralix-ui
# or
pnpm add auralix-ui
```

### Usage

```tsx
import { Button, Card, Modal } from "auralix-ui";

export default function App() {
  return (
    <Card>
      <h2>Welcome to Auralix UI</h2>
      <Button variant="gradient" size="lg">
        Get Started
      </Button>
    </Card>
  );
}
```

---

## 📦 Available Components

<table>
<tr>
<td>

**Layout**

- Accordion
- Card
- Divider
- Resizable

</td>
<td>

**Forms**

- Button
- Input
- Select
- Checkbox
- Switch
- Slider

</td>
<td>

**Feedback**

- Alert
- Modal
- Toast
- Tooltip
- Progress

</td>
<td>

**Data Display**

- Avatar
- Badge
- Table
- Tabs
- Tag

</td>
</tr>
</table>

[View all 87+ components →](https://auralix-ui.netlify.app/components/button)

---

## 🎨 Theming

Auralix UI uses CSS variables for theming. Customize colors easily:

```css
:root {
  --primary: #8b5cf6;
  --background: #ffffff;
  --foreground: #09090b;
}

.dark {
  --background: #09090b;
  --foreground: #fafafa;
}
```

---

## 🔧 Requirements

- React 18+
- Tailwind CSS 4+
- TypeScript (recommended)

---

## 📖 Documentation

Visit [auralix-ui.netlify.app](https://auralix-ui.netlify.app) for:

- 📚 Complete API reference
- 💡 Usage examples
- 🎨 Theming guide
- 📦 Installation tutorials

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

```bash
# Clone the repository
git clone https://github.com/chandafa/auralix-ui.git

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 📄 License

MIT © [Auralix Team](https://github.com/chandafa)

---

<div align="center">

**Built with ❤️ using React, TypeScript, and Tailwind CSS**

[⬆ Back to top](#auralix-ui)

</div>

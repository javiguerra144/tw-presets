# Tailwind Presets

A reusable Tailwind CSS preset package for creating customizable and consistent design systems. This package includes a Tailwind preset configuration and a CSS file with predefined variables, supporting light and dark modes.

---

## 🚀 Features

- **Customizable Design System**: Predefined colors, utilities, and components.
- **Light & Dark Mode**: Automatically adapts styles based on the active mode.
- **Reusable Components**: Includes base styles for buttons, typography, and more.
- **Extendable Preset**: Add your customizations easily on top of the provided configurations.

---

## 📦 Installation

1. Add the package to your project:

   ```bash
   npm install tw-presets
   ```

2. Add the preset to your Tailwind configuration:

   ```javascript
   const myPreset = require('tw-presets/tailwind-preset');

   module.exports = {
     presets: [myPreset],
     content: ['./src/**/*.{html,js,ts,jsx,tsx}'], // Adjust paths as needed
   };
   ```

3. Import the CSS in your application (if needed):

   ```javascript
   import 'tw-presets/styles.css';
   ```

---

## 🛠 Usage

### Example: Light & Dark Mode Button

```html
<html class="dark">
  <body>
    <div class="p-4">
      <button class="btn-primary">Primary Button</button>
    </div>
  </body>
</html>
```

### Example: Custom Colors

Use the `primary` color defined in the preset:

```html
<div class="bg-primary text-white p-4 rounded">
  This is a component using the primary color!
</div>
```

---

## 🗂 Folder Structure

```
tw-presets/
├── tailwind.config.js            # Tailwind config for local build
├── tailwind-preset.js            # Tailwind preset file
├── styles.css                    # Tailwind styles with predefined variables
├── package.json                  # Package metadata
└── README.md                     # Documentation
```

---

## ✨ Customization

### Extending the Preset

You can override or extend the preset in your project:

```javascript
module.exports = {
  presets: [require('tw-presets/tailwind-preset')],
  theme: {
    extend: {
      colors: {
        customColor: '#ff5733',
      },
    },
  },
};
```

### Add Your Own Components

Define custom classes in your `styles.css` or Tailwind configuration:

```css
.btn-secondary {
  @apply bg-gray-600 text-white py-2 px-4 rounded;
}
```

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

## 👥 Contributing

Contributions are welcome! If you have ideas or find bugs, feel free to:

- Open an [issue](https://github.com/javiguerra144/tw-presets/issues)
- Submit a [pull request](https://github.com/javiguerra144/tw-presets/pulls)

---

## 🌟 Acknowledgments

Thanks to the Tailwind CSS team for building such an amazing framework!

---

## 📬 Support

If you encounter any issues or have questions, please [open an issue](https://github.com/javiguerra144/tw-presets/issues).

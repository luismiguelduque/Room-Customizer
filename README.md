# Three.js Room Customizer Demo

Minimal demo project using React, TypeScript, Vite, and Three.js (via React Three Fiber).

## Features
- 3D room viewer with customizable floor textures and wall colors
- Responsive sidebar for quick changes
- Error boundary for robust rendering

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

## Build
```bash
npm run build
```

## Lint
```bash
npm run lint
```

## Screenshot
_Add screenshot here_
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

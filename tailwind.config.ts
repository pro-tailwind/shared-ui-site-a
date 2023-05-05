import type { Config } from 'tailwindcss'
import multiThemePlugin from './src/plugins/multi-theme'

import colorThemes from './src/themes.json'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@protailwind-ui/yolo/dist/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [multiThemePlugin({ colorThemes })],
} satisfies Config

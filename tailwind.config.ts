import type { Config } from 'tailwindcss'

import { withMultiThemePreset } from '@protailwind-ui/yolo'

export default {
  presets: [withMultiThemePreset satisfies Config],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@protailwind-ui/yolo/dist/**/*.{js,ts,jsx,tsx}',
  ],
} satisfies Config

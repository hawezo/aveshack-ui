const { ThemeBuilder, Theme } = require('tailwindcss-theming');

const lightTheme = new Theme()
  .name('light')
  .default()
  .assignable()
  .colors({
    // Navigation
    navigation: '#3c4253',
    'on-navigation': '#9aa2b6',

    // Background colors, but not limited to `bg` utilities.
    background: '#f4f4f4',
    surface: '#ffffff',
    'surface-file': '#eeeeee',
    'on-background': '#585851',
    'on-surface': '#3c3c3c',

    // Event colors.
    error: '#b00020',
    'on-error': '#ffffff',
    success: '#3ab577',
    'on-success': '#ffffff',
    warning: '#e65100',
    'on-warning': '#ffffff',
    info: '#4ea0fa',
    'on-info': '#ffffff',

    // Link
    link: '#657de166',
  })
  .colorVariant('hover', '#2c82f9', 'info')
  .colorVariant('hover', '#657de188', 'link')
  .opacityVariant('emphasis', 0.86)
  .opacityVariant('muted', 0.38);

const darkTheme = new Theme()
  .name('dark')
  .colors({
    // Navigation
    navigation: '#282828',
    'on-navigation': '#9aa2b6',

    // Background colors, but not limited to `bg` utilities.
    background: '#1f1f1f',
    surface: '#282828',
    'surface-file': '#313131',
    'on-background': '#ffffff',
    'on-surface': '#dedede',

    // Event colors.
    error: '#e67388',
    'on-error': '#ffffff',
    success: '#3ab577',
    'on-success': '#ffffff',
    warning: '#ffa777',
    'on-warning': '#ffffff',
    info: '#4ea0fa',
    'on-info': '#ffffff',
  })
  .opacityVariant('emphasis', 0.61)
  .opacityVariant('muted', 0.21);

module.exports = new ThemeBuilder()
  .asDataThemeAttribute()
  .default(lightTheme)
  .dark(darkTheme);

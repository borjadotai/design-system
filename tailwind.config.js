module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        grid: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23f1f5f9'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        gridDark: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(51 65 85 / 0.25)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
      },
      colors: {
        gray: {
          2: 'var(--gray-2)',
          5: 'var(--gray-5)',
          10: 'var(--gray-10)',
          15: 'var(--gray-15)',
          20: 'var(--gray-20)',
          25: 'var(--gray-25)',
          30: 'var(--gray-30)',
          35: 'var(--gray-35)',
          40: 'var(--gray-40)',
          45: 'var(--gray-45)',
          50: 'var(--gray-50)',
          55: 'var(--gray-55)',
          60: 'var(--gray-60)',
          65: 'var(--gray-65)',
          70: 'var(--gray-70)',
          75: 'var(--gray-75)',
          80: 'var(--gray-80)',
          85: 'var(--gray-85)',
          88: 'var(--gray-88)',
          90: 'var(--gray-90)',
          95: 'var(--gray-95)',
          100: 'var(--gray-100)',
        },
        blue: {
          2: 'var(--blue-2)',
          5: 'var(--blue-5)',
          10: 'var(--blue-10)',
          15: 'var(--blue-15)',
          20: 'var(--blue-20)',
          25: 'var(--blue-25)',
          30: 'var(--blue-30)',
          35: 'var(--blue-35)',
          40: 'var(--blue-40)',
          45: 'var(--blue-45)',
          50: 'var(--blue-50)',
          55: 'var(--blue-55)',
          60: 'var(--blue-60)',
          65: 'var(--blue-65)',
          70: 'var(--blue-70)',
          75: 'var(--blue-75)',
          80: 'var(--blue-80)',
          85: 'var(--blue-85)',
          90: 'var(--blue-90)',
          95: 'var(--blue-95)',
          100: 'var(--blue-100)',
        },
        red: {
          2: 'var(--red-2)',
          5: 'var(--red-5)',
          10: 'var(--red-10)',
          15: 'var(--red-15)',
          20: 'var(--red-20)',
          25: 'var(--red-25)',
          30: 'var(--red-30)',
          35: 'var(--red-35)',
          40: 'var(--red-40)',
          45: 'var(--red-45)',
          50: 'var(--red-50)',
          55: 'var(--red-55)',
          60: 'var(--red-60)',
          65: 'var(--red-65)',
          70: 'var(--red-70)',
          75: 'var(--red-75)',
          80: 'var(--red-80)',
          85: 'var(--red-85)',
          90: 'var(--red-90)',
          95: 'var(--red-95)',
          100: 'var(--red-100)',
        },
        orange: {
          2: 'var(--orange-2)',
          5: 'var(--orange-5)',
          10: 'var(--orange-10)',
          15: 'var(--orange-15)',
          20: 'var(--orange-20)',
          25: 'var(--orange-25)',
          30: 'var(--orange-30)',
          35: 'var(--orange-35)',
          40: 'var(--orange-40)',
          45: 'var(--orange-45)',
          50: 'var(--orange-50)',
          55: 'var(--orange-55)',
          60: 'var(--orange-60)',
          65: 'var(--orange-65)',
          70: 'var(--orange-70)',
          75: 'var(--orange-75)',
          80: 'var(--orange-80)',
          85: 'var(--orange-85)',
          90: 'var(--orange-90)',
          95: 'var(--orange-95)',
          100: 'var(--orange-100)',
        },
        green: {
          2: 'var(--green-2)',
          5: 'var(--green-5)',
          10: 'var(--green-10)',
          15: 'var(--green-15)',
          20: 'var(--green-20)',
          25: 'var(--green-25)',
          30: 'var(--green-30)',
          35: 'var(--green-35)',
          40: 'var(--green-40)',
          45: 'var(--green-45)',
          50: 'var(--green-50)',
          55: 'var(--green-55)',
          60: 'var(--green-60)',
          65: 'var(--green-65)',
          70: 'var(--green-70)',
          75: 'var(--green-75)',
          80: 'var(--green-80)',
          85: 'var(--green-85)',
          90: 'var(--green-90)',
          95: 'var(--green-95)',
          100: 'var(--green-100)',
        },
        pink: {
          2: 'var(--pink-2)',
          5: 'var(--pink-5)',
          10: 'var(--pink-10)',
          15: 'var(--pink-15)',
          20: 'var(--pink-20)',
          25: 'var(--pink-25)',
          30: 'var(--pink-30)',
          35: 'var(--pink-35)',
          40: 'var(--pink-40)',
          45: 'var(--pink-45)',
          50: 'var(--pink-50)',
          55: 'var(--pink-55)',
          60: 'var(--pink-60)',
          65: 'var(--pink-65)',
          70: 'var(--pink-70)',
          75: 'var(--pink-75)',
          80: 'var(--pink-80)',
          85: 'var(--pink-85)',
          90: 'var(--pink-90)',
          95: 'var(--pink-95)',
          100: 'var(--pink-100)',
        },
        brand: 'var(--light-brand)',
        emphasis: 'var(--light-emphasis)',
        background: 'var(--light-background)',
        foreground: 'var(--light-foreground)',
        primary: 'var(--light-text-primary)',
        secondary: 'var(--light-text-secondary)',
        terciary: 'var(--light-text-terciary)',
        info: 'var(--light-info)',
        'info-emphasis': 'var(--light-info-emphasis)',
        success: 'var(--light-success)',
        'success-emphasis': 'var(--light-success-emphasis)',
        warning: 'var(--light-warning)',
        'warning-emphasis': 'var(--light-warning-emphasis)',
        danger: 'var(--light-danger)',
        'danger-emphasis': 'var(--light-danger-emphasis)',
        dark: {
          brand: 'var(--dark-brand)',
          emphasis: 'var(--dark-emphasis)',
          background: 'var(--dark-background)',
          foreground: 'var(--dark-foreground)',
          primary: 'var(--dark-text-primary)',
          secondary: 'var(--dark-text-secondary)',
          terciary: 'var(--dark-text-terciary)',
          info: 'var(--dark-info)',
          'info-emphasis': 'var(--dark-info-emphasis)',
          success: 'var(--dark-success)',
          'success-emphasis': 'var(--dark-success-emphasis)',
          warning: 'var(--dark-warning)',
          'warning-emphasis': 'var(--dark-warning-emphasis)',
          danger: 'var(--dark-danger)',
          'danger-emphasis': 'var(--dark-danger-emphasis)',
        },
      },
      fontFamily: {
        display: 'var(--font-display)',
        mono: 'var(--font-mono)',
        numeric: 'var(--font-numeric)',
        fallback: 'var(--font-fallback)',
      },
      fontSize: {
        xs: 'var(--font-size-1)',
        sm: 'var(--font-size-2)',
        base: 'var(--font-size-3)',
        lg: 'var(--font-size-4)',
        xl: 'var(--font-size-5)',
        '2xl': 'var(--font-size-6)',
        '3xl': 'var(--font-size-7)',
      },
    },
  },
  plugins: [],
};
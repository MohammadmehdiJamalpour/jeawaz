/** @type {import('tailwindcss').Config} */

const withOpacity = (variableName) => {
  return ({ opacityValue } = {}) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
};

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: withOpacity("--color-primary-50"),
          100: withOpacity("--color-primary-100"),
          200: withOpacity("--color-primary-200"),
          300: withOpacity("--color-primary-300"),
          400: withOpacity("--color-primary-400"),
          500: withOpacity("--color-primary-500"),
          600: withOpacity("--color-primary-600"),
          700: withOpacity("--color-primary-700"),
          800: withOpacity("--color-primary-800"),
          900: withOpacity("--color-primary-900"),
        },
        secondary: {
          0: withOpacity("--color-secondary-0"),
          50: withOpacity("--color-secondary-50"),
          100: withOpacity("--color-secondary-100"),
          200: withOpacity("--color-secondary-200"),
          300: withOpacity("--color-secondary-300"),
          400: withOpacity("--color-secondary-400"),
          500: withOpacity("--color-secondary-500"),
          600: withOpacity("--color-secondary-600"),
          700: withOpacity("--color-secondary-700"),
          800: withOpacity("--color-secondary-800"),
          900: withOpacity("--color-secondary-900"),
        },
        success: withOpacity("--color-success"),
        warning: withOpacity("--color-warning"),
        error: withOpacity("--color-error"),
      },
      fontFamily: {
        sans: ["iransans", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Arial", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
      },
       screens: {
        '3xl': '1920px', 
      },
      boxShadow: {
        centered: "0 0 15px rgba(0, 0, 0, 0.1)",
        "centered-lg": "0 0 25px rgba(0, 0, 0, 0.15)",
        'centered-lg-top': '0 -12px 25px -12px rgba(0,0,0,.2)',
      },
        maxWidth: {
        '8xl': '88rem',  // ~1408px
        '9xl': '96rem',  // ~1536px
        '10xl': '104rem', // ~1664px
        '11xl': '112rem', // ~1792px
      },
    },
  },
  plugins: [],
};

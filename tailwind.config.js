/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1f2235',
        secondary: '#ff4a57',
        'primary-light': '#283B51',
        smoke: '#F5F9FF',
        black: '#1F2235',
        'body-color':'#F5F5F5',
        'text-color':"#787C8B"
      },
      screens: {
        xs: { max: '515px' }
      },
      boxShadow: {
        'btn-shadow':'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        'lg-shadow':
          '0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.35)'
      }
    }
  },
  plugins: []
};

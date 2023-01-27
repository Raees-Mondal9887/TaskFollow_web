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
        'lg-pink':
          '0 12px 22px -5px rgba(0,0,0,0.12),0 10px 10px -5px rgba(0,0,0,0.04),0 13px 24px -11px rgba(194,24,91,0.6)',
        'lg-orange':
          '0 12px 22px -5px rgba(0,0,0,0.12),0 10px 10px -5px rgba(0,0,0,0.04),0 13px 24px -11px rgba(245,122,0,0.6)',

        'lg-purple':
          ' 0 12px 22px -5px rgba(0,0,0,0.12),0 10px 10px -5px rgba(0,0,0,0.04),0 13px 24px -11px rgba(123,31,162,0.6)',

        'lg-blue':
          '0 12px 22px -5px rgba(0,0,0,0.12),0 10px 10px -5px rgba(0,0,0,0.04),0 13px 24px -11px rgba(25,118,210,0.6)',
        'dashboard-md': '0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06)'
      }
    }
  },
  plugins: []
};

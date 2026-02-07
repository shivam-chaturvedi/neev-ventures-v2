/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neev-blue': '#4A90E2',
        'neev-sky': '#87CEEB',
        'neev-pink': '#FF6B9D',
        'neev-rose': '#FFB5C5',
        'neev-orange': '#FF8C42',
        'neev-coral': '#FF6F61',
        'neev-mustard': '#E6B834',
        'neev-gold': '#D4AF37',
        'neev-rust': '#B7410E',
        'neev-burgundy': '#800020',
      },
      fontFamily: {
        'display': ['Lobster', 'cursive'],
        'lobster': ['Lobster', 'cursive'],
        'dancing': ['Dancing Script', 'cursive'],
        'pacifico': ['Pacifico', 'cursive'],
        'satisfy': ['Satisfy', 'cursive'],
        'courgette': ['Courgette', 'cursive'],
        'body': ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}



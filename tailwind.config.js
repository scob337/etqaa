export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-bg': '#061224',
        'main-text': '#fff',
        
          'dark': '#050e1a',
          'primary': '#0A162C',
          'secondary': '#101d37',
          'accent': '#00FFFF',
          'accent-dark': '#00CCCC',
          'green': '#00FF8C',
          'blue': '#0078FF',
          'red': '#FF3E3E',
          'purple': '#7928CA',
          'gray-dark': '#1E293B',
          'gray-light': '#94A3B8',
        'gradient': {
          'blue-start': '#0078FF',
          'blue-end': '#00C6FF',
          'green-start': '#00CCCC',
          'green-end': '#00FF8C',
          'purple-start': '#7928CA',
          'purple-end': '#FF0080'
        }
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(to right, #00CCCC, #00FF8C)',
        'blue-gradient': 'linear-gradient(to right, #0078FF, #00C6FF)',
        'purple-gradient': 'linear-gradient(to right, #7928CA, #FF0080)'
      },
      boxShadow: {
        'cyber': '0 4px 20px 0 rgba(0, 255, 255, 0.1)',
        'cyber-lg': '0 10px 30px 0 rgba(0, 255, 255, 0.2)',
        'cyber-hover': '0 0 15px 2px rgba(0, 255, 255, 0.3)'
      },
      borderRadius: {
        'cyber': '0.5rem'
      },
      fontFamily: {
        'cyber': ['Orbitron', 'sans-serif']
      }
    },
  },
}

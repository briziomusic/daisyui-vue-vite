module.exports = {
  content: ['./src/**/*.{vue,js,ts}'],
  plugins: [require('daisyui')],
  build: {
    outDir: '../docs'
  },

  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
    themes: [
      {
        mytheme: {
        
          "primary": "#01965e",
                  
          "secondary": "#01965e",
                  
          "accent": "#01965e",
                  
          "neutral": "#eee",
                  
          "base-100": "#2D384E",
                  
          "info": "#71B2DA",
                  
          "success": "#105644",
                  
          "warning": "#F19D37",
                  
          "error": "#F34960",
        },
      },
    ]
  },

};

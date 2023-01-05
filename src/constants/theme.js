

  export const theme = Object.freeze({
    colors: {
     white: "#ffffff",
     black: "#010101",
     green: "#4caf50",
     red: "#f44336",
     blue: "#2196f3",
     primaryText: "#212121",
     secondaryText: "#757575",
     accent: "#d18520",
    },

    spacing: value => `${4 * value}px`,

    space: [0, 2, 4, 8, 16, 32, 64, 128, 256, 512, 650, 1024],
    fonts: {
      body: 'system-ui, sans-serif',
      heading: 'system-ui, sans-serif',
      monospace: 'Menlo, monospace',
    },
    fontSizes: {
      xs: '12px',
      s: '14px',
      m: '16px',
      l: '32px',
      xl: '64px',
    },
    fontWeights: {
      normal: 400,
      bold: 700,
    },
    lineHeights: {
      body: 1.5,
      heading: 1.125,
    },
    borders: {
      none: 'none',
      normal: '1px solid',
      big: '8px solid',
    },
    radii: {
      none: '0',
      normal: '4px',
     
      round: '50%',
    },

    sizes:  {
     small: '300px',
     normal: '600px',
     large: '700px',
     auto: 'auto',    
    }


  });


 
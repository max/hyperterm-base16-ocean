const backgroundColor = '#2b303b';
const foregroundColor = '#c0c5ce';
const cursorColor = foregroundColor;
const borderColor = backgroundColor;

const colors = {
   black: backgroundColor,
   red: '#bf616a',
   green: '#a3be8c',
   yellow: '#ebcb8b',
   blue: '#8fa1b3',
   magenta: '#b48ead',
   cyan: '#96b5b4',
   white: '#c0c5ce',
   lightBlack: '#65737e',
   lightRed: '#d18770',
   lightGreen: '#343d46',
   lightYellow: '#4f5b67',
   lightBlue: '#a7adba',
   lightMagenta: '#dfe1e8',
   lightCyan: '#ab7967',
   lightWhite: '#eff1f5',
   grayscale: foregroundColor
};

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
    .cursor-node {
      mix-blend-mode: difference;
    }
    `,
    css: `
      ${config.css || ''}
      .header_header {
        top: 0;
        right: 0;
        left: 0;
      }
      .tabs_list {
        background-color: #21252b !important;
        border-bottom-color: rgba(0,0,0,.15) !important;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        background-color: ${backgroundColor};
        border-color: rgba(0,0,0,.27) !important;
      }
      .tab_tab.tab_active::before {
        border-bottom-color: ${backgroundColor};
      }
    `
  });
};

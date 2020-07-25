import {getFromStorage} from '../services/storage'
const androidTheme = {
  c1: '#77C159',
  c2: '#ECEFF1',
  c3: '#B0BEC5',
  c4: '#6F7476',
};

export function GetTheme(){
    let theme=getFromStorage("themeID")
    switch(theme) {
        case 'foo':
          return androidTheme;
        default:
          return androidTheme;
      }
}
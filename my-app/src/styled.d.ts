import 'styled-components';

const theme = {
  name: 'Deafaul theme',
  background: '#000',
  primary: 'orange',
  secondary: 'pink',
};
// Sobrescreve o tipo do tema do styled components

declare module 'styled-components' {
  // Seta o novo tipo através da inferencia de tipo
  type ThemeType = typeof theme;

  // Exporta o DeafaultTheme agora recebendo a nova tipagem
  export interface DefaultTheme extends ThemeType {}
}

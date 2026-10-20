/**
 * Re-exportación del tema de Amari desde assets/theme.js para acceso directo desde la raíz.
 */
import amariTheme, { colors } from './assets/theme.js';

if (typeof window !== 'undefined') {
  window.AmariTheme = amariTheme;
  window.theme = amariTheme;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = amariTheme;
}

export default amariTheme;
export { colors };

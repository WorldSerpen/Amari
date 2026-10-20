/**
 * Amari Design System - Paleta de Colores y Tema Visual (Rojo y Blanco)
 * 
 * Este archivo centraliza los colores del tema para asegurar coherencia visual
 * en toda la aplicación (register.html, home.html, banking.html, etc.).
 * Compatible con Vanilla JS (navegador), ES Modules y Node/CommonJS.
 */

const amariTheme = {
  name: 'Amari Red & White',
  version: '1.0.0',

  colors: {
    // Colores Principales (Rojo Amari)
    primary: {
      red: '#e11d48',            // Rojo principal vibrante
      hover: '#be123c',          // Rojo oscuro para estados hover/hover active
      dark: '#881337',           // Rojo profundo para fondos y acentos oscuros
      light: '#ffe4e6',          // Tono suave/pastel para fondos de etiquetas y badges
      accent: '#f43f5e',         // Rojo frambuesa brillante para destellos y gradientes
      glow: 'rgba(225, 29, 72, 0.25)', // Resplandor para focus rings y sombras dinámicas
      glowStrong: 'rgba(225, 29, 72, 0.45)'
    },

    // Tonos Blancos y Superficies
    white: {
      pure: '#ffffff',           // Blanco puro
      offWhite: '#f8fafc',       // Blanco humo para fondos de campos
      background: '#fafaf9',     // Fondo general de la aplicación
      surface: '#ffffff',        // Tarjetas y modales
      subtleGlass: 'rgba(255, 255, 255, 0.15)' // Efecto glassmorphism
    },

    // Escala de Grises y Textos (Neutros)
    neutral: {
      textMain: '#0f172a',       // Texto principal (Slate 900)
      textMuted: '#64748b',      // Texto secundario / subtítulos (Slate 500)
      textLight: '#94a3b8',      // Íconos inactivos y placeholders (Slate 400)
      borderLight: '#f1f5f9',    // Bordes sutiles de separadores (Slate 100)
      borderMedium: '#e2e8f0',   // Bordes de tarjetas y campos de entrada (Slate 200)
      borderHover: '#cbd5e1'     // Bordes en estado hover (Slate 300)
    },

    // Colores de Estado y Validación
    status: {
      success: '#10b981',        // Verde esmeralda para validaciones correctas
      warning: '#f59e0b',        // Ámbar para contraseñas débiles/alertas
      danger: '#e11d48',         // Rojo para errores en campos
      info: '#3b82f6'            // Azul informativo
    },

    // Gradientes Oficiales
    gradients: {
      primary: 'linear-gradient(135deg, #e11d48 0%, #be123c 100%)',
      hero: 'linear-gradient(145deg, #be123c 0%, #e11d48 50%, #9f1239 100%)',
      accent: 'linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)',
      glass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%)'
    },

    // Sombras
    shadows: {
      subtle: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
      card: '0 20px 40px -15px rgba(225, 29, 72, 0.08), 0 0 20px 0 rgba(0, 0, 0, 0.04)',
      glow: '0 10px 25px -5px rgba(225, 29, 72, 0.35)',
      glowElevated: '0 14px 28px -6px rgba(225, 29, 72, 0.45)'
    }
  },

  /**
   * Aplica dinámicamente las variables CSS al :root del documento HTML actual.
   * Uso: amariTheme.applyToDOM();
   */
  applyToDOM() {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    const { primary, white, neutral, status, shadows } = this.colors;

    root.style.setProperty('--primary-red', primary.red);
    root.style.setProperty('--primary-red-hover', primary.hover);
    root.style.setProperty('--primary-red-dark', primary.dark);
    root.style.setProperty('--primary-red-light', primary.light);
    root.style.setProperty('--primary-red-glow', primary.glow);
    root.style.setProperty('--red-accent', primary.accent);

    root.style.setProperty('--pure-white', white.pure);
    root.style.setProperty('--off-white', white.offWhite);
    root.style.setProperty('--surface-white', white.surface);

    root.style.setProperty('--text-main', neutral.textMain);
    root.style.setProperty('--text-muted', neutral.textMuted);
    root.style.setProperty('--text-light', neutral.textLight);
    root.style.setProperty('--border-light', neutral.borderLight);
    root.style.setProperty('--border-medium', neutral.borderMedium);

    root.style.setProperty('--success-green', status.success);
    root.style.setProperty('--warning-amber', status.warning);
    root.style.setProperty('--danger-red', status.danger);

    root.style.setProperty('--shadow-subtle', shadows.subtle);
    root.style.setProperty('--shadow-card', shadows.card);
    root.style.setProperty('--shadow-glow', shadows.glow);
  }
};

// Compatibilidad en navegador, ES Modules y CommonJS
if (typeof window !== 'undefined') {
  window.AmariTheme = amariTheme;
  window.theme = amariTheme;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = amariTheme;
}

export default amariTheme;
export const colors = amariTheme.colors;

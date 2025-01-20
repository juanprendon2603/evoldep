import { defineConfig } from 'astro/config';
import react from '@astrojs/react'; // Importa la integración de React

export default defineConfig({
  integrations: [react()], // Agrega React a las integraciones
});

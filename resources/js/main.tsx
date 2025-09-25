import './bootstrap';
import "./index.css";
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
//import App from "./App.tsx";

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: name => resolvePageComponent(`./components/${name}.tsx`, import.meta.glob('./components/**/*.tsx')),
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
    //createRoot(document.getElementById("root")!).render(<App />);
  },
  progress: { color: '#4B5563' },
});
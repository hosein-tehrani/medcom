import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { fa } from "vuetify/locale";
export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    locale: {
      locale: "fa",
      fallback: "fa",
      messages: { fa },
      rtl: { fa: true },
    },
    components,
    directives,
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            primary700: "#00897b",
            primary50: "#e0f2f1",
            primary: "#26a69a",
            secondary50: "#ffebee",
            secondary: "#ff2056",
            warning: "#fbbc04",
            gray100: "#ECEFF1",
          },
        },
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});

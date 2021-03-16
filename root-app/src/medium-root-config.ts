import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@medium/navbar",
  app: () => System.import("@medium/navbar"),
  activeWhen: ["/"]
});

registerApplication({
    name: "@medium/dashboard",
    app: () => System.import("@medium/dashboard"),
    activeWhen: ["/"]
});

registerApplication({
    name: "@medium/vue-app",
    app: () => System.import("@medium/vue-app"),
    activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});

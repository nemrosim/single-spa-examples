import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@medium/navbar",
  app: () => System.import("@medium/navbar"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});

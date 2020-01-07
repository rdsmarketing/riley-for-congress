import plugin_gridsome_plugin_tailwindcss_5 from "/home/footbllman62/Documents/programming/vuejs/gridsome/riley-for-congress/node_modules/gridsome-plugin-tailwindcss/gridsome.client.js"
import plugin_gridsome_plugin_gtm_6 from "/home/footbllman62/Documents/programming/vuejs/gridsome/riley-for-congress/node_modules/gridsome-plugin-gtm/gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_tailwindcss_5,
    options: {"shouldPurge":true,"shouldImport":true,"shouldTimeTravel":true,"presetEnvConfig":{"stage":0,"autoprefixer":false},"purgeConfig":{"content":["./src/**/*.vue","./src/**/*.js","./src/**/*.jsx","./src/**/*.ts","./src/**/*.tsx","./src/**/*.html","./src/**/*.pug","./src/**/*.md","./src/**/*.svg"],"whitelist":["body","html","img","a","g-image","g-image--lazy","g-image--loaded","active","active--exact"]}}
  },
  {
    run: plugin_gridsome_plugin_gtm_6,
    options: {"id":"GTM-KFD68G3","enabled":true,"debug":true}
  }
]

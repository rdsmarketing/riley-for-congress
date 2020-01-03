const tailwind = require("tailwindcss")
const purgecss = require("@fullhuman/postcss-purgecss")

// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const postcssPlugins = [
  tailwind(),
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss())


module.exports = {
  siteName: "Riley For Congress",
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss"
      /* These are the default options. You don't need to set any options to get going.
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true,
        shouldPurgeUnusedKeyframes: true,
      }
      */
    },
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'GTM-KFD68G3',
        enabled: true,
        debug: true
      }
    }
  ]
};

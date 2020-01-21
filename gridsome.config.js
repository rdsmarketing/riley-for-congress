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
  siteName: "Riley Seaburg For US Congress | NY 20 | 2020",
  favicon: '/src/favicon.svg',
  touchicon: '/src/favicon.svg',
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss"
    },

    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'GTM-KFD68G3',
        enabled: true,
        debug: true
      }
    },
    {
      use: '@gridsome/source-ghost',
      options: {
        baseUrl: 'https://demo.ghost.io',
        contentKey: '22444f78447824223cefc48062',
        routes: {
          post: '/:slug',
          page: '/:slug'
       }
     }
    }
  ]
};

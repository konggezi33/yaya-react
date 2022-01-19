
const CracoLessPlugin = require('craco-less')
const { options } = require('less')
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': '#4e6ef2',
              '@link-color': '#4e6ef2'
             },
            javascriptEnabled: true,
          },
        }
      }

    }
  ]
}
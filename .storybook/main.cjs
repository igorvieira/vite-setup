const { mergeConfig } = require('vite')

module.exports = {
  stories: ['../src/**/stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite'
  },
  features: {
    storyStoreV7: true
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          components: `/src/components/`,
          styles: `/src/styles/`,
          types: `/src/types/`,
          utils: `/src/utils/`
        }
      }
    })
  }
}

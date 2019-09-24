module.exports = {
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/test'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}

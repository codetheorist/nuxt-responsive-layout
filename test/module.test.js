const { setup, loadConfig, url } = require('@nuxtjs/module-test-utils')

describe('Device module', () => {
  let nuxt

  let ctx
  let headers

  beforeAll(async () => {
    ({ nuxt } = await setup(loadConfig(__dirname)))
  }, 60000)

  afterAll(async () => {
    await nuxt.close()
  })

  beforeEach(async () => {
    headers = {}
    ctx = {
      req: {
        headers
      }
    }
  })

  test('injects properties', async () => {
    const window = await nuxt.renderAndGetWindow(url('/'))

    expect(window.$nuxt.$layout).toBeDefined()
  })
})

import fastify from 'fastify'
import UsersAccess from './users'

const build = (opts = {}) => {
  const app = fastify(opts)
  const userAccess = new UsersAccess()

  app.get('/feature', async (request, reply) => {
    // @ts-ignore
    const { email, featureName } = request.query

    const canAccess = userAccess.retrieve(email, featureName)

    return { canAccess }
  })

  app.post('/feature', async (request, reply) => {
    try {
      // @ts-ignore
      const { email, featureName, enable = true } = request.body

      userAccess.create(email, featureName, enable)
      reply.code(200)
    } catch (e) {
      reply.code(304)
    }
    reply.send()
  })

  return app
}

export default build

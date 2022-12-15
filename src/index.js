// CommonJs
const fastify = require('fastify')({
  logger: true
})
const userRoutes = require('./routes/users/users.routes')
const fastifySwagger = require('@fastify/swagger')
const fastifySwaggerUi = require('@fastify/swagger-ui')

const swaggerOptions = require('./utils/swagger')

fastify.register(fastifySwagger, swaggerOptions.swaggerOptions)

fastify.register(fastifySwaggerUi, swaggerOptions.swaggerUIOptions)

fastify.get('/', async (request, reply) => {
  return { hello: 'Hola Mundo' }
})

/** Create routes */
userRoutes.forEach(route => {
  fastify.route(route)
})

/** Start the server! */
const start = async () => {
  try {
    await fastify.listen({ port: 3000 })

    fastify.log.info(
      `Server is running on port ${fastify.server.address().port}`
    )
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()

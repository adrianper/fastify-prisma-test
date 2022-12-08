// CommonJs
const fastify = require('fastify')({
    logger: true
})

const userRoutes = require('./routes/users/users.routes')

fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
})

userRoutes.forEach(route => { fastify.route(route) })

/**
 * Run the server!
 */
const start = async () => {
    try {
        await fastify.listen({ port: 3000 })
        fastify.log.info(`Server is running on port ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start()

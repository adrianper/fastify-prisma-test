const prisma = require('../../prisma')

const routes = [
  {
    url: '/users',
    method: 'GET',
    handler: async (request, reply) => {
      const users = await prisma.user.findMany()
      return users
    }
  },
  {
    url: '/users/:id',
    method: 'GET',
    handler: (request, reply) => {
      const { id } = request.params

      const user = prisma.user.findMany({
        where: { id }
      })

      return user
    },
    schema: {
      params: {
        properties: {
          id: { type: 'number' }
        }
      }
    }
  },
  {
    url: '/users_posts',
    method: 'GET',
    handler: async (request, reply) => {
      const usersWithPosts = await prisma.user.findMany({
        include: { posts: true }
      })
      return usersWithPosts
    }
  },
  {
    url: '/users',
    method: 'POST',
    handler: async (request, reply) => {
      const { email, name } = request.body

      const user = await prisma.user.create({
        data: { email, name }
      })

      return user
    }
  },
  {
    url: '/users/:id',
    method: 'PUT',
    handler: async (request, reply) => {
      const { id } = request.params
      const { email, name } = request.body

      const updatedUser = await prisma.user.update({
        where: { id },
        data: { email, name }
      })

      return updatedUser
    },
    schema: {
      params: {
        properties: {
          id: { type: 'number' }
        }
      }
    }
  },
  {
    url: '/users/:id',
    method: 'DELETE',
    handler: async (request, reply) => {
      const { id } = request.params
      const user = await prisma.user.delete({
        where: { id }
      })
      return `User "${user.email}" has been deleted`
    },
    schema: {
      params: {
        properties: {
          id: { type: 'number' }
        }
      }
    }
  }
]

module.exports = routes

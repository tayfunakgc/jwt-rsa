const { signToken, verifyToken } = require('./jwt')

const token = signToken({ userId: 1 })
console.log({ token })

const verified = verifyToken(token)
console.log({ verified }) 
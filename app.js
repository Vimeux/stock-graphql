const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const grapqlSchema = require('./graphql/schema')
const graphqlResolvers = require('./graphql/resolvers')

const app = express()

app.use(
  "/graphql",
  graphqlHTTP({
    schema: grapqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
  })
)

app.listen(3000, () => console.log("Server is running on port 3000"))

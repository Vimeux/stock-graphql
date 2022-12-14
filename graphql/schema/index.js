const { buildSchema } = require('graphql')

module.exports = buildSchema(`

  type Product {
    id: ID!
    name: String
    stock: Int
    code: String
    message: String
  }

  input ProductInput {
    name: String
    stock: Int
    code: String
  }

  type Query {
    products: [Product]
    product(id: ID!): Product
  }

  type Mutation {
    createProduct(code: ID!, quantity: Int!, name: String): Product
    updateProduct(id: ID!, quantity: Int!): Product
    deleteProduct(id: ID!): Product
  }

  schema {
    query: Query
    mutation: Mutation
  }
`)
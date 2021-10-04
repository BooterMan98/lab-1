const { ApolloServer } = require('apollo-server');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const mongoose = require('mongoose');

require('dotenv').config()
const connect = process.env.MONGO_DB_CONN

mongoose.connect(connect)

const {merge} = require('lodash')

// typeDefs
const productoTypeDefs = require('./types/producto.types');
const typeDefs = `

type DetalleVenta {
    idVenta: ID!
    cantidad: Int
    idProducto: Int
    idDetalle: String!
}

type Venta {
    idVenta: ID!
    fechaVenta: String!
    total: Int
    detalleVenta: [DetalleVenta]
}


input DetalleVentaInput {
    cantidad: Int
    idProducto: Int
    idDetalle: String!
}

input VentaInput {
    fechaVenta: String!
    total: Int
    detalleVenta: [ID!]
}

type Alert {
    message: String
}
type Query {
    _ : Boolean
}
type Mutation {
    _ : Boolean
}
`;

const resolver = {}

const schema = new makeExecutableSchema({
    typeDefs: [typeDefs, productoTypeDefs],
    resolvers: merge(resolver)
})

const server = new ApolloServer({
    schema: schema
});

server.listen().then(({url})=> {
    console.log(`Servidor Iniciado en ${url}, ${connect}`)
    console.log(mongoose.version)
});
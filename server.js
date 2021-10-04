const { ApolloServer } = require('apollo-server');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const mongoose = require('mongoose');

require('dotenv').config()
const connect = process.env.MONGO_DB_CONN

mongoose.connect(connect)

const {merge} = require('lodash')

const cursoTypeDefs = require('./types/detalleVenta.types');
const cursoResolvers = require('./resolvers/curso.resolvers');

const typeDefs = `
type Producto {
    idProducto: ID!
    descripcion: String!
    valor: Int
    stock: Int
}

type Venta {
    idVenta: ID!
    fechaVenta: String!
    total: Int
    detalleVenta: [DetalleVenta]
}

input ProductoInput {
    descripcion: String!
    valor: Int
    stock: Int
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
    typeDefs: [typeDefs],
    resolvers: merge(resolver)
})

const server = new ApolloServer({
    schema: schema
});

server.listen().then(({url})=> {
    console.log(`Servidor Iniciado en ${url}, ${connect}`)
    console.log(mongoose.version)
});
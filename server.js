const { ApolloServer } = require('apollo-server');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const mongoose = require('mongoose');

require('dotenv').config()
const connect = process.env.MONGO_DB_CONN

mongoose.connect(connect)

const {merge} = require('lodash')

const detalleVentaTypeDefs = require('./types/detalleVenta.types');
const detalleVentaResolvers = require('./resolvers/detalleVenta.resolvers');
const productoTypeDefs = require('./types/producto.types');
const productoResolvers = require('./resolvers/producto.resolvers');

const typeDefs = `
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

// resolvers
const resolver = {}

const schema = new makeExecutableSchema({
    typeDefs: [typeDefs, productoTypeDefs],
    resolvers: merge(resolver, productoResolvers)
})

const server = new ApolloServer({
    schema: schema
});

server.listen().then(({url})=> {
    console.log(`Servidor Iniciado en ${url}, ${connect}`)
    console.log(mongoose.version)
});
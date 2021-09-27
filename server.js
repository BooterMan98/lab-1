const { ApolloServer } = require('apollo-server');
const { makeExecutableSchema } = require('graphql-tools');


const typeDefs = `
type Producto {
    idProducto: ID!
    descripcion: String!
    valor: Int
    stock: Int
}

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

input ProductoInput {
    descripcion: String!
    valor: Int
    stock: Int
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

type Query {
    getProd(id: ID!): Producto
}
type Mutation {
    addProd(input: ProductoInput): Producto
    delProd(id: ID!): Producto
    updProd(id: ID!, input: ProductoInput): Producto
}
`;



const schema = new makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: {
        Query: {},
        Mutation: {}
    }
})

const server = new ApolloServer({
    schema: schema
});

server.listen().then(({url})=> {
    console.log(`Servidor Iniciado en ${url}`)
});
module.exports = `
type Producto {
    id: ID!
    descripcion: String!
    valor: Int
    stock: Int
}

input ProductoInput {
    descripcion: String!
    valor: Int
    stock: Int
}

extend type Query {
    getProd(id: ID!): Producto
}

extend type Mutation {
    addProd(input: ProductoInput): Producto
    delProd(id: ID!): Alert
    updProd(id: ID!, input: ProductoInput): Producto
}
`
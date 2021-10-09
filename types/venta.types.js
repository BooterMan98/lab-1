module.exports = `
    type Venta {
        id: ID!
        fechaVenta: String
        total: Int
        detalleVenta: [DetalleVenta]
    }

    input VentaInput {
        fechaVenta: String
        total: Int
        detalleVenta: [DetalleVentaInput]
    }

    type Alert {
        message: String
    }

    extend type Query {
        buscarVenta(idVenta: ID!): Venta
        buscarDetalle(idVenta: ID!): [DetalleVenta]
        calculoTotal: Int
    }

    extend type Mutation {
        addVenta(input: VentaInput): Venta
        updVenta(id: ID!, input: VentaInput): Venta
        delVenta(id: ID!): Alert
    }
`
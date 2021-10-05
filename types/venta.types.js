const DetalleVenta = require('../types/venta.types');

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
        detalleVenta: [String]
    }

    type Alert {
        message: String
    }

    type Total {
        total: Int
    }

    extend type Query {
        buscarVenta(idVenta: ID!): Venta
        buscarDetalle(idVenta: ID!): [DetalleVenta]
        calculoTotal: Total
    }

    extend type Mutation {
        addVenta(input: VentaInput): Venta
        updVenta(id: ID!, input: VentaInput): Venta
        delVenta(id: ID!): Alert
    }
`
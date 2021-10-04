module.exports = `
    type DetalleVenta {
        id: ID!
        cantidad: Int
        idVenta: Venta
        idProducto: Producto
    }

    input DetalleVentaInput {
        cantidad: Int
        idVenta: String
        idProducto: String
    }

    type Alert {
        message: String
    }

    extend type Query {
        buscarProducto(idProducto): Producto
    }

    extend type Mutation {
        addDetalleVenta(input: DetalleVentaInput): DetalleVenta
        updateDetalleVenta(id: idDetalle!, input: DetalleVentaInput): DetalleVenta
        deleteDetalleVenta(id: idDetalle!): Alert
    }
`
const Venta = require('../types/venta.types');
const Producto = require('../types/producto.types');

module.exports = `
    type DetalleVenta {
        id: ID!
        cantidad: Int
        idVenta: Venta
        idProducto: Producto
    }

    input DetalleVentaInput {
        cantidad: Int
        idProducto: String
        idVenta: String
    }

    type Alert {
        message: String
    }

    extend type Query {
        buscarProducto(idProducto: String): Producto
    }

    extend type Mutation {
        addDetalleVenta(input: DetalleVentaInput): DetalleVenta
        updateDetalleVenta(id: ID!, input: DetalleVentaInput): DetalleVenta
        deleteDetalleVenta(id: ID!): Alert
    }
`
const mongoose = require('mongoose');

//Declaracion modelo detalleVenta
const detalleVentaSchema = new mongoose.Schema({
    cantidad: Int,
    idVenta: {
        type: Schema.Types.ObjectId,
        ref: 'Venta'
    },
    idProducto: {
        type: Schema.Types.ObjectId,
        ref: 'Producto'
    }
});

module.exports = mongoose.model('DetalleVenta', detalleVentaSchema);

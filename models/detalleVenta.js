const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

//Declaracion modelo detalleVenta
const detalleVentaSchema = new mongoose.Schema({
    cantidad: Number,
    idVenta: {
        type: String,
        ref: 'Venta'
    },
    idProducto: {
        type: String,
        ref: 'Producto'
    }
});

module.exports = mongoose.model('DetalleVenta', detalleVentaSchema);

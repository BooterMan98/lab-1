const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const VentaSchema = new mongoose.Schema({
    fechaVenta: String,
    total: Number,
    detalleVenta: [{
        type: String,
        ref: 'DetalleVenta'
    }]
});

module.exports = mongoose.model('Venta', VentaSchema);
const mongoose = require('mongoose');

const VentaSchema = new mongoose.Schema({
    fechaVenta: String,
    total: Number,
    detalleVenta: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DetalleVenta'
    }]
});

module.exports = mongoose.model('Venta', VentaSchema);
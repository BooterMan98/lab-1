const mongoose = require('mongoose');

const VentaSchema = new mongoose.Schema({
    fechaVenta: String,
    total: Number,
    detalleVenta: [String]
});

module.exports = mongoose.model('Venta', VentaSchema);
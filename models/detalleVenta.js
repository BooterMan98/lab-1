const mongoose = require('mongoose');

//Declaracion modelo detalleVenta
const detalleVentaSchema = new mongoose.Schema({
    cantidad: Int
});

module.exports = mongoose.model('DetalleVenta', detalleVentaSchema);

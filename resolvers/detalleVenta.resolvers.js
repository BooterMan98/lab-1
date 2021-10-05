const { update } = require('lodash');
const DetalleVenta = require('../models/detalleVenta');

module.exports = {
    Query: {
        async buscarProducto(obj, { idProducto }){
            const producto = await DetalleVenta.findById(idProducto);
            return producto;
        }
    },
    Mutation: {
        async addDetalleVenta(obj, { input }){
            // Crea un objeto de tipo mongoSchema
            const detalleVenta = new DetalleVenta(input);
            //Metodo de guardado de mongodb
            await detalleVenta.save(); //objeto flush (id se va a llenar con id de mongodb)
            return detalleVenta;
        },
        async updateDetalleVenta(obj, { id, input }){
            const detalleVenta = await DetalleVenta.findByIdAndUpdate(id, input);
            return detalleVenta;
        },
        async deleteDetalleVenta(obj, { id }){
            await DetalleVenta.deleteOne({ _id: id });
            return {
                message: `El curso con id ${id} fue eliminado`
            }
        }

    }
}
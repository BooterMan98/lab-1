const { update } = require('lodash');
const DetalleVenta = require('../models/DetalleVenta');

module.exports = {
    Query: {
        async buscarProducto(obj, { idProducto }){
            const producto = await Curso.findById(idProducto);
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
        async updateDetalleVenta(obj, { idDetalle, input }){
            const detalleVenta = await DetalleVenta.findByIdAndUpdate(idDetalle, input);
            return detalleVenta;
        },
        async deleteDetalleVenta(obj, { idDetalle }){
            await DetalleVenta.deleteOne({ _id: idDetalle });
            return {
                message: `El curso con id ${idDetalle} fue eliminado`
            }
        }

    }
}
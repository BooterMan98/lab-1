const { update } = require('lodash');
const Producto = require('../models/producto');

module.exports = {
    Query: {
        async getProd(obj, {idProducto}) {
            const producto = await Producto.findById(idProducto);
            return producto;
        }
    },
    Mutation: {
        async addProd(obj, { input }) {
            const producto = new Producto(input);
            await producto.save();
            return producto;
        },
        async updProd(obj, {idProducto, input }) {
            const producto = await Producto.findByIdAndUpdate(idProducto, input);
            return producto;
        },
        async delProd(obj, {idProducto}) {
            await Producto.findOneAndRemove( idProducto);
            return {
                message: `El producto ${idProducto} ha sido eliminado. :3`
            }
        } 

    }
}
const { update } = require('lodash');
const Producto = require('../models/producto');

module.exports = {
    Query: {
        async getProd(obj, {id}) {
            const producto = await Producto.findById(id);
            return producto;
        }
    },
    Mutation: {
        async addProd(obj, { input }) {
            const producto = new Producto(input);
            await producto.save();
            return producto;
        },
        async updProd(obj, {id, input }) {
            const producto = await Producto.findByIdAndUpdate(id, input);
            return producto;
        },
        async delProd(obj, {id}) {
            await Producto.findOneAndRemove( id);
            return {
                message: `El producto ${id} ha sido eliminado. :3`
            }
        } 

    }
}
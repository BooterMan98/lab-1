let productos = require('../data/productos');


module.exports = {
    Query: {
        async getProd(obj, {id}) {
            const producto = productos.find( producto => id == producto.id);
            return producto;
        }
    },
    Mutation: {
        async addProd(obj, { input }) {
            const id = String(productos.length + 1)
            const producto =  {id , ...input}
            productos.push(producto)
            return producto;
        },
        async updProd(obj, {id, input }) {
            const indice = productos.findIndex( producto => id == producto.id)
            const producto = productos[indice];
            nuevoProducto = Object.assign(producto, input);
            console.log(nuevoProducto)
            productos[indice] = nuevoProducto
            return nuevoProducto;
        },
        async delProd(obj, {id}) {
            productos = productos.filter(producto => id != producto.id)
            console.log(productos)
            return {
                message: `El producto ${id} ha sido eliminado. :3`
            }
        } 

    }
}
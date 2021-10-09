const { update } = require('lodash');
let DetalleVenta = require('../data/detalleVenta');
let productos = require('../data/productos');
let venta = require('../data/venta');

module.exports = {
    Query: {
        async buscarProducto(obj, { idProducto }){
            const producto = productos.find( producto => idProducto == producto.id);
            return producto;
        }
    },
    Mutation: {
        async addDetalleVenta(obj, { input }){
            const id = String(DetalleVenta.length + 1);
            const dv = {id, ...input};
            DetalleVenta.push(dv)
            dv.idProducto = productos.find(producto => input.idProducto == producto.id);
            dv.idVenta = venta.find(venta => input.idVenta == venta.id);
            return dv;
        },
        async updateDetalleVenta(obj, { id, input }){
            const {cantidad, idProducto} = input
            const detalleVentaIndex = DetalleVenta.findIndex((detalleVenta) => id == detalleVenta.id);
            const dv = DetalleVenta[detalleVentaIndex];
            const new_dv = Object.assign(dv,{cantidad, idProducto});
            DetalleVenta[detalleVentaIndex] = new_dv;
            new_dv.idProducto = productos.find(producto => input.idProducto == producto.id);
            new_dv.idVenta = venta.find(venta => input.idVenta == venta.id);
            return new_dv;
        },
        async deleteDetalleVenta(obj, { id }){
            DetalleVenta = DetalleVenta.filter( (dv) => dv.id != id);
            return {
                message: `El detalle venta con id ${id} fue eliminado`
            }
        }

    }
}
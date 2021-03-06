let ventas = require('../data/venta')
let detalleventas = require('../data/detalleventa')
let productos = require('../data/productos')

module.exports = {
    Query: {
        async buscarVenta(obj, { idVenta }) {
            const venta = ventas.find((venta) => venta.id == idVenta)
            venta.detalleVenta = detalleventas.filter((dv) => dv.idVenta == idVenta)
            return venta
        },
        async buscarDetalle(obj, { idVenta }) {
            const venta = ventas.find((venta) => venta.id == idVenta)
            let dvs = detalleventas.filter((detalleventa) => detalleventa.idVenta == idVenta)
            dvs = dvs.map((dv) => dv = { ...dv, idVenta: venta })
            return dvs
        },
        async calculoTotal(obj) {
            return ventas.reduce((n, { total }) => n + total, 0)
        }
    },
    Mutation: {
        async addVenta(obj, { input }) {
            const idVenta = String(ventas.length + 1)
            const today = new Date();
            const fechaVenta = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            let total = 0
            input.detalleVenta.forEach(element => {
                const id = String(detalleventas.length +1 )
                const dv = {id, idVenta,  cantidad: element.cantidad, idProducto: element.idProducto}
                const producto = productos.find((producto) => producto.id == element.idProducto)
                total += ( element.cantidad * producto.valor )
                detalleventas.push(dv)
            });
            const venta = { id: idVenta, total, fechaVenta, ...input}
            ventas.push(venta)
            venta.detalleVenta = detalleventas.filter((dv) => dv.idVenta === idVenta)
            return venta
        },
        async updVenta(obj, { id, input }) {
            const index = ventas.findIndex(venta => id == venta.id)
            const venta = ventas[index];
            const nuevaVenta = Object.assign(venta, input);
            ventas[index] = nuevaVenta
            return nuevaVenta
        },
        async delVenta(obj, { id }) {
            ventas = ventas.filter((venta) => venta.id !== id)
            return {
                message: `La venta ${id} fue eliminada`
            }
        }
    }
}
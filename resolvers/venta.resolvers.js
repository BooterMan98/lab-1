const Venta = require('../models/venta')

module.exports = {
    Query: {
        async buscarVenta(obj, {idVenta}){
            const venta = await Venta.findById(idVenta)
            return venta.populate("detalleVenta")
        },
        async buscarDetalle(obj, {idVenta}){
            const venta = await Venta.findById(idVenta)
            const dv = await venta.populate("detalleVenta")
            return dv['detalleVenta']
        },
        async calculoTotal(obj){
            const ventas = await Venta.find()
            return {
                total: ventas.reduce((n, {total}) => n + total, 0)
            } 
        }
    },
    Mutation: {
        async addVenta(obj, {input}){
            const venta = new Venta(input)
            await venta.save()
            return venta
        },
        async updVenta(obj, {id, input}){
            const venta = await Venta.findByIdAndUpdate(id, input)
            return venta
        },
        async delVenta(obj, {id}){
            await Venta.deleteOne({_id: id})
            return {
                message: `La venta ${id} fue eliminada`
            }
        }
    }
}
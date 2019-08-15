'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const AvaliacaoOferta = use('App/Models/AvaliacaoOferta')

class Oferta extends Model {

  static get hidden() {
    return ['created_at', 'updated_at']
  }

  static get computed () {
    return ['media']
  }

   getMedia ({ id }) {    
      try {
        console.log(id)
        return await AvaliacaoOferta.query().where('oferta_id',id).getAvg('nota')  
      } catch (error) {
        console.log(0)
        return 0 
      }
       return 0
  }

  endereco () {
    return this.belongsTo('App/Models/Endereco')
  }

  user () {
    return this.belongsTo('App/Models/User')
  }

  avaliacaoOferta () {
    return this.hasMany('App/Models/AvaliacaoOferta')
  }

  comentarioOferta () {
    return this.hasMany('App/Models/ComentarioOferta')
  }

  image () {
    return this.hasMany('App/Models/Image')
  }

}

module.exports = Oferta
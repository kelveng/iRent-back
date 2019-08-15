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
    const media = 0;
    try{
      media = await AvaliacaoOferta.query().where('oferta_id',id).getAvg('nota')  
    }catch{
      media = 0
    }
    
    return media
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
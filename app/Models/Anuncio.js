'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Anuncio extends Model {

  user () {
    return this.belongsTo('App/Models/User')
  }

  avaliacaoAnuncio () {
    return this.hasMany('App/Models/AvaliacaoAnuncio')
  }
}

module.exports = Anuncio

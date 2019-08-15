'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const AvaliacaoOferta = use('App/Models/AvaliacaoOferta')

class Oferta extends Model {
  static boot () {
    super.boot()

    this.addHook('afterFetch', async items => {
      for (let item of items) {
        const usersCount = await item.avaliacaoOferta().getAvg('nota')
        item.$sideLoaded.media_avaliacao = usersCount
      }
    })
  }

  static get hidden() {
    return ['created_at', 'updated_at']
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
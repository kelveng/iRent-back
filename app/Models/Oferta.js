'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const AvaliacaoOferta = use('App/Models/AvaliacaoOferta')

class Oferta extends Model {
  static boot () {
    super.boot()

    this.addHook('afterFetch', async items => {
      items = items.map(async item => {
        const users = await item.avaliacaoOferta().count('id') // It returns [ { 'count(`id`)': 1 } ]
        item.users_count = Object.values(users[0])[0]
        return item
      })

      return items
    })
  }

  static get hidden() {
    return ['created_at', 'updated_at']
  }

  static get computed () {
    return ['media']
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
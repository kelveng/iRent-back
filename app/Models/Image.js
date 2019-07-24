'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Image extends Model {


  oferta () {
    return this.belongsTo('App/Models/Oferta')
  }

	getUrl ({ path }) {
    return `${Env.get('APP_URL')}/images/${path}`
  }
}

module.exports = Image

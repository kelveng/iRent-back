'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ImagePerfil extends Model {

  static get table () {
    return 'imagePerfil'
  }

  user () {
    return this.belongsTo('App/Models/User')
  }

	getUrl ({ path }) {
    return `${Env.get('APP_URL')}/images/${path}`
  }
}

module.exports = ImagePerfil

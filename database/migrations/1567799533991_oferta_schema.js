'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OfertaSchema extends Schema {
  up () {
    this.table('ofertas', (table) => {
      // alter table
      table
      .integer('endereco_id')
      .unsigned()
      .references('id')
      .inTable('enderecos')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    })
  }

  down () {
    this.table('ofertas', (table) => {
      // reverse alternations
    })
  }
}

module.exports = OfertaSchema

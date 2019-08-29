'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EnderecoSchema extends Schema {
  up () {
    this.table('enderecos', (table) => {
      // alter table
      table
      .integer('oferta_id')
      .unsigned()
      .references('id')
      .inTable('ofertas')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    })
  }

  down () {
    this.table('enderecos', (table) => {
      // reverse alternations
    })
  }
}

module.exports = EnderecoSchema

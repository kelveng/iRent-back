'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EnderecoSchema extends Schema {
  up () {
    this.table('enderecos', (table) => {
      // alter table
      table.string('descricao', 512)
    })
  }

  down () {
    this.table('enderecos', (table) => {
      // reverse alternations
    })
  }
}

module.exports = EnderecoSchema

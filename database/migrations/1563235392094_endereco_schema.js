'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EnderecoSchema extends Schema {
  up () {
    this.create('enderecos', (table) => {
      table.increments()
      table.decimal('latitude', 10, 6).notNullable()
      table.decimal('longitude', 10, 6).notNullable()
      table.string('tipoEndereco', 254)
      table.string('descricao', 512)
      table.integer('oferta_id')
      .unsigned()
      .references('id')
      .inTable('ofertas')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('enderecos')
  }
}

module.exports = EnderecoSchema

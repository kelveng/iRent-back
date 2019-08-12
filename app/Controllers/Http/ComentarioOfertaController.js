'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const ComentarioOferta = use('App/Models/ComentarioOferta')
const Database = use('Database')

/**
 * Resourceful controller for interacting with comentarioofertas
 */
class ComentarioOfertaController {
  /**
   * Show a list of all comentarioofertas.
   * GET comentarioofertas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }



  /**
   * Create/save a new comentariooferta.
   * POST comentarioofertas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ params,request, response }) {
    try {
         const data = request.post()
         await ComentarioOferta.create(data)
         return response.status(201).send({message: "Comentario realizado!"})   
    } catch (error) {
      return response.status(error.status).send({message: error})
    }
  }

  /**
   * Display a single comentariooferta.
   * GET comentarioofertas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response }) {
    const comentarioOfertas = await ComentarioOferta.query().where('oferta_id', params.oferta_id)
                                                      .with('user')
                                                      .fetch();
    return response.status(201).send(comentarioOfertas)
  }

  /**
   * Render a form to update an existing comentariooferta.
   * GET comentarioofertas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update comentariooferta details.
   * PUT or PATCH comentarioofertas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a comentariooferta with id.
   * DELETE comentarioofertas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ComentarioOfertaController

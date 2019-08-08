'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const ComentarioAnuncio = use('App/Models/ComentarioAnuncio')
const Database = use('Database')

/**
 * Resourceful controller for interacting with comentarioanuncios
 */
class ComentarioAnuncioController {
  /**
   * Show a list of all comentarioanuncios.
   * GET comentarioanuncios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }


  /**
   * Create/save a new comentarioanuncio.
   * POST comentarioanuncios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    try {
      const data = request.post()
      await ComentarioAnuncio.create(data)
      return response.status(201).send({message: "Comentario realizado!"})   
    } catch (error) {
        return response.status(error.status).send({message: error})
    }
  }

  /**
   * Display a single comentarioanuncio.
   * GET comentarioanuncios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const comentarioAnuncio = await Database.from('comentario_anuncios').where('anuncio_id',params.anuncio_id)
    return response.status(201).send(comentarioAnuncio)
  }

  /**
   * Render a form to update an existing comentarioanuncio.
   * GET comentarioanuncios/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update comentarioanuncio details.
   * PUT or PATCH comentarioanuncios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a comentarioanuncio with id.
   * DELETE comentarioanuncios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ComentarioAnuncioController

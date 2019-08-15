'use strict'

const Helpers = use('Helpers')
const Oferta = use('App/Models/Oferta')
const CloudinaryService = use('App/Services/CloudinaryService')

class ImageController {
  /**
   * Create/save a new image.
   * POST images
   */
  async store ({ params,request }) {
    const oferta = await Oferta.findOrFail(params.id)
    console.log("aqui");
    const images = request.file('image', {
    types: ['image'],
    size: '2mb'
  })
  

  console.log(images.fileName);
  console.log(images.name);
  const cloudinaryResponse = await CloudinaryService.v2.uploader.upload(images.tmpPath, {folder: 'uploads'});             
  console.log(cloudinaryResponse.secure_url);
  
  oferta.images().create({ path: cloudinaryResponse.secure_url   })

}

  async showImages ({ params, request, response }) {

    const oferta = await Oferta.findOrFail(params.id);
    const images = await oferta.image().fetch()

    return response.status(200).send(images);

}

  async show ({ params, response }) {

    return response.download(`uploads/${params.path}`)
  }
}

module.exports = ImageController

'use strict'

const Helpers = use('Helpers')
const User = use('App/Models/User')
const CloudinaryService = use('App/Services/CloudinaryService')

class ImagePerfilController {
  /**
   * Create/save a new image.
   * POST images
   */
  async store ({ params,request, response }) {
    const user = await User.findOrFail(params.id)
    console.log("aqui");
    const images = request.file('image', {
    types: ['image'],
    size: '2mb'
  })
  

  console.log(images.fileName);
  console.log(images.name);
  const cloudinaryResponse = await CloudinaryService.v2.uploader.upload(images.tmpPath, {folder: 'uploads'});             
  console.log(cloudinaryResponse.secure_url);
  
  user.merge({ path: cloudinaryResponse.secure_url  })
  await user.save()
  return response.status(201).send({message: "Imagem incluida com sucesso!"});
}

  async showImages ({ params, request, response }) {

    const user = await User.findOrFail(params.id);
    const images = await user.images().fetch()

    return response.status(200).send(images);

}

  async show ({ params, response }) {

    return response.download(`uploads/${params.path}`)
  }
}

module.exports = ImagePerfilController

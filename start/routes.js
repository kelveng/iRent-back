'use strict'
const Route = use('Route')

Route.group (() => {
  Route.get('/users', 'UserController.index')
  Route.post('/users', 'UserController.store')
})

Route.group (() => {
  
  Route.get('/users/username/:username', 'UserController.show')
  Route.get('/users/id/:id', 'UserController.getById')
  Route.delete('/users/:username', 'UserController.destroy')
  Route.put('/users/:username', 'UserController.update')
})//.middleware('auth')

Route.post('/sessions', 'SessionController.store')

Route.post('/passwords', 'ForgotPasswordController.store')

Route.group (() => {
  Route.get('/anuncio', 'AnuncioController.index')
  Route.post('/anuncio', 'AnuncioController.store')
})//.middleware('auth')

Route.get('/app', 'AppController.index').middleware(['auth'])

Route.group (() => {
  Route.get('/oferta', 'OfertaController.index')
  Route.post('/oferta', 'OfertaController.store')
  Route.post('/oferta/filtro', 'OfertaController.getFilter')
})

Route.group (() => {  
  Route.get('/oferta/:id', 'OfertaController.show')
  Route.delete('/oferta/:id', 'OfertaController.destroy')
  Route.put('/oferta/:id', 'OfertaController.update')
  Route.get('/oferta/:id/user', 'OfertaController.getIdOfertas')
})

Route.group (() => {
  Route.get('/avaliacaoOfertas', 'AvaliacaoOfertaController.index')
  Route.post('/avaliacaoOfertas', 'AvaliacaoOfertaController.store')
})

Route.group (() => {
  Route.get('/comentarioAnuncios/:anuncio_id', 'ComentarioAnuncioController.show')
  Route.post('/comentarioAnuncios', 'ComentarioAnuncioController.store')
})

Route.group (() => {
  Route.get('/comentarioOfertas/:oferta_id', 'ComentarioOfertaController.show')
  Route.post('/comentarioOfertas', 'ComentarioOfertaController.store')
})

Route.group (() => {
  Route.get('/avaliacaoOfertas/:id', 'AvaliacaoOfertaController.show')
  Route.get('/avaliacaoOfertas/:user_id/:oferta_id', 'AvaliacaoOfertaController.getAvaliacaoOferta')
  Route.delete('/avaliacaoOfertas/:id', 'AvaliacaoOfertaController.destroy')
  Route.put('/avaliacaoOfertas/:id', 'AvaliacaoOfertaController.update')
})

Route.get('/user/:id/images', 'ImagePerfilController.showImages')
Route.post('user/:id/images', 'ImagePerfilController.store')
//.middleware('auth')

  Route.get('/oferta/:id/images', 'ImageController.showImages')
  Route.post('oferta/:id/images', 'ImageController.store')
  //.middleware('auth')

  Route.group (() => {
    Route.get('/anuncio/:id', 'AnuncioController.show')
    Route.delete('/anuncio/:id', 'AnuncioController.destroy')
    Route.put('/anuncio/:id', 'AnuncioController.update')
    Route.get('/anuncio/:id/user/', 'AnuncioController.getIdAnuncios')
  })//.middleware('auth')

  Route.get('/images/:path', 'ImageController.show')

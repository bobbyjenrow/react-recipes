const urlBase = "localhost:3000";

exports.recipes = {
  create: ()  =>(urlBase + '/api/recipes/create'),
  delete: (id)=>(urlBase + '/api/recipes/'+id),
  update: (id)=>(urlBase + '/api/recipes/'+id),
  getOne: (id)=>(urlBase + '/api/recipes/'+id),
  getAll: ()  =>(urlBase + '/api/recipes'),
  getAllMock: ()=>(urlBase + '/store.json')
}
exports.tags = {
  create: ()=>(urlBase + '/api/tags/create'),
  delete: (id)=>(urlBase + '/api/tags/'+id),
  update: (id)=>(urlBase + '/api/tags/'+id),
  getOne: (id)=>(urlBase + '/api/tags/'+id),
  getAll: ()=>(urlBase + '/api/tags')
}

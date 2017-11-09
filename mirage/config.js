export default function() {
  this.post('/users');
  this.get('/users', (schema, request) => {
    return schema.users.findBy({name: request.queryParams.name})
  })

  this.get('/notebooks');
  this.get('/notebooks/:id');
  this.put('/notebooks/:id');
  this.post('/notebooks');
  this.del('/notebooks/:id');

  this.get('/notes');
  this.get('/notes/:id');
  this.put('/notes/:id');
  this.post('/notes');
  this.del('/notes/:id');
}

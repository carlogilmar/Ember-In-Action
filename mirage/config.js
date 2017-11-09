export default function() {
  this.post('/users');
  this.get('/users', (schema, request) => {
    return schema.users.findBy({name: request.queryParams.name})
  })
}

## Ember JS for Learning

- Ember needs ember dependencies (addons)
- Ember data it's an ember dependecy

#### Chapter 1

Development Flow:

  - Adding a Route
  - Adding input handlebars
  - Adding action in route created
  - Installing ember data

  > ember install ember-data

  - Adding model user (add attribute)
  - Adding interactions services: JSONApiAdapter and JSONAPISerializer
  - Installing ember mirage cli for mock

  > ember install ember-cli-mirage

  - Adding mirage-model user
  - In mirage/config.js add post request for /users.

  > What we have?
  > - A Route and Handlebars Template
  >   - An action writted in route
  > - A model
  > - A serializer
  > - An adapter

  Continue
  - Adding new routes: notebook and login
  - Add login action in route login
  - Adding get endpoint in mirage/config

  -In route notebooks create model function
  - Modify in route.js the route notebook for receive a path
  - Modify the transitionTo Notebooks in login.js
  - Define notebook API
    - Add mirage-model notebook and http verbs in mirage/config.js
    - Add model notebook
    - Add properties to notebook model
    - Add mirage-model notes and http verbs
    - Add model note
    - Modify notebooks handlebars template
  - Add actions to notebooks route: addNotebook
  - Generate Nest Routes
    > ember generate route notebooks/notes
  - Modify app/router.js for include the nest route
  - Add actions to notes route: addNote and DeleteNote

  ## Chapter 4

   - Adding new route notebook/notes/note
   - Generate component edit-note








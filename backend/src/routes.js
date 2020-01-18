const { Router } = require('express');

const routes = Router();

routes.get('/', (_, response) => {
    response.json({ hello: 'world!' });
});

routes.get('/tutorial/users', (request, response) => {
    console.log('GET - query params', request.query);
    response.sendStatus(200);
});

routes.put('/tutorial/users/:id', (request, response) => {
    console.log('PUT - route params', request.params);
    response.sendStatus(200);
});

routes.delete('/tutorial/users/:id', (request, response) => {
    console.log('DELETE - route params', request.params);
    response.sendStatus(200);
});

routes.post('/tutorial/users/:name', (request, response) => {
    console.log('Body', request.body);
    response
        .json(
            {message: `${request.body.username} saved!`
        })
        .sendStatus(200);
});

module.exports = routes;
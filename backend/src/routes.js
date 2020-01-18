const { Router } = require('express');
const axios = require('axios');
const Dev = require('./models/Dev');

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

routes.post('/devs', async (request, response) => {
    const { github_username, techs, lat, lon } = request.body;

    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

    const { name, login, avatar_url, bio } = apiResponse.data;

    const techsArray = techs.split(',').map(tech => tech.trim());

    const location = {
        type: 'Point',
        coordinates: [lon, lat]
    };

    const dev = await Dev.create({
        name: name || login,
        github_username,
        avatar_url,
        bio: bio || 'Not defined',
        techs: techsArray,
        location
    });

    return response.json(dev);
});

module.exports = routes;
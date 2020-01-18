const { Router } = require('express');
const DevController = require('./controllers/DevController');
const TutorialController = require('./controllers/TutorialController');

const routes = Router();

routes.get('/', TutorialController.helloWorld);

routes.get('/tutorial/users', TutorialController.queryParamRequest);

routes.put('/tutorial/users/:id', TutorialController.putRouteParams);

routes.delete('/tutorial/users/:id', TutorialController.deleteRouteParams);

routes.post('/tutorial/users/:name', TutorialController.bodyParams);

routes.post('/devs', DevController.store);

module.exports = routes;
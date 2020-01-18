module.exports = {
    helloWorld(_, response) {
        response.json({ hello: 'world!' });
    },

    queryParamRequest(request, response) {
        console.log('GET - query params', request.query);
        response.sendStatus(200);
    },

    putRouteParams(request, response) {
        console.log('PUT - route params', request.params);
        response.sendStatus(200);
    },

    deleteRouteParams(request, response) {
        console.log('DELETE - route params', request.params);
        response.sendStatus(200);
    },

    bodyParams(request, response) {
        console.log('Body', request.body);
        response
            .json(
                {message: `${request.body.username} saved!`
            });
    }

}
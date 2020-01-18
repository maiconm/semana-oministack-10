const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
mongoose.connect('mongodb+srv://maicon:omnistack@cluster0-rgv9v.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
app.get('/', (_, response) => {
    response.json({ hello: 'world!' });
});

app.get('/tutorial/users', (request, response) => {
    console.log('GET - query params', request.query);
    response.sendStatus(200);
});

app.put('/tutorial/users/:id', (request, response) => {
    console.log('PUT - route params', request.params);
    response.sendStatus(200);
});

app.delete('/tutorial/users/:id', (request, response) => {
    console.log('DELETE - route params', request.params);
    response.sendStatus(200);
});

app.post('/tutorial/users/:name', (request, response) => {
    console.log('Body', request.body);
    response
        .json(
            {message: `${request.body.username} saved!`
        })
        .sendStatus(200);
})

app.listen(7777);
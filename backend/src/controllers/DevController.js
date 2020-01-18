const axios = require('axios');

const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(_, response) {
        const devs = await Dev.find();

        response.json(devs);
    },

    async store(request, response) {
        const { github_username, techs, lat, lon } = request.body;

        let dev = await Dev.findOne({ github_username });

        if (!dev) {

            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

            const { name, login, avatar_url, bio } = apiResponse.data;

            const techsArray = parseStringAsArray(techs);

            const location = {
                type: 'Point',
                coordinates: [lon, lat]
            };

            dev = await Dev.create({
                name: name || login,
                github_username,
                avatar_url,
                bio: bio || 'Not defined',
                techs: techsArray,
                location
            });
        }

        return response.json(dev);
    }
}
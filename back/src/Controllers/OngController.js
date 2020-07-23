const connection = require('../database/connection');
const genarateUniqueiId = require('../utils/generateUniqueId');

module.exports = {

    async index(request,response){
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },

    async create(request, response){
        const data = request.body;
        console.log(data);

        data.id = genarateUniqueiId();

        await connection('ongs').insert(data);

        return response.json({id : data.id});
    }
}
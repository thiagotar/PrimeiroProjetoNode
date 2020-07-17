const connection = require('../database/connection');

module.exports = {
    async create(request,response){
        const { id } = request.body;
        const ong = await connection('Ongs')
                    .where('Id',id)
                    .select('Nome')
                    .first();

        if (!ong){
            return response.status(400).json({ error: 'Nenhuma ong econtrada para o ID Informado'});
        }

        return response.json(ong);

    }
}
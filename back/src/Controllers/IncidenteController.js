const connection = require('../database/connection');
const { join } = require('../database/connection');

module.exports = {
    async index(request,response){
        const { page = 1 } = request.query;

        const [count] = await connection('Incidente').count();

        const incidentes = await connection('incidente')
        .join('ongs', 'ongs.id', '=', 'incidente.ong_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select([   'incidente.*',
                    'ongs.nome',
                    'ongs.email',
                    'ongs.whatsapp',
                    'ongs.cidade',
                    'ongs.uf'
                ]);

        response.header('X-Total-Count', count['count(*)']);
        return response.json(incidentes);
    },
    async create(request,response){
        const {titulo, descricao, valor} = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('Incidente').insert({
            titulo,
            descricao,
            valor,
            ong_id
        });

        return response.json({ id })
    },
    async delete(request, response){
        const { id } = request.params;
        const ong_id = request.headers.authorization;
        const incidente = await connection('Incidente')
                            .where('Id',id)
                            .select('ong_id')
                            .first();

        if(incidente.Ong_id != ong_id){
            return response.status(401).json({ error: 'Operacao não permitida'});
        }

        await connection('Incidente').where('Id',id).delete();

        return response.status(204).send();
    }
};
const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');
describe('ONG', () => {
    beforeEach(async () =>{
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });
    afterAll(async ()=>{
        await connection.destroy();
    })
    it('Deve ser capas de criar uma nova ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                Nome: "CARROCINHA5",
                email: "carrocinha@aec.com",
                whatsapp: "3199999999",
                cidade: "Belo Horizonte",
                uf: "MG"
            });

            expect(response.body).toHaveProperty('id');
            expect(response.body.id).toHaveLength(8);
    });
});
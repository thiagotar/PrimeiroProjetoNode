const { intersect } = require("../../src/database/connection");

const genarateUniqueId = require('../../src/utils/generateUniqueId');
const generateUniqueId = require("../../src/utils/generateUniqueId");

describe('generate Unique ID', () => {
    it('Deve gerar um Id Unico', () => {
        const id = generateUniqueId();

        expect(id).toHaveLength(8);
    })
});
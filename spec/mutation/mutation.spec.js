//const validateDNA = require('../../models/algorithm');
const { validateDNA } = require('../../models/algorithm');

describe('Testing algorithm', () => {
    it('Matrix true', () => {
        const arr = ['ATCA', 'AAAA', 'ATCA', 'TGCC'];
        const result = validateDNA(arr);
        expect(result).toBeTruthy();
    })
})

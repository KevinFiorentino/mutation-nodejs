//const validateDNA = require('../../models/algorithm');
const { validateDNA } = require('../../models/algorithm');

describe('Testing algorithm', () => {
    it('Matriz correcta x4', () => {
        const arr = ['ATCA', 'AAAA', 'ATCA', 'TGCC'];
        const result = validateDNA(arr);
        expect(result).toBeTruthy();
    })
    it('Matriz correcta x6', () => {
        const arr = ['ATCATT', 'AAAAAA', 'ATCCAA', 'TGCCCA', 'ATCAAC', 'ATAGGC'];
        const result = validateDNA(arr);
        expect(result).toBeTruthy();
    })
    it('Matriz incorrecta x4', () => {
        const arr = ['ATCA', 'AAAA', 'ATC', 'TGCC'];
        const result = validateDNA(arr);
        expect(result).toBeFalsy();
    })
    it('Matriz incorrecta x3', () => {
        const arr = ['ATCA', 'AAAA', 'ATCA'];
        const result = validateDNA(arr);
        expect(result).toBeFalsy();
    })
})

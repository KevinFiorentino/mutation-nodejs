//const hasMutation = require('../../models/algorithm');
const { hasMutation, turnMatrix } = require('../../models/algorithm');

describe('Testing algorithm', () => {
    it('matriz 4x4 correcta sin mutación', () => {
        const arr = ['ATCA', 'AGAA', 'ATCA', 'TGCC'];
        const result = hasMutation(arr);
        expect(result).toBeFalsy();
    });
    it('matriz 4x4 incorrecta cantidad columnas', () => {
        const arr = ['ATCA', 'AAAA', 'ATC', 'TGCC'];
        const result = hasMutation(arr);
        expect(result).toBeFalsy();
    });
    it('matriz incorrecta cantidad de filas', () => {
        const arr = ['ATCA', 'AAAA', 'ATCA'];
        const result = hasMutation(arr);
        expect(result).toBeFalsy();
    });
})

describe('Testing algorithm horizontal', () => {
    it('matriz 4x4 correcta con mutación', () => {
        const arr = ['ATCA', 'AAAA', 'ATCA', 'TGCC'];
        const result = hasMutation(arr);
        expect(result).toBeTruthy();
    });
    it('matriz 6x6 correcta con mutación', () => {
        const arr = ['ATCATT', 'AAAACT', 'ATCCAA', 'TGCCCA', 'ATCAAC', 'ATAGGC'];
        const result = hasMutation(arr);
        expect(result).toBeTruthy();
    });
})

describe('Testing algorithm vertical', () => {
    it('matriz 4x4 correcta con mutación', () => {
        const arr = ["ATCA", "AACA", "ATCC", "TGCC"];
        const result = hasMutation(arr);
        expect(result).toBeTruthy();
    });
    it('matriz 6x6 correcta con mutación', () => {
        const arr = ["ATTATA", "AATTCA", "GGTACC", "TGTCGC", "TGTCGC", "AATTCA"];
        const result = hasMutation(arr);
        expect(result).toBeTruthy();
    });
})

describe('Testing turnMatrix', () => {
    it('girar matriz numérica 90 grados', () => {
        const arr = ['1111', '2222', '3333', '4444'];
        const result = turnMatrix(arr);
        expect(result).toEqual([ '1234', '1234', '1234', '1234' ]);
    });
})

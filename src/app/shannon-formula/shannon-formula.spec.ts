import { Formula } from './shannon-formula';

describe('Teoria de la informacion', () => {
    let formula: Formula;

    beforeEach(() => {
        formula = new Formula();  
    });
    
    it('El carácter "0" debe retornar 0', () => {
        let entropia = formula.entropy('0');

        expect(entropia).toEqual(0.00);
    });     
    
    it('El carácter "1" debe retornar 1', () => {
        let entropia = formula.entropy('01');

        expect(entropia).toEqual(1.00);
    });  

    it('Los carácteres "1223334444" deben retornar 1.85', () => {
        let entropia = formula.entropy('1223334444');

        expect(entropia).toEqual(1.85);
    });

    it('Los carácteres "0123456789abcdef" deben retornar 4', () => {
        let entropia = formula.entropy('0123456789abcdef');

        expect(entropia).toEqual(4.00);
    });

    it('Los carácteres "abcdefghijklmnop" deben retornar 4', () => {
        let entropia = formula.entropy('abcdefghijklmnop');

        expect(entropia).toEqual(4.00);
    });

    it('Los carácteres "Hello, World!" deben retornar 4', () => {
        let entropia = formula.entropy('Hello, World!');

        expect(entropia).toEqual(3.18);
    });

    it('Los carácteres "hello world" deben retornar 4', () => {
        let entropia = formula.entropy('hello world');

        expect(entropia).toEqual(2.85);
    });
})
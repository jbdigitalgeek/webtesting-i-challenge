const {repair, succeed, fail, get} = require('./enhancer.js');
// test away!
describe('enhancer.js', () => {
    describe('repair()', () => {
        it('Reset an item durability to 100', () => {
            const item = {
                name: 'Sword',
                durability: 35,
                enhancement: 10
            };
            const expected = {
                name: 'Sword',
                durability: 100,
                enhancement: 10
            };
            const repairedItem = repair(item);
            expect(repairedItem).toEqual(expected);
        });
    });
    describe('fail()', () => {
        it('Drops durability by 5 if enhancement is less than 15', () => {
            const item = {
                name: 'Sword',
                durability: 50,
                enhancement: 14
            };
            const expected = {
                name: 'Sword',
                durability: 45,
                enhancement: 14
            };
            const failedItem = fail(item);
            expect(failedItem).toEqual(expected);
        });
        it('Drops durability by 10 if enhancement === 15, 16', () => {
            const item = {
                name: 'Sword',
                durability: 50,
                enhancement: 16
            };
            const expected = {
                name: 'Sword',
                durability: 40,
                enhancement: 16
            };
            const failedItem = fail(item);
            expect(failedItem).toEqual(expected);
        });
        it('Drops durability by 10 and enhancement by 1 if enhancement > 16', () => {
            const item = {
                name: 'Sword',
                durability: 50,
                enhancement: 18
            };
            const expected = {
                name: 'Sword',
                durability: 40,
                enhancement: 17
            };
            const failedItem = fail(item);
            expect(failedItem).toEqual(expected);
        });
    });
    describe('succeed()', () => {
        it('raises enhancement by 1', () => {
            const item = {
                name: 'Sword',
                durability: 60,
                enhancement: 17
            };
            const expected = {
                name: 'Sword',
                durability: 60,
                enhancement: 18
            };
            const successItem = succeed(item);
            expect(successItem).toEqual(expected);
        });
        it('ignores enhancement when enhancement level 20', () => {
            const item = {
                name: 'Sword',
                durability: 60,
                enhancement: 20
            };
            const expected = {
                name: 'Sword',
                durability: 60,
                enhancement: 20
            };
            const successItem = succeed(item);
            expect(successItem).toEqual(expected);
        });
    });
    describe('get()', () => {
        it('adds enhancement level to item', () => {
            const item = {
                name: 'Sword',
                durability: 70,
                enhancement: 18
            };
            const expected = {
                name: '[+18]Sword',
                durability: 70,
                enhancement: 18
            };
            const getItem = get(item);
            expect(getItem).toEqual(expected);
        });
        
    })
})
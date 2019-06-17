const {repair, succeed, fail, get} = require('./enhancer.js');
// test away!
describe('enhancer.js', () => {
    describe('repair()', () => {
        it('Reset an item durability to 100', () => {
            const item = {
                name: 'Sword',
                durability: '35',
                enhancement: 10
            };
            const expected = {
                name: 'Sword',
                durability: '100',
                enhancement: 10
            };
            const repairedItem = repair(item);
            expect(repairedItem).toEqual(expected);
        });
    });
})
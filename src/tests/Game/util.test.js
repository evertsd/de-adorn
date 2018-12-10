import { pickRandom } from 'Game/util';

describe('pickRandom', () => {
    it('picks valid item', () => {
        const arr = [1, 2];
        let i = 0;

        while (i++ < (arr.length * 2)) {
            expect(pickRandom(arr)).toBeDefined();
        }
    });

})

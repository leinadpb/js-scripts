import isPalindromo from './isPalindrome';

const valid = ['ana', 'omo', 'A Bali su flan anal fusilaba', '¿Será lodo o dólares?', 'Yo dono rosas, oro no doy']
const invalid = ['telmo', 'palabra', 'palindromo']

describe('isPalindromo', () => {

    it.each(valid)(`%s should be valid`, (word) => {
        expect(isPalindromo(word)).toBeTruthy();
    })

    it.each(invalid)(`%s should be invalid`, (word) => {
        expect(isPalindromo(word)).toBeFalsy();
    })

})
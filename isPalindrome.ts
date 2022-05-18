/**
 * Escribe una función que devuelva TRUE si recibe un string palíndromo o FALSE en caso contrario.
 * Palíndromo: Es una cadena de caracteres que se lee igual de izquierda a derecha o derecha a izquierda.
 * Ejemplos:
 * > ana
 * > omo
 * > A Bali su flan anal fusilaba
 * > No subas, abusón
 * > Oí lo de mamá: me dolió
 * > Sometamos o matemos
 * > Yo dono rosas, oro no doy
 * > Isaac no ronca así
 * > Lavan esa base naval
 * > No traces en ese cartón
 * > ¿Será lodo o dólares?
 * > Logra Casillas allí sacar gol
 */

export default function isPalindromo(word: string): boolean {
    // @todo Write me!
    const formattedWord: string = word.toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[\W]/g, '');

    for (let i = 0; i < formattedWord.length / 2; i++) {
        if (formattedWord[i] !== formattedWord[formattedWord.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(isPalindromo('A Bali su flan anal fusilaba'))
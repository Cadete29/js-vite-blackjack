
/**
 * 
 * @param {Array<String>} deck 
 * @returns {String} retorna la carta
 */

export  const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw new Error ('No hay cartas en el deck');
    } 
    const carta = deck.pop();
    return carta;
}

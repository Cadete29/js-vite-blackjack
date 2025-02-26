import _ from 'underscore';


/**
 * Esta funcion crea un nuevop deck
 * @param {array<string>} tiposDeCarta Ejemplo ['C','D','H','S']
 * @param {array<string>} tiposEspeciales Ejejmplo ['A','J','Q','K']
 * @returns {array<String>} returna un nuevo deck
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {


    if (!tiposDeCarta || tiposDeCarta.lenght === 0)
        throw new Error('TiposDeCarta es obligatorio');
    if (!tiposEspeciales || tiposEspeciales.lenght === 0)
        throw new Error('TiposEspeciales es obligatorio');
    

    
    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}

/* export default crearDeck; */
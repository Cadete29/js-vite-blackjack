
/**
 * 
 * @param {<String>} carta 
 * @returns {HTMLImageElement} Imagen de la carta
 */

export const crearCartaHTML = ( carta ) => {

        if (!carta) throw new Error('Se necesita un valor para carta');

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');
        
        return imgCarta;
}

        
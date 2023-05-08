const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (num = 5, listar = false, hasta = 10) => {

    try {
        let salida = '';

        for (let i = 1; i <= hasta; i++) {

            salida += `${num} x ${i} = ${num * i}\n`;

        }

        if (listar) {
            console.clear();
            console.log('=========================='.zebra);
            console.log('       TABLA DEL '.green, colors.red(num));
            console.log('=========================='.zebra);
            console.log(salida.rainbow);
        }


        fs.writeFileSync(`./salida/tabla-${num}.txt`, salida);

        return `tabla-${num}.txt`.italic.magenta;

    } catch (error) {

        throw error;

    }

}

module.exports = {
    crearArchivo
}


/* 1.	Detectar si la cadena de entrada en un palíndromo. */


document.getElementById('button1').addEventListener('click',() => {
    let inputTexto = document.getElementById("inputTexto1").value.toLowerCase().replace(/[^a-z]/g, '');
    let resultadoDivUno = document.getElementById("resultado1");

    let reverso = inputTexto.split('').reverse().join('');
    let esPalindromo = inputTexto === reverso;

    resultadoDivUno.innerHTML = `La frase "${inputTexto}" ${esPalindromo ? 'es' : 'no es'} un palíndromo.`;
    console.log(`La frase "${inputTexto}" ${esPalindromo ? 'es' : 'no es'} un palíndromo.`);
});


/* 2.	Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor. */
document.getElementById('button2').addEventListener('click',function () {
    let num1 = parseFloat(document.getElementById("numero1").value);
    let num2 = parseFloat(document.getElementById("numero2").value);
    let resultadoDivDos = document.getElementById("resultado2");

    if (!isNaN(num1) && !isNaN(num2)) {
        let mayor = Math.max(num1, num2);

        resultadoDivDos.innerHTML = `El número mayor es: ${mayor}`;
        console.log(`El número mayor es: ${mayor}`);
    } else {
        resultadoDivDos.innerHTML = "Por favor, ingrese números válidos.";
    }
});


/* 3.	Escribe un programa que pida una frase y escriba las vocales que aparecen. */

function encontrarVocales() {
    let frase = document.getElementById("frase").value.toLowerCase();
    let resultadoDivTres = document.getElementById("resultado3");
    let vocalesTres = frase.match(/[aeiou]/g);

    if (vocalesTres !== null) {
        resultadoDivTres.innerHTML = `Vocales en la frase: ${vocalesTres.join(', ')}`;
        
    } else {
        resultadoDivTres.innerHTML = "No se encontraron vocales en la frase.";
    }
}

document.getElementById('button3').addEventListener('click',encontrarVocales);


/* 4.	Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales. */
function contarVocales() {
    let frase = document.getElementById("frase-cuatro").value.toLowerCase();
    let resultadoDivCuatro = document.getElementById("resultado4");
    let vocalesCuatro = 'aeiou';
    let conteo = {};

    for (let i = 0; i < vocalesCuatro.length; i++) {
        let vocal = vocalesCuatro[i];
        let coincidencias = frase.split(vocal).length - 1;
        conteo[vocal] = coincidencias;
    }

    let conteoTexto = Object.keys(conteo).map(vocal => `${vocal}: ${conteo[vocal]}`).join(', ');

    resultadoDivCuatro.innerHTML = `Cantidad de vocales en la frase: ${conteoTexto}`;
    console.log(`Cantidad de vocales en la frase: ${conteoTexto}`);
}
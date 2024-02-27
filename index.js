const tasasDeCambio = {
    USDToEUR: 0.82,
    EURToUSD: 1.22
};

function convertirMoneda(cantidad, monedaOrigen, monedaDestino) {
    if (monedaOrigen === 'USD' && monedaDestino === 'EUR') {
        return cantidad * tasasDeCambio.USDToEUR;
    } else if (monedaOrigen === 'EUR' && monedaDestino === 'USD') {
        return cantidad * tasasDeCambio.EURToUSD;
    } else {
        return NaN;
    }
}

function imprimirHistorial(historial) {
    console.log('Historial de conversiones:');
    historial.forEach(conversion => {
        console.log(`${conversion.cantidad} ${conversion.monedaOrigen} = ${conversion.resultado.toFixed(2)} ${conversion.monedaDestino}`);
    });
}


function simuladorConvertidor() {
    let historial = [];

    while (true) {
        let opcion = prompt("¿Qué deseas hacer?\n1. Convertir USD a EUR\n2. Convertir EUR a USD\n3. Ver historial\n4. Salir");

        if (opcion === '1') {
            let cantidadUSD = parseFloat(prompt("Ingresa la cantidad de USD:"));
            let resultado = convertirMoneda(cantidadUSD, 'USD', 'EUR');
            if (!isNaN(resultado)) {
                console.log(`${cantidadUSD} USD = ${resultado.toFixed(2)} EUR`);
                historial.push({ cantidad: cantidadUSD, monedaOrigen: 'USD', resultado: resultado, monedaDestino: 'EUR' });
            } else {
                alert("Error: Opción no válida.");
            }
        } else if (opcion === '2') {
            let cantidadEUR = parseFloat(prompt("Ingresa la cantidad de EUR:"));
            let resultado = convertirMoneda(cantidadEUR, 'EUR', 'USD');
            if (!isNaN(resultado)) {
                console.log(`${cantidadEUR} EUR = ${resultado.toFixed(2)} USD`);
                historial.push({ cantidad: cantidadEUR, monedaOrigen: 'EUR', resultado: resultado, monedaDestino: 'USD' });
            } else {
                alert("Error: Opción no válida.");
            }
        } else if (opcion === '3') {
            imprimirHistorial(historial);
        } else if (opcion === '4') {
            console.log("¡Hasta luego!");
            break;
        } else {
            alert("Error: Opción no válida.");
        }
    }
}

simuladorConvertidor();

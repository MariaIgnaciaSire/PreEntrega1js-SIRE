document.getElementById('calcularPrecio').addEventListener('click', function() {
    let tipoCabaña = document.getElementById('tipoCabaña').value;
    let duracionEstadia = parseInt(document.getElementById('duracionEstadia').value);
    let tipoCambio = document.getElementById('tipoCambio').value;
    let precioPorDia = obtenerPrecioPorDia(tipoCabaña);
    let precioTotal = calcularPrecioTotal(precioPorDia, duracionEstadia);

    // Convertir el precio total según el tipo de cambio seleccionado
    precioTotal = convertirPrecio(precioTotal, tipoCambio);

    mostrarPrecioReserva(precioTotal, tipoCambio);
});

function obtenerPrecioPorDia(tipoCabaña) {
    let precioPorDia = 0;

    switch (tipoCabaña) {
        case 'pequeña':
            precioPorDia = 40000;
            break;
        case 'mediana':
            precioPorDia = 60000;
            break;
        case 'grande':
            precioPorDia = 80000;
            break;
        default:
            precioPorDia = 0;
    }

    return precioPorDia;
}

function calcularPrecioTotal(precioPorDia, duracionEstadia) {
    let precioTotal = precioPorDia * duracionEstadia;
    return precioTotal;

    document.getElementById('calcularPrecio').addEventListener('click', function() {
        console.log("Botón 'Calcular Precio' clickeado"); // Verifica si el botón se ha clickeado
    
        // Resto del código para calcular el precio y mostrarlo
    });
    
}

function convertirPrecio(precio, tipoCambio) {
    switch (tipoCambio) {
        case 'pesos':
            return Math.round(precio); // Redondeamos al entero más cercano
        case 'dolares':
            return precio * 0.0013; // Suponiendo un tipo de cambio de 1 USD = 770 CLP
        case 'euros':
            return precio * 0.0012; // Suponiendo un tipo de cambio de 1 EUR = 830 CLP
        default:
            return precio;
    }
}

function mostrarPrecioReserva(precioTotal, tipoCambio) {
    console.log('Mostrando precio de reserva');
    let precioReservaElement = document.getElementById('precioReserva');

    // Definimos el símbolo de la moneda según el tipo de cambio seleccionado
    let simboloMoneda = '';
    switch (tipoCambio) {
        case 'pesos':
            simboloMoneda = '$';
            // Formateamos el precio total en pesos chilenos con separadores de miles
            precioTotal = precioTotal.toLocaleString('es-CL');
            break;
        case 'dolares':
            simboloMoneda = 'USD';
            break;
        case 'euros':
            simboloMoneda = 'EUR';
            break;
        default:
            simboloMoneda = '$';
    }

    // Formateamos el precio total según la moneda
    let precioFormateado = simboloMoneda + ' ' + (tipoCambio === 'pesos' ? precioTotal : precioTotal.toFixed(2));

    precioReservaElement.innerText = 'El precio total de la reserva es: ' + precioFormateado;
}








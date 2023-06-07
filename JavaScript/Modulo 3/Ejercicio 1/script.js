const INBOUND_INPUTS = document.getElementsByClassName("inbound");
const OUTBOUND_INPUTS = document.getElementsByClassName("outbound");
const DIFFERENCE_OUTPUTS = document.getElementsByClassName("difference");


// Se setean los eventos
( () => {
    for(let index = 0 ; index < 12 ; ++index){
        const inboundInput = INBOUND_INPUTS[index];
        const outboundInput = OUTBOUND_INPUTS[index];
        const differenceOutput = DIFFERENCE_OUTPUTS[index];

        inboundInput.addEventListener("change", event => updateData(inboundInput, differenceOutput));
        outboundInput.addEventListener("change", event => updateData(outboundInput, differenceOutput));
    }
})();


/**
 * Wrapper para actualizar los datos
 * @param {<input>} input el input de entrada, sea ingreso o egreso
 * @param {<input>} difference  el input donde se muestra la diferencia
 */
function updateData(input, difference){
    updateDifference(input, difference);
    updateTotals(input);
}


/**
 * Actualiza la diferencia
 * Si se trata de un egreso, el valor es negativo
 */
function updateDifference(input, difference){
    difference.value = toNumber(difference.value) + (isOutbound(input) ? -1 : 1) * toNumber(input.value) + " $";
    colorInput(difference);
}


/**
 * Actualiza los totales
 */
function updateTotals(input){
    const totalInbound = document.getElementById("total-inbound");
    const totalOutbound = document.getElementById("total-outbound");
    const totalDifference = document.getElementById("total-difference");

    // Si el evento fue disparado por una entrada de egreso, solamente se actualizan los egresos. Igual con los ingresos
    if(isOutbound(input)){
        totalOutbound.value = null;
        for(outbound of OUTBOUND_INPUTS)
            totalOutbound.value = toNumber(totalOutbound.value) + toNumber(outbound.value);
        totalOutbound.value += " $";
    }
    else{
        totalInbound.value = null;
        for(inbound of INBOUND_INPUTS)
            totalInbound.value = toNumber(totalInbound.value) + toNumber(inbound.value);
        totalInbound.value += " $";
    }

    // La diferencia se actualiza siempre
    totalDifference.value = toNumber(totalInbound.value) - toNumber(totalOutbound.value);
    totalDifference.value += " $";
    colorInput(totalDifference);
}


/**
 * Colorea el texto de la diferencia. Si es negativo se colorea en rojo, si es >= 0, en verde
 */
function colorInput(input){
    if(parseFloat(input.value) < 0 ){
        input.classList.remove("positive-gap");
        input.classList.add("negative-gap");
    }
    else{
        input.value = "+" + input.value;
        input.classList.remove("negative-gap");
        input.classList.add("positive-gap");
    }
}


// Chequea si es una entrada de egreso
function isOutbound(input){ return input.classList.contains("outbound"); }


// Parsea un valor numérico o devuelve 0 en caso de cadena vacía
function toNumber(value){ return parseInt(value) || 0; }
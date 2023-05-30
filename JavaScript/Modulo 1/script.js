document.getElementById("btn-calculate").onclick = () => {
    const costosFijos = document.getElementById("costos-fijos").value;
    const precioVenta = document.getElementById("precio-venta").value;
    const costosVariables = document.getElementById("costos-variables").value;
    const puntoEquilibrio = costosFijos / (precioVenta - costosVariables);
    document.getElementById("resultado").value = puntoEquilibrio; // no redondeo a 2 decimales pq al ser un índice quizás es útil conocer sus otras cifras
}

function calcularPorcentajes(){
    const ingresosTotales = document.getElementById("ingreso-total").value;
    document.getElementById("necesarios").innerText = (ingresosTotales * 0.5).toFixed(2);
    document.getElementById("opcionales").innerText = (ingresosTotales * 0.3).toFixed(2);
    document.getElementById("ahorro").innerText = (ingresosTotales * 0.2).toFixed(2);
}

document.getElementById("calcular-tabla").onclick = calcularPorcentajes;
document.getElementById("ingreso-total").onchange = calcularPorcentajes; // Para calcular porcentajes al apretar Enter
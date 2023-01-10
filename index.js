function calcular_interes(monto, cuotas) {
    let interes;
    if (cuotas == 3) {

        interes = monto * 0.15;
        return interes

    }
    else if (cuotas == 6) {

        interes = monto * 0.35;
        return interes

    }
    else if (cuotas == 12) {

        interes = monto * 0.60;
        return interes

    }
    else {

        console.log("Numero de cuotas no disponible")
        return 0

    }
}

console.log("Bienvenido a PrestamosGali");
let monto = "";
while (monto != "salir") {

    let monto = (prompt("Ingrese un monto o SALIR para finalizar"));
    if (monto != "salir") {

        let cuotas = parseFloat(prompt("Ingrese la cantidad de cuotas deseadas (3-6-12): "));

        console.log("Solicitaste: ", "$", monto, "en", cuotas, "cuotas");
        console.log("Total a pagar:", monto + calcular_interes(monto, cuotas));
        console.log("Valor de cada Cuota: ", (monto + calcular_interes(monto, cuotas)) / cuotas);
    }
}

console.log("Gracias por visitar PrestamosGali");



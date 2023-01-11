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
        const amount = Number(monto)
        let cuotas = Number.parseInt(prompt("Ingrese la cantidad de cuotas deseadas (3-6-12): "));

        console.log("Solicitaste: ", "$", amount, "en", cuotas, "cuotas");
        console.log("Total a pagar:", (amount + calcular_interes(Number(amount), cuotas)));
        console.log("Valor de cada Cuota: ", (amount + calcular_interes(amount, cuotas)) / cuotas);
    }
    else break
}

console.log("Gracias por visitar PrestamosGali");



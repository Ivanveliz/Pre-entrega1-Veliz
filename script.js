//Calcular valor final de 3 productos seleccionados 
//quiero calcularle el iva a un producto final, mostrarle al usuario cuanto es solo el iva.
//sumar el iva al product final y mostrarle al usuario
//restarle el descuento si pago en efectivo o  sumarle el interes si pagar en tarjeta


let confirmar = true

do{

// función suma
function SumadeTotalDeProduc(prod1 = 0, prod2 = 0, prod3 = 0) {
    return prod1 + prod2 + prod3
}

// porcentajes del 10% y 21%
const Calc10Porc = valor => valor * 0.10

const CalcIva = productoSinIva => productoSinIva * 0.21


let producto1 = Number(prompt("Vamos  a calcular el valor final de 3 productos, para eso calculamos el IVA y se lo sumamos. Tambien, calcularemos el precio final en relación al pago (Efectivo o tarjeta): \n Ingresá el  precio del primer producto"))
let producto2 = Number(prompt("Ingresá el precio del segundo producto"))
let producto3 = Number(prompt("Ingresá el precio del segundo producto"))

let precioProdFinal = SumadeTotalDeProduc(producto1, producto2, producto3)
alert("La suma de todos los productos es " + (precioProdFinal))

let ivaDeProductos = CalcIva(precioProdFinal)
alert("el IVA es de " + ivaDeProductos)

let producConIva = SumadeTotalDeProduc(precioProdFinal, ivaDeProductos)
alert("El precio final de los productos + el  IVA es de " + (producConIva))



function tipoDePago(opciones, pagoEnEfec, pagoEnTarj) {
    switch (opciones) {
        case "1":
            return alert(("Recibiste un Descuento de 10% por pagar en efectivo. El precio final total sería: ") + (pagoEnEfec - Calc10Porc(pagoEnEfec)))
        case "2":
            return alert(("Recibiste un interés de 10% por pagar en efectivo. El precio final total sería: ") + (pagoEnEfec + Calc10Porc(pagoEnEfec)))
        default:
            return alert("No se pudo alcular el descuento o el interes")
    }
}

let CalcDescOInt = prompt("Ahora Ingresá el tipo de pago. Si  abonas en efectivo vas a tener un descuento del 10%. Si abonas con tarjeta vas a tener un interés del  10%. \n 1 Para abonar en efectivo \n 2 Para abonar con tarjeta")

tipoDePago(CalcDescOInt, producConIva, producConIva)


}
while (confirm("¿Quiere seguir cargando productos?")){ 
}

alert("Gracias por comprar con nosotros")

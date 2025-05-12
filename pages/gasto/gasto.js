function litros(horas, km) {
    let kilometros = horas * km
    let consumo = kilometros / 12
    return consumo
}

let litros1 = litros(10, 85)
let litros2 = litros(2, 92)
let litros3 = litros(22, 67)

console.log (`LITROS 1 = ${litros1.toFixed(3)}`)
console.log (`LITROS 2 = ${litros2.toFixed(3)}`)
console.log (`LITROS 3 = ${litros3.toFixed(3)}`)

function volume(raio) {
    let volume = 4/3 * 3.14159 * (raio * raio * raio)
    return volume
}

let valor1 = volume(3)
let valor2  = volume(15)
let valor3 = volume(1523)

console.log (`TOTAL 1 = ${valor1.toFixed(3)}`)
console.log (`TOTAL 2 = ${valor2.toFixed(3)}`)
console.log (`TOTAL 3 = ${valor3.toFixed(3)}`)
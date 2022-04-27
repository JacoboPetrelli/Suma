let suma = 0
i = 1
for(let k = 0; k <= 1001; k++){
let denominador = 2*k+1;    
suma = suma + (i/denominador)
i = i *-1
}
suma = 4*(suma)
console.log("La suma es igual a " + suma)

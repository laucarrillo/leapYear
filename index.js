// El dato introducido puede ser cualquier entero
// En caso de no ser un entero debera devolver un error informativo

// p: Es divisible entre 4
// q: Es divisible entre 100
// s: Es divisible entre 400
// R: p & [!q | s]: Es dvisible entre 4 y no lo es entre 100 o lo es entre 400

const isDivisibleY = require('./isDivisbleY');

function isLeapYear(year) {
    return (isDivisibleY(year, 4) & (
        !isDivisibleY(year, 100) |
        isDivisibleY(year, 400)
    )
    )
}
function main(){
    var anoDeEntrada = 2003;
    if (isLeapYear(anoDeEntrada)){
        return console.log('Es un buen ano de entrada');
    }
    console.log('Es un mal ano de entrada');
    while(!isLeapYear(anoDeEntrada)){
        anoDeEntrada--;
    }
    console.log('El anterior buen ano de entrada seria: ', anoDeEntrada);

    do{
        anoDeEntrada++;
    }while(!isLeapYear(anoDeEntrada));
    console.log('El siguiente buen ano de entrada seria: ', anoDeEntrada);

}

// for(var x = 2000; x<=3000; x++){
//     console.log(x, isLeapYear(x));
// }

// var annosAProar = [2000, 2004, 2008, 2010]
// annosAProar.forEach(x =>{
//      console.log(x, isLeapYear(x));
// })

// console.log('inicio del while')
// var anno = 2004
// while(!isLeapYear(anno)){
//     console.log(anno, isLeapYear(anno));
//     anno++;
// }
// console.log(anno, 1);

// console.log('inicio del do while')
// anno = 2004
// do{
//     console.log(anno, isLeapYear(anno));
//     anno++;
// }while(!isLeapYear(anno))
// console.log(anno, 1);
// console.log('Fin del do while')
main();
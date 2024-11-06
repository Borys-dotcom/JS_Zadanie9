function trippleMultiplication(number1 = 1, number2 = 1, number3 = 1){
    let result = 0;
    result = number1 * number2 * number3;
    return result;
}

let wynik = 0;
wynik = trippleMultiplication(2,5,8);

console.log(`Wynik działania funkcji to: ${wynik}.`);
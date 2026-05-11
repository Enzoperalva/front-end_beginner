function fizzBuzz(){
    let inicio = 1
    let fim = 30

    while (inicio <= fim){
        if (inicio % 3 === 0 && inicio % 5 === 0){
            console.log('Fizzbuzz');
        } else if (inicio % 3 === 0){
            console.log('Fizz');
        } else if (inicio % 5 === 0 ) {
            console.log('Buzz');
        } else {
            console.log(inicio);
        };

        inicio++;
    };
};


fizzBuzz();

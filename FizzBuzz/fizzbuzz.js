function fizzbuzz() {
        for (var i = 1; i <= 100; i++) {
           
            switch (true) {

                case i % 3 == 0 && i % 5 == 0:
                    console.log(`Fizzbuzz`);
                    break;

                case i % 5 == 0:
                    console.log(`Fizz`);
                    break;
                
                case i % 3 == 0:
                    console.log(`Buzz`);
                    break;

                default:
                    console.log(i)
                    break;
            }
        }
}

fizzbuzz();

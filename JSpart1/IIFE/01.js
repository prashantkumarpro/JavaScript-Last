// Imediately Invoked function Expression (IIFE)

(function chai(){
    console.log('DB CONNECTED');//DB CONNECTED
}());

(function aurcode(){
    console.log('DB CONNECTED TWO');//DB CONNECTED TWO
})();

(() => {
    console.log(`DB CONNECTED TWO`);//DB CONNECTED TWO
})();

(() => {
    console.log(`DB CONNECTED TWO`);//DB CONNECTED TWO
})('Prashant')
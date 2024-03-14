function EvenChecker(request) {
    if (request=="even") {
        return function(n) {
            console.log(`The Number is Even ${(n%2===0)}`);
        }
    }else if (request=="odd") {
        return function(n) {
            console.log(`The Number is Odd ${!(n%2===0)}`);
        }
}};

let evenChecker = EvenChecker("even"); 
evenChecker(10);  



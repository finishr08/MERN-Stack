//Write the arrow function that take the square of n 

let square = (n)=>{
    return n * n ;
}


// Qno:2 stop the function on 5

let output = square(2);
console.log(output);

let count = 0;
let time = setInterval(()=>{
    console.log(`Count: ${count++}`);
    if (count === 5) {
        clearInterval(time);
    }
},2000);
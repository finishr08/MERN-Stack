function MultipleCall(func , count){
    for (let i = 1; i <= count; i++) {
        func();  
    }
}

function greeting() {
    console.log("Assalam-o-Alaikum!");
}

MultipleCall(greeting,7);
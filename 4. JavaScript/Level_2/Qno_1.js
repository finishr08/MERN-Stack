// What to do based on Color(red, green , yellow) create a traffic light rules  in if else statements.

let color = "red";
color = color.toLowerCase()
if (color==="red"){
    console.log("Stop the Car!");
}else if (color ==="yellow"){
    console.log("Start the Car Engine!");
}else if (color === "green"){
    console.log("lets Drive your Car!");
}else{
    console.log("The Enter Color is invalid......");
}


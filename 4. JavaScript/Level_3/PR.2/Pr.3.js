let array = ["C#","Cpp","java","javaScript","Python","Golang","Rust","java","typescript"]
let index = array.indexOf("javaScript")

console.log(`Before Reversed: ${index}`);

index = array.reverse().indexOf("javaScript");

console.log(`After Reversed: ${index}`);
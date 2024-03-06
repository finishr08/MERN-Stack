/*
The grading scale for the exam is:
90 or higher: A
80 to 89: B
70 to 79: C
Below 70: F What grade do you need to get at least a C on the exam?*/


let grade = 78;

if (grade >= 90){
    console.log(`Grade: A`);
}else if (grade <= 89 || grade >= 80){
    console.log(`Grade: B`);
}else if (grade <= 79 || grade >= 70){
    console.log(`Grade: C`);
}else{
    console.log(`Grade: F`);
}
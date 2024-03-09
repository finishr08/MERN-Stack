// Qs1.Write a JS program to delete alloc currencesofelement ‘num’ inagivenarray.
//  Example: ifarr=[1,2,3,4,5,6,2,3]&num=2
//  Resultshouldbearr=[1,3,4,5,6,3]

let arr = [1,2,3,4,5,6,2,3];
let num = 2;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
        arr.splice(i,1)
    }
}
console.log(arr);
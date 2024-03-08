# Level-4 JavaScript

Loops are fundamental building blocks in JavaScript for repeated execution of code. Here's a breakdown of `for` and `while` loops:

## for Loop

The `for` loop is a concise way to iterate a specific number of times or loop until a certain condition is met. It has a general syntax:

```javascript
for (initialization; condition; increment/decrement) {
  // code to be executed
}
```

- **Initialization:** This expression is executed only once before the loop starts. Typically used to initialize a loop counter variable.
- **Condition:** This expression is evaluated before every loop iteration. The loop continues as long as the condition is `true`.
- **Increment/Decrement:** This expression is executed after each iteration. Often used to update the loop counter.

**Example:**

```javascript
for (let i = 0; i < 5; i++) {
  console.log("Iteration", i);
}
```

*This loop will print "Iteration" followed by the numbers 0 to 4 (5 times).*

## while Loop

The `while` loop continues executing a block of code as long as a specified condition remains `true`. It has a simpler syntax:

```javascript
while (condition) {
  // code to be executed
}
```

- **Condition:** This expression is evaluated before every loop iteration. The loop continues as long as the condition is `true`.

**Example:**

```javascript
let count = 0;
while (count < 3) {
  console.log("Count:", count);
  count++;
}
```

This loop will print "Count:" followed by the numbers 0, 1, and 2 (3 times) because `count` is incremented after each iteration.

### Choosing the Right Loop

- Use `for` loops when you know the exact number of iterations beforehand.
- Use `while` loops when the number of iterations depends on a condition that may change within the loop.

### Additional Considerations!

- You can use `break` to exit a loop prematurely and `continue` to skip the remaining code in the current iteration and jump to the next.
- Be cautious of infinite loops by ensuring your condition eventually evaluates to `false`.

## Additional Loops

In JavaScript, you have two main loop constructs for iterating over elements in collections: `for...of` and `for...in`. They serve different purposes:

### for...of Loop (Introduced in ES6)

- Used to iterate over the **values** of iterable objects like arrays, strings, maps, sets, and more.
- Provides a simpler and more modern syntax for looping through the elements themselves.

**Syntax:**

```javascript
for (const element of iterable) {
  // code to be executed for each element
}
```

- `const element`: This declares a variable to store the current element in each iteration. You can use `let` as well for modification.
- `iterable`: This is the object you want to iterate over (array, string, etc.).

**Example:**

```javascript
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log(fruit); // Prints "apple", "banana", "cherry"
}
```

### for...in Loop

- Used to iterate over the **enumerable properties** (keys) of an object, including inherited properties.
- Not ideal for arrays if you specifically need the element values because it also iterates over non-numeric properties (like custom methods added to the array).

**Syntax:**

```javascript
for (const key in object) {
  // code to be executed for each key
  console.log(key, object[key]); // Access the value using the key
}
```

- `const key`: This variable stores the property name (key) in each iteration.
- `object`: This is the object you want to iterate over.

**Example:**

```javascript
const person = { name: "Alice", age: 30, greet() { console.log("Hello!"); } };
for (const key in person) {
  console.log(key, person[key]); // Prints "name", "age", "greet"
}
```

### Key Differences

| Feature        | for...of Loop | for...in Loop |
|----------------|---------------|---------------|
| Iterates over   | Values          | Enumerable Keys |
| Best for        | Arrays, Strings, Maps, Sets | Objects       |
| Order           | Preserves order (for iterables with a defined order) | Doesn't necessarily preserve order |
| Prototype chain | Doesn't iterate over inherited properties | Iterates over inherited properties as well |

### Choosing the Right Loop

- Use `for...of` when you need to access the actual elements (values) in arrays, strings, and other iterables.
- Use `for...in` cautiously when iterating over objects, especially if order matters, and only if you need to access properties by their names. In most cases, consider alternative methods like `Object.keys()` for working with object properties.

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

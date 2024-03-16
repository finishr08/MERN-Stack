# Level-7 JavaScript

## Arrow Functions

- Introduced in ES6 (ECMAScript 2015), arrow functions provide a concise syntax for defining functions.
- They are written using `=>` instead of the `function` keyword.

**Syntax:**

```javascript
const myFunction = (argument1, argument2) => {
  // Function body
  return value; // Explicit return
};

const conciseFunction = argument => argument * 2; // Implicit return (single expression)
```

### Implicit Return

- Arrow functions with a single expression in their body can omit the `return` keyword.
- The expression itself is implicitly returned.

**Example:**

```javascript
const square = x => x * x; // Implicit return for a single expression
const greet = name => `Hello, ${name}!`; // Implicit return for string interpolation
```

### setTimeout

- The `setTimeout` function schedules a function to be executed **once** after a specified delay (in milliseconds).
- It's useful for delayed actions or animations.

**Syntax:**

```javascript
setTimeout(functionToExecute, delayInMilliseconds);
```

```javascript
setTimeout(() => {
  console.log("This message appears after the delay.");
}, 2000); // Delay of 2 seconds (2000 milliseconds)
```

### setInterval

- The `setInterval` function schedules a function to be executed **repeatedly** at a specified interval (in milliseconds).
- It's commonly used for animations, timers, and background processes.

**Syntax:**

```javascript
const intervalId = setInterval(functionToExecute, intervalInMilliseconds);
```

```javascript
const intervalId = setInterval(() => {
  console.log("This message appears repeatedly at the interval.");
}, 1000); // Interval of 1 second (1000 milliseconds)
```

**Key Points**

- Both `setTimeout` and `setInterval` return an identifier (ID) that can be used to cancel the scheduled execution with `clearTimeout` or `clearInterval`, respectively.
- Arrow functions within `setTimeout` or `setInterval` inherit the `this` context from the surrounding scope.

**Example:**

```javascript
let count = 0;

const intervalId = setInterval(() => {
  console.log(`Count: ${count++}`);
  if (count === 5) {
    clearInterval(intervalId);
  }
}, 1000);
```


## Error Handling

In JavaScript, the `try...catch...finally` statement provides a mechanism for handling errors that might occur during code execution.

**Syntax:**

```javascript
try {
  // Code that might throw an error (exception)
} catch (error) {
  // Code to handle the error (exception)
  // The `error` parameter contains information about the error
} finally {
  // Code that always executes, regardless of errors (optional)
}
```


- **try:** This block contains the code you want to execute. If an error occurs within this block, the execution jumps to the `catch` block.
- **catch:** This block defines how to handle the error. It receives an argument, typically named `error` (or any other name), which is an object containing details about the error. You can access properties like `error.name` and `error.message` to understand the nature of the error.
- **finally:** This block (if used) executes regardless of whether an error occurs or not. It's commonly used for cleanup tasks like closing files or releasing resources.

**More!**

- Use `try...catch` to gracefully handle errors and prevent your program from crashing.
- Employ specific error checking within the `catch` block (e.g., `error.name`) for customized error handling.
- The `finally` block is useful for ensuring essential code executes, even during errors.
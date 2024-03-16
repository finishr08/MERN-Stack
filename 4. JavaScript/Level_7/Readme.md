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
# Level-6 JavScript

## JavaScript Functions

In JavaScript, functions are fundamental building blocks. They are reusable blocks of code that perform specific tasks. Here's what functions are and how they work:

**Purpose:**

* Functions encapsulate a set of instructions to perform a particular operation.
* They promote code reusability by allowing you to call the same code multiple times with different inputs (if needed).
* Functions improve code organization by separating functionalities into manageable blocks.

**Structure:**

* A function definition typically follows this format:

```javascript
function functionName(parameter1, parameter2, ...) {
  // Code to be executed
  return value; // Optional, specifies the value returned by the function
}
```

* `functionName`:  A unique name that identifies the function.
* `parameter1, parameter2, ...`: (Optional) A comma-separated list of parameters (inputs) the function accepts.
* `// Code to be executed`: The statements that define the function's logic. This code executes when the function is called.
* `return value;`: (Optional) An expression that specifies the value the function returns after execution. If not specified, the function returns `undefined`.

### Calling Functions

* To execute a function, you use the function name followed by parentheses:

```javascript
functionName(argument1, argument2, ...);
```

* `argument1, argument2, ...`: The actual values you provide to the function's parameters. These values are used within the function's code.

**Example:**

```javascript
function add(x, y) {
  return x + y;
}

const result = add(5, 3); // Calls the add function with arguments 5 and 3
console.log(result); // Output: 8
```

**Key Points:**

* Functions can be defined before or after they are called in your code.
* Functions can take zero or more parameters.
* Functions can return a value or not return anything (return `undefined`).
* JavaScript allows for anonymous functions (functions without a name) and function expressions (assigning functions to variables).

## Scope in JavaScript

In JavaScript, scope defines the accessibility of variables and functions within your code. It determines where a variable or function can be referenced and used. There are three main types of scope in JavaScript:

### Global Scope
    * This is the outermost scope, encompassing your entire JavaScript program.
    * Variables declared directly in the global scope are accessible from anywhere in your code.
    * It's generally recommended to minimize using global variables as they can lead to naming conflicts and make code harder to reason about.

### Function Scope (Before ES6)
    * Prior to ECMAScript 2015 (ES6), JavaScript primarily relied on function scope.
    * Variables declared with `var` inside a function are only accessible within that function and its nested functions (if any).
    * This means the variable's lifetime is tied to the function's execution.

### Block Scope (Introduced in ES6)
    * With ES6, JavaScript introduced `let` and `const` keywords that provide block scope.
    * Variables declared with `let` or `const` within a block of code (e.g., `if` statement, loop, curly braces `{}`) are only accessible within that block and any nested blocks.
    * This enhances code clarity and reduces the risk of unintended variable modifications from outer scopes.

### Lexical Scope

* JavaScript adheres to lexical scope, also known as static scope.
* This means the scope of a variable or function is determined by its physical location in the code, not by where it's called from.
* Nested functions have access to variables and functions declared in their outer (enclosing) scopes, creating a hierarchy of accessibility.

Here's a table summarizing the key differences:

| Scope Type | Keyword | Accessibility |
|---|---|---|
| Global Scope | `var` (without any enclosing function) | Accessible from anywhere in the code |
| Function Scope (Before ES6) | `var` (inside a function) | Accessible within the function and its nested functions |
| Block Scope (ES6+) | `let` and `const` | Accessible only within the block and any nested blocks where it's declared |
| Lexical Scope | All | Nested functions can access variables and functions from their enclosing scopes |

**Example:**

```javascript
// Global variable
var globalVar = "Global";

function outerFunction() {
  // Function-scoped variable (Before ES6)
  var functionVar = "Function";

  if (true) {
    // Block-scoped variable (ES6+)
    let blockVar = "Block";
    console.log(globalVar, functionVar, blockVar); // All accessible here
  }

  console.log(globalVar, functionVar); // Only globalVar and functionVar accessible here

  function innerFunction() {
    console.log(globalVar, functionVar); // Can access global and function-scoped variables
  }

  innerFunction();
}

outerFunction();

// console.log(blockVar); // This will cause an error because blockVar is not accessible outside its block
```

*Especially block scope and lexical scope introduced in ES6, is crucial for writing well-structured and maintainable JavaScript code. It helps prevent naming conflicts and unexpected behavior.*


## Function Expression

In JavaScript, function expressions are an alternative way to define functions. Unlike function declarations, they treat functions as values and allow you to create functions on-the-fly and assign them to variables or pass them as arguments to other functions.

**Structure:**

A function expression typically follows this format:

```javascript
const functionName = function(parameter1, parameter2, ...) {
  // Code to be executed
  return value; // Optional, specifies the value returned by the function
}
```

* `const functionName =`: (Optional) You can assign the function to a variable using `const` (or `let`) to give it a name for later reference. This is not mandatory for anonymous functions.
* `function(parameter1, parameter2, ...)`: Defines the function itself, similar to a function declaration.
* `// Code to be executed`: The statements that define the function's logic. This code executes when the function is called.
* `return value;`: (Optional) An expression that specifies the value the function returns after execution. If not specified, the function returns `undefined`.


### Anonymous Function Expression

```javascript
const greet = function() {
  console.log("Hello!");
};

greet(); // Output: Hello!
```

*An anonymous function is created and assigned to the `greet` variable. The function is then called using the variable name.*

### Named Function Expression

```javascript
const doubler = function(number) {
  return number * 2;
};

const result = doubler(5);
console.log(result); // Output: 10
```

*A named function expression (`doubler`) is created and assigned to a variable. The function takes a number as input and returns its double.*

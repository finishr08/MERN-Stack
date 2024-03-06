# Level-2 JavaScript


## console.log

- **Purpose:** Used for debugging and logging messages to the browser's developer console.
- **Syntax:** `console.log(message1, message2, ...messageN);`
  - `messageN`: Any data type you want to output (strings, numbers, objects, arrays, etc.).
- **Example:**
  ```javascript
  console.log("Hello, world!");
  const age = 30;
  console.log("My age is:", age);
  ```

## Linking JavaScript Files

- **Method 1: `<script>` Tag:**
  - Place a `<script>` tag at the end of your HTML file to link an external JavaScript file:
    ```html
    <html>
    <head>
        <title>My Page</title>
    </head>
    <body>
        <h1>Content</h1>
        <script src="myScript.js"></script>
    </body>
    </html>
    ```
  - The `src` attribute specifies the path to your JavaScript file.

## Template Literals

- **Purpose:** Create multi-line strings and embed expressions for cleaner string manipulation.
- **Syntax:** Use backticks (`) instead of quotes, with embedded expressions inside `${}`:
  ```javascript
  const name = "Alice";
  const greeting = `Hello, ${name}! How are you today?`;
  console.log(greeting); // Output: Hello, Alice! How are you today?
  ```
- **Multiline Strings:** Template literals allow writing multi-line strings without concatenation:
  ```javascript
  const message = `This is a
  multiline string
  using template literals.`;
  console.log(message);
  ```

**JavaScript** operators are the building blocks that manipulate values, perform calculations, and control the flow of your code. Here's are some common operator types:

## Arithmetic Operators

- Used for mathematical operations like addition, subtraction, multiplication, etc.
- Operators: `+`, `-`, `*`, `/`, `%` (modulo), `**` (exponentiation)
- Example:
  ```javascript
  const sum = 10 + 5;
  const difference = 20 - 7;
  const product = 3 * 4;
  console.log(sum, difference, product); // Output: 15 13 12
  ```

## Assignment Operators

- Assign values to variables.
- Operators: `=`, `+=`, `-=`, `*=`, `/=` (and similar for other operators)
  - The combined operators (`+=`, `-=`, etc.) perform the operation and then assign the result.
- Example:
  ```javascript
  let count = 0;
  count += 2;  // Equivalent to count = count + 2;
  count *= 3;
  console.log(count); // Output: 6
  ```

## Comparison Operators

- Compare values for equality, inequality, greater than/less than, etc.
- Operators: `==`, `!=`, `===`, `!==`, `<`, `>`, `<=`, `>=`
  - Use `===` for strict equality (checks type and value), and `!==` for strict inequality.
- Example:
  ```javascript
  const a = 10;
  const b = "10";
  console.log(a == b);  // true (loose equality)
  console.log(a === b); // false (strict equality, different types)
  ```

## Logical Operators

- Combine conditional statements (e.g., `if`, `else`)
- Operators: `&&` (AND), `||` (OR), `!` (NOT)
- Example:
  ```javascript
  const age = 25;
  const isCitizen = true;
  if (age >= 18 && isCitizen) {
      console.log("You are eligible to vote.");
  }
  ```

## Other Operators

- **Unary Operators:** `++` (increment), `--` (decrement), `typeof` (check data type), `delete` (remove property)
- **Ternary Operator:** `condition ? exprIfTrue : exprIfFalse` (shorthand conditional)
- **Bitwise Operators:** Perform bit-level operations (advanced usage)


## Conditional Statements

Conditional statements in JavaScript are fundamental for controlling the flow of your code based on certain conditions. Here's a breakdown of the main ones:

### if Statement

- Executes a block of code if a specified condition is true.
- Syntax:
  ```javascript
  if (condition) {
      // Code to execute if condition is true
  }
  ```
- Example:
  ```javascript
  const age = 25;
  if (age >= 18) {
      console.log("You are an adult.");
  }
  ```

### else Statement

- Provides an alternative block of code to execute if the `if` condition is false.
- Syntax:
  ```javascript
  if (condition) {
      // Code to execute if condition is true
  } else {
      // Code to execute if condition is false
  }
  ```
- Example:
  ```javascript
  const isWeekend = true;
  if (isWeekend) {
      console.log("Enjoy your weekend!");
  } else {
      console.log("Back to work!");
  }
  ```

### else if Statement

- Allows checking for multiple conditions sequentially.
- Syntax:
  ```javascript
  if (condition1) {
      // Code to execute if condition1 is true
  } else if (condition2) {
      // Code to execute if condition1 is false and condition2 is true
  } else {
      // Code to execute if all previous conditions are false
  }
  ```
- Example:
  ```javascript
  const grade = 85;
  if (grade >= 90) {
      console.log("Excellent!");
  } else if (grade >= 80) {
      console.log("Very good!");
  } else {
      console.log("Keep practicing!");
  }
  ```

### Nested if-else

In JavaScript, nested `if` and `else` statements allow you to create complex decision-making logic by checking multiple conditions within a single block. Here's a breakdown:

**Nested `if` with `else`**

   ```javascript
   if (condition1) {
       if (condition2) {
           // Code to execute if both condition1 and condition2 are true
       } else {
           // Code to execute if condition1 is true but condition2 is false
       }
   } else {
       // Code to execute if condition1 is false
   }
   ```

**Nested `if`/`else if` chains**

   ```javascript
   if (condition1) {
       // Code to execute if condition1 is true
   } else if (condition2) {
       // Code to execute if condition1 is false and condition2 is true
   } else if (condition3) {
       // Code to execute if both condition1 and condition2 are false and condition3 is true
   } else {
       // Code to execute if all previous conditions are false
   }
   ```

**Example:**

```javascript
const grade = 88;
let letterGrade;

if (grade >= 90) {
    letterGrade = "A";
} else if (grade >= 80) {
    letterGrade = "B";
} else if (grade >= 70) {
    letterGrade = "C";
} else {
    letterGrade = "D or F";
}

console.log("Your letter grade is:", letterGrade);
```

In this example, the code checks the `grade` value against multiple conditions and assigns the corresponding letter grade.


**Tips**

- Always use curly braces `{}` to group the code within each conditional block, even if it's a single line.
- Indentation is recommended for better readability, but not strictly enforced by JavaScript.
- Choose the appropriate conditional statement based on the complexity of your conditions.

*By effectively using these conditional statements, you can make your JavaScript code more dynamic and responsive to different scenarios.*
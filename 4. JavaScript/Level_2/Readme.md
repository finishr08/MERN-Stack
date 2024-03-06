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

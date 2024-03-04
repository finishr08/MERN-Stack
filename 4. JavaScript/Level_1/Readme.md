# Level-1 JavaScript
    
## Variables

In JavaScript, you can declare variables using three keywords: `let`, `var`, and `const`. These keywords determine the scope and mutability (the ability to change the value) of the variable.

**`let` keyword**
   - Introduced in ES6 (ECMAScript 2015) for block-level scoping.
   - Variables declared with `let` are only accessible within the block they are defined in (e.g., `if` statement, loop, or the entire code block wrapped in curly braces `{}`).
   - You can reassign values to `let` variables, making them mutable.

   ```javascript
   if (true) {
       let x = 10;
       console.log(x); // Output: 10 (accessible within the if block)
   }

   console.log(x); // ReferenceError: x is not defined (x is not accessible outside the if block)
   ```

**`var` keyword**
   - Introduced in the early days of JavaScript, it has function-level scoping.
   - Variables declared with `var` are accessible throughout the entire function they are defined in, regardless of code blocks.
   - `var` variables are also mutable.

   ```javascript
   function someFunction() {
       var y = 20;
       if (true) {
           console.log(y); // Output: 20 (accessible within the function)
       }
   }

   someFunction();
   ```

    Due to its function-level scoping, `var` can lead to unintended variable behavior, especially when dealing with nested functions. It's generally recommended to use `let` or `const` for better control and to avoid potential pitfalls.

**`const` keyword**
   - Introduced in ES6, `const` creates variables that hold constant values.
   - Once assigned a value, a `const` variable cannot be reassigned. This helps prevent accidental modifications and improves code readability.

   ```javascript
   const PI = 3.14159;
   PI = 123; // TypeError: Assignment to constant variable
   ```

## Data Types

JavaScript supports various data types to represent different kinds of information:

- **Numbers:** Integers (whole numbers) and floating-point numbers (decimals). Examples: `10`, `-5.23`, `0.00001`.
- **Strings:** Sequences of characters enclosed in single or double quotes. Examples: `"Hello"`, `'World'`, `"This is a string"`.
- **Booleans:** Represent logical truth values: `true` or `false`.
- **Objects:** Collections of key-value pairs used to store complex data structures.
- **Arrays:** Ordered lists of values, similar to numbered boxes that can hold different types of data.
- **Undefined:** Represents a variable that has been declared but not yet assigned a value.
- **Null:** Represents the intentional absence of any object value.
- **Symbol:** A unique and immutable primitive value used as an object property key.

## Operators & Precedence

Operators are used to perform calculations, comparisons, and other manipulations on data. JavaScript follows operator precedence rules to determine the order of operations in an expression. Operators with higher precedence are evaluated first. Here's a simplified table (higher precedence at the top):

```
**Operator**        **Description**                                     **Associativity**
------------------ -------------------------------------------------- ---------------
`()`, `[]`, `.`,  Function calls, property access, array indexing       Left to right
`postfix ++`,        Post-increment/decrement                             Right to left
`prefix ++`, `--`,  Pre-increment/decrement, unary plus/minus          Right to left
`*, /, %`           Multiplication, division, modulo                     Left to right
`+`, `-`            Addition, subtraction                                 Left to right
`<`, `>`, `<=`,     Comparison operators (less than, greater than, etc.)  Left to right
`==`, `!=`, `===`,  Equality and strict equality operators              Left to right
`&&`                Logical AND                                         Left to right
`||`                Logical OR                                          Left to right
`!`                 Logical NOT                                        Right to left
`=`                 Assignment                                          Right to left
```

**`NaN` (Not a Number)**

The `NaN` value represents a result that is not a valid number, often arising from operations that don't produce numerical results.

I'd be glad to explain assignment operators, unary operators, binary operators, and identifier rules in JavaScript with code examples:

## Assignment Operators

These operators assign a value to a variable on the left side based on the expression on the right side.

- **Simple Assignment (`=`):** Assigns the value on the right directly to the variable on the left.

```javascript
let age = 25;
console.log(age); // Output: 25
```

- **Compound Assignment Operators (combine assignment and operation)**
  - `+=`: Adds and assigns
  - `-=`: Subtracts and assigns
  - `*=`: Multiplies and assigns
  - `/=`: Divides and assigns
  - `%=`: Modulo (remainder) and assigns

```javascript
let count = 10;
count += 5; // Equivalent to count = count + 5
console.log(count); // Output: 15
```

## Unary Operators

These operators operate on a single operand (value).

- **Increment (`++`):** Increases the operand by 1 (can be pre-increment `++x` or post-increment `x++`).
- **Decrement (`--`):** Decreases the operand by 1 (can be pre-decrement `--x` or post-decrement `x--`).
- **Negate (`-`):** Converts a number to its negative equivalent.
- **Logical NOT (`!`):** Inverts the boolean value (true becomes false, false becomes true).

```javascript
let num = 3;
console.log(++num); // Output: 4 (pre-increment, num becomes 4)
console.log(num--); // Output: 4 (post-decrement, uses the current value 4)
console.log(num);  // Output: 3 (num is now 3 after decrement)

let isTrue = true;
console.log(!isTrue); // Output: false
```

## Binary Operators

These operators require two operands (values) to perform an operation.

- **Arithmetic Operators (`+`, `-`, `*`, `/`, `%`):** Perform basic mathematical operations.
- **Comparison Operators (`==`, `!=`, `===`, `!==`, `<`, `>`, `<=`, `>=`):** Compare values and return true or false.
- **Logical Operators (`&&`, `||`, `!`):** Combine boolean expressions.
- **Bitwise Operators (`&`, `|`, `^`, `~`, `<<`, `>>`, `>>>`):** Perform bit-level operations on numbers (less common).

```javascript
let a = 10, b = 5;
console.log(a + b);   // Output: 15 (addition)
console.log(a == b);  // Output: false (equality)
console.log(a && b);   // Output: 5 (logical AND, returns the second value)
console.log(a || b);   // Output: 10 (logical OR, returns the first truthy value)
```

## Identifier Rules

Identifiers (names for variables, functions, etc.) in JavaScript must follow these guidelines:

- **Start with a letter (uppercase or lowercase) or an underscore (_).**
- **Can contain letters, numbers, and underscores after the first character.**
- **Case-sensitive (e.g., `age` is different from `Age`).**
- **Cannot be reserved keywords (words with special meanings in JavaScript like `let`, `function`, `const`).**

Here are some valid and invalid identifiers:

```javascript
let firstName = "Alice";   // Valid
let _age = 30;            // Valid (starts with underscore)
let total$ = 100;         // Invalid (special character other than underscore)
let while = 10;           // Invalid (reserved keyword)
```

*By understanding these operators and identifier rules, you can effectively write JavaScript code to manipulate data and create complex logic.*


## Boolean Data Type

- Represent logical values: `true` or `false`.
- Used for conditional statements and comparisons.
- Example:

```javascript
let isSunny = true;
let isWeekend = false;

if (isSunny && isWeekend) {
  console.log("Perfect day for a picnic!");
}
```

## String Data Type

- Represent sequences of characters (text).
- Enclosed in single (`'`) or double (`"`) quotes.
- Can be used for displaying text, storing user input, etc.
- **String Indexes:** You can access individual characters within a string using their zero-based index. The first character has an index of 0, the second has an index of 1, and so on.

```javascript
let message = "Hello, world!";

console.log(message[0]); // Output: "H" (character at index 0)
console.log(message.length); // Output: 14 (length of the string)
```

## Null Data Type

- A special value that indicates the absence of an object value.
- Not the same as an empty string or zero.
- Often used to represent intentional absence of data.

```javascript
let emptyBox = null;

console.log(emptyBox); // Output: null (no value assigned)
```

## Undefined Data Type

- Represents a variable that has been declared but not assigned a value.
- Also indicates a function's return value if the function doesn't explicitly return anything.
- Can lead to errors if not handled properly.

```javascript
let name;

console.log(name); // Output: undefined (declared but not assigned)

function greet() {
  // No return statement, so it implicitly returns undefined
}

let greeting = greet();
console.log(greeting); // Output: undefined
```

*Understanding these data types is crucial for working with variables and data in JavaScript. By using Booleans for logical operations, Strings for text, Null for intentional absence, and Undefined for variables declared but not assigned, you can write clear and efficient code.*
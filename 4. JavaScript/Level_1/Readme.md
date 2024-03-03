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
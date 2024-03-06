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

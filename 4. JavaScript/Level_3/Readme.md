# Level-3 JavaScript

In JavaScript, strings are a fundamental data type used to represent sequences of characters, like text, numbers, symbols, or even emojis. They are essential for building user interfaces, processing data, and interacting with the web.

Here's a key points about strings in JavaScript:

## Creating Strings

* You can create strings using single quotes (`'`), double quotes (`"`), or backticks (``). These quotes act as delimiters, defining the beginning and end of the string.
* Backticks, also known as template literals, offer special features like embedded expressions and multiline strings, making them versatile for complex string creation.

**Example:**

```javascript
let message = 'This is a string';
let greeting = "Hello, world!";
let multiline = `This is a 
multiline string.`;
```

## String Methods

JavaScript offers a rich set of methods for manipulating and working with strings. Here's a breakdown of some commonly used methods:

### Character Extraction

* **charAt(index)**: Returns the character at the specified index of the string. Remember, indexing starts from 0.
* **charCodeAt(index)**: Returns the Unicode character code at the specified index.
* **[] operator (like arrays)**: Similar to `charAt`, you can use square brackets with the index to access a character. However, this is generally discouraged due to potential confusion with arrays.

**Example:**

```javascript
let str = "Hello";
let firstChar = str.charAt(0); // "H"
let charCode = str.charCodeAt(1); // 101 (ASCII code for 'e')
let thirdChar = str[2]; // "l" (using square bracket notation)
```

### Extracting Substrings

* **slice(start, end)**: Extracts a section of the string from the specified `start` index (inclusive) up to but not including the `end` index.
* **substring(start, end)**: Similar to `slice`, but it allows negative indices and handles them by counting from the end of the string. This method might be deprecated in future versions of JavaScript, so using `slice` is recommended.
* **substr(start, length)**: Extracts a substring of length `length` from the `start` index. Unlike `slice` and `substring`, it does not handle negative indices.

**Example:**

```javascript
let str = "JavaScript";
let sub1 = str.slice(4, 8); // "Scri"
let sub2 = str.substring(0, 4); // "Java" (notice how it excludes the 4th character)
let sub3 = str.substr(2, 3); // "vaS"
console.log(sub1);
console.log(sub2);
console.log(sub3);
```

### Searching and Replacing

* **indexOf(searchValue, fromIndex)**: Returns the first index at which the specified `searchValue` appears in the string, starting from the optional `fromIndex`. It returns -1 if not found.
* **lastIndexOf(searchValue, fromIndex)**: Similar to `indexOf`, but it returns the last occurrence of the `searchValue`.
* **includes(searchValue, fromIndex)**: Returns true if the string includes the `searchValue`, starting from the optional `fromIndex`, and false otherwise.
* **startsWith(searchValue, fromIndex)**: Checks if the string starts with the specified `searchValue`, starting from the optional `fromIndex`.
* **endsWith(searchValue, length)**: Checks if the string ends with the specified `searchValue`, optionally considering the `length` of characters from the end.
* **replace(searchValue, newValue)**: Returns a new string with all occurrences of `searchValue` replaced by `newValue`.

**Example:**

```javascript
let str = "Hello, world!";
let index = str.indexOf("world"); // 7
let lastIndex = str.lastIndexOf("!"); // 12
let hasWorld = str.includes("world"); // true
let startsWithHello = str.startsWith("Hello"); // true
let endsWithExclamation = str.endsWith("!", 3); // true (considering only last 3 characters)
let newStr = str.replace("world", "JavaScript"); // "Hello, JavaScript!"
```

### Case Conversion

* **toUpperCase()**: Converts the string to uppercase.
* **toLowerCase()**: Converts the string to lowercase.

**Example:**

```javascript
let str = "JavaScript";
let upper = str.toUpperCase(); // JAVASCRIPT
let lower = str.toLowerCase(); // javascript
```

### Other Useful Methods

* **trim()**: Removes leading and trailing whitespace characters.
* **trimStart() or trimLeft()**: Removes leading whitespace characters.
* **trimEnd() or trimRight()**: Removes trailing whitespace characters.
* **concat(str1, str2, ...)**: Concatenates (joins) multiple strings into a new string.
* **split(separator, limit)**: Splits the string into an array of substrings based on the specified `separator`. Optionally, you can limit the number of splits with the `limit` parameter.

I hope this comprehensive explanation helps you understand and utilize string methods effectively in your JavaScript projects!

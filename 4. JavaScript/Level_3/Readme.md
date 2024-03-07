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


## JavaScript Arrays

In JavaScript, arrays are a fundamental data structure used to store an ordered collection of items of any data type. They offer a flexible way to group and manage related information. Here's a deep dive into arrays in JavaScript:

### Creating Arrays

* **Array literal:** This is the most common and concise way to create an array. You use square brackets `[]` and list the elements separated by commas.

```javascript
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2.5, 3];
let mixedArray = [true, "hello", null];
```

* **`new Array()` constructor:** This method can also be used to create arrays, but it's less preferred due to its verbosity. You can optionally pass arguments specifying the initial length or elements.

```javascript
let emptyArray = new Array(); // Creates an empty array
let prefilledArray = new Array(3); // Creates an array with 3 empty slots (length = 3)
let filledArray = new Array("kiwi", "mango"); // Creates an array with specified elements
```

### Accessing and Modifying Elements

* **Indexes:** Each element in an array has a unique numerical index, starting from 0. You can access elements using their index within square brackets.

```javascript
let fruits = ["apple", "banana", "orange"];
let firstFruit = fruits[0]; // "apple"
let lastFruit = fruits[fruits.length - 1]; // "orange" (accessing by length)
```

* **Modifying elements:** You can directly modify elements by assigning a new value to their index.

```javascript
let fruits = ["apple", "banana", "orange"];
fruits[1] = "mango"; // Replaces "banana" with "mango"
```

**Important!**

* Arrays are **dynamic**, meaning their size can change as you add or remove elements.
* JavaScript arrays are **mutable**, meaning you can modify the content of the array after it's created.

### Adding and Removing Elements

* **`push()` method:** Appends one or more elements to the end of the array and returns the new length.

```javascript
let fruits = ["apple", "banana", "orange"];
fruits.push("grapefruit"); // Adds "grapefruit" to the end
```

* **`pop()` method:** Removes and returns the last element from the array.

```javascript
let fruits = ["apple", "banana", "orange", "grapefruit"];
let lastFruit = fruits.pop(); // Removes and stores the last element 'grapefruit'
```

* **`unshift()` method:** Adds one or more elements to the beginning of the array and returns the new length.

```javascript
let fruits = ["apple", "banana", "orange"];
fruits.unshift("watermelon"); // Adds "watermelon" to the beginning
```

* **`shift()` method:** Removes and returns the first element from the array.

```javascript
let fruits = ["banana", "orange", "watermelon"];
let firstFruit = fruits.shift(); // Removes and stores the first element
```

* **`splice()` method:** This versatile method allows you to insert, remove, or replace elements at any specified position in the array.

```javascript
let fruits = ["apple", "banana", "orange", "mango"];

// Remove the element at index 1 (banana)
let removedFruit = fruits.splice(1, 1);
console.log(fruits); // ["apple", "orange", "mango"]
console.log(removedFruit); // ["banana"]

// Insert "kiwi" at index 2
fruits.splice(2, 0, "kiwi");
console.log(fruits); // ["apple", "orange", "kiwi", "mango"]

// Replace "mango" with "grapefruit" at index 3
fruits.splice(3, 1, "grapefruit");
console.log(fruits); // ["apple", "orange", "kiwi", "grapefruit"]
```

### Additional Array Methods

JavaScript provides a rich set of built-in methods for working with arrays. Here are some commonly used ones:

* **`join(separator)`:** Creates and returns a new string by concatenating all array elements, separated by the specified `separator` (e.g., comma by default).
* **`slice(start, end)`:** Extracts a section of the array and returns a new array.
* **`concat(array1, array2, ...)`:** Creates and returns a new array by merging two or more arrays.
* **`indexOf(searchElement, fromIndex)`:** Searches for the first occurrence of the `searchElement` and returns its index, or -1 if not found.
* **`lastIndexOf(searchElement, fromIndex)`:** Similar to `indexOf`, but returns the last occurrence.


*I hope this is helpful for you!*



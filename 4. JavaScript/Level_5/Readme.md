# Level-5 JavaScript

## JavaScript Objects

Objects are fundamental building blocks used to store data and organize it in a meaningful way. You can think of them as containers that hold collections of key-value pairs.

Here's a breakdown of key concepts about objects in JavaScript:

### Properties and Methods

* An object is a collection of properties. Each property has a name (key) and a value. The value can be any data type, including strings, numbers, booleans, arrays, or even other objects.
* Methods are special properties that contain functions. These functions can operate on the object's data or perform actions related to the object.

### Creating Objects

There are two main ways to create objects in JavaScript:

* **Object literal syntax:** This is the most common way. You use curly braces `{}` to enclose a list of key-value pairs separated by commas.

```javascript
const person = {
  firstName: "Alice",
  lastName: "Smith",
  age: 30
};
```

* **Object constructor:** You can use the `new Object()` constructor to create an empty object. However, the object literal syntax is generally preferred for readability.

### Accessing Properties and Methods

* You can access an object's property using its name enclosed in dot notation (`.`) or bracket notation (`[]`). Bracket notation is useful when the property name is a variable or contains special characters.

```javascript
const name = person.firstName; // Accessing property using dot notation
const age = person["age"];  // Accessing property using bracket notation
```

* Methods are invoked using the same syntax as accessing properties, followed by parentheses `()`.

```javascript
person.greet();  // Assuming there's a greet method defined on the person object
```

### Object Inheritance

* Objects can inherit properties and methods from other objects. This is a powerful mechanism for code reusability. In JavaScript, inheritance is prototypal-based.

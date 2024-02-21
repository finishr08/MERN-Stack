# CSS
## Cascading Style Sheet
### Level 2

**Universal Selector (`*`)**

- Selects all elements on the page. Use sparingly due to potential performance implications and specificity conflicts.

```css
/* (Avoid using this in practice - highly discouraged) */
* {
  color: red; /* Applies red color to all elements */
}
```

**ID Selector (`#`)**

- Selects a unique element identified by its `id` attribute. Must be unique within the document.

```css
<h1 id="main-heading">This is the main heading</h1>

#main-heading {
  font-size: 2em;
  text-align: center;
}
```

**Class Selector (`.`)**

- Selects elements with a specified class attribute value. Multiple elements can share the same class.

```css
<p class="important">This is important information.</p>
<div class="error-message">Error! Please fix this.</div>

.important {
  font-weight: bold;
}

.error-message {
  color: red;
  border: 1px solid red;
}
```

**Descendant Selector (` `)**

- Selects elements that are descendants (including children) of another element.

```css
<div class="container">
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
</div>

.container ul li {
  background-color: lightblue;
}
```

**Child Combinator (`>`)**

- Selects only direct children of another element. More specific than the descendant selector.

```css
<div class="parent">
  <p>Not a direct child</p>
  <span>Direct child</span>
</div>

.parent > span {
  color: green;
}
```

**Sibling Combinators (`+`, `~`)**

- `+`: Selects an element directly following another element (adjacent sibling).
- `~`: Selects any sibling element of another element, in order.

```css
<ol>
  <li>Item 1</li>
  <li class="highlighted">Item 2</li>
  <li>Item 3</li>
</ol>

li + li.highlighted {
  font-style: italic; /* Applies to Item 3 */
}

li ~ .highlighted {
  font-size: 1.2em; /* Applies to Item 3 but also other highlighted items, if any */
}
```

**Attribute Selectors (`[]`)**

- Select elements based on the presence or value of specific attributes.

```css
<div id="product" data-price="19.99">Buy now!</div>

[data-price="19.99"] {
  background-color: yellow;
}

[data-price] { /* Selects any element with a `data-price` attribute */
  border: 1px solid black;
}

div[id^="product"] { /* Selects any `div` element whose `id` starts with "product" */
  padding: 10px;
}
```


**Pseudo-classes**

- **:hover** Applies styles when the user hovers over an element with the cursor. 

```css
button:hover {
  background-color: lightblue;
}
```

- **:active** Applies styles when the user clicks or presses on an element. 

```css
a:active {
  color: blue;
}
```

- **:checked** Applies styles to checked radio buttons, checkboxes, and `<input type="checkbox">` elements. 

```css
input[type="checkbox"]:checked {
  border-color: green;
}
```

- **:nth-of-type(n)** Applies styles to an element based on its position within a group of siblings. `n` can be a number (e.g., `:nth-of-type(2)` for the second element), `odd`, or `even`. 

```css
li:nth-of-type(even) {
  background-color: lightgray;
}
```

**Pseudo-elements**

- **::first-letter** Applies styles to the first letter of an element (only block-level elements). Example:

```css
p::first-letter {
  font-size: 1.5em;
  color: red;
}
```

- **::first-line** Applies styles to the first line of an element (only block-level elements). Example:

```css
h2::first-line {
  text-decoration: underline;
}
```

- **::selection** Applies styles to selected text. Example:

```css
::selection {
  background-color: lightblue;
  color: white;
}
```

**Cascading**

- Imagine stylesheets "cascading" down on your document, like a waterfall.
- Rules from later stylesheets or within the same stylesheet but declared later have higher priority.

```css
/* Style in main.css */
h1 { color: blue; }

/* Style in specific.css */
h1 { color: green; }
```

In this case, the `h1` element will be green because `specific.css` comes later.

**Specificity**

- When styles have the same origin and order, specificity determines which one wins.
- Specificity is calculated using a weighted system based on the type of selectors.
    - Inline styles (highest) > IDs > Classes > Attributes > Pseudo-classes > Elements

```css
/* Inline style */
<h1 style="color: red;">Heading</h1>

/* ID selector */
#special-heading { color: blue; }

/* Class selector */
.bold-text { color: green; }
```

The `h1` heading will be red due to inline style having the highest specificity.

**Inheritance**

- Some CSS properties can be inherited by child elements from their parents.
- This helps maintain consistency and reduces repetition.
- Not all properties are inherited (e.g., `color`, `margin`).


```css
p { font-size: 16px; }

span { /* inherits font-size from parent `p` */}
```

The `<span>` element will have a font size of 16px due to inheritance.

**!important**

- Use `!important` sparingly to override all other styles and force a rule's application.
- It's generally considered bad practice due to difficulty in maintaining and debugging.


### Code Examples

**Hover effect with button**

```html
<button class="my-button">Hover me!</button>
```

```css
.my-button:hover {
  background-color: lightblue;
  color: white;
}
```

**Checkboxes with different colors**

```html
<input type="checkbox" id="checkbox1" name="checkboxes">
<input type="checkbox" id="checkbox2" name="checkboxes">
```

```css
input[type="checkbox"]:checked {
  background-color: green;
}

#checkbox2:checked {
  background-color: blue;
}
```

**First letter highlighting**

```html
<p>This is a paragraph with a highlighted first letter.</p>
```

```css
p::first-letter {
  font-size: 1.5em;
  color: red;
}
```

*I hope this help you!*
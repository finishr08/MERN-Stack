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
*I hope this help you!*
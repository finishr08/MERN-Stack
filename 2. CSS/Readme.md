# CSS
## Cascading Style Sheet

CSS (Cascading Style Sheets) is a powerful and versatile language that allows you to control the presentation of your web pages, separate from their content. This separation of concerns improves maintainability, readability, and reusability of your code.

There are three main ways to apply CSS to HTML elements:

**Inline CSS**

- Ideal for unique styles applied to a single element:

  ```html
  <h1 style="color: #f00; background-color: #0f0">This heading is red on green!</h1>
  ```
- Use sparingly due to limited maintainability and potential style overrides.

**Internal CSS**

- Suitable for styling a single HTML page within its `<head>` section:

  ```html
  <head>
    <style>
      h1 {
        color: blue;
        background-color: lightblue;
        font-size: 2em;
      }
      p {
        color: green;
        font-style: italic;
      }
    </style>
  </head>
  ```
- Offers better organization compared to inline CSS.

**External CSS**

- The preferred approach for styling multiple HTML pages:

  ```html
  <head>
    <link rel="stylesheet" href="styles.css">
  </head>
  ```
- Create a separate `.css` file containing your CSS rules:

  ```css
  body {
    font-family: sans-serif;
    background-color: #eee;
  }
  h1 {
    color: #f00;
    text-align: center;
  }
  p {
    line-height: 1.5;
  }
  ```

- Promotes reusability and maintainability.

**CSS Syntax**

- Declarations (rules) consist of selector(s) followed by curly braces `{}` containing property-value pairs separated by semicolons `;`:

  ```css
  selector {
    property: value;
  }
  ```
  
- Selectors target specific HTML elements using various patterns:
  - **Element type:** `h1`, `p`, `div`
  - **Class:** `.my-class`
  - **ID:** `#unique-id`
  - **Combinations:** `h1.special`, `div > p`
- Properties define characteristics like color, background, font, and more:
  - `color`: Set text color using color names (`red`, `blue`), HEX codes (`#f00`), RGB/RGBA functions (`rgb(255, 0, 0)`, `rgba(255, 0, 0, 0.5)`), HSL/HSLA (`hsl(0, 100%, 50%)`, `hsla(0, 100%, 50%, 0.5)`).
  - `background-color`: Set element background color using the same methods as `color`.
  - **Other properties:** Explore the vast CSS property set for various styling options.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>This is a red heading</h1>
  <p class="special">This paragraph is blue and italicized.</p>
</body>
</html>
```

```css
/* styles.css */
body {
  font-family: Arial, sans-serif;
}

h1 {
  color: red;
  text-align: center;
}

.special {
  color: blue;
  font-style: italic;
}
```

**Text Align Property**

- Controls the horizontal alignment of text within an element.
- Values:
    - `left` (default): Aligns text to the left.
    - `right`: Aligns text to the right.
    - `center`: Centers text.
    - `justify`: Aligns text to both the left and right margins, creating a block of text with even edges.

```css
p {
  text-align: center; /* Center all paragraphs */
}

h1 {
  text-align: right; /* Align headings to the right */
}
```

**Units in CSS**

- Used to specify values for various properties, including text-related ones.
- Common units:
    - `px` (pixels): Absolute unit based on screen resolution.
    - `em`: Relative unit based on the current font size.
    - `%`: Percentage of the parent element's value.
    - `pt` (points): Equal to 1/72 of an inch.
    - `rem`: Relative unit based on the root font size.

```css
p {
  font-size: 16px; /* Absolute font size in pixels */
  line-height: 1.5em; /* Relative line height based on font size */
}
```

**Line Height**

- Specifies the vertical spacing between lines of text.
- Values:
    - `normal`: Default line height.
    - `<number>`: Unitless value multiplied by the font size.
    - `<length>`: Specific length value (e.g., `px`, `em`, `rem`).
    - `<percentage>`: Relative to the font size.

```css
p {
  line-height: 1.6; /* 1.6 times the font size */
}

h2 {
  line-height: 30px; /* Specific line height in pixels */
}
```

**Letter Spacing**

- Adjusts the spacing between individual characters.
- Values:
    - `normal`: Default spacing.
    - `<length>`: Specific length value (e.g., `px`, `em`).

```css
p {
  letter-spacing: 0.1em; /* Slightly wider letter spacing */
}

.title {
  letter-spacing: 5px; /* Wider letter spacing for a title */
}
```

**Font Family**

- Specifies the font to be used for text.
- Values:
    - List of font names, separated by commas.

```css
body {
  font-family: Arial, sans-serif; /* Use Arial, fallback to sans-serif */
}

h1 {
  font-family: "Times New Roman", serif; /* Use Times New Roman, fallback to serif */
}
```

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

Remember that CSS has immense capabilities beyond these basics. Experiment and explore to personalize your web pages with visual flair and structure!

*I hope this help you!*
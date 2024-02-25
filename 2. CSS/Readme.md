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

## CSS Box Model

In CSS, the box model is a fundamental concept that defines the layout of an element on a webpage. It's represented as a rectangular box composed of several components:

- **Content** The actual content of the element, such as text, images, or other HTML elements.
- **Padding** An optional transparent area surrounding the content.
- **Border** An optional stylistic line surrounding the padding and content.
- **Margin** An optional transparent area surrounding the element's entire outer border.

**Height and Width:**

   - **Property** `height`, `width`
   - **Purpose** Define the content area's dimensions (excluding padding and borders).

     ```css
     .my-element {
       width: 300px;
       height: 200px;
     }
     ```

**Padding**

   - **Property** `padding` (single value for all sides) or `padding-top`, `padding-right`, `padding-bottom`, `padding-left` (individual values for each side)
   - **Purpose** Creates a transparent space between the content and the border.

     ```css
     .my-element {
       padding: 10px; /* 10px on all sides */
     }
     ```


     ```css
     .my-element {
       padding-top: 20px;
       padding-right: 15px;
       padding-bottom: 10px;
       padding-left: 5px;
     }
     ```

**Border**

   - **Properties** `border-style`, `border-width`, `border-color` (individually or combined)
   - **Purpose** Adds a stylistic line around the element (optional for all four sides).

     ```css
     .my-element {
       border: 2px solid red;
     }
     ```

**Margin**

   - **Property** `margin` (single value for all sides) or `margin-top`, `margin-right`, `margin-bottom`, `margin-left` (individual values for each side)
   - **Purpose** Creates a transparent space outside the element's entire outer border.

     ```css
     .my-element {
       margin: 20px; /* 20px on all sides */
     }
     ```


     ```css
     .my-element {
       margin-top: 30px;
       margin-right: 25px;
       margin-bottom: 20px;
       margin-left: 15px;
     }
     ```

**Border Radius**

   - **Property** `border-radius`
   - **Purpose** Rounds the corners of the element's border.

     ```css
     .my-element {
       border-radius: 10px; /* Sets a 10px rounded corner for all four corners */
     }
     ```

   - **Advanced usage** Specify individual values for each corner using `border-top-left-radius`, `border-top-right-radius`, `border-bottom-left-radius`, and `border-bottom-right-radius`.

### Inline Styles

- **Purpose** Apply styles directly to an HTML element within its opening or closing tag using the `style` attribute.
- **Pros** Simple for small changes, no need for separate CSS files.
- **Cons** Overrides external styles, affects readability and maintainability for larger projects.

```html
<h1 style="color: red; font-size: 20px;">This is a heading</h1>
```

### Relative Units

- **Purpose** Define measurements relative to a baseline value, allowing for layout adjustments based on other elements or the overall design.
- **Types**
    - **`em`** Relative to the **font size of the parent element**.
    - **`rem`** Relative to the **font size of the root element (usually `html`)**.
    - **`%`** Relative to the **width or height of the containing element**.
- **Benefits**
    - **Responsiveness** Adapt to different screen sizes and user preferences.
    - **Maintainability** Avoids hard-coded pixel values, making updates easier.

```css
/* Using em */
.paragraph {
  font-size: 1.2em;  /* 1.2 times the parent's font size */
}

/* Using rem */
h2 {
  font-size: 1.5rem;  /* 1.5 times the root element's font size */
}

/* Using percentage */
.container {
  width: 80%; /* 80% of its parent's width */
}
```

### em vs. rem

Both `em` and `rem` are relative units used to scale elements based on another element's size. However, they differ in their reference point:

- **`em`** Base on the **immediate parent element's font size**. This can lead to cascading growth if nested deeply, where sizes grow exponentially and become difficult to control.
- **`rem`** Base on the **root element's (usually `html`) font size**. This offers a more consistent scale across the entire document, reducing the risk of cascading growth and making it easier to adjust the overall font size.

**General Recommendation** Use `rem` in most cases for better maintainability and predictable scaling behavior.

### Alpha Channel

The alpha channel is a value associated with a color representing its transparency level. It's part of the RGBA (Red, Green, Blue, Alpha) color format. The alpha value ranges from 0.0 (fully transparent) to 1.0 (fully opaque).

**Example** `rgba(255, 0, 0, 0.5)` defines a red color with 50% opacity.

**Note** While "alpha" is often used to describe transparency, it's not a separate CSS property. Instead, you use the `opacity` property for direct control. 

### Opacity Property

The `opacity` property controls the transparency of an element, independent of its color. It accepts values similar to the alpha channel, with:

- `0.0`: Fully transparent (invisible)
- `1.0`: Fully opaque (solid)
- Values between 0.0 and 1.0: Varying levels of transparency


```css
.box {
  background-color: blue;
  opacity: 0.5; /* Semi-transparent blue box */
}
```

### Transitions Property

The `transition` property allows you to animate changes in CSS properties over time. It takes a combination of sub-properties to define the animation:

 - `transition-property`: Specifies which CSS properties to animate (e.g., `opacity`, `background-color`).
 - `transition-duration`: Defines the animation duration in seconds (e.g., `1s`).
 - `transition-timing-function`: Controls the animation speed curve (e.g., `ease-in-out`).


```css
.button {
  background-color: blue;
  padding: 10px;
  transition: background-color 0.5s ease-in-out; /* Transition on hover */
}

.button:hover {
  background-color: green; /* Hover effect with transition */
}
```

*In this example, hovering over the button smoothly changes its background color from blue to green over 0.5 seconds with an "ease-in-out" timing function.*

**Combining Opacity and Transitions**

You can combine opacity with transitions to create smooth fading effects.

```css
.image {
  opacity: 0.5; /* Initial opacity */
  transition: opacity 1s ease-in-out; /* Transition on hover */
}

.image:hover {
  opacity: 1.0; /* Full opacity on hover */
}
```

*This code creates an initially semi-transparent image that fades to full opacity when hovered over.*

## Transform CSS

The `transform` property in CSS allows you to manipulate the visual appearance of an element by applying various transformations in 2D or 3D space. These transformations can significantly enhance the visual appeal and interactivity of your web pages. Here's a breakdown of the key aspects:

**Types of Transformations**

- **Translation:** Moving an element in horizontal (using `translateX`) or vertical (using `translateY`) directions.
- **Rotation:** Rotating an element around a specific point (using `rotate`).
- **Scale:** Resizing an element, making it larger (`scaleX` and `scaleY`) or smaller.
- **Skew:** Tilting an element along horizontal (`skewX`) or vertical (`skewY`) axes.

**Applying Transformations**

The `transform` property accepts one or more transformation functions combined in a comma-separated list. The order of the functions matters, as they are applied from right to left:

```css
.element {
  transform: translateX(20px) rotate(45deg); /* Move right 20px, then rotate clockwise 45 degrees */
}
```

**Additional Properties**

- `transform-origin`: Defines the point around which the transformations are applied. Defaults to the element's center.
- `perspective`: Creates a 3D perspective effect for elements with `transform` functions like `rotateX`, `rotateY`, and `rotateZ`.

```css
.box {
  width: 100px;
  height: 100px;
  background-color: blue;
  transition: transform 0.5s ease-in-out; /* Add transition for smooth animation */
}

.box:hover {
  transform: scale(1.2) rotate(10deg); /* Hover effect: slightly larger and rotated */
}
```

*This code creates a blue box that slightly scales up (120%) and rotates 10 degrees when hovered over with a smooth transition effect.*


## Position Property

The `position` property in CSS determines how an element is positioned in a document. It works in conjunction with other properties like `top`, `right`, `bottom`, and `left` to define the element's final location. Here's a breakdown of different `position` values:

**Static (Default)**

This is the default behavior. The element remains in the normal document flow, maintaining its position relative to its surrounding elements. Changing `top`, `right`, `bottom`, and `left` properties will have no effect on a statically positioned element.

**Relative**

The element remains in the normal document flow, but you can use `top`, `right`, `bottom`, and `left` properties to offset its position **relative to its original position**. These offsets are added to the element's original position in the document.


```css
.box {
  position: relative;
  top: 50px;
  left: 20px;
  background-color: blue;
  padding: 10px;
}
```

This code creates a blue box with `position: relative`, then uses `top: 50px` and `left: 20px` to move it 50 pixels down and 20 pixels to the left from its original position.

**Absolute**

An absolutely positioned element is **removed from the normal document flow** and positioned **relative to its nearest containing block** (usually the closest parent element with a non-static `position`). You can use `top`, `right`, `bottom`, and `left` properties to define its absolute position within the containing block.


```css
.container {
  position: relative; /* This creates the containing block */
  width: 300px;
  height: 200px;
  border: 1px solid black;
}

.absolute-box {
  position: absolute;
  top: 20px;
  left: 50px;
  background-color: red;
  padding: 10px;
}
```

Here, the `.container` establishes a containing block with a border. The `.absolute-box` element has `position: absolute` and uses `top: 20px` and `left: 50px` to position it 20 pixels down and 50 pixels to the left from the top-left corner of the container.

**Fixed**

Similar to absolute positioning, an element with `position: fixed` is **removed from the normal document flow** and positioned **relative to the viewport** (the browser window). Its position remains fixed, regardless of scrolling, creating elements like fixed toolbars or sidebars.


```css
.fixed-element {
  position: fixed;
  top: 10px;
  right: 10px;
  background-color: green;
  padding: 10px;
}
```

*This creates a green element positioned 10 pixels from the top right corner of the viewport, staying fixed even when you scroll the page.*

**Sticky (Not fully supported in older browsers)**

A sticky element behaves like a mix of relative and fixed positioning. It starts **positioned relative** to its container and becomes **fixed** when it reaches a specific scroll position. This is commonly used for headers or navigation bars that stick to the top of the page when scrolling down.


```css
.sticky-header {
  position: sticky;
  top: 0; /* Sticks to the top initially */
  background-color: yellow;
  padding: 10px;
}
```

*Remember, browser support for different `position` values may vary. Always check compatibility if using these properties in older browsers.*

## Flex Box Model

**Flexbox** is a CSS layout model that allows you to create flexible and responsive layouts. It's often used to align items horizontally or vertically, distribute space between items, and create complex layouts without using floats or positioning.

**Key Concepts**

- **Flex Container** The element that holds the flex items. You make an element a flex container using `display: flex` or `display: inline-flex`.
- **Flex Items** The children of the flex container.
- **Main Axis** The direction in which the flex items are laid out. It's determined by the `flex-direction` property.
- **Cross Axis** The perpendicular direction to the main axis.

**Flex Directions (`flex-direction`)**

This property controls the direction in which flex items are laid out within the flex container. Common values include:

- **row** (default) Items are arranged horizontally from left to right.
- **row-reverse** Items are arranged horizontally from right to left.
- **column** Items are arranged vertically from top to bottom.
- **column-reverse** Items are arranged vertically from bottom to top.


```css
.container {
  display: flex;
  flex-direction: column; /* Items will be arranged vertically */
}
```

**Justify Content (`justify-content`)**

This property controls how flex items are distributed along the main axis in a flex container. Common values include:

- **flex-start** Items are aligned to the start of the main axis.
- **flex-end** Items are aligned to the end of the main axis.
- **center** Items are centered along the main axis.
- **space-between** Items are evenly distributed with space between them.
- **space-around** Items are evenly distributed with space around them (including outer edges).


```css
.container {
  display: flex;
  justify-content: space-around; /* Items will have equal space around them */
}
```

**flex-wrap**

- Controls whether items wrap to multiple lines when they don't fit on a single line.

**Values**

- `wrap`: Items wrap to multiple lines.
- `no-wrap`: Items stay on a single line, overflowing if necessary.
- `wrap-reverse`: Similar to `wrap`, but wraps in the opposite direction.


```html
<div class="container flex-wrap">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<div class="container no-wrap">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

**align-items**

- Controls how items are aligned on the cross axis (perpendicular to `flex-direction`).

**Values**

- `flex-start`: Align items at the start of the cross axis.
- `flex-end`: Align items at the end of the cross axis.
- `center`: Center items on the cross axis.
- `stretch`: Stretch items to fill the container height.
- `baseline`: Align items along their baselines.


```html
<div class="container flex-start">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<div class="container flex-end">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

**align-content**

- Controls how multiple lines of items are aligned within the container (only relevant with `flex-wrap`).

**Values**

- `flex-start`: Align lines at the start of the container.
- `flex-end`: Align lines at the end of the container.
- `center`: Center lines within the container.
- `stretch`: Stretch lines to fill the container height.
- `space-between`: Distribute space evenly between lines.
- `space-around`: Distribute space evenly around lines.


```html
<div class="container flex-wrap space-between">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<div class="container flex-wrap space-around">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

**align-self**

- Overrides the `align-items` property for individual items.

**Values** Same as `align-items` plus `auto`:

- `auto`: Inherits the `align-items` property.


```html
<div class="container flex-start">
  <div>Item 1</div>
  <div style="align-self: flex-end;">Item 2 (right-aligned)</div>
  <div>Item 3</div>
</div>
```

These are just a few of the possibilities! Experiment with different combinations to achieve the desired layout for your flexbox elements.


*I hope this help you!*
## Level-5 CSS

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

*I hope this helpfyl for you!*

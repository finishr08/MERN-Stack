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

*I hope this helpfyl for you!*

## Level-6 CSS
## CSS Animations and their Properties

CSS animations allow you to create smooth transitions between different styles on your web page elements. It's a powerful tool for adding visual interest and interactivity to your website. Here's a breakdown of animations and their key properties:

**@keyframes Rule**

This rule defines the animation itself. You specify the initial and end states (keyframes) of the animation, along with any intermediate stages for a smoother transition.


```css
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

In this example, the `spin` animation rotates an element from 0 degrees to 360 degrees.

**Animation Property**

This property combines several animation properties into a single declaration, making your code cleaner and easier to manage.

**Sub-properties**

- `animation-name`: Refers to the name of the animation defined using `@keyframes`.
- `animation-duration`: Specifies the time it takes for a single cycle of the animation to complete (e.g., `1s`).
- `animation-timing-function`: Controls the speed curve of the animation (e.g., `ease-in-out`).
- `animation-delay`: Defines a delay before the animation starts (e.g., `0.5s`).
- `animation-iteration-count`: Specifies how many times the animation should repeat (e.g., `infinite`).
- `animation-direction`: Controls the direction of the animation (e.g., `normal`, `reverse`, `alternate`).


```css
.my-element {
  animation: spin 2s ease-in-out 1s alternate;
}
```

Here, the `my-element` class applies the `spin` animation with a duration of 2 seconds, an ease-in-out timing function, starts after 1 second delay, alternates direction each cycle, and maintains the final rotation (forwards) after ending.

**Animatable Properties**

Almost any CSS property can be animated, including:

- `Transform`: Move, rotate, scale, and skew elements.
- `Opacity`: Fade elements in and out.
- `Background-color`: Change the element's background color.
- `Height/Width`: Resize elements dynamically.


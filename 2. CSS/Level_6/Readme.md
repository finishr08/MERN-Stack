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

## Media Queries

Media queries are a powerful tool in CSS that allows you to **apply different styles to your website depending on the device or viewing environment** it's being accessed from. This is crucial for creating a **responsive web design (RWD)**, where your website adapts seamlessly to different screen sizes, devices, and orientations.

Here's a breakdown of what media queries are and how they work:

**The @media Rule**

The cornerstone of media queries is the `@media` rule. This rule acts as a container that holds the conditions you want to check and the CSS styles that will be applied if those conditions are met.


```css
@media media_query {
  /* CSS styles to be applied if the media query is true */
}
```

**Media Types and Media Features**

- **Media types** These specify the general type of device or output the website is intended for, such as `screen` (for computers and mobile screens), `print` (for printing), and `speech` (for screen readers).
- **Media features** These provide more specific details about the viewing environment, such as screen size, resolution, color depth, orientation, and even user preferences.

Here are some commonly used media features:

- `max-width` and `min-width`: Used to check for the maximum or minimum width of the viewport (viewable area).
- `orientation`: Checks for portrait or landscape mode.
- `resolution`: Checks for screen resolution (e.g., `device-pixel-ratio: 1.5` for high-resolution screens).
- `color`: Checks for the number of colors the display can support.


Let's see how we can use a media query to change the font size of a heading depending on the screen size:

```css
@media (max-width: 768px) {
  h1 {
    font-size: 1.5rem;
  }
}

@media (min-width: 768px) {
  h1 {
    font-size: 2rem;
  }
}
```

In this example:

- We check for two different conditions using separate `@media` rules.
- The first rule applies only when the screen width is **less than or equal to 768px** (typical for mobile devices).
- The second rule applies only when the screen width is **greater than or equal to 768px** (typical for tablets and desktops).

*This way, the heading font size is adjusted for different screen sizes, ensuring better readability on both mobile and larger screens.*


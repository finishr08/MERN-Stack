## Level 3-CSS
## CSS Box Model Explained

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

*I hope this helpful to you!*
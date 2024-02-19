
# Level 3 HTML

This document serves as a guide for your Level 3 HTML journey, introducing fundamental tags for structuring and formatting web content.

## Key Concepts

## Table Tags

- `table` Defines the main container for the table structure.
- `th` Represents a table header cell, typically used for column titles.
- `tr` Defines a table row, containing cells (th or td).
- `td` Represents a table data cell, holding the actual information displayed in the table.

**Grouping Elements**

- `thead` Defines the table header section, usually containing th elements for column headers.
- `tbody` Defines the table body section, containing tr elements with actual table data (td elements).
- `tfoot` Defines the table footer section, often used for summary information or notes.

**Attributes**

- `colspan` Specifies the number of columns a cell should span (horizontally).
- `rowspan` Specifies the number of rows a cell should span (vertically).

**Context**

These elements and attributes work together to build structured tables in HTML. 

```html
<table>
  <thead>
    <tr>
      <th>Product</th>
      <th>Price</th>
      <th>Quantity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>T-shirt</td>
      <td>$10</td>
      <td>2</td>
    </tr>
    <tr>
      <td colspan="2">Subtotal</td>
      <td>$20</td>
    </tr>
  </tbody>
</table>
```

*This code creates a table with a header row (thead) containing product, price, and quantity columns. The body (tbody) has two data rows, and the last row uses "colspan=2" to combine the "Product" and "Price" cells for the subtotal.*

**Forms**

- In HTML, forms create sections where users can interact with your webpage by entering data or making selections.
- The primary element is `<form>`, which encloses the form's components and specifies attributes like:
    - `action`: Where the form's data will be sent (e.g., a server script).
    - `method`: How the data will be transmitted (e.g., `POST` or `GET`).
    - `id`: A unique identifier for the form.

**Inputs**

- Input elements (`<input>`) allow users to provide text, choose options, or perform actions.
- Common `<input>` types include:
    - `text`: Single-line text input.
    - `password`: Password-masked text input.
    - `email`: Email-specific input, often validated.
    - `checkbox`: Single checkbox (`checked` attribute for selection).
    - `radio`: Radio buttons (only one selectable in a group with the same `name`).
    - `submit`: Button that submits the form data.
    - `button`: Generic button for various actions (often needs JavaScript).
- Use the `type` attribute to specify the input type.
- Other attributes:
    - `name`: Identifies the input for data processing.
    - `id`: A unique identifier for the input.
    - `value`: Initial value displayed in the input.
    - `placeholder`: Hint text displayed when the input is empty.

**Range input**

- The `<input type="range">` element represents a slider control for selecting a numeric value within a given range.
- Useful for settings like volume, brightness, or choosing a rating.
- Attributes:
    - `min`: The minimum allowed value (default: 0).
    - `max`: The maximum allowed value (default: 100).
    - `step`: The increment between values (default: 1).
    - `value`: The initial selected value.


```html
<label for="volume">Volume:</label>
<input type="range" id="volume" name="volume" min="0" max="100" value="50">
```

**Textarea input**

- The `<textarea>` element creates a multi-line text input field.
- Useful for longer text input like comments, descriptions, or messages.
- Attributes:
    - `name`: Identifies the textarea for data processing.
    - `id`: A unique identifier for the textarea.
    - `rows`: The initial number of visible text rows (default: 2).
    - `cols`: The initial number of visible text columns (default: 20).
    - `placeholder`: Hint text displayed when the textarea is empty.


```html
<label for="message">Message:</label>
<textarea id="message" name="message" rows="5" cols="30" placeholder="Enter your message here"></textarea>
```

**Additional input types**

- `date`: Input for selecting a date (YYYY-MM-DD).
- `datetime-local`: Input for selecting both date and time (YYYY-MM-DDTHH:mm).
- `file`: Input for uploading files.
- `hidden`: Hidden input, often used for storing pre-filled data.
- `image`: Input for submitting an image (deprecated, use `<button>` and image as background).
- `month`: Input for selecting a month (YYYY-MM).
- `number`: Input for numeric values, often with validation and formatting.
- `search`: Input for search-specific queries.
- `tel`: Input for phone numbers, often with validation and formatting.
- `time`: Input for selecting a time (HH:mm).
- `url`: Input for URLs, often with validation.
- `week`: Input for selecting a week (YYYY-W).

**Placeholders**

- The `placeholder` attribute provides a hint or example value within an input.
- It disappears when the user starts typing.
- Useful for prompting users and improving form usability.

**IDs**

- The `id` attribute assigns a unique identifier to an element.
- Used for:
    - Styling elements with CSS (e.g., `#myInput { color: blue; }`).
    - Referencing elements directly in JavaScript (e.g., `document.getElementById("myInput").value`).

**Buttons**

- `<button>` creates clickable buttons.
- Use the `type` attribute to define the button's behavior:
    - `submit`: Submits the form data.
    - `button`: Generic button for custom actions (often requires JavaScript).
- Other attributes:
    - `value`: Text displayed on the button.
    - `disabled`: Disables the button if set.


```html
<form action="/signup" method="post">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" placeholder="Enter your username">
  <br>
  <label for="password">Password:</label>
  <input type="password" id="password" name="password" placeholder="Enter your password">
  <br>
  <button type="submit">Sign Up</button>
</form>
```

*Remember that CSS can be used to style forms for a better user experience. I hope this explanation is helpful!*


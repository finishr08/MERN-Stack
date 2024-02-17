
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

These elements and attributes work together to build structured tables in HTML. For example:

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
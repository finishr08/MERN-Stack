# Level 2 HTML

This document serves as a guide for your Level 2 HTML journey, introducing fundamental tags for structuring and formatting web content.

## Key Concepts

### Heading Tags

**Inline vs. Block Elements**

- Inline elements sit on the same line, flow around other content, and have no line breaks before or after themselves. 

**Examples:**

```html
`b`, `i`, `a`, `span`, `sup`, `sub`.
These are Inline Elements.
```

- Block elements start on a new line, take up the full width available, and have line breaks before and after themselves. 

**Examples:** 

```html
`p`, `h1`, `h2`, `div`, `ul`, `ol`, `table`
These are Block Elements.
```

I'd be glad to provide a comprehensive response encompassing the best aspects of previous responses and addressing their shortcomings:

**Horizontal Rule (`<hr>`)**

- Creates a thematic break, visually separating content sections.
- No closing tag required.

**Example:**

```html
<p>This is the first section.</p>
<hr>
<p>This is the second section.</p>
```

**Inline Span (`<span>`)**

- Used to group inline elements with a specific style or attribute.
- No closing tag required.
- Attributes:
    - `style`: Applies CSS styles.
    - `id`: Uniquely identifies the element.
    - `class`: Assigns a class for shared styles.

**Example:**

```html
<p>This is a sentence with <span style="color: red; font-weight: bold;">important information</span>.</p>
```

**Block-Level Division (`<div>`)**

- Generic container for content sections.
- Both opening and closing tags required.
- Attributes:
    - `style`: Applies CSS styles.
    - `id`: Uniquely identifies the element.
    - `class`: Assigns a class for shared styles.

**Example:**

```html
<div class="container">
  <h1>Welcome to my website!</h1>
  <p>Here's some content.</p>
</div>
```

**Superscript (`<sup>`)**

- Displays text half a character above the baseline, often for footnotes or exponents.
- Requires closing tag.
- No specific attributes.

**Example:**

```html
The formula for water is H<sub>2</sub>O.
```

**Subscript (`<sub>`)**

- Displays text half a character below the baseline, often for chemical formulas or indices.
- Requires closing tag.
- No specific attributes.

**Example:**

```html
The subscript '2' in X<sub>2</sub> indicates diatomic oxygen.
```

**Remember:**

- HTML is case-sensitive (e.g., `<div>` is different from `<DIV>`).
- Attributes go inside the opening tag (e.g., `<a href="https://example.com">Link</a>`).
- Use meaningful tag names and appropriate attributes.

*I hope this helps!*

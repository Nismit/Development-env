---
title: CSS 
---

## Formatting

- DO NOT USE ID SELECTOR(S)
- Use 2 spaces for indentation
- Use BEM + SMACSS naming convention for class name
- Put a space between class selector(s) and opening brace `{`
- Put a space after `:` in properties
- Put closing brace `}` on a new line
- Put a blank line between declarations

**Bad**

```css
.block{
    width: 100px;
    border:1px solid #000;}
.block,.block2{
  //
}
#block {
  //
}
```

**Good**

```css
.block {
  width: 100px;
  border: 1px solid #000;
}

.block, .block2 {
  //
}
```
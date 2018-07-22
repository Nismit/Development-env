---
title: SCSS
---

Use partial Sass files, all partial files should include `style.scss`

## Comments

- Basically, use double slash `//`
- Write comments, it will help everyone ;)

## Syntax

- Use the `scss` syntax

### Ordering of property declarations

1. Property declarations

  List all standard property declarations, anything that isn't an `@include` or a nested selector.

  ```scss
  .parent {
    border: 1px solid #000;
    background-color: #fff;
    //
  }
  ```

2. `@include` declarations

  Grouping `@include`s at the end makes it easier to read the entire selector.

  ```scss
  .parent {
    border: 1px solid #000;
    background-color: #fff;
    @include transition(background 0.5s ease);
    //
  }
  ```

3. Nested selectors

  Put a whitespace above a nested selector

  ```scss
  .parent {
    border: 1px solid #000;
    background-color: #fff;
    @include transition(background 0.5s ease);

    &__child {
      //
    }
  }
  ```

## Variables

- Dash-cased variable names `$local-variable`
- Global variable names add the prefix `_` and based in attribute (e.g. `$_color-primary`).
- Local variable names do not need the prefix but create it in mixin or module directories.

## Mixins

If you repeat the code, you should make a mixin.
Do not forget DRY and KISS principle.

**File Name**
`_mixin-name.scss`

**Directory**
`src/sass/helper/`

### Nested Selectors

Do not nest selectors more than three levels deep.

```scss
.parent {
  // Block

  &__child {
    // Element

    &--grandchild {
      // Modifier
    }
  }
}
```

## Directory



```
./src/sass/
├── _variables.scss
├── base
│   ├── _form.scss
│   ├── _list.scss
│   ├── _reboot.scss
│   ├── _typography.scss
│   └── _utils.scss
├── components
│   ├── _container.scss
│   └── _flex.scss
├── helper
│   ├── _container.scss
│   ├── _flex.scss
│   ├── _font-size.scss
│   ├── _mediaquery.scss
│   └── function
│       ├── _em-calc.scss
│       └── _strip-unit.scss
├── layouts
│   ├── _footer.scss
│   ├── _global.scss
│   └── _header.scss
└── style.scss
```

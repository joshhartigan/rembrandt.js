rembrandt.js
============

<img src="https://raw.githubusercontent.com/joshhartigan/rembrandt.js/master/rembrandt.png">

Unoriginal, but super-simple, drawing for JavaScript.

# Usage

Include both rembrandt.js and jQuery in your html file:

```html
<script src="js/jquery.min.js"></script>
<script src="js/rembrandt.js"></script>
```

When a Rembrandt object is created, it focuses on a specific element of
the page, identified by class or id:

```html
<script>
  var rembr = new Rembrandt("#example");

  // Functions are called as follows:
  rembr.fill("#0b0b0c"); // (fill element example with #0b0b0c);
</script>
```

# Features

Here's all of the functions in rembrandt.js so far, with a short explanation:

* `rembrandt.fill(color)` - Fills the focus element with any valid CSS color.
* `rembrandt.stroke(color, [width])` - Changes the border color of the focus element, and the width (optionally).
* `rembrandt.focus(element)` - Sets the focus element for the rembrandt.js object.
* `rembrandt.size(width, height)` - Change the width and height of the focus element accordingly.
* `rembrandt.opacity(opacity)` - Set the opacity to a number, like with CSS, or a string: "transparent", "translucent", or "opaque".
* `rembrandt.move(x, y)` - Puts the focus element in position [x, y] on the page.
* `rembrandt.shape(shape)` - Change the shape of the element with a string. Currently supported: "square", "circle", "ellipse".

# Feedback

This project is designed for me to improve my web development skills. If
I've made a mistake, or something can be improved, please tell me how.

rembrandt.js
============

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
  rembr.backgroundFill("#0b0b0c"); // (fill element example with #0b0b0c);
</script>
```

# Feedback

This project is designed for me to improve my web development skills. If
I've made a mistake, or something can be improved, please tell me how.

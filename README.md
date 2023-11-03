**JAVA MINI PROJECT ONLINE COMPLIER**

# Installation

1. codemirror zip file from https://codemirror.net/5/codemirror.zip
2. Go to Bootstrap and insert it's cdn

```html
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
  crossorigin="anonymous"
></script>
<!-- Option 1: Include in HTML -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
/>
```

3. copy form layout from form components
4. Now from codemirror link the lib folder's files (code mirror.css and js)
5. from mode link clike file (it for in which language complier should work)

```html
 <!-- All css link file -->
    <link rel="stylesheet" href="codemirror-5.65.15/lib/codemirror.css">
    <link rel="stylesheet" href="codemirror-5.65.15/theme/dracula.css">
    <link rel="stylesheet" href="">

    <!-- All JS link file -->
    <script src="codemirror-5.65.15/lib/codemirror.js"></script>
    <script src="codemirror-5.65.15/mode/clike/clike.js"></script>
    <script src="codemirror-5.65.15/addon/edit/closebrackets.js"></script>
    <script src="codemirror-5.65.15/mode/python/python.js"></script>
    <script src="codemirror-5.65.15/mode/css/css.js"></script>
    <script src="codemirror-5.65.15/mode/htmlmixed/htmlmixed.js"></script>
    <script src="codemirror-5.65.15/mode/javascript/javascript.js"></script>
    <script src="codemirror-5.65.15/mode/xml/xml.js"></script>

```

6. https://github.com/scriptnull/compilex

# Welcome to the most lightweight accordeon - feather-accordeon!

> Accordeon! I'm your feather!

## The goals of this script

It's made for common case of using accordeon, when you don't need any options, when you just need an accordeon to do it's main function - to open and close panels by clicking on their control. 
Also it don't need you to know javaScript for using it. Just include it into your project - and it will work!

## Why it's brilliant? 
- no parameters
- no dependences
- no initialization needed
- no  unnecessary styles
- extremely light
- keyboard navigation support
- smooth panel opening and closing
- opened panel don't breaks on window resize

## It won't fit if:
- you want to customize its behavior with parameters
- structure of needed accordion is different from  "control is on top, content is under it"

## Getting started

Just download feather-accordeon.js  & feather-accordeon.css and include it into your project.

``` html
  <link href="./feather-accordeon.css" rel="stylesheet" type="text/css">
  <script src="./feather-accordeon.js"></script>
```

## Usage

Feather accordeon requires one condition: the html-structure should be like list of items with only two elements inside: control element and content element. Both elements may contain any content.

# example:

```html
  <ul class="accordeon">
    <li>
      <button>Click here to learn more 1</button>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos dolorem libero esse quas aspernatur officia unde laudantium vitae, facere a?
      </p>
    </li>
    <li>
      <button>Click here to learn more 2</button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis sint, sunt magni impedit enim ad tempora optio, illum aliquid, vitae nulla repudiandae! Quam consequuntur laboriosam architecto sint repellat officiis dolor!
      </p>
    </li>
    <li>
      <button>Click here to learn more 3</button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </li>
  </ul>
``` 
Now  just add class "accordeon" to items wrap element. That's all!








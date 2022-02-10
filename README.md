# Node-Crayon
Easily colour your text in terminal without pain.

# Installation
```bash
$ npm install node-crayon
```

# Usage
```javascript
// Import the module
const { rgb } = require('node-crayon');

// Print red text
console.log('I am in red!'.insertRGB(rgb(255,0,0)));

// Or import the pre-existing colours
const { red, green, blue } = require('node-crayon/colours');

// Colour text evenly 
console.log('I am in red, green and blue!'.insertRGBEvenly(red, green, blue));

// Or use your own themes
const theme = [
  rgb(255,0,0),
  rgb(0,255,0),
  rgb(0,0,255)
];

// Print text in a theme
console.log('Wow! This theme is awesome'.insertRGB(...theme));
```

# Methods
### rgb(r, g, b)
Returns an  with the given RGB values.

  rgb(255, 0, 0); // => "\u001b[38;2;255;0;0m"
  
### insertRGB(...colours)
Inserts the given colours into the string.
Every character in the string will be coloured.

Example:
```javascript
'I am in red and blue!'.insertRGB(rgb(255,0,0), rgb(0,0,255));
'I am in only red!'.insertRGB(rgb(255,0,0));
```

![img_2.png](https://raw.githubusercontent.com/thevvx/crayon/main/docs/img_2.png)

### insertRGBEvenly(...colours)
Inserts the given colours into the string.
Every character in the string will be coloured but evenly.

Example:
```javascript
'I am in red and blue!'.insertRGBEvenly(rgb(255,0,0), rgb(0,0,255));
'I am in only red!'.insertRGBEvenly(rgb(255,0,0));
```

![img.png](https://raw.githubusercontent.com/thevvx/crayon/main/docs/img.png)

### splitRGB(splitter, ...colours)
Character will be coloured by its group in the string.

Example:
```javascript
'This is text split by spaces'.splitRGB(' ', rgb(255,0,74), rgb(15,222,145));
'This--is--text--split--by--dashes'.splitRGB('--', rgb(255,0,74), rgb(15,222,145));
```

![img.png](https://raw.githubusercontent.com/thevvx/crayon/main/docs/img_3.png)

# Pre-existing colours
- red
- green
- blue
- white
- black
- yellow
- cyan
- magenta
- gray / grey
- orange
- purple
- pink
- violet
- indigo
- chartreuse
- aqua
- azure
- beige
- blueviolet
- brow
- cadetblue
- coral
- cornflowerblue
- crimson
- darkblue
- darkcyan
- darkgoldenrod
- darkgray
- darkgreen
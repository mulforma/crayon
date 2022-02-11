String.prototype.insertRGB = function (...rgbColour) {
  let split = this.split('');
  
  for (let i = 0; i < split.length; i ++) {
    split[i] = split[i].replace(split[i], rgbColour[i % rgbColour.length] + split[i] + '\x1b[0m');
  }
  
  return split.map(x => x.toString())
    .join('');
}

String.prototype.insertRGBEvenly = function (...rgbColour) {
  let split = this.split('');
  
  for (let i = 0; i < split.length; i ++) {
    split[i] = split[i].replace(split[i], rgbColour[Math.floor(i / ( split.length / rgbColour.length ))] + split[i] + '\x1b[0m');
  }
  
  return split.map(x => x.toString())
    .join('');
}

String.prototype.splitRGB = function (splitters, ...rgbColour) {
  let split = this.split(splitters);
  
  for (let i = 0; i < split.length; i ++) {
    split[i] = split[i].replace(split[i], rgbColour[i % rgbColour.length] + split[i] + '\x1b[0m');
  }
  
  return split.map(x => x.toString())
    .join(splitters);
}

String.prototype.insertBackground = function (...rgbBackground) {
  let split = this.split('');
  
  for (let i = 0; i < split.length; i ++) {
    split[i] = split[i].replace(split[i], '\x1b[48;2;' + rgbBackground[i % rgbBackground.length] + split[i] + '\x1b[0m');
  }
  
  return split.map(x => x.toString())
    .join('');
}

String.prototype.applyFilter = function (rgbTextColour, rgbBgColour, textDecoration) {
  let split = this.split('');
  
  for (let i = 0; i < split.length; i ++) {
    split[i] = split[i].replace(split[i], ( textDecoration ? Array.isArray(textDecoration) ? [...textDecoration].join('') : textDecoration : '' ) + ( rgbTextColour ? Array.isArray(rgbTextColour) ? rgbTextColour[i % rgbTextColour.length] : rgbTextColour : '' ) + ( rgbBgColour ? Array.isArray(rgbBgColour) ? rgbBgColour[i % rgbBgColour.length] : rgbBgColour : '' ) + split[i] + '\x1b[0m');
  }
  
  return split.map(x => x.toString())
    .join('');
}

module.exports = {
  rgb (...colour) {
    return `\x1b[38;2;${colour[0]};${colour[1]};${colour[2]}m`
  },
  rgbBackground (...colour) {
    return `\x1b[48;2;${colour[0]};${colour[1]};${colour[2]}m`
  },
  underline () {
    return `\x1b[4;38;2m`
  },
  bold () {
    return `\x1b[1;38;2m`
  },
  italic () {
    return `\x1b[3;38;2m`
  },
  String
}
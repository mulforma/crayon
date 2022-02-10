String.prototype.insertRGB = function (...rgbColour) {
  let split = this.split('');
  
  for (let i = 0; i < split.length; i++) {
    split[i] = split[i].replace(split[i], rgbColour[i % rgbColour.length] + split[i] + '\x1b[0m');
  }
  
  return split.map(x => x.toString()).join('');
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

module.exports = {
  rgb(...colour) {
    return `\x1b[38;2;${colour[0]};${colour[1]};${colour[2]}m`
  },
  String
}
function Rembrandt(element) {
  if (element[0] === "#") {
    this.element = document.getElementById(element.replace("#", ""));
  } else if (element[0] == ".") {
    this.element = document.getElementByClass(element.replace(".", ""));
  }
}

/**
 * Main methods
 */
Rembrandt.prototype.fill = function(color) {
  this.element.style.backgroundColor = color;
};

Rembrandt.prototype.stroke = function(color, width) {
  this.element.style.borderColor = color;
  this.element.style.borderWidth = width;
};

Rembrandt.prototype.size = function(width, height) {
  this.element.style.width = width;
  this.element.style.height = height;
};

Rembrandt.prototype.opacity = function(opacity) {
  if (opacity === "transparent") {
    this.element.style.opacity = 0;
  } else if (opacity === "translucent") {
    this.element.style.opacity = 0.5;
  } else if (opacity === "opaque") {
    this.element.style.opacity = 0.8;
  } else {
    this.element.style.opacity = opacity;
  }
};

Rembrandt.prototype.move = function(xPos, yPos) {
  this.element.style.position = "absolute";
  this.element.style.left = xPos;
  this.element.style.top = xPos;
};

Rembrandt.prototype.shape = function(shape) {
  if (shape === "circle") {
    this.element.style.height = this.element.style.width;
    this.element.style.borderRadius = "50%";
  } else if (shape === "ellipse") {
    this.element.styke.borderRadius = "50%";
  } else if (shape === "square") {
    this.element.style.height = this.element.style.width;
    this.element.styke.borderRadius = 0;
  }
};


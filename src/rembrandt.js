function Rembrandt(element) {
  if (element != undefined && element[0] === "#") {
    this.element = document.getElementById(element.replace("#", ""));
  } else if (element != undefined && element[0] == ".") {
    this.element = document.getElementByClass(element.replace(".", ""));
  } else if (element == undefined) {
    this.element = document.body;
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
    this.element.style.borderRadius = "50%";
  } else if (shape === "square") {
    this.element.style.height = this.element.style.width;
    this.element.style.borderRadius = 0;
  }
};

Rembrandt.prototype.graph = function(set, width, unit, label) {
  this.element.style.width = width;
  this.element.style.height = Math.max.apply(Math, set) * unit;

  for (var i = 0; i < set.length; i++) {
    var bar = document.createElement("div");
    bar.id = this.element.id + "Bar" + String(i);
    // Random PrettyJS Color
    bar.style.backgroundColor = this.pastelColor();
    // Sizing according to data-point size
    bar.style.width = width / set.length;
    bar.style.height = set[i] * unit;
    // Arrange bars next to each other horizontally
    this.element.style.whiteSpace = "nowrap";
    bar.style.display = "inline-block";
    // Label bars with values if 'label' parameter given
    if (label !== undefined) {
      bar.style.display += "table-cell";
      bar.style.verticalAlign = "bottom";
      bar.style.textAlign = "center";
      bar.innerText = set[i];
    }
    // Add to Rembrandt focus
    this.element.appendChild(bar);
  }
};

/**
 * Utility Methods
 * (i.e methods that don't draw or change the appearance
 *  of anything)
 */
Rembrandt.prototype.pastelColor = function() {
    var r = (Math.round(Math.random() * 127) + 127).toString(16);
    var g = (Math.round(Math.random() * 127) + 127).toString(16);
    var b = (Math.round(Math.random() * 127) + 127).toString(16);
    return '#' + r + g + b;
};

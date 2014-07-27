// Class
function Rembrandt(element) {
 this.element = element;
}

/**
 * Main methods
 */
Rembrandt.prototype.fill = function(color) {
  $(this.element).css("background-color", color);
};

Rembrandt.prototype.stroke = function(color, width) {
  $(this.element).css("border-color", color);
  $(this.element).css("border-width", width);
};

Rembrandt.prototype.focus = function(element) {
  this.element = element;
};

Rembrandt.prototype.size = function(width, height) {
  $(this.element).css("width", width + "px");
  $(this.element).css("height", height + "px");
};

Rembrandt.prototype.opacity = function(opacity) {
  if (opacity == "transparent") {
    $(this.element).css("opacity", "0");
  } else if (opacity == "translucent") {
    $(this.element).css("opacity", "0.5");
  } else if (opacity == "opaque") {
    $(this.element).css("opacity", "0.8");
  } else {
    $(this.element).css("opacity", opacity);
  }
};

Rembrandt.prototype.move = function(xPos, yPos) {
  $(this.element).css("position", "absolute");
  $(this.element).css("left", xPos + "px");
  $(this.element).css("top", yPos + "px");
};

Rembrandt.prototype.shape = function(shape) {
  if (shape == "circle") {
    $(this.element).css("height", $(this.element).width());
    $(this.element).css("border-radius", "50%");
  } else if (shape == "ellipse") {
    $(this.element).css("border-radius", "50%");
  } else if (shape == "square") {
    $(this.element).css("height", $(this.element).width());
    $(this.element).css("border-radius", "0%");
  }
};

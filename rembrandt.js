// Class
function Rembrandt(element) {
 this.element = element;
}

/**
 * Main methods
 */
Rembrandt.prototype.backgroundFill = function(color) {
  $(this.element).css("background-color", color);
};

Rembrandt.prototype.setFocus = function(element) {
  this.element = element;
}

Rembrandt.prototype.setSize = function(width, height) {
  $(this.element).css("width", width);
  $(this.element).css("height", height);
}

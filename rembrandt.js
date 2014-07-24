// Class
function Rembrandt(element) {
   this.element = element;
}

/**
 * Main methods
 */
Rembrandt.prototype.backgroundFill = function(color) {
    $(this.element).css("background-color", color);
}
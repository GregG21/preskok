/**
 * @function yoda
 * @param "IIFE that lets you use the library by writing 'yoda' before calling a method."
 *
 */

let yoda = (function () {
  let methods = {};

  /**
   *
   * @param {*} element
   * @returns The css element based on the first character of the string or lack thereof
   *  \# -> Element with ID of ...
   *  . -> Element with className of ...
   *  else: Element by tagName
   *
   */

  methods.elementGet = function (element) {
    if (!element)
      return console.error("Someting went wrong, check your spelling");
    switch (element[0]) {
      case "#":
        element = element.slice(1);
        return document.getElementById(element);
      case ".":
        element = element.slice(1);

        return document.getElementsByClassName(element);
      default:
        return document.querySelector(element);
    }
  };

  /**
   * 
   * @param {*} element 
   * @param {*} prop 
   * @param {*} value 
   * 
   *    Changes or gets style attribute of selected element depending on number and type of parameters.
   * 
   *    set single property ->
        css(element, cssProperty, value);  
        set multiple properties ->
        css(element, {cssProperty: value, cssProperty: value});
        get CSS property value ->
        css(element, cssProperty);
   * 
   */

  methods.css = function (element, prop, value) {
    element = this.elementGet(element);

    if (typeof prop === "object") {
      console.log({ ...prop });
      Object.assign(element.style, { ...prop });
    }
    if (!value) {
      console.log(element.style[prop]);
    }
    element.style[prop] = value;
  };

  methods.cssClass = {
    add: function (element, className) {
      element = methods.elementGet(element);
      element.classList.add(className);
    },
    remove: function (element, className) {
      element = methods.elementGet(element);

      element.classList.remove(className);
    },
    toggle: function (element, className) {
      element = methods.elementGet(element);

      element.classList.toggle(className);
    },
    has: function (element, className) {
      element = methods.elementGet(element);

      element.classList.contains(className);
    },
  };

  return methods;
})();

yoda.css("span", "backgroundColor", "red");
yoda.cssClass.toggle("span", "flex");
yoda.cssClass.remove("span", "flex");

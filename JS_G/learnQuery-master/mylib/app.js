const yoda = (function () {
  const Yoda = function (selector) {
    if (selector === "document" || !selector) {
      this.elements = [document];
    } else if (selector === "window") {
      this.elements = [window];
    } else {
      this.elements = document.querySelectorAll(selector);
    }
    return this;
  };

  Yoda.prototype.css = function (prop, value) {
    this.elements.forEach((element) => {
      if (typeof prop === "object") {
        Object.assign(element.style, { ...prop });
      } else if (!value) {
        console.log(element.style[prop]);
      } else element.style[prop] = value;
    });
  };

  Yoda.prototype.addClass = function (className) {
    this.elements.forEach((element) => {
      element.classList.add(className);
    });
  };

  Yoda.prototype.removeClass = function (className) {
    if (!className) {
      this.elements.forEach((element) => {
        element.removeAttribute("class");
      });
    } else {
      this.elements.forEach((element) => {
        element.classList.remove(className);
      });
    }
  };

  Yoda.prototype.toggleClass = function (className) {
    this.elements.forEach((element) => {
      element.classList.toggle(className);
    });
  };

  Yoda.prototype.hasClass = function (className) {
    this.elements.forEach((element) => {
      console.log(element.classList.contains(className));
      return element.classList.contains(className);
    });
  };

  Yoda.prototype.remove = function () {
    this.elements[0].remove();
  };

  Yoda.prototype.append = function (element) {
    const NODE = document.createElement(element);

    if (this.elements[0] === "HTMLDocument") {
      this.elements[0].body.append(NODE);
    } else {
      this.elements[0].append(NODE);
    }
  };

  Yoda.prototype.after = function (afterElement) {
    const NODE = document.createElement(afterElement);

    if (this.elements[0] === "HTMLDocument") {
      this.elements[0].body.after(NODE);
    } else {
      this.elements[0].after(NODE);
    }
  };
  Yoda.prototype.before = function (beforeElement) {
    const NODE = document.createElement(beforeElement);

    if (this.elements[0] === "HTMLDocument") {
      this.elements[0].body.before(NODE);
    } else {
      this.elements[0].before(NODE);
    }
  };

  Yoda.prototype.prepend = function (prePenElement) {
    const NODE = document.createElement(prePenElement);

    if (this.elements[0] === "HTMLDocument") {
      this.elements[0].body.prepend(NODE);
    } else {
      this.elements[0].prepend(NODE);
    }
  };

  Yoda.prototype.val = function () {
    return this.elements[0].textContent;
  };

  Yoda.prototype.

  return (selector) => {
    return new Yoda(selector);
  };
})();

yoda("#last").after("p");
yoda("#last").prepend("p");
yoda("#last").append("p");
console.log(yoda("p").val());

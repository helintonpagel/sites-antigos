(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

require("./inline-svg");

require("./slideshow");

require("./plans");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function modifyInput(names) {
  var _iterator = _createForOfIteratorHelper(names),
      _step;

  try {
    var _loop = function _loop() {
      var name = _step.value;

      var modifyInput = function modifyInput(element) {
        element.classList.toggle("".concat(name, "--active"), element.value !== "");
      };

      document.querySelectorAll("." + name).forEach(function (element) {
        modifyInput(element);
        element.addEventListener("input", function () {
          return modifyInput(element);
        });
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".plan-select__button").forEach(function (button) {
    ["click", "touchstart"].forEach(function (string) {
      button.addEventListener(string, function (event) {
        button.classList.toggle("plan-select__button--active");
      });
    });
  });
  window.addEventListener("click", function (event) {
    document.querySelectorAll(".plan-select__button").forEach(function (button) {
      if (button != event.target) {
        button.classList.remove("plan-select__button--active");
      }
    });
  }) / document.querySelectorAll(".menu-button").forEach(function (button) {
    ["click", "touchstart"].forEach(function (string) {
      button.addEventListener(string, function (event) {
        event.preventDefault();
        event.stopPropagation();
        button.classList.toggle("menu-button--active");
      });
    });
  });
  window.addEventListener("click", function (event) {
    document.querySelectorAll(".menu-button").forEach(function (button) {
      if (button != event.target) {
        button.classList.remove("menu-button--active");
      }
    });
  });
  modifyInput(["news-field__input", "contact-field__input"]);
  document.querySelectorAll("input[type='tel']").forEach(function (element) {
    function format() {
      var string = element.value.replace(/[^0-9]/g, "");

      if (string.length > 11) {
        string = string.slice(0, 11);
      }

      var pieces = string.match(/([0-9]{2})([0-9]{5})([0-9]{4})/);

      if (pieces == null) {
        pieces = string.match(/([0-9]{1,2})?([0-9]{1,4})?([0-9]{1,4})?/);
      }

      var format = (pieces[1] == undefined ? "" : "(".concat(pieces[1], ")")) + (pieces[2] == undefined ? "" : " ".concat(pieces[2])) + (pieces[3] == undefined ? "" : "-".concat(pieces[3]));
      element.value = format;
    }

    element.addEventListener("keyup", function (event) {
      switch (event.key) {
        case "Backspace":
        case "Shift":
        case "ArrowUp":
        case "ArrowDown":
        case "ArrowLeft":
        case "ArrowRight":
        case "(":
        case ")":
        case "-":
        case " ":
          break;

        default:
          format();
          break;
      }
    });
    element.addEventListener("blur", format);
  });
  document.querySelectorAll(".plan-select__item").forEach(function (element) {
    element.addEventListener("click", function () {
      element.parentElement.parentElement.querySelector(".plan-select__button").innerText = element.innerText;
    });
  });
  var header = document.querySelector(".header");

  if (header != null) {
    header.classList.toggle("header--fixed", window.scrollY >= 120);
    window.addEventListener("scroll", function () {
      if (window.scrollY >= 168) {
        header.classList.add("header--fixed");
        document.querySelectorAll(".top-button").forEach(function (element) {
          return element.classList.add("top-button--show");
        });
      } else if (window.scrollY == 0) {
        header.classList.remove("header--fixed");
        document.querySelectorAll(".top-button").forEach(function (element) {
          return element.classList.remove("top-button--show");
        });
      }
    });
  }
});

},{"./inline-svg":2,"./plans":3,"./slideshow":4}],2:[function(require,module,exports){
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  return document.querySelectorAll("[data-inline='true']").forEach(makeInline);
});

function makeInline(img) {
  var src = img.getAttribute("src");

  if (src !== null) {
    fetchDocument(src, function (xmlDocument) {
      img.parentElement.insertBefore(insertContent(xmlDocument.querySelector("svg"), createElement(img)), img);
      img.remove();
    });
  }
}

function fetchDocument(document, callback) {
  var request = new XMLHttpRequest();
  request.addEventListener("load", function () {
    if (request.status >= 200 && request.status < 400) {
      return callback(request.responseXML);
    }

    console.warn("".concat(request.responseURL, ": ").concat(request.statusText));
  });
  request.addEventListener("error", function () {
    console.warn("An error ocurred when opening ".concat(document));
  });
  request.open("GET", document);
  request.send();
}

function insertContent(srcElement, dstElement) {
  if (srcElement != undefined) {
    dstElement.setAttribute("viewBox", srcElement.getAttribute("viewBox"));
    [].forEach.call(srcElement.children, function (element) {
      return dstElement.appendChild(element.cloneNode(true));
    });
  }

  return dstElement;
}

function createElement(img) {
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  [].forEach.call(img.attributes, function (attribute) {
    return attribute.name !== "src" && svg.setAttribute(attribute.name, attribute.value);
  });
  return svg;
}

},{}],3:[function(require,module,exports){
"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

document.addEventListener("DOMContentLoaded", function () {
  return new Plans();
});

function find(arg) {
  if (_typeof(arg) === "object") {
    return new Finder([arg]);
  } else {
    return new Finder([].slice.call(document.getElementsByClassName(arg)));
  }
}

var Finder = /*#__PURE__*/function () {
  function Finder() {
    var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, Finder);

    this.items = items;
  }

  _createClass(Finder, [{
    key: "length",
    get: function get() {
      return this.items.length;
    }
  }, {
    key: "find",
    value: function find(name) {
      return this.fold(function (element, partial) {
        return partial.push(element.getElementsByClassName(name));
      }, new Finder());
    }
  }, {
    key: "fold",
    value: function fold(callback) {
      var partial = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var _iterator = _createForOfIteratorHelper(this.items),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var element = _step.value;
          partial = callback(element, partial);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return partial;
    }
  }, {
    key: "push",
    value: function push(items) {
      return new Finder(this.items.concat([].slice.call(items)));
    }
  }, {
    key: "bind",
    value: function bind(binding, callback) {
      var capture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      this.fold(function (element) {
        element.addEventListener(binding, callback, capture);
      });
    }
  }, {
    key: "unbind",
    value: function unbind(binding, callback) {
      var capture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      this.fold(function (element) {
        element.removeEventListener(binding, callback, capture);
      });
    }
  }, {
    key: "bindAll",
    value: function bindAll(bindlst, callback) {
      var capture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var _iterator2 = _createForOfIteratorHelper(bindlst),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var binding = _step2.value;
          this.bind(binding, callback, capture);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "item",
    value: function item(index) {
      return this.items[index];
    }
  }, {
    key: "add",
    value: function add(name) {
      this.fold(function (element) {
        return element.classList.add(name);
      });
    }
  }, {
    key: "del",
    value: function del(name) {
      this.fold(function (element) {
        return element.classList.remove(name);
      });
    }
  }, {
    key: "delAll",
    value: function delAll(names) {
      var _iterator3 = _createForOfIteratorHelper(names),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var name = _step3.value;
          this.del(name);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }, {
    key: "has",
    value: function has(name) {
      return this.item.length > 0 && this.item(0).classList.contains(name);
    }
  }, {
    key: "toggle",
    value: function toggle(name, state) {
      return this.fold(function (element) {
        return element.classList.toggle(name, state);
      });
    }
  }]);

  return Finder;
}();

var Plans = /*#__PURE__*/function () {
  function Plans() {
    _classCallCheck(this, Plans);

    var element = find("plans").item(0);

    if (element != undefined) {
      this.widget = new Finder([element]);

      if (this.initialize() === true) {
        this.widget.find("plans-button--next").bind("click", this.nextItem.bind(this));
        this.widget.find("plans-button--back").bind("click", this.prevItem.bind(this));
        this.widget.find("plans__context").bind("touchstart", this.startTouch.bind(this));
      }
    }
  }

  _createClass(Plans, [{
    key: "length",
    get: function get() {
      return this.widget.find("plans__item").items.length;
    }
  }, {
    key: "offset",
    get: function get() {
      var list = this.widget.find("plans__list").item(0);
      var item = this.widget.find("plans__item").item(0);

      if (list !== undefined && item !== undefined) {
        return Math.round(list.getBoundingClientRect().width / item.getBoundingClientRect().width);
      } else {
        return NaN;
      }
    }
  }, {
    key: "initialize",
    value: function initialize() {
      var _this = this;

      if (this.length > 0) {
        var offset = this.offset;

        if (offset !== NaN && offset !== Infinity) {
          this.selectItem(0);
          find(window).bindAll(["resize", "load"], function () {
            return _this.selectItem(_this.index);
          });
          return true;
        }
      }

      return false;
    }
  }, {
    key: "nextItem",
    value: function nextItem() {
      this.selectItem(this.index + 1);
    }
  }, {
    key: "prevItem",
    value: function prevItem() {
      this.selectItem(this.index - 1);
    }
  }, {
    key: "selectItem",
    value: function selectItem(index) {
      var module = this.length - this.offset;
      this.index = index < 0 ? 0 : index > module ? module : index;
      this.widget.find("plans-button--back").toggle("plans-button--hidden", this.index == 0);
      this.widget.find("plans-button--next").toggle("plans-button--hidden", this.index == module);
      this.transform();
    }
  }, {
    key: "transform",
    value: function transform() {
      var element = this.widget.find("plans__list").item(0);

      if (element !== undefined) {
        element.style["transform"] = "translate(".concat(0 - this.index * 100 / this.offset, "%)");
      }
    }
  }, {
    key: "startTouch",
    value: function startTouch(event) {
      this.touchStart = event.targetTouches[0];

      if (this.boundCheckTouch === undefined) {
        this.boundCheckTouch = this.checkTouch.bind(this);
      }

      this.widget.find("plans__context").bind("touchmove", this.boundCheckTouch);
    }
  }, {
    key: "checkTouch",
    value: function checkTouch(event) {
      var offset = this.touchStart.screenX - event.targetTouches[0].screenX;

      if (Math.abs(offset) > 50) {
        if (offset > 50) {
          this.nextItem();
        } else {
          this.prevItem();
        }

        this.widget.find("plans__context").unbind("touchmove", this.boundCheckTouch);
      }
    }
  }]);

  return Plans;
}();

},{}],4:[function(require,module,exports){
"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var index, block;
document.addEventListener("DOMContentLoaded", function () {
  block = document.querySelector(".slideshow");

  if (block !== null && initialize()) {
    block.querySelector(".slide-button--back").addEventListener("click", function () {
      return selectSlide(index - 1);
    });
    block.querySelector(".slide-button--next").addEventListener("click", function () {
      return selectSlide(index + 1);
    });
    block.querySelectorAll(".slide-bullet__button").forEach(function (element, i) {
      return element.addEventListener("click", function () {
        return selectSlide(i);
      });
    });
  }
});
var interval;

function startTimer() {
  interval = setInterval(function () {
    return selectSlide(index + 1);
  }, 5000);
  block.addEventListener("mouseover", pauseTimer);
  block.removeEventListener("mouseleave", startTimer);
}

function pauseTimer() {
  if (interval !== undefined) {
    clearInterval(interval);
  }

  block.addEventListener("mouseleave", startTimer);
  block.removeEventListener("mouseover", pauseTimer);
}

function initialize() {
  var slides = block.querySelectorAll(".slideshow__slide");

  if (slides.length > 0) {
    var _iterator = _createForOfIteratorHelper(slides),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var slide = _step.value;
        slide.querySelectorAll(".slide__line").forEach(function (line, i) {
          return line.style["transition-delay"] = "".concat(i * 350, "ms");
        });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    selectSlide(0);
    return startTimer() || true;
  }
}

function updateBullets() {
  block.querySelectorAll(".slide-bullet").forEach(function (bullet, i) {
    return bullet.classList.toggle("slide-bullet--active", i == index);
  });
}

function showSlide() {
  block.querySelectorAll(".slideshow__slide").item(index).classList.add("slideshow__slide--show");
}

function updateSlides(callback) {
  var endFade = function endFade() {
    showSlide();
    slide.removeEventListener("transitionend", endFade);
  };

  var slide = block.querySelector(".slideshow__slide--show");

  if (slide != null) {
    slide.addEventListener("transitionend", endFade);
    slide.classList.remove("slideshow__slide--show");
  } else {
    showSlide();
  }
}

function selectSlide(i) {
  if (i != index) {
    var length = block.querySelectorAll(".slideshow__slide").length;
    index = (i % length + length) % length;
    updateBullets();
    updateSlides();
  }
}

},{}]},{},[1]);

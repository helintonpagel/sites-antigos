(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Block = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Block = /*#__PURE__*/function () {
  function Block(widget) {
    _classCallCheck(this, Block);

    this.widget = widget;
  }

  _createClass(Block, [{
    key: "forOne",
    value: function forOne(selectors, callback) {
      return function (value) {
        return value === null ? null : callback(value);
      }(this.widget.querySelector(selectors));
    }
  }, {
    key: "forAll",
    value: function forAll(selectors, callback) {
      return this.widget.querySelectorAll(selectors).forEach(function (value, index, array) {
        return callback(value, index, array);
      });
    }
  }]);

  return Block;
}();

exports.Block = Block;

},{}],2:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _block = require("./block");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

window.addEventListener("DOMContentLoaded", function () {
  return document.querySelectorAll(".featured").forEach(function (widget) {
    return new Featured(widget);
  });
});

var Featured = /*#__PURE__*/function (_Block) {
  _inherits(Featured, _Block);

  var _super = _createSuper(Featured);

  function Featured(widget) {
    var _this;

    _classCallCheck(this, Featured);

    _this = _super.call(this, widget);

    if (_this.initialize() == true) {
      _this.forOne(".control-bullets__button", function (element) {
        return element.classList.add("control-bullets__button--active");
      });

      _this.forAll(".control-bullets__button", function (element, i) {
        return element.addEventListener("click", function () {
          return _this.select(i + 2);
        });
      });

      _this.forOne(".control__button--back", function (element) {
        return element.addEventListener("click", function () {
          return _this.select(_this.index - 1);
        });
      });

      _this.forOne(".control__button--next", function (element) {
        return element.addEventListener("click", function () {
          return _this.select(_this.index + 1);
        });
      });

      _this.forOne(".featured__list", function (element) {
        return element.addEventListener("transitionend", function () {
          return _this.finish();
        });
      });
    }

    return _this;
  }

  _createClass(Featured, [{
    key: "length",
    get: function get() {
      return this.widget.querySelectorAll(".featured__item").length;
    }
  }, {
    key: "initialize",
    value: function initialize() {
      var _this2 = this;

      var slides = this.widget.querySelectorAll(".featured__item");

      if (slides.length > 1) {
        [0, 1].forEach(function (index) {
          return _this2.forOne(".featured__list", function (element) {
            return element.appendChild(_this2.makeClone(slides[index]));
          });
        });
        [1, 2].forEach(function (index) {
          return _this2.forOne(".featured__list", function (element) {
            return element.insertBefore(_this2.makeClone(slides[slides.length - index]), element.firstChild);
          });
        });
        this.index = 2;
        this.update() || this.brakeSlide();
        return true;
      }
    }
  }, {
    key: "makeClone",
    value: function makeClone(element) {
      return element.cloneNode(true);
    }
  }, {
    key: "select",
    value: function select(index) {
      if (this.halt !== true) {
        this.index = function (limit) {
          return (index % limit + limit) % limit;
        }(this.length);
      }

      this.update();
    }
  }, {
    key: "update",
    value: function update() {
      var _this3 = this;

      this.forOne(".featured__list", function (element) {
        return element.style["transform"] = "translate(".concat(0 - _this3.index * 100, "%)");
      });
      this.forAll(".featured__item", function (element, i) {
        return element.classList.toggle("featured__item--visible", i == _this3.index);
      });
      this.halt = true;
    }
  }, {
    key: "finish",
    value: function finish() {
      var _this4 = this;

      var limit = this.length;

      if (this.index <= 1 || this.index >= limit - 2) {
        this.index = 2 + function (limit) {
          return ((_this4.index - 2) % limit + limit) % limit;
        }(limit - 4);

        this.update() || this.brakeSlide();
      }

      this.forAll(".control-bullets__button", function (element, i) {
        return element.classList.toggle("control-bullets__button--active", i + 2 == _this4.index);
      });
      this.halt = false;
    }
  }, {
    key: "brakeSlide",
    value: function brakeSlide() {
      this.forAll(".featured__list, .featured__item", function (element) {
        return (element.style["transition"] = "none") && element.offsetHeight;
      });
      this.forAll(".featured__list, .featured__item", function (element) {
        return element.style["transition"] = null;
      });
    }
  }]);

  return Featured;
}(_block.Block);

},{"./block":1}],3:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _block = require("./block");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

window.addEventListener("DOMContentLoaded", function () {
  return document.querySelectorAll(".header").forEach(function (widget) {
    return new Header(widget);
  });
});

var Header = /*#__PURE__*/function (_Block) {
  _inherits(Header, _Block);

  var _super = _createSuper(Header);

  function Header(widget) {
    var _this;

    _classCallCheck(this, Header);

    _this = _super.call(this, widget);
    _this.windowHandler = _this.handleWindow.bind(_assertThisInitialized(_this));

    _this.forOne(".header__button", function (element) {
      return element.addEventListener("click", function () {
        return _this.showMenu();
      });
    });

    _this.forOne(".header-menu__button", function (element) {
      return element.addEventListener("click", function () {
        return _this.hideMenu();
      });
    });

    _this.forAll(".header-menu, .header__button", function (element) {
      return element.addEventListener("click", function () {
        return _this.ignoreWindowClick = true;
      });
    });

    _this.forOne(".header-menu__link--fall", function (element) {
      return element.addEventListener("click", function () {
        return element.classList.toggle("header-menu__link--show");
      });
    });

    return _this;
  }

  _createClass(Header, [{
    key: "showMenu",
    value: function showMenu() {
      this.widget.classList.add("header--overlay");
      this.forOne(".header-menu", function (element) {
        return element.classList.add("header-menu--visible");
      });
      window.addEventListener("click", this.windowHandler);
    }
  }, {
    key: "hideMenu",
    value: function hideMenu() {
      this.widget.classList.remove("header--overlay");
      this.forOne(".header-menu", function (element) {
        return element.classList.remove("header-menu--visible");
      });
      this.forOne(".header-menu__link--fall", function (element) {
        return element.classList.remove("header-menu__link--show");
      });
      window.removeEventListener("click", this.windowHandler);
    }
  }, {
    key: "handleWindow",
    value: function handleWindow() {
      this.ignoreWindowClick = !this.ignoreWindowClick && this.hideMenu();
    }
  }]);

  return Header;
}(_block.Block);

},{"./block":1}],4:[function(require,module,exports){
"use strict";

require("./inline");

require("./header");

require("./slideshow");

require("./featured");

require("./tour");

function addInputState() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  args.forEach(function (name) {
    var updateState = function updateState(input) {
      return input.classList.toggle("".concat(name, "--active"), input.value !== "");
    };

    document.querySelectorAll(".".concat(name)).forEach(function (input) {
      return input.addEventListener("input", function () {
        return updateState(input);
      }) || updateState(input);
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  return addInputState("text-field__input", "message__input");
});

},{"./featured":2,"./header":3,"./inline":5,"./slideshow":6,"./tour":7}],5:[function(require,module,exports){
"use strict";

["load", "DOMContentLoaded"].forEach(function (event) {
  return window.addEventListener(event, function () {
    return document.querySelectorAll("[data-graphics='inline']").forEach(makeInline);
  });
});

function makeInline(img) {
  var src = img.getAttribute("src");

  if (src !== null) {
    fetchDocument(src, function (xmlDocument) {
      if (xmlDocument != null) {
        img.parentElement.insertBefore(insertContent(xmlDocument.querySelector("svg"), createElement(img)), img);
        img.remove();
      }
    });
  }
}

function fetchDocument(document, callback) {
  var request = new XMLHttpRequest();
  request.addEventListener("load", function () {
    if (request.status >= 200 && request.status < 400) {
      callback(request.responseXML);
    } else {
      console.warn("An error occurred while opening \"".concat(document, "\"; ").concat(request.responseURL, ": ").concat(request.statusText));
    }
  });
  request.addEventListener("error", function () {
    console.warn("An error occurred while opening \"".concat(document, "\""));
  });
  request.open("GET", document);
  request.send();
}

function insertContent(srcElement, dstElement) {
  if (srcElement != undefined) {
    dstElement.setAttribute("viewBox", srcElement.getAttribute("viewBox"));
    [].forEach.call(srcElement.children, function (element) {
      return !["title", "style"].includes(element.tagName) && dstElement.appendChild(element.cloneNode(true));
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

},{}],6:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _block = require("./block");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

window.addEventListener("DOMContentLoaded", function () {
  return document.querySelectorAll(".slideshow").forEach(function (widget) {
    return new Slideshow(widget);
  });
});

var Slideshow = /*#__PURE__*/function (_Block) {
  _inherits(Slideshow, _Block);

  var _super = _createSuper(Slideshow);

  function Slideshow(widget) {
    var _this;

    _classCallCheck(this, Slideshow);

    _this = _super.call(this, widget);

    if (_this.length > 1) {
      _this.select(0);

      _this.forAll(".slideshow-bullets__button", function (element, index) {
        return element.addEventListener("click", function () {
          return _this.select(index);
        });
      });

      _this.startTimer();

      widget.addEventListener("mouseover", function () {
        return _this.stopTimer();
      });
      widget.addEventListener("mouseleave", function () {
        return _this.startTimer();
      });
    }

    return _this;
  }

  _createClass(Slideshow, [{
    key: "length",
    get: function get() {
      return this.widget.querySelectorAll(".slideshow__item").length;
    }
  }, {
    key: "select",
    value: function select(index) {
      this.index = function (limit) {
        return (index % limit + limit) % limit;
      }(this.length);

      this.update();
    }
  }, {
    key: "update",
    value: function update() {
      var _this2 = this;

      this.forAll(".slideshow__item", function (element, index) {
        return element.classList.toggle("slideshow__item--visible", index == _this2.index);
      });
      this.forAll(".slideshow-bullets__button", function (element, index) {
        return element.classList.toggle("slideshow-bullets__button--active", index == _this2.index);
      });
    }
  }, {
    key: "startTimer",
    value: function startTimer() {
      var _this3 = this;

      this.interval = setInterval(function () {
        return _this3.select(_this3.index + 1);
      }, 5000);
    }
  }, {
    key: "stopTimer",
    value: function stopTimer() {
      clearInterval(this.interval);
    }
  }]);

  return Slideshow;
}(_block.Block);

},{"./block":1}],7:[function(require,module,exports){
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  return document.querySelectorAll(".tour").forEach(addMouseEvent);
});

function addMouseEvent(element) {
  element.addEventListener("mousemove", function (event) {
    return document.querySelector(".tour__image").style["margin-left"] = "-".concat(50 * event.clientX / window.innerWidth, "%");
  });
  console.log(1);
}

},{}]},{},[4]);

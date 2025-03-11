(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

document.addEventListener("DOMContentLoaded", function () {
  return new Carousel();
});

var Carousel = /*#__PURE__*/function () {
  function Carousel() {
    var _this = this;

    _classCallCheck(this, Carousel);

    this.widget = document.querySelector(".plans");

    if (this.widget !== null) {
      // refactor it LATER
      this.select(0);
      var action = {
        ArrowLeft: function ArrowLeft() {
          return _this.select(_this.index - 1);
        },
        ArrowRight: function ArrowRight() {
          return _this.select(_this.index + 1);
        }
      };
      this.widget.addEventListener("keydown", function (event) {
        if (action[event.key] != null) {
          action[event.key]();
        }

        ;
      });
      this.widget.querySelectorAll(".plans__control").forEach(function (element) {
        element.addEventListener("touchstart", _this.startTouch.bind(_this));
      });
      this.widget.querySelector(".plans-button--back").addEventListener("click", function () {
        return _this.select(_this.index - 1);
      });
      this.widget.querySelector(".plans-button--next").addEventListener("click", function () {
        return _this.select(_this.index + 1);
      });
    }
  }

  _createClass(Carousel, [{
    key: "startTouch",
    value: function startTouch(event) {
      var _this2 = this;

      this.touchStart = event.targetTouches[0];

      if (this.boundCheckTouch === undefined) {
        this.boundCheckTouch = this.checkTouch.bind(this);
      }

      this.widget.querySelectorAll(".plans__control").forEach(function (element) {
        element.addEventListener("touchmove", _this2.boundCheckTouch);
      });
    }
  }, {
    key: "checkTouch",
    value: function checkTouch(event) {
      var _this3 = this;

      var offset = this.touchStart.screenX - event.targetTouches[0].screenX;

      if (Math.abs(offset) > 50) {
        if (offset > 50) {
          this.select(this.index + 1);
        } else {
          this.select(this.index - 1);
        }

        this.widget.querySelectorAll(".plans__control").forEach(function (element) {
          element.removeEventListener("touchmove", _this3.boundCheckTouch);
        });
      }
    }
  }, {
    key: "length",
    get: function get() {
      return this.widget.querySelectorAll(".plans__item").length;
    }
  }, {
    key: "offset",
    get: function get() {
      var list = this.widget.querySelector(".plans__list");
      var item = this.widget.querySelector(".plans__item");

      if (list !== null && item !== null) {
        return Math.round(list.getBoundingClientRect().width / item.getBoundingClientRect().width);
      } else return NaN;
    }
  }, {
    key: "select",
    value: function select(index) {
      var limit = this.length - this.offset;

      if (limit !== NaN) {
        this.index = index < 0 ? 0 : index > limit ? limit : index;
        this.transform(this.widget.querySelector(".plans__list")); // refactor it
      }
    }
  }, {
    key: "transform",
    value: function transform(listNode) {
      if (listNode !== null) {
        listNode.style["transform"] = "translate(".concat(0 - this.index * 100 / this.offset, "%)");
      }
    }
  }]);

  return Carousel;
}();

},{}],2:[function(require,module,exports){
"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

document.addEventListener("DOMContentLoaded", function () {
  return showConsentBox();
});

function showConsentBox() {
  if (getCookie("cookieConsent") != "true") {
    document.querySelectorAll(".consent").forEach(function (element) {
      element.classList.add("consent--show");
      element.querySelector(".consent__button").addEventListener("click", consentCookie);
    });
  }
}

function getCookie(cookieName) {
  var cookies = decodeURIComponent(document.cookie).split(";");

  var _iterator = _createForOfIteratorHelper(cookies),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var cookie = _step.value;

      while (cookie.charAt(0) == " ") {
        cookie = cookie.substring(1);
      }

      if (cookie.indexOf(cookieName) == 0) {
        return cookie.substring(cookieName.length + 1, cookie.length);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return "";
}

function consentCookie() {
  document.querySelectorAll(".consent").forEach(function (element) {
    element.classList.remove("consent--show");
    document.cookie = "cookieConsent=true; expires=".concat(new Date(Date.now() + 31536000000).toUTCString(), "; path=/;");
  });
}

},{}],3:[function(require,module,exports){
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  return document.querySelectorAll("[data-asynchronous='true']").forEach(makeAsynchronous);
});

function makeAsynchronous(form) {
  var formElement = form.querySelector("form");
  console.log(formElement);

  if (formElement == null) {
    return null;
  }

  formElement.addEventListener("submit", function (event) {
    event.preventDefault();
    showLoading(form, "Enviando...");
    var request = new XMLHttpRequest();
    request.addEventListener("load", function (event) {
      if (request.status >= 200 && request.status < 400) {
        clearFormData(formElement);

        try {
          showSuccess(form, JSON.parse(event.target.response).mensagem);
        } catch (error) {
          console.warn(error);
          showSuccess(form, "Enviado.");
        }
      } else {
        try {
          showFailure(form, JSON.parse(event.target.response).mensagem);
        } catch (error) {
          console.warn(error);
          showFailure(form, "Desculpe, alguma coisa deu errado...");
        }
      }
    });
    request.addEventListener("error", function (event) {
      showFailure(form, "Desculpe, alguma coisa deu errado...");
    });
    request.open("POST", formElement.action);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    if (document.querySelector("meta[name='csrf-token']") != null) {
      request.setRequestHeader("X-CSRF-TOKEN", document.querySelector("meta[name='csrf-token']").getAttribute("content"));
    }

    request.send(getFormData(formElement));
  });
}

function showLoading(form, message) {
  var blockClass = form.getAttribute("class");
  blockClass = blockClass.slice(0, blockClass.indexOf("__"));
  var response = form.querySelector(".form-response--loading");
  form.querySelectorAll(".form-response--visible").forEach(function (e) {
    return e.classList.remove("form-response--visible");
  });
  response.classList.add("form-response--visible");
}

function showFailure(form, message) {
  var blockClass = form.getAttribute("class");
  blockClass = blockClass.slice(0, blockClass.indexOf("__"));
  var response = form.querySelector(".form-response--success");
  form.querySelectorAll(".form-response--visible").forEach(function (e) {
    return e.classList.remove("form-response--visible");
  });
  response.classList.add("form-response--visible");
  response.innerText = message;
}

function showSuccess(form, message) {
  var blockClass = form.getAttribute("class");
  blockClass = blockClass.slice(0, blockClass.indexOf("__"));
  var response = form.querySelector(".form-response--failure");
  form.querySelectorAll(".form-response--visible").forEach(function (e) {
    return e.classList.remove("form-response--visible");
  });
  response.classList.add("form-response--visible");
  response.innerText = message;
}

function clearFormData(form) {
  form.querySelectorAll("input, textarea").forEach(function (input) {
    if (input.type == "checkbox") {
      input.checked = false;
    } else {
      input.value = '';
    }
  });
}

function getFormData(form) {
  var data = [];
  form.querySelectorAll("input, textarea").forEach(function (input) {
    if (input.type == "checkbox") {
      data.push("".concat(encodeURIComponent(input.name), "=").concat(input.checked ? 1 : 0));
    } else {
      data.push("".concat(encodeURIComponent(input.name), "=").concat(encodeURIComponent(input.value)));
    }
  });
  return data.join("&").replace(/%20/g, "+");
}

},{}],4:[function(require,module,exports){
"use strict";

require("./inline-svg");

require("./carousel");

require("./listbox");

require("./consent.js");

require("./form.js");

function addInputState() {
  for (var _len = arguments.length, classNames = new Array(_len), _key = 0; _key < _len; _key++) {
    classNames[_key] = arguments[_key];
  }

  classNames.forEach(function (className) {
    var updateState = function updateState(input) {
      return input.classList.toggle("".concat(className, "--active"), input.value !== "");
    };

    document.querySelectorAll(".".concat(className)).forEach(function (input) {
      updateState(input);
      input.addEventListener("input", function () {
        return updateState(input);
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  addInputState("text-field__input", "message__input");
  document.querySelectorAll(".header-button").forEach(function (button) {
    ["click", "touchstart"].forEach(function (string) {
      button.addEventListener(string, function (event) {
        event.preventDefault();
        if (button.classList.toggle("header-button--active")) ;
      });
    });
  });
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
  document.querySelectorAll("input[name='cnpj']").forEach(function (element) {
    function format() {
      var string = element.value.replace(/[^0-9]/g, "");

      if (string.length > 14) {
        string = string.slice(0, 14);
      }

      var pieces = string.match(/([0-9]{2})([0-9]{3})([0-9]{3})([0-9]{4})([0-9]{2})/);

      if (pieces == null) {
        pieces = string.match(/([0-9]{1,2})?([0-9]{1,3})?([0-9]{1,3})?([0-9]{1,4})?([0-9]{1,2})?/);
      }

      var format = (pieces[1] === undefined ? "" : "".concat(pieces[1], ".")) + (pieces[2] === undefined ? "" : "".concat(pieces[2], ".")) + (pieces[3] === undefined ? "" : "".concat(pieces[3], "/")) + (pieces[4] === undefined ? "" : "".concat(pieces[4], "-")) + (pieces[5] === undefined ? "" : "".concat(pieces[5]));
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
  document.querySelectorAll("input[name='cep']").forEach(function (element) {
    function format() {
      var string = element.value.replace(/[^0-9]/g, "");

      if (string.length > 8) {
        string = string.slice(0, 8);
      }

      var pieces = string.match(/([0-9]{5})([0-9]{3})/);

      if (pieces == null) {
        pieces = string.match(/([0-9]{1,5})?([0-9]{1,3})?/);
      }

      var format = (pieces[1] === undefined ? "" : "".concat(pieces[1], "-")) + (pieces[2] === undefined ? "" : "".concat(pieces[2]));
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
  document.querySelectorAll("input[name='employees'], input[name='number']").forEach(function (element) {
    function format() {
      var string = element.value.replace(/[^0-9]/g, "");

      if (string.length > 6) {
        string = string.slice(0, 6);
      }

      element.value = string;
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
});

},{"./carousel":1,"./consent.js":2,"./form.js":3,"./inline-svg":5,"./listbox":6}],5:[function(require,module,exports){
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  return document.querySelectorAll("[data-graphics='inline']").forEach(makeInline);
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
      console.warn("".concat(request.responseURL, ": ").concat(request.statusText));
    }
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

},{}],6:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

document.addEventListener("DOMContentLoaded", function () {
  return new Listbox();
});

var Listbox = /*#__PURE__*/function () {
  function Listbox() {
    var _this = this;

    _classCallCheck(this, Listbox);

    this.widget = document.querySelector(".listbox");

    if (this.widget !== null) {
      var emptyValue = this.querySelector(".listbox__label").then(function (element) {
        return element.innerText;
      });
      this.querySelectorAll(".listbox__item").each(function (element, index) {
        return element.addEventListener("click", function () {
          _this.value = element.getAttribute("data-value");
          _this.label = index == 0 ? emptyValue : element.innerText;
        });
      });
      this.querySelector(".listbox__button").then(function (element) {
        element.addEventListener("click", function () {
          return element.classList.toggle("listbox__button--active");
        });
        window.addEventListener("click", function (event) {
          if (element !== event.target) element.classList.remove("listbox__button--active");
        });
      });
    }
  }

  _createClass(Listbox, [{
    key: "value",
    get: function get() {
      return this.querySelector(".listbox__input").then(function (element) {
        return element.value;
      });
    },
    set: function set(value) {
      this.querySelector(".listbox__input").then(function (element) {
        return element.value = value;
      });
    }
  }, {
    key: "label",
    get: function get() {
      return this.querySelector(".listbox__label").then(function (element) {
        return element.innerText;
      });
    },
    set: function set(value) {
      this.querySelector(".listbox__label").then(function (element) {
        return element.innerText = value;
      });
    }
  }, {
    key: "querySelector",
    value: function querySelector(selectors) {
      var result = this.widget.querySelector(selectors);
      return {
        then: function then(callback) {
          return result !== null ? callback(result) : console.warn("Element was not found: ".concat(selectors));
        }
      };
    }
  }, {
    key: "querySelectorAll",
    value: function querySelectorAll(selectors) {
      var _this2 = this;

      return {
        each: function each(callback) {
          return _this2.widget.querySelectorAll(selectors).forEach(function (value, index, array) {
            return callback(value, index, array);
          });
        }
      };
    }
  }]);

  return Listbox;
}();

},{}]},{},[4]);

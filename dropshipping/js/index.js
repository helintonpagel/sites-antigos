(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

document.addEventListener("DOMContentLoaded", function () {
  return document.querySelectorAll(".plans").forEach(function (widget) {
    return new Carousel(widget);
  });
});

var Carousel = /*#__PURE__*/function () {
  function Carousel(widget) {
    var _this = this;

    _classCallCheck(this, Carousel);

    this.widget = widget;

    if (this.initialize()) {
      this.querySelector(".plans-button--back").then(function (element) {
        return element.addEventListener("click", function () {
          return _this.back();
        });
      });
      this.querySelector(".plans-button--next").then(function (element) {
        return element.addEventListener("click", function () {
          return _this.next();
        });
      });
    }
  }

  _createClass(Carousel, [{
    key: "length",
    get: function get() {
      return this.widget.querySelectorAll(".plans__item").length;
    }
  }, {
    key: "offset",
    get: function get() {
      var _this2 = this;

      var result = 1;
      this.querySelector(".plans__list").then(function (list) {
        return _this2.querySelector(".plans__item").then(function (item) {
          return result = Math.round(list.getBoundingClientRect().width / item.getBoundingClientRect().width);
        });
      });
      return result;
    }
  }, {
    key: "querySelector",
    value: function querySelector(selectors) {
      var _this3 = this;

      return {
        each: function each(callback) {
          return _this3.widget.querySelectorAll(selectors).forEach(function (value, index, array) {
            return callback(value, index, array);
          });
        },
        then: function then(callback) {
          var element = _this3.widget.querySelector(selectors);

          if (element !== null) {
            return callback(element);
          } else {
            console.warn("Element was not found: ".concat(selectors));
          }
        }
      };
    }
  }, {
    key: "initialize",
    value: function initialize() {
      var _this4 = this;

      if (this.length > 0) {
        var action = {
          ArrowLeft: function ArrowLeft() {
            return _this4.back();
          },
          ArrowRight: function ArrowRight() {
            return _this4.next();
          }
        };
        this.widget.addEventListener("keydown", function (event) {
          if (action[event.key] != null) {
            action[event.key]();
          }

          ;
        });
        this.querySelector(".plan-card__button").each(function (element, index) {
          return element.addEventListener("focus", function () {
            return _this4.select(index);
          });
        });
        return this.select(0) || true;
      }

      return false;
    }
  }, {
    key: "back",
    value: function back() {
      this.select(this.index - 1);
    }
  }, {
    key: "next",
    value: function next() {
      this.select(this.index + 1);
    }
  }, {
    key: "select",
    value: function select(index) {
      var _this5 = this;

      this.index = index < 0 ? 0 : function () {
        var limit = _this5.length - _this5.offset;
        return index > limit ? limit : index;
      }();
      this.transform();
    }
  }, {
    key: "transform",
    value: function transform() {
      var _this6 = this;

      this.querySelector(".plans__list").then(function (element) {
        return element.style["transform"] = "translate(".concat(0 - _this6.index * 100 / _this6.offset, "%)");
      });
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
  return document.querySelectorAll("[data-form='async']").forEach(makeAsynchronous);
});

function makeAsynchronous(form) {
  var formElement = form.querySelector("form");
  console.log(formElement);

  if (formElement !== null) {
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
}

function showLoading(form, message) {
  var response = form.querySelector(".form-response");
  response.setAttribute("class", "form-response form-response--loading");
  response.lastChild.innerText = message;
}

function showFailure(form, message) {
  var response = form.querySelector(".form-response");
  response.setAttribute("class", "form-response form-response--failure");
  response.lastChild.innerText = message;
}

function showSuccess(form, message) {
  var response = form.querySelector(".form-response");
  response.setAttribute("class", "form-response form-response--success");
  response.lastChild.innerText = message;
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

require("./consent");

require("./form");

document.addEventListener("DOMContentLoaded", function () {
  return addInputState("text-field__input", "message__input");
});

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
  document.querySelectorAll(".header-button").forEach(function (button) {
    return button.addEventListener("click", function (event) {
      event.preventDefault();
      document.querySelectorAll(".header-menu").forEach(function (element) {
        return element.classList.toggle("header-menu--active", button.classList.toggle("header-button--active"));
      });
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
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
  document.querySelectorAll("input[name='funcionarios'], input[name='numero']").forEach(function (element) {
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

},{"./carousel":1,"./consent":2,"./form":3,"./inline-svg":5,"./listbox":6}],5:[function(require,module,exports){
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
  return document.querySelectorAll(".listbox").forEach(function (widget) {
    return new Listbox(widget);
  });
});

var Listbox = /*#__PURE__*/function () {
  function Listbox(widget) {
    var _this = this;

    _classCallCheck(this, Listbox);

    this.widget = widget;

    if (this.initialize()) {
      this.querySelector(".listbox__item").each(function (element, i) {
        return element.addEventListener("click", function () {
          return _this.selectItem(element, i);
        });
      });
      this.querySelector(".listbox__button").then(function (element) {
        window.addEventListener("click", function (event) {
          if (element !== event.target) element.classList.remove("listbox__button--active");
        });
        element.addEventListener("click", function () {
          return element.classList.toggle("listbox__button--active");
        });
      });
    }
  }

  _createClass(Listbox, [{
    key: "querySelector",
    value: function querySelector(selectors) {
      var _this2 = this;

      return {
        each: function each(callback) {
          return _this2.widget.querySelectorAll(selectors).forEach(function (value, index, array) {
            return callback(value, index, array);
          });
        },
        then: function then(callback) {
          var element = _this2.widget.querySelector(selectors);

          if (element !== null) {
            return callback(element);
          } else {
            console.warn("Element was not found: ".concat(selectors));
          }
        }
      };
    }
  }, {
    key: "initialize",
    value: function initialize() {
      this.index = 0;
      this.empty = this.querySelector(".listbox__label").then(function (element) {
        return element.innerText;
      });
      return this.empty !== undefined;
    }
  }, {
    key: "selectItem",
    value: function selectItem(item, i) {
      var _this3 = this;

      this.index = i;
      this.querySelector(".listbox__label").then(function (element) {
        return element.innerText = _this3.index === 0 ? _this3.empty : item.innerText;
      });
      this.querySelector(".listbox__input").then(function (element) {
        return element.value = item.getAttribute("data-value");
      });
    }
  }]);

  return Listbox;
}();

},{}]},{},[4]);

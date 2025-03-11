"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function query(className) {
  return new Query(_toConsumableArray(document.getElementsByClassName(className)));
}

var Query = /*#__PURE__*/function () {
  function Query() {
    var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, Query);

    this.items = items;
  }

  _createClass(Query, [{
    key: "callEvery",
    value: function callEvery(callback) {
      for (var i = 0; i < this.getLength(); i++) {
        if (callback(this.items[i], i) == false) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "callFirst",
    value: function callFirst(callback) {
      if (this.getLength() > 0) {
        return callback(this.items[0]);
      }

      return undefined;
    }
  }, {
    key: "findChild",
    value: function findChild(className) {
      var items = [];
      this.callEvery(function (element) {
        items = items.concat(_toConsumableArray(element.getElementsByClassName(className)));
      });
      return new Query(items);
    }
  }, {
    key: "filter",
    value: function filter(callback) {
      return new Query(this.items.filter(callback));
    }
  }, {
    key: "attachEvent",
    value: function attachEvent(eventType, callback) {
      this.callEvery(function (element) {
        element.addEventListener(eventType, callback);
      });
    }
  }, {
    key: "removeEvent",
    value: function removeEvent(eventType, callback) {
      this.callEvery(function (element) {
        element.removeEventListener(eventType, callback);
      });
    }
  }, {
    key: "addClass",
    value: function addClass(className) {
      this.callEvery(function (element) {
        element.classList.add(className);
      });
    }
  }, {
    key: "removeClass",
    value: function removeClass(className) {
      this.callEvery(function (element) {
        element.classList.remove(className);
      });
    }
  }, {
    key: "toggleClass",
    value: function toggleClass(className) {
      this.callEvery(function (element) {
        element.classList.toggle(className);
      });
    }
  }, {
    key: "getLength",
    value: function getLength() {
      return this.items.length;
    }
  }, {
    key: "setStyle",
    value: function setStyle(styleMap) {
      var _this = this;

      var keys = Object.keys(styleMap);

      var _loop = function _loop(i) {
        _this.callEvery(function (element) {
          element.style[keys[i]] = styleMap[keys[i]];
        });
      };

      for (var i = 0; i < keys.length; i++) {
        _loop(i);
      }
    }
  }, {
    key: "setAttribute",
    value: function setAttribute(key, value) {
      this.callEvery(function (element) {
        return element.setAttribute(key, value);
      });
    }
  }]);

  return Query;
}();

var HoveringIcon = /*#__PURE__*/function () {
  function HoveringIcon(className) {
    var _this2 = this;

    _classCallCheck(this, HoveringIcon);

    this.className = className;
    window.addEventListener("scroll", function () {
      return _this2.updateAll();
    });
  }

  _createClass(HoveringIcon, [{
    key: "setHidePoint",
    value: function setHidePoint(className) {
      this.hidePoint = query(className).items[0];
      this.updateAll();
    }
  }, {
    key: "setShowPoint",
    value: function setShowPoint(className) {
      this.showPoint = query(className).items[0];
      this.updateAll();
    }
  }, {
    key: "updateAll",
    value: function updateAll() {
      var _this3 = this;

      query(this.className).callEvery(function (element) {
        return _this3.update(element);
      });
    }
  }, {
    key: "update",
    value: function update(element) {
      var isWithin = this.isWithin(HoveringIcon.getTopDistance(element));

      if (isWithin) {
        element.classList.add("show");
      } else {
        element.classList.remove("show");
      }
    }
  }, {
    key: "isWithin",
    value: function isWithin(distance) {
      var hidePoint = HoveringIcon.getTopDistance(this.hidePoint);
      var showPoint = HoveringIcon.getBottomDistance(this.showPoint);
      return (isNaN(showPoint) || showPoint <= distance) && (isNaN(hidePoint) || hidePoint >= distance);
    }
  }], [{
    key: "getTopDistance",
    value: function getTopDistance(element) {
      var rect;

      if (element == undefined || (rect = element.getBoundingClientRect()) == undefined) {
        return Number.NaN;
      }

      return rect.top;
    }
  }, {
    key: "getBottomDistance",
    value: function getBottomDistance(element) {
      var rect;

      if (element == undefined || (rect = element.getBoundingClientRect()) == undefined) {
        return Number.NaN;
      }

      return rect.bottom;
    }
  }]);

  return HoveringIcon;
}();

var Field = /*#__PURE__*/function () {
  function Field(className) {
    var _this4 = this;

    _classCallCheck(this, Field);

    query(className).callEvery(function (element) {
      _this4.update(element);

      element.addEventListener("input", function () {
        return _this4.update(element);
      });
    });
  }

  _createClass(Field, [{
    key: "update",
    value: function update(element) {
      return element.value === "" ? this.show(element) : this.hide(element);
    }
  }, {
    key: "hide",
    value: function hide(element) {
      element.parentNode.classList.add("hide");
    }
  }, {
    key: "show",
    value: function show(element) {
      element.parentNode.classList.remove("hide");
    }
  }]);

  return Field;
}();

var Popup = /*#__PURE__*/function () {
  function Popup() {
    var _this5 = this;

    var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

    _classCallCheck(this, Popup);

    this.slideIndex = -1;
    this.boundHandleKey = this.handleKey.bind(this);

    if (className !== undefined) {
      this.loadImages(className);
    }

    query("popup__back").attachEvent("click", function (event) {
      _this5.back();

      event.stopPropagation();
    });
    query("popup__next").attachEvent("click", function (event) {
      _this5.next();

      event.stopPropagation();
    });
    window.addEventListener("click", this.hide.bind(this));
  }

  _createClass(Popup, [{
    key: "handleKey",
    value: function handleKey(event) {
      var keyboardMethods = {
        "Escape": this.hide.bind(this),
        "ArrowLeft": this.next.bind(this),
        "ArrowRight": this.back.bind(this)
      };

      if (keyboardMethods[event.key] != undefined) {
        keyboardMethods[event.key]();
      }
    }
  }, {
    key: "loadImages",
    value: function loadImages(className) {
      var _this6 = this;

      this.collection = query(className);
      this.collection.callEvery(function (element) {
        element.parentNode.addEventListener("click", function (event) {
          _this6.show();

          _this6.select(_this6.collection.items.indexOf(element));

          event.stopPropagation();
        });
      });
    }
  }, {
    key: "show",
    value: function show() {
      query("popup").addClass("show");
      window.addEventListener("keydown", this.boundHandleKey);
    }
  }, {
    key: "hide",
    value: function hide() {
      query("popup").removeClass("show");
      window.removeEventListener("keydown", this.boundHandleKey);
    }
  }, {
    key: "select",
    value: function select(index) {
      this.index = index < 0 ? index + this.getLength() : index % this.getLength();
      this.updateView();
    }
  }, {
    key: "getLength",
    value: function getLength() {
      return this.collection.getLength();
    }
  }, {
    key: "updateView",
    value: function updateView() {
      query("popup__image").setAttribute("src", this.collection.items[this.index].getAttribute("src"));
    }
  }, {
    key: "next",
    value: function next() {
      this.select(this.index + 1);
    }
  }, {
    key: "back",
    value: function back() {
      this.select(this.index - 1);
    }
  }]);

  return Popup;
}();

var Dropdown = function Dropdown(className) {
  _classCallCheck(this, Dropdown);

  query(className).attachEvent("click", function (event) {
    event.stopPropagation();
    this.classList.toggle("show");
  });
  window.addEventListener("click", function () {
    return query(className).removeClass("show");
  });
};

var Gallery = /*#__PURE__*/function () {
  function Gallery() {
    var _this7 = this;

    _classCallCheck(this, Gallery);

    this.popup = new Popup("gallery__image");
    this.showAll();
    query("select__item").callEvery(function (element) {
      return element.addEventListener("click", function () {
        _this7.show(element.getAttribute("data-filter"));

        query("select__button").callFirst(function (button) {
          return button.innerText = element.innerText;
        });
      });
    });
  }

  _createClass(Gallery, [{
    key: "show",
    value: function show(dataFilter) {
      var target = this.filterBy(dataFilter);
      this.hideAll();
      this.popup.collection = target.findChild("gallery__image");
      target.addClass("show");
    }
  }, {
    key: "showAll",
    value: function showAll() {
      query("gallery__item").addClass("show");
    }
  }, {
    key: "hideAll",
    value: function hideAll() {
      query("gallery__item").removeClass("show");
    }
  }, {
    key: "filterBy",
    value: function filterBy(dataFilter) {
      if (dataFilter === "todos") {
        return query("gallery__item");
      } else {
        return query("gallery__item").filter(function (element) {
          return element.getAttribute("data-filter") === dataFilter;
        });
      }
    }
  }]);

  return Gallery;
}(); // class SmoothScroll {
//     constructor(className) {
//         this.handleScroll(location.href)
//         query(className).callEvery(element => 
//             element.addEventListener("click", event => {
//                 if (this.handleScroll(element.href) == true) {
//                     event.preventDefault();
//                 }
//             })
//         );
//     }
//     handleScroll(href) {
//         let anchor = this.extractAnchor(href);
//         if (anchor !== undefined) {
//             let target = document.getElementById(anchor);
//             if (target != null) {
//                 this.scroll(HoveringIcon.getTopDistance(target) - 120);
//                 return true;
//             }
//         }
//         return false;
//     }
//     extractAnchor(str) {
//         if (typeof str == 'string') {
//             let arr = str.split('#');
//             if (arr.length == 2) {
//                 return arr[1];
//             }
//         }
//         return undefined;
//     }
//     scroll(pixels) {
//         let start = (new Date()).getTime();
//         let duration = 1000;
//         let position = window.scrollY;
//         let i = setInterval(() => {
//             let time = ((new Date()).getTime() - start) / duration;
//             if (time >= 1) {
//                 clearInterval(i);
//                 window.scrollTo(0, position + pixels);
//             }
//             else {
//                 window.scrollTo(0, position + this.curvePoint(time) * pixels);
//             }
//         }, 10)
//     }
//     curvePoint(time, c = 1) {
//         return 2 * (time - Math.pow(time, 2)) * c + Math.pow(time, 2);
//     }
// }


function updatePhoto(photo) {
  if (HoveringIcon.getTopDistance(photo) < window.innerHeight) {
    photo.classList.add("show");
  }
}

window.addEventListener("load", function () {
  new Dropdown("bars-button");
  var icon = new HoveringIcon("hovering-icon");
  icon.setShowPoint("banner");
  icon.setHidePoint("footer");
  new Field("field__text");
  new Field("field__input");
  new Dropdown("select__button");
  new Gallery();
  query("photo").callEvery(function (element) {
    updatePhoto(element);
    window.addEventListener("scroll", function () {
      return updatePhoto(element);
    });
  });
  query("loader").addClass("hide"); // new SmoothScroll("menu__anchor");

  var tels = query("field__input").filter(function (e) {
    return e.getAttribute("type") == "tel";
  });
  tels.callEvery(function (element) {
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
          break;
      }
    });
  });
});
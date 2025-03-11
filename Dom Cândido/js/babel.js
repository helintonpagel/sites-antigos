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

var Header = /*#__PURE__*/function () {
  function Header() {
    _classCallCheck(this, Header);

    Header.updateState();
    window.addEventListener("scroll", function () {
      Header.updateState();
    });
  }

  _createClass(Header, null, [{
    key: "updateState",
    value: function updateState() {
      if (document.documentElement.scrollTop == 0) {
        query("header").removeClass("header--small");
      } else {
        query("header").addClass("header--small");
      }
    }
  }]);

  return Header;
}();

var Dropdown = function Dropdown(className) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  _classCallCheck(this, Dropdown);

  query(className).attachEvent("click", function (event) {
    event.stopPropagation();
    this.classList.toggle("".concat(className, "--active"));

    if (target != null) {
      query(target).toggleClass("".concat(target, "--active"));
    }
  });
  window.addEventListener("click", function () {
    query(className).removeClass("".concat(className, "--active"));

    if (target != null) {
      query(target).removeClass("".concat(target, "--active"));
    }
  });
};

var Slideshow = /*#__PURE__*/function () {
  function Slideshow() {
    var _this2 = this;

    _classCallCheck(this, Slideshow);

    this.collection = query("slideshow__item").items;

    if (this.collection.length > 0) {
      this.selectSlide(0);
      query("slideshow__prev").attachEvent("click", function () {
        _this2.prevSlide();
      });
      query("slideshow__next").attachEvent("click", function () {
        _this2.nextSlide();
      });
    }
  }

  _createClass(Slideshow, [{
    key: "selectSlide",
    value: function selectSlide(index) {
      query("slideshow__item").removeClass("show");

      if (index < 0) {
        index += this.collection.length;
      } else {
        index %= this.collection.length;
      }

      this.slideIndex = index;
      this.collection[this.slideIndex].classList.add('show');
    }
  }, {
    key: "prevSlide",
    value: function prevSlide() {
      this.selectSlide(this.slideIndex - 1);
    }
  }, {
    key: "nextSlide",
    value: function nextSlide() {
      this.selectSlide(this.slideIndex + 1);
    }
  }]);

  return Slideshow;
}();

var Fly = /*#__PURE__*/function () {
  function Fly(className) {
    var _this3 = this;

    _classCallCheck(this, Fly);

    this.className = className;
    this.updateAll();
    window.addEventListener("scroll", function () {
      return _this3.updateAll();
    });
  }

  _createClass(Fly, [{
    key: "updateAll",
    value: function updateAll() {
      var _this4 = this;

      query(this.className).callEvery(function (element) {
        return _this4.update(element);
      });
    }
  }, {
    key: "update",
    value: function update(element) {
      if (Fly.getTopDistance(element) < window.innerHeight) {
        element.classList.add("".concat(this.className, "--show"));
      }
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
  }]);

  return Fly;
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

var Field = /*#__PURE__*/function () {
  function Field(className) {
    var _this7 = this;

    _classCallCheck(this, Field);

    this.className = className;
    query(className).callEvery(function (element) {
      _this7.update(element);

      element.addEventListener("input", function () {
        return _this7.update(element);
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
      element.classList.add("".concat(this.className, "--active"));
    }
  }, {
    key: "show",
    value: function show(element) {
      element.classList.remove("".concat(this.className, "--active"));
    }
  }]);

  return Field;
}();

var HoveringIcon = /*#__PURE__*/function () {
  function HoveringIcon(className) {
    var _this8 = this;

    _classCallCheck(this, HoveringIcon);

    this.className = className;
    window.addEventListener("scroll", function () {
      return _this8.updateAll();
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
      var _this9 = this;

      query(this.className).callEvery(function (element) {
        return _this9.update(element);
      });
    }
  }, {
    key: "update",
    value: function update(element) {
      var isWithin = this.isWithin(HoveringIcon.getTopDistance(element));

      if (isWithin) {
        element.classList.add("".concat(this.className, "--show"));
      } else {
        element.classList.remove("".concat(this.className, "--show"));
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

var Checkbox = /*#__PURE__*/function () {
  function Checkbox(checkbox) {
    _classCallCheck(this, Checkbox);

    if (checkbox == null) {
      throw new Error("Invalid operation: checkbox element is null");
    }

    this.setCheckbox(checkbox);
  }

  _createClass(Checkbox, [{
    key: "setCheckbox",
    value: function setCheckbox(checkbox) {
      checkbox.addEventListener("click", this.handleClick.bind(this));
      this.checkbox = checkbox;
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      if (this.checked != true) {
        this.checkbox.classList.add("is-checked");
        this.checked = true;
      } else {
        this.checkbox.classList.remove("is-checked");
        this.checked = false;
      }
    }
  }]);

  return Checkbox;
}();

window.addEventListener("load", function () {
  var modals = document.getElementsByClassName("js-modal");

  for (var i = 0; i < modals.length; i++) {
    new Modal(modals[i]);
  }

  var videos = document.getElementsByClassName("js-video");

  for (var _i = 0; _i < videos.length; _i++) {
    new VideoModal(videos[_i]);
  }
});

var Modal = /*#__PURE__*/function () {
  function Modal(modal) {
    _classCallCheck(this, Modal);

    if (modal == null) {
      new Error("Invalid operation: modal element is null");
    }

    this.modal = modal;
    this.setButton();
    this.throwModal();
    query("modal__button").items[1].addEventListener("keydown", function (event) {
      if (event.key == "Tab" && event.shiftKey == false) {
        query("modal__brand").items[0].focus();
        event.preventDefault();
      }
    });
    query("modal__brand").items[0].addEventListener("keydown", function (event) {
      if (event.key == "Tab" && event.shiftKey) {
        query("modal__button").items[1].focus();
        event.preventDefault();
      }
    });
  }

  _createClass(Modal, [{
    key: "getElement",
    value: function getElement(name) {
      var collection = this.modal.getElementsByClassName(name);

      if (collection.length < 1) {
        throw new Error("Invalid operation: this age modal does not a '" + name + "' class");
      }

      return collection[0];
    }
  }, {
    key: "setButton",
    value: function setButton() {
      var button = this.getElement("js-modal-yes");
      button.addEventListener("click", this.handleClick.bind(this));
    }
  }, {
    key: "setCheckbox",
    value: function setCheckbox() {
      this.checkbox = new Checkbox(this.getElement("js-checkbox"));
    }
  }, {
    key: "handleClick",
    value: function handleClick(event) {
      this.modal.classList.remove("is-active");
      this.setCookie();
      document.documentElement.style["overflow-y"] = "scroll";
    }
  }, {
    key: "addErrorMessage",
    value: function addErrorMessage() {
      this.modal.classList.add("has-error");
      this.boundRemoveErrorMessage = this.removeErrorMessage.bind(this);
      window.addEventListener("click", this.boundRemoveErrorMessage);
    }
  }, {
    key: "removeErrorMessage",
    value: function removeErrorMessage(event) {
      this.modal.classList.remove("has-error");
      window.removeEventListener("click", this.boundRemoveErrorMessage);
    }
  }, {
    key: "throwModal",
    value: function throwModal() {
      if (this.getCookie("ofAge") != "true") {
        this.modal.classList.add("is-active");
        document.documentElement.style["overflow-y"] = "hidden";
        query("modal__button").items[0].focus();
      }
    }
  }, {
    key: "getCookie",
    value: function getCookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');

      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];

        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }

        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }

      return "";
    }
  }, {
    key: "setCookie",
    value: function setCookie() {
      var date = new Date();
      date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000);
      document.cookie = "ofAge=true; expires=" + date.toUTCString() + "; SameSite=Lax; path=/";
    }
  }]);

  return Modal;
}();

var VideoModal = /*#__PURE__*/function () {
  function VideoModal(modal) {
    _classCallCheck(this, VideoModal);

    if (modal == null) {
      new Error("Invalid operation: modal element is null");
    }

    this.modal = modal;
    this.boundCloseModal = this.closeModal.bind(this);
    this.boundHandleKeypress = this.handleKeypress.bind(this);
    this.setButton();
  }

  _createClass(VideoModal, [{
    key: "getElement",
    value: function getElement(name) {
      var collection = this.modal.getElementsByClassName(name);

      if (collection.length < 1) {
        throw new Error("Invalid operation: this age modal does not a '" + name + "' class");
      }

      return collection[0];
    }
  }, {
    key: "setButton",
    value: function setButton() {
      var button = this.getElement("js-button");
      button.addEventListener("click", this.openModal.bind(this));
    }
  }, {
    key: "openModal",
    value: function openModal(event) {
      window.addEventListener("click", this.boundCloseModal);
      window.addEventListener("keydown", this.boundHandleKeypress);
      this.createIframe();
      this.modal.classList.add("is-active");
      event.stopPropagation();
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      window.removeEventListener("click", this.boundCloseModal);
      window.removeEventListener("keydown", this.boundHandleKeypress);
      this.deleteIframe();
      this.modal.classList.remove("is-active");
    }
  }, {
    key: "handleKeypress",
    value: function handleKeypress(event) {
      if (event.key === "Escape") {
        this.closeModal();
      }
    }
  }, {
    key: "createIframe",
    value: function createIframe() {
      var embedded = this.modal.getElementsByClassName("js-embed")[0];

      if (embedded == undefined) {
        throw new Error("Invalid operation: 'embed' child is missing");
      }

      embedded.innerHTML = '<iframe class="video__iframe" id="ytplayer" type="text/html" width="720" height="405"' + 'src="https://www.youtube.com/embed/4cMZDwy2ElI?autoplay=1&cc_load_policy=1&color=white&mute=1"' + 'frameborder="0">' + '</iframe>';
      this.iframe = embedded.firstChild;
    }
  }, {
    key: "deleteIframe",
    value: function deleteIframe() {
      var iframe = this.iframe;

      if (iframe == undefined) {
        throw new Error("Invalid operation: iframe child is missing");
      }

      iframe.parentNode.removeChild(iframe);
    }
  }]);

  return VideoModal;
}();

document.addEventListener("DOMContentLoaded", function () {
  new Header();
  new Dropdown("header-button");
  new Slideshow();
  new Dropdown("select__field");
  new Popup("thumbnail__image");
  new Fly("fly-effect");
  var newsletter = new HoveringIcon("newsletter");
  newsletter.setShowPoint("slideshow");
  new Field("form__input");
  new Field("form__textarea");
  new Dropdown("newsletter__toggle", "newsletter");
  new window.VLibras.Widget('https://vlibras.gov.br/app');
  query("header-menu").items[0].style["height"] = window.innerHeight + 'px';
  window.addEventListener("resize", function () {
    query("header-menu").items[0].style["height"] = window.innerHeight + 'px';
  });
  query("js-phone").callEvery(function (element) {
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
});
window.addEventListener("load", function () {
  query("loader").addClass("loader--hidden");
});
var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player');
}

window.addEventListener("load", function () {
  function handleEscape(event) {
    if (event.key == "Escape") {
      query("video").removeClass("video--show");
      player.stopVideo();
    }
  }

  query("video__button").attachEvent("click", function (event) {
    query("video").addClass("video--show");
    window.addEventListener("keydown", handleEscape);
    player.playVideo();
    event.preventDefault();
  });
  query("video__overlay").attachEvent("click", function () {
    query("video").removeClass("video--show");
    player.stopVideo();
    window.removeEventListener("keydown", handleEscape);
  });
});
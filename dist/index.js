"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Messenger =
/*#__PURE__*/
function () {
  function Messenger() {
    _classCallCheck(this, Messenger);

    this.subscriptions = {};
  }

  _createClass(Messenger, [{
    key: "createInstance",
    value: function createInstance() {
      return new Messenger();
    }
  }, {
    key: "set",
    value: function set(event) {
      this.subscriptions[event] = this.subscriptions[event] || [];
    }
  }, {
    key: "unset",
    value: function unset(event) {
      this.subscriptions[event] = [];
    }
  }, {
    key: "on",
    value: function on(event, callback) {
      var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      this.set(event);
      this.subscriptions[event].push({
        callback: callback,
        context: context
      });
      return this;
    }
  }, {
    key: "off",
    value: function off(event, callback) {
      this.set(event);
      this.subscriptions[event] = this.subscriptions[event].filter(function (sub) {
        return callback !== sub.callback;
      });
      return this;
    }
  }, {
    key: "send",
    value: function send() {
      var _arguments = Array.prototype.slice.call(arguments),
          event = _arguments[0],
          values = _arguments.slice(1);

      this.set(event);
      this.subscriptions[event].slice().forEach(function (_ref) {
        var callback = _ref.callback,
            context = _ref.context;
        callback.apply(context || global, values);
      });
      return this;
    }
  }]);

  return Messenger;
}();

var messenger = new Messenger();
module.exports = messenger;
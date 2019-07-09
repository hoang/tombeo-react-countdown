"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactCountdownNow = _interopRequireDefault(require("react-countdown-now"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TombeoReactCountdown =
/*#__PURE__*/
function (_Component) {
  _inherits(TombeoReactCountdown, _Component);

  function TombeoReactCountdown() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TombeoReactCountdown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TombeoReactCountdown)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onComplete", function () {
      // default complete handler
      console.log('Countdown completed!');
    });

    return _this;
  }

  _createClass(TombeoReactCountdown, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var countdownRenderer = function countdownRenderer(_ref) {
        var days = _ref.days,
            hours = _ref.hours,
            minutes = _ref.minutes,
            seconds = _ref.seconds,
            completed = _ref.completed;
        var content = '';

        if (completed) {
          content = _this2.props.completedText || 'Countdown completed!';
        } else {
          var dayPart = '';
          var dayLabel = _this2.props.dayLabel || 'Day';
          var dayLabelPlural = _this2.props.dayLabelPlural || dayLabel + 's';

          if (days == 1) {
            dayPart = days + ' ' + dayLabel + ' + ';
          }

          if (days > 1) {
            dayPart = days + ' ' + dayLabelPlural + ' + ';
          }

          if (hours < 10) {
            hours = '0' + hours;
          }

          if (minutes < 10) {
            minutes = '0' + minutes;
          }

          if (seconds < 10) {
            seconds = '0' + seconds;
          }

          content = dayPart + hours + ':' + minutes + ':' + seconds;
        }

        return _react.default.createElement("span", {
          className: "tombeo-react-countdown"
        }, content);
      };

      return _react.default.createElement(_reactCountdownNow.default, {
        onComplete: this.props.onComplete || this.onComplete,
        renderer: countdownRenderer,
        date: this.props.completeAt
      });
    }
  }]);

  return TombeoReactCountdown;
}(_react.Component);

var _default = TombeoReactCountdown;
exports.default = _default;
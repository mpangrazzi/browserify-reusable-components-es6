(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Component
 */

var Component = function () {
  function Component(ref) {
    _classCallCheck(this, Component);

    this.$el = document.querySelector(ref);

    if (!this.$el) {
      throw new Error('options.el must be an existing DOM element reference');
    }
  }

  _createClass(Component, [{
    key: 'html',
    set: function set(html) {
      this.$el.innerHTML = html;
    }
  }]);

  return Component;
}();

exports.default = Component;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('../base');

var _base2 = _interopRequireDefault(_base);

var _template = require('./template.jade');

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/**
 * Counter
 */

var Counter = function (_Component) {
  _inherits(Counter, _Component);

  function Counter(options) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Counter).call(this, options.ref));

    _this.value = options.initialValue || 0;
    _this.html = (0, _template2.default)({ value: _this.value });
    _this.$value = _this.$el.querySelector('span.value');
    return _this;
  }

  _createClass(Counter, [{
    key: 'add',
    value: function add(value) {
      var newValue = +value || 1;

      if (isNaN(newValue)) {
        throw new TypeError('value should be a number');
      }

      this.val += newValue;
      return this;
    }
  }, {
    key: 'val',
    get: function get() {
      return this.value;
    },
    set: function set(value) {
      this.$value.innerHTML = ++this.value;
    }
  }]);

  return Counter;
}(_base2.default);

exports.default = Counter;

},{"../base":1,"./template.jade":3}],3:[function(require,module,exports){
var jade = require('jade/lib/runtime.js');
module.exports=function template(locals) {


var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (value) {
var jade_indent = [];


buf.push("\n<div class=\"counter\">");


buf.push("Current value: <span class=\"badge value\">" + (jade.escape((jade_interp = value) == null ? '' : jade_interp)) + "</span>");


buf.push("</div>");

}.call(this,"value" in locals_for_with?locals_for_with.value:typeof value!=="undefined"?value:undefined));;return buf.join("");



}

},{"jade/lib/runtime.js":7}],4:[function(require,module,exports){
'use strict';

var _counter = require('./components/counter');

var _counter2 = _interopRequireDefault(_counter);

var _template = require('./template.jade');

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Entry point
 */

document.querySelector('#app').innerHTML = (0, _template2.default)();

var counter1 = new _counter2.default({
  initialValue: 2,
  ref: '#counter-1'
});

var counter2 = new _counter2.default({
  initialValue: 1,
  ref: '#counter-2'
});

setInterval(function () {
  counter1.add();
}, 1000);

setInterval(function () {
  counter2.add(2);
}, 2000);

},{"./components/counter":2,"./template.jade":5}],5:[function(require,module,exports){
var jade = require('jade/lib/runtime.js');
module.exports=function template(locals) {


var buf = [];
var jade_mixins = {};
var jade_interp;

var jade_indent = [];


buf.push("\n<h2>");


buf.push("Creating reusable components with Browserify");


buf.push("</h2>");


buf.push("\n<p>");


buf.push("This template is rendered with <a href=\"https://github.com/domenic/jadeify\">jadeify</a> and is located in /client/template.jade");


buf.push("</p>");


buf.push("\n<div class=\"components\">");


buf.push("\n  <div class=\"row\">");


buf.push("\n    <div class=\"col-md-6\">");


buf.push("\n      <div class=\"item\">");


buf.push("\n        <p class=\"lead\">");


buf.push("Counter (located in /client/components/counter)");


buf.push("</p>");


buf.push("\n        <p>");


buf.push("Starting with \"1\", it will add \"1\" every second");


buf.push("</p>");


buf.push("\n        <div id=\"counter-1\">");


buf.push("</div>");


buf.push("\n      </div>");


buf.push("\n    </div>");


buf.push("\n    <div class=\"col-md-6\">");


buf.push("\n      <div class=\"item\">");


buf.push("\n        <p class=\"lead\">");


buf.push("Another instance of Counter");


buf.push("</p>");


buf.push("\n        <p>");


buf.push("Starting with \"1\", it will add \"2\" every two second");


buf.push("</p>");


buf.push("\n        <div id=\"counter-2\">");


buf.push("</div>");


buf.push("\n      </div>");


buf.push("\n    </div>");


buf.push("\n  </div>");


buf.push("\n</div>");

;return buf.join("");



}

},{"jade/lib/runtime.js":7}],6:[function(require,module,exports){

},{}],7:[function(require,module,exports){
'use strict';

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = function merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = merge(attrs, a[i]);
    }
    return attrs;
  }
  var ac = a['class'];
  var bc = b['class'];

  if (ac || bc) {
    ac = ac || [];
    bc = bc || [];
    if (!Array.isArray(ac)) ac = [ac];
    if (!Array.isArray(bc)) bc = [bc];
    a['class'] = ac.concat(bc).filter(nulls);
  }

  for (var key in b) {
    if (key != 'class') {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Filter null `val`s.
 *
 * @param {*} val
 * @return {Boolean}
 * @api private
 */

function nulls(val) {
  return val != null && val !== '';
}

/**
 * join array as classes.
 *
 * @param {*} val
 * @return {String}
 */
exports.joinClasses = joinClasses;
function joinClasses(val) {
  return (Array.isArray(val) ? val.map(joinClasses) :
    (val && typeof val === 'object') ? Object.keys(val).filter(function (key) { return val[key]; }) :
    [val]).filter(nulls).join(' ');
}

/**
 * Render the given classes.
 *
 * @param {Array} classes
 * @param {Array.<Boolean>} escaped
 * @return {String}
 */
exports.cls = function cls(classes, escaped) {
  var buf = [];
  for (var i = 0; i < classes.length; i++) {
    if (escaped && escaped[i]) {
      buf.push(exports.escape(joinClasses([classes[i]])));
    } else {
      buf.push(joinClasses(classes[i]));
    }
  }
  var text = joinClasses(buf);
  if (text.length) {
    return ' class="' + text + '"';
  } else {
    return '';
  }
};


exports.style = function (val) {
  if (val && typeof val === 'object') {
    return Object.keys(val).map(function (style) {
      return style + ':' + val[style];
    }).join(';');
  } else {
    return val;
  }
};
/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = function attr(key, val, escaped, terse) {
  if (key === 'style') {
    val = exports.style(val);
  }
  if ('boolean' == typeof val || null == val) {
    if (val) {
      return ' ' + (terse ? key : key + '="' + key + '"');
    } else {
      return '';
    }
  } else if (0 == key.indexOf('data') && 'string' != typeof val) {
    if (JSON.stringify(val).indexOf('&') !== -1) {
      console.warn('Since Jade 2.0.0, ampersands (`&`) in data attributes ' +
                   'will be escaped to `&amp;`');
    };
    if (val && typeof val.toISOString === 'function') {
      console.warn('Jade will eliminate the double quotes around dates in ' +
                   'ISO form after 2.0.0');
    }
    return ' ' + key + "='" + JSON.stringify(val).replace(/'/g, '&apos;') + "'";
  } else if (escaped) {
    if (val && typeof val.toISOString === 'function') {
      console.warn('Jade will stringify dates in ISO form after 2.0.0');
    }
    return ' ' + key + '="' + exports.escape(val) + '"';
  } else {
    if (val && typeof val.toISOString === 'function') {
      console.warn('Jade will stringify dates in ISO form after 2.0.0');
    }
    return ' ' + key + '="' + val + '"';
  }
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} escaped
 * @return {String}
 */
exports.attrs = function attrs(obj, terse){
  var buf = [];

  var keys = Object.keys(obj);

  if (keys.length) {
    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i]
        , val = obj[key];

      if ('class' == key) {
        if (val = joinClasses(val)) {
          buf.push(' ' + key + '="' + val + '"');
        }
      } else {
        buf.push(exports.attr(key, val, false, terse));
      }
    }
  }

  return buf.join('');
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var jade_encode_html_rules = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;'
};
var jade_match_html = /[&<>"]/g;

function jade_encode_char(c) {
  return jade_encode_html_rules[c] || c;
}

exports.escape = jade_escape;
function jade_escape(html){
  var result = String(html).replace(jade_match_html, jade_encode_char);
  if (result === '' + html) return html;
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the jade in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @api private
 */

exports.rethrow = function rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || require('fs').readFileSync(filename, 'utf8')
  } catch (ex) {
    rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Jade') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};

exports.DebugItem = function DebugItem(lineno, filename) {
  this.lineno = lineno;
  this.filename = filename;
}

},{"fs":6}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnQvY29tcG9uZW50cy9iYXNlL2luZGV4LmpzIiwiY2xpZW50L2NvbXBvbmVudHMvY291bnRlci9pbmRleC5qcyIsIi9ob21lL21pY2hlbGUvd29ya3NwYWNlL2Jyb3dzZXJpZnktcmV1c2FibGUtY29tcG9uZW50cy1lczYvY2xpZW50L2NvbXBvbmVudHMvY291bnRlci90ZW1wbGF0ZS5qYWRlIiwiY2xpZW50L21haW4uanMiLCIvaG9tZS9taWNoZWxlL3dvcmtzcGFjZS9icm93c2VyaWZ5LXJldXNhYmxlLWNvbXBvbmVudHMtZXM2L2NsaWVudC90ZW1wbGF0ZS5qYWRlIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXItcmVzb2x2ZS9lbXB0eS5qcyIsIm5vZGVfbW9kdWxlcy9qYWRlL2xpYi9ydW50aW1lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztBQ0NBOzs7O0lBSXFCLFM7QUFFbkIscUJBQWEsR0FBYixFQUFrQjtBQUFBOztBQUNoQixTQUFLLEdBQUwsR0FBVyxTQUFTLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBWDs7QUFFQSxRQUFJLENBQUMsS0FBSyxHQUFWLEVBQWU7QUFDYixZQUFNLElBQUksS0FBSixDQUFVLHNEQUFWLENBQU47QUFDRDtBQUNGOzs7O3NCQUVTLEksRUFBTTtBQUNkLFdBQUssR0FBTCxDQUFTLFNBQVQsR0FBcUIsSUFBckI7QUFDRDs7Ozs7O2tCQVprQixTOzs7Ozs7Ozs7OztBQ0FyQjs7OztBQUNBOzs7Ozs7Ozs7OztBQUxBOzs7O0lBUXFCLE87OztBQUVuQixtQkFBYSxPQUFiLEVBQXNCO0FBQUE7O0FBQUEsMkZBQ2QsUUFBUSxHQURNOztBQUdwQixVQUFLLEtBQUwsR0FBYSxRQUFRLFlBQVIsSUFBd0IsQ0FBckM7QUFDQSxVQUFLLElBQUwsR0FBWSx3QkFBUyxFQUFFLE9BQU8sTUFBSyxLQUFkLEVBQVQsQ0FBWjtBQUNBLFVBQUssTUFBTCxHQUFjLE1BQUssR0FBTCxDQUFTLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBZDtBQUxvQjtBQU1yQjs7Ozt3QkFFSSxLLEVBQU87QUFDVixVQUFJLFdBQVcsQ0FBQyxLQUFELElBQVUsQ0FBekI7O0FBRUEsVUFBSSxNQUFNLFFBQU4sQ0FBSixFQUFxQjtBQUNuQixjQUFNLElBQUksU0FBSixDQUFjLDBCQUFkLENBQU47QUFDRDs7QUFFRCxXQUFLLEdBQUwsSUFBWSxRQUFaO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7Ozt3QkFFVTtBQUNULGFBQU8sS0FBSyxLQUFaO0FBQ0QsSztzQkFFUSxLLEVBQU87QUFDZCxXQUFLLE1BQUwsQ0FBWSxTQUFaLEdBQXdCLEVBQUUsS0FBSyxLQUEvQjtBQUNEOzs7Ozs7a0JBM0JrQixPOzs7Ozs7Ozs7Ozs7O0FDVHJCOzs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDSUE7Ozs7QUFDQTs7Ozs7O0FBTEE7Ozs7QUFRQSxTQUFTLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0IsU0FBL0IsR0FBMkMseUJBQTNDOztBQUVBLElBQUksV0FBVyxzQkFBWTtBQUN6QixnQkFBYyxDQURXO0FBRXpCLE9BQUs7QUFGb0IsQ0FBWixDQUFmOztBQUtBLElBQUksV0FBVyxzQkFBWTtBQUN6QixnQkFBYyxDQURXO0FBRXpCLE9BQUs7QUFGb0IsQ0FBWixDQUFmOztBQUtBLFlBQVksWUFBVztBQUNyQixXQUFTLEdBQVQ7QUFDRCxDQUZELEVBRUcsSUFGSDs7QUFJQSxZQUFZLFlBQVc7QUFDckIsV0FBUyxHQUFULENBQWEsQ0FBYjtBQUNELENBRkQsRUFFRyxJQUZIOzs7Ozs7Ozs7Ozs7O0FDekJBOzs7QUFBQTs7Ozs7O0FBRUE7OztBQUFBOzs7Ozs7QUFFQTs7O0FBRUE7OztBQUVBOzs7QUFDQTs7O0FBRUE7OztBQUFBOzs7Ozs7QUFDQTs7O0FBQUE7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7O0FBQ0E7OztBQUVBOzs7QUFBQTs7Ozs7O0FBQ0E7OztBQUFBOzs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbi8qKlxuICogQ29tcG9uZW50XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvciAocmVmKSB7XG4gICAgdGhpcy4kZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHJlZilcblxuICAgIGlmICghdGhpcy4kZWwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignb3B0aW9ucy5lbCBtdXN0IGJlIGFuIGV4aXN0aW5nIERPTSBlbGVtZW50IHJlZmVyZW5jZScpXG4gICAgfVxuICB9XG5cbiAgc2V0IGh0bWwgKGh0bWwpIHtcbiAgICB0aGlzLiRlbC5pbm5lckhUTUwgPSBodG1sXG4gIH1cblxufVxuIiwiXG4vKipcbiAqIENvdW50ZXJcbiAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2Jhc2UnXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZS5qYWRlJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdW50ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgc3VwZXIob3B0aW9ucy5yZWYpO1xuXG4gICAgdGhpcy52YWx1ZSA9IG9wdGlvbnMuaW5pdGlhbFZhbHVlIHx8IDBcbiAgICB0aGlzLmh0bWwgPSB0ZW1wbGF0ZSh7IHZhbHVlOiB0aGlzLnZhbHVlIH0pXG4gICAgdGhpcy4kdmFsdWUgPSB0aGlzLiRlbC5xdWVyeVNlbGVjdG9yKCdzcGFuLnZhbHVlJylcbiAgfVxuXG4gIGFkZCAodmFsdWUpIHtcbiAgICBsZXQgbmV3VmFsdWUgPSArdmFsdWUgfHwgMVxuXG4gICAgaWYgKGlzTmFOKG5ld1ZhbHVlKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndmFsdWUgc2hvdWxkIGJlIGEgbnVtYmVyJylcbiAgICB9XG5cbiAgICB0aGlzLnZhbCArPSBuZXdWYWx1ZVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBnZXQgdmFsICgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZVxuICB9XG5cbiAgc2V0IHZhbCAodmFsdWUpIHtcbiAgICB0aGlzLiR2YWx1ZS5pbm5lckhUTUwgPSArK3RoaXMudmFsdWVcbiAgfVxuXG59XG4iLCJkaXYuY291bnRlclxuICB8IEN1cnJlbnQgdmFsdWU6IDxzcGFuIGNsYXNzPVwiYmFkZ2UgdmFsdWVcIj4je3ZhbHVlfTwvc3Bhbj5cblxuIiwiXG4vKipcbiAqIEVudHJ5IHBvaW50XG4gKi9cblxuaW1wb3J0IENvdW50ZXIgZnJvbSAnLi9jb21wb25lbnRzL2NvdW50ZXInXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZS5qYWRlJ1xuXG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKS5pbm5lckhUTUwgPSB0ZW1wbGF0ZSgpO1xuXG5sZXQgY291bnRlcjEgPSBuZXcgQ291bnRlcih7XG4gIGluaXRpYWxWYWx1ZTogMixcbiAgcmVmOiAnI2NvdW50ZXItMSdcbn0pO1xuXG5sZXQgY291bnRlcjIgPSBuZXcgQ291bnRlcih7XG4gIGluaXRpYWxWYWx1ZTogMSxcbiAgcmVmOiAnI2NvdW50ZXItMidcbn0pO1xuXG5zZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgY291bnRlcjEuYWRkKCk7XG59LCAxMDAwKTtcblxuc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gIGNvdW50ZXIyLmFkZCgyKTtcbn0sIDIwMDApO1xuIiwiaDIgQ3JlYXRpbmcgcmV1c2FibGUgY29tcG9uZW50cyB3aXRoIEJyb3dzZXJpZnlcblxucCBUaGlzIHRlbXBsYXRlIGlzIHJlbmRlcmVkIHdpdGggPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9kb21lbmljL2phZGVpZnlcIj5qYWRlaWZ5PC9hPiBhbmQgaXMgbG9jYXRlZCBpbiAvY2xpZW50L3RlbXBsYXRlLmphZGVcblxuZGl2LmNvbXBvbmVudHNcblxuICBkaXYucm93XG5cbiAgICBkaXYuY29sLW1kLTZcbiAgICAgIGRpdi5pdGVtXG5cbiAgICAgICAgcC5sZWFkIENvdW50ZXIgKGxvY2F0ZWQgaW4gL2NsaWVudC9jb21wb25lbnRzL2NvdW50ZXIpXG4gICAgICAgIHAgU3RhcnRpbmcgd2l0aCBcIjFcIiwgaXQgd2lsbCBhZGQgXCIxXCIgZXZlcnkgc2Vjb25kXG4gICAgICAgIGRpdiNjb3VudGVyLTFcblxuICAgIGRpdi5jb2wtbWQtNlxuICAgICAgZGl2Lml0ZW1cblxuICAgICAgICBwLmxlYWQgQW5vdGhlciBpbnN0YW5jZSBvZiBDb3VudGVyXG4gICAgICAgIHAgU3RhcnRpbmcgd2l0aCBcIjFcIiwgaXQgd2lsbCBhZGQgXCIyXCIgZXZlcnkgdHdvIHNlY29uZFxuICAgICAgICBkaXYjY291bnRlci0yXG4iLCIiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogTWVyZ2UgdHdvIGF0dHJpYnV0ZSBvYmplY3RzIGdpdmluZyBwcmVjZWRlbmNlXG4gKiB0byB2YWx1ZXMgaW4gb2JqZWN0IGBiYC4gQ2xhc3NlcyBhcmUgc3BlY2lhbC1jYXNlZFxuICogYWxsb3dpbmcgZm9yIGFycmF5cyBhbmQgbWVyZ2luZy9qb2luaW5nIGFwcHJvcHJpYXRlbHlcbiAqIHJlc3VsdGluZyBpbiBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYVxuICogQHBhcmFtIHtPYmplY3R9IGJcbiAqIEByZXR1cm4ge09iamVjdH0gYVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5tZXJnZSA9IGZ1bmN0aW9uIG1lcmdlKGEsIGIpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICB2YXIgYXR0cnMgPSBhWzBdO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgYXR0cnMgPSBtZXJnZShhdHRycywgYVtpXSk7XG4gICAgfVxuICAgIHJldHVybiBhdHRycztcbiAgfVxuICB2YXIgYWMgPSBhWydjbGFzcyddO1xuICB2YXIgYmMgPSBiWydjbGFzcyddO1xuXG4gIGlmIChhYyB8fCBiYykge1xuICAgIGFjID0gYWMgfHwgW107XG4gICAgYmMgPSBiYyB8fCBbXTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYWMpKSBhYyA9IFthY107XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGJjKSkgYmMgPSBbYmNdO1xuICAgIGFbJ2NsYXNzJ10gPSBhYy5jb25jYXQoYmMpLmZpbHRlcihudWxscyk7XG4gIH1cblxuICBmb3IgKHZhciBrZXkgaW4gYikge1xuICAgIGlmIChrZXkgIT0gJ2NsYXNzJykge1xuICAgICAgYVtrZXldID0gYltrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhO1xufTtcblxuLyoqXG4gKiBGaWx0ZXIgbnVsbCBgdmFsYHMuXG4gKlxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBudWxscyh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPSBudWxsICYmIHZhbCAhPT0gJyc7XG59XG5cbi8qKlxuICogam9pbiBhcnJheSBhcyBjbGFzc2VzLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmV4cG9ydHMuam9pbkNsYXNzZXMgPSBqb2luQ2xhc3NlcztcbmZ1bmN0aW9uIGpvaW5DbGFzc2VzKHZhbCkge1xuICByZXR1cm4gKEFycmF5LmlzQXJyYXkodmFsKSA/IHZhbC5tYXAoam9pbkNsYXNzZXMpIDpcbiAgICAodmFsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSA/IE9iamVjdC5rZXlzKHZhbCkuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIHZhbFtrZXldOyB9KSA6XG4gICAgW3ZhbF0pLmZpbHRlcihudWxscykuam9pbignICcpO1xufVxuXG4vKipcbiAqIFJlbmRlciB0aGUgZ2l2ZW4gY2xhc3Nlcy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBjbGFzc2VzXG4gKiBAcGFyYW0ge0FycmF5LjxCb29sZWFuPn0gZXNjYXBlZFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5leHBvcnRzLmNscyA9IGZ1bmN0aW9uIGNscyhjbGFzc2VzLCBlc2NhcGVkKSB7XG4gIHZhciBidWYgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjbGFzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGVzY2FwZWQgJiYgZXNjYXBlZFtpXSkge1xuICAgICAgYnVmLnB1c2goZXhwb3J0cy5lc2NhcGUoam9pbkNsYXNzZXMoW2NsYXNzZXNbaV1dKSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBidWYucHVzaChqb2luQ2xhc3NlcyhjbGFzc2VzW2ldKSk7XG4gICAgfVxuICB9XG4gIHZhciB0ZXh0ID0gam9pbkNsYXNzZXMoYnVmKTtcbiAgaWYgKHRleHQubGVuZ3RoKSB7XG4gICAgcmV0dXJuICcgY2xhc3M9XCInICsgdGV4dCArICdcIic7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5cbmV4cG9ydHMuc3R5bGUgPSBmdW5jdGlvbiAodmFsKSB7XG4gIGlmICh2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModmFsKS5tYXAoZnVuY3Rpb24gKHN0eWxlKSB7XG4gICAgICByZXR1cm4gc3R5bGUgKyAnOicgKyB2YWxbc3R5bGVdO1xuICAgIH0pLmpvaW4oJzsnKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsO1xuICB9XG59O1xuLyoqXG4gKiBSZW5kZXIgdGhlIGdpdmVuIGF0dHJpYnV0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGVzY2FwZWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdGVyc2VcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5hdHRyID0gZnVuY3Rpb24gYXR0cihrZXksIHZhbCwgZXNjYXBlZCwgdGVyc2UpIHtcbiAgaWYgKGtleSA9PT0gJ3N0eWxlJykge1xuICAgIHZhbCA9IGV4cG9ydHMuc3R5bGUodmFsKTtcbiAgfVxuICBpZiAoJ2Jvb2xlYW4nID09IHR5cGVvZiB2YWwgfHwgbnVsbCA9PSB2YWwpIHtcbiAgICBpZiAodmFsKSB7XG4gICAgICByZXR1cm4gJyAnICsgKHRlcnNlID8ga2V5IDoga2V5ICsgJz1cIicgKyBrZXkgKyAnXCInKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfSBlbHNlIGlmICgwID09IGtleS5pbmRleE9mKCdkYXRhJykgJiYgJ3N0cmluZycgIT0gdHlwZW9mIHZhbCkge1xuICAgIGlmIChKU09OLnN0cmluZ2lmeSh2YWwpLmluZGV4T2YoJyYnKSAhPT0gLTEpIHtcbiAgICAgIGNvbnNvbGUud2FybignU2luY2UgSmFkZSAyLjAuMCwgYW1wZXJzYW5kcyAoYCZgKSBpbiBkYXRhIGF0dHJpYnV0ZXMgJyArXG4gICAgICAgICAgICAgICAgICAgJ3dpbGwgYmUgZXNjYXBlZCB0byBgJmFtcDtgJyk7XG4gICAgfTtcbiAgICBpZiAodmFsICYmIHR5cGVvZiB2YWwudG9JU09TdHJpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2FybignSmFkZSB3aWxsIGVsaW1pbmF0ZSB0aGUgZG91YmxlIHF1b3RlcyBhcm91bmQgZGF0ZXMgaW4gJyArXG4gICAgICAgICAgICAgICAgICAgJ0lTTyBmb3JtIGFmdGVyIDIuMC4wJyk7XG4gICAgfVxuICAgIHJldHVybiAnICcgKyBrZXkgKyBcIj0nXCIgKyBKU09OLnN0cmluZ2lmeSh2YWwpLnJlcGxhY2UoLycvZywgJyZhcG9zOycpICsgXCInXCI7XG4gIH0gZWxzZSBpZiAoZXNjYXBlZCkge1xuICAgIGlmICh2YWwgJiYgdHlwZW9mIHZhbC50b0lTT1N0cmluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS53YXJuKCdKYWRlIHdpbGwgc3RyaW5naWZ5IGRhdGVzIGluIElTTyBmb3JtIGFmdGVyIDIuMC4wJyk7XG4gICAgfVxuICAgIHJldHVybiAnICcgKyBrZXkgKyAnPVwiJyArIGV4cG9ydHMuZXNjYXBlKHZhbCkgKyAnXCInO1xuICB9IGVsc2Uge1xuICAgIGlmICh2YWwgJiYgdHlwZW9mIHZhbC50b0lTT1N0cmluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS53YXJuKCdKYWRlIHdpbGwgc3RyaW5naWZ5IGRhdGVzIGluIElTTyBmb3JtIGFmdGVyIDIuMC4wJyk7XG4gICAgfVxuICAgIHJldHVybiAnICcgKyBrZXkgKyAnPVwiJyArIHZhbCArICdcIic7XG4gIH1cbn07XG5cbi8qKlxuICogUmVuZGVyIHRoZSBnaXZlbiBhdHRyaWJ1dGVzIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge09iamVjdH0gZXNjYXBlZFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5leHBvcnRzLmF0dHJzID0gZnVuY3Rpb24gYXR0cnMob2JqLCB0ZXJzZSl7XG4gIHZhciBidWYgPSBbXTtcblxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cbiAgaWYgKGtleXMubGVuZ3RoKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXVxuICAgICAgICAsIHZhbCA9IG9ialtrZXldO1xuXG4gICAgICBpZiAoJ2NsYXNzJyA9PSBrZXkpIHtcbiAgICAgICAgaWYgKHZhbCA9IGpvaW5DbGFzc2VzKHZhbCkpIHtcbiAgICAgICAgICBidWYucHVzaCgnICcgKyBrZXkgKyAnPVwiJyArIHZhbCArICdcIicpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidWYucHVzaChleHBvcnRzLmF0dHIoa2V5LCB2YWwsIGZhbHNlLCB0ZXJzZSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBidWYuam9pbignJyk7XG59O1xuXG4vKipcbiAqIEVzY2FwZSB0aGUgZ2l2ZW4gc3RyaW5nIG9mIGBodG1sYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaHRtbFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxudmFyIGphZGVfZW5jb2RlX2h0bWxfcnVsZXMgPSB7XG4gICcmJzogJyZhbXA7JyxcbiAgJzwnOiAnJmx0OycsXG4gICc+JzogJyZndDsnLFxuICAnXCInOiAnJnF1b3Q7J1xufTtcbnZhciBqYWRlX21hdGNoX2h0bWwgPSAvWyY8PlwiXS9nO1xuXG5mdW5jdGlvbiBqYWRlX2VuY29kZV9jaGFyKGMpIHtcbiAgcmV0dXJuIGphZGVfZW5jb2RlX2h0bWxfcnVsZXNbY10gfHwgYztcbn1cblxuZXhwb3J0cy5lc2NhcGUgPSBqYWRlX2VzY2FwZTtcbmZ1bmN0aW9uIGphZGVfZXNjYXBlKGh0bWwpe1xuICB2YXIgcmVzdWx0ID0gU3RyaW5nKGh0bWwpLnJlcGxhY2UoamFkZV9tYXRjaF9odG1sLCBqYWRlX2VuY29kZV9jaGFyKTtcbiAgaWYgKHJlc3VsdCA9PT0gJycgKyBodG1sKSByZXR1cm4gaHRtbDtcbiAgZWxzZSByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBSZS10aHJvdyB0aGUgZ2l2ZW4gYGVycmAgaW4gY29udGV4dCB0byB0aGVcbiAqIHRoZSBqYWRlIGluIGBmaWxlbmFtZWAgYXQgdGhlIGdpdmVuIGBsaW5lbm9gLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVyclxuICogQHBhcmFtIHtTdHJpbmd9IGZpbGVuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gbGluZW5vXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLnJldGhyb3cgPSBmdW5jdGlvbiByZXRocm93KGVyciwgZmlsZW5hbWUsIGxpbmVubywgc3RyKXtcbiAgaWYgKCEoZXJyIGluc3RhbmNlb2YgRXJyb3IpKSB0aHJvdyBlcnI7XG4gIGlmICgodHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyB8fCAhZmlsZW5hbWUpICYmICFzdHIpIHtcbiAgICBlcnIubWVzc2FnZSArPSAnIG9uIGxpbmUgJyArIGxpbmVubztcbiAgICB0aHJvdyBlcnI7XG4gIH1cbiAgdHJ5IHtcbiAgICBzdHIgPSBzdHIgfHwgcmVxdWlyZSgnZnMnKS5yZWFkRmlsZVN5bmMoZmlsZW5hbWUsICd1dGY4JylcbiAgfSBjYXRjaCAoZXgpIHtcbiAgICByZXRocm93KGVyciwgbnVsbCwgbGluZW5vKVxuICB9XG4gIHZhciBjb250ZXh0ID0gM1xuICAgICwgbGluZXMgPSBzdHIuc3BsaXQoJ1xcbicpXG4gICAgLCBzdGFydCA9IE1hdGgubWF4KGxpbmVubyAtIGNvbnRleHQsIDApXG4gICAgLCBlbmQgPSBNYXRoLm1pbihsaW5lcy5sZW5ndGgsIGxpbmVubyArIGNvbnRleHQpO1xuXG4gIC8vIEVycm9yIGNvbnRleHRcbiAgdmFyIGNvbnRleHQgPSBsaW5lcy5zbGljZShzdGFydCwgZW5kKS5tYXAoZnVuY3Rpb24obGluZSwgaSl7XG4gICAgdmFyIGN1cnIgPSBpICsgc3RhcnQgKyAxO1xuICAgIHJldHVybiAoY3VyciA9PSBsaW5lbm8gPyAnICA+ICcgOiAnICAgICcpXG4gICAgICArIGN1cnJcbiAgICAgICsgJ3wgJ1xuICAgICAgKyBsaW5lO1xuICB9KS5qb2luKCdcXG4nKTtcblxuICAvLyBBbHRlciBleGNlcHRpb24gbWVzc2FnZVxuICBlcnIucGF0aCA9IGZpbGVuYW1lO1xuICBlcnIubWVzc2FnZSA9IChmaWxlbmFtZSB8fCAnSmFkZScpICsgJzonICsgbGluZW5vXG4gICAgKyAnXFxuJyArIGNvbnRleHQgKyAnXFxuXFxuJyArIGVyci5tZXNzYWdlO1xuICB0aHJvdyBlcnI7XG59O1xuXG5leHBvcnRzLkRlYnVnSXRlbSA9IGZ1bmN0aW9uIERlYnVnSXRlbShsaW5lbm8sIGZpbGVuYW1lKSB7XG4gIHRoaXMubGluZW5vID0gbGluZW5vO1xuICB0aGlzLmZpbGVuYW1lID0gZmlsZW5hbWU7XG59XG4iXX0=

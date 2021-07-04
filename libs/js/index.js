'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React$1 = require('react');
var _ = require('lodash');
var PropTypes = require('prop-types');
var linaria = require('linaria');
var classNames = require('classnames');
var ReactModal = require('react-modal');
var core = require('@popperjs/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React$1);
var ___default = /*#__PURE__*/_interopDefaultLegacy(_);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);
var ReactModal__default = /*#__PURE__*/_interopDefaultLegacy(ReactModal);

var testIdAttribute = function testIdAttribute(id) {
  if (process.env.NODE_ENV === 'test' || process.env.SHOW_DEV === 'included') {
    return {
      'data-test-id': id
    };
  }

  return undefined;
}; // export {

var HR = function HR() {
  return /*#__PURE__*/React__default['default'].createElement("hr", null);
};

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var ViewPortContext = /*#__PURE__*/React$1.createContext({});

var ViewPortProvider = function ViewPortProvider(_ref) {
  var children = _ref.children;
  var setInitialHeight = global.innerHeight;
  var setInitialWidth = global.innerWidth;

  var _useState = React$1.useState(setInitialWidth),
      _useState2 = _slicedToArray(_useState, 2),
      width = _useState2[0],
      setWidth = _useState2[1];

  var _useState3 = React$1.useState(setInitialHeight),
      _useState4 = _slicedToArray(_useState3, 2),
      height = _useState4[0],
      setHeight = _useState4[1];

  var handleWindowResize = function handleWindowResize() {
    setWidth(global.innerWidth);
    setHeight(global.innerHeight);
  };

  var handleDebouncedWindowResize = ___default['default'].debounce(handleWindowResize, 100);

  React$1.useEffect(function () {
    if (global && global.removeEventListener) {
      global.removeEventListener('resize', handleDebouncedWindowResize);
    }

    if (global && global.addEventListener) {
      global.addEventListener('resize', handleDebouncedWindowResize);
    }
  }, [handleDebouncedWindowResize]); // store the width/height values in the value of the Provider */

  var value = {
    width: width,
    height: height
  };
  return /*#__PURE__*/React__default['default'].createElement(ViewPortContext.Provider, {
    value: value
  }, children);
};

//   background: var(--color-actionPrimarySubdued);
//   border-radius: 50%;
//   margin: 0;
//   padding: 0;
//   color: var(--color-textPrimary);
//   position: relative;
//   span.default {
//     transition: all 0.1s ease-out;
//   }
//   span.with-image {
//     &::after {
//       content: '';
//       display: block;
//       position: absolute;
//       top: 0;
//       left: 0;
//       width: 100%;
//       height: 100%;
//       border-radius: 50%;
//       transition: all 0.1s ease-out;
//       opacity: 0;
//     }
//   }
//   &:focus {
//     outline: none;
//     &::after {
//       content: '';
//       display: block;
//       position: absolute;
//       top: -4px;
//       bottom: -4px;
//       left: -4px;
//       right: -4px;
//       border-radius: 50%;
//       border: 2px solid var(--color-actionPrimary);
//     }
//   }
//   &:hover {
//     background: none;
//     & span.default {
//       color: var(--color-textLinkHover);
//     }
//     & span.with-image {
//       &::after {
//         background-color: var(--color-actionPrimary);
//         opacity: 0.38;
//       }
//     }
//   }
//   &:active {
//     & span.default {
//       color: var(--color-textLinkPressed);
//     }
//     & span.with-image {
//       &::after {
//         background-color: var(--color-actionPrimaryHover);
//         opacity: 38%;
//       }
//     }
//   }
// `

var buttonStyles = "b1d9d15f"; // .b1344aws {

var containerMaxWidth = 1128;
var screenTinyHandset = 359;
var screenSmallHandset = 399;
var screenMediumHandset = 479;
var screenLargeHandset = 599;
var screenTinyTablet = 719;
var screenSmallTablet = 839;
var screenMediumTablet = 959;
var screenLargeTablet = 1023;
var screenSmallDesktop = 1279;
var screenMediumDesktop = 1439;

var breakpointTinyHandset = "@media (max-width: ".concat(screenTinyHandset, "px)");
var breakpointSmallHandset = "@media (max-width: ".concat(screenSmallHandset, "px)");
var breakpointMediumHandset = "@media (max-width: ".concat(screenMediumHandset, "px)");
var breakpointLargeHandset = "@media (max-width: ".concat(screenLargeHandset, "px)");
var breakpointTinyTablet = "@media (max-width: ".concat(screenTinyTablet, "px)");
var breakpointSmallTablet = "@media (max-width: ".concat(screenSmallTablet, "px)");
var breakpointMediumTablet = "@media (max-width: ".concat(screenMediumTablet, "px)");
var breakpointLargeTablet = "@media (max-width: ".concat(screenLargeTablet, "px)");
var breakpointSmallDesktop = "@media (max-width: ".concat(screenSmallDesktop, "px)");
var breakpointMediumDesktop = "@media (max-width: ".concat(screenMediumDesktop, "px)");

var headerStyle = "h1y6irym";

var listStyle = "l1y0uodo";

var fontSerif = "\"Blanco OSF\", Garamond, Times, Serif";
var fontSerifAlt = "\"Doyle\", Garamond, Times, Serif";
var fontSansSerif = "\"Graphik Web\", \"Helvetica Neue\", Helvetica, Arial, Sans-Serif"; // root font sizes are percent values to honor a user's browser setting if applicable

var fontSizeRootSmall = '80%'; // root size at small breakpoint

var fontSizeRootMedium = '87.5%'; // root size at medium breakpoint

var fontSizeRoot = '100%'; // root size value (browser default is 16px)
// font sizes use 'rems' to provide consistent font sizes that will scale with the
// root font size (browser font size setting), but won't be affected by inherited
// font size assignments (e.g. 'em' sizing)

var fontSize065 = '0.625rem'; // 16px * 0.625 = 10px

var fontSize075 = '0.75rem'; // 16px * 0.75 = 12px

var fontSize085 = '0.875rem'; // 16px * 0.875 = 14px

var fontSize100 = '1rem'; // 16px * 1 = 16px

var fontSize125 = '1.1875rem'; // 16px * 1.1875 = 19px

var fontSize150 = '1.4375rem'; // 16px * 1.4375 = 23px

var fontSize175 = '1.75rem'; // 16px * 1.75 = 28px

var fontSize200 = '2.0625rem'; // 16px * 2.0625 = 33px

var fontSize250 = '2.5rem'; // 16px * 2.5 = 40px

var fontSize300 = '3rem'; // 16px * 2.5 = 48px
// spacing uses 'rems' to provide consistent spacing between elements that will
// scale with the root breakpoint changes, but won't be affected by font size changes.

var spacing025 = '0.25rem'; // 16px * 0.25 = 4px

var spacing050 = '0.5rem'; // 16px * 0.5 = 8px

var spacing075 = '0.75rem'; // 16px * 0.75 = 12px

var spacing100 = '1rem'; // 16px * 1 = 16px

var spacing150 = '1.5rem'; // 16px * 1.5 = 24px

var spacing250 = '2.5rem'; // 16px * 2 = 40px

var spacing400 = '4rem'; // 16px * 4 = 64px

var spacing650 = '6.5rem'; // 16px * 6.5 = 104px
// general root-relative sizing

var size025 = '0.25rem'; // 16px * 0.25 = 4px

var size050 = '0.5rem'; // 16px * 0.5 = 8px

var size075 = '0.75rem'; // 16px * 0.75 = 12px

var size100 = '1rem'; // 16px * 1.0 = 16px

var size125 = '1.25rem'; // 16px * 1.25 = 20px

var size150 = '1.5rem'; // 16px * 1.5 = 24px

var size200 = '2rem'; // 16px * 2.0 = 32px

var size250 = '2.5rem'; // 16px * 2.5 = 40px

var size300 = '3rem'; // 16px * 3.0 = 48px

var size400 = '4rem'; // 16px * 4.0 = 64px

var size500 = '5rem'; // 16px * 5.0 = 80px

var linksStyle = "l133sa8o";

var toolsStyle = "ty5iddj";

var accountLinkStyle = "a1illqq1";

var upgradeLinkStyle = "uhglm6i";

var signupLinkStyle = "sied4rs";

var pageContainerStyle = "p1rssxub";

var fixedNavContainer = "f1nxy93z";

var avatarStyle = "afvsofp";
var imageStyle = "i1rhml2v";
var defaultStyle = "d1u0rqv3";

var navStyle = "n1kskpjn";

var PageContainer = function PageContainer(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "".concat(pageContainerStyle, " ").concat(className)
  }, children);
};

PageContainer.propTypes = {
  children: PropTypes__default['default'].node,
  className: PropTypes__default['default'].string
};
PageContainer.defaultProps = {
  children: null,
  className: ''
};

var logoStyle$1 = "ln1xkw9";
var logoLabelStyle$1 = "lqmbele";

var Logo = function Logo(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: classNames__default['default'](logoStyle$1, className)
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    className: logoLabelStyle$1
  }, "Pocket"));
};

Logo.propTypes = {
  className: PropTypes__default['default'].string
};
Logo.defaultProps = {
  className: ''
};

var logoStyle = "l6w6cqy";
var logoLabelStyle = "l3s4z16";

var LogoMark = function LogoMark(_ref) {
  var className = _ref.className;
  // const logoStyle$1 = "ljk7yn1";
  // const logoLabelStyle$1 = "lchp5up";
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: classNames__default['default'](logoStyle, className)
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    className: logoLabelStyle
  }, "Pocket"));
};

LogoMark.propTypes = {
  className: PropTypes__default['default'].string
};
LogoMark.defaultProps = {
  className: ''
};

var useViewport = function useViewport() {
  var viewContext = React$1.useContext(ViewPortContext);
  var width = viewContext.width;
  var height = viewContext.height; // if we're in-browser and width/height is undefined, likely means that the provider
  // was not added to outer scope.

  if (typeof window !== 'undefined' && (width === undefined || height === undefined)) {
    console.warn('a component using the custom `useViewport` hook was missing `ViewPortContext`. Make sure your app or feature is wrapped in a `<ViewportProvider>` instance.');
  }

  return {
    width: width,
    height: height
  };
};

var objectWithoutProperties = function objectWithoutProperties(object, properties) {
  var obj = {};
  var keys = Object.keys(object);
  keys.forEach(function (key) {
    if (!~properties.indexOf(key)) {
      obj[key] = object[key];
    }
  });
  return obj;
};

var Button = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var children = props.children,
      variant = props.variant,
      size = props.size,
      href = props.href,
      disabled = props.disabled,
      className = props.className;
  var remainingProps = objectWithoutProperties(props, ["children", "variant", "size", "href", "disabled", "className"]);
  var classes = classNames__default['default'](buttonStyles, className, {
    primary: variant === '' || variant === 'primary',
    secondary: variant === 'secondary',
    emphasized: variant === 'emphasized',
    brand: variant === 'brand',
    inline: variant === 'inline',
    large: size === 'large',
    small: size === 'small',
    disabled: disabled
  });

  var elementProps = _objectSpread2({
    className: classes,
    disabled: disabled,
    href: href,
    ref: ref
  }, remainingProps);

  console.log(elementProps, remainingProps);

  if (href) {
    return /*#__PURE__*/React__default['default'].createElement("a", elementProps, children);
  } else {
    return /*#__PURE__*/React__default['default'].createElement("button", elementProps, children);
  }
});
Button.propTypes = {
  /**
   * Content of the button (e.g. button label)
   */
  children: PropTypes__default['default'].node.isRequired,

  /**
   * Visual variant of the button, from design standards
   */
  variant: PropTypes__default['default'].oneOf(['primary', 'secondary', 'outline', 'brand', 'emphasized', 'inline']),

  /**
   * Size of the button
   */
  size: PropTypes__default['default'].oneOf(['normal', 'large', 'small']),

  /**
   * Destination url for the button - if provided, will render the button as
   * an anchor styled like a button
   */
  href: PropTypes__default['default'].string,

  /**
   * CSS class name if styles need to be provided/overridden.
   */
  className: PropTypes__default['default'].string
};
Button.defaultProps = {
  variant: 'primary',
  size: 'normal',
  href: undefined,
  className: null
};

var tooltipStyles = "tj3ixaw"; // export default tooltipStyles;
// .t1221eea {
//     display:inline-block
//    }
//    .t1221eea,
//    .t1221eea[tooltip] {
//     position:relative
//    }
//    .t1221eea[tooltip]:after,
//    .t1221eea[tooltip]:before {
//     line-height:1;
//     -webkit-user-select:none;
//     -moz-user-select:none;
//     -ms-user-select:none;
//     user-select:none;
//     pointer-events:none;
//     position:absolute;
//     opacity:0;
//     left:50%;
//     -webkit-transform:translate(-50%);
//     -ms-transform:translate(-50%);
//     transform:translate(-50%)
//    }
//    .t1221eea[tooltip]:before {
//     content:"";
//     z-index:var(--zIndexTooltip);
//     border:4px solid transparent
//    }
//    .t1221eea[tooltip]:after {
//     content:attr(tooltip);
//     font-size:var(--fontSize085);
//     z-index:var(--zIndexTooltip);
//     font-family:var(--fontSansSerif);
//     text-align:center;
//     min-width:3rem;
//     max-width:20rem;
//     white-space:nowrap;
//     overflow:hidden;
//     text-overflow:ellipsis;
//     line-height:143%;
//     padding:var(--spacing025) var(--spacing050);
//     border-radius:4px;
//     background-color:var(--color-tooltipCanvas);
//     color:var(--color-tooltipText)
//    }

var placementTop = "po22e5j";
var placementBottom = "p3dp2tm";
var delayStyle = "d4f4bx3";

var WithTooltip = function WithTooltip(_ref) {
  var children = _ref.children,
      label = _ref.label,
      isBlockLevel = _ref.isBlockLevel,
      placement = _ref.placement,
      delay = _ref.delay;

  // const tooltipStyles = "t1221eea";
  // const placementBottom = "pzhe358";
  // const placementTop = "pmdugmx";
  // const delayStyle = "d1ihjjkq";
  if (typeof placement === 'undefined') {
    placement = 'bottom';
  }

  if (typeof delay === 'undefined') {
    delay = false;
  }

  var placementStyle = placement === 'bottom' ? placementBottom : placementTop;
  var tipStyle = linaria.cx(tooltipStyles, placementStyle, delay && delayStyle);
  return isBlockLevel ? /*#__PURE__*/React__default['default'].createElement("div", {
    className: tipStyle,
    "aria-label": label,
    tooltip: label
  }, children) : /*#__PURE__*/React__default['default'].createElement("span", {
    className: tipStyle,
    "aria-label": label,
    tooltip: label
  }, children);
};

WithTooltip.propTypes = {
  children: PropTypes__default['default'].node.isRequired,
  label: PropTypes__default['default'].string.isRequired
};

var InputWrapper = function InputWrapper(_ref) {
  var labelText = _ref.labelText,
      helperText = _ref.helperText,
      error = _ref.error,
      displayErrorInline = _ref.displayErrorInline,
      className = _ref.className,
      disabled = _ref.disabled,
      value = _ref.value,
      name = _ref.name,
      showCharacterLimit = _ref.showCharacterLimit,
      characterLimit = _ref.characterLimit,
      children = _ref.children;
  var inputWrapper = "i1kkg3pa";
  var helperTextStyle = "h4j4419";
  var errorMessageStyle = "ef125g2";
  var characterCount = value === null || value === void 0 ? void 0 : value.length;
  var characterCountLabel = "".concat(characterCount, "/").concat(characterLimit);
  var characterLimitError = characterCount > characterLimit ? 'Character Limit Exceeded' : null;
  var errorWithLengthCheck = error || characterLimitError || null;
  return /*#__PURE__*/React__default['default'].createElement("div", _extends({
    className: classNames__default['default'](inputWrapper, className, {
      invalid: !!errorWithLengthCheck,
      disabled: disabled
    })
  }, testIdAttribute('email-input')), children, /*#__PURE__*/React__default['default'].createElement("span", {
    className: classNames__default['default']('label-wrapper', {
      'has-value': !!value
    })
  }, /*#__PURE__*/React__default['default'].createElement("label", _extends({
    htmlFor: name
  }, testIdAttribute('input-label')), labelText)), (helperText || showCharacterLimit) && !errorWithLengthCheck ? /*#__PURE__*/React__default['default'].createElement("span", _extends({
    className: helperTextStyle
  }, testIdAttribute('helper-text')), showCharacterLimit ? characterCountLabel : helperText) : null, errorWithLengthCheck && typeof errorWithLengthCheck === 'string' ? /*#__PURE__*/React__default['default'].createElement("span", _extends({
    className: classNames__default['default'](helperTextStyle, errorMessageStyle, {
      'inline-error': displayErrorInline
    })
  }, testIdAttribute('error-text')), errorWithLengthCheck) : null);
};

var TextInput = function TextInput(_ref) {
  var name = _ref.name,
      labelText = _ref.labelText,
      helperText = _ref.helperText,
      value = _ref.value,
      error = _ref.error,
      displayErrorInline = _ref.displayErrorInline,
      className = _ref.className,
      disabled = _ref.disabled,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      inputStyles = _ref.inputStyles;
  return /*#__PURE__*/React__default['default'].createElement(InputWrapper, {
    labelText: labelText,
    helperText: helperText,
    error: error,
    displayErrorInline: displayErrorInline,
    className: className,
    disabled: disabled,
    name: name,
    value: value
  }, /*#__PURE__*/React__default['default'].createElement("input", _extends({
    type: "text",
    name: name,
    value: value,
    disabled: disabled,
    onChange: onChange,
    onFocus: onFocus,
    onBlur: onBlur,
    className: inputStyles
  }, testIdAttribute('text-input'))));
};

TextInput.propTypes = {
  /**
   * Name attribute to use with the text input
   */
  name: PropTypes__default['default'].string.isRequired,

  /**
   * Label for the input. Required for accessibility purposes.
   */
  labelText: PropTypes__default['default'].string.isRequired,

  /**
   * Helper text to display below the text input
   */
  helperText: PropTypes__default['default'].string,

  /**
   * Current value of the input. Should be controlled by state in the parent form.
   */
  value: PropTypes__default['default'].string,

  /**
   * If truthy, will apply an error visual state to the input. Pass a string value
   * to display as an error message below the input, which will take precedence
   * over any helperText.
   */
  error: PropTypes__default['default'].oneOfType([PropTypes__default['default'].bool, PropTypes__default['default'].string]),

  /**
   * Set to true to have the error message display inline below the text input, meaning
   * that it will take space in the layout and push other content below it, when
   * it appears.
   */
  displayErrorInline: PropTypes__default['default'].bool,

  /**
   * CSS class name to apply to the containing div
   */
  className: PropTypes__default['default'].string,

  /**
   * If true, will apply a disabled visual state and the input will not allow
   * user interaction.
   */
  disabled: PropTypes__default['default'].bool,

  /**
   * Called when the input value changes
   */
  onChange: PropTypes__default['default'].func,

  /**
   * Called when the user focuses the input
   */
  onFocus: PropTypes__default['default'].func,

  /**
   * Called when the user blurs the input
   */
  onBlur: PropTypes__default['default'].func
};
TextInput.defaultProps = {
  helperText: null,
  value: '',
  error: null,
  displayErrorInline: false,
  className: null,
  disabled: false,
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {}
};

var Icon = function Icon(_ref) {
  var children = _ref.children,
      className = _ref.className,
      id = _ref.id,
      title = _ref.title,
      description = _ref.description;
  var iconStyle = "i1acz0ik"; // if (className && !className.includes('icon')) {
  // className = className.concat(' icon');
  // }

  var ariaTitle = '';
  var ariaDescription = '';
  return /*#__PURE__*/React__default['default'].createElement("span", {
    className: classNames__default['default'](iconStyle, className)
  }, /*#__PURE__*/React__default['default'].cloneElement(children, {
    // note: only pass valid html/svg attributes here
    "aria-labelledby": "".concat(ariaTitle, " ").concat(ariaDescription)
  }, // accessibility tags are passed as children
  [title ? /*#__PURE__*/React__default['default'].createElement("title", {
    id: "".concat(id, "-title"),
    key: "".concat(id, "-title")
  }, title) : null, description ? /*#__PURE__*/React__default['default'].createElement("desc", {
    id: "".concat(id, "-description"),
    key: "".concat(id, "-description")
  }, description) : null]));
};

var Add = function Add() {
  return /*#__PURE__*/React__default['default'].createElement("svg", {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    d: "M12 3a1 1 0 011 1v7h7a1 1 0 110 2h-7v7a1 1 0 11-2 0v-7H4a1 1 0 110-2h7V4a1 1 0 011-1z",
    clipRule: "evenodd"
  }));
};

var CrossIcon = function CrossIcon(props) {
  return /*#__PURE__*/React__default['default'].createElement(Icon, props, /*#__PURE__*/React__default['default'].createElement(Add, null));
};

var isIosDevice = typeof window !== 'undefined' && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1);

var modalStyles = "mfumm5a";
var overlayStyles = "o1v7qbru";
var closeButtonStyles = "c1dxo1rx";

// var overlayStyles = "o1ohlj7h";

var Modal = function Modal(_ref) {
  _ref.title;
      var appRootSelector = _ref.appRootSelector,
      screenReaderLabel = _ref.screenReaderLabel,
      isOpen = _ref.isOpen,
      forceMobile = _ref.forceMobile,
      handleClose = _ref.handleClose,
      shouldCloseOnOverlayClick = _ref.shouldCloseOnOverlayClick,
      _onAfterOpen = _ref.onAfterOpen,
      _onAfterClose = _ref.onAfterClose,
      modalContentClassName = _ref.modalContentClassName,
      overlayClassName = _ref.overlayClassName,
      portalClassName = _ref.portalClassName,
      showCloseButton = _ref.showCloseButton,
      doesAnimateTransition = _ref.doesAnimateTransition,
      children = _ref.children,
      className = _ref.className,
      closeTimeoutMS = _ref.closeTimeoutMS;
  var modalContentRef = React$1.useRef(null); // aids in accessibility, http://reactcommunity.org/react-modal/accessibility/

  var _useState = React$1.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      readyAnimate = _useState2[0],
      setReadyAnimate = _useState2[1];

  ReactModal__default['default'].setAppElement(appRootSelector);
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(ReactModal__default['default'], {
    isOpen: isOpen,
    contentLabel: screenReaderLabel,
    bodyOpenClassName: "modal-open",
    onRequestClose: function onRequestClose() {
      setReadyAnimate(false);
      handleClose();
    },
    onAfterOpen: function onAfterOpen() {
      setReadyAnimate(true);
      disableBodyScroll(modalContentRef);

      _onAfterOpen();
    },
    onAfterClose: function onAfterClose() {
      setReadyAnimate(false);
      enableBodyScroll(modalContentRef);
      clearAllBodyScrollLocks();

      _onAfterClose();
    },
    shouldCloseOnOverlayClick: shouldCloseOnOverlayClick,
    className: classNames__default['default']([className, modalStyles, modalContentClassName, {
      'animation-base': doesAnimateTransition,
      'animation-show': doesAnimateTransition && readyAnimate && isOpen,
      'animation-hide': doesAnimateTransition && readyAnimate && !isOpen,
      'force-mobile': forceMobile
    }]),
    overlayClassName: classNames__default['default']([overlayStyles, overlayClassName, {
      'animation-base': doesAnimateTransition,
      'animation-show': doesAnimateTransition && readyAnimate && isOpen,
      'animation-hide': doesAnimateTransition && readyAnimate && !isOpen
    }]),
    portalClassName: classNames__default['default']([portalClassName]),
    closeTimeoutMS: closeTimeoutMS
  }, showCloseButton ? /*#__PURE__*/React__default['default'].createElement(CloseButton, null) : null, children));
}; // var closeButtonStyles = "c9xoh5";


var CloseButton = function CloseButton(_ref2) {
  var handleClose = _ref2.handleClose;
  return /*#__PURE__*/React__default['default'].createElement("button", {
    className: closeButtonStyles,
    "aria-label": "Close",
    onClick: handleClose
  }, /*#__PURE__*/React__default['default'].createElement(CrossIcon, null), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "visually-hidden"
  }, "Close"));
};

Modal.propTypes = {
  // Pocket Modal Props

  /**
   * title to display in ModalHeader
   */
  title: PropTypes__default['default'].string,

  /**
   * query selector specifying root element of React App
   */
  appRootSelector: PropTypes__default['default'].string.isRequired,
  // Exposing React Modal Props

  /**
   * Boolean indicating whether the modal should be open
   */
  isOpen: PropTypes__default['default'].bool,

  /**
   * Set to true to force the modal into mobile styling.
   */
  forceMobile: PropTypes__default['default'].bool,

  /**
   * String indicating how the content container should be announced
   to screen readers
   */
  screenReaderLabel: PropTypes__default['default'].string.isRequired,

  /**
   * Function that will be run when the modal is requested
   to be closed (either by clicking on overlay or pressing ESC).
   Note: It is not called if isOpen is changed by other means.
   */
  handleClose: PropTypes__default['default'].func.isRequired,

  /**
   * Boolean indicating whether to use a default close button
   */
  showCloseButton: PropTypes__default['default'].bool,

  /**
   * Boolean indicating whether the modal close when a user clicks
   * on the overlay
   */
  shouldCloseOnOverlayClick: PropTypes__default['default'].bool,

  /**
   * Function to run after the modal is opened
   */
  onAfterOpen: PropTypes__default['default'].func,

  /**
   * Function to run after the modal is closed
   */
  onAfterClose: PropTypes__default['default'].func,

  /**
   * Additional CSS class name to place on the modal content
   */
  modalContentClassName: PropTypes__default['default'].string,

  /**
   * Additional CSS class name to place on the modal overlay
   */
  overlayClassName: PropTypes__default['default'].string,

  /**
   * Additional CSS class name to place on the entire portal
   */
  portalClassName: PropTypes__default['default'].string,

  /**
   * Boolean describing whether the modal should fade in and out
   */
  doesAnimateTransition: PropTypes__default['default'].bool,

  /**
   * Milliseconds to delay close, useful for outgoing animations
   */
  closeTimeoutMS: PropTypes__default['default'].number
};
Modal.defaultProps = {
  title: undefined,
  isOpen: false,
  forceMobile: false,
  shouldCloseOnOverlayClick: true,
  onAfterOpen: function onAfterOpen() {},
  onAfterClose: function onAfterClose() {},
  modalContentClassName: '',
  overlayClassName: '',
  portalClassName: '',
  showCloseButton: true,
  doesAnimateTransition: true,
  closeTimeoutMS: 75
};

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return Array.from(arr);
  }
}

var locks = [];
var initialClientY = -1;
var documentListenerAdded = false;
var previousBodyOverflowSetting = void 0;
var previousBodyPaddingRight = void 0; // returns true if `el` should be allowed to receive touchmove events.

var allowTouchMove = function allowTouchMove(el) {
  return locks.some(function (lock) {
    if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {
      return true;
    }

    return false;
  });
};

var hasPassiveEvents = false;

if (typeof window !== 'undefined') {
  var passiveTestOptions = {
    get passive() {
      hasPassiveEvents = true;
      return undefined;
    }

  };
  window.addEventListener('testPassive', null, passiveTestOptions);
  window.removeEventListener('testPassive', null, passiveTestOptions);
}

var preventDefault = function preventDefault(rawEvent) {
  var e = rawEvent || window.event; // For the case whereby consumers adds a touchmove event listener to document.
  // Recall that we do document.addEventListener('touchmove', preventDefault, { passive: false })
  // in disableBodyScroll - so if we provide this opportunity to allowTouchMove, then
  // the touchmove event on document will break.

  if (allowTouchMove(e.target)) {
    return true;
  } // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).


  if (e.touches.length > 1) return true;
  if (e.preventDefault) e.preventDefault();
  return false;
};

var setOverflowHidden = function setOverflowHidden(options) {
  // Setting overflow on body/documentElement synchronously in Desktop Safari slows down
  // the responsiveness for some reason. Setting within a setTimeout fixes this.
  setTimeout(function () {
    // If previousBodyPaddingRight is already set, don't set it again.
    if (previousBodyPaddingRight === undefined) {
      var _reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;

      var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;

      if (_reserveScrollBarGap && scrollBarGap > 0) {
        previousBodyPaddingRight = document.body.style.paddingRight;
        document.body.style.paddingRight = scrollBarGap + 'px';
      }
    } // If previousBodyOverflowSetting is already set, don't set it again.


    if (previousBodyOverflowSetting === undefined) {
      previousBodyOverflowSetting = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    }
  });
};

var restoreOverflowSetting = function restoreOverflowSetting() {
  // Setting overflow on body/documentElement synchronously in Desktop Safari slows down
  // the responsiveness for some reason. Setting within a setTimeout fixes this.
  setTimeout(function () {
    if (previousBodyPaddingRight !== undefined) {
      document.body.style.paddingRight = previousBodyPaddingRight; // Restore previousBodyPaddingRight to undefined so setOverflowHidden knows it
      // can be set again.

      previousBodyPaddingRight = undefined;
    }

    if (previousBodyOverflowSetting !== undefined) {
      document.body.style.overflow = previousBodyOverflowSetting; // Restore previousBodyOverflowSetting to undefined
      // so setOverflowHidden knows it can be set again.

      previousBodyOverflowSetting = undefined;
    }
  });
}; // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions


var isTargetElementTotallyScrolled = function isTargetElementTotallyScrolled(targetElement) {
  return targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;
};

var handleScroll = function handleScroll(event, targetElement) {
  var clientY = event.targetTouches[0].clientY - initialClientY;

  if (allowTouchMove(event.target)) {
    return false;
  }

  if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
    // element is at the top of its scroll.
    return preventDefault(event);
  }

  if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
    // element is at the bottom of its scroll.
    return preventDefault(event);
  }

  event.stopPropagation();
  return true;
};

var disableBodyScroll = function disableBodyScroll(targetElement, options) {
  if (isIosDevice) {
    // targetElement must be provided, and disableBodyScroll must not have been
    // called on this targetElement before.
    if (!targetElement) {
      // eslint-disable-next-line no-console
      console.error('disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.');
      return;
    }

    if (targetElement && !locks.some(function (lock) {
      return lock.targetElement === targetElement;
    })) {
      var lock = {
        targetElement: targetElement,
        options: options || {}
      };
      locks = [].concat(_toConsumableArray(locks), [lock]);

      targetElement.ontouchstart = function (event) {
        if (event.targetTouches.length === 1) {
          // detect single touch.
          initialClientY = event.targetTouches[0].clientY;
        }
      };

      targetElement.ontouchmove = function (event) {
        if (event.targetTouches.length === 1) {
          // detect single touch.
          handleScroll(event, targetElement);
        }
      };

      if (!documentListenerAdded) {
        document.addEventListener('touchmove', preventDefault, hasPassiveEvents ? {
          passive: false
        } : undefined);
        documentListenerAdded = true;
      }
    }
  } else {
    setOverflowHidden(options);
    var _lock = {
      targetElement: targetElement,
      options: options || {}
    };
    locks = [].concat(_toConsumableArray(locks), [_lock]);
  }
};

var clearAllBodyScrollLocks = function clearAllBodyScrollLocks() {
  if (isIosDevice) {
    // Clear all locks ontouchstart/ontouchmove handlers, and the references.
    locks.forEach(function (lock) {
      lock.targetElement.ontouchstart = null;
      lock.targetElement.ontouchmove = null;
    });

    if (documentListenerAdded) {
      document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? {
        passive: false
      } : undefined);
      documentListenerAdded = false;
    }

    locks = []; // Reset initial clientY.

    initialClientY = -1;
  } else {
    restoreOverflowSetting();
    locks = [];
  }
};

var enableBodyScroll = function enableBodyScroll(targetElement) {
  if (isIosDevice) {
    if (!targetElement) {
      // eslint-disable-next-line no-console
      console.error('enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.');
      return;
    }

    targetElement.ontouchstart = null;
    targetElement.ontouchmove = null;
    locks = locks.filter(function (lock) {
      return lock.targetElement !== targetElement;
    });

    if (documentListenerAdded && locks.length === 0) {
      document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? {
        passive: false
      } : undefined);
      documentListenerAdded = false;
    }
  } else {
    locks = locks.filter(function (lock) {
      return lock.targetElement !== targetElement;
    });

    if (!locks.length) {
      restoreOverflowSetting();
    }
  }
};

var Drawer = function Drawer(_ref) {
  var children = _ref.children,
      isOpen = _ref.isOpen,
      handleClose = _ref.handleClose,
      appRootSelector = _ref.appRootSelector,
      screenReaderLabel = _ref.screenReaderLabel;
  var drawerStyles = "dw4vh5s";
  return /*#__PURE__*/React__default['default'].createElement(Modal, {
    appRootSelector: appRootSelector,
    screenReaderLabel: screenReaderLabel,
    handleClose: handleClose,
    isOpen: isOpen,
    className: "modal-drawer" // necessary for style override
    ,
    overlayClassName: "drawer" // necessary for style override
    ,
    portalClassName: drawerStyles,
    showCloseButton: false,
    closeTimeoutMS: 200
  }, children);
};

var pillStyle = "pgwwgci";

var Pill = function Pill(props) {
  var children = props.children,
      promoted = props.promoted,
      href = props.href,
      className = props.className;
  var remaining = objectWithoutProperties(props, ["children", "promoted", "href", "className"]);
  console.log('pills');
  console.log(pillStyle, className);

  var elementProps = _objectSpread2({
    className: classNames__default['default'](pillStyle, className, {
      promoted: promoted
    }),
    href: href
  }, remaining);

  if (href) {
    return /*#__PURE__*/React__default['default'].createElement("a", elementProps, children);
  } else {
    return /*#__PURE__*/React__default['default'].createElement("button", elementProps, children);
  }
};

Pill.propTypes = {
  /**
   * Content of the button (e.g. button label)
   */
  children: PropTypes__default['default'].node.isRequired,

  /**
   * If true, will apply a visual style that differentiates the pill from the others.
   */
  promoted: PropTypes__default['default'].bool,

  /**
   * Destination url for the button - if provided, will render the button as
   * an anchor styled like a button
   */
  href: PropTypes__default['default'].string,

  /**
   * CSS class name if styles need to be provided/overridden.
   */
  className: PropTypes__default['default'].string
};
Pill.defaultProps = {
  promoted: false,
  href: undefined,
  className: null
};

var useCorrectEffect = typeof window !== 'undefined' ? React$1.useLayoutEffect : React$1.useEffect;

var popupStyles = "p1h9t8fk"; // .p1is21nw {

function handleClickOutsidePointer(event) {
}

var Popup = function Popup(_ref) {
  var children = _ref.children,
      trigger = _ref.trigger,
      id = _ref.id,
      className = _ref.className,
      animationDuration = _ref.animationDuration,
      alwaysRender = _ref.alwaysRender,
      onOpen = _ref.onOpen,
      onClose = _ref.onClose,
      popperOptions = _ref.popperOptions,
      forceShow = _ref.forceShow;
  // const popupStyle = "p1is21nw";
  var popper, animationTimeout;
  var globalEvents = ['click', 'touch', 'focus'];

  var _useState = React$1.useState(forceShow),
      _useState2 = _slicedToArray(_useState, 2),
      isShowRequested = _useState2[0],
      setIsShowRequested = _useState2[1];

  var _useState3 = React$1.useState(forceShow),
      _useState4 = _slicedToArray(_useState3, 2),
      isShown = _useState4[0],
      setIsShown = _useState4[1];

  var _useState5 = React$1.useState(forceShow),
      _useState6 = _slicedToArray(_useState5, 2),
      isAnimationApplied = _useState6[0],
      setIsAnimationApplied = _useState6[1];

  var contentRef = React$1.useRef(null);

  var createPopper$1 = function createPopper$1() {
    if (!popper) {
      popper = core.createPopper(trigger.current, contentRef.current, popperOptions);
    }
  };

  var destroyPopper = function destroyPopper() {
    if (popper) {
      popper.destroy();
      popper = null;
    }
  };
  /**
   * Remove Document Listeners
   * We remove listeners on multiple events. This just allows it to
   * reusable throughout our function
   */


  var removeDocumentListeners = function removeDocumentListeners() {
    if (global && global.document) {
      globalEvents.forEach(function (event) {
        return global.document.removeEventListener(event, handleClickOutsidePointer);
      });
      global.removeEventListener('blur', handleWindowBlur);
    }
  };
  /**
   * Add Document Listeners
   * We add listeners to multiple events. This just allows it to
   * reusable throughout our function
   */


  var addDocumentListeners = function addDocumentListeners() {
    if (global && global.document) {
      globalEvents.forEach(function (event) {
        return global.document.addEventListener(event, handleClickOutsidePointer);
      });
      global.addEventListener('blur', handleWindowBlur);
    }
  };
  /**
   * Handle Trigger Click is the handler for toggling the popup.
   * @param {object} event Click event passed though from the listener
   */


  var handleTriggerClick = function handleTriggerClick(event) {
    if (!forceShow) setIsShowRequested(function (prevShown) {
      return !prevShown;
    });
  };
  /**
   * Called when the window blurs via tabbing outside of the page and into browser
   * UI elements, or when window loses focus
   */


  function handleWindowBlur(event) {
    if (!forceShow) setIsShowRequested(false);
  } // Use Effect to create/set up popup on component mount


  useCorrectEffect(function () {
    if (!contentRef.current || !trigger.current) return; // attach click event to trigger

    var triggerElement = trigger.current;
    triggerElement.addEventListener('click', handleTriggerClick);
    return function () {
      triggerElement.removeEventListener('click', handleTriggerClick);
      removeDocumentListeners();
      clearTimeout(animationTimeout);
      destroyPopper();
    };
  }, []); // watch for state change to isShowRequested. This represents when the user
  // has clicked on the trigger to open or close the popup.

  useCorrectEffect(function () {
    if (isShowRequested) {
      createPopper$1();
      addDocumentListeners();
      setIsShown(true);
      onOpen(id);
    } else {
      removeDocumentListeners();
      setIsAnimationApplied(false);
      onClose(id);
      animationTimeout = setTimeout(function () {
        setIsShown(false);
      }, animationDuration);
    }
  }, [isShowRequested]); // state changes to whether the popup is actually visible or not, accounting
  // for animations

  useCorrectEffect(function () {
    if (isShown) {
      setIsAnimationApplied(true);
    }
  }, [isShown]);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    ref: contentRef,
    className: classNames__default['default'](popupStyles, className)
  }, alwaysRender || isShowRequested || isShown ? /*#__PURE__*/React__default['default'].createElement("div", {
    className: classNames__default['default']('popup-content', {
      enter: isShown,
      'animate-to': isAnimationApplied
    })
  }, children) : null);
};

Popup.propTypes = {
  /**
   * Content to put within the popup.
   */
  children: PropTypes__default['default'].node.isRequired,

  /**
   * Ref for the element or React node that will serve as the clickable trigger
   * for toggling the popup
   */
  trigger: PropTypes__default['default'].oneOfType([PropTypes__default['default'].func, PropTypes__default['default'].object]).isRequired,

  /**
   * Provide an id if desired, for test markers or analytics.
   */
  id: PropTypes__default['default'].string,

  /**
   * CSS class name that can be provided to override styles as well as animations
   * (using the animation selector class ('animate-to'))
   */
  className: PropTypes__default['default'].string,

  /**
   * Animation duration in milliseconds that corresponds to any CSS transition
   * animations that will be applied. Necessary so that we don't remove the
   * animation classes and hide the popup until the animation is complete.
   */
  animationDuration: PropTypes__default['default'].number,

  /**
   * When true, popper will remain rendered even when hidden. This would serve
   * SEO purposes to ensure hidden content is still available for crawlers, e.g.
   * navigational menu content. If content does not need to be available for SEO
   * and page weight/performance is a concern, set this to false.
   */
  alwaysRender: PropTypes__default['default'].bool,

  /**
   * Called when the popup opens. Can be used for e.g. analytics tracking.
   */
  onOpen: PropTypes__default['default'].func,

  /**
   * Called when the popup closes. Can be used for e.g. analytics tracking.
   */
  onClose: PropTypes__default['default'].func,

  /**
   * Options object per the popperJS API that will be passed in when creating the
   * popperJS instance. See: https://popper.js.org/docs/v2/constructors/
   */
  popperOptions: PropTypes__default['default'].object,

  /**
   * Set to true to have the popup shown. Mostly intended for debugging purposes
   * so that the popup stays open rather than closing on outside click.
   */
  forceShow: PropTypes__default['default'].bool
};
Popup.defaultProps = {
  id: '',
  className: '',
  animationDuration: 75,
  alwaysRender: true,
  onOpen: function onOpen(id) {},
  onClose: function onClose(id) {},
  popperOptions: {
    placement: 'bottom-start'
  },
  forceShow: false
};
//   name: 'eventListeners',
//   enabled: true,
//   phase: 'write',
//   fn: function fn() {},
//   effect: effect,
//   data: {}
// };
// function popperOffsets({ state, name }) {
//   // Offsets are the actual position the popper needs to have to be
//   // properly positioned near its reference element
//   // This is the most basic placement, and will be adjusted by
//   // the modifiers in the next step
//   state.modifiersData[name] = computeOffsets({
//     reference: state.rects.reference,
//     element: state.rects.popper,
//     strategy: 'absolute',
//     placement: state.placement
//   });
// } // eslint-disable-next-line import/no-unused-modules
// var popperOffsets$1 = {
//   name: 'popperOffsets',
//   enabled: true,
//   phase: 'read',
//   fn: popperOffsets,
//   data: {}
// };
// function computeStyles({ state, options }) {
//   var _options$gpuAccelerat = options.gpuAcceleration,
//       gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
//       _options$adaptive = options.adaptive,
//       adaptive = _options$adaptive === void 0 ? true : _options$adaptive;
//   if (process.env.NODE_ENV !== "production") {
//     var transitionProperty = getComputedStyle(state.elements.popper).transitionProperty || '';
//     if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
//       return transitionProperty.indexOf(property) >= 0;
//     })) {
//       console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
//     }
//   }
//   var commonStyles = {
//     placement: getBasePlacement(state.placement),
//     popper: state.elements.popper,
//     popperRect: state.rects.popper,
//     gpuAcceleration: gpuAcceleration
//   };
//   if (state.modifiersData.popperOffsets != null) {
//     state.styles.popper = Object.assign(Object.assign({}, state.styles.popper), mapToStyles(Object.assign(Object.assign({}, commonStyles), {}, {
//       offsets: state.modifiersData.popperOffsets,
//       position: state.options.strategy,
//       adaptive: adaptive
//     })));
//   }
//   if (state.modifiersData.arrow != null) {
//     state.styles.arrow = Object.assign(Object.assign({}, state.styles.arrow), mapToStyles(Object.assign(Object.assign({}, commonStyles), {}, {
//       offsets: state.modifiersData.arrow,
//       position: 'absolute',
//       adaptive: false
//     })));
//   }
//   state.attributes.popper = Object.assign(Object.assign({}, state.attributes.popper), {}, {
//     'data-popper-placement': state.placement
//   });
// } // eslint-disable-next-line import/no-unused-modules
// var computeStyles$1 = {
//   name: 'computeStyles',
//   enabled: true,
//   phase: 'beforeWrite',
//   fn: computeStyles,
//   data: {}
// };
// var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];

//   defaultModifiers: defaultModifiers
// }); // eslint-disable-next-line import/no-unused-modules

var menuStyle = "ms8wjtu";

var PopupMenu = function PopupMenu(_ref) {
  var children = _ref.children,
      id = _ref.id,
      title = _ref.title,
      trigger = _ref.trigger,
      appRootSelector = _ref.appRootSelector,
      screenReaderLabel = _ref.screenReaderLabel,
      onOpen = _ref.onOpen,
      onClose = _ref.onClose,
      popperOptions = _ref.popperOptions,
      forceShow = _ref.forceShow;
  // const popupStyle$1 = "psmbvm8";
  // const menuStyle = "m158lzzu";
  var viewport = useViewport(); // if viewport not available, we're probably SSR and so set the default to the

  var viewportWidth = viewport ? viewport.width : screenLargeHandset + 1;
  var checkIsMobile = viewportWidth <= screenLargeHandset;

  var _useState = React$1.useState(forceShow),
      _useState2 = _slicedToArray(_useState, 2),
      isMenuOpen = _useState2[0],
      setIsMenuOpen = _useState2[1];

  var _useState3 = React$1.useState(checkIsMobile),
      _useState4 = _slicedToArray(_useState3, 2),
      isMobile = _useState4[0],
      setIsMobile = _useState4[1];

  var handleTriggerClick = function handleTriggerClick() {
    return setIsMenuOpen(!isMenuOpen);
  };

  var handleModalClose = function handleModalClose() {
    if (!forceShow) setIsMenuOpen(false);
  };

  useCorrectEffect(function () {
    if (!trigger.current) return; // attach click event to trigger

    var triggerElement = trigger.current;
    triggerElement.addEventListener('click', handleTriggerClick);
    return function () {
      triggerElement.removeEventListener('click', handleTriggerClick);
    };
  }, []); // effect for handling open/close events (callbacks)

  useCorrectEffect(function () {
    if (isMenuOpen) onOpen(id);else onClose(id);
  }, [isMenuOpen]); // effect for handling window resize

  useCorrectEffect(function () {
    setIsMobile(viewportWidth <= screenLargeHandset);
  }, [viewportWidth]);

  var getContent = function getContent() {
    return /*#__PURE__*/React__default['default'].createElement("ul", {
      id: id,
      className: classNames__default['default'](menuStyle, {
        'is-mobile': isMobile
      })
    }, children);
  };

  var renderHtml;

  if (isMobile) {
    renderHtml = /*#__PURE__*/React__default['default'].createElement(Modal, {
      title: title,
      appRootSelector: appRootSelector,
      screenReaderLabel: screenReaderLabel,
      handleClose: handleModalClose,
      isOpen: isMenuOpen,
      forceMobile: true
    }, getContent());
  } else {
    renderHtml = /*#__PURE__*/React__default['default'].createElement(Popup, {
      trigger: trigger,
      className: popupStyles,
      popperOptions: popperOptions,
      forceShow: forceShow,
      onClose: handleModalClose
    }, getContent());
  }

  return renderHtml;
};

PopupMenu.propTypes = {
  /**
   * Content for the menu. Use <PopupMenuGroup> and <PopupMenuItem> to assemble
   * the content of the menu.
   */
  children: PropTypes__default['default'].node.isRequired,

  /**
   * Ref for the element or React node that will serve as the clickable trigger
   * for toggling the popup
   */
  trigger: PropTypes__default['default'].oneOfType([PropTypes__default['default'].func, PropTypes__default['default'].object]).isRequired,

  /**
   * Title of the menu, required for providing context to the user in the mobile
   * mode of the menu, in the header.
   */
  title: PropTypes__default['default'].string.isRequired,

  /**
   * query selector specifying root element of React App
   */
  appRootSelector: PropTypes__default['default'].string.isRequired,

  /**
   * String indicating how the content container should be announced
   to screen readers
   */
  screenReaderLabel: PropTypes__default['default'].string.isRequired,

  /**
   * Provide an id if menu needs to be identified on the page, e.g.
   * during tests or analytics calls
   */
  id: PropTypes__default['default'].string,

  /**
   * Called when the menu opens.
   */
  onOpen: PropTypes__default['default'].func,

  /**
   * Called when the menu closes.
   */
  onClose: PropTypes__default['default'].func,

  /**
   * Options object per the popperJS API that will be passed in when creating the
   * popperJS instance. See: https://popper.js.org/docs/v2/constructors/
   */
  popperOptions: PropTypes__default['default'].object,

  /**
   * Set to true to have the popup shown. Mostly intended for debugging purposes
   * so that the popup stays open rather than closing on outside click.
   */
  forceShow: PropTypes__default['default'].bool
};
PopupMenu.defaultProps = {
  id: '',
  onOpen: function onOpen(id) {},
  onClose: function onClose(id) {},
  forceShow: false
};

var groupStyle = "g1t085ue";
var itemStyle = "i8ap8gg"; // .iv7u18i {

var PopupMenuItem = function PopupMenuItem(_ref) {
  var children = _ref.children,
      id = _ref.id,
      helperText = _ref.helperText,
      className = _ref.className,
      href = _ref.href,
      icon = _ref.icon;

  // const itemStyle = "iv7u18i";
  var getContent = function getContent() {
    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, icon, /*#__PURE__*/React__default['default'].createElement("span", {
      className: "label"
    }, children, helperText ? /*#__PURE__*/React__default['default'].createElement("span", {
      className: "label-secondary"
    }, helperText) : null));
  };

  return /*#__PURE__*/React__default['default'].createElement("li", {
    className: classNames__default['default'](itemStyle, className)
  }, href ? /*#__PURE__*/React__default['default'].createElement("a", {
    href: href,
    id: id
  }, " ", getContent(), " ") : /*#__PURE__*/React__default['default'].createElement("button", {
    type: "button",
    id: id
  }, " ", getContent(), " "));
};

PopupMenuItem.propTypes = {
  /**
   * Will render the child as the text of a button/link.
   */
  children: PropTypes__default['default'].node.isRequired,

  /**
   * Provide an id if menu item needs to be identified on the page, e.g.
   * during tests or analytics calls
   */
  id: PropTypes__default['default'].string,

  /**
   * Text to be displayed below the primary label.
   */
  helperText: PropTypes__default['default'].string,

  /**
   * CSS class to apply to the list item if needed to override styles for that
   * specific item.
   */
  className: PropTypes__default['default'].string,

  /**
   * If the menu item should be a hyperlink, provide an href and it will be
   * rendered as an anchor rather than a button.
   */
  href: PropTypes__default['default'].string,

  /**
   * Provide a JSX icon in order to display an icon before the text.
   */
  icon: PropTypes__default['default'].node
};
PopupMenuItem.defaultProps = {
  helperText: null,
  className: '',
  href: null,
  icon: null
};

var PopupMenuGroup = function PopupMenuGroup(_ref) {
  var children = _ref.children;
  // const groupStyle = "gx34gyr";
  return /*#__PURE__*/React__default['default'].createElement("li", {
    className: groupStyle
  }, /*#__PURE__*/React__default['default'].createElement("ul", null, children));
};

var AddIcon$9 = function AddIcon(props) {
  return /*#__PURE__*/React__default['default'].createElement(Icon, props, /*#__PURE__*/React__default['default'].createElement(Add, null));
};

var Archive = function Archive() {
  return /*#__PURE__*/React__default['default'].createElement("svg", {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    d: "M1 4a2 2 0 012-2h18a2 2 0 012 2v2a2 2 0 01-2 2H3a2 2 0 01-2-2V4zm2 0v2h18V4H3z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    d: "M3 8a2 2 0 012-2h14a2 2 0 012 2v10a4 4 0 01-4 4H7a4 4 0 01-4-4V8zm2 10a2 2 0 002 2h10a2 2 0 002-2V8H5v10z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    d: "M15.707 11.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L11 14.586l3.293-3.293a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
};

var ArchiveIcon = function ArchiveIcon(props) {
  return /*#__PURE__*/React__default['default'].createElement(Icon, props, /*#__PURE__*/React__default['default'].createElement(Archive, null));
};

var Article = function Article() {
  return /*#__PURE__*/React__default['default'].createElement("svg", {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    d: "M17 4H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2zM7 2a4 4 0 00-4 4v12a4 4 0 004 4h10a4 4 0 004-4V6a4 4 0 00-4-4H7z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    d: "M7 8a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1zM7 12a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1zM7 16a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
};

var ArticleIcon = function ArticleIcon(props) {
  return /*#__PURE__*/React__default['default'].createElement(Icon, props, /*#__PURE__*/React__default['default'].createElement(Article, null));
};

var Discover = function Discover() {
  return /*#__PURE__*/React__default['default'].createElement("svg", {
    "aria-labelledby": " ",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    d: "M7.422 6.122a1 1 0 00-1.3 1.3l2.828 7.07a1 1 0 00.557.558l7.071 2.828a1 1 0 001.3-1.3l-2.828-7.07a1 1 0 00-.557-.558L7.422 6.122zm3.226 7.23l4.507 1.803-1.803-4.507-2.704 2.704z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    d: "M12 21a9 9 0 100-18 9 9 0 000 18zm0 2c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z",
    clipRule: "evenodd"
  }));
};

var DiscoverIcon = function DiscoverIcon(props) {
  return /*#__PURE__*/React__default['default'].createElement(Icon, props, /*#__PURE__*/React__default['default'].createElement(Discover, null));
};

var Edit = function Edit() {
  return /*#__PURE__*/React__default['default'].createElement("svg", {
    "aria-labelledby": " ",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    d: "M9 22a2 2 0 001.414-.586L20 11.828a4 4 0 000-5.656L17.828 4a4 4 0 00-5.656 0l-9.586 9.586A2 2 0 002 15v5a2 2 0 002 2h5zm7.414-16.586l2.172 2.172a2 2 0 010 2.828l-1.379 1.379-5-5 1.379-1.379a2 2 0 012.828 0zm-5.621 2.793L4 15v5h5l6.793-6.793-5-5z",
    clipRule: "evenodd"
  }));
};

var EditIcon$1 = function EditIcon(props) {
  return /*#__PURE__*/React__default['default'].createElement(Icon, props, /*#__PURE__*/React__default['default'].createElement(Edit, null));
};

var Favorite = function Favorite() {
  return /*#__PURE__*/React__default['default'].createElement("svg", {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    d: "M12 1a1 1 0 01.897.557l2.706 5.484 6.051.88a1 1 0 01.555 1.705l-4.38 4.268 1.034 6.027a1 1 0 01-1.45 1.054L12 18.13l-5.413 2.845a1 1 0 01-1.45-1.054l1.033-6.027-4.379-4.268a1 1 0 01.555-1.706l6.051-.88 2.706-5.483A1 1 0 0112 1zm0 3.26L9.958 8.397a1 1 0 01-.753.548l-4.567.663 3.305 3.221a1 1 0 01.287.885l-.78 4.548 4.085-2.147a1 1 0 01.93 0l4.085 2.147-.78-4.548a1 1 0 01.287-.885l3.305-3.22-4.567-.664a1 1 0 01-.753-.548L12 4.26z",
    clipRule: "evenodd"
  }));
};

var FavoriteIcon = function FavoriteIcon(props) {
  return /*#__PURE__*/React__default['default'].createElement(Icon, props, /*#__PURE__*/React__default['default'].createElement(Favorite, null));
};

var Highlight = function Highlight() {
  return /*#__PURE__*/React__default['default'].createElement("svg", {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    d: "M5.512 8.546a3 3 0 00-.51 4.195l-.724.723a3.001 3.001 0 00-.586 3.415L1.18 19.391a1 1 0 00.39 1.656l4.243 1.414a1 1 0 001.023-.241l1.098-1.098a3.001 3.001 0 003.415-.586l.746-.746a3.001 3.001 0 004.133-.77l6.406-9.15a3 3 0 00-.337-3.842l-4.112-4.112a3 3 0 00-3.98-.233L5.512 8.546zm9.932-5.294l-8.693 6.863a1 1 0 00-.087 1.492l6.4 6.4a1 1 0 001.526-.134l6.405-9.15a1 1 0 00-.112-1.28L16.771 3.33a1 1 0 00-1.327-.078zM6.4 14.172l-.707.707a1 1 0 000 1.414l2.829 2.828a1 1 0 001.414 0l.707-.707L6.4 14.172z",
    clipRule: "evenodd"
  }));
};

var HighlightIcon = function HighlightIcon(props) {
  return /*#__PURE__*/React__default['default'].createElement(Icon, props, /*#__PURE__*/React__default['default'].createElement(Highlight, null));
};

var Search = function Search() {
  return /*#__PURE__*/React__default['default'].createElement("svg", {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    d: "M16.618 18.032a9 9 0 111.414-1.414l3.675 3.675a1 1 0 01-1.414 1.414l-3.675-3.675zM18 11a7 7 0 11-14 0 7 7 0 0114 0z",
    clipRule: "evenodd"
  }));
};

var SearchIcon = function SearchIcon(props) {
  return /*#__PURE__*/React__default['default'].createElement(Icon, props, /*#__PURE__*/React__default['default'].createElement(Search, null));
};

var Tag = function Tag() {
  return /*#__PURE__*/React__default['default'].createElement("svg", {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    d: "M2 4a2 2 0 012-2h6a2 2 0 011.414.586L20 11.172a4 4 0 010 5.656L16.828 20a4 4 0 01-5.656 0l-8.586-8.586A2 2 0 012 10V4zm8 0l8.586 8.586a2 2 0 010 2.828l-3.172 3.172a2 2 0 01-2.828 0L4 10V4h6z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
  }));
};

var TagIcon = function TagIcon(props) {
  return /*#__PURE__*/React__default['default'].createElement(Icon, props, /*#__PURE__*/React__default['default'].createElement(Tag, null));
};

var Video = function Video() {
  return /*#__PURE__*/React__default['default'].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React__default['default'].createElement("rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "3",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    rx: "3"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    fill: "currentColor",
    d: "M9 14.461V9.54a1 1 0 011.406-.914l5.538 2.461c.792.352.792 1.476 0 1.828l-5.538 2.461A1 1 0 019 14.461z"
  }));
};

var VideoIcon = function VideoIcon(props) {
  return /*#__PURE__*/React__default['default'].createElement(Icon, props, /*#__PURE__*/React__default['default'].createElement(Video, null));
};

var OverflowMenu = function OverflowMenu() {
  return /*#__PURE__*/React__default['default'].createElement("svg", {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    d: "M17 4H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2zM7 2a4 4 0 00-4 4v12a4 4 0 004 4h10a4 4 0 004-4V6a4 4 0 00-4-4H7z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    d: "M7 8a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1zM7 12a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1zM7 16a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
};

var OverflowMenuIcon = function OverflowMenuIcon(props) {
  return /*#__PURE__*/React__default['default'].createElement(Icon, props, /*#__PURE__*/React__default['default'].createElement(OverflowMenu, null));
};

var IosShare = function IosShare() {
  return /*#__PURE__*/React__default['default'].createElement("svg", {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    d: "M11.293 1.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L13 4.414V13a1 1 0 11-2 0V4.414L8.707 6.707a1 1 0 01-1.414-1.414l4-4z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    d: "M4 10a1 1 0 011 1v7a2 2 0 002 2h10a2 2 0 002-2v-7a1 1 0 112 0v7a4 4 0 01-4 4H7a4 4 0 01-4-4v-7a1 1 0 011-1z",
    clipRule: "evenodd"
  }));
};

var IosShareIcon = function IosShareIcon(props) {
  return /*#__PURE__*/React__default['default'].createElement(Icon, props, /*#__PURE__*/React__default['default'].createElement(IosShare, null));
};

var Delete = function Delete() {
  return /*#__PURE__*/React__default['default'].createElement("svg", {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    d: "M7 5a4 4 0 014-4h2a4 4 0 014 4h5a1 1 0 110 2h-1v11a4 4 0 01-4 4H7a4 4 0 01-4-4V7H2a1 1 0 010-2h5zm2 0a2 2 0 012-2h2a2 2 0 012 2H9zM5 7h14v11a2 2 0 01-2 2H7a2 2 0 01-2-2V7z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    d: "M9 10a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zM15 10a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1z",
    clipRule: "evenodd"
  }));
};

var DeleteIcon = function DeleteIcon(props) {
  return /*#__PURE__*/React__default['default'].createElement(Icon, props, /*#__PURE__*/React__default['default'].createElement(Delete, null));
};

var AddIcon$8 = function AddIcon(props) {
  return /*#__PURE__*/React__default['default'].createElement(Icon, props, /*#__PURE__*/React__default['default'].createElement(Add, null));
};

var AddIcon$7 = function AddIcon(props) {
  return /*#__PURE__*/React__default['default'].createElement(Icon, props, /*#__PURE__*/React__default['default'].createElement(Add, null));
};

var AddIcon$6 = function AddIcon(props) {
  return /*#__PURE__*/React__default['default'].createElement(Icon, props, /*#__PURE__*/React__default['default'].createElement(Add, null));
};

var AddIcon$5 = function AddIcon(props) {
  return /*#__PURE__*/React__default['default'].createElement(Icon, props, /*#__PURE__*/React__default['default'].createElement(Add, null));
};

var AddIcon$4 = function AddIcon(props) {
  return /*#__PURE__*/React__default['default'].createElement(Icon, props, /*#__PURE__*/React__default['default'].createElement(Add, null));
};

var AddIcon$3 = function AddIcon(props) {
  return /*#__PURE__*/React__default['default'].createElement(Icon, props, /*#__PURE__*/React__default['default'].createElement(Add, null));
};

var ChevronLeft = function ChevronLeft() {
  return /*#__PURE__*/React__default['default'].createElement("svg", {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    d: "M14.707 4.293a1 1 0 010 1.414L8.414 12l6.293 6.293a1 1 0 01-1.414 1.414l-7-7a1 1 0 010-1.414l7-7a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
};

var ChevronLeftIcon = function ChevronLeftIcon(props) {
  return /*#__PURE__*/React__default['default'].createElement(Icon, props, /*#__PURE__*/React__default['default'].createElement(ChevronLeft, null));
};

var AddIcon$2 = function AddIcon(props) {
  return /*#__PURE__*/React__default['default'].createElement(Icon, props, /*#__PURE__*/React__default['default'].createElement(Add, null));
};

var AddIcon$1 = function AddIcon(props) {
  return /*#__PURE__*/React__default['default'].createElement(Icon, props, /*#__PURE__*/React__default['default'].createElement(Add, null));
};

var AddIcon = function AddIcon(props) {
  return /*#__PURE__*/React__default['default'].createElement(Icon, props, /*#__PURE__*/React__default['default'].createElement(Add, null));
};

var LineHeightIcon = function LineHeightIcon(props) {
  return /*#__PURE__*/React__default['default'].createElement(Icon, props, /*#__PURE__*/React__default['default'].createElement(IosShare, null));
};

var DetailView = function DetailView() {
  return /*#__PURE__*/React__default['default'].createElement("svg", {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    d: "M9 4H4v5h5V4zM4 2a2 2 0 00-2 2v5a2 2 0 002 2h5a2 2 0 002-2V4a2 2 0 00-2-2H4zm5 13H4v5h5v-5zm-5-2a2 2 0 00-2 2v5a2 2 0 002 2h5a2 2 0 002-2v-5a2 2 0 00-2-2H4zm9-8a1 1 0 011-1h7a1 1 0 110 2h-7a1 1 0 01-1-1zm0 11a1 1 0 011-1h7a1 1 0 110 2h-7a1 1 0 01-1-1zm0-8a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1zm0 11a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
};

var DetailViewIcon = function DetailViewIcon(props) {
  return /*#__PURE__*/React__default['default'].createElement(Icon, props, /*#__PURE__*/React__default['default'].createElement(DetailView, null));
};

var ListView = function ListView() {
  return /*#__PURE__*/React__default['default'].createElement("svg", {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5 5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM5 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM5 19a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    d: "M7 5a1 1 0 011-1h13a1 1 0 110 2H8a1 1 0 01-1-1zM7 12a1 1 0 011-1h13a1 1 0 110 2H8a1 1 0 01-1-1zM7 19a1 1 0 011-1h13a1 1 0 110 2H8a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
};

var ListViewIcon = function ListViewIcon(props) {
  return /*#__PURE__*/React__default['default'].createElement(Icon, props, /*#__PURE__*/React__default['default'].createElement(ListView, null));
};

var GridView = function GridView() {
  return /*#__PURE__*/React__default['default'].createElement("svg", {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    d: "M9 4H4v5h5V4zM4 2a2 2 0 00-2 2v5a2 2 0 002 2h5a2 2 0 002-2V4a2 2 0 00-2-2H4zM9 15H4v5h5v-5zm-5-2a2 2 0 00-2 2v5a2 2 0 002 2h5a2 2 0 002-2v-5a2 2 0 00-2-2H4zM20 4h-5v5h5V4zm-5-2a2 2 0 00-2 2v5a2 2 0 002 2h5a2 2 0 002-2V4a2 2 0 00-2-2h-5zM20 15h-5v5h5v-5zm-5-2a2 2 0 00-2 2v5a2 2 0 002 2h5a2 2 0 002-2v-5a2 2 0 00-2-2h-5z",
    clipRule: "evenodd"
  }));
};

var GridViewIcon = function GridViewIcon(props) {
  return /*#__PURE__*/React__default['default'].createElement(Icon, props, /*#__PURE__*/React__default['default'].createElement(GridView, null));
};

var SortByNewest = function SortByNewest() {
  return /*#__PURE__*/React.createElement("svg", {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.707 6.707a1 1 0 000-1.414l-3-3a.999.999 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L4 5.414V21a1 1 0 102 0V5.414l1.293 1.293a1 1 0 001.414 0zM11 6a1 1 0 011-1h10a1 1 0 110 2H12a1 1 0 01-1-1zM11 12a1 1 0 011-1h7a1 1 0 110 2h-7a1 1 0 01-1-1zM11 18a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1z"
  }));
};

var SortByNewestIcon = function SortByNewestIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(SortByNewest, null));
};

var SortByOldest = function SortByOldest() {
  return /*#__PURE__*/React__default['default'].createElement("svg", {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M11 6a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1zM11 12a1 1 0 011-1h7a1 1 0 110 2h-7a1 1 0 01-1-1zM11 18a1 1 0 011-1h10a1 1 0 110 2H12a1 1 0 01-1-1zM5 4a1 1 0 00-1 1v13.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3A1.005 1.005 0 005 22a.997.997 0 00.707-.293l3-3a1 1 0 10-1.414-1.414L6 18.586V5a1 1 0 00-1-1z"
  }));
};

var SortByOldestIcon = function SortByOldestIcon(props) {
  return /*#__PURE__*/React__default['default'].createElement(Icon, props, /*#__PURE__*/React__default['default'].createElement(SortByOldest, null));
};

var Menu = function Menu() {
  return /*#__PURE__*/React__default['default'].createElement("svg", {
    "aria-labelledby": "mobile-menu-menu-icon-title mobile-menu-menu-icon-description",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    d: "M2 5a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zM2 12a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zM2 19a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__default['default'].createElement("title", {
    id: "mobile-menu-menu-icon-title"
  }, "Open"), /*#__PURE__*/React__default['default'].createElement("desc", {
    id: "mobile-menu-menu-icon-description"
  }, "Open the Pocket mobile menu"));
};

var MenuIcon = function MenuIcon(props) {
  return /*#__PURE__*/React__default['default'].createElement(Icon, props, /*#__PURE__*/React__default['default'].createElement(Menu, null));
};

var Home = function Home() {
  return /*#__PURE__*/React__default['default'].createElement("svg", {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    d: "M10.671 1.442a2.004 2.004 0 012.658 0l8 7.09c.427.378.671.92.671 1.49v9.922a1.997 1.997 0 01-2 1.994h-3c-1.105 0-2-.893-2-1.994v-4.985c0-.275-.175-1.072-.689-1.789-.48-.67-1.201-1.203-2.311-1.203-1.11 0-1.831.533-2.311 1.203C9.175 13.887 9 14.684 9 14.96v4.986a1.996 1.996 0 01-2 1.993H4c-1.105 0-2-.893-2-1.994v-9.922c0-.57.244-1.112.671-1.49l8-7.09zM12 2.932l-8 7.09v9.922h3v-4.985c0-.723.325-1.92 1.061-2.948.77-1.074 2.049-2.038 3.939-2.038 1.89 0 3.169.963 3.939 2.038.736 1.028 1.061 2.225 1.061 2.948v4.985h3v-9.922l-8-7.09zM7 19.944zm.002 0H7h.002zm0 0z",
    clipRule: "evenodd"
  }));
};

var HomeIcon = function HomeIcon(props) {
  return /*#__PURE__*/React__default['default'].createElement(Icon, props, /*#__PURE__*/React__default['default'].createElement(Home, null));
};

var EditIcon = function EditIcon(props) {
  return /*#__PURE__*/React__default['default'].createElement(Icon, props, /*#__PURE__*/React__default['default'].createElement(Edit, null));
};

var Premium = function Premium() {
  return /*#__PURE__*/React__default['default'].createElement("svg", {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    d: "M3.983 3.333A2.84 2.84 0 016.38 2h11.24c.969 0 1.872.502 2.397 1.333l2.528 4a2.958 2.958 0 01-.108 3.314l-8.148 11.18a2.82 2.82 0 01-4.578 0l-8.148-11.18a2.958 2.958 0 01-.108-3.314l2.528-4zm2.397.607a.946.946 0 00-.799.445l-2.528 4c-.214.34-.2.78.037 1.104l8.147 11.18a.94.94 0 001.526 0l8.147-11.18a.986.986 0 00.037-1.104l-2.528-4a.946.946 0 00-.8-.445H6.38z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    d: "M10.39 2.046a.95.95 0 01.614 1.197l-1.72 5.336a.95.95 0 00-.006.565l3.633 12.075a.951.951 0 11-1.821.548L7.457 9.692a2.853 2.853 0 01.016-1.697l1.72-5.336a.95.95 0 011.197-.613z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    d: "M13.61 2.046a.95.95 0 00-.613 1.197l1.72 5.336a.95.95 0 01.005.565L11.09 21.22a.951.951 0 101.82.548l3.634-12.075a2.853 2.853 0 00-.017-1.697l-1.72-5.336a.95.95 0 00-1.197-.613z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    d: "M21.985 9.608H2.015V7.706h19.97v1.902z",
    clipRule: "evenodd"
  }));
};

var PremiumIcon = function PremiumIcon(props) {
  return /*#__PURE__*/React__default['default'].createElement(Icon, props, /*#__PURE__*/React__default['default'].createElement(Premium, null));
};

var Profile = function Profile() {
  return /*#__PURE__*/React__default['default'].createElement("svg", {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 11.125a5.067 5.067 0 01-5.06-5.063A5.067 5.067 0 0112 1c2.79 0 5.06 2.271 5.06 5.062A5.067 5.067 0 0112 11.125zM12 3a3.06 3.06 0 10.001 6.121A3.06 3.06 0 0012 3.001zM11.99 15.006c4.41 0 7.98 2.302 8.01 4.993H4v-.07c.12-2.741 3.63-4.923 7.99-4.923zm0-2c-5.44 0-9.85 3.071-9.99 6.883V20C2 21.1 2.9 22 4 22h16c1.09 0 1.98-.88 2-1.97-.04-3.883-4.5-7.025-10.01-7.025z"
  }));
};

var ProfileIcon = function ProfileIcon(props) {
  return /*#__PURE__*/React__default['default'].createElement(Icon, props, /*#__PURE__*/React__default['default'].createElement(Profile, null));
};

var Link = function Link() {
  return /*#__PURE__*/React__default['default'].createElement("svg", {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React__default['default'].createElement("g", {
    fillRule: "evenodd"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M19.392 16.192a3 3 0 01-.117 4.354c-1.207 1.087-3.097.917-4.246-.231l-4.83-4.83a3 3 0 010-4.243 1 1 0 00-1.414-1.414 5.001 5.001 0 000 7.07l4.798 4.799c1.847 1.847 4.846 2.145 6.859.482a5 5 0 00.364-7.401l-1.414-1.414a.999.999 0 10-1.414 1.414l1.414 1.414zM2.09 3.828a5.002 5.002 0 017.4-.364l4.95 4.95a5 5 0 010 7.07 1 1 0 01-1.413-1.413 3 3 0 000-4.243l-4.95-4.95a3 3 0 00-4.353.117c-1.088 1.207-.918 3.097.23 4.246l1.295 1.294a1 1 0 01-1.414 1.414l-1.263-1.262C.727 8.84.428 5.84 2.09 3.827z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "nonzero",
    d: "M19 1a1 1 0 012 0v6a1 1 0 01-2 0V1z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "nonzero",
    d: "M23 3a1 1 0 010 2h-6a1 1 0 010-2h6z"
  })));
};

var LinkIcon = function LinkIcon(props) {
  return /*#__PURE__*/React__default['default'].createElement(Icon, props, /*#__PURE__*/React__default['default'].createElement(Link, null));
};

var FacebookColor = function FacebookColor() {
  return /*#__PURE__*/React__default['default'].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M23 12c0-6.075-4.925-11-11-11S1 5.925 1 12c0 5.49 4.022 10.041 9.281 10.866V15.18H7.488V12h2.793V9.577c0-2.757 1.642-4.28 4.155-4.28 1.204 0 2.462.215 2.462.215v2.707h-1.387c-1.366 0-1.792.848-1.792 1.718V12h3.05l-.487 3.18h-2.563v7.686c5.258-.825 9.28-5.376 9.28-10.866z",
    clipRule: "evenodd"
  }));
};

var FacebookColorIcon = function FacebookColorIcon(props) {
  return /*#__PURE__*/React__default['default'].createElement(Icon, props, /*#__PURE__*/React__default['default'].createElement(FacebookColor, null));
};

var LinkedinMonoIcon = function LinkedinMonoIcon(props) {
  return /*#__PURE__*/React__default['default'].createElement(Icon, props, /*#__PURE__*/React__default['default'].createElement(IosShare, null));
};

var Buffer = function Buffer() {
  return /*#__PURE__*/React__default['default'].createElement("svg", {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    d: "M1 5.856c3.333-1.57 6.627-3.102 9.96-4.673.575-.268 1.11-.23 1.685.038a703.196 703.196 0 019.386 4.406c.23.115.498.191.498.46 0 .344-.307.382-.536.497-2.988 1.418-6.015 2.797-9.003 4.214-.843.383-1.57.383-2.413 0C7.397 9.304 4.18 7.81 1 6.354v-.498zM1 17.77c.613-.306 1.188-.574 1.762-.88.728-.384 1.418-.307 2.145.037 1.916.92 3.87 1.8 5.785 2.72.728.345 1.417.345 2.145 0 1.954-.92 3.907-1.8 5.861-2.758.728-.345 1.417-.345 2.145 0 .422.23.881.421 1.303.613.191.115.46.192.421.46 0 .23-.23.344-.421.421l-4.367 2.069-4.942 2.298c-.651.307-1.302.345-1.954.038-3.103-1.455-6.205-2.873-9.27-4.328-.192-.077-.345-.23-.536-.345C1 18.038 1 17.923 1 17.77zm0-5.938c.46-.23.92-.42 1.34-.65 1.035-.614 1.993-.499 3.065.038 1.8.919 3.64 1.685 5.44 2.566.69.307 1.302.307 1.954 0 1.915-.92 3.869-1.8 5.784-2.72.805-.383 1.57-.421 2.375 0 .422.23.92.422 1.341.652.383.23.345.46 0 .69-.115.076-.23.114-.345.152-3.064 1.418-6.167 2.873-9.232 4.29-.613.307-1.226.307-1.839 0-3.064-1.417-6.167-2.872-9.232-4.29-.23-.115-.421-.268-.651-.383v-.345z"
  }));
};

var BufferIcon = function BufferIcon(props) {
  return /*#__PURE__*/React__default['default'].createElement(Icon, props, /*#__PURE__*/React__default['default'].createElement(Buffer, null));
};

var RedditMono = function RedditMono() {
  return /*#__PURE__*/React__default['default'].createElement("svg", {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M22.5 11.846a2.617 2.617 0 00-2.614-2.615 2.58 2.58 0 00-1.57.53c-1.459-1.014-3.37-1.618-5.401-1.771l1.096-2.574 3.19.746a1.956 1.956 0 001.94 1.761c1.081 0 1.96-.88 1.96-1.961 0-1.082-.879-1.962-1.96-1.962-.684 0-1.287.354-1.637.89l-3.728-.873a.653.653 0 00-.752.38L11.51 7.956c-2.194.075-4.285.694-5.864 1.771a2.56 2.56 0 00-1.531-.495A2.617 2.617 0 001.5 11.846c0 .956.521 1.82 1.321 2.264-.01.115-.014.233-.014.352C2.807 18.067 6.91 21 11.954 21c5.043 0 9.148-2.933 9.148-6.538 0-.102-.004-.203-.01-.304a2.59 2.59 0 001.408-2.312zM7.38 13.808c0-.72.587-1.308 1.307-1.308s1.307.587 1.307 1.308c0 .722-.587 1.307-1.307 1.307s-1.306-.585-1.306-1.307zm7.592 4.337a5.141 5.141 0 01-6.035 0 .653.653 0 01.766-1.059 3.83 3.83 0 004.503 0 .653.653 0 11.766 1.06zm.25-3.03a1.308 1.308 0 11.001-2.615 1.308 1.308 0 01-.002 2.615z"
  }));
};

var RedditMonoIcon = function RedditMonoIcon(props) {
  return /*#__PURE__*/React__default['default'].createElement(Icon, props, /*#__PURE__*/React__default['default'].createElement(RedditMono, null));
};

var PinFilledIcon = function PinFilledIcon(props) {
  return /*#__PURE__*/React__default['default'].createElement(Icon, props, /*#__PURE__*/React__default['default'].createElement(OverflowMenu, null));
};

var PinIcon = function PinIcon(props) {
  return /*#__PURE__*/React__default['default'].createElement(Icon, props, /*#__PURE__*/React__default['default'].createElement(OverflowMenu, null));
};

var WebViewIcon = function WebViewIcon(props) {
  return /*#__PURE__*/React__default['default'].createElement(Icon, props, /*#__PURE__*/React__default['default'].createElement(IosShare, null));
};

var PermanentCopyIcon = function PermanentCopyIcon(props) {
  return /*#__PURE__*/React__default['default'].createElement(Icon, props, /*#__PURE__*/React__default['default'].createElement(Menu, null));
};

var LinkCopyIcon = function LinkCopyIcon(props) {
  return /*#__PURE__*/React__default['default'].createElement(Icon, props, /*#__PURE__*/React__default['default'].createElement(Menu, null));
};

exports.AddIcon = AddIcon$9;
exports.ArchiveIcon = ArchiveIcon;
exports.ArrowRightIcon = AddIcon$8;
exports.ArticleIcon = ArticleIcon;
exports.BufferIcon = BufferIcon;
exports.Button = Button;
exports.ChevronDownIcon = AddIcon$2;
exports.ChevronLeftIcon = ChevronLeftIcon;
exports.ChevronRightIcon = AddIcon$1;
exports.ChevronUpIcon = AddIcon$3;
exports.CrossIcon = CrossIcon;
exports.DeleteIcon = DeleteIcon;
exports.DetailViewIcon = DetailViewIcon;
exports.DiscoverIcon = DiscoverIcon;
exports.Drawer = Drawer;
exports.EditIcon = EditIcon$1;
exports.ErrorIcon = EditIcon;
exports.FacebookColorIcon = FacebookColorIcon;
exports.FavoriteIcon = FavoriteIcon;
exports.GridViewIcon = GridViewIcon;
exports.HR = HR;
exports.HighlightIcon = HighlightIcon;
exports.HomeIcon = HomeIcon;
exports.IosShareIcon = IosShareIcon;
exports.LineHeightIcon = LineHeightIcon;
exports.LinkCopyIcon = LinkCopyIcon;
exports.LinkIcon = LinkIcon;
exports.LinkedinMonoIcon = LinkedinMonoIcon;
exports.ListViewIcon = ListViewIcon;
exports.Logo = Logo;
exports.LogoMark = LogoMark;
exports.MarginsIcon = AddIcon$5;
exports.MenuIcon = MenuIcon;
exports.OverflowMenuIcon = OverflowMenuIcon;
exports.PageContainer = PageContainer;
exports.PermanentCopyIcon = PermanentCopyIcon;
exports.Pill = Pill;
exports.PinFilledIcon = PinFilledIcon;
exports.PinIcon = PinIcon;
exports.PopupMenu = PopupMenu;
exports.PopupMenuGroup = PopupMenuGroup;
exports.PopupMenuItem = PopupMenuItem;
exports.PremiumIcon = PremiumIcon;
exports.ProfileIcon = ProfileIcon;
exports.RedditMonoIcon = RedditMonoIcon;
exports.RemoveIcon = AddIcon$6;
exports.ReportIcon = AddIcon$7;
exports.SearchIcon = SearchIcon;
exports.SortByNewestIcon = SortByNewestIcon;
exports.SortByOldestIcon = SortByOldestIcon;
exports.TagIcon = TagIcon;
exports.TextInput = TextInput;
exports.TextSettingsIcon = AddIcon;
exports.TextSizeIcon = AddIcon$4;
exports.VideoIcon = VideoIcon;
exports.ViewPortProvider = ViewPortProvider;
exports.WebViewIcon = WebViewIcon;
exports.WithTooltip = WithTooltip;
exports.accountLinkStyle = accountLinkStyle;
exports.avatarStyle = avatarStyle;
exports.breakpointLargeHandset = breakpointLargeHandset;
exports.breakpointLargeTablet = breakpointLargeTablet;
exports.breakpointMediumDesktop = breakpointMediumDesktop;
exports.breakpointMediumHandset = breakpointMediumHandset;
exports.breakpointMediumTablet = breakpointMediumTablet;
exports.breakpointSmallDesktop = breakpointSmallDesktop;
exports.breakpointSmallHandset = breakpointSmallHandset;
exports.breakpointSmallTablet = breakpointSmallTablet;
exports.breakpointTinyHandset = breakpointTinyHandset;
exports.breakpointTinyTablet = breakpointTinyTablet;
exports.buttonStyles = buttonStyles;
exports.containerMaxWidth = containerMaxWidth;
exports.defaultStyle = defaultStyle;
exports.fixedNavContainerStyle = fixedNavContainer;
exports.fontSansSerif = fontSansSerif;
exports.fontSerif = fontSerif;
exports.fontSerifAlt = fontSerifAlt;
exports.fontSize065 = fontSize065;
exports.fontSize075 = fontSize075;
exports.fontSize085 = fontSize085;
exports.fontSize100 = fontSize100;
exports.fontSize125 = fontSize125;
exports.fontSize150 = fontSize150;
exports.fontSize175 = fontSize175;
exports.fontSize200 = fontSize200;
exports.fontSize250 = fontSize250;
exports.fontSize300 = fontSize300;
exports.fontSizeRoot = fontSizeRoot;
exports.fontSizeRootMedium = fontSizeRootMedium;
exports.fontSizeRootSmall = fontSizeRootSmall;
exports.headerStyle = headerStyle;
exports.imageStyle = imageStyle;
exports.linksStyle = linksStyle;
exports.listStyle = listStyle;
exports.navStyle = navStyle;
exports.pageContainerStyle = pageContainerStyle;
exports.screenLargeHandset = screenLargeHandset;
exports.screenLargeTablet = screenLargeTablet;
exports.screenMediumDesktop = screenMediumDesktop;
exports.screenMediumHandset = screenMediumHandset;
exports.screenMediumTablet = screenMediumTablet;
exports.screenSmallDesktop = screenSmallDesktop;
exports.screenSmallHandset = screenSmallHandset;
exports.screenSmallTablet = screenSmallTablet;
exports.screenTinyHandset = screenTinyHandset;
exports.screenTinyTablet = screenTinyTablet;
exports.signupLinkStyle = signupLinkStyle;
exports.size025 = size025;
exports.size050 = size050;
exports.size075 = size075;
exports.size100 = size100;
exports.size125 = size125;
exports.size150 = size150;
exports.size200 = size200;
exports.size250 = size250;
exports.size300 = size300;
exports.size400 = size400;
exports.size500 = size500;
exports.spacing025 = spacing025;
exports.spacing050 = spacing050;
exports.spacing075 = spacing075;
exports.spacing100 = spacing100;
exports.spacing150 = spacing150;
exports.spacing250 = spacing250;
exports.spacing400 = spacing400;
exports.spacing650 = spacing650;
exports.testIdAttribute = testIdAttribute;
exports.toolsStyle = toolsStyle;
exports.upgradeLinkStyle = upgradeLinkStyle;
exports.useViewport = useViewport;

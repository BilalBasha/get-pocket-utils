import React, { useState, useEffect, createContext, useContext, useLayoutEffect, useRef } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { cx } from 'linaria';
import classNames from 'classnames';
import ReactModal from 'react-modal';
import { createPopper } from '@popperjs/core';

var HR = function HR() {
  return /*#__PURE__*/React.createElement("hr", null);
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

var ViewPortContext = /*#__PURE__*/createContext({});

var ViewPortProvider = function ViewPortProvider(_ref) {
  var children = _ref.children;
  var setInitialHeight = global.innerHeight;
  var setInitialWidth = global.innerWidth;

  var _useState = useState(setInitialWidth),
      _useState2 = _slicedToArray(_useState, 2),
      width = _useState2[0],
      setWidth = _useState2[1];

  var _useState3 = useState(setInitialHeight),
      _useState4 = _slicedToArray(_useState3, 2),
      height = _useState4[0],
      setHeight = _useState4[1];

  var handleWindowResize = function handleWindowResize() {
    setWidth(global.innerWidth);
    setHeight(global.innerHeight);
  };

  var handleDebouncedWindowResize = _.debounce(handleWindowResize, 100);

  useEffect(function () {
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
  return /*#__PURE__*/React.createElement(ViewPortContext.Provider, {
    value: value
  }, children);
};

var screenLargeHandset = 599;
var screenTinyTablet = 719;

var headerStyle = "h1y6irym";

var listStyle = "l1y0uodo";

var linksStyle = "l133sa8o";

var toolsStyle = "ty5iddj";

var navStyle = "n1kskpjn";

var accountLinkStyle = "a1illqq1";

var upgradeLinkStyle = "uhglm6i";

var pageContainerStyle = "p1rssxub";

var avatarStyle = "afvsofp";
var imageStyle = "i1rhml2v";
var defaultStyle = "d1u0rqv3";

var PageContainer = function PageContainer(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(pageContainerStyle, " ").concat(className)
  }, children);
};

PageContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
PageContainer.defaultProps = {
  children: null,
  className: ''
};

var logoStyle = "ln1xkw9";
var logoLabelStyle = "lqmbele";

var Logo = function Logo(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames(logoStyle, className)
  }, /*#__PURE__*/React.createElement("span", {
    className: logoLabelStyle
  }, "Pocket"));
};

Logo.propTypes = {
  className: PropTypes.string
};
Logo.defaultProps = {
  className: ''
};

var LogoMark = function LogoMark(_ref) {
  var className = _ref.className;
  var logoStyle$1 = "ljk7yn1";
  var logoLabelStyle$1 = "lchp5up";
  return /*#__PURE__*/React.createElement("div", {
    className: classNames(logoStyle$1, className)
  }, /*#__PURE__*/React.createElement("span", {
    className: logoLabelStyle$1
  }, "Pocket"));
};

LogoMark.propTypes = {
  className: PropTypes.string
};
LogoMark.defaultProps = {
  className: ''
};

var useViewport = function useViewport() {
  var viewContext = useContext(ViewPortContext);
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

var useCorrectEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

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

var Button = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
      variant = props.variant,
      size = props.size,
      href = props.href,
      disabled = props.disabled,
      className = props.className;
  var remainingProps = objectWithoutProperties(props, ["children", "variant", "size", "href", "disabled", "className"]);
  var buttonStyles = "b1344aws";
  var classes = classNames(buttonStyles, className, {
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

  if (href) {
    return /*#__PURE__*/React.createElement("a", elementProps, children);
  } else {
    return /*#__PURE__*/React.createElement("button", elementProps, children);
  }
});
Button.propTypes = {
  /**
   * Content of the button (e.g. button label)
   */
  children: PropTypes.node.isRequired,

  /**
   * Visual variant of the button, from design standards
   */
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'brand', 'emphasized', 'inline']),

  /**
   * Size of the button
   */
  size: PropTypes.oneOf(['normal', 'large', 'small']),

  /**
   * Destination url for the button - if provided, will render the button as
   * an anchor styled like a button
   */
  href: PropTypes.string,

  /**
   * CSS class name if styles need to be provided/overridden.
   */
  className: PropTypes.string
};
Button.defaultProps = {
  variant: 'primary',
  size: 'normal',
  href: undefined,
  className: null
};

var Icon = function Icon(_ref) {
  var children = _ref.children,
      className = _ref.className,
      id = _ref.id,
      title = _ref.title,
      description = _ref.description;
  var iconStyle = "i1acz0ik";
  var ariaTitle = '';
  var ariaDescription = '';
  return /*#__PURE__*/React.createElement("span", {
    className: classNames(iconStyle, className)
  }, /*#__PURE__*/React.cloneElement(children, {
    // note: only pass valid html/svg attributes here
    "aria-labelledby": "".concat(ariaTitle, " ").concat(ariaDescription)
  }, // accessibility tags are passed as children
  [title ? /*#__PURE__*/React.createElement("title", {
    id: "".concat(id, "-title"),
    key: "".concat(id, "-title")
  }, title) : null, description ? /*#__PURE__*/React.createElement("desc", {
    id: "".concat(id, "-description"),
    key: "".concat(id, "-description")
  }, description) : null]));
};

var Menu = function Menu() {
  return /*#__PURE__*/React.createElement("svg", {
    "aria-labelledby": "mobile-menu-menu-icon-title mobile-menu-menu-icon-description",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M2 5a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zM2 12a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zM2 19a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("title", {
    id: "mobile-menu-menu-icon-title"
  }, "Open"), /*#__PURE__*/React.createElement("desc", {
    id: "mobile-menu-menu-icon-description"
  }, "Open the Pocket mobile menu"));
};

var MenuIcon = function MenuIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(Menu, null));
};

var Add = function Add() {
  return /*#__PURE__*/React.createElement("svg", {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M12 3a1 1 0 011 1v7h7a1 1 0 110 2h-7v7a1 1 0 11-2 0v-7H4a1 1 0 110-2h7V4a1 1 0 011-1z",
    clipRule: "evenodd"
  }));
};

var CrossIcon = function CrossIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(Add, null));
};

var isIosDevice = typeof window !== 'undefined' && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1);

var modalStyles = "m1gbisw7";
var overlayStyles = "o1ohlj7h";

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
  var modalContentRef = useRef(null); // aids in accessibility, http://reactcommunity.org/react-modal/accessibility/

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      readyAnimate = _useState2[0],
      setReadyAnimate = _useState2[1];

  ReactModal.setAppElement(appRootSelector);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ReactModal, {
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
    className: classNames([className, modalStyles, modalContentClassName, {
      'animation-base': doesAnimateTransition,
      'animation-show': doesAnimateTransition && readyAnimate && isOpen,
      'animation-hide': doesAnimateTransition && readyAnimate && !isOpen,
      'force-mobile': forceMobile
    }]),
    overlayClassName: classNames([overlayStyles, overlayClassName, {
      'animation-base': doesAnimateTransition,
      'animation-show': doesAnimateTransition && readyAnimate && isOpen,
      'animation-hide': doesAnimateTransition && readyAnimate && !isOpen
    }]),
    portalClassName: classNames([portalClassName]),
    closeTimeoutMS: closeTimeoutMS
  }, showCloseButton ? /*#__PURE__*/React.createElement(CloseButton, null) : null, children));
};

var closeButtonStyles = "c9xoh5";

var CloseButton = function CloseButton(_ref2) {
  var handleClose = _ref2.handleClose;
  return /*#__PURE__*/React.createElement("button", {
    className: closeButtonStyles,
    "aria-label": "Close",
    onClick: handleClose
  }, /*#__PURE__*/React.createElement(CrossIcon, null), /*#__PURE__*/React.createElement("span", {
    className: "visually-hidden"
  }, "Close"));
};

Modal.propTypes = {
  // Pocket Modal Props

  /**
   * title to display in ModalHeader
   */
  title: PropTypes.string,

  /**
   * query selector specifying root element of React App
   */
  appRootSelector: PropTypes.string.isRequired,
  // Exposing React Modal Props

  /**
   * Boolean indicating whether the modal should be open
   */
  isOpen: PropTypes.bool,

  /**
   * Set to true to force the modal into mobile styling.
   */
  forceMobile: PropTypes.bool,

  /**
   * String indicating how the content container should be announced
   to screen readers
   */
  screenReaderLabel: PropTypes.string.isRequired,

  /**
   * Function that will be run when the modal is requested
   to be closed (either by clicking on overlay or pressing ESC).
   Note: It is not called if isOpen is changed by other means.
   */
  handleClose: PropTypes.func.isRequired,

  /**
   * Boolean indicating whether to use a default close button
   */
  showCloseButton: PropTypes.bool,

  /**
   * Boolean indicating whether the modal close when a user clicks
   * on the overlay
   */
  shouldCloseOnOverlayClick: PropTypes.bool,

  /**
   * Function to run after the modal is opened
   */
  onAfterOpen: PropTypes.func,

  /**
   * Function to run after the modal is closed
   */
  onAfterClose: PropTypes.func,

  /**
   * Additional CSS class name to place on the modal content
   */
  modalContentClassName: PropTypes.string,

  /**
   * Additional CSS class name to place on the modal overlay
   */
  overlayClassName: PropTypes.string,

  /**
   * Additional CSS class name to place on the entire portal
   */
  portalClassName: PropTypes.string,

  /**
   * Boolean describing whether the modal should fade in and out
   */
  doesAnimateTransition: PropTypes.bool,

  /**
   * Milliseconds to delay close, useful for outgoing animations
   */
  closeTimeoutMS: PropTypes.number
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
  return /*#__PURE__*/React.createElement(Modal, {
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

var ChevronLeft = function ChevronLeft() {
  return /*#__PURE__*/React.createElement("svg", {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    "fill-rule": "evenodd",
    d: "M12 3a1 1 0 011 1v7h7a1 1 0 110 2h-7v7a1 1 0 11-2 0v-7H4a1 1 0 110-2h7V4a1 1 0 011-1z",
    clipRule: "evenodd"
  }));
};

var ChevronLeftIcon = function ChevronLeftIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(ChevronLeft, null));
};

var DrawerHeader = function DrawerHeader(_ref) {
  var handleClose = _ref.handleClose;
  var drawerHeaderStyles = "dtc40ar";
  var iconStyle$1 = "i1pibbob";
  return /*#__PURE__*/React.createElement("div", {
    className: drawerHeaderStyles
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: handleClose,
    variant: "inline",
    className: iconStyle$1
  }, /*#__PURE__*/React.createElement(ChevronLeftIcon, {
    id: "mobile-menu-chevron-icon",
    title: "Close",
    description: "Close the Pocket mobile menu"
  })));
};

var Discover = function Discover() {
  return /*#__PURE__*/React.createElement("svg", {
    "aria-labelledby": " ",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M7.422 6.122a1 1 0 00-1.3 1.3l2.828 7.07a1 1 0 00.557.558l7.071 2.828a1 1 0 001.3-1.3l-2.828-7.07a1 1 0 00-.557-.558L7.422 6.122zm3.226 7.23l4.507 1.803-1.803-4.507-2.704 2.704z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M12 21a9 9 0 100-18 9 9 0 000 18zm0 2c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z",
    clipRule: "evenodd"
  }));
};

var DiscoverIcon = function DiscoverIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(Discover, null));
};

var ListView = function ListView() {
  return /*#__PURE__*/React.createElement("svg", {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM5 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM5 19a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M7 5a1 1 0 011-1h13a1 1 0 110 2H8a1 1 0 01-1-1zM7 12a1 1 0 011-1h13a1 1 0 110 2H8a1 1 0 01-1-1zM7 19a1 1 0 011-1h13a1 1 0 110 2H8a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
};

var ListViewIcon = function ListViewIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(ListView, null));
};

var GlobalNavMobileMenu = function GlobalNavMobileMenu(_ref) {
  _ref.links;
      _ref.selectedLink;
      _ref.onLinkClick;
      _ref.isUserLoggedIn;
      _ref.isUserPremium;
      var onOpen = _ref.onOpen,
      onClosed = _ref.onClosed,
      appRootSelector = _ref.appRootSelector,
      isOpen = _ref.isOpen,
      toggleMenuOpen = _ref.toggleMenuOpen,
      toggleClass = _ref.toggleClass;
  var iconStyle$1 = "i1pibbob";

  var handleClose = function handleClose() {
    onClosed();
    toggleMenuOpen(false);
  };

  var handleOpen = function handleOpen() {
    onOpen();
    toggleMenuOpen(true);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    onClick: handleOpen,
    variant: "inline",
    className: classNames(iconStyle$1, toggleClass)
  }, /*#__PURE__*/React.createElement(MenuIcon, {
    id: "mobile-menu-menu-icon",
    title: "Open",
    description: "Open the Pocket mobile menu"
  })), /*#__PURE__*/React.createElement(Drawer, {
    appRootSelector: appRootSelector,
    isOpen: isOpen,
    handleClose: handleClose,
    screenReaderLabel: "Pocket Mobile Menu"
  }, /*#__PURE__*/React.createElement(DrawerHeader, {
    handleClose: handleClose
  })));
};

GlobalNavMobileMenu.propTypes = {
  /**
   * query selector specifying root element of React App (e.g. '#root'). This is
   * where the Drawer markup will be injected.
   */
  appRootSelector: PropTypes.string.isRequired,

  /**
   * Links to display. Accepted as a prop so that links can be customized per page
   * context via the GlobalNav parent. Each link should have a name (id), label
   * (for display), and url. Each link will be rendered as an MobileLink in a menu.
   */
  links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    icon: PropTypes.node
  })),

  /**
   * Name of a link that is selected, if any. Should match the name of one of the
   * links passed in with props. If a link matches this name, it will have an
   * "selected" style applied.
   */
  selectedLink: PropTypes.string,

  /**
   * Callback function called when any link is clicked. Gets passed the name and
   * url of that link.
   */
  onLinkClick: PropTypes.func,

  /**
   * Callback function called when the mobile menu is opened. Useful for analytics
   */
  onOpen: PropTypes.func,
  toggleMenuOpen: PropTypes.func,

  /**
   * Callback function called when the mobile menu is closed. Useful for analytics
   */
  onClosed: PropTypes.func,

  /**
   * Boolean indicating whether the user is logged in
   * url of that link.
   */
  isUserLoggedIn: PropTypes.bool,

  /**
   * Boolean indicating whether the user is a Premium User
   */
  isUserPremium: PropTypes.bool,

  /**
   * Boolean targeting dev users and tests, to provide an initial open state
   * for mobile menu
   */
  forceShow: PropTypes.bool
};
GlobalNavMobileMenu.defaultProps = {
  links: [{
    name: 'discover',
    id: 'global-nav-discover-link',
    label: 'Discover',
    url: 'https://getBlog.com/explore?src=navbar',
    icon: /*#__PURE__*/React.createElement(DiscoverIcon, null)
  }, {
    name: 'my-list',
    id: 'global-nav-my-list-link',
    label: 'My List',
    url: 'https://getBlog.com/my-list?src=navbar',
    icon: /*#__PURE__*/React.createElement(ListViewIcon, null)
  }],
  selectedLink: null,
  onLinkClick: function onLinkClick(event, linkName, linkUrl) {},
  onOpen: function onOpen() {},
  onClosed: function onClosed() {},
  toggleMenuOpen: function toggleMenuOpen() {},
  isUserLoggedIn: false,
  isUserPremium: false,
  forceShow: false
};

var GlobalNavLinks = function GlobalNavLinks(_ref) {
  var links = _ref.links,
      selectedLink = _ref.selectedLink,
      onLinkClick = _ref.onLinkClick,
      className = _ref.className;

  var handleClick = function handleClick(event, linkName, linkUrl) {
    onLinkClick(linkName, linkUrl);
  };

  return /*#__PURE__*/React.createElement("ul", {
    className: cx(listStyle, className)
  }, links.map(function (link) {
    var isSelected = link.name === selectedLink;
    return /*#__PURE__*/React.createElement("li", {
      key: "global-nav-link-".concat(link.name)
    }, /*#__PURE__*/React.createElement("a", {
      id: link.id,
      className: isSelected ? 'selected' : '',
      href: link.url,
      onClick: function onClick(event) {
        return handleClick(event, link.name, link.url);
      }
    }, link.label));
  }));
};

GlobalNavLinks.propTypes = {
  /**
   * Links to display. Accepted as a prop so that links can be customized per page
   * context via the GlobalNav parent. Each link should have a name (id), label
   * (for display), and url. Each link will be rendered as an anchor in a list.
   */
  links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    label: PropTypes.string,
    url: PropTypes.string
  })),

  /**
   * Name of a link that is selected, if any. Should match the name of one of the
   * links passed in with props. If a link matches this name, it will have an
   * "selected" style applied.
   */
  selectedLink: PropTypes.string,

  /**
   * Callback function called when any link is clicked. Gets passed the name and
   * url of that link.
   */
  onLinkClick: PropTypes.func
};
GlobalNavLinks.defaultProps = {
  links: [{
    name: 'discover',
    id: 'discover',
    label: 'Discover',
    url: 'https://getBlog.com/explore?src=navbar'
  }, {
    name: 'my-list',
    id: 'my-list',
    label: 'My List',
    url: 'https://getBlog.com/my-list?src=navbar'
  }],
  selectedLink: null,
  onLinkClick: function onLinkClick(event, linkName, linkUrl) {}
};

var GlobalNavTools = function GlobalNavTools(_ref) {
  var tools = _ref.tools,
      onToolClick = _ref.onToolClick;

  var handleToolClick = function handleToolClick(event, toolName) {
    onToolClick(toolName);
  };

  if (!tools.length) {
    return null;
  }

  return /*#__PURE__*/React.createElement("ul", {
    className: listStyle
  }, tools.map(function (tool) {
    return /*#__PURE__*/React.createElement("li", {
      key: "global-nav-tool-".concat(tool.name)
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      title: tool.label,
      onClick: function onClick(event) {
        return handleToolClick(event, tool.name);
      }
    }, tool.icon));
  }));
};

GlobalNavTools.propTypes = {
  /**
   * Tool icons to display. Accepted as a prop so that tools can be customized per
   * page context via the GlobalNav parent. Each tool should have a name (id),
   * label (for display), and icon component. Each icon will be rendered as a
   * button in a list.
   */
  tools: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.node
  })),

  /**
   * Callback function called when any tool is clicked. Gets passed the name of
   * that tool.
   */
  onToolClick: PropTypes.func
};
GlobalNavTools.defaultProps = {
  tools: [],
  onToolClick: function onToolClick(toolName) {}
};

var Tag = function Tag() {
  return /*#__PURE__*/React.createElement("svg", {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M2 4a2 2 0 012-2h6a2 2 0 011.414.586L20 11.172a4 4 0 010 5.656L16.828 20a4 4 0 01-5.656 0l-8.586-8.586A2 2 0 012 10V4zm8 0l8.586 8.586a2 2 0 010 2.828l-3.172 3.172a2 2 0 01-2.828 0L4 10V4h6z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
  }));
};

var PremiumIcon = function PremiumIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(Tag, null));
};

var WithTooltip = function WithTooltip(_ref) {
  var children = _ref.children,
      label = _ref.label,
      isBlockLevel = _ref.isBlockLevel,
      placement = _ref.placement,
      delay = _ref.delay;
  var tooltipStyles = "t1221eea";
  var placementBottom = "pzhe358";
  var placementTop = "pmdugmx";
  var delayStyle = "d1ihjjkq";

  if (typeof placement === 'undefined') {
    placement = 'bottom';
  }

  if (typeof delay === 'undefined') {
    delay = false;
  }

  var placementStyle = placement === 'bottom' ? placementBottom : placementTop;
  var tipStyle = cx(tooltipStyles, placementStyle, delay && delayStyle);
  return isBlockLevel ? /*#__PURE__*/React.createElement("div", {
    className: tipStyle,
    "aria-label": label,
    tooltip: label
  }, children) : /*#__PURE__*/React.createElement("span", {
    className: tipStyle,
    "aria-label": label,
    tooltip: label
  }, children);
};

WithTooltip.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired
};

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
  var popupStyle = "p1is21nw";
  var popper, animationTimeout;
  var globalEvents = ['click', 'touch', 'focus'];

  var _useState = useState(forceShow),
      _useState2 = _slicedToArray(_useState, 2),
      isShowRequested = _useState2[0],
      setIsShowRequested = _useState2[1];

  var _useState3 = useState(forceShow),
      _useState4 = _slicedToArray(_useState3, 2),
      isShown = _useState4[0],
      setIsShown = _useState4[1];

  var _useState5 = useState(forceShow),
      _useState6 = _slicedToArray(_useState5, 2),
      isAnimationApplied = _useState6[0],
      setIsAnimationApplied = _useState6[1];

  var contentRef = useRef(null);

  var createPopper$1 = function createPopper$1() {
    if (!popper) {
      popper = createPopper(trigger.current, contentRef.current, popperOptions);
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
  return /*#__PURE__*/React.createElement("div", {
    ref: contentRef,
    className: classNames(popupStyle, className)
  }, alwaysRender || isShowRequested || isShown ? /*#__PURE__*/React.createElement("div", {
    className: classNames('popup-content', {
      enter: isShown,
      'animate-to': isAnimationApplied
    })
  }, children) : null);
};

Popup.propTypes = {
  /**
   * Content to put within the popup.
   */
  children: PropTypes.node.isRequired,

  /**
   * Ref for the element or React node that will serve as the clickable trigger
   * for toggling the popup
   */
  trigger: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,

  /**
   * Provide an id if desired, for test markers or analytics.
   */
  id: PropTypes.string,

  /**
   * CSS class name that can be provided to override styles as well as animations
   * (using the animation selector class ('animate-to'))
   */
  className: PropTypes.string,

  /**
   * Animation duration in milliseconds that corresponds to any CSS transition
   * animations that will be applied. Necessary so that we don't remove the
   * animation classes and hide the popup until the animation is complete.
   */
  animationDuration: PropTypes.number,

  /**
   * When true, popper will remain rendered even when hidden. This would serve
   * SEO purposes to ensure hidden content is still available for crawlers, e.g.
   * navigational menu content. If content does not need to be available for SEO
   * and page weight/performance is a concern, set this to false.
   */
  alwaysRender: PropTypes.bool,

  /**
   * Called when the popup opens. Can be used for e.g. analytics tracking.
   */
  onOpen: PropTypes.func,

  /**
   * Called when the popup closes. Can be used for e.g. analytics tracking.
   */
  onClose: PropTypes.func,

  /**
   * Options object per the popperJS API that will be passed in when creating the
   * popperJS instance. See: https://popper.js.org/docs/v2/constructors/
   */
  popperOptions: PropTypes.object,

  /**
   * Set to true to have the popup shown. Mostly intended for debugging purposes
   * so that the popup stays open rather than closing on outside click.
   */
  forceShow: PropTypes.bool
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
  var popupStyle$1 = "psmbvm8";
  var menuStyle = "m158lzzu";
  var viewport = useViewport(); // if viewport not available, we're probably SSR and so set the default to the

  var viewportWidth = viewport ? viewport.width : screenLargeHandset + 1;
  var checkIsMobile = viewportWidth <= screenLargeHandset;

  var _useState = useState(forceShow),
      _useState2 = _slicedToArray(_useState, 2),
      isMenuOpen = _useState2[0],
      setIsMenuOpen = _useState2[1];

  var _useState3 = useState(checkIsMobile),
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
    return /*#__PURE__*/React.createElement("ul", {
      id: id,
      className: classNames(menuStyle, {
        'is-mobile': isMobile
      })
    }, children);
  };

  var renderHtml;

  if (isMobile) {
    renderHtml = /*#__PURE__*/React.createElement(Modal, {
      title: title,
      appRootSelector: appRootSelector,
      screenReaderLabel: screenReaderLabel,
      handleClose: handleModalClose,
      isOpen: isMenuOpen,
      forceMobile: "true"
    }, getContent());
  } else {
    renderHtml = /*#__PURE__*/React.createElement(Popup, {
      trigger: trigger,
      className: popupStyle$1,
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
  children: PropTypes.node.isRequired,

  /**
   * Ref for the element or React node that will serve as the clickable trigger
   * for toggling the popup
   */
  trigger: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,

  /**
   * Title of the menu, required for providing context to the user in the mobile
   * mode of the menu, in the header.
   */
  title: PropTypes.string.isRequired,

  /**
   * query selector specifying root element of React App
   */
  appRootSelector: PropTypes.string.isRequired,

  /**
   * String indicating how the content container should be announced
   to screen readers
   */
  screenReaderLabel: PropTypes.string.isRequired,

  /**
   * Provide an id if menu needs to be identified on the page, e.g.
   * during tests or analytics calls
   */
  id: PropTypes.string,

  /**
   * Called when the menu opens.
   */
  onOpen: PropTypes.func,

  /**
   * Called when the menu closes.
   */
  onClose: PropTypes.func,

  /**
   * Options object per the popperJS API that will be passed in when creating the
   * popperJS instance. See: https://popper.js.org/docs/v2/constructors/
   */
  popperOptions: PropTypes.object,

  /**
   * Set to true to have the popup shown. Mostly intended for debugging purposes
   * so that the popup stays open rather than closing on outside click.
   */
  forceShow: PropTypes.bool
};
PopupMenu.defaultProps = {
  id: '',
  onOpen: function onOpen(id) {},
  onClose: function onClose(id) {},
  forceShow: false
};

var PopupMenuGroup = function PopupMenuGroup(_ref) {
  var children = _ref.children;
  var groupStyle = "gx34gyr";
  return /*#__PURE__*/React.createElement("li", {
    className: groupStyle
  }, /*#__PURE__*/React.createElement("ul", null, children));
};

var PopupMenuItem = function PopupMenuItem(_ref) {
  var children = _ref.children,
      id = _ref.id,
      helperText = _ref.helperText,
      className = _ref.className,
      href = _ref.href,
      icon = _ref.icon;
  var itemStyle = "iv7u18i";

  var getContent = function getContent() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, icon, /*#__PURE__*/React.createElement("span", {
      className: "label"
    }, children, helperText ? /*#__PURE__*/React.createElement("span", {
      className: "label-secondary"
    }, helperText) : null));
  };

  return /*#__PURE__*/React.createElement("li", {
    className: classNames(itemStyle, className)
  }, href ? /*#__PURE__*/React.createElement("a", {
    href: href,
    id: id
  }, " ", getContent(), " ") : /*#__PURE__*/React.createElement("button", {
    type: "button",
    id: id
  }, " ", getContent(), " "));
};

PopupMenuItem.propTypes = {
  /**
   * Will render the child as the text of a button/link.
   */
  children: PropTypes.node.isRequired,

  /**
   * Provide an id if menu item needs to be identified on the page, e.g.
   * during tests or analytics calls
   */
  id: PropTypes.string,

  /**
   * Text to be displayed below the primary label.
   */
  helperText: PropTypes.string,

  /**
   * CSS class to apply to the list item if needed to override styles for that
   * specific item.
   */
  className: PropTypes.string,

  /**
   * If the menu item should be a hyperlink, provide an href and it will be
   * rendered as an anchor rather than a button.
   */
  href: PropTypes.string,

  /**
   * Provide a JSX icon in order to display an icon before the text.
   */
  icon: PropTypes.node
};
PopupMenuItem.defaultProps = {
  helperText: null,
  className: '',
  href: null,
  icon: null
};

var Profile = function Profile() {
  return /*#__PURE__*/React.createElement("svg", {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 11.125a5.067 5.067 0 01-5.06-5.063A5.067 5.067 0 0112 1c2.79 0 5.06 2.271 5.06 5.062A5.067 5.067 0 0112 11.125zM12 3a3.06 3.06 0 10.001 6.121A3.06 3.06 0 0012 3.001zM11.99 15.006c4.41 0 7.98 2.302 8.01 4.993H4v-.07c.12-2.741 3.63-4.923 7.99-4.923zm0-2c-5.44 0-9.85 3.071-9.99 6.883V20C2 21.1 2.9 22 4 22h16c1.09 0 1.98-.88 2-1.97-.04-3.883-4.5-7.025-10.01-7.025z"
  }));
};

var ProfileIcon = function ProfileIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(Profile, null));
};

var Avatar = function Avatar(_ref) {
  _ref.id;
      var src = _ref.src,
      altText = _ref.altText,
      size = _ref.size,
      className = _ref.className;
  var avatarStyleVariables = {
    width: size,
    height: size
  };
  return /*#__PURE__*/React.createElement("span", {
    className: classNames(avatarStyle, {
      'with-image': !!src,
      "default": !src
    }, className),
    style: avatarStyleVariables
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: altText,
    className: imageStyle
  }) : /*#__PURE__*/React.createElement(ProfileIcon, {
    className: defaultStyle
  }));
};

Avatar.propTypes = {
  /**
   * Width/height of the avatar, in px or % (or other css string value). Since the
   * avatar will be square, this value is both width and height.
   */
  size: PropTypes.string.isRequired,

  /**
   * Provide an id if you have multiple instances per page and need unique
   * identifiers for tests.
   */
  id: PropTypes.string,

  /**
   * The src/url for the avatar image
   */
  src: PropTypes.string,

  /**
   * Alt text to include as a description of the Avatar for non-sighted users
   */
  altText: PropTypes.string,

  /**
   * Classname to be applied to the outer node that can be used to override
   * or supplement styles.
   */
  className: PropTypes.string
};
Avatar.defaultProps = {
  id: '',
  src: null,
  altText: 'Your avatar'
};

var AvatarButton = /*#__PURE__*/React.forwardRef(function (_ref) {
  _ref.id;
      var size = _ref.size,
      label = _ref.label,
      src = _ref.src,
      onClick = _ref.onClick,
      className = _ref.className;
  var buttonStyles$1 = "b1344aws";
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: classNames(buttonStyles$1, className),
    title: label,
    onClick: onClick
  }, /*#__PURE__*/React.createElement(Avatar, {
    size: size,
    src: src,
    altText: label
  }));
});
AvatarButton.propTypes = {
  /**
   * Width/height of the avatar. Since the avatar will be square, this value is
   * both width and height.
   */
  size: PropTypes.string.isRequired,

  /**
   * Alt text to include as the button label of the Avatar for non-sighted users
   */
  label: PropTypes.string,

  /**
   * Provide an id if you have multiple instances per page and need unique
   * identifiers for tests.
   */
  id: PropTypes.string,

  /**
   * The src/url for the avatar image
   */
  src: PropTypes.string,

  /**
   * Callback called when the button is clicked.
   */
  onClick: PropTypes.func,

  /**
   * Classname to be applied to the outer node that can be used to override
   * or supplement styles.
   */
  className: PropTypes.string
};
AvatarButton.defaultProps = {
  label: '',
  id: '',
  src: null,
  onClick: function onClick() {},
  className: null
};

var GlobalNavAccount = function GlobalNavAccount(_ref) {
  var isLoggedIn = _ref.isLoggedIn,
      isPremium = _ref.isPremium,
      avatarSrc = _ref.avatarSrc,
      accountName = _ref.accountName,
      profileUrl = _ref.profileUrl,
      appRootSelector = _ref.appRootSelector,
      onLinkClick = _ref.onLinkClick,
      onAccountClick = _ref.onAccountClick;
  var signupLinkStyle = "sm6eflf";
  var avatarStyle$1 = "ao4gc3t";
  var accountMenuTriggerRef = useRef(null);

  var handleLinkClick = function handleLinkClick(name, event) {
    onLinkClick(name);
  };

  if (!isLoggedIn) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
      href: "https://getBlog.com/login?src=navbar",
      id: "global-nav-login-link",
      className: "".concat(accountLinkStyle, " login-link"),
      onClick: function onClick(event) {
        return handleLinkClick('login');
      }
    }, "Log in"), /*#__PURE__*/React.createElement(Button, {
      href: "https://getBlog.com/login?src=navbar",
      id: "global-nav-signup-link",
      variant: "secondary",
      className: signupLinkStyle,
      onClick: function onClick(event) {
        return handleLinkClick('signup');
      }
    }, /*#__PURE__*/React.createElement(PremiumIcon, null), /*#__PURE__*/React.createElement("span", {
      className: "label"
    }, "Sign up")));
  } else {
    return /*#__PURE__*/React.createElement("div", null, !isPremium ? /*#__PURE__*/React.createElement("a", {
      href: "https://getBlog.com/premium?src=navbar",
      id: "global-nav-upgrade-link",
      className: "".concat(accountLinkStyle, " ").concat(upgradeLinkStyle),
      onClick: function onClick() {
        return handleLinkClick('premium');
      }
    }, /*#__PURE__*/React.createElement(PremiumIcon, null), /*#__PURE__*/React.createElement("span", null, "Upgrade")) : null, /*#__PURE__*/React.createElement(WithTooltip, {
      label: "Account"
    }, /*#__PURE__*/React.createElement(AvatarButton, {
      src: avatarSrc,
      ref: accountMenuTriggerRef,
      size: "40px",
      label: null,
      className: avatarStyle$1
    })), /*#__PURE__*/React.createElement(PopupMenu, {
      trigger: accountMenuTriggerRef,
      title: "Account",
      screenReaderLabel: "Account menu",
      appRootSelector: appRootSelector,
      onOpen: onAccountClick,
      popperOptions: {
        placement: 'bottom-end',
        modifiers: [{
          name: 'offset',
          options: {
            offset: [0, 4]
          }
        }]
      }
    }, /*#__PURE__*/React.createElement(PopupMenuGroup, null, /*#__PURE__*/React.createElement(PopupMenuItem, {
      helperText: "View profile",
      href: profileUrl,
      id: "account-menu-profile-link",
      onClick: function onClick(event) {
        return handleLinkClick('view-profile');
      }
    }, accountName), /*#__PURE__*/React.createElement(PopupMenuItem, {
      href: "https://getBlog.com/options?src=navbar",
      id: "account-menu-manage-account-link",
      onClick: function onClick(event) {
        return handleLinkClick('manage-account');
      }
    }, "Manage Account"), /*#__PURE__*/React.createElement(PopupMenuItem, {
      href: "https://help.getBlog.com/category/847-category?src=navbar",
      id: "account-menu-help-link",
      onClick: function onClick(event) {
        return handleLinkClick('help');
      }
    }, "Get help"), /*#__PURE__*/React.createElement(PopupMenuItem, {
      href: "https://getBlog.com/options?src=navbar",
      id: "account-menu-logout-link",
      onClick: function onClick(event) {
        return handleLinkClick('logout');
      }
    }, "Log out"))));
  }
};

GlobalNavAccount.propTypes = {
  /**
   * query selector specifying root element of React App, for use by the modal
   * for the account menu
   */
  appRootSelector: PropTypes.string.isRequired,

  /**
   * Controls what UI the user sees, appropriate for logged-in status.
   */
  isLoggedIn: PropTypes.bool,

  /**
   * Controls whether the user sees a premium signup link.
   */
  isPremium: PropTypes.bool,

  /**
   * Image src for the avatar used for the account menu.
   */
  avatarSrc: PropTypes.string,

  /**
   * Name of the account holder
   */
  accountName: PropTypes.string,

  /**
   * Url to the user's profile page (based on user id)
   */
  profileUrl: PropTypes.string,

  /**
   * Called when a user clicks on any link inside the account component. Is passed
   * the name of the link.
   */
  onLinkClick: PropTypes.func,

  /**
   * Called when the user clicks on the avatar to open the account menu
   */
  onAccountClick: PropTypes.func
};
GlobalNavAccount.defaultProps = {
  isLoggedIn: false,
  isPremium: false,
  avatarSrc: null,
  accountName: 'You',
  profileUrl: null,
  onLinkClick: function onLinkClick(linkName) {},
  onAccountClick: function onAccountClick() {}
};

var GlobalNavV2 = function GlobalNavV2(_ref) {
  var appRootSelector = _ref.appRootSelector,
      pocketLogoOutboundUrl = _ref.pocketLogoOutboundUrl,
      selectedLink = _ref.selectedLink,
      isLoggedIn = _ref.isLoggedIn,
      isPremium = _ref.isPremium,
      avatarSrc = _ref.avatarSrc,
      accountName = _ref.accountName,
      profileUrl = _ref.profileUrl,
      onLinkClick = _ref.onLinkClick,
      onToolClick = _ref.onToolClick,
      onAccountClick = _ref.onAccountClick,
      links = _ref.links,
      tools = _ref.tools,
      children = _ref.children;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isMobileMenuOpen = _useState2[0],
      setIsMobileMenuOpen = _useState2[1];

  var viewport = useViewport();
  var viewportWidth = viewport ? viewport.width : screenTinyTablet + 1;
  var checkIsMobile = viewportWidth <= screenTinyTablet;

  var _useState3 = useState(checkIsMobile),
      _useState4 = _slicedToArray(_useState3, 2),
      isMobile = _useState4[0],
      setIsMobile = _useState4[1];

  var handleLinkClick = function handleLinkClick(linkId, event) {
    var _event$currentTarget;

    if (isMobile) {
      event.preventDefault();
      setIsMobileMenuOpen(true);
      return;
    }

    var linkUrl = event === null || event === void 0 ? void 0 : (_event$currentTarget = event.currentTarget) === null || _event$currentTarget === void 0 ? void 0 : _event$currentTarget.href;
    onLinkClick(linkId, linkUrl);
  };

  useCorrectEffect(function () {
    setIsMobile(viewportWidth <= screenTinyTablet);
  }, [viewportWidth]);
  return /*#__PURE__*/React.createElement("header", {
    className: classNames(headerStyle, {
      'logged-in': isLoggedIn
    })
  }, /*#__PURE__*/React.createElement(PageContainer, {
    className: "global-nav-container"
  }, /*#__PURE__*/React.createElement("nav", {
    className: navStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: "site-nav"
  }, /*#__PURE__*/React.createElement(GlobalNavMobileMenu, {
    appRootSelector: appRootSelector,
    links: links,
    onLinkClick: onLinkClick,
    selectedLink: selectedLink,
    toggleClass: "hamburger-icon",
    isOpen: isMobileMenuOpen,
    toggleMenuOpen: setIsMobileMenuOpen
  }), /*#__PURE__*/React.createElement("a", {
    id: "pocket-logo-nav",
    className: "pocket-logo",
    href: pocketLogoOutboundUrl,
    onClick: function onClick() {
      return handleLinkClick('pocket');
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    className: "logo"
  }), isLoggedIn ? /*#__PURE__*/React.createElement(LogoMark, null) : null)), children ? children : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: linksStyle,
    "aria-label": "Page navigation"
  }, /*#__PURE__*/React.createElement(GlobalNavLinks, {
    selectedLink: selectedLink,
    className: "links",
    links: links,
    onLinkClick: onLinkClick
  }), /*#__PURE__*/React.createElement("div", {
    className: classNames(toolsStyle, {
      'is-premium': isPremium
    })
  }), /*#__PURE__*/React.createElement(GlobalNavTools, {
    tools: tools,
    onToolClick: onToolClick
  })), /*#__PURE__*/React.createElement(GlobalNavAccount, {
    appRootSelector: appRootSelector,
    isPremium: isPremium,
    isLoggedIn: isLoggedIn,
    avatarSrc: avatarSrc,
    accountName: accountName,
    profileUrl: profileUrl,
    onLinkClick: onLinkClick,
    onAccountClick: onAccountClick
  })))));
};

var testIdAttribute = function testIdAttribute(id) {
  if (process.env.NODE_ENV === 'test' || process.env.SHOW_DEV === 'included') {
    return {
      'data-test-id': id
    };
  }

  return undefined;
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
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames(inputWrapper, className, {
      invalid: !!errorWithLengthCheck,
      disabled: disabled
    })
  }, testIdAttribute('email-input')), children, /*#__PURE__*/React.createElement("span", {
    className: classNames('label-wrapper', {
      'has-value': !!value
    })
  }, /*#__PURE__*/React.createElement("label", _extends({
    htmlFor: name
  }, testIdAttribute('input-label')), labelText)), (helperText || showCharacterLimit) && !errorWithLengthCheck ? /*#__PURE__*/React.createElement("span", _extends({
    className: helperTextStyle
  }, testIdAttribute('helper-text')), showCharacterLimit ? characterCountLabel : helperText) : null, errorWithLengthCheck && typeof errorWithLengthCheck === 'string' ? /*#__PURE__*/React.createElement("span", _extends({
    className: classNames(helperTextStyle, errorMessageStyle, {
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
  return /*#__PURE__*/React.createElement(InputWrapper, {
    labelText: labelText,
    helperText: helperText,
    error: error,
    displayErrorInline: displayErrorInline,
    className: className,
    disabled: disabled,
    name: name,
    value: value
  }, /*#__PURE__*/React.createElement("input", _extends({
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
  name: PropTypes.string.isRequired,

  /**
   * Label for the input. Required for accessibility purposes.
   */
  labelText: PropTypes.string.isRequired,

  /**
   * Helper text to display below the text input
   */
  helperText: PropTypes.string,

  /**
   * Current value of the input. Should be controlled by state in the parent form.
   */
  value: PropTypes.string,

  /**
   * If truthy, will apply an error visual state to the input. Pass a string value
   * to display as an error message below the input, which will take precedence
   * over any helperText.
   */
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

  /**
   * Set to true to have the error message display inline below the text input, meaning
   * that it will take space in the layout and push other content below it, when
   * it appears.
   */
  displayErrorInline: PropTypes.bool,

  /**
   * CSS class name to apply to the containing div
   */
  className: PropTypes.string,

  /**
   * If true, will apply a disabled visual state and the input will not allow
   * user interaction.
   */
  disabled: PropTypes.bool,

  /**
   * Called when the input value changes
   */
  onChange: PropTypes.func,

  /**
   * Called when the user focuses the input
   */
  onFocus: PropTypes.func,

  /**
   * Called when the user blurs the input
   */
  onBlur: PropTypes.func
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

var Pill = function Pill(props) {
  var children = props.children,
      promoted = props.promoted,
      href = props.href,
      className = props.className;
  var remaining = objectWithoutProperties(_ref, ["children", "promoted", "href", "className"]);

  var elementProps = _objectSpread2({
    className: classNames(pillStyle, className, {
      promoted: promoted
    }),
    href: href
  }, remaining);

  if (href) {
    return /*#__PURE__*/React.createElement("a", elementProps, children);
  } else {
    return /*#__PURE__*/React.createElement("button", elementProps, children);
  }
};

Pill.propTypes = {
  /**
   * Content of the button (e.g. button label)
   */
  children: PropTypes.node.isRequired,

  /**
   * If true, will apply a visual style that differentiates the pill from the others.
   */
  promoted: PropTypes.bool,

  /**
   * Destination url for the button - if provided, will render the button as
   * an anchor styled like a button
   */
  href: PropTypes.string,

  /**
   * CSS class name if styles need to be provided/overridden.
   */
  className: PropTypes.string
};
Pill.defaultProps = {
  promoted: false,
  href: undefined,
  className: null
};

export { Button, Drawer, GlobalNavV2 as GlobalNav, HR, Logo, LogoMark, PageContainer, Pill, PopupMenu, PopupMenuGroup, PopupMenuItem, TextInput, ViewPortProvider, WithTooltip, useViewport };

import React from 'react';
import 'linaria';
import classNames from 'classnames';

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

var AddIcon$d = function AddIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(Add, null));
};

var Archive = function Archive() {
  return /*#__PURE__*/React.createElement("svg", {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M1 4a2 2 0 012-2h18a2 2 0 012 2v2a2 2 0 01-2 2H3a2 2 0 01-2-2V4zm2 0v2h18V4H3z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M3 8a2 2 0 012-2h14a2 2 0 012 2v10a4 4 0 01-4 4H7a4 4 0 01-4-4V8zm2 10a2 2 0 002 2h10a2 2 0 002-2V8H5v10z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M15.707 11.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L11 14.586l3.293-3.293a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
};

var ArchiveIcon = function ArchiveIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(Archive, null));
};

var Article = function Article() {
  return /*#__PURE__*/React.createElement("svg", {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M17 4H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2zM7 2a4 4 0 00-4 4v12a4 4 0 004 4h10a4 4 0 004-4V6a4 4 0 00-4-4H7z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M7 8a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1zM7 12a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1zM7 16a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
};

var ArticleIcon = function ArticleIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(Article, null));
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

var Edit = function Edit() {
  return /*#__PURE__*/React.createElement("svg", {
    "aria-labelledby": " ",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    "fill-rule": "evenodd",
    d: "M9 22a2 2 0 001.414-.586L20 11.828a4 4 0 000-5.656L17.828 4a4 4 0 00-5.656 0l-9.586 9.586A2 2 0 002 15v5a2 2 0 002 2h5zm7.414-16.586l2.172 2.172a2 2 0 010 2.828l-1.379 1.379-5-5 1.379-1.379a2 2 0 012.828 0zm-5.621 2.793L4 15v5h5l6.793-6.793-5-5z",
    clipRule: "evenodd"
  }));
};

var EditIcon$1 = function EditIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(Edit, null));
};

var Favorite = function Favorite() {
  return /*#__PURE__*/React.createElement("svg", {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M12 1a1 1 0 01.897.557l2.706 5.484 6.051.88a1 1 0 01.555 1.705l-4.38 4.268 1.034 6.027a1 1 0 01-1.45 1.054L12 18.13l-5.413 2.845a1 1 0 01-1.45-1.054l1.033-6.027-4.379-4.268a1 1 0 01.555-1.706l6.051-.88 2.706-5.483A1 1 0 0112 1zm0 3.26L9.958 8.397a1 1 0 01-.753.548l-4.567.663 3.305 3.221a1 1 0 01.287.885l-.78 4.548 4.085-2.147a1 1 0 01.93 0l4.085 2.147-.78-4.548a1 1 0 01.287-.885l3.305-3.22-4.567-.664a1 1 0 01-.753-.548L12 4.26z",
    clipRule: "evenodd"
  }));
};

var FavoriteIcon = function FavoriteIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(Favorite, null));
};

var Highlight = function Highlight() {
  return /*#__PURE__*/React.createElement("svg", {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M5.512 8.546a3 3 0 00-.51 4.195l-.724.723a3.001 3.001 0 00-.586 3.415L1.18 19.391a1 1 0 00.39 1.656l4.243 1.414a1 1 0 001.023-.241l1.098-1.098a3.001 3.001 0 003.415-.586l.746-.746a3.001 3.001 0 004.133-.77l6.406-9.15a3 3 0 00-.337-3.842l-4.112-4.112a3 3 0 00-3.98-.233L5.512 8.546zm9.932-5.294l-8.693 6.863a1 1 0 00-.087 1.492l6.4 6.4a1 1 0 001.526-.134l6.405-9.15a1 1 0 00-.112-1.28L16.771 3.33a1 1 0 00-1.327-.078zM6.4 14.172l-.707.707a1 1 0 000 1.414l2.829 2.828a1 1 0 001.414 0l.707-.707L6.4 14.172z",
    clipRule: "evenodd"
  }));
};

var HighlightIcon = function HighlightIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(Highlight, null));
};

var Search = function Search() {
  return /*#__PURE__*/React.createElement("svg", {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    "fill-rule": "evenodd",
    d: "M16.618 18.032a9 9 0 111.414-1.414l3.675 3.675a1 1 0 01-1.414 1.414l-3.675-3.675zM18 11a7 7 0 11-14 0 7 7 0 0114 0z",
    clipRule: "evenodd"
  }));
};

var SearchIcon = function SearchIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(Search, null));
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

var TagIcon = function TagIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(Tag, null));
};

var Video = function Video() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "3",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    rx: "3"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M9 14.461V9.54a1 1 0 011.406-.914l5.538 2.461c.792.352.792 1.476 0 1.828l-5.538 2.461A1 1 0 019 14.461z"
  }));
};

var VideoIcon = function VideoIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(Video, null));
};

var OverflowMenu = function OverflowMenu() {
  return /*#__PURE__*/React.createElement("svg", {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M17 4H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2zM7 2a4 4 0 00-4 4v12a4 4 0 004 4h10a4 4 0 004-4V6a4 4 0 00-4-4H7z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M7 8a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1zM7 12a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1zM7 16a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
};

var OverflowMenuIcon = function OverflowMenuIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(OverflowMenu, null));
};

var IosShare = function IosShare() {
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

var IosShareIcon = function IosShareIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(IosShare, null));
};

var CrossIcon$1 = function CrossIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(Add, null));
};

var AddIcon$c = function AddIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(Add, null));
};

var AddIcon$b = function AddIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(Add, null));
};

var AddIcon$a = function AddIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(Add, null));
};

var AddIcon$9 = function AddIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(Add, null));
};

var AddIcon$8 = function AddIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(Add, null));
};

var AddIcon$7 = function AddIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(Add, null));
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

var AddIcon$6 = function AddIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(Add, null));
};

var AddIcon$5 = function AddIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(Add, null));
};

var CrossIcon = function CrossIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(Add, null));
};

var AddIcon$4 = function AddIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(Add, null));
};

var LineHeightIcon = function LineHeightIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(IosShare, null));
};

var AddIcon$3 = function AddIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(Add, null));
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

var AddIcon$2 = function AddIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(Add, null));
};

var AddIcon$1 = function AddIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(Add, null));
};

var AddIcon = function AddIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(Add, null));
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

var Home = function Home() {
  return /*#__PURE__*/React.createElement("svg", {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M10.671 1.442a2.004 2.004 0 012.658 0l8 7.09c.427.378.671.92.671 1.49v9.922a1.997 1.997 0 01-2 1.994h-3c-1.105 0-2-.893-2-1.994v-4.985c0-.275-.175-1.072-.689-1.789-.48-.67-1.201-1.203-2.311-1.203-1.11 0-1.831.533-2.311 1.203C9.175 13.887 9 14.684 9 14.96v4.986a1.996 1.996 0 01-2 1.993H4c-1.105 0-2-.893-2-1.994v-9.922c0-.57.244-1.112.671-1.49l8-7.09zM12 2.932l-8 7.09v9.922h3v-4.985c0-.723.325-1.92 1.061-2.948.77-1.074 2.049-2.038 3.939-2.038 1.89 0 3.169.963 3.939 2.038.736 1.028 1.061 2.225 1.061 2.948v4.985h3v-9.922l-8-7.09zM7 19.944zm.002 0H7h.002zm0 0z",
    clipRule: "evenodd"
  }));
};

var HomeIcon = function HomeIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(Home, null));
};

var EditIcon = function EditIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(Edit, null));
};

var PremiumIcon = function PremiumIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(Tag, null));
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

var Link = function Link() {
  return /*#__PURE__*/React.createElement("svg", {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("g", {
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19.392 16.192a3 3 0 01-.117 4.354c-1.207 1.087-3.097.917-4.246-.231l-4.83-4.83a3 3 0 010-4.243 1 1 0 00-1.414-1.414 5.001 5.001 0 000 7.07l4.798 4.799c1.847 1.847 4.846 2.145 6.859.482a5 5 0 00.364-7.401l-1.414-1.414a.999.999 0 10-1.414 1.414l1.414 1.414zM2.09 3.828a5.002 5.002 0 017.4-.364l4.95 4.95a5 5 0 010 7.07 1 1 0 01-1.413-1.413 3 3 0 000-4.243l-4.95-4.95a3 3 0 00-4.353.117c-1.088 1.207-.918 3.097.23 4.246l1.295 1.294a1 1 0 01-1.414 1.414l-1.263-1.262C.727 8.84.428 5.84 2.09 3.827z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "nonzero",
    d: "M19 1a1 1 0 012 0v6a1 1 0 01-2 0V1z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "nonzero",
    d: "M23 3a1 1 0 010 2h-6a1 1 0 010-2h6z"
  })));
};

var LinkIcon = function LinkIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(Link, null));
};

var FacebookColor = function FacebookColor() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M23 12c0-6.075-4.925-11-11-11S1 5.925 1 12c0 5.49 4.022 10.041 9.281 10.866V15.18H7.488V12h2.793V9.577c0-2.757 1.642-4.28 4.155-4.28 1.204 0 2.462.215 2.462.215v2.707h-1.387c-1.366 0-1.792.848-1.792 1.718V12h3.05l-.487 3.18h-2.563v7.686c5.258-.825 9.28-5.376 9.28-10.866z",
    clipRule: "evenodd"
  }));
};

var FacebookColorIcon = function FacebookColorIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(FacebookColor, null));
};

var LinkedinMonoIcon = function LinkedinMonoIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(IosShare, null));
};

var Buffer = function Buffer() {
  return /*#__PURE__*/React.createElement("svg", {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M1 5.856c3.333-1.57 6.627-3.102 9.96-4.673.575-.268 1.11-.23 1.685.038a703.196 703.196 0 019.386 4.406c.23.115.498.191.498.46 0 .344-.307.382-.536.497-2.988 1.418-6.015 2.797-9.003 4.214-.843.383-1.57.383-2.413 0C7.397 9.304 4.18 7.81 1 6.354v-.498zM1 17.77c.613-.306 1.188-.574 1.762-.88.728-.384 1.418-.307 2.145.037 1.916.92 3.87 1.8 5.785 2.72.728.345 1.417.345 2.145 0 1.954-.92 3.907-1.8 5.861-2.758.728-.345 1.417-.345 2.145 0 .422.23.881.421 1.303.613.191.115.46.192.421.46 0 .23-.23.344-.421.421l-4.367 2.069-4.942 2.298c-.651.307-1.302.345-1.954.038-3.103-1.455-6.205-2.873-9.27-4.328-.192-.077-.345-.23-.536-.345C1 18.038 1 17.923 1 17.77zm0-5.938c.46-.23.92-.42 1.34-.65 1.035-.614 1.993-.499 3.065.038 1.8.919 3.64 1.685 5.44 2.566.69.307 1.302.307 1.954 0 1.915-.92 3.869-1.8 5.784-2.72.805-.383 1.57-.421 2.375 0 .422.23.92.422 1.341.652.383.23.345.46 0 .69-.115.076-.23.114-.345.152-3.064 1.418-6.167 2.873-9.232 4.29-.613.307-1.226.307-1.839 0-3.064-1.417-6.167-2.872-9.232-4.29-.23-.115-.421-.268-.651-.383v-.345z"
  }));
};

var BufferIcon = function BufferIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(Buffer, null));
};

var RedditMono = function RedditMono() {
  return /*#__PURE__*/React.createElement("svg", {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22.5 11.846a2.617 2.617 0 00-2.614-2.615 2.58 2.58 0 00-1.57.53c-1.459-1.014-3.37-1.618-5.401-1.771l1.096-2.574 3.19.746a1.956 1.956 0 001.94 1.761c1.081 0 1.96-.88 1.96-1.961 0-1.082-.879-1.962-1.96-1.962-.684 0-1.287.354-1.637.89l-3.728-.873a.653.653 0 00-.752.38L11.51 7.956c-2.194.075-4.285.694-5.864 1.771a2.56 2.56 0 00-1.531-.495A2.617 2.617 0 001.5 11.846c0 .956.521 1.82 1.321 2.264-.01.115-.014.233-.014.352C2.807 18.067 6.91 21 11.954 21c5.043 0 9.148-2.933 9.148-6.538 0-.102-.004-.203-.01-.304a2.59 2.59 0 001.408-2.312zM7.38 13.808c0-.72.587-1.308 1.307-1.308s1.307.587 1.307 1.308c0 .722-.587 1.307-1.307 1.307s-1.306-.585-1.306-1.307zm7.592 4.337a5.141 5.141 0 01-6.035 0 .653.653 0 01.766-1.059 3.83 3.83 0 004.503 0 .653.653 0 11.766 1.06zm.25-3.03a1.308 1.308 0 11.001-2.615 1.308 1.308 0 01-.002 2.615z"
  }));
};

var RedditMonoIcon = function RedditMonoIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(RedditMono, null));
};

var PinFilledIcon = function PinFilledIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(OverflowMenu, null));
};

var PinIcon = function PinIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(OverflowMenu, null));
};

var WebViewIcon = function WebViewIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(IosShare, null));
};

var PermanentCopyIcon = function PermanentCopyIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(Menu, null));
};

var LinkCopyIcon = function LinkCopyIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement(Menu, null));
};

export { AddIcon$d as AddIcon, ArchiveIcon, AddIcon$c as ArrowRightIcon, ArticleIcon, BufferIcon, AddIcon$6 as ChevronDownIcon, ChevronLeftIcon, AddIcon$5 as ChevronRightIcon, AddIcon$7 as ChevronUpIcon, CrossIcon, CrossIcon$1 as DeleteIcon, AddIcon$3 as DetailViewIcon, DiscoverIcon, EditIcon$1 as EditIcon, EditIcon as ErrorIcon, FacebookColorIcon, FavoriteIcon, AddIcon$2 as GridViewIcon, HighlightIcon, HomeIcon, IosShareIcon, LineHeightIcon, LinkCopyIcon, LinkIcon, LinkedinMonoIcon, ListViewIcon, AddIcon$9 as MarginsIcon, MenuIcon, OverflowMenuIcon, PermanentCopyIcon, PinFilledIcon, PinIcon, PremiumIcon, ProfileIcon, RedditMonoIcon, AddIcon$a as RemoveIcon, AddIcon$b as ReportIcon, SearchIcon, AddIcon$1 as SortByNewestIcon, AddIcon as SortByOldestIcon, TagIcon, AddIcon$4 as TextSettingsIcon, AddIcon$8 as TextSizeIcon, VideoIcon, WebViewIcon };

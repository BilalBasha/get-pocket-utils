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

export { breakpointLargeHandset, breakpointLargeTablet, breakpointMediumDesktop, breakpointMediumHandset, breakpointMediumTablet, breakpointSmallDesktop, breakpointSmallHandset, breakpointSmallTablet, breakpointTinyHandset, breakpointTinyTablet, containerMaxWidth, fontSansSerif, fontSerif, fontSerifAlt, fontSize065, fontSize075, fontSize085, fontSize100, fontSize125, fontSize150, fontSize175, fontSize200, fontSize250, fontSize300, fontSizeRoot, fontSizeRootMedium, fontSizeRootSmall, screenLargeHandset, screenLargeTablet, screenMediumDesktop, screenMediumHandset, screenMediumTablet, screenSmallDesktop, screenSmallHandset, screenSmallTablet, screenTinyHandset, screenTinyTablet, size025, size050, size075, size100, size125, size150, size200, size250, size300, size400, size500, spacing025, spacing050, spacing075, spacing100, spacing150, spacing250, spacing400, spacing650 };

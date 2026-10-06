// --page-w: the page's width in px, set before first paint and on every resize.
// CSS that needs "screen width ÷ a length" as a plain number (the landing hero's window zoom) reads this
// instead of 100vw: Safari and every iPhone browser resolve vw wrongly inside tan(atan2()) under zoom or
// scale (100vw came out near 960px on a 390px iPhone), so the window stayed desktop-sized.
export const VIEWPORT_WIDTH_SCRIPT = `(function(){var d=document.documentElement;function s(){d.style.setProperty('--page-w',d.clientWidth+'px')}s();addEventListener('resize',s)})();`;

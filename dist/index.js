'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.clickOutside = void 0;
function clickOutside(node, handler) {
  var onClick = function (event) {
    return (
      node &&
      !node.contains(event.target) &&
      !event.defaultPrevented &&
      handler(event)
    );
  };
  document.addEventListener('click', onClick, true);
  return {
    destroy: function () {
      document.removeEventListener('click', onClick, true);
    },
  };
}
exports.clickOutside = clickOutside;
//# sourceMappingURL=index.js.map

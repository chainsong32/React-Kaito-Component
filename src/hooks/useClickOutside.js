"use strict";
exports.__esModule = true;
var react_1 = require("react");
function useClickOutside(ref, handler) {
    react_1.useEffect(function () {
        var listener = function (event) {
            var _a;
            if (!ref.current || ((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                return;
            }
            handler(event);
        };
        document.addEventListener('click', listener);
        return function () {
            document.removeEventListener('click', listener);
        };
    }, [ref, handler]);
}
exports["default"] = useClickOutside;

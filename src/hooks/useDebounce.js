"use strict";
exports.__esModule = true;
var react_1 = require("react");
function useDebounce(value, delay) {
    if (delay === void 0) { delay = 300; }
    var _a = react_1.useState(value), debouncedValue = _a[0], setDebounceValue = _a[1];
    react_1.useEffect(function () {
        var handler = window.setTimeout(function () {
            setDebounceValue(value);
        }, delay);
        return function () {
            clearTimeout(handler);
        };
    }, [value, delay]);
    return debouncedValue;
}
exports["default"] = useDebounce;

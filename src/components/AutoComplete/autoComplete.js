"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.AutoComplete = void 0;
var react_1 = require("react");
var classnames_1 = require("classnames");
var input_1 = require("../Input/input");
var icon_1 = require("../Icon/icon");
var transition_1 = require("../Transition/transition");
var useDebounce_1 = require("../../hooks/useDebounce");
var useClickOutside_1 = require("../../hooks/useClickOutside");
var AutoComplete = function (props) {
    var fetchSuggestions = props.fetchSuggestions, onSelect = props.onSelect, value = props.value, renderOption = props.renderOption, restProps = __rest(props, ["fetchSuggestions", "onSelect", "value", "renderOption"]);
    var _a = react_1.useState(value), inputValue = _a[0], setInputValue = _a[1];
    var _b = react_1.useState([]), suggestions = _b[0], setSugestions = _b[1];
    var _c = react_1.useState(false), loading = _c[0], setLoading = _c[1];
    var _d = react_1.useState(false), showDropdown = _d[0], setShowDropdown = _d[1];
    var _e = react_1.useState(-1), highlightIndex = _e[0], setHighlightIndex = _e[1];
    //按enter后,不搜索匹配
    var triggerSearch = react_1.useRef(false);
    var componentRef = react_1.useRef(null);
    var debouncedValue = useDebounce_1["default"](inputValue, 300);
    useClickOutside_1["default"](componentRef, function () { setSugestions([]); });
    react_1.useEffect(function () {
        if (debouncedValue && triggerSearch.current) {
            setSugestions([]);
            var results = fetchSuggestions(debouncedValue);
            if (results instanceof Promise) {
                setLoading(true);
                results.then(function (data) {
                    setLoading(false);
                    setSugestions(data);
                    if (data.length > 0) {
                        setShowDropdown(true);
                    }
                });
            }
            else {
                setSugestions(results);
                setShowDropdown(true);
                if (results.length > 0) {
                    setShowDropdown(true);
                }
            }
        }
        else {
            setShowDropdown(false);
        }
        setHighlightIndex(-1);
    }, [debouncedValue, fetchSuggestions]);
    //上下箭头
    var highlight = function (index) {
        if (index < 0)
            index = 0;
        if (index >= suggestions.length) {
            index = suggestions.length - 1;
        }
        setHighlightIndex(index);
    };
    //键盘事件
    var handleKeyDown = function (e) {
        switch (e.keyCode) {
            //enter
            case 13:
                if (suggestions[highlightIndex]) {
                    handleSelect(suggestions[highlightIndex]);
                }
                break;
            //down
            case 38:
                highlight(highlightIndex - 1);
                break;
            //up
            case 40:
                highlight(highlightIndex + 1);
                break;
            //esc
            case 27:
                setShowDropdown(false);
                break;
            default:
                break;
        }
    };
    var handleChange = function (e) {
        var value = e.target.value.trim();
        setInputValue(value);
        triggerSearch.current = true;
    };
    var handleSelect = function (item) {
        setInputValue(item.value);
        setShowDropdown(false);
        if (onSelect) {
            onSelect(item);
        }
        triggerSearch.current = false;
    };
    var renderTemplate = function (item) {
        return renderOption ? renderOption(item) : item.value;
    };
    var generateDropdown = function () {
        return (<transition_1["default"] in={showDropdown || loading} animation="zoom-in-top" timeout={300} onExited={function () { setSugestions([]); }}>
        <ul className="viking-suggestion-list">
          {loading &&
                <div className="suggstions-loading-icon">
              <icon_1["default"] icon="spinner" spin/>
            </div>}
          {suggestions.map(function (item, index) {
                var cnames = classnames_1["default"]('suggestion-item', {
                    'is-active': index === highlightIndex
                });
                return (<li key={index} className={cnames} onClick={function () { return handleSelect(item); }}>
                {renderTemplate(item)}
              </li>);
            })}
        </ul>
      </transition_1["default"]>);
    };
    return (<div className="viking-auto-complete" ref={componentRef}>
      <input_1["default"] value={inputValue} onChange={handleChange} onKeyDown={handleKeyDown} {...restProps}/>
      {generateDropdown()}
    </div>);
};
exports.AutoComplete = AutoComplete;
exports["default"] = exports.AutoComplete;

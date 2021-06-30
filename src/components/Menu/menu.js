"use strict";
exports.__esModule = true;
exports.MenuContext = void 0;
var react_1 = require("react");
var classnames_1 = require("classnames");
exports.MenuContext = react_1.createContext({ index: '0' });
var Menu = function (props) {
    var className = props.className, mode = props.mode, style = props.style, children = props.children, defaultIndex = props.defaultIndex, onSelect = props.onSelect, defaultOpenSubMenus = props.defaultOpenSubMenus;
    var _a = react_1.useState(defaultIndex), currentActive = _a[0], setActive = _a[1];
    var classes = classnames_1["default"]('kaito-menu', className, {
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode !== 'vertical'
    });
    var handleClick = function (index) {
        setActive(index);
        if (onSelect) {
            onSelect(index);
        }
    };
    var passedContext = {
        index: currentActive ? currentActive : '0',
        onSelect: handleClick,
        mode: mode,
        defaultOpenSubMenus: defaultOpenSubMenus
    };
    var renderChildren = function () {
        return react_1["default"].Children.map(children, function (child, index) {
            var childElemnet = child;
            var displayName = childElemnet.type.displayName;
            if (displayName === 'MenuItem' || displayName === 'SubMenu') {
                return react_1["default"].cloneElement(childElemnet, { index: index.toString() });
            }
            else {
                console.error('Warning:Menu has a child which is not a MenuItem');
            }
        });
    };
    return (<ul className={classes} style={style} data-testid="test-menu">
      <exports.MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </exports.MenuContext.Provider>
    </ul>);
};
Menu.defaultProps = {
    defaultIndex: '0',
    mode: 'horizontal',
    defaultOpenSubMenus: []
};
exports["default"] = Menu;

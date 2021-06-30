"use strict";
exports.__esModule = true;
var react_1 = require("react");
var classnames_1 = require("classnames");
var menu_1 = require("./menu");
var MenuItem = function (props) {
    var index = props.index, disabled = props.disabled, className = props.className, style = props.style, children = props.children;
    var context = react_1.useContext(menu_1.MenuContext);
    var classes = classnames_1["default"]('menu-item', className, {
        'is-disabled': disabled,
        'is-active': context.index === index
    });
    var handleClick = function () {
        if (context.onSelect && !disabled && (typeof index === 'string')) {
            context.onSelect(index);
        }
    };
    return (<li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>);
};
MenuItem.displayName = 'MenuItem';
exports["default"] = MenuItem;

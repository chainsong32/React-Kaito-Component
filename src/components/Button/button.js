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
var react_1 = require("react");
var classnames_1 = require("classnames");
var Button = function (props) {
    var _a;
    var btnType = props.btnType, className = props.className, disabled = props.disabled, size = props.size, children = props.children, href = props.href, restProps = __rest(props
    //默认btn className
    /** btn,btn-lg,btn-primary */
    , ["btnType", "className", "disabled", "size", "children", "href"]);
    //默认btn className
    /** btn,btn-lg,btn-primary */
    var classes = classnames_1["default"]('btn', className, (_a = {},
        _a["btn-" + btnType] = btnType,
        _a["btn-" + size] = size,
        _a['disabled'] = (btnType === 'link') && disabled,
        _a));
    if (btnType === 'link' && href) {
        return (<a className={classes} href={href} {...restProps}>
        {children}
      </a>);
    }
    else {
        return (<button className={classes} disabled={disabled} {...restProps}>{children}</button>);
    }
};
Button.defaultProps = {
    disabled: false,
    btnType: 'default'
};
exports["default"] = Button;

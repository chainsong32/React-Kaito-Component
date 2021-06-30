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
var icon_1 = require("../Icon/icon");
var Input = function (props) {
    var _a;
    //取出所有属性
    var disabled = props.disabled, size = props.size, icon = props.icon, prepend = props.prepend, append = props.append, style = props.style, restProps = __rest(props
    //根据属性计算不同的className
    , ["disabled", "size", "icon", "prepend", "append", "style"]);
    //根据属性计算不同的className
    var cnames = classnames_1["default"]('kaito-input-wrapper', (_a = {},
        _a["input-size-" + size] = size,
        _a['is-disabled'] = disabled,
        _a['input-group'] = prepend || append,
        _a['input-group-append'] = !!append,
        _a['input-group-prepand'] = !!prepend,
        _a));
    var fixControlledValue = function (value) {
        if (typeof value === 'undefined' || value === null) {
            return '';
        }
        return value;
    };
    if ('value' in props) {
        delete restProps.defaultValue;
        restProps.value = fixControlledValue(props.value);
    }
    return (
    //根据属性判断是否添加节点
    <div className={cnames} style={style}>
      {prepend && <div className="input-group-prepand">{prepend}</div>}
      {icon && <div className="icon-wrapper"><icon_1["default"] icon={icon} title={"title-" + icon}/></div>}
      <input className="kaito-input-inner" disabled={disabled} {...restProps}/>
      {append && <div className="kaito-input-group-append">{append}</div>}
    </div>);
};
exports["default"] = Input;

"use strict";
exports.__esModule = true;
exports.Dragger = void 0;
var react_1 = require("react");
var classnames_1 = require("classnames");
var Dragger = function (props) {
    var onFile = props.onFile, children = props.children;
    var _a = react_1.useState(false), dragOver = _a[0], setDragOver = _a[1];
    var klass = classnames_1["default"]('viking-uploader-dragger', {
        'is-dragover': dragOver
    });
    var handleDrop = function (e) {
        e.preventDefault();
        setDragOver(false);
        onFile(e.dataTransfer.files);
    };
    var handleDrag = function (e, over) {
        e.preventDefault();
        setDragOver(over);
    };
    return (<div className={klass} onDragOver={function (e) { handleDrag(e, true); }} onDragLeave={function (e) { handleDrag(e, false); }} onDrop={handleDrop}>
      {children}
    </div>);
};
exports.Dragger = Dragger;
exports["default"] = exports.Dragger;

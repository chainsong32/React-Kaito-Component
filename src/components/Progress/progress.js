"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Progress = function (props) {
    var percent = props.percent, strokeHeight = props.strokeHeight, showText = props.showText, styles = props.styles, theme = props.theme;
    return (<div className="kaito-progress-bar" style={styles}>
      <div className="kaito-progress-outer" style={{ height: strokeHeight + "px " }}>
        <div className={"kaito-progress-bar-inner color-" + theme} style={{ width: percent + "%" }}>
          {showText && <span className="inner-text">{percent + "%"}</span>}
        </div>
      </div>
    </div>);
};
Progress.defaultProps = {
    strokeHeight: 15,
    showText: true,
    theme: "primary"
};
exports["default"] = Progress;

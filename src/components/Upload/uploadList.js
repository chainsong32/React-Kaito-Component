"use strict";
exports.__esModule = true;
var react_1 = require("react");
var icon_1 = require("../Icon/icon");
var progress_1 = require("../Progress/progress");
var UploadList = function (props) {
    var fileList = props.fileList, onRemove = props.onRemove;
    return (<ul className="kaito-upload-list">
      {fileList.map(function (item) {
            return (<li className="kaito-upload-list-item" key={item.uid}>
              <span className={"file-name file-name-" + item.status}>
                <icon_1["default"] icon="file-alt" theme="secondary"/>
                {item.name}
              </span>
              <span className="file-status">
                {(item.status === "uploading" || item.status === "ready") && <icon_1["default"] icon="spinner" spin theme="primary"/>}
                {item.status === "success" && <icon_1["default"] icon="check-circle" theme="success"/>}
                {item.status === "error" && <icon_1["default"] icon="times-circle" theme="danger"/>}
              </span>

              <span className="file-action">
                <icon_1["default"] icon="times" onClick={function () { onRemove(item); }}/>
              </span>
              {item.status === 'uploading' &&
                    <progress_1["default"] percent={item.percent || 0}/>}
            </li>);
        })}
    </ul>);
};
exports["default"] = UploadList;

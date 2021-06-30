"use strict";
exports.__esModule = true;
var react_1 = require("react");
var input_1 = require("./input");
var react_2 = require("@storybook/react");
var addon_actions_1 = require("@storybook/addon-actions");
//受控组件
var ControlledInput = function () {
    var _a = react_1.useState(''), value = _a[0], setValue = _a[1];
    return <input_1["default"] value={value} onChange={function (e) { setValue(e.target.value); }}/>;
};
var defaultInput = function () { return (<>
    <input_1["default"] style={{ width: '300px' }} placeholder="placeholder" onChange={addon_actions_1.action('changed')}/>
  </>); };
var disabledInput = function () { return (<input_1["default"] style={{ width: '300px' }} placeholder='disabled input' disabled/>); };
var iconInput = function () { return (<>
    <input_1["default"] style={{ width: '300px' }} defaultValue="large value" size="lg"/>
    <input_1["default"] style={{ width: '300px' }} placeholder="large size" size="lg"/>
  </>); };
var sizeInput = function () { return (<>
    <input_1["default"] style={{ width: '300px' }} defaultValue="large size" size="lg"/>
    <input_1["default"] style={{ width: '300px' }} placeholder="small size" size="sm"/>
  </>); };
react_2.storiesOf('Input component', module)
    .add('Input', defaultInput)
    .add('被禁用的 Input', disabledInput)
    .add('带图标的 Input', iconInput)
    .add('大小不同的 Input', sizeInput);

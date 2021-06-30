"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@storybook/react");
var addon_actions_1 = require("@storybook/addon-actions");
var button_1 = require("./button");
var defaultButton = function () { return (<button_1["default"] onClick={addon_actions_1.action('clicked')}> default button </button_1["default"]>); };
var buttonWithSize = function () { return (<>
    <button_1["default"] size="lg"> large button </button_1["default"]>
    <button_1["default"] size="sm"> small button </button_1["default"]>
  </>); };
var buttonWithType = function () { return (<>
    <button_1["default"] btnType="primary"> primary button </button_1["default"]>
    <button_1["default"] btnType="danger"> danger button </button_1["default"]>
    <button_1["default"] btnType="link" href="https://google.com"> link button </button_1["default"]>
  </>); };
react_2.storiesOf('Button Component', module)
    .add('Button', defaultButton)
    .add('不同尺寸的 Button', buttonWithSize)
    .add('不同类型的 Button', buttonWithType);

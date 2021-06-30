"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@storybook/react");
var addon_actions_1 = require("@storybook/addon-actions");
var upload_1 = require("./upload");
var defaultFileList = [
    { uid: '123', size: 1234, name: 'hello.md', status: 'uploading', percent: 10 },
    { uid: '122', size: 1234, name: 'xyz.md', status: 'success', percent: 30 },
    { uid: '121', size: 1234, name: 'eyiha.md', status: 'error', percent: 30 }
];
var checkFileSize = function (file) {
    if (Math.round(file.size / 1024) > 50) {
        alert('file too big');
        return false;
    }
    return true;
};
var SimpleUpload = function () {
    return (<upload_1.Upload action="https://jsonplaceholder.typicode.com/posts" onChange={addon_actions_1.action('changed')} defaultFileList={defaultFileList} onRemove={addon_actions_1.action('removed')} name='fileName' data={{ 'key': 'value' }} headers={{ 'x-powerd-by': 'kaito' }} accept=".jpg" multiple/>);
};
react_2.storiesOf('Upload component', module)
    .add('Upload', SimpleUpload);

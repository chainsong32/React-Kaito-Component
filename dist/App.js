import React, { useState, useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Button from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import Transition from './components/Transition/transition';
import Input from './components/Input/input';
import axios from 'axios';
library.add(fas);
var App = function () {
    var _a = useState(false), show = _a[0], setShow = _a[1];
    var _b = useState(''), title = _b[0], setTitle = _b[1];
    var postData = {
        title: 'my title',
        body: 'hello man'
    };
    useEffect(function () {
        axios.post('https://jsonplaceholder.typicode.com/posts', postData)
            .then(function (resp) {
            console.log(resp);
            setTitle(resp.data.title);
        });
    });
    //处理文件上传
    var handleFileChange = function (e) {
        var files = e.target.files;
        if (files) {
            //如果选择了文件
            var uploadedFile = files[0];
            var formData = new FormData();
            formData.append(uploadedFile.name, uploadedFile);
            axios.post("https://jsonplaceholder.typicode.com/posts", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(function (resp) {
                console.log(resp);
            });
        }
    };
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "App-header" },
            React.createElement("input", { type: "file", name: "myFile", onChange: handleFileChange }),
            React.createElement(Menu, { defaultIndex: '0', onSelect: function (index) {
                    console.log(index);
                }, defaultOpenSubMenus: ['2'] },
                React.createElement(MenuItem, null, "cool link"),
                React.createElement(MenuItem, null, "cool link2"),
                React.createElement(MenuItem, null, "cool link3"),
                React.createElement(SubMenu, { title: 'dropdown' },
                    React.createElement(MenuItem, null, "11"),
                    React.createElement(MenuItem, null, "22"),
                    React.createElement(MenuItem, null, "33"))),
            React.createElement(Button, { size: 'lg', onClick: function () { setShow(!show); } }, "Toggle"),
            React.createElement(Transition, { in: show, timeout: 500, animation: "zoom-in-top", wrapper: true },
                React.createElement(Button, { btnType: "primary", size: 'lg' }, "A large button ")),
            React.createElement(Input, { size: 'lg' }))));
};
export default App;

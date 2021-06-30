"use strict";
exports.__esModule = true;
var react_1 = require("react");
var fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var button_1 = require("./components/Button/button");
var menu_1 = require("./components/Menu/menu");
var menuItem_1 = require("./components/Menu/menuItem");
var subMenu_1 = require("./components/Menu/subMenu");
var transition_1 = require("./components/Transition/transition");
var input_1 = require("./components/Input/input");
var axios_1 = require("axios");
fontawesome_svg_core_1.library.add(free_solid_svg_icons_1.fas);
var App = function () {
    var _a = react_1.useState(false), show = _a[0], setShow = _a[1];
    var _b = react_1.useState(''), title = _b[0], setTitle = _b[1];
    var postData = {
        title: 'my title',
        body: 'hello man'
    };
    react_1.useEffect(function () {
        axios_1["default"].post('https://jsonplaceholder.typicode.com/posts', postData)
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
            axios_1["default"].post("https://jsonplaceholder.typicode.com/posts", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(function (resp) {
                console.log(resp);
            });
        }
    };
    return (<div className="App">
      <header className="App-header">
       <input type="file" name="myFile" onChange={handleFileChange}/>
        <menu_1["default"] defaultIndex={'0'} onSelect={function (index) {
            console.log(index);
        }} defaultOpenSubMenus={['2']}>
          <menuItem_1["default"]>cool link</menuItem_1["default"]>
          <menuItem_1["default"]>cool link2</menuItem_1["default"]>
          <menuItem_1["default"]>cool link3</menuItem_1["default"]>

          <subMenu_1["default"] title='dropdown'>
            <menuItem_1["default"]>11</menuItem_1["default"]>
            <menuItem_1["default"]>22</menuItem_1["default"]>
            <menuItem_1["default"]>33</menuItem_1["default"]>
          </subMenu_1["default"]>
          
        </menu_1["default"]>

        <button_1["default"] size='lg' onClick={function () { setShow(!show); }}>Toggle</button_1["default"]>
        <transition_1["default"] in={show} timeout={500} animation="zoom-in-top" wrapper>
          <button_1["default"] btnType="primary" size='lg'>A large button </button_1["default"]>
        </transition_1["default"]>

        <input_1["default"] size='lg'></input_1["default"]>
      </header>
    </div>);
};
exports["default"] = App;

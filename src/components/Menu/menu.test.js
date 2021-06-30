"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@testing-library/react");
var menu_1 = require("./menu");
var menuItem_1 = require("./menuItem");
var subMenu_1 = require("./subMenu");
//测试属性
//default horizonal
var testProps = {
    defaultIndex: '0',
    onSelect: jest.fn(),
    className: 'test'
};
//vertical
var testVerProps = {
    defaultIndex: '0',
    mode: 'vertical'
};
var generateMenu = function (props) {
    return (<menu_1["default"] {...props}>
          <menuItem_1["default"]>active</menuItem_1["default"]>
          <menuItem_1["default"] disabled>disabled</menuItem_1["default"]>
      <menuItem_1["default"]>xyz</menuItem_1["default"]>

      <subMenu_1["default"] title='dropdown'>
        <menuItem_1["default"]>
           drop1
        </menuItem_1["default"]>
      </subMenu_1["default"]>
      <subMenu_1["default"] title="opened">
        <menuItem_1["default"]>
          opened1
        </menuItem_1["default"]>
      </subMenu_1["default"]>
    </menu_1["default"]>);
};
var createStyleFile = function () {
    var cssFile = "\n  .kaito-submenu{\n    display:none;\n  }\n  .kaito-submenu.menu-opened{\n    display:block;\n  }\n  ";
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = cssFile;
    return style;
};
var wrapper, wrapper2, menuElement, activeElement, disabledElement;
describe('test Menu and MenuItem component in horizonal mode', function () {
    beforeEach(function () {
        wrapper = react_2.render(generateMenu(testProps));
        wrapper.container.append(createStyleFile());
        menuElement = wrapper.getByTestId('test-menu');
        activeElement = wrapper.getByText('active');
        disabledElement = wrapper.getByText('disabled');
    });
    it('should render the correct default menu and menuitem', function () {
        expect(menuElement).toBeInTheDocument();
        expect(menuElement).toHaveClass('kaito-menu test');
        // expect(menuElement.getElementsByTagName('li').length).toEqual(3)
        expect(menuElement.querySelectorAll(':scope > li').length).toEqual(5);
        expect(activeElement).toHaveClass('menu-item is-active');
        expect(disabledElement).toHaveClass('menu-item is-disabled');
    });
    it('click items should change and call the right callback', function () {
        var thirdItem = wrapper.getByText('xyz');
        react_2.fireEvent.click(thirdItem);
        expect(thirdItem).toHaveClass('is-active');
        expect(activeElement).not.toHaveClass('is-active');
        expect(testProps.onSelect).toHaveBeenCalledWith('2');
        react_2.fireEvent.click(disabledElement);
        expect(disabledElement).not.toHaveClass('is-active');
        expect(testProps.onSelect).not.toHaveBeenCalledWith('1');
    });
    it('should render vertical mode when mode is set to vertical', function () {
        react_2.cleanup();
        var wrapper = react_2.render(generateMenu(testVerProps));
        var menuElement = wrapper.getByTestId('test-menu');
        expect(menuElement).toHaveClass('menu-vertical');
    });
    it('should show dropdown items when hover on subMenu', function () { return __awaiter(void 0, void 0, void 0, function () {
        var dropdownElement;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    expect(wrapper.queryByText('drop1')).not.toBeVisible();
                    dropdownElement = wrapper.getByText('dropdown');
                    react_2.fireEvent.mouseEnter(dropdownElement);
                    return [4 /*yield*/, react_2.wait(function () {
                            expect(wrapper.queryByText('drop1')).toBeVisible();
                        })];
                case 1:
                    _a.sent();
                    react_2.fireEvent.click(wrapper.getByText('drop1'));
                    expect(testProps.onSelect).toHaveBeenCalledWith('3-0');
                    react_2.fireEvent.mouseLeave(dropdownElement);
                    return [4 /*yield*/, react_2.wait(function () {
                            //getByText直接返回html element
                            expect(wrapper.queryByText('drop1')).not.toBeVisible();
                        })];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('test Menu and MenuItem component in vertical mode', function () {
    beforeEach(function () {
        wrapper2 = react_2.render(generateMenu(testVerProps));
        wrapper2.container.append(createStyleFile());
    });
    it('should render vertical mode when mode is set to vertical', function () {
        var menuElement = wrapper2.getByTestId('test-menu');
        expect(menuElement).toHaveClass('menu-vertical');
    });
    it('should show dropdown items when click on subMenu for vertical mode', function () {
        var dropDownItem = wrapper2.queryByText('drop1');
        expect(dropDownItem).not.toBeVisible();
        react_2.fireEvent.click(wrapper2.getByText('dropdown'));
        expect(dropDownItem).toBeVisible();
    });
    it('should show subMenu dropdown when defaultOpenSubMenus contains SubMenu index', function () {
        expect(wrapper2.queryByText('opened1')).toBeVisible();
    });
});

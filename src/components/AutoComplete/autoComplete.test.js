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
var react_transition_group_1 = require("react-transition-group");
var react_2 = require("@testing-library/react");
var autoComplete_1 = require("./autoComplete");
react_transition_group_1.config.disabled = true;
var testArray = [
    { value: 'ab', number: 11 },
    { value: 'abc', number: 1 },
    { value: 'b', number: 4 },
    { value: 'c', number: 15 },
];
var testProps = {
    fetchSuggestions: function (query) {
        return testArray.filter(function (item) { return item.value.includes(query); });
    },
    onSelect: jest.fn(),
    placeholder: 'auto-complete'
};
var wrapper, inputNode;
describe('test AutoComplete component', function () {
    beforeEach(function () {
        wrapper = react_2.render(<autoComplete_1.AutoComplete {...testProps}/>);
        inputNode = wrapper.getByPlaceholderText('auto-complete');
    });
    it('test basic AutoComplete behavior', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    //input change
                    react_2.fireEvent.change(inputNode, { target: { value: 'a' } });
                    return [4 /*yield*/, react_2.wait(function () {
                            expect(wrapper.queryByText('ab')).toBeInTheDocument();
                        })
                        //should have 2 suggestion items
                    ];
                case 1:
                    _a.sent();
                    //should have 2 suggestion items
                    expect(wrapper.container.querySelectorAll('.suggestion-item').length).toEqual(2);
                    //click the first item
                    react_2.fireEvent.click(wrapper.getByText('ab'));
                    expect(testProps.onSelect).toHaveBeenCalledWith({ value: 'ab', number: 11 });
                    expect(wrapper.queryByText('ab')).not.toBeInTheDocument();
                    //fill the input
                    expect(inputNode.value).toBe('ab');
                    return [2 /*return*/];
            }
        });
    }); });
    it('should provide keyboard support', function () { return __awaiter(void 0, void 0, void 0, function () {
        var firstResult, secondResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    //input change
                    react_2.fireEvent.change(inputNode, { target: { value: 'a' } });
                    return [4 /*yield*/, react_2.wait(function () {
                            expect(wrapper.queryByText('ab')).toBeInTheDocument();
                        })];
                case 1:
                    _a.sent();
                    firstResult = wrapper.queryByText('ab');
                    secondResult = wrapper.queryByText('abc');
                    //arrow down
                    react_2.fireEvent.keyDown(inputNode, { keyCode: 40 });
                    expect(firstResult).toHaveClass('is-active');
                    //arrow down
                    react_2.fireEvent.keyDown(inputNode, { keyCode: 40 });
                    expect(secondResult).toHaveClass('is-active');
                    //arrow up
                    react_2.fireEvent.keyDown(inputNode, { keyCode: 38 });
                    expect(firstResult).toHaveClass('is-active');
                    //press enter
                    react_2.fireEvent.keyDown(inputNode, { keyCode: 13 });
                    expect(testProps.onSelect).toHaveBeenCalledWith({ value: 'ab', number: 11 });
                    expect(wrapper.queryByText('ab')).not.toBeInTheDocument();
                    return [2 /*return*/];
            }
        });
    }); });
    it('click outside should hide the dropdown', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    //input change
                    react_2.fireEvent.change(inputNode, { target: { value: 'a' } });
                    return [4 /*yield*/, react_2.wait(function () {
                            expect(wrapper.queryByText('ab')).toBeInTheDocument();
                        })];
                case 1:
                    _a.sent();
                    react_2.fireEvent.click(document);
                    expect(wrapper.queryByText('ab')).not.toBeInTheDocument();
                    return [2 /*return*/];
            }
        });
    }); });
});

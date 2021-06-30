"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@testing-library/react");
var button_1 = require("./button");
var defaultProps = {
    onClick: jest.fn()
};
var testProps = {
    btnType: 'primary',
    size: 'lg',
    className: 'klass'
};
var disabledProps = {
    disabled: true,
    onClick: jest.fn()
};
describe('test Button component', function () {
    it('should render the correct default button', function () {
        var wrapper = react_2.render(<button_1["default"] {...defaultProps}>Nice</button_1["default"]>);
        var element = wrapper.getByText('Nice');
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual('BUTTON');
        expect(element).toHaveClass('btn btn-default');
        expect(element.disabled).toBeFalsy();
        react_2.fireEvent.click(element);
        expect(defaultProps.onClick).toHaveBeenCalled();
    });
    it('should render the correct component based on deifferent props', function () {
        var wrapper = react_2.render(<button_1["default"] {...testProps}>Nice</button_1["default"]>);
        var element = wrapper.getByText('Nice');
        expect(element).toBeInTheDocument();
        expect(element).toHaveClass('btn-primary btn-lg klass');
    });
    it('should render a link when btnType equals link and href is provided', function () {
        var wrapper = react_2.render(<button_1["default"] btnType='link' href="http://dummyurl">Link</button_1["default"]>);
        var element = wrapper.getByText('Link');
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual('A');
        expect(element).toHaveClass('btn btn-link');
    });
    it('should render a disabled button when disabled set to true', function () {
        var wrapper = react_2.render(<button_1["default"] {...disabledProps}>Nice</button_1["default"]>);
        var element = wrapper.getByText('Nice');
        expect(element).toBeInTheDocument();
        expect(element.disabled).toBeTruthy();
        react_2.fireEvent.click(element);
        expect(disabledProps.onClick).not.toHaveBeenCalled();
    });
});

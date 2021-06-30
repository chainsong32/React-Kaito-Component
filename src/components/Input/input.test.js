"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@testing-library/react");
var input_1 = require("./input");
var defaultProps = {
    onChange: jest.fn(),
    placeholder: 'test-input'
};
describe('test Input component', function () {
    it('should render the correct default Input', function () {
        var wrapper = react_2.render(<input_1["default"] {...defaultProps}/>);
        var testNode = wrapper.getByPlaceholderText('test-input');
        expect(testNode).toBeInTheDocument();
        expect(testNode).toHaveClass('viking-input-inner');
        react_2.fireEvent.change(testNode, { target: { value: '23' } });
        expect(defaultProps.onChange).toHaveBeenCalled();
        expect(testNode.value).toEqual('23');
    });
    it('should render the disabled Input on disabled property', function () {
        var wrapper = react_2.render(<input_1["default"] disabled placeholder="disabled"/>);
        var testNode = wrapper.getByPlaceholderText('disabled');
        expect(testNode.disabled).toBeTruthy();
    });
    it('should render different input sizes on size property', function () {
        var wrapper = react_2.render(<input_1["default"] placeholder="sizes" size="lg"/>);
        var testContainer = wrapper.container.querySelector('.viking-input-wrapper');
        expect(testContainer).toHaveClass('input-size-lg');
    });
    it('should render prepand and append element on prepand/append property', function () {
        var _a = react_2.render(<input_1["default"] placeholder="pend" prepend="https://" append=".com"/>), queryByText = _a.queryByText, container = _a.container;
        var testContainer = container.querySelector('.viking-input-wrapper');
        expect(testContainer).toHaveClass('input-group input-group-append input-group-prepend');
        expect(queryByText('https://')).toBeInTheDocument();
        expect(queryByText('.com')).toBeInTheDocument();
    });
});

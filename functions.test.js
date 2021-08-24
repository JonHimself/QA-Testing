const {returnTwo, greeting, add, divide, multiply, subtract} = require('./functions')

test('This test verifies function will return the integer 2', () =>{
    expect(returnTwo()).toEqual(2)
})

test('This test verifies GREETING returns Hello, {name}.', () => {
    expect(greeting('Jill')).toEqual('Hello, Jill.')
    expect(greeting('James')).toEqual('Hello, James.')
})
describe('Math Functions', () => {
test('This test verifies if ADD returns the sum of the two integer parameters', () => {
    expect(add('1', 2)).toEqual(3);
    expect(add(5, 9)).toEqual(14);
});
test('This test verifies if divide returns the remainer of the two integer parameters', () => {
    expect(divide(9, 3)).toEqual(3);
    expect(divide(9, 9)).toEqual(1);
});
test('This test verifies if multiply returns the sum of the multipleication of the two integer parameters', () => {
    expect(multiply(1, 2)).toEqual(2);
    expect(multiply(7, 2)).toEqual(14);
});
test('This test verifies if subtract returns the subtracted sum of the two integer parameters', () => {
    expect(subtract(1, 2)).toEqual(-1);
    expect(subtract(9, 5)).toEqual(4);
})
})
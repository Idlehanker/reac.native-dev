
const {sum, forEach} = require('./sum')

test('adds 1 + 2 to equal 3', ()=>{
  expect(sum(1,2)).toBe(3)
})

test('two plus two is foure', ()=>{
  expect(2 + 2).toBe(4)
})

test('object assignment', ()=>{
  const data = {one: 1}
  data['two'] = 2
  expect(data).toEqual({one: 1, two: 2})
})

// mock test
const mockCallback = jest.fn();
forEach([0,1], mockCallback);

expect(mockCallback.mock.calls.length).toBe(2);
expect(mockCallback.mock.calls[0][0]).toBe(0);
expect(mockCallback.mock.calls[1][0]).toBe(1);

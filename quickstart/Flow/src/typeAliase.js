/**
 * @flow
 */
type MyObject = {
    foo: number;
    bar: boolean,
    baz: string,
}

var val: MyObject = {foo: 1, bar: true, baz: 'hello world'};
function method(val: MyObject){}
class Foo{
    constructor(val: MyObject){}
}


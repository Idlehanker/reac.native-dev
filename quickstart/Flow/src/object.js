/**
 * @flow
 */

//  Object type syntax
var obj1: {foo: boolean} = {foo: true};
var obj2: {
    foo: number,
    bar: boolean,
    baz: string,
} = {
    foo: 1,
    bar: true,
    baz: 'three'
}

// Optional object types properties
/**
 * In Javascript, accessing a property that doesn't exist evaluates to undefined.
 * This is a common source of error in javascript programs, So, Flow turns these
 * into type errors.
 */

var obj3 = {foo: 'bar'};
obj3.bar;

var obj4 : { foo?: boolean } = {};
obj4.foo = true;
obj4.foo = 'hello';
obj4.foo = undefined;
obj4.foo = null;

//
function acceptsObject(value: {foo?: string}){
    // 
}

acceptsObject({foo:'bar'});
acceptsObject({foo: undefined});
acceptsObject({foo: null});
acceptsObject({});


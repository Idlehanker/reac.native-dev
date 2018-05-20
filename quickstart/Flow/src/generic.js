/**
 * @flow
 */

/*
 Similar to mixed, generics hava an 'unknown type.
 You're not allowed to use a generic as if it were
 a specific type.
*/
function logFoo < T > (obj: T): T {
    console.log(obj.foo);
    return obj;
}

// refine
function logFoo1 < T > (obj: T): T {
    if (obj && obj.foo) {
        console.log(obj.foo);
    }
    return obj;
}

logFoo({
    foo: 'foo',
    bar: 'bar'
});
logFoo({
    bar: 'bar'
});

// refine: add a type to your generic
function logFoo2 < T: {
    foo: string
} > (obj: T): T {
    console.log(obj.foo);
    return obj;
}

logFoo2({foo: 'foo', bar: 'bar'});
logFoo2({bar: 'bar'});

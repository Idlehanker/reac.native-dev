/**
 * @flow
 */

//  single
function square(n: number): number {
    return n * n;
}
// grouped
function stringifyBasicValue(value: string | number) {
    return '+' + value;
}

// generic
function identity < T > (value: T): T {
    return value;
}

// arbitrary
function stringify(value: mixed) {}

stringify('foo');
stringify(3.14);
stringify(null);
stringify({});


function stringify1(value: mixed) {
    return '' + value;
}
stringify1('foo');

/**
 * The following is no complaint. Because of the typeof value === 'string'
 * check, Flow knows the value inside of the if statement. This
 * is known as a refinement.
 */
function stringify2(value: mixed) {

    if (typeof value === 'string') {
        return '' + value;
    }
    return '';
}

stringify2('foo');

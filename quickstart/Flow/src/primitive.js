/**
 * @flow
 */

function foo(x:
    ?
    number): string {
    if (x) {
        return x;
    }

    return 'default string';
}

function concat(a, b) {
    return a + b;
}

concat("A", "B");
concat(1, 2);

var concat1 = (a: string, b: string) => (a + b)

concat1(1, 2);
concat1('a', 'b');

// literal params
function method(x: number, y: string, z: boolean) {}
method(3.14, 'hello', true);

// warpper object
function methodWraper(x: Number, y: String, z: Boolean) {}
methodWraper(new Number(42), new String('Hello World'), new Boolean(false));

/**
 * Booleans
 */
// boolean value
function acceptsBoolean(value: boolean) {}
acceptsBoolean(true);
acceptsBoolean(false);
acceptsBoolean('foo');

if (42) {}
if ("") {}

acceptsBoolean(0);
acceptsBoolean(Boolean(0));
acceptsBoolean(!!0);

// Remember that bloolean and Boolean are different types; A boolean is a
// literal value like true or false or the result of an expression like a === b;
// A Boolean is a wrapper object created by the global new Boolean(x)
// constructor.

/**
 * Numbers
 */
function acceptNumber(value: number): void {}
acceptNumber(42);
acceptNumber(3.14);
acceptNumber(NaN);
acceptNumber(Infinity);
acceptNumber('foo');

/**
 * Strings
 */
function acceptsString(value: string) {}
acceptsString('foo');
acceptsString(false);
acceptsString(String('aaa'));
acceptsString(new String('abc'));

'foo'+'bar';
'foo'+42;
'foo'+{};
'foo'+[];

'foo'+String({});
'foo'+[].toString();
'foo'+JSON.stringify([]);

/**
 * null and void(undefined)
 */
function acceptsNull(value: null){}
function acceptsUndefined(value: void){}
acceptsNull(null);
acceptsNull(undefined);
acceptsUndefined(null);
acceptsUndefined(undefined);

/**
 * Maybe types
 */
function acceptsMaybeString(value: ?string){}
acceptsMaybeString('bar');
acceptsMaybeString(undefined);
acceptsMaybeString(null);
acceptsMaybeString();

/**
 * Optional object properties
 */
// var obj = {propertyName?: string};
function acceptsObject(value: {foo?: string}){}
acceptsObject({foo: 'bar'});
acceptsObject({foo: undefined});
acceptsObject({foo: null});
acceptsObject({});

/**
 * Optional funnction parameters
 */
function methodd(param?: string){}
function acceptsOptionalString(value?: string){}
acceptsOptionalString('bar');
acceptsOptionalString(undefined);
acceptsOptionalString(null);
acceptsOptionalString();


/**
 * Function parameters with defaults
 */
function acceptsOptionString(value: string='foo'){}
acceptsOptionString('bar');
acceptsOptionString(undefined);
acceptsOptionString(null);
acceptsOptionString();

/**
 * @flow
 */
function concat(a: string, b: string): string {
    return a + b;
}

concat('foo', 'bar');
concat(true, false);

// Functions have two places where types are applied:
// Parameters(input) and return value(output)

function concat1(a, b) {
    return a + b;
}

concat1('foo', 'bar');
concat1(1, 2);

/**
 * Following is the syntax for function declarations with and without types added.
 */
// the function without type
function method(str, bool, ...nums) {
    // 
}

// function with type
function method(str: string, bool ? : boolean, ...nums: Array < number > ): void {
    // 
}

let method1 = (str, bool, ...nums) => {

};

let method2 = (str: string, bool ? : boolean, ...nums: Array < number > ): void => {
    // 
};


// Function this
function methodF(){return this;}
var num: number = methodF.call(42);
var str: string = methodF.call(42);


// Using %checks
/**
 * Predicate Functions
 */
function truthy(a,b): boolean{
    return a && b;
}
function concat(a: ?string, b: ?string): string{
    if(truthy(a,b)){
        return a + b;
    }
    return '';
}

// Solutions
function truthy1(a, b): boolean %checks{
    return !!a && !!b;
}

function concat2(a: ?string, b: ?string): string{
    if(truthy1(a,b)){
        return a+b;
    }
    return '';
}


/**
 *@flow 
 * @param {*} value 
 */
function acceptsMaybeNumber(value: ? number) {

}

acceptsMaybeNumber(42);
acceptsMaybeNumber();
acceptsMaybeNumber(undefined);
acceptsMaybeNumber(null);
acceptsMaybeNumber('42');

let foo = 42;
function mutate(){
    foo = true;
    foo = "hello";
}

mutate();

let isString: string = foo;
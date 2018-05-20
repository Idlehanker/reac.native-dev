/**
 * @flow
 */
class Foo{
    serialize(){return 'Foo';}
}
class Bar{
    serilize(){return 'Bar';}
}

const foo: Foo = new Bar();

// Fixed 1
interface Serializable{
    serialize():string;
}
class Foo1{
    serialize(){return 'Foo';}
}
class Bar1{
    serialize(){return 'Bar';}
}

const foo1: Serializable = new Foo1();
const bar1: Serializable = new Bar1();

// Refining
interface Serializable1{
    serialize():string;
}
class Foo2 implements Serializable1{
    serialize(){return 'Foo';}
}
class Bar2 implements Serializable1{
    serialize(){return 'Bar';}
}

const foo2: Serializable = new Foo2();
const bar2: Serializable = new Bar2();

// Multip-implements
interface Barr{}
interface Fooo{}
class Foo3 implements Barr, Fooo{}

//  variant
interface MyInterface{
    +convariant: number;        //read-only
    -contravariant: number;     //write-only
}

// exmaples
interface Invariant{ property: number | string}
interface Covariant{ +readOnly: number | string}
interface Contravariant { -writeOnly: number}

var value1: Invariant = { property: 42};
var value2: Covariant = { readOnly: 42};

function method11(value: Covariant){
    value.readOnly;
    value.readOnly = 3.14;
}

function method12(value: Invariant){
    value.property;
    value.property = 3.14;
}

function method3(value: Contravariant){
    value.writeOnly;
    value.writeOnly = 3.14;
}

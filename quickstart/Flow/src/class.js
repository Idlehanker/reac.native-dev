/**
 * @flow
 */
class MyClass{
    method(){
        this.prop = 42;
    }
}

class MyClass1{
    props: number;
    method(){
        this.props = 42;
    }
}


class MyClass2{
    prop = 42;
}

class MyClass3{
    prop: number = 42;
}
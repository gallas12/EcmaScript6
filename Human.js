/**
 * Created by Milan Gallas on 11.9.2016.
 */
class Human {

    constructor(name){
        this.name = name;
    }

    toString(){
        return "Hello Object world "+this.name;
    }
}

class Person extends Human{
    constructor(name, age){
        super.constructor(name);
        this.age = age;
    }

    toString(){
        return (super.toString()+ " I am Person and I am "+ this.age +" years old");
    }
}

//var me = new Human("Gali");
//me.toString()

//var gali = new Person("Gali", 13);
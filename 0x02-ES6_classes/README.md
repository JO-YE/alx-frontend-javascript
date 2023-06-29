# 0x02. ES6 classes
ES6 classes are a feature introduced in ECMAScript 2015 (ES6) that provide a more convenient and structured way to define objects and their behavior in JavaScript. Classes in JavaScript follow the object-oriented programming (OOP) paradigm and are a key component of building modular and maintainable code.

![817248fb77fb5c2cef3f](https://github.com/JO-YE/alx-frontend-javascript/assets/111038087/cad70b95-90f3-43fd-994e-2346333245b0)

## Resources
- [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Metaprogramming](https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/#symbolspecies)

## Objectives
- How to define a Class
- How to add methods to a class
- Why and how to add a static method to a class
- How to extend a class from another
- Metaprogramming and symbols

## Tasks
0. [You used to attend a place like this at some point](./0-classroom.js)
- Implement a class named ClassRoom:

-	 Prototype: export default class ClassRoom
-	It should accept one attribute named maxStudentsSize (Number) and assigned to _maxStudentsSize

```
bob@dylan:~$ cat 0-main.js
import ClassRoom from "./0-classroom.js";

const room = new ClassRoom(10);
console.log(room._maxStudentsSize)

bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
10
bob@dylan:~$ 
```
1. [Let's make some classrooms](./1-make_classrooms.js)
- Import the ClassRoom class from 0-classroom.js.

Implement a function named initializeRooms. It should return an array of 3 ClassRoom objects with the sizes 19, 20, and 34 (in this order).
```
bob@dylan:~$ cat 1-main.js
import initializeRooms from './1-make_classrooms.js';

console.log(initializeRooms());

bob@dylan:~$ 
bob@dylan:~$ npm run dev 1-main.js 
[
  ClassRoom { _maxStudentsSize: 19 },
  ClassRoom { _maxStudentsSize: 20 },
  ClassRoom { _maxStudentsSize: 34 }
]
bob@dylan:~$ 
```
2. [A Course, Getters, and Setters](./2-hbtn_course.js)
- Implement a class named HolbertonCourse:
>
> Constructor attributes:
>
>> name (String)
>>
>> length (Number)
>>
>> students (array of Strings)
>
> Make sure to verify the type of attributes during object creation
>
> Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
>
> Implement a getter and setter for each attribute.
```
bob@dylan:~$ cat 2-main.js
import HolbertonCourse from "./2-hbtn_course.js";

const c1 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"])
console.log(c1.name);
c1.name = "Python 101";
console.log(c1);

try {
    c1.name = 12;
} 
catch(err) {
    console.log(err);
}

try {
    const c2 = new HolbertonCourse("ES6", "1", ["Bob", "Jane"]);
}
catch(err) {
    console.log(err);
}

bob@dylan:~$ 
bob@dylan:~$ npm run dev 2-main.js 
ES6
HolbertonCourse {
  _name: 'Python 101',
  _length: 1,
  _students: [ 'Bob', 'Jane' ]
}
TypeError: Name must be a string
    ...
TypeError: Length must be a number
    ...
bob@dylan:~$ 
```
3. [Methods, static methods, computed methods names..... MONEY](./3-currency.js)
- Implement a class named Currency:
>
> Constructor attributes:
>
>> code (String)
>>
>> name (String)
>
> Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
>
> Implement a getter and setter for each attribute.
>
> Implement a method named displayFullCurrency that will return the attributes in the following format name (code).
```
bob@dylan:~$ cat 3-main.js
import Currency from "./3-currency.js";

const dollar = new Currency('$', 'Dollars');
console.log(dollar.displayFullCurrency());

bob@dylan:~$ 
bob@dylan:~$ npm run dev 3-main.js 
Dollars ($)
bob@dylan:~$ 
```

4. [4-pricing.js](./4-pricing.js)
- Import the class Currency from 3-currency.js

- Implement a class named Pricing:

> Constructor attributes:
>
>> amount (Number)
>>
>> currency (Currency)
>
> Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
>
> Implement a getter and setter for each attribute.
>
> Implement a method named displayFullPrice that returns the attributes in the following format amount currency_name (currency_code).
>
> Implement a static method named convertPrice. It should accept two arguments: amount (Number), conversionRate (Number). The function should return the amount multiplied by the conversion rate.
```
bob@dylan:~$ cat 4-main.js
import Pricing from './4-pricing.js';
import Currency from './3-currency.js';

const p = new Pricing(100, new Currency("EUR", "Euro"))
console.log(p);
console.log(p.displayFullPrice());

bob@dylan:~$ 
bob@dylan:~$ npm run dev 4-main.js 
Pricing {
  _amount: 100,
  _currency: Currency { _code: 'EUR', _name: 'Euro' }
}
100 Euro (EUR)
bob@dylan:~$ 
```






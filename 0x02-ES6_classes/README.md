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
> Prototype: export default class ClassRoom
>
> It should accept one attribute named maxStudentsSize (Number) and assigned to _maxStudentsSize

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



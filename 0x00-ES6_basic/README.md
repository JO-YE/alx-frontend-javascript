# 0x00-ES6_basic
![08806026ef621f900121](https://github.com/JO-YE/alx-frontend-javascript/assets/111038087/23d57663-8206-41dc-a35c-9627840e457f)

This repository contains exercises and examples for learning the basics of ES6 (ECMAScript 2015) in JavaScript.

## Resources
- [ECMAScript 6 - ECMAScript 2015](https://www.w3schools.com/js/js_es6.asp)
- [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Javascript ES6 — Iterables and Iterators](https://towardsdatascience.com/javascript-es6-iterables-and-iterators-de18b54f4d4?gi=a06fae8c482f)

## Learning Objectives
>
> What ES6 is
>
> New features introduced in ES6
>
> The difference between a constant and a variable
>
> Block-scoped variables
>
> Arrow functions and function parameters default to them
>
> Rest and spread function parameters
>
> String templating in ES6
>
> Object creation and their properties in ES6
>
> Iterators and for-of loops

## Tasks
- [Const or let?](./0-constants.js)
Modify
-	function taskFirst to instantiate variables using const
-	function taskNext to instantiate variables using let
```
export function taskFirst() {
  var task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  var combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
```

- [Block Scope](./1-block-scoped.js)
-	Given what you’ve read about var and hoisting, modify the variables inside the function taskBlock so that the variables aren’t overwritten inside the conditional block.
```
export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    var task = true;
    var task2 = false;
  }

  return [task, task2];
}
```

- [Arrow functions](./2-arrow.js)
-	Rewrite the following standard function to use ES6’s arrow syntax of the function add (it will be an anonymous function after)
```
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeighborhood = function add(newNeighborhood) {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}
```

- [Parameter defaults](./3-default-parameter.js)
-	Condense the internals of the following function to 1 line - without changing the name of each function/variable.
```
export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
  if (expansion1989 === undefined) {
    expansion1989 = 89;
  }

  if (expansion2019 === undefined) {
    expansion2019 = 19;
  }
  return initialNumber + expansion1989 + expansion2019;
}
```


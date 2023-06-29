# 0x01-ES6_promise
- This repository contains examples and exercises related to ES6 Promises in JavaScript. Promises are a powerful feature introduced in ECMAScript 2015 (ES6) that help manage asynchronous operations and handle their results.

- ES6 Promises provide a more elegant and readable way to handle asynchronous operations compared to traditional callbacks. Promises represent the eventual completion (or failure) of an asynchronous operation and allow one to attach callbacks to handle the results or errors.

This repository serves as a learning resource to understand and practice working with Promises in JavaScript. It includes code examples and exercises that cover various aspects of Promises, including creating and chaining promises, handling errors, and using Promise utilities.

- ![75862d67ca51a042003c](https://github.com/JO-YE/alx-frontend-javascript/assets/111038087/582a39bf-3f11-47d2-b54a-bae7f1b5d881)

## Resources
- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JavaScript Promise: An introduction](https://web.dev/promises/)
- [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Throw / Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

## Objectives
- Promises (how, why, and what)
- How to use the then, resolve, catch methods
- How to use every method of the Promise object
- Throw / Try
- The await operator
- How to use an async function

## Tasks
0. Keep every promise you make and only make promises you can keep
- Return a Promise using this prototype function getResponseFromAPI()
```
bob@dylan:~$ cat 0-main.js
import getResponseFromAPI from "./0-promise.js";

const response = getResponseFromAPI();
console.log(response instanceof Promise);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
true
bob@dylan:~$ 
```

1. Don't make a promise...if you know you can't keep it
mandatory
- Using the prototype below, return a promise. The parameter is a boolean.
```
getFullResponseFromAPI(success)
```
- When the argument is:

> true
>> resolve the promise by passing an object with 2 attributes:
>>>> status: 200
>>>> body: 'Success'
> false
>> reject the promise with an error object with the message The fake API is not working currently

```
bob@dylan:~$ cat 1-main.js
import getFullResponseFromAPI from './1-promise';

console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 1-main.js 
Promise { { status: 200, body: 'Success' } }
Promise {
  <rejected> Error: The fake API is not working currently
    ...
    ...
bob@dylan:~$ 
```



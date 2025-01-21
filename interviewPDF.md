- Interview Questions::

# 1. What is JavaScript?

- JavaScript is a high-level, interpreted programming language that is widely used for creating interactive and dynamic content on the web. It is a core technology of the World Wide Web, alongside HTML and CSS, enabling the implementation of complex features on web pages. JavaScript is versatile and can be used both on the client-side (in browsers) and server-side (using environments like Node.js).

# 2. Describe how JavaScript code is interpreted in the backend?

- JavaScript code on the backend is interpreted by a JavaScript runtime environment such as Node.js. When a JavaScript file is executed in Node.js, the following process generally occurs:
- **Parsing**: The JavaScript engine parses the code to generate an Abstract Syntax Tree (AST).
- **Compilation**: The AST is compiled into machine code or bytecode by the JavaScript engine (e.g., V8 engine in Node.js).
- **Execution**: The compiled code is executed by the JavaScript runtime. Node.js provides various APIs and modules to handle server-side operations, such as file I/O, network requests, and database interactions.

# 3. How can you create an object in JavaScript?

- You can create an object in JavaScript using several methods:

- **Object Literal**:
  ```javascript
  let person = {
      name: 'Alice',
      age: 30
  };
  ```

- **Constructor Function**:
  ```javascript
  function Person(name, age) {
      this.name = name;
      this.age = age;
  }
  let person = new Person('Alice', 30);
  ```

- **Object.create()**:
  ```javascript
  let personPrototype = {
      greet: function() {
          console.log('Hello');
      }
  };
  let person = Object.create(personPrototype);
  person.name = 'Alice';
  ```

# 4. How can you create an Array in JavaScript?

You can create an array in JavaScript using various methods:

- **Array Literal**:
  ```javascript
  let fruits = ['apple', 'banana', 'cherry'];
  ```

- **Array Constructor**:
  ```javascript
  let fruits = new Array('apple', 'banana', 'cherry');
  ```

- **Array.of()**:
  ```javascript
  let fruits = Array.of('apple', 'banana', 'cherry');
  ```

- **Array.from()**:
  ```javascript
  let arrayLike = {0: 'apple', 1: 'banana', length: 2};
  let fruits = Array.from(arrayLike);
  ```

# 5. What is a named function in JavaScript?

- A named function in JavaScript is a function that is defined with a specific name. This name can be used to refer to the function and invoke it. Named functions are also useful for recursion and debugging because the function name appears in stack traces.

- **Named Function Declaration**:
  ```javascript
  function greet(name) {
      console.log('Hello, ' + name);
  }
  ```

- **Named Function Expression**:
  ```javascript
  let greet = function greetFunction(name) {
      console.log('Hello, ' + name);
  };
  ```

# 6. What are the scopes in JavaScript?

- Scopes in JavaScript define the accessibility of variables and functions. There are three primary types of scope:

- **Global Scope**: Variables and functions declared in the global context are accessible from anywhere in the code.
  ```javascript
  let globalVar = 'I am global';
  ```

- **Function Scope**: Variables declared within a function are only accessible within that function.
  ```javascript
  function myFunction() {
      let localVar = 'I am local';
  }
  ```

- **Block Scope**: Introduced in ES6, variables declared with `let` and `const` are block-scoped and only accessible within the block they are defined in.
  ```javascript
  if (true) {
      let blockVar = 'I am block-scoped';
  }
  ```

# 7. What is a Callback?

- A callback is a function passed as an argument to another function, which is then invoked inside the outer function to complete some kind of routine or action. Callbacks are commonly used for handling asynchronous operations.

- **Example**:
  ```javascript
  function fetchData(callback) {
      setTimeout(() => {
          callback('Data loaded');
      }, 1000);
  }

  fetchData(function(result) {
      console.log(result); // 'Data loaded'
  });
    ```

# 8. What is Hoisting?

- Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compile phase. This means that variables and functions can be used before they are declared.

- **Example**:
  ```javascript
  console.log(x); // undefined
  var x = 5;

  greet(); // 'Hello'
  function greet() {
      console.log('Hello');
  }
  ```

# 9. What is a Temporal Deadzone?

- The Temporal Dead Zone (TDZ) is a behavior in JavaScript where variables declared with `let` and `const` are in a "dead zone" from the start of the block until the declaration is encountered. During this period, accessing the variable will result in a `ReferenceError`.

- **Example**:
  ```javascript
  {
      console.log(x); // ReferenceError: x is not defined
      let x = 10;
  }
  ```

# 10. What is the Lexical Environment?

- The Lexical Environment is a data structure that JavaScript uses to keep track of variable bindings and their values. It consists of the environment record (which contains variables, function declarations, and their values) and a reference to the outer environment. Lexical environments are created whenever a function is executed or a block of code is run, and they enable closures by maintaining access to outer scope variables.

- **Example**:
  ```javascript
  function outerFunction() {
      let outerVar = 'I am outer';
      function innerFunction() {
          console.log(outerVar); // 'I am outer'
      }
      return innerFunction;
  }

  const inner = outerFunction();
  inner();
  ```

# 11. What are closures?

   - A closure a fundamental concept that allows a function to access variables from its outer (enclosing) scope even after that outer function has finished executing. Closures are often used to create private variables or to maintain state in an asynchronous environment.

    ### How Closures Work

    When a function is defined inside another function, it gains access to the outer function’s variables. This is possible because of closures. The inner function retains access to the outer function’s variables even after the outer function has returned.

    Here’s a basic example:

    ```javascript
    function outerFunction() {
        let outerVariable = 'I am from outer scope';

        function innerFunction() {
            console.log(outerVariable); // Accessing the outer variable
        }

        return innerFunction;
    }

    const closureFunction = outerFunction();
    closureFunction(); // Logs: 'I am from outer scope'
    ```

    ### Key Characteristics of Closures

    1. **Lexical Scoping**: Closures capture the lexical environment in which they were created. This means they have access to variables in their outer scope even after that outer scope has finished executing.

    2. **Encapsulation**: Closures help in encapsulating and managing state. For example, you can create private variables that cannot be accessed directly from outside the closure.

    3. **Persistence**: The variables within the outer function's scope persist as long as there is a reference to the inner function. This can be useful for scenarios like creating functions with persistent state.

    ### Use Cases of Closures

    1. **Private Variables**: Closures can be used to create private variables that are not accessible from the outside world.

    ```javascript
    function createCounter() {
        let count = 0;

        return {
            increment: function() {
                count += 1;
                return count;
            },
            decrement: function() {
                count -= 1;
                return count;
            },
            getCount: function() {
                return count;
            }
        };
    }

    const counter = createCounter();
    console.log(counter.increment()); // 1
    console.log(counter.increment()); // 2
    console.log(counter.getCount()); // 2
    ```

    2. **Function Factories**: Creating functions with pre-set parameters.

    ```javascript
    function multiplier(factor) {
        return function(number) {
            return number * factor;
        };
    }

    const timesFive = multiplier(5);
    console.log(timesFive(10)); // 50
    ```

    3. **Callback Functions**: Closures are commonly used in asynchronous operations or event handlers where you want to maintain access to certain variables.

    ```javascript
    function fetchData(callback) {
        let data = 'Sample data';
        setTimeout(() => {
            callback(data);
        }, 1000);
    }

    fetchData(function(result) {
        console.log(result); // 'Sample data'
    });
    ```

    Closures are a powerful feature in JavaScript and other programming languages that support first-class functions. They provide a way to manage scope and state effectively, leading to cleaner and more modular code.


12. What is the difference between Local storage & Session storage?
    - sessionStorage is similar to localStorage ; the difference is that while data in localStorage doesn't expire, data in sessionStorage is cleared when the page session ends. Whenever a document is loaded in a particular tab in the browser, a unique page session gets created and assigned to that particular tab.

13. What is the difference between null & undefined?
14. What is the difference between not defined & undefined?
    - In JavaScript, `null`, `undefined`, and "not defined" are terms that refer to different states or conditions of variables. Here's a breakdown of each:

    ### `null`

    - **Definition**: `null` is a special value that represents the intentional absence of any object value. It's a primitive value that you can assign to a variable to indicate that the variable is explicitly empty or has no value.
    - **Usage**: It’s commonly used to indicate that a variable should be empty or that an object property is intentionally left blank. 
    - **Type**: The type of `null` is actually an object (though this is considered a bug in JavaScript that has been retained for compatibility reasons).

    ```javascript
    let variable = null;
    console.log(typeof variable); // "object"
    ```

    ### `undefined`

    - **Definition**: `undefined` is the default value of a variable that has been declared but not assigned a value. It also represents the absence of a value in certain contexts.
    - **Usage**: JavaScript automatically assigns `undefined` to variables that are declared but not initialized, to function parameters that are not provided, and to object properties that do not exist.
    - **Type**: The type of `undefined` is "undefined".

    ```javascript
    let variable;
    console.log(variable); // undefined
    console.log(typeof variable); // "undefined"
    ```

    ### "Not defined"

    - **Definition**: "Not defined" refers to a variable or function that has not been declared at all. Accessing a variable or function that is not declared will throw a `ReferenceError`.
    - **Usage**: It occurs when you try to use a variable or function that hasn’t been declared in any scope.
    - **Error**: Attempting to use an undeclared variable or function will result in a runtime error.

    ```javascript
    console.log(nonExistentVariable); // ReferenceError: nonExistentVariable is not defined
    ```

    ### Summary

    - **`null`**: A value explicitly assigned to indicate no value.
    - **`undefined`**: A default state for uninitialized variables or missing function parameters.
    - **"Not defined"**: A situation where a variable or function is used without being declared, causing a `ReferenceError`.

    Understanding these differences is crucial for debugging and writing predictable JavaScript code.


# 15. What is event bubbling and event capturing in JavaScript?

- Event bubbling [OUTward] and event capturing [IN-ward] are two phases of event propagation in the DOM:

- **Event Bubbling**: The event starts from the target element and bubbles up to the root of the document. During this phase, the event is first handled by the innermost element (the target), and then it propagates outward to its parent elements, and so on up the DOM tree.

  - **Example**:
    ```javascript
    document.getElementById('child').addEventListener('click', function() {
        console.log('Child clicked');
    });
    
    document.getElementById('parent').addEventListener('click', function() {
        console.log('Parent clicked');
    });
    ```

    Clicking on the child element will first log "Child clicked", and then "Parent clicked".

- **Event Capturing**: Also known as event capturing, this phase is the opposite of bubbling. The event starts from the root of the document and travels down to the target element. 

  - **Example**:
    ```javascript
    document.getElementById('parent').addEventListener('click', function() {
        console.log('Parent clicked');
    }, true);
    
    document.getElementById('child').addEventListener('click', function() {
        console.log('Child clicked');
    });
    ```

    Clicking on the child element will first log "Parent clicked", and then "Child clicked".

# 16. What is event delegation?

- Event delegation is a technique where a single event listener is added to a parent element to handle events for multiple child elements. This is achieved by utilizing event bubbling. It’s useful for managing dynamic elements and improving performance.

- **Example**:
  ```javascript
  document.getElementById('parent').addEventListener('click', function(event) {
      if (event.target && event.target.matches('button')) {
          console.log('Button clicked:', event.target.textContent);
      }
  });
  ```

  This allows handling clicks on any button within the `parent` element, even if the buttons are added dynamically.

# 17. What is throttling and debouncing?

- Both are techniques to optimize the performance of events that fire frequently, such as scrolling or resizing.

- **Throttling**: Ensures that a function is executed at most once in a specified time interval. 
                Useful for limiting the rate of function execution.

  - **Example**:
    ```javascript
    function throttle(func, limit) {
        let lastFunc;
        let lastRan;
        return function() {
            const context = this;
            const args = arguments;
            if (!lastRan) {
                func.apply(context, args);
                lastRan = Date.now();
            } else {
                clearTimeout(lastFunc);
                lastFunc = setTimeout(function() {
                    if ((Date.now() - lastRan) >= limit) {
                        func.apply(context, args);
                        lastRan = Date.now();
                    }
                }, limit - (Date.now() - lastRan));
            }
        };
    }
    ```

- **Debouncing**: Delays the execution of a function until a specified time has passed since the last time the function was invoked. Useful for scenarios where you want to wait until the user has stopped performing an action.

  - **Example**:
    ```javascript
    function debounce(func, wait) {
        let timeout;
        return function() {
            const context = this;
            const args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), wait);
        };
    }
    ```

# 18. What is the difference between `call`, `apply`, and `bind` methods?

- These methods are used to change/manipulate the context (`this`) of a function.

- **`call`**: Invokes a function with a specified `this` value and arguments passed individually.
  - **Example**:
    ```javascript
    function greet(greeting) {
        console.log(greeting + ', ' + this.name);
    }
    const person = { name: 'Alice' };
    greet.call(person, 'Hello'); // 'Hello, Alice'
    ```

- **`apply`**: Invokes a function with a specified `this` value and arguments passed as an array.
  - **Example**:
    ```javascript
    function greet(greeting) {
        console.log(greeting + ', ' + this.name);
    }
    const person = { name: 'Alice' };
    greet.apply(person, ['Hello']); // 'Hello, Alice'
    ```

- **`bind`**: Returns a new function with a specified `this` value and optional arguments. The new function can be invoked later.
  - **Example**:
    ```javascript
    function greet(greeting) {
        console.log(greeting + ', ' + this.name);
    }
    const person = { name: 'Alice' };
    const greetAlice = greet.bind(person, 'Hello');
    greetAlice(); // 'Hello, Alice'
    ```

# 19. What is the difference between `map`, `filter`, and `reduce` methods?

- These are array methods used for different operations on arrays.

- **`map`**: Creates a new array with the results of calling a provided function on every element of the calling array.
  - **Example**:
    ```javascript
    const numbers = [1, 2, 3];
    const squares = numbers.map(x => x * x); // [1, 4, 9]
    ```

- **`filter`**: Creates a new array with all elements that pass the test implemented by the provided function.
  - **Example**:
    ```javascript
    const numbers = [1, 2, 3, 4, 5];
    const evenNumbers = numbers.filter(x => x % 2 === 0); // [2, 4]
    ```

- **`reduce`**: Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
  - **Example**:
    ```javascript
    const numbers = [1, 2, 3];
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // 6
    ```

# 20. Difference between `==` and `===`?

- **`==` (Loose Equality)**: Compares two values for equality after performing type coercion if necessary. It converts the values to the same type before comparison.
  - **Example**:
    ```javascript
    console.log(5 == '5'); // true
    ```

- **`===` (Strict Equality)**: Compares two values for equality without performing type coercion. Both the value and type must be the same.
  - **Example**:
    ```javascript
    console.log(5 === '5'); // false
    ```

# 21. Difference between `var`, `let`, and `const`?

- **`var`**: Declares a variable that is function-scoped or globally scoped. It is hoisted to the top of its scope and can be re-assigned.
  - **Example**:
    ```javascript
    var x = 10;
    ```

- **`let`**: Declares a block-scoped variable. It is not hoisted and cannot be accessed before its declaration within the block.
  - **Example**:
    ```javascript
    let x = 10;
    ```

- **`const`**: Declares a block-scoped variable that cannot be re-assigned. It must be initialized at the time of declaration.
  - **Example**:
    ```javascript
    const x = 10;
    ```

- let and const are blocked scope and var is functional scope ie let and const cannot be accesed outside the blocked scope whereas var cannot be accesed ouside the functional scope. For eg if let, var and const are define inside if-block they cannot be accessed outside if-block but var can be accesed out also if let,var and const are defined inside the function then in this case var will not be accessed outside it along with let and const.

# 22. What is an Immediately Invoked Function in JavaScript?

- An Immediately Invoked Function Expression (IIFE) is a function that runs as soon as it is defined. It helps to create a new scope and avoid polluting the global namespace.

- **Example**:
  ```javascript
  (function() {
      console.log('I am an IIFE');
  })();
  ```

# 23. Explain Higher Order Functions in JavaScript.

- Higher Order Functions (HOFs) are functions that take other functions as arguments or return functions as their result. They allow for more abstract and reusable code.

- **Example**:
  ```javascript
  function greet(name) {
      return function(message) {
          console.log(message + ', ' + name);
      };
  }
  
  const greetAlice = greet('Alice');
  greetAlice('Hello'); // 'Hello, Alice'
  ```

# 24. What is currying in JavaScript?

- Currying is a technique where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument. It allows partial application of functions.

- **Example**:
  ```javascript
  function multiply(a) {
      return function(b) {
          return a * b;
      };
  }
  
  const multiplyBy2 = multiply(2);
  console.log(multiplyBy2(5)); // 10
  ```


25. What are the types of common errors in javascript?

    - In JavaScript, common errors can generally be classified into a few broad categories. Understanding these can help in debugging and writing more robust code. Here’s an overview:

    ### 1. **Syntax Errors**
    - **Missing or Misplaced Punctuation**: Common issues include missing semicolons, mismatched braces or parentheses, or stray commas.
        ```javascript
        // Missing semicolon
        let a = 5
        let b = 10;
        
        // Mismatched braces
        if (true) {
        console.log("Hello");
        // Missing closing brace
        ```

    ### 2. **Reference Errors**
    - **Undefined Variables**: Attempting to use a variable that hasn’t been declared or is out of scope.
        ```javascript
        console.log(x); // ReferenceError: x is not defined
        ```

    ### 3. **Type Errors**
    - **Incorrect Data Types**: Performing operations on incompatible data types, like trying to call a method on a `null` or `undefined` value.
        ```javascript
        let num = 5;
        num.toUpperCase(); // TypeError: num.toUpperCase is not a function
        
        let obj = null;
        obj.method(); // TypeError: Cannot read property 'method' of null
        ```

    ### 4. **Range Errors**
    - **Out-of-Bounds Errors**: Issues related to numeric values being out of range or invalid operations.
        ```javascript
        let arr = [];
        arr.length = -1; // RangeError: Invalid array length
        ```

    ### 5. **Eval Errors**
    - **Problems with `eval` Function**: Typically, this is rare as the `eval` function is not commonly used in modern JavaScript, but it can lead to security and performance issues.
        ```javascript
        eval("var x = ;"); // SyntaxError: Unexpected token ';'
        ```

    ### 6. **URI Errors**
    - **Problems with Encoding/Decoding URI Components**: Incorrect use of `encodeURI` or `decodeURI`.
        ```javascript
        decodeURIComponent('%'); // URIError: Invalid percent-encoded character
        ```

    ### 7. **Logical Errors**
    - **Flawed Logic**: The code runs without syntax errors but produces incorrect results due to logical mistakes.
        ```javascript
        function isEven(num) {
        return num % 2 = 0; // Logical error, should use '=='
        }
        ```

    ### 8. **Asynchronous Errors**
    - **Issues with Promises and Callbacks**: Handling asynchronous operations can lead to problems like unhandled promise rejections or callback hell.
        ```javascript
        // Unhandled promise rejection
        fetch('https://api.example.com/data')
        .then(response => response.json())
        .catch(error => console.log(error));
        
        // Callback hell
        doSomething(function(err, result) {
        if (err) {
            console.log(err);
        } else {
            doSomethingElse(result, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                doAnotherThing(result);
            }
            });
        }
        });
        ```

    ### 9. **Deprecation Warnings**
    - **Deprecated Features**: Using features or methods that are outdated and might be removed in future versions.
        ```javascript
        document.all; // Deprecated, should avoid using
        ```

    ### 10. **Browser Compatibility Issues**
    - **Different Behaviors Across Browsers**: Some JavaScript features may not be supported across all browsers or may behave differently.
        ```javascript
        // Using a newer JavaScript feature not supported in older browsers
        let newArray = Array.from('hello'); // May not be supported in older browsers
        ```

    Understanding these common error types can help in both avoiding and fixing issues that arise while writing and maintaining JavaScript code.

26. What is DOM?
27. What do you mean by BOM?
28. What is the distinction between client-side and server-side JavaScript?
29. What are arrow functions?
30. What is a first class function?
31. What is the rest parameter and spread operator?
32. What is the use of promises in javascript ?
33. What are the stages of promises ?
34. What are generator functions?
35. What is Object Destructuring?
36. Tell me about the event loop?
37. What is async and await and give an example?
38. What is the difference between async and defer?
39. Coercion in javascript.
40. What is the difference between exec () and test () methods in javascript?
41. What is the purpose of NaN?
42. Why is innerHTML content continually refreshed?
43. How do ViewState and SessionState vary?
44. How can the setTimeout function be used?
45. Explain with an example what the unshift() method is.
46. Describe in detail the concept of OOPS in JS?
47. Explain with an example what the shift() method is.
48. How do you insert comments in JS?
49. What is React?
50. What is npm? What is the main functionality of npm?
51. What are the advantages of using React?
52. What is jsx?
53. What are the differences between functional and class components?
54. What is the virtual DOM and how does react use the virtual DOM?
55. Explain React state and props.
56. What is prop drilling in React?
57. What is useState() in React?
58. What is the use of useEffect React Hooks?
59. What are Higher Order Components?
60. What are the different phases of the component lifecycle and also methods of the phases?
61. What is a React Router?
62. Can React Hook replace Redux?
63. Explain about types of Hooks in React.
64. What is Node.js?
65. Is Node a single threaded application?
66. Explain Node.js web application architecture?
67. What are the modules in Node.js? Which are the different modules used in Node.js?
68. What is the difference between readFile and createReadStream in Node.js
69. What are HTTP methods?
70. What is idempotent in HTTP methods?











<!-- 
- Interview Questions::

1. What is JavaScript?
2. Describe how javascript code is interpreted in the backend?
3. How can you create an object in JavaScript?
4. How can you create an Array in JavaScript?
5. What is a name function in JavaScript?
6. What are the scopes in JavaScript?
7. What is Callback?
8. What is Hoisting?
9. What is a Temporal Deadzone?
10. What is the Lexical Environment?
11. What are closures?
12. What is the difference between Local storage & Session storage?
13. What is the difference between null & undefined?
14. What is the difference between not defined & undefined?
15. What is an event bubbling and event capturing in JavaScript?
16. What is event delegation?
17. What is throttling and debouncing?
18. What is the difference between call , apply & bind methods?
19. What is the difference between map,filter & reduce methods?
20. Difference between “==” and “===”?
21. Difference between var ,let and const?
22. What is an Immediately Invoked Function in JavaScript?
23. Explain Higher Order Functions in javascript.
24. What is currying in JavaScript?
25. What are the types of common errors in javascript?
26. What is DOM?
27. What do you mean by BOM?
28. What is the distinction between client-side and server-side JavaScript?
29. What are arrow functions?
30. What is a first class function?
31. What is the rest parameter and spread operator?
32. What is the use of promises in javascript ?
33. What are the stages of promises ?
34. What are generator functions?
35. What is Object Destructuring?
36. Tell me about the event loop?
37. What is async and await and give an example?
38. What is the difference between async and defer?
39. Coercion in javascript.
40. What is the difference between exec () and test () methods in javascript?
41. What is the purpose of NaN?
42. Why is innerHTML content continually refreshed?
43. How do ViewState and SessionState vary?
44. How can the setTimeout function be used?
45. Explain with an example what the unshift() method is.
46. Describe in detail the concept of OOPS in JS?
47. Explain with an example what the shift() method is.
48. How do you insert comments in JS?
49. What is React?
50. What is npm? What is the main functionality of npm?
51. What are the advantages of using React?
52. What is jsx?
53. What are the differences between functional and class components?
54. What is the virtual DOM and how does react use the virtual DOM?
55. Explain React state and props.
56. What is prop drilling in React?
57. What is useState() in React?
58. What is the use of useEffect React Hooks?
59. What are Higher Order Components?
60. What are the different phases of the component lifecycle and also methods of the phases?
61. What is a React Router?
62. Can React Hook replace Redux?
63. Explain about types of Hooks in React.
64. What is Node.js?
65. Is Node a single threaded application?
66. Explain Node.js web application architecture?
67. What are the modules in Node.js? Which are the different modules used in Node.js?
68. What is the difference between readFile and createReadStream in Node.js
69. What are HTTP methods?
70. What is idempotent in HTTP methods? -->


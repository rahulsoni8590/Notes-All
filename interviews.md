{
environment variable
currying
hoisting
closure
call, apply, bind
event loop in nodejs
microtask queue / priority queue
primitive and non primitive
text vs varchar in mysql
tags vs elements in html
canvas
self closing tags
joins in mysql
life cycle methods
hooks
usememo
relational vs non relational database
cap theorem mongodb SD
learn MYSQL
latest html5 and react version and feature
JWT mechanism
promise vs asynch await
img vs figure
reducer hook
how to control rerendering in react >> usememo, lifecycle methods and more
explain oops concepts in js
what are callback in node/js
grid vs flex
pseudo class vs pseudo element
media screen
box model
flex property - >> flex-grow, flex-shrink,flex-basis
id vs class in css
ways to add css in html file only >> using style tags and inline css
EJS?

}

CSS Positions

- fixed = fixed wrt to vp
- static= default
- sticky= fixed wrt to container (fixed+relative)
- relative = relative places an element relative to its current position without changing the layout around it(becoz space in reserverd)
- absolute = absolute places an element relative to its parent’s position and changing the layout around it.

---

diff flex and grid

Grid is made for a two-dimensional layout
while Flexbox is for one.
This means Flexbox can work on either row or columns at a time, but Grids can work on both.

Flexbox works on content first approach
Grid is based on the layout first approach

The Flexbox layout small-scale design,
the Grid layout is designed for larger-scale layouts that are not linear in design.

---

diff betweeen pseudo-classes and pseudo-elements

The single colon : refers to pseudo-classes
are primarily used to style an element that's under various states. When referring to state, this includes the condition or user behavior, for example hover, active, focus, or disabled. States generally involve user interaction.
eg active,focus,target,hover,visited,focus-visible

The double colon :: refers to pseudo-elements
Pseudo-elements (::) are used to style specified parts of an element. They can be used to target the first letter or first line. Or they can be used to insert content before or after the element.

eg after, before

---

OOPS::

OBject::

Object: An Object is a unique entity that contains properties and methods. For example “a car” is a real-life Object, which has some characteristics like color, type, model, and horsepower and performs certain actions like driving. The characteristics of an Object are called Properties in Object-Oriented Programming and the actions are called methods. An Object is an instance of a class. Objects are everywhere in JavaScript, almost every element is an Object whether it is a function, array, or string.

Note: A Method in javascript is a property of an object whose value is a function.

The object can be created in two ways in JavaScript:

Object Literal
Object Constructor

Classes::

Classes: Classes are blueprints of an Object. A class can have many Objects because the class is a template while Objects are instances of the class or the concrete implementation.
Before we move further into implementation, we should know unlike other Object Oriented languages there are no classes in JavaScript we have only Object. To be more precise, JavaScript is a prototype-based Object Oriented Language, which means it doesn’t have classes, rather it defines behaviors using a constructor function and then reuses it using the prototype.

Abstraction: Abstraction means displaying only essential information and hiding the details. Data abstraction refers to providing only essential information about the data to the outside world, hiding the background details or implementation.

Encapsulation: The process of wrapping properties and functions within a single unit is known as encapsulation.

Inheritance: It is a concept in which some properties and methods of an Object are being used by another Object. Unlike most of the OOP languages where classes inherit classes, JavaScript Objects inherit Objects i.e. certain features (property and methods) of one object can be reused by other Objects.

Polymorphism: Polymorphism is one of the core concepts of object-oriented programming languages. Polymorphism means the same function with different signatures is called many times. In real life, for example, a boy at the same time may be a student, a class monitor, etc. So a boy can perform different operations at the same time. Polymorphism can be achieved by method overriding and method overloading

---

Throttling helps limit the rate of function calls to prevent overwhelming the system  
debouncing delays function execution to handle situations where rapid or frequent calls are expected. Both techniques contribute to improving performance, optimizing resource usage, and enhancing the overall user experience in web applications.

Throttling is useful in scenarios like scroll event handlers, resize event handlers, or handling user input events like mousemove or keydown, where frequent calls can lead to performance degradation.

Debouncing is typically used in scenarios where a function is called repeatedly, such as in response to user input like typing.

---

Forms

1. **action**: Specifies the URL where form data is sent when the form is submitted.

   ```html
   <form action="/submit-form" method="post"></form>
   ```

2. **method**: Defines the HTTP method to use for submitting form data. Common values:

   - `GET`: Appends form data to the URL.
   - `POST`: Sends form data in the request body.

   ```html
   <form method="post"></form>
   ```

3. **enctype**: Specifies how the form data should be encoded when submitting. Common values:

   - `application/x-www-form-urlencoded`: Default encoding.
   - `multipart/form-data`: Used for file uploads.
   - `text/plain`: Sends form data as plain text.

   ```html
   <form enctype="multipart/form-data"></form>
   ```

4. **target**: Defines where to display the response after form submission. Values:

   - `_self`: Same frame (default).
   - `_blank`: New window or tab.
   - `_parent`: Parent frame.
   - `_top`: Full window.

   ```html
   <form target="_blank"></form>
   ```

5. **name**: Assigns a name to the form for referencing in scripts or data submission.

   ```html
   <form name="contactForm"></form>
   ```

6. **autocomplete**: Controls the browser’s auto-completion feature for input fields. Values:

   - `on`: Enables auto-completion.
   - `off`: Disables auto-completion.

   ```html
   <form autocomplete="off"></form>
   ```

7. **novalidate**: Prevents default form validation by the browser.

   ```html
   <form novalidate></form>
   ```

8. **accept-charset**: Specifies the character encodings that the server can understand.
   ```html
   <form accept-charset="UTF-8"></form>
   ```
   submit form method using js DOM:: document.form[0].submit()

---

JavaScript Execution Model
JavaScript operates in a single-threaded environment, meaning it can handle one task at a time. However, it uses an event loop to manage asynchronous operations, which allows it to perform non-blocking operations despite its single-threaded nature.

Main Thread
Description: The main thread is where your JavaScript code runs. It executes code synchronously and handles tasks like rendering the UI, processing events, and executing functions.

Microtask Queue
Description: The microtask queue (also known as the "job queue" or "next tick queue") handles promises and other microtasks. Microtasks are processed before the next event loop iteration, ensuring that promises are resolved as soon as possible.

Priority: Microtasks have a higher priority than macrotasks (like setTimeout or setInterval callbacks). They are executed after the currently executing script and before any rendering or I/O events.

Macrotask Queue
Description: The macrotask queue (or "task queue") handles tasks like setTimeout, setInterval, and I/O operations. Tasks in this queue are executed after microtasks have been processed.

Priority: Macrotasks are executed in the order they are added to the queue, after all microtasks have been processed.

Web Workers
Description: Web Workers run in the background, separate from the main thread. They can perform tasks like computations or data processing without blocking the UI or main thread. Communication between workers and the main thread is done through message passing.

---

Tag: Part of the syntax that defines an element in HTML (e.g., <div>, </div>).
Element: The complete structure that includes a tag, its content, and optionally, an end tag (e.g., <div>Content</div>).

---

node def::
NODEJS ::

Nodejs is a opensource, cross-platform javascript runtime. It runs on chrome v8 JS-Engine. It enable server-side JS-programming paired it with an event-driven, Nonblocking I/O model that helps in creating Scalable and High performance web Applications.

NOTE- NODEJS is niether a library nor a framework.

    Advantages of using event-driven, Nonblocking I/O model is that it allows for better perfomance and resource utilization while handling multiple connections simultaneously.

Blocking is synchronous JS and Nonbloking is Asnchronous JS.
Nodejs is create to overcome the issue of handling multiple simultaneous connection

Server:
Server is a computer or software that provides ressources or services to computer over a networks. In webapplication server stores the data,process the data,handles user authentication and execute server-side code.
server are responsible for serving static files to the brower for rendering pagages,as well as receiving and processing userinput to enaable dynamic updates on the webpage.

HTTP::
HTTP is communication protocol used to transmit and receive data over the internet. It allows clines to send request to server and servers responds with the requested data.

---

tablename = bank
coulmn = id , a/c , type, place,balance

DQL - query
select _ from bank
select _ from bank where id = 8
select _ from bank where id => 8 AND type = "this"
select _ from bank where id =< 8 OR type IN ("save", "depo")
select _ from bank where id = 8 OR type NOT IN ("save", "depo")
select _ from bank where id = 8 OR type NOT IN ("save", "depo")
select \* from bank where id BETWEEN 9 AND 45

select \* from bank where id = 8 ORDER BY place

select \* from bank where id = 8 GROUP BY place HAVING balance>100

DDL = defination

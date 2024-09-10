# 1 Introduction to ReactJs

React is a JS Library for building UI {user interface}
[React Official website](https://react.dev/)

Why to use React?

1. {current version:18, owner:meta, createby:Jordan walke, launched:2013}
2. React is Composable(component based). ie why increases reusablility.
3. React helps create single page application efficiently ie only 1 html page and we dont have to reload the page.

# 2 SPA Vs MPA

MPA = Multi-page Application
Traditional implementation of web Application which RELOADS the whole page when user interacts with the app.
It send the post,get type request
slower
SEO friendly
amazon

SPA = Single-page Application
Is a web Application which LOADS a single document (HTML) and update a part of the document using JS Apis (AJAX).
It send the AJAX request in json format
faster
non seo friendly
whatapp,nexflix,facebook, airbnd, react website

how to check if application is SPA or MPA

> > > go to website >> inspect >> Network >> Docs >> select preserver the logs checkbos >> see no of html page {MPA:multiple,SPA:1 or None}

# How is react Declarative?

Declarative is the way of writing the code that reflects what you wanted to do and not how you wanted to do.
Javascript is a imperative language. whereas HTML is declarative

# creating element in html with javascript

```Javascript
<body>
    <div id="root">
        <h1>HTML Render</h1>
    </div>

    <script>
        const h1 = document.createElement("h2");
        h1.textContent = "Javascript Render"
        const root = document.getElementById("root")
        root.appendChild(h1)
    </script>
</body>
```

# creating element in html with ReactJs

There are two ways to work with external library such as ReactJS:

1. Either download the library and then install it.
2. Using CDN Links- Content Delivery network (recommended)

Note:: As we are using CDN. work with live server is recommended for better output.

Steps::

1. Adding below cdn links in html head;
   <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
   <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

2. create element = React.createElement(tag,{class,id},content)
   2 ways
   a. React.createElement("tagName", {className:"heading", id:"head", children:"Text content"})
   b. React.createElement("tagName", {className:"heading", id:"head"}, "Text content")

3. To render element = ReactDOM.createRoot(element).render(element to be rendered)
   ReactDOM.createRoot(document.getElementById("idName")).render(ElementName)
   ReactDOM is a virtual DOM

```javascript
HTML FIle
rest is same as above
<body>
    <div id="root">

    </div>
    <script src="react.js"></script>
</body>


JS FIle
const h1 = document.createElement("h2");
h1.textContent = "Javascript Render"
const root = document.getElementById("root")
root.appendChild(h1)
console.log(h1)
// console return or print the element/node

type1::
const reactHeading1 = React.createElement("h1", {className:"heading", id:"head", children:"Text content"})
ReactDOM.createRoot(document.getElementById("root")).render(reactHeading2)
console.log(reactHeading1)
// console return or print the object with keys as props which have all the above properties of create element

type2::
const reactHeading2 = React.createElement("h1", {className:"heading", id:"head"}, "Textcontent")
ReactDOM.createRoot(document.getElementById("root")).render(reactHeading2)
console.log(reactHeading2)
// console return or print the object with keys as props which have all the above properties of create element

ImageElement::
const imgElement = React.createElement("img", {src:"https://files.codingninjas.in/coding-ninjas-24647.png"});
ReactDOM.createRoot(document.getElementById("root")).render(imgElement)

```

# Virtual DOM

{Document: html, Object:Node Element, manipulation:Editing}
Javascript let us create element using by directly manipulating the DOM but react dont allow

Powerfull feature of React

Defination :: The virtual DOM is a programming concept, where an ideal or virtual representation of a UI is kept IN MEMORY and synced with the real DOM.

## Working of DOM::

So basically there a three DOM 1. Original DOM. 2.PreUpdated Virtual DOM 3. Virtual DOM, so now if there is any change in any node in the Tree then 2 dom is updated and compare with the whole tree of 3 DOM which is equivalent to 1 DOM, and make chage on that node only that is changed and then 3 dom updates the 1 dom which prevents reloading the whole page and only making change in that particular node only, which then make the page faster and efficient.

Which ever node is Created using the "ReactDOM.createRoot" will be the HEAD of the tree doesnot matter if it is the first/last/anyother node of the html page.

Difference in React DOM and JS DOM =>
When we make some changes in a node in the DOM tree using JavaScript, then all the children of that node, including the node itself, get re-rendered. When we make some changes in a node in the DOM tree using React, only that particular node gets re-rendered.

# React with JSX (Javascipt XML)

JSX is the extension to javascript. It is just a Syntactic sugar which provide more easier way to write code.

Brower only understand HTML,css, JS, It is the compiler which convert JSX or any other library in JS form before reaching the brower

# Bable => converts JSX to js

Def:: It is a javascript Compiler.

Two way to use.

1. Install it manually
2. Use CDN = <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

### Steps to use babel in our Code

1. Add CDN => <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
2. Specify the line which use JSX by writing [type="text/bable"] in the script tag of external JS => <script src="react.js" type="text/babel"></script>

[JSX to JS convertor](https://babeljs.io/)

Note:: If the element is used as root and it has some text in it then it will be replaced with the text content of the rendered tag.

```Javascript
HTML module

head
>>CDN of bable
/head
<body>
    <div id="root">

    </div>
    <script src="react.js" type="text/babel"></script>
</body>

JS module

// JSX way of writing
const h1Ele = <h1>Hello JSX</h1>

ReactDOM.createRoot(document.getElementById("root")).render(h1Ele)
```

### React Fragments or Empty Fragment:

React dont allow assigning multiple adjcent element unless we use a wrapper div or react fragment or empty fragment

React.Fragment will help in wrapping the adjacent element to be wrapped in the parent element without using extra wrapper div.

Earlier version = <React.Fragment>element1 element2</React.Fragment>
current version = <>element1 element2</>

```Javascript

wrong way of JSX writing
const h1Ele = <h1>Hello JSX</h1> <p>Hello JSX</p>

right way of JSX writing
1. way
const Element = <React.Fragment>
    <h1>Hello JSX</h1>
    <p>Hello JSX</p>
    </React.Fragment>

2. Way
const Element2 = <>
    <h1>Hello JSX</h1>
    <p>Hello JSX</p>
    </>

ReactDOM.createRoot(document.getElementById("root")).render(h1Ele)

```

# Components in React (also called as composables)

Components are very similar to JS function in react js ie can be used any where multiple times.

Two ways to create components in react

1. Functional (similar to Function in js)
   a. Normal function
   b. Arrow function
   Rules:: 1. First letter should be capital of the Component fn. 2. calling the component => <FunctionName/> , wrong way functionName() 3. If we call it as FunctionName() then it will work but will not considered as component.
2. Class Based components (similar to class in js)

```Javascript
function App(){
    return (
        <>
        <h1>Hello JSX</h1>
        <p>Hello JSX</p>
        </>
    )
}
ReactDOM.createRoot(document.getElementById("root")).render(<App/>)
```

## b. Arrow function for Creating React components

    1. Implicitly return so no need to write return and curly braces or even parenthesis
            ie const App = ()=>{return(tag)};
               const App = ()=>(tag)
               const App = ()=>tag
    2. Use first letter capital
    3. Easy to use

### To render more than one component use EMpty fragment

    ReactDOM.createRoot(document.getElementById("root")).render(<> <App/> <Nap/> <Lap/> </>)

```javascript
const App = () => {
  return (
    <>
      <h1>Far end tag are the React Frament Tags</h1>
      <p>This is the JSX way of writing the code</p>
      <p>Using arrow fn as a react component</p>
    </>
  );
};
OR;

const Nap = () => (
  <>
    <h1>Far end tag are the React Frament Tags</h1>
    <p>This is the JSX way of writing the code</p>
    <p>Using arrow fn as a react component</p>
  </>
);

OR;
const Lap = () => (
  <>
    <h1>Far end tag are the React Frament Tags</h1>
    <p>This is the JSX way of writing the code</p>
    <p>Using arrow fn as a react component</p>
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {" "}
    <App /> <Nap /> <Lap />{" "}
  </>
);
```

# Summary

1. Declarative through JSX
2. Component Based Through function and class
3. Efficient for creating SPAs through VirtualDOM

---

# JSX In Depth

Defi:: Syntax extension to javascript
Features of JSX:

1. React embraces the fact that rendering logic shoud be coupled with UI logic.
2. Helpful as visual aid when working with UI inside JS.
3. React separates concerns instead of separating technologies.
4. It also allows react to show more useful Errors and warning messages

### will learn

1. Basic Syntax of jSX.
2. How to embed JS inside JSX.
3. To create static UIs in React using JSX.

# Embedding and Expression JS in JSX:

If a variable is declared as null || undefined || boolean, it will not show on the page.
Boolean value can be converted to string to render on page.

We can only render valid expression ie anything that resolve to a valid value. can be embedded in JS.

In below code outer fn doesnot have access to age where as innerfn have.

```Javascipt
const outerfunction = (b)=>{
    let c = 30
    console.log("Note:: Age is not in the Scope/lexical environment of outerfunction")
    const sum = b + c
    return sum
}

//
const header = <h1>Assiging JSX Expression a javascript variable</h1>

function Element (){
    var name = "Rahul"
    const age = 10
    const value = null
    const boolean = true
    let undef;
    const innerfunction = (b)=>{
        let c = 30
        const sum = age + b + c
        return sum
    }
    return (
        <>
            <h1> String: {name} !! </h1>
            <h2> Number {age} </h2>
            <h3> Null value: {value} </h3>
            <h3> Boolean value: {boolean} </h3>
            <h3> Boolean value converted to string: {boolean.toString()} </h3>
            <h3> Undefined value: {undef} </h3>
            <h3> Innerfunction: {innerfunction(20)} </h3>
            <h3> Outerfunction: {outerfunction(20)} </h3>
            <h3> JSX Expression: {header} </h3>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Element/>)
```

# Rendering Array and Objects:

## Array

Array can be rendered directly completely  
Object can be renderd using dot notation ie the value only at once.

"For loop" does not return anything in js ie why we cannot use forLoop for rendering however for manipulation of value of array or object it can be used.
So MAP function is used becoz it return the value.
Rules:: write whole map fn and its inner value in curly braces,,, see ele and wholefn
{list.map((ele)=><p>{ele}<p/>)}

```JavaScript
function App (){
    const topic = "Rendering Array and Objects"
    let list = [10,20,50,60,90,70,"r","a","j"];
    let array = [10,20,5,60,90,7];
    const filterArray = array.filter(num=>num%2==0)

    var object = {key:"Rahul", value:24, bool:true}
    return(
    <>
        <h1>{topic}</h1>

        <p>Render Array : {list}</p>

        {list.map((ele)=><p>{ele}</p>)}

        // wrong
        {list.map((ele)=><ol><li>{ele}</li></ol>)}

        //right
        <ol> {list.map((ele)=><li>{ele}</li>)} </ol>

        {filterArray.map((ele)=><h3>{ele}</h3>)}

        <div className="abc">{array}</div>
    </>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)
```

## Assigning Unique Keys:

Keys will be passed as Props

Giving Unique key to each element of Array is very Important in while rendering in array so that in future if there is any change it can be identified and changed.

"key" is a property of list in React js

```Javascript
function App (){
    const topic = "Assigning Unique Keys"
    let list = [10,20,50,60,90,70,"r","a","j"];
    return(
    <>
        <h1>{topic}</h1>

        <ol> {list.map((ele, index)=><li key={index}> {ele} </li>)} </ol>

    </>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)
```

## creating Table using React:

Always add thead,tbody,bfooter while making table to avoid all kind of error.

Also see how to render image url in last td of row. [<td><img src={student.imgUrl}></img></td>]

<table> >>>> <thead><tr><td> >>>> <tbody><tr><td> >>>> <tfoot><tr><td> <<<< <table>

NOteL::HW practise rendering image inside a row

```Javascript
function App (){
    const students = [
        { name: 'John', age: 20, marks: 85 },
        { name: 'Alice', age: 22, marks: 90 },
        { name: 'Bob', age: 21, marks: 78 },
        { name: 'Emma', age: 19, marks: 95 }
    ];
    return(
    <>
       <h1>Student Table</h1>
       <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>marks</th>
                </tr>
            </thead>
            <tbody>
            {students.map((student, index)=>(
                <tr key={index}>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.marks}</td>
                <td><img src={student.imgUrl}></img></td>
                </tr>
            ))}
            </tbody>
       </table>
    </>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)
```

# Conditional based component Rendering 1

### using if

ShowStudents and ShowItems are the functional component and student is a variable

```Javascript
  function App(){
    let student = false;
    if (student){
        return <ShowStudents/>
    }
    return (
        <>
            <ShowItems/>
        </>
    )
  }
  const rootElement = ReactDOM.createRoot(document.getElementById("root"));
  rootElement.render(<App/>);
```

## Conditional based component Rendering 2

### using Ternary Operator:

Inside JSX ie after the return in component, we can only use [ternary operator (a>b?T:F), &&, ||] and not the Javascript

```Javascript
  function App(){
    let logedIn = true
    return (
        <>
            <h1>Hello,{logedIn?"Alexa":"User"}!</h1>
        </>
    )
  }
  const rootElement = ReactDOM.createRoot(document.getElementById("root"));
  rootElement.render(<App/>);
```

### using [&&, ||] Operator:

All values except {null, 0, undefined, false, ""(empty string)} are truthy values in Javascript
use chrome Console to check these fn of OR AND
Basic rules of && operator: [False,Truth] 1. It return LAST TRUTHY value, if all the value are truthy. 2. It return FIRST FALSEY value, if value are truthy and falsey both

    Basic rules of || operator:[False,Truth]
        Conditions:
        The conditional OR operator returns the first truthy value encountered, or the last falsy value if no truthy values are found. Additionally, if all values are truthy, it returns true; if all values are falsy, it returns false.
        1. It return the LAST TRUTHY VALUE
        2. It return the FIRST FALSEY VALUE
       ### Lecture say:: First TRUTHY and LAST Falsey

If loggedIn is false it will not display on the screen but if it is true then last truthy value will get displayed
{loggedIn && <p>Welcome to the Portal</p>}

```Javascript
function App(){
    let loggedIn = true
    return (
        <>
            <h1>Hello,{loggedIn?"Alexa":"User"}!</h1>
            {/* Logic :: If loggedIn is false it will not display on the screen but if it is true then last truthy value will get displayed */}

            {loggedIn && <p>Welcome to the Portal</p>}
        </>
    )
  }
  const rootElement = ReactDOM.createRoot(document.getElementById("root"));
  rootElement.render(<App/>);

```

### using OR Operator

    ### Lecture say:: First TRUTHY and LAST Falsey

```Javascript
function App(){
    let loggedIn = true
    let firstName = "Alexa"
    let lastName = "Diaz"
    return (
        <>
            {/* or operator return first truthy ie why else firstName will be displayed */}
            <h1>Hello,{loggedIn?lastName || firstName : "User"}!</h1>
            {/* Logic :: If loggedIn is false it will not display on the screen but if it is true then last truthy value will get displayed */}
            {loggedIn && <p>Welcome to the Portal</p>}
        </>
    )
  }
ReactDOM.createRoot(document.getElementById("root")).render(<App/>)
```

# Events in JSX

NOTE::Only pass the functionname without parenthis on event handling if we want to pass the argument then use inline arrow fn and the we can use the parenthesis

1. onClick event
   onClick={functionName without parenthesis} >> only pass the ref of the fn otherwise it will run on compilation

2. dynamic rendering of node
   If we change in the variable on click we have to render that component in which the variable is present. but in rerendering only that tag/node will be rerendered in which there is a change.

3. use of Inline Arrow fn in onClick
   onClick={() => functionName(Arguments)} >> To pass argument to the onClick function then we will use inline arrow function.

4.

```Javascript

<button onClick={functionName without parenthesis}>1</button>
<button onClick={() => functionName(Arguments)}></button>

EG::

function one(){
    score++
    root.render(<App/>)
}

function addScore(num){
    score+=num;
    root.render(<App/>)
}

const App = ()=>(
    <>
        <h1 >Score Keeper</h1>
        <p>Score: {score}/{wicket}</p>
        <button onClick={one}>1</button>
        <button onClick={()=>addScore(2)}>2</button>
    </>
)
ReactDOM.createRoot(document.getElementById("root")).render(<App/>)

```

# Forms in JSX

## synthetic Events:

    It is wrapper around DOM element event to prevent default event handling of any element, eg submit button has some builtin internal event reload, so prevent this inbuilt event synthetic event is used.
        So now on click of submit the fields will not get empty.

Defi::
synthetic events are a wrapper around the event object of the Real DOM. We can stop the default behavior of a Synthetic event by calling preventDefault on the event object as returning false will not work.

preventDefault on the event object as returning false will not work.

```Javascript

function handleDefault(event){
    event.preventDefault();
}
const Forms = ()=>(
    <>
        <form onSubmit={handleDefault}>
            Score:<input/>
            &nbsp;
            Comment:<input/>
            &nbsp;
            <button>Submit</button>
        </form>
    </>
)
```

# Extracting value from Form:

## ref create, array of html,Uncontrolled component

1. Create-Ref:: Access data directly from the Node.

2. Creating the array of html tags using unshift

3. Uncontrolled component = React is meant for controlled component. but when we use createRef in any component it becomes UNControlled component. so if we dontuse the render <App/> in form submit after submit the input-comment-tag will get blank but not the input-score-tag that means the comment tag doesnot depends on the react-Component that is why it is called as uncontrolled component as it is directly accessing the node from the DOM Tree.

```Javascript
1.
    let nodeInput = React.createRef();
    <input ref = {nodeInput}/>
    console.log(nodeInput.current.value)


function handleDefault(event){
    event.preventDefault();
    if (hit==="W"){
        wicket++
    }else{
        score+=hit
    }
2.
    eachBallRes.unshift(
        <span>{`${hit}, ${nodeInput.current.value}`}</span>
    )

    hit = 0;
    nodeInput.current.value = "";
3.
    root.render(<App/>)
}
```

# Good Bye CDNs:: (Using Webpacks)

- Drawback of CDN

  - only works if internet is connected.
  - Create too much mess in the module if we use alot of library so not look good.
  - Separation of different component in different modules/files is not possible we have write all code in one file only.
  - If we add multiple scripts to single HTML file then the becox of the below it there will be an issue:
    - Script are loaded synchronously from top to bottom.
    - script at top doesnot have acces to the script at bottom

- Overcome Drawback.

  - Webpack is a module bundler (combine multiple JS and CSS files along with the dependencies of files with eachother).

  * It also prepare the graph of dependenies of modules with each other. called as Internal Dependecy Graph.
  * The entry property in the webpack configuration file can be set to a string or an array or strings which are paths to the files in your application. Webpack will put these files at the top of its internal dependency graph

  - Webpack is used to managed Multiple JS modules in HTML page.
  - How to configure of webpack below :-

- Correct way of creating React APP
  By using "Create React App".

# Webpack of Configuration: (webpack.configure.js)

## Loader allow trasformation of different files into valid modules

steps:

1. Entry point (path or filename) => eg index.js or src/index.js
2. check all the imports
3. Then webpack transform internally using LOADERS eg [SASS to CSS] or [ES6 to ES5] or [mjs to js] etc
4. Exit point/output (path or filename) this feature require PLUGINs => eg dest.js or src/build.js

# Create React App [Tool]:-

So to avoid doing all the above steps manually There is a tool "Create-react-app" 1. Nodejs NPM - It is runtime Environment 2. Chrome 3. Visual Studio

## Command Line tool CLI ::

- to know preset working directory = pwd
- list all director = ls
- change director = cd folderName or cd press TAB key
- to go back from current directory = cd ..
- clear the screen = cls
- exit the Command Prompt = exit
- list the contents of the current directory = dir

* Pls go to the directory you want to create app then using above cli command and then get start with below:

## Install:

1. install npm i -g create-react-app or sudo npm i -g create-react-app
   or
   Incase not install react globally then use below command to install and create app simultaneously
2. npx create-react-app ProjectName

## Create the Project

2. To start with project in CLI type => create-react-app projectName
   This will create a folder name as projectName with all the dependencies installed in it
3. Now App is create and to run the app use =>> "npm start"

# Folder structure

-Public contains the Manifest.json which has all the information of the project such as name,shortname,descript etc.
-SRC = in src expcept index.js we can remove any file as index.js is the entry point.
-Package.json file contains all the dependencies along with the version,metaData and scripts of the project

# EXport and Imports

Note we cannot use export before initializing and declaring both otherwise it will throw error

The the scope/accessibility of any variable,fn,class in a module are only limited to file/module in which they are create. unless they are exported

1. Named Export = these can be multiple
   - indiviual export
   - export at bottom

- use curly brase for importing
- to change name =
  -"export {name as name2}" and then "import {name2} from "path""
  or
  -"export {name}" and then "import {name as name2} from "path""

- for multiple export use curly braces

```javascript
// file 1

//individual export
export let a = "let";
export var b = "var";
export const c = "const";
export function d() {
  return "function";
}
export const e = function () {
  return "function expression";
};
export const f = () => {
  return "arrow function";
};

// export at bottom all at once
let g = "let";
var h = "var";
const i = "const";
function j() {
  return "function";
}
const k = function () {
  return "function expression";
};
const l = () => {
  return "arrow function";
};

export { g as z, h, i, j, k, l };

// file 2
import { a, b, c, d, e, f, z, h, i, j, k, l as k } from "./a.js";
```

2. default Export = this can be only one
   not need to import in curly braces
   name can be change while importing

```javascript

//file1

export let a = "let";
const b = "const";
export default b

//file 2
import {a} from "path"
import b from "path" give the output of b
import c from "path"  also give same output as above b

```

# Week2

# Class based Component

- using render function is important in class based components
- Also class have to extend react component

```javascript
import React from "react";
class App extends React.Component {
  render() {
    return <h1>welcome</h1>;
  }
}
OR;
import { Component } from "react";
class MovieCard extends Component {
  render() {}
}
```

# State in React

- Acc to react if you want to store data use react "State"
- State is a built in object
- State should be created in the Class inside the construtor with the super as class is extend of Component
- state is called as single source of Truth that means all the data should come from single source.

```javascript
import {Component} from "react";
class MovieCard extends Component{
    constructor(){
        super()
        this.state={
            title:"The Avengers",
            plot:"Anime",
        }
    }
      render(){
      const {plot} = this.state
       return(
        <div className="title">{this.state.name}</div>
        <div className="plot">{plot}</div>
       )
      }
}
```

# Binding "this" of the class

- either use below statement inside the "construtor"
  [this.fnName = this.fnName.bind(this)]

- or use below statement in the tag
  [onClick = {this.fnName.bind(this)}]

- or use arrow fn becoz it binds the "this" to the class automatically - No need to DECLARE (const,let,var) just "name = arrowfn" - fnName = ()=>{console.log(this)}

- Note - Avoiding the two will give undefied on console of "this" becoz we write "onClick = {this.fnName}" inside the fn that measn only reference is passed.

- State is immutable in React = False

```javascript
import {Component} from "react";
class MovieCard extends Component{
    constructor(){
        super()
        this.state={
            title:"The Avengers",
            plot:"Anime",
            price: 199,
            rating:8.9
        }
        ## OneWay
        this.addStars = this.addStars.bind(this)
    }

    ## second Way
      - in the tag onClick={this.addStars.bind(this)}

    ## third Way
      - use arrow fn becoz it binds the "this" to the class automatically
      - No need to declare
      addStars = ()=>{console.log(this)}

    addStars(e){
        console.log("Plus button clicked")
        console.log(this)// will give undefine if we will not bind
    }
    render(){
        const {title,plot,price,rating} = this.state

       return(
        <img onClick={this.addStars.bind(this)} className="str-btn"  alt="plusButton" src="https://cdn-icons-png.flaticon.com/128/1828/1828919.png" />

       )
      }
}
```

# setState

- setState wil update the state ie constructor inside the class and also rerender the component so we need not to call render manually

- If we want to chage from previous state use secondway else if completely change use OneWay

- oneWay:
  this.setState({
  count: this.state.count + 0.5
  })

- secondWay: take arrow fn and previous state as an argument
  this.setState((preState)=>{
  return{
  count:preState.count+0.5
  }
  })

```javascript
import {Component} from "react";

class MovieCard extends Component{
  constructor(){
    super()
    this.state={
      count = 0;
    }
  }
  increaseCount = ()=>{
    oneWay
    this.setState({
      count: this.state.count + 0.5
    })
    secondWay
    this.setState((preState)=>{
      return{
        count:preState.count+0.5
      }
    })
  }
  render(){
    <div onClick = {increaseCount}>{count}</div>  }
}
```

## setState -> Asynchronous of Setstate

- set state is a asynchronous Operation
  That means if we console the changed value it will show prevvAlue only becoz that consoled runs before even the change.
  Still if we want to acccess then we can give a call back fn in setState and console the value there

```javascript
eventHandler = ()=>{
-- All the below fn are inside the Component Class

    oneWay
    this.setState({
      count: this.state.count + 0.5
    }, ()={
      console.log("this.state.count :" + this.state.count)
    })

    secondWay
    this.setState((preState)=>{
      return{
        count:preState.count+0.5
      }
    }, , ()={
      console.log("this.state.count :" + this.state.count)
    })
  }
```

## setState -> Batching

- if we write this.setState multiple time in a fn, React will batch them into one (lastOne)automatically
- So all the below four calls will only be considered as One, by one means it will render the component only once. but the change will be done by all of them

- If we console any thing inside the render fn it will be consoled twice one by the virtualDOM and another by Original DOM. and this also becoz APP.js is in Strict Mode.

```javascript

-- All the below fn are inside the Component Class

eventHandler = ()=>{

    this.setState({
      count: this.state.count + 1
    })

    this.setState({
      count: this.state.count + 3
    })

    this.setState({
      count: this.state.count + 2
    })

 Only this will Work above all call be be ignored
    this.setState({
      count: this.state.count + 0.5
    })

    render(){

    }
  }
```

## Two ways to render element in Conditional rendering

```javascript
// fav?unfavButton:Favourite buttton
{
  fav ? (
    <button onClick={this.handleFavourite} className="unfavourite-btn">
      un-favourite
    </button>
  ) : (
    <button onClick={this.handleFavourite} className="favourite-btn">
      Favourite
    </button>
  );
}
{
  fav ? "un-favourite" : "favourite";
}

//changing class name and text content :: use doublequote in both className and textcontent
<button
  onClick={this.handleFavourite}
  className={fav ? "favourite-btn" : "unfavourite-btn"}
>
  {fav ? "Un-favourite" : "Favourite"}
</button>;
```

## Props and Default Props::

- Props are similar to arguments in fn, props are arguments of component.

- props Flow should be from Parent to Child ie arguments/props can be passed parent component to child component, siblings cannot pass the argument to eachother

- Value of props cannot to MODIFIED or CHANGEd unlike State

- any Datatype and datastructed can be passed as a prop in component eg <componentName name="rahul"/> and to access this.props.name

- for ClassComponet use this.props = const {destrucure props object} = this.props
- for functionalComponet use argument (props) = const {destrucure props object} = props

- default props =>> At the time of calling the Component
- It should be written outside the component ie mainpage directly
  componentName.defaultProps = {
  name: "StudentName",
  age: "Not Available",
  }

```javascript
import { Component } from "react";

//For classComponent
class Student extends Component{
  const{name,age,abc, etc,etc} = this.props
    render(){
        return(
            <h1>Hello, {name}</h1>
            <h1>Hello, {etc}</h1>
            <h1>Hello, {age}</h1>
        )
    }
}
         OR
class Student extends Component{
    render(){
        return(
            <h1>Hello, {this.props.name}</h1>
        )
    }
}
    OR
//for function components
function Student(props){
    const {name,age,marks} = props
    return(
        <>
        <h1>Hello, {name}</h1>
        <h1>Age: {age}</h1>
        <h1>Marks: {marks}</h1>
        </>
    )
}
export default Student

>>> AT render component
function App(){
  return (
  <>
    <Student name = "rahul" age= {30} marks = {60}/>
    <Student name = "jay"/> //forgot to pass props
    <Student name = "raj"/> //forgot to pass props
  </>
)}

//outside the fn component
Student.defaultProps = {
  name:"Student",
  age: "N.A",
  marks:"NA"
}

export default App;


```

# Styles in React

- Types of styling:

  1. using CSS/ css-file =>>> Inline to Internal
  2. Inline styling - usually not preferred >>> style={{ styles1, style2 ..etc}}
  3. Styled components ==>> syntax :: const Name = styled.tagName`CSS-original-way` and usage:: <name> </name  >
     - It is library. [npm i styled-components]
     - Use first letter capital
     - It is css in Javascript.
     - Controlss the Scope ie it has local scope.
     - deletion of unused styling component become easy.

  - USing PROPS
    implement = <name color="red"> </name  >
    useage = background: ${(props)=>props.color};

  4. Css Modules

  - name.css => css file created in src,irresptive of its import in any component module if there is a element with same class name then it will have effect in that element also , so CSS file is a global module. therefore below

  - name.module.css - Now this module does not have global scope and this module will implicitly default exports an object during import [import headStyle from "./path"]. IMport the file in the component module whereit is needed.

  - usage = [className = {headStyle.classname}]

- NOte:: index.css in react app is a global file that applies to all the module's react component so that will be an disadvantage becoz many component could have similar classname or id.

```javascript


inline styling
<div style=
{
  {
      width:"100%",
      height:70,
      background:"lightsteelblue",
      display:"flex",
      justifyContent:"space-between"
  }
}>
This is just a Div
</div>

Inline to Internal
<div className = "container" style={styleEle.outerDiv}>
This is just a Div
</div>
const styleEle = {
  outerDiv:  {
      width:"100%",
      height:70,
      background:"lightsteelblue",
      display:"flex",
      justifyContent:"space-between"
  }
}


Styled component and props
syntax => styled.tagName`CSS-original-way`
import styled from "styled-components";
const Nam = styled.div`
    width: 100%;
    height: 70px;
    background: ${(props)=>props.color};
    display: flex;
    justify-content: space-between;
    visibility:${(props)=>props.show?"visible":"hidden"};
    &:hover{color:white;
    background:black
            }

`

<Nam className="title" color="red" show={true}>
  use other html here
</Nam>

CSS module

```

# week 3

# Component Life Cycle::

- Lifecycle is the series of stages throgh which a component passes from the creation/insertion into the DOM until its removal from the DOM or UnMounted.

- different Phases of lifecycle :

*     Mounting>>>Updating>>>Unmounting>>Error handling

  1. Mounting
     when a instance of a Component is being created and inserted into the DOM
  2. Updating
     when a Component is being rerendered as a result of changes done to its props or state.
  3. UnMounting
     when a Component is being removed from the DOM
  4. ErrorHandling
     when there is an error during rendering.

## Side-effect::

- SideEffect are actions which are not predictable because they are actions which are performed with the "outside world"
- Outside world means ::
  1. Interaction with the browser APIs (confirm,alter etc)
  2. Native DOM Methods
  3. Fetching the Data using APIs.
  4. Subscribing to some services such as database.

## Mounting Phase

- Sequence of Lifecycle in mounting Phase

  1. constructor()
     is used When::

     - there is need to define state
     - there is need to change state using setState
     - there is a need to bind the event handler to the class
     - avoid any sideEffects or setState.

  2. Static getDerivedStateFromProps() >>>>> rarely Used
     is Used When::

     - invoked just before the render function
     - setState based on the Props
     - avoid any sideEffects or setState.

  3. render()
     is Used When::

     - need to retun JSX.
     - avoid any sideEffects or setState.

  4. componentDidMount()
     is Used When::
     - is invoked when the component and all its children is mounted on the DOM
     - sideEffects can be performed ie setState, nativeDOM, API etc

### Implementations of Mounting Phase of lifeCycleComponent

- getDerivedStateFromProps is a static method that means always use as static keyword before fn.

- see the console of the following class implemention so as to observe the sequence of fns, state and render.

- getDerivedStateFromProps must always return something if passed condition satisfied else return null.

- All the four will always get to work without being call.

- using setState will cause below error if used in::
  constructor = give error as component is not mounted
  render = it will render infinitely becoz setstate bydefault render the component
  getDerivedStateFromProps = give error bocoz sideeffect is not allowed
  componentDidMount = will only work here

- NOTE :: All the four fn will occur only once ie mounting will happen only ONE TImE incase there is change in the state and props being passed from parent then Updating phase will work in rerendering.

```javascript
import React from "react";

class ComponentA extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Rahul",
    };
    console.log("1. This is contructor of Component A");
  }

  static getDerivedStateFromProps() {
    console.log("2. getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    this.setState({
      name: "raj",
    });
    console.log("4. componentDidMount");
  }

  render() {
    console.log("3. This is render of Component A");

    return (
      <>
        <h1>{this.state.name}</h1>
      </>
    );
  }
}

export default ComponentA;
```

### Executing two components A and B to see result

- Things to observer here is that =>> as all the component are called in APP.js A after B so both are chidren of app.js also A and B are siblings

  so first children ie componentA's constructor>>>getDerivedStateFromProps>>render then second children ie componentB's constructor>>>getDerivedStateFromProps>>render will be called after that componentDidMount of B then componentDidMount of A will be called.

```javascript
component-A

import React from "react";

class ComponentA extends React.Component{
    constructor(){
        super();
        this.state = {
            name:"Rahul"
        }
        console.log("1A. This is contructor of Component A")
    }

    static getDerivedStateFromProps(){
        console.log("2A. getDerivedStateFromProps Component A")
        return null
    }

    componentDidMount(){
        console.log("4A. componentDidMount Component A")
    }


    render(){
        console.log("3A. This is render of Component A")

        return(
            <>
                <h1>{this.state.name}</h1>
            </>

        )
    }

}

export default ComponentA


Component-B

import React from "react";

class ComponentB extends React.Component{
    constructor(){
        super();
        this.state = {
            name:"GayatriPrasad"
        }
        console.log("1B. This is contructor of Component B")
    }

    static getDerivedStateFromProps(){
        console.log("2B. getDerivedStateFromProps  Component B")
        return null
    }

    componentDidMount(){
        console.log("4B. componentDidMount  Component B")

    }


    render(){
        console.log("3B. This is render of Component B")

        return(
            <>
                <h2>{this.state.name}</h2>
            </>

        )
    }

}

export default ComponentB
```

### componentDidMount Working

- fetching data and storing it in the state

```javascript

rest all the fn are same as above except there is addition of users:[] in this.state and then the users are rendered in render fn().

componentDidMount(){
    console.log("4A. componentDidMount Component A")
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => this.setState({users:data}))
}
```

## Updating and unmounting Phase

- Sequence of Lifecycle in Updating Phase

  1. static getDerivedStateFromProps()
     rarely used
     Noside Effects allowed

  2. shouldComponentUpdate()
     rarely used
     Noside Effects allowed
     for optimising the perfomance
     to avoid rerendering the component based on boolean
     it return the boolean value

  3. render()
     Noside Effects allowed
     pure function

  4. getSnapShotBeforeUpdate()
     rarely used
     return SnapShot
     invokes when virtualDOM changes to Real DOM

  5. componentDidUpdate()
     side Effects allowed
     componentDidUpdate will be invoked at each rerender whereas
     componentDidMount will be invoked only ONCE at time of render.

- Sequence of Lifecycle in Unmount Phase 1. componentWillUnmount()
  invoked when component is unmounted/destroed
  only once
  Noside Effects allowed few exception
  But unsubsribing any services in allowed,clear timer if any So as to empty the memory

            USECASE :: While building an app that fetches movies whenever you type something in the searchbar. To optimize for slow network speeds, you want to cancel the previous requests if a new one is to be made immediately.
                    component Will Unmount() is a recommended method to unsubscribe events or cancel previous requests. In this case, the previous request isn't required to be sent as it may cause unnecessary API calls and increased network costs. Therefore, we are canceling the request.

### implementation of Updating phase

- see the console on rendering and on click of button:: below is result how it works the snchronous manner of the fn.

0T. Mounting-Phase Constructor
1T. Mounting-Phase getDerivedStateFromProps
3T. Mounting-Phase render
4T. Mounting-Phase componentDidMount

---

1T. Mounting-Phase getDerivedStateFromProps
2T. shouldComponentUpdate
3T. Mounting-Phase render
4T. getSnapshotBeforeUpdate
5T. componentDidUpdate

---

6T. componentWillUnmount

```javascript
import React from "react";

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    console.log("0T. Mounting-Phase Constructor");
  }

  static getDerivedStateFromProps() {
    console.log("1T. Mounting-Phase getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("2T. shouldComponentUpdate");
    return true;
  }

  render() {
    console.log("3T. Mounting-Phase render");
    return (
      <>
        <h1>Timer</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleIncrease}>Click</button>
      </>
    );
  }

  handleIncrease = () => {
    console.log("handle increase");
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  componentDidMount() {
    console.log("4T. Mounting-Phase componentDidMount");
    console.log("------------------------------------");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("4T. getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("5T. componentDidUpdate");
    console.log("------------------------------------");
  }
}

export default Timer;
```

### implement componentDidUpdate

- using timer app

```javascript
import React from "react";

class Timer extends React.Component{
    constructor(){
        super()
        this.state={
            time:0
        }

        this.timer = 0
        console.log ("0T. Mounting-Phase Constructor")
    }

    static getDerivedStateFromProps(){
        console.log ("1T. Mounting-Phase getDerivedStateFromProps")
        return null
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log ("2T. shouldComponentUpdate")
        return true
    }


    render(){
        console.log ("3T. Mounting-Phase render")
        return(
            <>
                <h1>Time Spent :: {new Date(this.state.time*1000).toISOString().slice(11,19)}</h1>
                {/* toISOString becoz Date class will return the object
                and in react object cannot be rendered directly */}
            </>
        )
    }


    componentDidMount(){
        console.log ("4T. Mounting-Phase componentDidMount")
        console.log ("------------------------------------")

        // either of the below two will work
        this.timer = setInterval(()=>{
            this.setState((prevState)=>{
                return {time:prevState.time+1}
            })
        }, 1000)


        // this.timer = setInterval(()=>{
        //     this.setState((prevState)=>({time:prevState.time+1}))
        // }, 1000)

    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log ("4T. getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate(){
        console.log ("5T. componentDidUpdate")
        console.log ("------------------------------------")

        instead of using it "componentDidUpdate" now we will use the clear interval in "componentWillUnmount"
        // if(this.state.time===5){
        //     clearInterval(this.timer)
        // }

    }

    componentWillUnmount(){
        console.log("End - componentWillUnmount")
        clearInterval(this.timer)

    }
}


export default Timer
```

## Unmounting

- above code will remain same , change in the APP.js file
- now instead of using clearInterval in "componentDidUpdate" now we will use the clear interval in "componentWillUnmount"
- Also the setstate in componentDidUpdate

```javascript
import { Component } from "react";

import Timer from "./timerComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      mount: false,
    };
  }

  handleMount = () => {
    this.setState((prevState) => {
      return { mount: !prevState.mount };
    });
  };
  render() {
    return (
      <>
        <button onClick={this.handleMount}>
          {this.state.mount ? "UnMount" : "Mount"}
        </button>
        {this.state.mount ? <Timer /> : null}
      </>
    );
  }
}

export default App;
```

## What all Arguments does lifecycle Component Acceps

- shouldComponentUpdate(nextProps, nextState) - render based on nextProps or nextState
- getSnapshotBeforeUpdate(prevProps, prevState) - return object
- componentDidUpdate(prevProps, prevState, snapShot) - snapShot object received from above functions.

# Sequence of operations and the control over the operations

- Fist we have shifted setstate from mountingPhase=(componentDidMount) to updatePhase=(componentDidUpdate) so as to get control over the start stop of timer becoz in mounting phase it is getting started automatically once the app Start but now if we use setstate in componentDidUpdate it will rerender the component each time (time may be 1 sec or any )the state changes so that will make the application slow therefore now to rerender the app only once after evey 5 sec or any we will make use of updatePhase=(shouldComponentUpdate).

0T. Mounting-Phase Constructor
1T. Mounting-Phase getDerivedStateFromProps
3T. Mounting-Phase render
4T. Mounting-Phase componentDidMount

---

1T. Mounting-Phase getDerivedStateFromProps
2T. shouldComponentUpdate
3T. Mounting-Phase render
4T. getSnapshotBeforeUpdate
5T. componentDidUpdate

---

Last = componentWillUnmount

```javascript

timer component

import React from "react";

class Timer extends React.Component{
    constructor(){
        super()
        this.state={
            time:0
        }

        this.timer = 0
        console.log ("0T. Mounting-Phase Constructor")
    }

    static getDerivedStateFromProps(){
        console.log ("1T. Mounting-Phase getDerivedStateFromProps")
        return null
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log ("2T. shouldComponentUpdate")
        console.log("next props :",  nextProps)
        console.log("next state :",  nextState)
        return this.props.timerOn !== nextProps.timerOn || nextState.time%5===0
    }


    render(){
        console.log ("3T. Mounting-Phase render")
        return(
            <>
                <h1>Time Spent :: {new Date(this.state.time*1000).toISOString().slice(11,19)}</h1>
                {/* toISOString becoz Date class will return the object
                and in react object cannot be rendered directly */}
            </>
        )
    }


    componentDidMount(){
        console.log ("4T. Mounting-Phase componentDidMount")
        console.log ("------------------------------------")

    // either of the below two will work
        // this.timer = setInterval(()=>{
        //     this.setState((prevState)=>{
        //         return {time:prevState.time+1}
        //     })
        // }, 1000)


        // this.timer = setInterval(()=>{
        //     this.setState((prevState)=>({time:prevState.time+1}))
        // }, 1000)

    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log ("4T. getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate(prevProps,prevState,snapShot){
        console.log ("5T. componentDidUpdate")
        console.log ("------------------------------------")
        // console.log("previous props :",  prevProps)
        // console.log("previous state :",  prevState)
        // console.log("snapShot :",  snapShot)
        if(prevProps.timerOn !== this.props.timerOn ){
            if(this.props.timerOn){
                this.timer = setInterval(()=>{
                    this.setState((prevState)=>{
                        return {time:prevState.time+1}
                    })
                }, 1000)
            } else{
                clearInterval(this.timer)
            }
        }

    }

    componentWillUnmount(){
        console.log("End - componentWillUnmount")
        clearInterval(this.timer)
    }
}

export default Timer


import { Component } from "react";
import Timer from "./timerComponent";

class App extends Component{
  constructor(){
    super()
    this.state={
      // mount:true
      timerOn:false
    }
  }

  // handleMount = ()=>{
  //   this.setState((prevState)=>{
  //     return{mount:!prevState.mount}
  //   })
  // }

  timerButton = ()=>{
    this.setState((prevState)=>{
      return{timerOn:!prevState.timerOn}
    })
  }

  render(){
    return(
      <>
      {/* <button onClick={this.handleMount}>{this.state.mount?"UnMount":"Mount"}</button> */}
      <button onClick={this.timerButton}>{this.state.timerOn?"Turn TimerOff":"Turn TimerOn"}</button>
      {/* {this.state.mount?<Timer />:<Timer />} */}
      <Timer timerOn={this.state.timerOn} />
      </>
    )
  }
}

export default App;

```

# Error Handling

1. static GetDerivedStateFromError() return null
2. componentDidCatch(error, info)

- ErrorBoundary will have either of the two components or both. Error boundary will only detect those error which are render in that component eg for App.js all those components/nodes that are inside this module will only be covered.

- use separate ErrorBoundary for different component so it will render all the component that are error free but will render error componet which has error.

```javascript
import { Component } from "react";

export default class ErrorBoundary extends Component{
    constructor(){
        super()
        this.state={
            hasError:false
        }
    }

    static getDerivedStateFromError(error){
        return {
            hasError:true
        }
    }

    componentDidCatch(error,info){
        console.log("error", error)
        console.log("info", info)

    }

    render(){
        if(this.state.hasError){
            return(
                <>
                <h1>Something went Wrong</h1>
                </>
            )
        }

        return this.props.children


    }
}

use in other module render fn
render(){
    return(
      <>
      <ErrorBoundary>
          <ComponentA/>
      </ErrorBoundary>

      <ErrorBoundary>
        {/* <button onClick={this.handleMount}>{this.state.mount?"UnMount":"Mount"}</button> */}
        {/* <button onClick={this.timerButton}>{this.state.timerOn?"Turn TimerOff":"Turn TimerOn"}</button> */}
        {/* {this.state.mount?<Timer />:<Timer />} */}
        {/* <Timer timerOn={this.state.timerOn} /> */}
      </ErrorBoundary>
      </>
    )
  }
```

# Week 3 and 4

## Limitation with Class based components

- Hard to use the statefull logic between components.
- complex component become difficult to understand.
- class can be confusing at times.

# Hooks 16.8

- Defination ==>> Hooks are function that let us hook into React state and lifecycle features from function component

- React is based on Separation of concerns , which is attained using Hooks.

- Hooks dont work inside the class

## Hooks State

- const [first,setFirst] = useState("string/object/array/any datastructure")

```javascript
import { useState } from "react";

export default function Input() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");

  return (
    <>
      <div className="section">
        <Row label="Name">
          <input
            className="input"
            value={first}
            onChange={(e) => setFirst(e.target.value)}
          />
        </Row>
        <Row label="Last Name">
          <input
            className="input"
            value={last}
            onChange={(e) => setLast(e.target.value)}
          />
        </Row>
      </div>

      <h2>
        Hello, {first} &nbsp; {last}{" "}
      </h2>
    </>
  );
}

function Row(props) {
  const { label } = props;
  return (
    <>
      <lable>
        {label}
        <br />
      </lable>
      {props.children}
      <hr />
    </>
  );
}
```

## Note:: setState using cannot be used in render fn in class based as setstate bydefault calls the render fn so this will cause the infinite loop in the app.

## UseEffect

- Syntax = UseEffect(callback fn, [optional ==>> array of dependecies eg state and props])
- UseEffect(cbfn) >> works as both componentDidMount and componentDidUpdate
- UseEffect(cbfn, [emptyArray]) >> only works as componentDidMount
- UseEffect(cbfn, [anyCondition]) >> only works as componentDidUpdate

```javascript
import { useState, useEffect} from "react";

export default function Input(){
   const [first,setFirst] = useState("")
   const [last,setLast] = useState("")

both componentDidMount and componentDidUpdate
    useEffect(()=>{
        document.title = first  + " " + last
    })

componentDidMount
    useEffect(()=>{
        document.title = first  + " " + last
    }, [])

componentDidUpdate
    useEffect(()=>{
        document.title = first  + " " + last
    }, [last])

    return(
        <>
        <div className="section">
            <Row label="Name">
                    <input className="input" value={first} onChange={(e)=>setFirst(e.target.value)}/>
            </Row >
            <Row label="Last Name">
                    <input className="input" value={last} onChange={(e)=>setLast(e.target.value)}/>
            </Row >
        </div>

        <h2>Hello, {first} &nbsp; {last} </h2>

        </>
        )
    }


function Row(props){
    const{label} = props;
    return(
        <>
        <lable>{label}<br/></lable>
        {props.children}
        <hr />
        </>
    )
}

```

## UseEffect Various Usage based on syntax and parameters

- we can Add multiple UseEffect for differenct functionality
- To maintain SOC principle that was not possible in case of classBasedComponents.

* Note::

- useEffect() takes an array of dependencies as the second parameter, where
  an empty array represents componentDidMount().
  If no array is provided, it runs on mounting and every state update. Otherwise,
  it only updates if the dependency value changes. and
  If there's a return function, it acts like componentWill Unmount().

```javascript
function Func() {
  useEffect(() => {
    let timer = setInterval(() => {
      console.log("Windows width: " + window.outerWidth);
    }, 2000);

    return clearInterval(timer);
  });
  return (
    <>
      <h1>Timer</h1>
    </>
  );
}
```

### useEffet(cbfn) = CDM and CDU

### useEffect(cbfn,[]) = CDM

### useEffect(cbfn,[condition]) = CDU

### useEffect(cbfn(return)) = CWU

## UseRef and Focus

- const ref = useRef(initialValue)
- initial value is changed to current value of the node after rerender.

```javascript
//Blogging App using Hooks
// useEffet(cbfn) = CDM and CDU
// useEffect(cbfn,[]) = CDM
// useEffect(cbfn,[condition]) = CDU
// useEffect(cbfn(return)) = CWU

import { useState, useEffect, useRef } from "react";
export default function Blog() {
  // const [title, setTitle] = useState("")
  // const [content, setContent] = useState("")
  const [formData, setformData] = useState({ title: "", content: "" });
  const [blog, setBlog] = useState([]);
  const titleRef = useRef(null);

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  useEffect(() => {
    if (blog.length) {
      document.title = blog[0].title ? blog[0].title : "no-blog";
    }
  }, [blog]);

  //Passing the synthetic event as argument to stop refreshing the page on submit
  function handleSubmit(e) {
    e.preventDefault();
    setBlog([formData, ...blog]);
    setformData({ title: "", content: "" });
    titleRef.current.focus();
    // console.log(blog)
  }

  function removeBlog(index) {
    setBlog(
      blog.filter((b, i) => {
        return i !== index; //if not equal then splice is not needed
      })
    );
  }
  return (
    <>
      {/* Heading of the page */}
      <h1>Write a Blog!</h1>

      {/* Division created to provide styling of section to the form */}
      <div className="section">
        {/* Form for to write the blog */}
        <form onSubmit={handleSubmit}>
          {/* Row component to create a row for first input field */}
          <Row label="Title">
            <input
              className="input"
              placeholder="Enter the Title of the Blog here.."
              value={formData.title}
              required
              onChange={(e) => {
                setformData({ ...formData, title: e.target.value });
              }}
              ref={titleRef}
            />
          </Row>

          {/* Row component to create a row for Text area field */}
          <Row label="Content">
            <textarea
              className="input content"
              placeholder="Content of the Blog goes here.."
              value={formData.content}
              onChange={(e) => {
                setformData({ title: formData.title, content: e.target.value });
              }}
            />
          </Row>

          {/* Button to submit the blog */}
          <button className="btn">ADD</button>
        </form>
      </div>

      <hr />

      {/* Section where submitted blogs will be displayed */}
      <h2> Blogs </h2>
      {blog.map((ele, idx) => (
        <div className="blog" key={idx}>
          <h3>{ele.title}</h3>
          <p>{ele.content}</p>
          <div className="blot-btn">
            <button onClick={() => removeBlog(idx)} className="btn remove">
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

//Row component to introduce a new row section in the form
function Row(props) {
  const { label } = props;
  return (
    <>
      <label>
        {label}
        <br />
      </label>
      {props.children}
      <hr />
    </>
  );
}
```

## useReducer

- Alternative of useState
- using useState of any data at differenct place can be confusing so use reducer hook will consolidate all the state update logic in one single function by replacing the useState hook with the useReducer hook in the component where it is necessary.

- syntax =>> const [name, dispatch] = useReducer(fnName, initialState)
  eg(const[blog, dispatch] = useReducer(blogReducer, [])) - fnName can be written anywhere inside or outside the component fn. - fnName(state,action)

```javascript
//Blogging App using Hooks
// useEffet(cbfn) = CDM and CDU
// useEffect(cbfn,[]) = CDM
// useEffect(cbfn,[condition]) = CDU
// useEffect(cbfn(return)) = CWU

import { useState, useEffect, useRef, useReducer } from "react";

function blogReducer(state, action) {
  switch (action.type) {
    case "Add":
      return [action.blog, ...state];
    case "Remove":
      return state.filter((ele, idx) => idx !== action.index);
    default:
      return [];
  }
}

export default function Blog() {
  // const [title, setTitle] = useState("")
  // const [content, setContent] = useState("")
  const [formData, setformData] = useState({ title: "", content: "" });
  // const [blog, setBlog] = useState([])
  const [blog, dispatch] = useReducer(blogReducer, []);

  const titleRef = useRef(null);

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  useEffect(() => {
    if (blog.length) {
      document.title = blog[0].title ? blog[0].title : "no-blog";
    }
  }, [blog]);

  //Passing the synthetic event as argument to stop refreshing the page on submit
  function handleSubmit(e) {
    e.preventDefault();
    // setBlog([formData, ...blog])
    dispatch({
      type: "Add",
      blog: { title: formData.title, content: formData.content },
    });
    setformData({ title: "", content: "" });
    titleRef.current.focus();
    // console.log(blog)
  }

  function removeBlog(index) {
    dispatch({ type: "Remove", index: index });
    // setBlog(blog.filter((b,i)=>{
    //     return i!==index //if not equal then splice is not needed
    // }))
  }
  return (
    <>
      {/* Heading of the page */}
      <h1>Write a Blog!</h1>

      {/* Division created to provide styling of section to the form */}
      <div className="section">
        {/* Form for to write the blog */}
        <form onSubmit={handleSubmit}>
          {/* Row component to create a row for first input field */}
          <Row label="Title">
            <input
              className="input"
              placeholder="Enter the Title of the Blog here.."
              value={formData.title}
              required
              onChange={(e) => {
                setformData({ ...formData, title: e.target.value });
              }}
              ref={titleRef}
            />
          </Row>

          {/* Row component to create a row for Text area field */}
          <Row label="Content">
            <textarea
              className="input content"
              placeholder="Content of the Blog goes here.."
              value={formData.content}
              onChange={(e) => {
                setformData({ title: formData.title, content: e.target.value });
              }}
            />
          </Row>

          {/* Button to submit the blog */}
          <button className="btn">ADD</button>
        </form>
      </div>

      <hr />

      {/* Section where submitted blogs will be displayed */}
      <h2> Blogs </h2>
      {blog.map((ele, idx) => (
        <div className="blog" key={idx}>
          <h3>{ele.title}</h3>
          <p>{ele.content}</p>
          <div className="blot-btn">
            <button onClick={() => removeBlog(idx)} className="btn remove">
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

//Row component to introduce a new row section in the form
function Row(props) {
  const { label } = props;
  return (
    <>
      <label>
        {label}
        <br />
      </label>
      {props.children}
      <hr />
    </>
  );
}
```

# Custom Hooks

- used when we share same piece of code in different component
- hook name always start with "use" followed by capital letter eg useState, useEffect, useCustom etc
- it is create same as function with above rules.
- it should return something

```javascript

import { useEffect, useState } from "react";

export default function useLocalStorage(){
    const [email,setEmail] = useState("");
   useEffect(()=>{
        const email = localStorage.getItem("email")
        if(email){
            setEmail(email)
        }
    }, [])

   useEffect(()=>{
        localStorage.setItem("email",email)
   }, [email])

   return {email,setEmail}
}

inComponent file destructure the return object to use the hook in the component
import useLocalStorage from "./useLocalstorage";

    const{email,setEmail} = useLocalStorage()

```

# FireBase

- SQL - Structured query language
- NOSQL - Not Only SQL

## SQL or Relational Database

- Data is stored in Tabular form (table) and
- tables are linked to each-other with the help of keys.
- More complex in terms of scalability so slowest speed

## NO-SQL or Non-Relational Database

- Data is stored in form of GRAPH, OBJECTS and DOCUMENTS
- GRAPH - Eg Amazon Neptune
- OBJECT - Key-value form. Eg Reddis
- Document - Eg MongoDB, Firebase cloud infrastructure.
- less complex in terms of scalability so fastest comparatively

## Firebase cloud infrastructure.

Features::

- Realtime database - if a application is running on multiple devices and if there is a change in database then all thea app that are connected to the server will get notified and updated without refresh of the change(can be any CRUD) that means a persistent connection is estd between client and server.
- Cloud database
- provide offline support

### WHY ==>> Rahul has built an app for a transport company which provides home delivery services. Company has a very large customer base and numerous delivery vehicles. App has to keep track of the vehicles to ensure timely delivery of goods. Which database should be preferred to connect with his App?

### Ans ==>> Both NoSQL and SQL can be used for real-time application but noSQL database are often prefered for their scalabitity and ability to handle high volume of data

## How firestore works

Firebase has two database::

1. Real-time database (older) - Datastore in JSON format, lowLatency
2. Cloud Firestore (Latest) - Datastore in Document of collection Format, moreFeature, moreFaseter and moreScalability

- Working - app and firestore are connection via websocket and there is listner callback fn on both the side that keep track of the data changes. The data sent from the firestore is first stored in local cache and the rendered on the webpage and viceversa.
- Advantage of localCache is if we lost internet connection while working and there is a change in data then the data will get store in localcache and upon connectivity the listen sent the data to the fire base . it is called as Offine SUPPORT

- goto firebase.google.com
- goto console create project >> copy SDK (software development kit)
  = [Setting up in application](https://firebase.google.com/docs/firestore/quickstart)

## Note

- subcollection can be made inside collection as well as documents
- document cannot have subcollection

## CRUD

- Adddoc is used when docID is autogenerated. It doesnot check for ID if present or not.

* addDoc(collection(db,"collectionName"), {data})

- setdoc is used when docid is generated manually.Also if ID is already present it will replace the content and if not then create a new document. It check for ID if present or not.

* setDoc(doc(collection(db,"collectionName", "ownID")), {data})
  or
* setDoc(doc(db,"collectionName", "ownID"), {data})

```javascript
npm i firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx0EubiIo5YE-Ilk6cZQ8IYugLrN5OX8Y",
  authDomain: "blog-react-app-ea959.firebaseapp.com",
  projectId: "blog-react-app-ea959",
  storageBucket: "blog-react-app-ea959.appspot.com",
  messagingSenderId: "175098425941",
  appId: "1:175098425941:web:37e2a8d78eeb07471d5adc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


// on module
import { db } from "../../firebaseinit";
import { addDoc, collection,doc,setDoc } from "firebase/firestore";

try {
    const docRef = await addDoc(collection(db, "blog"), {
        title: formData.title,
        content: formData.content,
        createOn: new Date()
    });
    console.log("Document written with ID: ", docRef.id);
    } catch (e) {
    console.error("Error adding document: ", e);
    }


try {
    const docRef = doc(collection(db,"blog"))
    const data = {
        title: formData.title,
        content: formData.content,
        createOn: new Date()
        }
    await setDoc(docRef, data);
} catch (e) {
console.error("Error adding document: ", e);
}
```

## fetching data from firebase

- using async fn using useEffect is done by writing the fn in the callbackfn which then is called immediately.
- await getDocs(collection(db,"blog")) return objects in which "docs" object is array of all the object (content)
- in map fn = ele.id return the id and ele.data() return the content (object).

```javascript
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  getDocs,
} from "firebase/firestore";

useEffect(() => {
  async function fetchData() {
    const querySnap = await getDocs(collection(db, "blog"));
    const blogs = querySnap.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    dispatch({ type: "SET", blog: blogs });
    return;
  }
  fetchData();
}, []);
```

## getDoc vs onSnapshot

- getDocs doesnot give realtime update therefore we will use onSnapshot

- Earlier we are using add funtion of setblog to add new blog which get update on current server but not all server becoz previous blogs rendering using the db but current is rendering based on current state. but now by using listner fn we have remove add fn of the setblog and is rendeing the blog previous and current both using the db so all the server are getting the real time update.

```javascript
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";

useEffect(() => {
  const snap = onSnapshot(collection(db, "blog"), (snapShot) => {
    const blogs = snapShot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    dispatch({ type: "SET", blog: blogs });
  });
}, []);
```

## deleteDoc

```javascript
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
const deleteExpense = async (id) => {
  // delete expense from firestore here
  const docRef = doc(db, "expenses", id);
  await deleteDoc(docRef);
  dispatch({ type: "REMOVE_EXPENSE", payload: { id } });
  toast.success("Expense deleted successfully.");
};
```

## updatedoc

```javascript
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";

const updateExpense = async (expense) => {
  const expensePos = state.expenses
    .map(function (exp) {
      return exp.id;
    })
    .indexOf(expense.id);

  if (expensePos === -1) {
    return false;
  }

  // update expense in firestore here {text:expense.text,content:expense.content}
  const docRef = doc(db, "expenses", expense.id);
  await updateDoc(docRef, expense);
  dispatch({ type: "UPDATE_EXPENSE", payload: { expensePos, expense } });
  toast.success("Expense updated successfully.");
};
```

# week 5-6

# context API

- Earlier before context if a sibling need the state then we have to uplift the state and also if a sub sub child requires a state then it as to pass through all the child (ie prop drilling) of the parent. BUt now

- In Context api, state will be created separately and any node which requires the state then context will provide it diretly without any medium and also the node children's will have access to the state

## steps - 3

- To create the context
  - import {createContext} from "react"
  - const context = createContext()
- To provide the context
  - <createContext.Provider value={"string",{object},num,[array]}> component </createContext.Provider>
- consume the context(getting value out of context) : Two ways
  - Hooks (fn only) = useContext
  - Consumer(fn and class both) = <createContext.Consumer> {accept fn and return JSX} </createContext.Consumer>

```javascript
on context module
import {createContext} from "react"
export const colorContext = createContext()

on App module
import {colorContext}
function App(){
    return(
        <>
        <div>
        <h1>Parent node</h1>
        <colorContext.Provider value = {{color,setcolor}}>
            <child/>
        </colorContext.Provider>
        </div>
        </>
    )
}

on grandChild module

import { useContext } from "react";
import { colorContext } from "../context";

function grandChild(){
    // one way of consuming
  const {color,setcolor} = useContext(colorContext)
    return(
        <>
        <div>
        <h1>Grandchild node</h1>
        </div>
        </>
    )

    // second way of consuming
    return(
  <colorContext.Consumer>
    {(value)=><p style={{ color: value.color }}>Color code: {value.color}</p>}
  </colorContext.Consumer>
    )
}

```

## using/consuming context

- Two ways
- setTotal(total+price)
-      or
- setTotal((prevTotal)=>prevTotal-price)

```javascript
function ItemCard({ name, price }) {
  const {item,setItem} = useContext(cartContext)
  const {total,setTotal} = useContext(priceContext)

  const handleAdd = (price) => {
    setTotal(total+price)
    setItem(item+1)
  };

  const handleRemove = (price) => {
    if (total===0 || item===0) return
    setTotal((prevTotal)=>prevTotal-price)
    setItem(item-1)
  };
  return(
    <>
    JSX
    </>
  )
```

## Custom Provide

- It is component which acts as a provider.
- Make use of default provider
- All the component inside the parent component is accesed using {props.children}
- function(props) or function({children})

- pros of custom provider
  1. provide more flexibility over how data is provided and consume.
  2. make the codebase more organised and maintainable.

```javascript
//on context module
import { createContext } from "react";
export const cartContext = createContext()

function CustomCartContext ({children}){
    const [item, setItem] = useState(0);
    return(
        <cartContext.Provider value={{item,setItem}}>
                {children}
        </cartContext.Provider>
    )
}
export default CustomCartContext

//on app module
import { useState } from 'react';
import { cartContext } from './itemContext';
import { priceContext } from './priceContext';
import CustomCartContext from './itemContext';
import Items from './components/Items';
import Navbar from './components/Navbar';

function App() {
  const [total, setTotal] = useState(0);
  return (
    // Order of context is important when the child context have to take some value from parent context else it can be any
    <CustomCartContext>
        <priceContext.Provider value={{total,setTotal}}>
        <div className='App'>
          <h2>Shopping Cart</h2>
              <Navbar />
              <Items />
        </div>
        </priceContext.Provider>
    </CustomCartContext>

  );
}
export default App;

```

## custom hooks/ custom consume

- export function usePrice(){
  const value = useContext(priceContext)
  return value
  }

```javascript
import { createContext, useState, useContext } from "react";

const cartContext = createContext();

//custom hook
function useCart() {
  const value = useContext(cartContext);
  return value;
}

//custom provider
function CustomCartContext({ children }) {
  const [item, setItem] = useState(0);
  return (
    <cartContext.Provider value={{ item, setItem }}>
      {children}
    </cartContext.Provider>
  );
}
export { cartContext, useCart };
export default CustomCartContext;

// consuming value
import { useCart } from "../itemContext";
const { item } = useCart();
```

### customhook and customprovider implementation

```javascript
import { createContext, useState, useContext } from "react";
import CartModal from "./components/cartModel";

const cartContext = createContext();

//custom hook
function useCart() {
  const value = useContext(cartContext);
  return value;
}

//custom provider
function CustomCartContext({ children }) {
  const [item, setItem] = useState(0);
  const [total, setTotal] = useState(0);
  const [showCart, setshowCart] = useState(false);
  const [cartItem, setcartItem] = useState([]);

  const handleAdd = (id, name, price) => {
    const findItem = cartItem.findIndex((item) => item.id === id);
    if (findItem !== -1) {
      cartItem[findItem].quantity += 1;
      setcartItem(cartItem);
      setTotal(total + price);
      setItem(item + 1);
    } else {
      const newCart = { id, name, price, quantity: 1 };
      setcartItem([...cartItem, newCart]);
      setTotal(total + price);
      setItem(item + 1);
    }
  };

  const handleRemove = (id, name, price) => {
    const idx = cartItem.findIndex((i) => i.id === id);
    if (idx !== -1) {
      cartItem[idx].quantity -= 1;
      if (cartItem[idx].quantity === 0) {
        cartItem.splice(idx, 1);
      }
    } else {
      return;
    }
    setcartItem(cartItem);
    setTotal((prevTotal) => prevTotal - price);
    setItem(item - 1);
  };

  const handleReset = () => {
    setItem(0);
    setTotal(0);
    setcartItem([]);
  };

  const toggleCart = () => {
    setshowCart(!showCart);
  };

  return (
    <cartContext.Provider
      value={{
        item,
        total,
        handleAdd,
        handleRemove,
        handleReset,
        toggleCart,
        cartItem,
        toggleCart,
      }}
    >
      {showCart && <CartModal />}
      {children}
    </cartContext.Provider>
  );
}
export { cartContext, useCart };
export default CustomCartContext;
```

# Routing

- As react is a SPA (single page application) ie on page only the components gets mount and unmount so the URL remains the same of difference component/page.

- Routing is done to make the url different for different components.

- Serverside Routing (MPA) and Client side routing (SPA)

  - Single Page Applications don't allow Server Side Routing as it triggers a page refresh. SPAs load the complete app on mount, and when the user navigates to a new page, they don't necessarily need to request data from the server again.

- Browers have appLoader that provides routing using Client-Side Routing.

- React doesnot have any inbuilt appliation for CSR.

- so ReactRouterDOM is the 3rd party library is used for CSR.

# React Router DOM Library

- npm i react-router-dom
- [Official Docs](https://reactrouter.com/en/main/start/tutorial)
- we will be using below two route

  1. Non-Data API = Doesnot support passing the Data

     - createBrowserRouter = uses fullURL instead of hashURL which is better for SEO
     - createHashRouter = uses hashed URL
     - createMemoryRouter = for testing purpose
     - createStaticRouter

  2. Data API = Support passing the data
     - <BrowserRouter>
     - <MemoryRouter>
     - <HashRouter>
     - <NativeRouter> = for react native
     - <StaticRouter>

## Creating Routes one way - recommended

- import { createBrowserRouter, RouterProvider } from "react-router-dom";
- const router = createBrowserRouter([list of objects of routes])
  eg - const router = createBrowserRouter([{path:"/",element:<Home/>},{path:"/",element:<Home/>}])
- <RouterProvider router={router}/>

```javascript
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home.js";
import About from "./pages/about.js";
import Items from "./pages/items.js";

function App() {
  // createBrowserRouter([list of objects of routes], )

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/item", element: <Items /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
```

## Creating Routes second way

- import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
- const route = createRoutesFromElements(
  <>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/item" element={<Items/>}/>
  </>
  )
- const router = createBrowserRouter(route)
- <RouterProvider router={router}/>

```javascript
import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/home.js";
import About from "./pages/about.js";
import Items from "./pages/items.js";

function App() {
  const route = createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/item" element={<Items />} />
    </>
  );

  const router = createBrowserRouter(route);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
```

### Navigation using Link

- import { Link } from "react-router-dom";
- <Link to={"/about"}>About</Link>

- link tag is a wrapper around anchor tag which takes "to" as an attribute and "to" should be provided with path
- if we use <a href=> tag then it will work but it will refresh/reload the page which make the application to restart from inittial state.

- It is a wrapper around the anchor element that prevents hard page reload.
- It is used to enable programmatic navigation based on user events.

```javascript
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <main>
        <h1>Home Page</h1>
        <Link to={"/about"}>About</Link>
      </main>
    </>
  );
}

export default Home;
```

### Nested Routes and Outlet

- using children
  const router = createBrowserRouter([
  {path:"/", element:<Navbar/>, children:[
  {path:"/",element:<Home/>},
  {path:"",element:<Home/>},
  {index:true,element:<Home/>},
  {path:"/about",element:<About/>},
  {path:"/item",element:<Items/>}
  ]}
  ])

- <Outlet/>

```javascript
on app

import { useState } from "react";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/home.js";
import About from "./pages/about.js";
import Items from "./pages/items.js"
import Navbar from "./components/Navbar.js";

function App() {

  OneWay
  const router = createBrowserRouter([
    {path:"/", element:<Navbar/>, children:[
        {path:"/",element:<Home/>}, or
        {path:"",element:<Home/>},or
        {index:true,element:<Home/>},

      {path:"/about",element:<About/>},
      {path:"/item",element:<Items/>}
    ]}
  ])

  SecondWay
    const route = createRoutesFromElements(
    <Route path="/" element={<Navbar/>}>
      <Route index={true} element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/item" element={<Items/>}/>
    </Route>
  )
  const router = createBrowserRouter(route)

  return (
  <>

    <RouterProvider router={router}/>
  </>

)}

export default App;


on navbar
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="nav">
        <Link to={"/"}>
          <h4>HOME</h4>
        </Link>
        <Link to={"/about"}>
          <h4>ABOUT</h4>
        </Link>
        <Link to={"/item"}>
        <h4>ITEMS</h4>
        </Link>
      </div>
      <Outlet/>
    </>
  );
}

export default Navbar;

```

### Navigation using NavLink

- This is used when navbar or index of any page content is also show along with the content to know on which page we are in. eg isActive is the inbuilt fn of Navlink.

- <NavLink style={({isActive})=>(isActive?{color:"blue"}:undefined)} to={"/"}>
  <h4>HOME</h4>
  </NavLink>

```javascript
import { Link, Outlet, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="nav">
        <NavLink
          style={({ isActive }) => (isActive ? { color: "blue" } : undefined)}
          to={"/"}
        >
          <h4>HOME</h4>
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? { color: "blue" } : undefined)}
          to="/about"
        >
          <h4>ABOUT</h4>
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? { color: "blue" } : undefined)}
          to={"/item"}
        >
          <h4>ITEMS</h4>
        </NavLink>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
```

## Absolute Path vs Relative path

### incase of nested route it is recommended to use relative path

- Absolute path = If it starts with slash "/" is called as absolute path - {path:"/",element:<Home/>}, - <Route path="/item" element={<Items/>}/>

  - if we use "/root" in parent and
  - "/about" in child it will be invalid path for child
  - instead use "/root/about" will be valid path
  - This is incase of abolute path

- Relative path: Omit slash ie If it starts without slash "/" is called as absolute path

  - if we use "/root" in parent and
  - "about" in child it will be valid path for child

- incase of relative path

## Dynamic ROuting, useParams Hook::

- UseParams hook returns an object with dynamic routes as key-value pairs. To access the specific value of a dynamic oute, such as userld, the key must be destructured from the params object.
  {items} = useParams()

```javascript
on App
  const router = createBrowserRouter([
    {path:"/", element:<Navbar/>, children:[
      {index:true,element:<Home/>},
      {path:"about",element:<About/>},
      {path:"item",element:<Items/>},
      {path:"/item/:itemId",element:<ItemDetail/>}
    ]}
  ])

on all item
<Link to="/item/item-2">
                <h6>Item 2</h6>
            </Link>

eacch item detail

import { useParams } from "react-router-dom"

function ItemDetail(){
    const params = useParams()
    console.log(params.itemId)
    return(
       <>
        <main>
        <h1>ItemDetails</h1>
        </main>
        <h3>{params.itemId}</h3>


       </>
    )
}

export default ItemDetail
```

## Dynamic Page

- const router = createBrowserRouter([
  {path:"/", element:<Navbar/>, children:[
  {index:true,element:<Home/>},
  {path:"about",element:<About/>},
  // in below parent path we are not using element becoz we dont want outlet as we are moving to complete new page
  {path:"item", children:[
  {index:true, element:<Items/>},
  {path:":id",element:<ItemDetail/>}
  ]},
  ]}
  ])

- <Link to={`/item/${i.id}`}>
              <li key={i.id}>{i.name}</li>
            </Link>

- const params = useParams()

```javascript
on app page
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/home.js";
import About from "./pages/about.js";
import Items from "./pages/items.js"
import ItemDetail from "./pages/itemDetail.js";
import Navbar from "./components/Navbar.js";

function App() {

  const router = createBrowserRouter([
    {path:"/", element:<Navbar/>, children:[
      {index:true,element:<Home/>},
      {path:"about",element:<About/>},
      // in below parent path we are not using element becoz we dont want outlet as we are moving to complete new page
      {path:"item", children:[
        {index:true, element:<Items/>},
        {path:":id",element:<ItemDetail/>}
      ]},
    ]}
  ])

  return (
  <>

    <RouterProvider router={router}/>
  </>

)}

export default App;

on item page
import { Link } from "react-router-dom";
import { items } from "./data";
import ItemDetail from "./itemDetail";
function Items() {
  return (
    <>
      <main>
        <h1>Items Page</h1>
      </main>
      <ul>
        {items.map((i)=> {
          return (
            <Link to={`/item/${i.id}`}>
              <li key={i.id}>{i.name}</li>
            </Link>
        )})}
      </ul>
    </>
  );
}

export default Items;

on itemdetails page
import { useParams } from "react-router-dom"
import { items } from "./data"
export function ItemDetail(){
    const params = useParams()
    const data = items.find((i)=>{
        return i.id === parseInt(params.id)
    })
    return(
       <>
        <main>
        <h1>ItemDetails</h1>
        </main>
        <h3>{data.name}</h3>
        <h5>{data.description}</h5>
       </>
    )
}

export default ItemDetail
```

### Navigation using useNavigate

- This will automatically/programatically goes to previous UI after certain time.
- errorElement:component Name
- navigate("path") = to the path
- navigate(-n) = back to nth page

```javascript
on app
const router = createBrowserRouter([
    {path:"/", element:<Navbar/>,errorElement:<Error/>, children:[
      {index:true,element:<Home/>},
      {path:"about",element:<About/>},
      // in below parent path we are not using element becoz we dont want outlet as we are moving to complete new page
      {path:"item", children:[
        {index:true, element:<Items/>},
        {path:":id",element:<ItemDetail/>}
      ]},
    ]}
  ])

on error page
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Error(){
    const navigate = useNavigate()

    useEffect(()=>{
        // setTimeout(()=>navigate("/"), 3000)
        setTimeout(()=>navigate(-1), 3000)

    }, [])
    return(
        <main>

            <h1>Opps Something went Wrong</h1>
        </main>
    )
}

export default Error
```

# useOutletContext

- <Outlet context={{...courseDetail}}/>
- const course = useOutletContext()

```javascript
on prev page
 <div className={style.courses}>
      <Outlet context={{...courseDetail}}/>
    </div>

on page
import React from "react";
import styles from "./Chapter.module.css";
import { useParams,useOutletContext } from "react-router-dom";
function Chapter() {
  const{chapterid} = useParams()
  const course = useOutletContext()
  const chap = course.chapters.find((i)=>String(i.chapter)===chapterid)
  const {title,description,details,video} = chap

  console.log(chap)
  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <p className={styles.para}>{
        details
      }</p>
      <br />
      <br />
      <div className={styles.videos}>
        <iframe
          width="800"
          height="560"
          src={video}
          title="React Video"
          frameBorder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Chapter;
```

# Protected Route

- const PrivateRoute = ({ children }) => {
  if (!isLoggedIn) return <Navigate to="/"
    replace={true} />;
  return children
  }

- element: (<PrivateRoute><Contact /></PrivateRoute>)

```javascript
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // create high-level protected route below
  const PrivateRoute = ({ children }) => {
    if (!isLoggedIn) return <Navigate to="/" replace={true} />;
    return children;
  };

  // protect the routes for the contact, list and item details pages
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <NotFound />,
      element: <Navbar />,
      children: [
        {
          index: true,
          element: <Home loggedIn={isLoggedIn} setLoggedin={setIsLoggedIn} />,
        },
        {
          path: "/contact",
          element: (
            <PrivateRoute>
              <Contact />
            </PrivateRoute>
          ),
        },
        {
          path: "/list",
          children: [
            {
              index: true,
              element: (
                <PrivateRoute>
                  <List />
                </PrivateRoute>
              ),
            },
            {
              path: ":itemId",
              element: (
                <PrivateRoute>
                  <ItemDetails />
                </PrivateRoute>
              ),
            },
          ],
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
```

## Firebase few fn such as transaction and batch write are remaining

# Redux

- Redux is a library for state management.
- It works even with React js ie with vanilla js.

- Issues with current management.

  1. Prop drilling causes storage issue.
  2. Predictibilty. - Data not being changes / received older data instead of updated during drilling.

- To overcom the above issuse we can use APPlication State OR Global State

- Now Component willl share the data/updatedDate to AppState and then any child/sibling/parent can fetch the data from app/global state. So now there is no direct communication b/w components.

- Flux Architecture says there should NOT be bidirection flow of data. Flow must be UNIdirectional b/w components

- Flow such as bidirection and unidirection is b/w components and not the APP state.

- Advantage with Redux
  1. It reduces memory usage by eliminating prop drilling.
  2. It enables a one-way data flow throughout the application.
  3. State management libraries use a one-way data flow, where the application data follows a single direction through an app state.
  4. It enhances data predictability and trust in data correctness.

## Limitations of Context APIs

- Context API is also a state management API inbuild state-management of react.

- Overuse of context - leads to performance issue

- Designed for static content - not for dynamic
  static content - CSS, HTML, Image
  dynamic content - API, Database

- Re-renders of context consumers

- Difficult to debug

- Difficult to extend and scale for data-intensive applications.

- For smaller Application Context API is GOOD to USE.

## pure and impure fn

- PURE:: Pure Functions in Javascript A pure function is a function that always returns the same output given the same input and has no side effects (i.e., it doesn't modify any variables outside of its scope, it doesn't mutate its input arguments, and it doesn't have any I/O operations such as reading from or writing to a file or a database). Pure functions are predictable and easier to reason about since they don't have any hidden dependencies or side effects. Pure functions can be composed together to create more complex functions or pipelines of functions since their input and output types are well-defined and consistent.

```javascript
function add(a, b) {
  // A pure function adding two integers passed in it.
  return a + b;
}

function divide(a, b) {
  // Pure function to divide two integers passed in it.
  return a / b;
}

function multi(a, b) {
  // Pure function to multiply two integers passed in it.
  return a * b;
}

console.log(
  // Calling all the pure functions
  add(2, 5),
  multi(3, 2),
  divide(20, 5)
);
```

- All three functions in the above code are pure functions. Their return value depends on the input arguments, they don't mutate any non-local state, and they have no side effects (we will discuss side effects further in this article). Examples of pure functions in JavaScript include Math.abs(), parseInt(), JSON.stringify(), and many others. Pure functions can be used with functional programming techniques such as higher-order functions, currying, and partial application. JavaScript libraries and frameworks such as Redux, Ramda, and Lodash emphasize using pure functions and functional programming principles.

- ImpureFn :: An impure function is a function that either modifies variables outside of its scope, mutates its input arguments, has I/O operations such as reading from or writing to a file or a database, or has other side effects that are not purely computational. Impure functions can have hidden dependencies and side effects, which can make them harder to reason about and debug

```javascript
const message = "Hi ! ";
function myMessage(value) {
  return `${message} ${value}`;
}
console.log(myMessage("Aayushi"));
```

- In the above code, the result the function returns is dependent on the variable that is not declared inside the function. That's why this is an impure function. Examples of impure functions in JavaScript include console.log(), Math.random(), and Date.now(), Array.sort(), Array.splice(), and many others. Impure functions can be necessary for tasks such as reading and writing to a file or a database, generating random numbers, or interacting with the user interface. However, it's important to minimize impure functions and keep them separate from pure functions as much as possible, to maintain a clear separation of concerns and avoid unexpected interactions or bugs. Pure functions can be composed together to create complex logic and pipelines of functions, whereas impure functions can only be used in a more limited and isolated way. JavaScript libraries and frameworks such as React and Angular provide mechanisms for managing the state of an application and minimizing the use of impure functions in the user interface.

## Currying in JS

- Combining multiple functions

- using the concept of closure the inner fn remembers the value of outer fn even after they are executed ie moved out of the memory/scope.

- It transforms a function with multiple parameters into multiple inner functions with a single parameter.
- It uses closures to access the declarations of outer functions.
- It enables the function to be partially applied.
- Currying in JavaScript is a technique that transforms a function that takes multiple arguments into a series of functions that take one argument each. This allows for partial application of the function, making it easier to reuse and compose functions.

```javascript

normal way

function(x,y,z){
    return x+y+z
}

currying

function(x){
    return function(y){
        return function(z){
            return x+y+z
            }
        }
    }


function sum (x,y,z) {
    return x+y+z
}
const ans = sum(10,20,30)
console.log(ans)


function sumX (x) {
    return function sumY (y){
        return function sumZ (z){
            return x+y+z
        }
    }
}

const ansX = sumX(10)
console.log("ansX return the ref of Y", ansX)

const ansY = ansX(20)
console.log("ansY return the ref of Z", ansY)

const ansZ = ansY(30)
console.log("ansZ return the actual sum", ansZ)

OR

const ansALL = sumX(10)(20)(30)
console.log("IN ONE GO", ansALL)

```

# Working of Redux:

- Component (A,B) >>>> Action (add,delete,update) >>>> Reducer (Pure fn ie no external dependencies) >>>> Store >>>> Component

- Features
  - Unidirection flow ie using flux priciples
  - Component A and B doesnot even know eachother but there is still able to receive eachother's data using the architecture
- Redux is a state container that uses a unidirectional data flow pattern. The store holds the application state, which is updated by actions dispatched by the view layer and processed by reducers.

## console based redux implementation in vanilla JS

```javascript
const redux = require("redux");

// Actions
const ADD_TODO = "Add TODO";
const TOGGLE_TODO = "Toggle TODO";

// Action creator fn
const addTodo = (text) => ({ text, type: ADD_TODO });
const toggleTodo = (index) => ({ index, type: TOGGLE_TODO });

// initial state
const initialState = {
  todos: [],
};

// Reducer  (make it pure fn)
// must return updated state
function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { text: action.text, completed: false }],
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, i) => {
          if (i === action.index) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };
    default:
      return state;
  }
}

//Store
const store = redux.createStore(todoReducer);

// dispatch actions
store.dispatch(addTodo("Work at 9.3APM"));
store.dispatch(addTodo("Study at 4.30AM"));
store.dispatch(addTodo("Sleep at 10 PM"));
store.dispatch(toggleTodo(2)); //passing index

// read data from store
console.log(store.getState());
```

### questions

- different types of states in React?
  - The app/Global state is managed by the top-level root component.
  - The component State is managed by independent isolated components.

# Implementation of Redux in React App

- import \* as redux from "redux";
- Above statement means importing everything and giving it name as redux

```javascript
on Action Module

//Action constants
export const ADD_TODO = "Add Todo"
export const TOGGLE_TODO = "Toggle Todo"
// Action creators
export const addTodo = (text)=>({text, type:ADD_TODO})
export const toggleTodo = (idx)=>({idx, type:TOGGLE_TODO})

on Reducer Module

import {
  toggleTodo,
  TOGGLE_TODO,
  addTodo,
  ADD_TODO,
} from "../actions/actionTodo";

const initialState = {
  todos: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { task: action.text, completed: false }],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((task, i) => {
          if (i === action.index) {
            task.completed = !task.completed;
          }
          return task;
        }),
      };
    default:
      return state;
  }
};

on store file

import { todoReducer } from "./reducers/reducerTodo";
import * as redux from "redux"; // it means importing everything and giving it name as redux

const store  = redux.createStore(todoReducer)

export default store

cont.. on next topic = provider

```

## Provider

- provider will allow the share the store to the limited number of components.
- Most of the cases Provider is used in root component ie App.js
- Provide is made specifically for the react and is not available for vanilla js.
- npm i react-redux = provide more fn to redux in react appliation
- [npm i redux] is different from react-redux
- <Provider store={storeName}>ComponentToGive Access </Provider>

```javascript
import store from "./components/redux/todostore";
import { Provider } from "react-redux";

return (
  <div>
    <h1>To Do App</h1>
    <Provider store={store}>
      <TodoForm onCreateTodo={createTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} />
    </Provider>
  </div>
);
```

## useSelector Hook

- It is a hook provided by the react-redux library
- To use the state where ever required and return the state of the store
- hook can only be used in those component which are the child/enclosed in "provider".
- It uses store.getState() to get the state.
- It is used to avoid direct access to store.
- const todos = useSelector((state)=>state.todos);
  OR = prefered above why
- const todos = store.getState().todos

- Becoz it follows the priciple of abstraction and encapsulation
- abstraction means to hide the something imp or make it not easily accessible to whole application'components

```javascript
import { useSelector } from "react-redux";
  const todos = useSelector((state)=>state.todos);

  in the component
    const todos = useSelector((state)=>state.todos);
```

## Dispatcher

- The useDispatch hook in Redux returns the dispatch function of the Redux store, which can be used to dispatch actions to the reducer function.

- dispatch will update the state and also update the consumers components ie the components which are using the state through selector

- This works on the pattern called as publisher-subscriber pattern.

- use arrow function on onClick event irrespective becoz dispatch always need fn as parameter.

```javascript
on module in which action has to be perfromed

import { useDispatch } from "react-redux";
const dispatch = useDispatch()

dispatch(addTodo(parameter))

<button className="btn btn-warning"
          onClick={()=>{dispatch(toggleTodo(index))}}
          >Toggle</button>
```

## combineReducers [redux API]

- To main SRP "single responsibility principle"
- API combineReducers help to combine multiple reducers in the same user
- The combineReducers function is used to combine multiple reducers into a single reducer function. It takes an object with keys representing state slices and values as the reducers that manage those state values.
- combineReducers({
  key(any name):reducer,
  key(any name):reducer
  })
- const state = useSelector((state)=> state.storeKey.reducerState);

```javascript
onn reducer file
const initialState={
    todos:[
        {text:"Go to Gym at 6", completed: false},
        {text: "Study at 8", completed: true}
    ]
}
function reducer(state=initialState,action){
    something
}

on store file
import * as redux from "redux";
import {todoReducer} from "./reducers/todoReducer";
import { noteReducer } from "./reducers/noteReducer";
import { combineReducers } from "redux";

const result = combineReducers({
    todosKey:todoReducer,
    notesKey:noteReducer
})
export const store = redux.createStore(result);

usage::
import { useSelector, useDispatch } from "react-redux";
const todos=useSelector((state)=> state.todosKey.todos);
console.log(todos)
const disptach = useDispatch();
```

# Redux ToolKit /

- [Redux toolkit](https://redux-toolkit.js.org/introduction/getting-started)
- Alternative of CreateStore using redux

## challenges with Redux

- - Lots of preparation to do to implement redux
    - Action Contants and Action create
    - Reducer
    - createStore
    - combineStore (multiple reducer)
    - Provider
    - selector
    - Dispatcher
  - Hard to debug/test

## Installing toolkit

- npm install @reduxjs/toolkit

# Implementation of Redux in React App using Redux-tool kit

## creating Slice [Reducer]

- use require for external Library
- use import for internal libray
- Eliminated the need of action contants and action create
- data is received using payload object in the action fn/object (inbuilt)
- const notesSlice = createSlice({
  name:"anyName",
  initialState:defineState,
  reducers:{
  abc: (state,action)=>{

          },
          dgc: (state,action)=>{

          }
      }

  })

```javascript
on reducer file

const { createSlice } = require("@reduxjs/toolkit")

const initialState={
    todos:[
        {text:"Go to Gym at 6", completed: false},
        {text: "Study at 8", completed: true}
    ]
}

const todoSlice = createSlice({
    name: "todo",
    initialState:initialState,
    reducers:{
        add:(state,action)=>{
            state.todos.push({text:action.payload,completed:false})
        },
        toggle:(state,action)=>{
            state.todos.map((todo,index)=>{
                if(index === action.payload){
                    todo.completed=!todo.completed
                }
                return todo
            })
        }
    }
})

export const todoReducer = todoSlice.reducer //reducer not reducers
export const actions = todoSlice.actions
export const todoSelector = (state)=>state.todoReducer.todos

```

## configure store

- import { configureStore } from "@reduxjs/toolkit";
- const store = configureStore({
  reducer:{
  todoReducer,
  noteReducer
  }
  })

```javascript
import { noteReducer } from "./reducers/noteReducer2";
import { todoReducer } from "./reducers/todoReducer2";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    todoReducer,
    noteReducer,
  },
});

export default store;
```

## usage of store [dispatch and selector]:

- useDispatch will be still in use from react-redux library.
- useSelector will be still in use from react-redux library. but its inner cbfn will be in Reducer file as below
- so as create a reuable constant in the Reducer file and export it whereever required.
- export const todoSelector = (state)=>state.ReducerName.list/objectName
- and then const todos=useSelector(todoSelector);
- By using selector in Reducer file we follow the Principle of DRY (donot repeat youself)

```javascript
on Reducer file
export const todoSelector = (state)=>state.todoReducer.todos;

on components
import { actions } from "../../redux/reducers/noteReducer2";
import { useDispatch } from "react-redux";

const dispatch = useDispatch()
const todos=useSelector(todoSelector);

dispatch(actions.add(Note))

<button onClick={()=>dispatch(actions.toggle(index))} className="btn btn-danger">Change</button>

```

# Create React APP with INbuilt Redux

## Redux Toolkit Template:

- npx degit reduxjs/redux-templates/packages/vite-template-redux my-app
- npx create-react-app appName --template redux
- this will install the react-redux toolkit but we wont find redux alone in package json file becoz react-redux will havee all the fn of redux in it.

## Extra Reducers:

- Extra reducers will be the part of slice.
- If we want to implement the notification system based on the action performed reducer fn then we will create another reducer for notification that will have the dependency of any reducer actions.
- currently all the reducer we created are independent of any action of other reducers
- So extra reducers are for the external dependency of other reducer action.

```javascript
on Notification reducer module
import {createSlice} from "@reduxjs/toolkit"
import { actions } from "./todoReducer2"

const initialState = {
    message:""
}

const notiSlice = createSlice({
    name:"notification",
    initialState:initialState,
    reducers:{

    },

    FIRSTWAY
    extraReducers:{
        // these ER not belong to notifiaction Slice but the other slices
        // reducerName "name"/ActionName ie inside "reducers"
        "todo/add":(state,action)=>{
            state.message = "Todo is create"
        }
    },

    SECOND WAY recommended (USING BUILDER)
    extraReducers:(builder)=>{
    builder.addCase(actions.add, (state,action)=>{
        state.message = "Todo is created"
    })
  },

  THIRD WAY (USING MAP OBJECT)
  extraReducers:{
      [actions.add]:(state,action)=>{
            state.message = "Todo is created"
      }
  }
})

export const notificationReducer = notiSlice.reducer;
export const action = notiSlice.actions;
export const notificationSelector = (state)=>state.notificationReducer.message;

on store module

import { notificationSelector } from "../reducers/notificationReducer";
const store = configureStore({
    reducer:{
        todoReducer,
        noteReducer,
        notificationReducer
    }
})

on component module

import { useDispatch,useSelector } from "react-redux";
import { notificationSelector } from "../reducers/notificationReducer";

useEffect(()=>{
  if(message){
    setTimeout(() => {
      disptach(action.remove())
      }, 1500);
    }
  }, [disptach,notiMessage])

      OoRR

  if(notiMessage){
    setTimeout(() => {
      disptach(action.remove())
    }, 1500);
  }


const notiMessage = useSelector(notificationSelector)
{ notiMessage &&
  <div class="alert alert-success" role="alert">
    {notiMessage}
  </div>
  }
```

# Advanced Redux

## Logger Middleware [using Redux-Toolkit]

- Providing Console-log before every dispatcher in the component file to log Action. But it is impractical solution.

- Middleware are interceptors, that intercerps the actions in the dispatcher pipeline.

- Middleware can access and modify the action object.

- Usage [logging the data, validating the data]

- Responsibility of Middleware::

  - Receive the data
  - perform the operations
  - Pass data to next middleware in the pipeline

- Middleware give access to three parameters

  1. Store
  2. next [for calling the next middleware in pipeline]
  3. action object

- Middlware will works for all the actions.

```javascript
on loggermiddleware file

const loggerMiddleware = (store) => {
  return function (next) {
    return function (action) {
      //log action
      console.log("[LOG]:" + action.type + new Date().toString());
      next(action);
      // as after next the state is changeds so we can also log the changed state
      console.log(store.getState());
    };
  };
};

on store file

const store = configureStore({
    reducer:{
        todoReducer,
        noteReducer,
        notificationReducer
    },
    middleware:[loggerMiddleware]
})

```

# fetching data with Backend server [type1]

```javascript
on backend node app use cors

on frontend ::

using fetch

useEffect(() => {
    console.log("use");
    fetch('http://localhost:4100/api/todos',{
      method:"GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(response => response.json())
    .then(data=> disptach(actions.setInitialstate(data)))
    .catch(error => {
      console.error('Error:', error);
    });

  }, []);

using axios



```

# Create Async Thunk [type1]

- currently we are making api call for data from backend using useeffect in component-
- becoz reducer are supposed to be pure function
- to make these call inside the reducer only we can use create async thunk
- CreateAsync Thunk is a fn which take string (action) and callback fn (for making api calls which returns promises)
- It is not a part of slice and reducer
- It has access to store
- It come from redux-toolkit library.
- Moving async code to reducer make the componetn lightweight and lesscode, and less responsibility.

- NOte::
  If we are using middleware in store then we need to pass the default middleware manually so that the thunk works correctly

```javascript

on reducer fle
- createAsyncThunk has its own dispatch fn

export const getInitialStateAsync = createAsyncThunk("todo/getInitialstate", (arg, thunkAPI)=>{
    fetch('http://localhost:4100/api/todos',{
        method:"GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(response => response.json())
      .then(data=> thunkAPI.dispatch(actions.setInitialstate(data)))
      .catch(error => {
        console.error('Error:', error);
      });


    // axios
    axios.get("http://localhost:4100/api/todos")
    .then(res => console.log("AXIOS::" + res.data))
})

on store file
- getDefaultMiddleware() return array of default middleware

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
export const store = configureStore({
    reducer:{
        todoReducer,
        noteReducer,
        notificationReducer
    },
    middleware:[...getDefaultMiddleware(),loggerMiddleware]
})

on component
import { actions, getInitialStateAsync} from "../../redux/reducers/todoReducer";
import { useSelector, useDispatch } from "react-redux";

 useEffect(() => {
    disptach(getInitialStateAsync())
  }, []);
```

# Create Async Thunk using extrareducer and not the dispatcher [type 2]

```javascript
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  todos: [
    { text: "Go to Gym at 6", completed: false },
    { text: "Study at 8", completed: true },
  ],
};

export const getInitialStateAsync = createAsyncThunk(
  "todo/getInitialstate",
  (arg, thunkAPI) => {
    // axios
    return axios.get("http://localhost:4100/api/todos");
  }
);

// Creating Reducer using Redux Toolkit
const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    // this is add action
    setInitialstate: (state, action) => {
      state.todos = [...action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getInitialStateAsync.fulfilled, (state, action) => {
      state.todos = [...action.payload.data];
      //action.payload.data (.data) becoz axios is returning the promise
    });
  },
});
```

# Pagination

```javascript
const App = () => {
  const [product, setProduct] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`url/?limit=10&skip=${page - 1 * 10}`).then((res) => {
      //url parameter to fetch limited and selected data
      // limit will give only n number of objects
      //  skip will skip n number of objects from starting
      setProduct(res.data);
      setTotal(res.data.total); // it is in the api
    });
  }, [page]);

  return (
    <>
      {product && product.length ? (
        <div>{productMapping}</div>
      ) : (
        <div>...Loading</div>
      )}

      <Pagination total={total} page={page} setPage={setPage} />
    </>
  );
};

const Pagination = ({ total, page, setPage }) => {
  // here total is 100 and limit is 30 from api

  handlePagination = (selectedpage) => {
    if (selectedpage <= 1 && selectedpage <= total / 10) {
      setPage(selectedpage);
    }
  };

  return (
    <>
      <div>
        <span
          onClick={() => handlePagination(page - 1)}
          className={page === 1 ? "disable-pagination" : ""}
        >
          ◀️
        </span>

        {[...Array(total / 10)].map((_, i) => {
          return (
            <span
              key={i + 1}
              onClick={() => handlePagination(i + 1)}
              className={page === i + 1 ? "style-pagination" : ""}
            >
              {i + 1}
            </span>
          );
        })}

        <span
          onClick={() => handlePagination(page + 1)}
          className={page === total / 10 ? "disable-pagination" : ""}
        >
          ▶️
        </span>
      </div>
    </>
  );
};
```

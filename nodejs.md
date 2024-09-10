# 1 Blocking and Non blocking Code

``` Javascript

Javascript Code
for(let i = 0;i<100000000000;i++){
    //doing nothing just consuming time
}
console.log('Task to be performed after loop');
console.log('I have to wait for this long loop to finish');


//nonblocking code

setTimeout(() => {
    console.log('Task to be performed after 5 seconds');
}, 5000);

console.log('I do not have to wait for this long loop to finish');
```
# 2 HTTP Server

create a server using Node JS http protocol.

steps:
1. Import http library/module (syntax = require("http"))

2. create server (syntax = createServer(requestlistener)) 
    this fn belongs to http module.
    ctrl+click leads to typescript file. 
    It return instance of that server. 
    it take parameter ie a callback fn request-listener
    requeslistener fn parameter itself takes two parameter - request and response (not a keyword)
    call back fn request listner has access to resquest and response

3. Specify a portno to listen to client's request(syntax = server.listen(portnumber))
    Note there can be multiple Nodejs server so to identify on which server do i have to send the response. use different port numbers
    for multiple server have different port number.
    server.listen can have parameters = portno, callback fn and a number

type in chrome brower = localhost:portnumber or http://localhost:3000/
this will display the console.
brower = inspect = network(it is for all the request sent from the browser) = refresh = localhost = see section header and response

``` Javascript
const http = require("http");
const server = http.createServer((request, response) =>{
    response.end('Welcome to NodeJS Server') // sending back response to client
})
server.listen(3100,()=>{
    console.log('Server is listening on port 3100');
})
```

# 3 Multiple Request

require("http")
createServer(req,res)
listen(portno, (cbFN))

Notes
one server can receive multiple request and send multiple response
res.end print message in localhost browers
listen port will print message in terminal
 localhost/address(it specify the page you want to visit)

 ``` Javascript
 const request = require("http");
const server = request.createServer((req,res)=>{
    console.log(req.url);
    // instead of cosole we can also write (res.write("message"))
    // both res.end and res.write messages will get printed
    // difference is res.write modify the message ie add more message but res.end ends the response.(res is a name of parameter)
    res.write("welcome to my application")

    // checking the type of url and based on that sending the different responses 
    if (req.url == '/product'){
        return res.end("This is a product page")
    }
    else if (req.url == '/user'){
       return res.end("This is a user page")
    }

    //return keyword is not necessary if i want to do some console/operations after the response ends. 
    // res.end("This is a response message")
})

server.listen(1200,()=>{
    console.log('This is listen message');
    
})
```
# 4 Render HTML/static file with http

currently we are rendering only static content of html page see below
if we want to render dynamic content (api and all) then template engine and view engine are needed to 
rendering dynamic content of the html page
<!-- <body>
  <div>
    <h1>Welcome to my Page</h1>
    <marquee behavior="" direction="">    
      <span style="text-align: center; color: blue;">importing HTML Page using nodejs  http module</span>
    </marquee>
  </div>
</body>
</html> -->

``` Javascript
const http = require("http"); // importing http module
const fs = require("fs"); // importing file system module

// syntax = fsmodule.readFileSync("htmlfilename") this return the data fetch from the html page 
const server = http.createServer((req,res)=>{
    const data = fs.readFileSync("node.html").toString();
    res.end(data);
});

server.listen(1400);
console.log("This is the html file")
```

# 5 Common JS Module

Two ways to create module 
    1. Common JS
    2. ES6 Module

1. Common JS (Four ways)
  ****Filename = above.js 
one way
    export multiple class,fn,properties and datastructure in a single go.
    export fn as property
    mostly used this. becoz 1st statement

```Javascript
module.exports = {
        add:sum // syntax = (anyName:function/propertyName)
    }
```

second way
    export a single property or fn or datastructure or class.
    export fn as property
```Javascript
module.exports.product = (x,y) => {
        return x*y
    }
```
    
    
third way
    export fn
    
```Javascript
module.exports = function(x,y){
        return x-y;
    }
```
    
fourth way(shorthand)
    exporting property

```Javascript
 exports.division = (x,y)=>{
        return x/y;
    }
    
    function sum(x,y){
        return x+y
    }
```

Importing from above.js js file

brick icon represents a fn
cube icon represents a property

importing = syntax => require("path") and now store in varialbe 

Result importing from above.js file

In above.js file sum and product are fn but when exported it become property of "export.module"

Every time when we use the above require fn it will run the above.js file so to see this just console 
any message in the above.js file. and when run in this file that message will get printed.
it doesnot matter if we execute "require" module multiple time it will only get printed once as it is saved as cache.

```Javascript
const result = require("./above.js");

const answer = result.add(5,4);
console.log(answer)

const answer1 = result.division(12,6)
console.log(answer1)
```
# 6 ES-6 Module

just write export or export default

"export" is for exporting multiple var,fn,class from single module
"export default" for exporting sigle var,fn,class from single module

```Javascript
export function sum(a,b){
    return a+b;
}

export const num = 100;

const num = 100;

export default num;
```
    
Importing for ES6 Module
Advantage:
    1.Increase readability
    2.increase performance by tree shaking only import that will be used will be imported and unused imports
        will be remove when import-all syntax is used.

Every file in JS is treated as a module.
use mjs as extension on both export and import i.e filename.mjs

To export all exportable item at once, syntax is (import * as any_Name from "./path") see codition
```Javascript
import * as file from './2from.mjs';

console.log(file.sum(5,6))
console.log(file.num)
```

To export few exportable item out of some , syntax is (import {fn/propertyName as anyName} from "./path")
```Javascript
import {sum,num} from './2from.js';

console.log(sum(5,6))
console.log(num)
```
# 7 Types of Modules

1. Internal/user Module (that are created,imported and exported by ourselved) == Application
2. Core Module (eg HTTp,fs module of nodejs) see... search nodejs coremodule/ api docs on web == Nodejs
3. External Module (api owner, db owner) ie third party
        If there is any database module that is not supported by inbuilt module of nodejs then who ever has created the database
        same company they will also build a tool  which  you can import in your application (internal module)
        process involes installing the third party library. see 4npm formore ddetails.

External module >> core Module >>> internal Module

# 8 Types of Modules

External module
All third party module  are also called as packages are handled by Package Manager
Roles of Package mmanager:

1. Installation of packages.
2. Version Management.
3. Managing Dependencies. = external packages
4. Pusblishing Packages. -- so other can use

Name of Package Manager for Nodejs,angularjs,reactjs is == NPM
Npm is bydefault installed in machine when we install NODEJS.that is wwhy called as defauld package manager and it is widely used
yarn is also a Package manager.
package manager is a concept and has nothing to do with nodesjs but npm has with nodejs. few expampleof package manage of different language
java has maven 
.net has Nuget,
python has pip.

Installing nodemon (in terminal write "npm i nodemon")
nodemon autorestart the server if there is any change in the code.
so now package is installed for this application only(VSCode).

# 9 Global Installation of Packages

Installing nodemon globally (in terminal write "npm i -g nodemon")
use this if not above (in terminal write "sudo npm i -g nodemon") administrator password will be required.
this can be seen in node_module folder > nodemon(folder) to check if installed.
now to run command (syntax is "nodemon filename.js")
so it basically restart the server on any changes. 

Note
The dependencies section in package.json file lists all the external dependencies 
required by the project. These dependencies are installed using the npm install command and 
are required for the project to function correctly. Examples of external dependencies 
include libraries, frameworks, and other packages that are not part of the Node.js core.

```Javascript
const http = require("http");
const server = http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url == "./product"){
        res.end("This is a Product page")
    } else if(req.url == "./user"){
        res.end("This is a User page")
    }
    res.end("client is listening on port 1111 on cient side")
})

server.listen(1111, ()=>{
    console.log("server is listening on port 1111 on server side")
})
```

# 10 Package.json file working/usecases
   
1. Manage dependencies.

2. manage scripts - starting app "(ie shorthand cmd to run program in terminal)", testing app
setting shorthand of any large command (eg for node pacakage manage = npm)

3. Details of application - Name,version,author,githuburl

Feature of package-lock.json
1. Auto generated by npm installtion
2. Helps with consistency of version on different machines.
3. prevents unwanted updates.

"npm init" command is used to provide details for the package.json file.

    Step::
    a. initializes npm package cmp=("npm init") with detais: name,version, liscense etc.
        Delet  packages.json, packages-lock.json and modules and then use above command if already have.
    b. provide details of the question asked in terminal give such as entrypoint (file you want to provide as     first) etc etc . to skip any question press ENTER.
        in created file you willl see the "scripts section" where shorthand command are mentioned.
        Modify the cmd anyName can be used. (anyname: "filename.js")
        To run = "npm run anyname"

    now if we again innstall the nodemon file it will not create the file but add the dependencies into the same file we created manually.

# 11 Dev Dependencies
imp to understand diff in "dev dependencies" and dependencies
Another type of Dependencies other then external and internal are dev dependencies
dev dependencies are part of development only and not production
to make any dependecies as "dev dependencies" syntax is (npm i -D packagename(ie nodemon etc))
now in the package.json file inplaace of "dependencies" we will see "devDependencies"
if i install mongodb it will add another dependecy in the same file.
to test the project the "dev dependencies" are used becoz it is in development phase and not the production phase

    for normal run
    becoz package.json file use "start" as shorthand notatation to run the program instead of writing "node filename.js" after package installation ("start": "node server.js")

    for normal run
    ("anyname": "nodemon filename.js") in package json file

    syntax to initiate shorthand ("anyname": "packageName filename.js") it will create the shorthand property
    syntax to run is ("npm run anyname")

    we dont commit git node modules so create a file name == (syntax = ".gitignore")

 NOTE::
if i delet the node_module then will have to run ("npm i") command to install all the dependencies.
this will install all the packages.
but this npm i command will also update the version of package such a nodemon or mongodb but our application is following the old version code only...otherwise application will start breaking or gives error. so to overcome this "package-lock.json" will help. It get created on its own while installlation.(by "npm i")




# 12 version understanding

semantic versioning

1. Major 1.0.0 = 1st digit represent major version = ie incompatible ChangeStream,may not fn as Before.
2. Minor 1.1.0 = 2nd digit Minor release = New feature with backward-compatibility.
3. Patch 1.1.1 = 3rd digit Patch version ie bug fixes, no significant change

patch means bug fixes, no significant change

symbols:: indicate the version of installation on doing "npm i"
1. "~" = npm can install latest patch release
3. "^" = npm can install latest minor release
3. no symbol = npm will install latest exact version

# 13 Removing MJS Extension::

steps::

1. initiate package.json file (using "npm init");
2. in package.json use "type:module" below "license" by doing so now we can replace ".mjs" with ".js"
3. Also can set shorthand property in script for any file.("npm run filename")

Description of type object::
When set to "module", the type field allows a package to specify all .js files within are ES modules. If the "type" field is omitted or set to "commonjs", all .js files are treated as CommonJS.

# 14 Understanding NVM (see pdf for installtion better understanding)

Different machines are using different version of nodes js npm: For that we have a tool "NODE Version Manager":
Understanding NVM to work with different versions of NODEJS.

Installing NVM on Windows

NVM is mostly supported on Linux and Mac. It doesn't have support for Windows.
nvm-windows, however, is a comparable utility developed by coreybutler to offer a
nvm experience in Windows.

To install NVM on Windows, follow these steps:

1. Download and run the NVM Windows installer from the following GitHub
   repository: https://github.com/coreybutler/nvm-windows/releases
2. Follow these instructions to complete the installation:
   use the link > Go to Assets > use nvm-setup.exe (install it) as shown in the
   following image.
3. Open a new command prompt window.
4. Verify that NVM is installed correctly by running the following command:
   nvm --version
   Basic NVM Commands
   Once you have installed NVM, you can use the following commands to manage your
   Node.js installations:
   ● To list all the available Node.js versions:
   nvm ls-remote
   ● To install a specific Node.js version:
   nvm install <version>
   ● To switch to a different Node.js version:
   nvm use <version>
   ● To set a default Node.js version to use in new shells:
   nvm alias default <version>

   Note: WE can install and use and set default by switching between multiple versions for node using NVM. by using above cmds.
   usage:: to switch b/w multiple version to use diffenrent feature of nodeJS

# 15 Axios

In a Node.js project, you need to fetch data from an API using the axios package. This package allows asynchronous HTTP requests in Node.js and simplifies the process of making API calls.

In this scenario, you'll use axios to fetch data from the https://api.codingninjas.com/api/v3/event_tags API endpoint.

read for full process --->> Documentation and usage guide for axios: https://rapidapi.com/guides/axios-async-await


Objectives

i) Install the axios package using npm.
ii) Make an HTTP GET request to the given API endpoint using axios to print the data as displayed in the expected output.
iii) Retrieve the response data.
iv) Print the response to the console as shown in the expected output section.

Note:
Ensure that you have the axios package installed in your Node.js project before proceeding.
Make use of asynchronous programming techniques while fetching data using axios.
Documentation and usage guide for axios: https://rapidapi.com/guides/axios-async-await

```Javascript
import axios from "axios";

One way 
    axios.get("https://api.codingninjas.com/api/v3/event_tags")
    .then((response)=>{
        console.log(response.data);
    }).catch(()=>{
        console.log("Data not fetched")
    });

Second way
    async function getData (){
        try{
            const response = await axios.get("https://api.codingninjas.com/api/v3/event_tags")
            const result = response.data
            console.log(result)
        }catch(err){
            console.log(err)
        }
    }
    getData()

```

# 16 Reading command line INPUT/terminal::

steps to use readline module

1. import readline module (syntax = require('readline'))

Note:: if type:"module" in package.json
require is not defined in ES module scope, you can use import instead
This file is being treated as an ES module because it has a '.js' file extension and 'C:\Users\package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension. or remove type:module in P'json file.

2. create-interface it takes two parameter as an objects readables and writable and return "interface"
            syntax = readline.createInterface({
                        input: process.stdin,
                        output: process.stdout
                    })
    process belogs to nodejs process which is carried by the OS.

3. using "interface" will read the value of the interface
    syntax = (interfaceName.question(para1, para2))
    question take two para || 1. answer:string  || 2. callback fn(parameter : string) => (return string bydefault) 

    we can create chain of "interfaceName.question()"

4. The close() method is needed to properly close the readline interface and release associated resources.

When you create a readline interface, it starts listening to the stdin stream (standard input). If you don't close the interface explicitly, it keeps the Node.js process running, waiting for more input. This might cause your program to appear to hang or not exit properly.
By calling close(), you're signaling to Node.js that you're done with the readline interface and it can release any resources it's using. This ensures that your program exits cleanly and doesn't unnecessarily consume system resources.

usage = To build command-line applications eg: (npm,nvm,git,OS)

```JavaScript
const readline = require('readline');
const enterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

enterface.question("Enter first Number", (num1)=>{
    enterface.question('Enter second Number', (num2)=>{
        const sum_concated = num1+num2; /// becoz by default is string
        const sum = Number(num1) + Number(num1); /// conversion to number
        console.log(sum_concated);
        console.log(sum);
        enterface.close(); //prevents the program from hanging;

    })
})
```

# 17 Filesystem Module Synch "fs" - Blocking


1. create file, update file and use data file
2. Two ways of working == (depends on you)
   blocking (manage by maintread) = for small file
   nonblocking way (manage by threadpool) = for large file
3. working with FS is I/O operation becoz Fs is mangaged by host OS and therefore progamming language have to depend on OS for accesses.

steps:

1. import fs module using require
2. fs.readFileSync("path",{encoding:"utf-8"}) ie it is sync operation it take two parameter 1. path || 2. {encoding:"utf-8"}
   fs.readFileSync() return buffer (bufer is a storage system as difference in speed of receive and sending, the transit data (between two stroage) to store that data).
   here sync refers to blocking or main tread working.
3. Either use string method "fs.readFileSync().toString()" method or use 2nd parameter as {encoding:"utf-8"} to get the correct format.

```JavaScript
// understanding FS Module.

const fs = require("fs");

//to read file content using blockingcode.
console.log("starting to read content")

// Tostring method
const buffer1 = fs.readFileSync("11data.txt");
console.log(buffer1.toString())

// {encoding:"utf-8"} method
const buffer2 = fs.readFileSync("11data.txt",{encoding:"utf-8"});
console.log(buffer2)


console.log("done reading")
```

steps

1. import fs module of core-nodejs (require("fs"))

2.  create and writing a file using fn (writeFileSync):  takes  name/path of file and  content as a parameter.   (return : void) ie why use try catch.
     If we run the program again with same file name it will overwrite / append in the existing file. or else recreate a file.

3. Append = fs.appendFileSync(file/path, "content")

Deleting a file :: syntax(fs.unlinkSync(path))
    fs.unlinkSync(path) :: return errror if name is incorrect. use try catch to handle such error
    so nodejs is unlinking the file from system and delet is being done by OS so named as unlinking.


```JavaScript
//importing fs module of core-nodejs
const fs = require("fs");

console.log("operating being perform")

//create and writing
try{
    fs.writeFileSync("data2.txt", "name:rahul, age:26")
}catch(err){
    console.log('err');
    
}

//appending data to existing file
fs.appendFileSync("data2.txt", "/nname:nancy, age:22")

// deleting a file
try{
    fs.unlinkSync("data2.txt")
}catch(err){
    console.log("File doesnot exist")
}

console.log("operation done")

```

# 18 Filesystem Module Asynch "fs" - Nonblocking 


Node js give more priority to asynch operation over synch operation
This code will now be performed by the tread pool.

steps:

1. import fs module of core-nodejs (require("fs"))
2. Readfile() = takes 2 parameter =-- filename/path and callbackfn. Now cbfn take two paramenter err and data :: so either return err or data:buffer(use tostring method.)
3. Reading Data


```JavaScript
//import fs module
const fs = require("fs");

//Read data
fs.readFile("11data.txt", (err, data)=>{
    if(err){
        console.log(err);
    } else{
        return data.toString();
    }
})

//write data
fs.writeFile("11data2.txt", (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('file has been treated');
        
    }
})

//append data

fs.appendFile("11data2.txt", "/n parashant:fathername", (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('File is updated');
    }
})

//delet file

fs.unlink("11data.txt", (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('File is Deleted');
    }
})

```

# 19 Path Moduel 

if data is in any other path or folder
1. import path module
2. pathmodule.join("rootfolder", "innerfolder",...,"filename.txt")
3. pathmodule.resolve("rootfolder", "innerfolder",...,"filename.txt")
4. Tofind file Extension = pathmodule.extname(join or resolve)


```JavaScript
const fsmodule = require("fs")
const pathmodule = require("path")

//join = return actual
const filepath = pathmodule.join("12src","home","data.txt")
console.log(filepath);

// resolve = return absolute path
const filepathResolve = pathmodule.resolve("12src","home","data.txt")
console.log(filepathResolve);

//extension
console.log(pathmodule.extname(filepathResolve));


// can use either of the above two path will give the same result.
fsmodule.readFile(filepath, (err,data)=>{
    if(err){
        console.log(err); 
    }else{
        console.log(data.toString());
    }
});
```
# 20 Debugging 



Why Debugging ?

1. Understand why our code isn't working as expected.
2. Improve the quality and reliability of our applications.
3. Learn from our mistakes and become better developers.

Debugging::
// debug commands
// 1. start debug cmd = node inspect filename.js
// 2. set breakpoints = setBreakpoint("filename.js", lineno.)
// 3. to see the operation = watch("variable name")
// 4. continue debug to go breakpioint after debug = cont
// keep on contnue and change the watch variable name to find the error
// 5. exit the debug = ctrl + c

// How debugging in Node.js is different than in JavaScript ?

1. Environment: Node.js runs in a server-side environment, whereas JavaScript typically runs in the browser.
2. Debugging tools: Node.js has its built-in debugger, while JavaScript relies on browser-based tools like Chrome DevTools.
3. Access to server-side resources: When debugging Node.js, you have access to server-side resources like the file system, databases, and network connections.

---

Debugging in VSCODE::

1. go to left panel on debug setion >> click on create launch debug >> choose the languague as node
2. set the breakpoint >> by adding red dots on the page numbering panel.
3. now click on start button at top in debug panel.

4. debug has section that willl show the breakpoints, variable, watch, callstack whre we can see the coder run.

5. imp = varialble, watch for inspection write variable name by outselves
6. stepover = go to next line ie the next break point.
7. stepinto = enter the loop or fn else will complete the whole loop/fn in one go.(if no BP)
   Note::In stepinto even though if there is no breakpoint at any step still it will move to that step.
8. stepout = to come out of fn or loop even when it is half done.



# 21 Nodemailer 1

Email in Nodejs::

usecases : Getting verifiaction email on signup or activity email on the account changes/updates etc.

steps::

1.  Intall library (npm i nodemailer)
2.  Import nodemailer (require"nodemailer")
3.  Fn to configure email and send it. (This Asynch operation therefore required ASYNCH AND AWAIT)
    a. create a Email trasporter = it take our email and send it to the email server. and according send the email to the user(ie what kind of email is to be sent to user).

    b. For that SMPT protocol will be required. 2option :: 1. Either we can configure out our own SMTP server that take lot of complexity. (for big companies)

        2. take 3rd party email server eg google email server. (small company)

        3. creating trasporter below :: createTransport() takes options as parameter see below:
        nodeMailer.createTransport({
            service:"gmail",
            auth:{
                    user: "rahuls.sumeru@gmail.com",
                    pass: "" //go to account security>>2step verification page >> inlast see "App password" >> customise the name "anyname">> 16 character passcode will be generated and then use it here.
                }
            })

    c. configure email content :: uses to,from,subject, text... read in nodemailer documentation for more details.

    d. send the Emails:: (sendMails(contentVariable)) :: return promise
    Use try catch to avoid below.
    condition ::
    sender email credentials are not correct.
    receiver email is not correct.
    Internet is not working
    SMTP protocol is not working.

Email in Nodejs
usecases : Getting verifiaction email on signup or activity email on the account changes/updates etc.

steps::
1. Intall library (npm i nodemailer)
2. import nodemailer
3.   configure email and send it. (This Asynch operation therefore required ASYNCH AND AWAIT)

```Javascript
const nodeMailer = require("nodemailer");
async function sendMail(){
    // create an email transporter
    // SMTP (simple mail transfer protocol)
    const transporter = nodeMailer.createTransport({
        service:"gmail",
        auth:{
            user: "rahuls.sumeru@gmail.com",
            pass: "heooryhucuchdmho" //go to account security>>2step verification page >> inlast see "App password" >> customise the name "anyname">> 16 character passcode will be generated and then use it here.
        }
    })

    // configure email content

    const mailOptions = {
        from: "rahuls.sumeru@gmail.com",
        to:"rajsoni9644@gmail.com",
        subject:"Testing the Nodemailer library",
        text:"This is a email using Nodemailer in NOdesjs"
    }

    // send email :: return promise

    try{
        const result = await transporter.sendMail(mailOptions);
        console.log("sent Email successfully")
    } catch(err){
        console.log(`Email send failed with error` + err)
    }
}

sendMail()
```

# 21 Nodemailer 2 (readline and promises)
```Javascript
import readline from 'readline';

const einterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


/// Use of promise
function askQuestion(question) {
  return new Promise((resolve) => {
    einterface.question(question, (answer) => {
      resolve(answer);
    });
  });
}

//here the problem was email variable was accessed before it was declared due to async nature of code. so when you returned a promise it will resolve when it will get the answer
// promise is used when you have to wait for the response for indefinitely
// settimeout can also be used but it not a good practise.

async function getEmail() {
  const email = await askQuestion("Enter Email address: ");
  einterface.close();
  console.log("Email entered:", email);
}

getEmail();

const Solution = async () => {
  // Write your code here
  const trasport = nodemailer.createTransport({
    service:"gmail",
    auth: {
      mail: "codingninjas2k16@gmail.com",
      password: "slwvvlczduktvhdj"
    }
  })

  const mailoptions ={
    from: "codingninjas2k16@gmail.com",
    to: email,
    subject: "Coding Ninjas",
    text: "The world has enough coders; be a coding ninja!"
  }

  try {
    const result = await trasport.sendMail(mailoptions)
  } catch(err){
    console.log("Error occured")
  }
};

```

# 22 Events in Nodejs 


Events in Nodejs::

here events are performing using http module

What are events ?

1. A click of button
2. A change in data
3. A change in file

Node.js has several built-in events, such as:

1. 'data': Triggered when a readable stream receives new data.
2. 'error': Fired when an error occurs in the application.
3. 'listening': Emitted when a server starts listening for incoming connections.
   Using events to read data on post request

When recieving the data from the client using the post method. eg
req.method=="GET"
req.method=="POST" = currently using post
req.method=="PUT"
req.method=="DELET"

Data is received in the form of chunks, chunks are added in the database one by one once received.
and the client data is sent is received by the on server body

request.on Event notify the server that the data has been sent from the client.
req.on("EventName", (chunk)=>{})

Eventname can be = error,data,listening,end
So every time data event is generated we received a chunk aand add/append it to the body.

End event notify that all the data/chunks has been received. ie request has been completed

we have checked "GET" by using the url eg localhost: 1200/product (here by "/product" we know its a get api) but in "POST"
we need a UI (eg Angular,React, HTML JS, Vanilla HTML JS) to test it but as a backend developer we have test our api without the help of browser/UI. so there are many such api tools to test. so we will se How POSTMAN works.

```Javascript
const http = require("http");
const server = http.createServer((req,res)=>{
    if (req.method=="POST"){
        let body = "";
        //expecting data from client
        req.on("data", (chunk)=>{
            body+=chunk.toString();
        })
        req.on("end",()=>{
            console.log(body);
            res.end("Data is received")
        })
    }
    res.end("Welcome to Node JS") // this will get printed irresptive of http method type post,get,put,delet.etc
});

server.listen(1111, ()=>{
    console.log("Server is listening on port 2222")
})

```

# 23 POSTMAN API - For Testing our API

Free to use for learning and small teams.
Need to install in the window for use.
We can test different types of API:
REST api
SOAP api
HTTP api = we are testing this rn
Graphql

working ::
POSTMAn act like a client/UI that sends the request to our server. select request type >> enter the localhost url (http://localhost:2222) >>> send. currently we will explore "body" >> raw > text >> JSON.
now save it if you want
before send the request make sure that our server is running.
on sent we will receive the last res.end message in the postMan Body. ie (welcome to nodesjs) and why we are not getting ("Data is received") even after the data has been receive in the terminal this is becoz the "request and all the below events " are happening asynchronously.

To check this see console of "body" is printing after console of "function ends here." so the second console it was giving undefined for console.log(req.body) in the first console.(note : console with for better understandin make each some data of own)

To check this see console of "body" is printing after console of "function ends here." so the second console it was giving undefined for console.log(req.body) in the first console.(note : console with for better understandin make each some data of own) ... Also before else was used we are getting "wecolme to nodejs" in postman response section after else statement we willl get "data is received" becoz now the if statement is also execute not the else as the request was of type POST.

now using else we have figure it oout so if the req is POST only then that code alone will execute and if it is of type (get, delet, put) then else code will be executed.

Note all these events are coming from http request in next lecture will see how to create our own event

```javascript
const http = require("http");
const server = http.createServer((req,res)=>{
    if (req.method=="POST"){
        // console.log(req.body);
        //expecting data from client
        let body = "";
        req.on("data", (chunk)=>{
            body+=chunk.toString();
        });
        req.on("end",()=>{
            console.log(body);
            res.end("Data is received");
        });
    } else{ 
        console.log('Function Ends here');
        res.end("Welcome to Node JS")
    }
    
});

server.listen(2222, ()=>{
    console.log("Server is listening on port 2222")
})

```

# 24 Request and response Objects

Understanding Response Methods and Use of return Keywords

Response method (previous we have studies "end" methods (res.end())) and // understanding when to use return keyword with "end" method

Response is a object in createserver method. which has methods suchas = end, write, end = ends the response as well as ends the write of the response so once response is ended there must not be any "write" or "end" typially but in case if we want to add more end then use return key with end of the previous response. to make sure fn is also ending with the response cycle ends. OR Also we can put the next "end" method in else block. so will only run if if-block is not satified "end" method ends your request response cycle and return the response back to client.

write = write the response to verify or check that response has been executed but doesnot end the response. It should always be written always before "end" method

Request is a object, its methods are = url,

originalurl = complete base url
url = last part of url this is same or modified during the process.

req.originalUrl = for original url
req.url = for part of url
req.body = request body
req.file.filename = for select file object(multer >> fileupload)
req.params.parameterName = for url parameterss
req.query.queryName = for query parameters
req.headers = for request headers
req.cookies 
req.ip = to get ipAddress
req.method = to check request methods

Response is a object, its methods are = url,
RESPONSE OBJECT::

response.end
response.write
response.flash
response.download

Express::
response.json
response.send
response.render
response.redirect
response.cookie
response.render
response.sendFile or sendFiles doubt


```Javascript
const http = require("http");

//createServer fn return the instance of server which has been created using http.

const server = http.createServer((req,res)=>{
res.write("This is coming from Nodejs server");
if (req.url == "/first"){
res.end("This is first response"); // either use return in this line or else put the next end in else-block. try both for practise
}else{
res.end("This is a default response");
}
})

// listen fn is asynchrounous fn so adding console to understand better
server.listen(3200,(req,res)=>{
console.log("server started listening at 3200");
});
```

# 25 Events 


here events are performing using "events" module

Creating our own custom Events:: //here events are performing using "events" module

How Event-Driven Apps work?
let take eg of instagram or facebook.

Event >> Event Listeners (see eg below::)

>>>> Save to Database(create post)
User creates a Post (event)>>>> Send Notifications (these 3 are event listeners)
>>>>Updates Timeline

will be using the core module of nodesjs ie events to form eventdriven architecture.

steps::
1. import "events" module
2. class will inheritate form event module.
3. module emits the events "this.emit(string)" = so basically through event "emitter" class we are creating our own events

emits the event
as require is not defined in ES6 module becoz mjs extension. "const eventEmitter = require("events")"
so will use import of es6

import \* as events from "events"

```Javascript
// so in events.EventEmitter = "events" is the module and Eventemitter is the single class from that module.
export class UserEvent extends events.EventEmitter{
//Events
    createPost(content){
    console.log("Post has been created");
    this.emit("postCreated"); //this is eventlistner first parameter
    }
}
```
see 5eventlistener file then see then studt the result below::
output::
Post has been created
saving to Database
Notification sent
Timeline updated

so all the fn are called synchorously in the order they were registered. so using this event emitter class we are able to create our own events and add as many listener as we need.
why we have used half of the code in the new file see in next lecture.


```Javascript

import { UserEvent } from "./5customEvents.mjs"; // importing the class

// calling the class by creating the userEvent object.
const userEvent = new UserEvent();

//now assigning the event listner to userEvent object.
userEvent.addListener("postCreated", savetoDB);
userEvent.addListener("postCreated", sendNotification);
userEvent.addListener("postCreated", updateTimeline);

// Add eventlistener fn take two parametet = name of event ie "this.emit" and callback fn.

// these are the three fn which will be execute once eventlistener(creating post) is executed.

function savetoDB(){
console.log("saving to Database")
}

function sendNotification(){
console.log("Notification sent")

}function updateTimeline(){
console.log("Timeline updated")
}

// calling the class' method using above object
userEvent.createPost("This is my first post");

```

Advantage of Eventdriven Architecture::

Advantage of Eventdriven Architecture::
why we have used eventlister becoz we can also call those 3 fns directly inside the "method" of the "class".

Advantages
1. Scalability ==>> when no. of user increases it will not affect the application so highly scalable.

2. Loose coupling ===>> (vv imp) ie if the methods has the power to call all those 3fn that will tightly couple them. ie why we have give the work to eventemitter. so when our fn dont know about eachother and still they are woking with each other so this thing is achieve by Event driven architecture.
Also easy to manage separately with making any change to the class and its methods
various concepts are based on this loose coupling things such as SOLIDS, Dependency-inversion, Seperation-concern, single-resposibility principle, Design patterns.

3. Better responsiveness ==>> ie highly performant.

# 26 Best Practises


1. Modularize your code: (more module rather than having less module doing multiple task)
2. Use descriptive naming conventions (fn performing a task use name as verb eg "updatingTimeline" instead of "timeline")
3. Keep module responsibilities clear (SRP - single responsibility principle or SOC - ) iewhy create 3 different Eventlisters for those 3 fns. (so our code has only one reason to change multiple could result in disruption.)
4. Use version control like Git

To ensure that your code remains easy to maintain, readable, and free of errors, it is crucial to adhere to coding standards and implement best practices. These guidelines can help you establish efficient coding habits and optimize your workflow. Some of the most commonly recommended coding standards and best practices include:

1. Consistent Naming Conventions:
   Use consistent naming conventions for variables, functions, and classes, following the guidelines of your programming language.

2. Meaningful Names:
   Use descriptive names for variables, functions, classes, and other identifiers. This makes your code self-explanatory.

3. Comments:
   Add comments to explain complex or non-obvious parts of your code. Comments should be concise but provide enough context.

4. Modularization:
   Break your code into small, modular functions or classes. Each should have a single responsibility (the Single Responsibility Principle).

5. Error Handling:
   Implement proper error handling to gracefully handle exceptions and errors. Don't ignore exceptions or use overly broad catch statements.

6. Version Control:
   Use a version control system like Git to track changes and collaborate with others. Follow branching and merging best practices.

7. Testing:
   Write unit tests to ensure your code works as expected. Follow test-driven development (TDD) principles if applicable.

8. Code Reviews:
   Encourage code reviews within your team to catch issues early and share knowledge.

9. Documentation:
   Provide clear and up-to-date documentation for your code, including how to use it and any dependencies.

10. Security:
    Be mindful of security best practices, like avoiding SQL injection, validating user inputs, and using secure authentication methods.

11. Continuous Integration/Continuous Deployment (CI/CD):
    Implement CI/CD pipelines to automate testing and deployment processes.

It's important to keep in mind that coding standards and best practices are not universal and may differ depending on the programming language and specific project requirements. Therefore, it's crucial to be adaptable and flexible with your coding practices to ensure they meet the needs of your team and project as they evolve.


# 27 Working with Express JS

Express is a Nodejs framework.

Framework = It help developers to create application in less time becoz it has alot of inbuilt feature and library which allows you to create your application in less time with moe sophisticaton.

programing languages(frameworks){
Nodejs: Express,
python: Djano,
Java: Springboot,
C-sharp: dotnet,
}

What problems does Express solve ?
Some of the main problems that express solves are::

1. Routing::
   make easy implement a routing to work with different URLs, for eg http://employee or http://employeeemployee/id

2. Middleware:: It is act as a pattern which express uses to handle requests and send responses.
   add Request in server >>>> middleware (get access to request to modify the request for if you want to log each request received by server) >>>>>> request-handler

3. TemplateEngine::
   Help send HTML Dynamic files (changing content)
   There are multiple template engine which we can use to send dynamic content(highperformance) to our server.

Advantages of Express

1. Easy to learn = use JS grammer and syntax only
2. High Performance - server side applicaton.
3. TemplateEngine - End to End MVC

creating server using a Express js
In-Terminal = For express we have to use "node filename.js" unlike other external module in which we have to use their name(ie external module name)

steps::(Note:: it is not a core part of Nodejs)
1. Install Express (syntax = npm i express)
2. Import Express(now we dont neeed to import http as it is internally taken care by express)
3. Creating a server by calling the express class/method of express-module.(syntax = express())
4. handle request using directory such as get,post,delet, post, use(is for all request-type).
"use" method take handler(ie a middleware)
"get" method take 2 parameters = a. Path, b. callbackfn c. next()fn

5. Listen to the request on specified post (syntax =listen(portNo, callbackfn)) similar to http

```JavaScript

//import
const express = require("express");
//create server by calling the express class/method of express-module.
const server = express();
//handle request
server.get("/", (req,res)=>{
    res.send("Welcome to Express Server") //it is wrapper fn (ie it internally calls the "end" fn of nodejs but add more properties such as request-header, content-type,content-length)
    //here we also have access to method properties of nodejs but if this block is executed then this confirm that it is a "get" request. becoz if it is not a get-method this fn will never be executed.
})
//listen request
server.listen(1478, ()=>{
    console.log("Server is listening on 1478")
})
```

# 28 Middlewares

Middleware

Express is also a open source justlike NodeJS
to see what is happening behind the scene below is the link
https://github.com/expressjs/express/tree/master/lib = here are vairous file too look upon

Defination:
Middleware :: Middleware are the request-handler which intercepts the request and modify them and then call the next middleware in the pipiline.

When a request is send by the client and by the time request reaches to the request-handler, in between if we want to do any work on the request that is where middleware (interseptors) helps us we can imagine it as a pipeline on far ends are client and request-handle(ie last middleware which doesnot call next middleware but return the response ie res.end or res.send object) and in between as many middleware we want.

Interceptor are just like request-handlers only::
Usecases:: Middleware
1. To verify if the request is authenticated.
2. To check data is valid or not.
3. To log the request.

creating the middleware:
Order of the middlwar is important 1middleware comes first in queue and then 2 3 4 and last. ow unexpected result.
res.send return the response so it will not go to the next middleware so instead we will do log(to check).

Now if the middleware is not ending/return the response then it is its responsibilty to call the next middleware in the pipeline. this should continue until the middleware return the response. other wise the browser kept loading as there is no response received from the server.

So to call the next middleware we will be using 3rd parameter of the callback fn ie "next" (req,res,next){next()}
Also if we return the response in any middle middleware then using next() will give error ==>Cannot set headers after they are sent to the client

```Javascript

const Express = require("express");
const server = Express();

//one way => server.get(path, cbfn, cbfn...lastcbfn)
server.get("/" ,
    (req,res,next)=>{
        // res.send("Hello, This is the 1st Middleware");
        console.log('C/L, 1st Middleware hit');
        next()
    } ,
    (req,res)=>{
        res.send("Hello, This is the 2nd Middleware");
    })

//second way  (better practise) => server.get(path, cbfn, next)>> server.get(path, cbfn, next) >> last-server.get(path, cbfn, next)

server.get("/" ,
    (req,res,next)=>{
        // res.send("Hello, This is the 1st Middleware");
        console.log('C/L, 1st Middleware hit');
        next();
        });

server.get("/" ,
    (req,res)=>{
        res.send("Hello, This is the 2nd Middleware");
    });


server.listen(1471,()=>{
    console.log("Server is listening to port 1471");
})
```

# 29 Application Level Middlewares

Middleware help in receive,handle,modify and pass the request in the pipeline.

Two ways to pass the array in the method function (get,post,put,delet,use(forall))
//one way = passing as a separate functions :: ordering of passing the fn is imp
secondway = passing as a array of function :: ordering of passing the fn is imp

Route level request
In this part of code below :: if in path we write "/send" in place of "/" then all the callback fn passed will be executed for that "/send" url only else will receive error(Cannot GET /) in the browser.
    // server.get("/send", [firstMiddleware, secondMiddleware],(req,res)=>{
    //     res.send("This is the 3rd Middleware");
    // })

Appplication-level request (Global)
So now if i want to create a middleware that run for all the paths and all the http-methods.ie works for all the request received on the server..we will use "USE" method of express-http-methods.


```Javascript
const Express = require("express");
const server = Express(); 

function globalMiddleware(req,res,next){
    console.log("Logging Application-level M'Ware");
    next();
}

function firstMiddleware(req,res,next){
    console.log("Logging 1st M'Ware");
    next();
}

function secondMiddleware(req,res,next){
    console.log("Logging 2nd M'Ware");
    next();
}

//for all kinds of requests and paths
server.use(globalMiddleware);

//one way = passing as a separate functions
// here path is "/"
server.get("/", firstMiddleware, secondMiddleware,(req,res)=>{
    res.send("This is the 3A Middleware");
})

//secondway = passing as a array of function
// here path is "/send"
server.get("/send", [firstMiddleware, secondMiddleware],(req,res)=>{
    res.send("This is the 3B Middleware");
})

server.listen(1234, ()=>{
    console.log("Sever side logging:: 1234");
})
```

# 30 Type of HTTP request

HTTP request has noting to do with JS its an Protocol which is implement across difference programming languages. see below link for more details.
https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

Get = to retrieve data from server
post = to add new-data to the database.
put = to replace/update the old-data with newdata.4
Delet = to delet a resource
CRUD opeation (create(POST),read(GET),update(PUT) and delet(DELET)) = above four request are part of this operaton

Handling get(done in previous lecture), post,put and delet request 
path must be same in all.
using postman to test the http api.

In Node we are using if-else block to identify the request type but in express it makes it easy.

```javascript
const Express = require("express");
const server = Express();

// get
server.get("/",(req,res)=>{
    res.send("This is a GET request to read the resource")
})

//post
server.post("/",(req,res)=>{
    res.send("This is a POST request to create the resource")
})

//put
server.put("/",(req,res)=>{
    res.send("This is a PUT request to update/replace the resource")
})

//Delet
server.delete("/",(req,res)=>{
    res.send("This is a DELET request to delet the resource")
})

server.listen(4100, ()=>{
    console.log("Server is listening on port number :: 4100")
})

```

# 31 HTTP Headers

1. Provide metadata about the request or response, such as the content type or length.
2. Set cookies to store user-specific data.
3. Control caching behavior. (caching is a optimization technique to store some data in memory to avoid pulling data from the database every time when open an application), IT is a advance concept.
4. Communicate server-specific information to the client.module

Popular HTTP Headers

1. Content-Type = server sending data to client or viceversa, decides the type of contents.
2. Authorization = to pass authorization data ie login,JWT token to verify the client
3. Accept-Language
4. User-Agent = (reqest is receiveing from which type of device= mobile,desktop,webapplication etc)
   There are many more header here = https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers

How express handles the Header-method of http api.
so response object has a methods set
==(ie res.set("header-type","any"))==

in postman >> in response section >> header >> find content-type (there are few already present that are bydefaut estd during client server communication)

HTTP header has noting to do with nodejs or expressjs it is relation to webapplications.

status codes:: It is a bydefaut header (https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
Informational responses (100 – 199)
Successful responses (200 – 299)
Redirection messages (300 – 399)
Client error responses (400 – 499)
Server error responses (500 – 599)
syntax == res.status(number(eg from 100 to 599)).send("xyz")
use case:: clients able to understand the response better. ie what happened to the request they send.

```Javascript

const Express = require("express");
const server = Express();

// get
server.get("/",(req,res)=>{
    res.set("content-type","plain/text")
    res.send("This is a GET request to read the resource")
})

//post
server.post("/",(req,res)=>{
    res.status(201).send("This is a POST request to create the resource")
})

//put
server.put("/",(req,res)=>{
    res.send("This is a PUT request to update/replace the resource")
})

//Delet
server.delete("/",(req,res)=>{
    res.send("This is a DELET request to delet the resource")
})

server.listen(4111, ()=>{
    console.log("Server is listening on port number :: 4111")
})
```
# 32 Loading Static(html,css) file using Express

Learn how to serve HTML file using Express Server (this time Dynamic content)
we can server any kind of file html,css,js

Import Express
create server
use http method on server
In express we dont need "fs" (module >> convert to string >> send to browser) rather we can just do it directly using static method (is a built-in middleware function ) of express. It take path as input. and then take the wrapper fn "use" that takes middleware. //again order of middleware
eg. of static files are cssfiles, bootstrapFiles, CDN files.(we dont make any modification to those file we send as it is
Most used practise :: will create a public folder and store all static files in that. so access these file we dont need any kind of authorization or authentication ie to server directly to the clients.

```Javascript
const Express = require("express");
const server = Express();

//middleware
server.get("/", (req,res)=>{
    return res.send("Welcome to Express")
})

// as we are returning above so will not show directly using (locahost1245/"index.html") we can access it is same as get method of http.

//only files inside public will accessbile so homefile that is outside the public folder is not accessible.
server.use(Express.static("public")); //middleware
// server.use(Express.static(__dirname,"public")); //can be use check


server.listen(5678, ()=>{
    console.log("server listening on 5678")
})
```

# 33 MVC 

Express - A Web Framework
• Modern = Data-intensive applications (fb,insta etc)
• High-Performance = less-time to process query.
• Scalable = application in size(eg user grow or feature grow.)

Webdevelopment require a architectural-pattern there are dozens of patterns available but we will be studying 3 most popular and efficients architectural-patterns. ie MVC, RESTAPI, MICROServices.

1. MVC - Separation of Concerns = It is designed for DEsktop based browser,webbroweser.
   view = present HTML page
   MODEL = represent your data
   CONTROLLER = handle request

MODEL
↓ ↓
UPDATES MANIPULATES
↓ ↓
VIEW CONTROLLER
↓ ↓
SEES→ USER → USES

2. REST = The purpose of restAPI is to provide a cross platform support for servers and clients. So all the below three clients (Desktop/mobile/television) communicates to a singel Server(RESTAPI_SERVER). Which is not POssible with MVC.
   That is why most popular platform to build application

Desktop/mobile/television Client >>>> REST Server
Desktop/mobile/television Client <<<< REST Server

REST = Representational State Transfer Protocol

3. Microservices:: Highly Scalable architecture (eg fb,ola,netflix)
   Distributes of your application on accross machines/multiple-server so that to serve more clients and more request without server failing. So any of the services/server fails, it doesnot affect the whole application.
   Also we can create the copy of the feature/server to handle some request and another set of request to be handle by the origin server. In this way we can scale up and scale-down our applicattion. see image in SS.

---

MVC (Model View Controller)

1. Model = Represents Data and Business-logic (It take attribute and fuction)
2. View = UI and Display-data.
3. Controller = Handle Request, Update model and send responses. it the IMp componenet and estb communication between model and view

---

Project - Inventory Management (MVC based pattern Project using Express)
Description :: It stores the product like backend system of e-commerece applciation like amazon

Creating view by creating html and css files in view folder
creating js file in controller folder

Now controller has multiple methods to server request to client

ViewEngines/ View Templates = Allows you to embed your JS Data or your Dynamic content which could be inside model or controller to be added into the HTML FILE.
In express there are many different options/templates of view engines such as Pug,Handlebars and EJS. We will study EJS. syntax => <div><%= variable %></div>
// It has Apache liscense ie free to use.
// by converting the format of html to ejs and then while rendering browser convert the ejs file into html again.

---

Creating Layout
We need to install express ejs layout it is library of express(syntax = npm i express-ejs-layout)
In layout we will be putting reusable html components.

# 34 Linking CSS in MVC Application 
 app.use(express.static("public"))
 1. create a public folder in root directory, inside it create CSS folder and then style.css file
 2. now in layout page link with href as path "/css/style.css"
 we are not going to root then public and then css to file becoz public is directly accessible to the client
 via 
server.use(Express.static("source/views")); //through it serach for the static-file


# 35 A Express Validators

export default keywords takes three things
    1.hoisted declaration (can be used even before declaration)
    2. class
    3. assignment declaration

Using express-validator 
install express-validator (npm i express-validator);

then below are the next steps

```javascript
import {body} from "express-validator" //this refers to the body of our request
import { validationResult } from "express-validator";

const validateRequest = async (req,res,next) => {
    console.log(req.body)

    //1. Setup rules for validation
        // import body method of express-validator
        // "gt" stands for greater thatn
    const rules = [
        body("name").notEmpty().withMessage("Name is required"),
        body("price").isFloat({gt:0}).withMessage("Price should be a positive Value"),
        body("imageUrl").isURL().withMessage("Invalid Url")
    ];

    //2. run those rules
        // running these above rules is async operation ie I/O opeation so we need to use promises here
        // will run every rule of that rules array
        // rule.run(req) (.run is a method of expressvalidator and  takes the request object as parameter)
    await Promise.all(rules.map((rule)=>{
        rule.run(req);
    }));

    //3. check if there are any errors after running the rules.
        // importing validationResult from express validator
        // this take reqest object as parameter
        // this validaterequest return all the error which occurs in the above three rules.
    var validationErrors = validationResult(req);

    //4. If there are errors then return the error message.
    if (!validationErrors.isEmpty()){
        res.render("new-product", {errorMessage: validationErrors.array()[0].msg}) //convert to array and return 1 error.
    }
    next()

}
```

# 35 File Upload Multer

fIXING ISSUE = filename = new Date().toISOString().replace(/:/g, '_')

FileUpload = Using 3rd party Library Multer (very popular) in express.
++++++++++++++++TO test this middleware we use Form-data in POSTMAN ++++++++++++++=
More features of multer are puting vaidation,filters,uploading files and others.

Steps::
1. Install Multer
 path as "./public/avatar"
or 
path.resolve("public", "avatar")
2. Changes in View(type of file to be upload). png or jpeg or img

3a. Handling the form to make use of files(till now only text)
3b. Middleware to handle file (we will take the file from the cient and save to our folder and then take that url and store that url).
3c. Apply the Middleware
Update Controller to update urls of Images.

```JAVASCRIPT
import multer from 'multer';
import path from "path";

const storageConfig = multer.diskStorage({
  // Write your code here
  destination:(req,file,cb)=>{
    cb(null, path.resolve("public", "uploads")); // orUse cb (null, "./uploads/images/") //null is whre we can appply validation if folder exist of not or do you have tthe permission to aceess the folder etc.
	
  },
  filename:(req,file,cb)=>{
//nameAlternatives = new Date().toISOString() + file.originalname
    const name = new Date().toISOString().replace(/:/g, '_');
    cb(null, name);
  }

});

export const uploadFile = multer({
  storage: storageConfig,
});

//indexpage=
app.post("/", uploadFile.single("image"), formValidation, registerUser); //singlefile


app.post("/", uploadFile.array(input-field-name, maxcount), formValidation, registerUser); //multiplefile
	also add "multiple" in inputfield to add multiple files.
```

# 36 Sessions & cookies

Client(cookies) >>>>>>>>>>>>   Server(Sessions)

Http is a stateless protocol that means there no state b/w client and Server which means every request sent from c2s and response send from s2c are independent of eachother ie one request has notting todo with other request

So how would a Server got to know it is the same client who send the request previosly. using Sessions Server got to know who is that person.

Using Sessions, server creates a uniques session ID of the client using this id server identify the client and client store that seesion ID in something called as cookies

Session Id is stored by session on the server and same is stored on the client, it is a same mechanism, which is used in the browser, cookies has nothing to do with server, server uses seesion and cilent uses cookies so whatever data is sent by server is stored in the cookies on clientside and on every request sessionid/cookies is also sent to server which then identify the client.

So seesion help in statefull communication on stateless http protocol

```javascript
npm i express-session

import session from "express-session";

//index page = now with the for each request, session obj will also get attached to request.
app.use(
  session({
    secret: "keyboard cat", //(takeany complex key)
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, //becoz communitcation is happening on http not on https
  })
);

// controller page == implement in login fn after authentication of the entered mail id and password so that client will now send session object along with the request

req.session.userEmail = req.body.email;

// middleware page
export const auth = (req, res, next) => {
  // Write your code here
  if (req.session.userEmail){ // userEmail is the key that is attached in the session object in above code
    next()
  } else{
    res.redirect("/login") // will sent the request to this address ie login
  }

};


// index

add middlerware on all request except for login and register.

***destroying session..also the cookes
// on controller page = along with the session destroy it end it will cear the cookie as well
logout(req, res) {
    // on logout, destroy the session
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect('/login');
      }
    });
    res.clearCookie('lastVisit');
  }

```

# 37 cookies::

can store last browsed item
preference item they added in list
cookie-Parser middleware
cookies are inbuild function of js and work of cookier parser is to parse the data in readable and writable format.

cookies are sent to the client on the res object from the server and are used using req object in thr server 

creating own cookies using cookies parser


```javascript

//response object to send cookies on login/accessing api

Setting cookie
res.cookie("Name", data, {age,httpOnly})
res.cookie("jwtToken", token, { maxAge: 900000, httpOnly: false })

Accessing cookies
//request object to access cookies object on api request
req.locals.paramenterName
req.cookies = return object
req.cookies.parametername = return object property/parameter

res>>>>Code 

// on index page
import cookieParser from 'cookie-parser';
import { setLastVisit } from './src/middlewares/lastVisit.middleware.js';
app.use(cookieParser());

// middleware page 
export const setLastVisit = (req, res, next) => {
  // 1. if cookie is set, then add a local variable with last visit time data.
  if (req.cookies.lastVisit) {
    res.locals.lastVisit = new Date(s
      req.cookies.lastVisit
    ).toLocaleString();
  }
  res.cookie(
    'lastVisit',
    new Date().toISOString(),
    {
      maxAge: 2 * 24 * 60 * 60 * 1000,
    }
  );
  next();
};


// on controller page = along with the session destroy it end it will cear the cookie as well

logout(req, res) {
    // on logout, destroy the session
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect('/login');
      }
    });
    res.clearCookie('lastVisit');
  }

```

# 38 Best Practises::
1. Separation of Concerns = Data(model),view,Controller.
    Job of Controller is to take the req and send the response rest all request proceesion should be done by middleware in any other js file such as creating a middleware folder for eg in valdating the userinfomation while login and registration.

2. DRY - Dont repear youself. resuable fns. and layouts eg layout in out application

3. Using Middleware = Decouples the complexity from the controller helps in loose coupling

4. Modularize;; Separation, dividing application in small-small component

5. Naming Convention: Help in reading code easy and help saving time.
    Name of fn should be verb
    eg any.model.js
        any.view.js
        any.controller.js
        any.middleware.js

6. Security Implementations: such as authorization, authentication, validation of data.


# 39 Understanding REST API::

Cons with MVC:

1.  Tight couppled with single view type (only mobile or desktop) (SOC)
    Due to Tight-Coupling,
    Complexity as application grows.
    Difficult to make changes.
    Difficult to Scale

with the Help of API we can solve this problem

    So the APi is kind of socket which server all type of views, that is what makes if loosely coupled, Api doesnot dont who is the client, the controller(server) will only send the data and not the view.

Types of API::

1. SOAP - simple object access protocol (oldest api), not used now.
   IT is heavy
   Slow
   More complex

2. REST API = MOst popular
   light Weight
   fast
   Easy to work with.
   Widely supported.

3. GRAPH-QL = New tech, Popular
   Complex
   much better.

---

# 40 Understanding RESTful APIs

1. Representational State Transfer == Sending data from database to client into JSON/XML format only, data that client is need
2. Stateless Architecture == opposite of "Information the server stores about a client." as we have sseen in session.
3. Architectural guideline == guidelines to build the application along with the potocols.
4. Popularly used across different types of systems. ==

// Benefits REST API

1. Simplicity = It make framerwork/library such as react/angular to communicating to server. ie the frontend will make use of these api to make use of the server or to avail the services.
2. Highly Scalable == Replicating server to handle more request by balancing the load. becoz backend api is independent of the client/views ie why microsevies use resfulapis.
3. Interoperability == support multiple views.
4. Great support for Caching = Caching is the ability to provide quicker response. is a informaton that user needs frequently we cache that data inside our server (aplication server). So instead of going to database (database server) we directly send to client eliminating the need of data base. Increase the preformace of application

// REST Methods
Every request contains = URL, headers, data, method
GET - Get a resource
POST - Create a resource
PUT - Update a resource
DELETE - Delete a resource

// Application/Uses cases of REST APIs::

1. Third Party Integration
2. Backend- API
3. MIcroservices

# 41  Extra SAAS

// SaaS stands for Software as a Service, which is a cloud-based model that allows users to access and use applications over the internet. SaaS applications are also known as on-demand, web-based, or hosted software

Git problem for :: warning: in the working copy of 'package.json', LF will be replaced by CRLF the next time Git touches it

This error message is Git's way of warning you that it's going to automatically change line endings in your files to match the expected format for your operating system. It's important to have consistent line endings in a project to avoid conflicts and unexpected behavior.

Configure Git to handle line endings correctly for your operating system by setting the core.autocrlf configuration option.
For Windows:
git config --global core.autocrlf true
For macOS/Linux:
git config --global core.autocrlf input
The "true" setting instructs Git to convert line endings to CRLF when checking out files and to LF when committing files.
In contrast, the "input" setting directs Git to convert line endings to LF during commits while preserving them as is during checkouts.

Hope this can help you!

--- **\*\***\***\*\***Gettting started with the Project

# 42 Project = Ecom

1. create folder with the project name
2. npm init
3. npm express
4. create express server.
5. create folder structure
   create folder based on the modules ie product,user,order,cart.
   Each modules can have multiple controllers.

---

// Setting up routes for product::

1. Get products
2. Add products
3. Get one Product
4. Rate Product

**create controller folder.
**create class and its methods (class = productcontroller and method = getallproduct, addproduct, rateproduct, getoneproduct)
**create product.route file
mange route/paths to productcontroller
** import express
** Initialise express router
** export router to server.js
\*\* all methods will be now routed from server to this file with path as "/api/product" + "/"

** import router in server file
** /api/product will now send route all req of poructs to route controller.

---

Product Model/controller::
create model classs with contructor
create an array with VAR of product
\*\*make chages in controller now here will not use render fn as API will only send data and not the views.

How it works
First request will come to server.js file with route as = localhost:1000/api/product >> it will go the the product.route file with the help of ProductRouter fn , there the router fn will check the path & method and send the response with the help of product.controller file.
so over all path will be :: below are the example
"localhost:1000/api/product" + "/" = default path
"localhost:1000/api/product" + "/id" = specific product
"localhost:1000/api/product" + "/detail" = specific product details

So now any frontend library or framework call these api and get the data

---

# 43 Understanding/Handle POST Request

NOw as in post request it receive data so we have to use body-parser to receive the data in correct format else give undefine. in previous MVC we are using \\app.use(express.urlencoded({extended:true})) and app.use(express.json());

\*\* npm i body-parser //this is a middleware = application level ie will implement with USE method
** Import the body-parser from bodyparser.
\*\* implementt just after express is called. 

server.use(bodyParser.json())

** for Testing we have to use postman APi. send request using body >> raw >> JSON.

---

Add product API::
** use multer (detail in notes)
** modify the product controller's productAdd fn and model's add fn.
\*\* send the POSTrequest using postman API >> body >> form-data
\*\* in getrequest status is 200 and in post request statuscode is 201. while sending.

---

Get One product API:

** same as done in routes
Guidelines -
** Use of correct HTTP method to send or receive request.
** Sending correct response status code on each HTTP Request
200 = found/done, 201=created/updated/added, 404 = not found
** api/product/:id is also called as endpoint api.

---

# 44 Implementing Filter Product API using QUERY Parameter

here main question is how to pass data/parameter from client to server becoz
** req.body is used to modify the data/resource on server which is for PoST and PUT request
** or using root parameter = cons have to works with multiple root parameters.also all the parametes of filter fn will become must which musts not be the case becoz user can pass only one or two filter and not all.
\*\* QUERY parameter ::
**\*\*\*\***url OR path will look like = localhost:1000/api/products/filter?minPrice=10&maxPrice=20&category=Clothing
**\*\*\*\***server.get("/filter", controllerFN) // path name can be any
**\*\*\*\***now to access url use ==>> "const minprice = req.query.minPrice "//same for all.

1. create route
2. specify controller and model.

Note :: always place ut filter API above all API.
// save all the notes of mvc and this lecture

---

# 45 Understanding Security

Securing Application::
\*\*Why do we secure apps?
For controlled access
Data Privacy

\*\*How do we secure apps ?
Verify who user is
Verify what users can access.

Two Important concepts are Authentication and Authorization::

1. Authentication >> to register on any platform. to very identity.
   Verifying user's identity.
   Confirms that a user is who they claim to be.
   Examples include verifying credentials, tokens.

2. Authorization >> To check if authorize to Access to data after logged in.
   Granting or denying access to specific resources based on user's privileges.
   Controls access to resources based on the user's privileges.
   Examples include checking if the authenticated user has the permissions to access a resource.

Types of Authentication::

1. Basic Authentication >> Requires user's credentials on each request.
2. API Keys >> API Keys are provided by signing up users on developer portals.
3. OAuth (Open-Authentication) >> Third-party app integration . Eg login any website using google,fb accounts.
4. JWT (JSON web-Token)>> Creates a reusable token with option to refresh.

---

# 46 Securing application By USermodel implementation

create user = model,controller,routes and implements the class and routes in them.
user route setup, signup and signin fn in controller and model.

**//** suggestion of route or any thing is called intelliSense

after all signin and signup we are still able to see the product without siginin.

---

# 47 Basic Authentication

** header are part of the http request.
** we can send/ receive multiple header
\*\* headers are present in the form of array and can be accessed using "request.headers["anyName"]"
\*\* headers are encoded with base-64 it is popular encoding techniques which encodes the data which is usually transferred from the client to the server.

\*\*401 = request status is for unauthorized accessed/wrong credentials

** implement the basicauthorization middleware.
** change user array from var to let // good practise
** import array from model to middleware and verify the credentials
** apply the middleware in the server.js file in product api only.

now to check use get request >> authorization -choose basicauto >> enter mailid and password and >> send request

---

COns with Basic authentication ::

1. No encryption, hence not very secure (it decode but not encrypt)
2. client need to store credentials which can be exposed through cross script attacks easily.
3. Easy to crack using BruteForce attacks.

```javascript
import UserModel from "../features/user/user.model.js"

const basicAuthorizer = (req,res,next)=>{
    //1. Check if authorization header is empty
    const authHeader = req.headers["authorization"]; //object[key] >> ouput value
    if(!authHeader){
        return res.status(401).send("No authorization details found")
    }
    console.log(authHeader)

    //2. Extract Credentials output = [Basic, "qwertydif46465fjjf"]
    const base64Creds = authHeader.replace("Basic ","")
    console.log(base64Creds)

    //3. Decode credentials
    const decodedCreds = Buffer.from(base64Creds, "base64").toString("utf8")
    console.log(decodedCreds) //output = [username:password]
    const creds = decodedCreds.split(":"); //output = [username,password]

    //4. checking if the users data have to same username and password
    const user = UserModel.getAllUser().find((u)=> u.email==creds[0] && u.password==creds[1]);
    if(user){
        next();
    } else{
        res.status(401).send("Incorrect Credentials")
    }

};

export default basicAuthorizer;

// on server page

server.use("/api/products", basicAuthorizer, ProductRouter)

```

# 48 JWT Authentication :: JSON web token

Pros:

1. Encrypted token = use hashing technique once it is done can be reversed that means no decoding in hashing.
2. Stateless = loosely coupled
3. Easy to Scale
4. Can be used by Mobile and web Both.

\*\*\*\* Structure of JWT TOken

Structure => see more on >> jwt.io

header = eyJhbGciOiJlUzI1NilsInR5cCl6lkpXVCJ9.(Payload)eyJzdWliOilxMjM0NTY3ODkwliwibmFtZSI6lkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.(signature)TJVA950rM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ

 Header

{ "alg": "HS256",
"typ": "JWT"
}

 Payload = do not store sensitive data such as pasword as it is readable or decoded.

{ "sub": "1234567890", "name": "John Doe", "admin": true }

 Signature = using this token is created.

HMACSHA256( base64UrlEncode(header) + "." + base64UrlEncode(payload), secret)

Working :: Steps
client => Login with credentials
server => server create JWT Token and send to client
client => sends token to authorization header
server => verify JWT token, access client info and send response to client

Payload info::
The JWT payload can be read without the secret key as it is base64-encoded, not encrypted. However, including sensitive information in the payload is not recommended due to potential security issues if the token is intercepted or compromised. JWT's main security relies on its signature for data integrity and authenticity.

--- Implementation of JWT Authentication

steps:

1. npm i jsonwebtoken
2. Import jwt from "jsonwebtoken" in controller file
3. made changes in user - controller
   **create token >> const token = jwt.sign({key:value},"secret/privateKey", options) // can store user id and resources to which user has access but not sensitive data. see npm jwtwebtoken to see more about parameters options
   **send token >> res.send(token)
   > > [search for secret key on internet and paste](https://randomkeygen.com/) // or use node -e "console.log(require('crypto').randomBytes(32).toString('hex'))" website:: https://mojitocoder.medium.com/generate-a-random-jwt-secret-22a89e8be00d

now we can check the token send by the client using postman api using signin api. >>body>>raw>>json
copy the token and decode using jwt.io

4. create middleware folder fn
   import jwt again
   after fn is implement and middleware is added in the server.js file

5. check using get request for all product or any other product api
   then use HTTP get >> header >> authorization enter the token and send the request

```javascript
// Login route
import Jwt  from "jsonwebtoken";
const JWtToken = jwt.sign(payload, secretOrPrivateKey, [options, callback])
            const token = jwt.sign({payload}, "xT2pP6IZiyiuhmQgaQhcPji8FTJ1UvJg", {expiresIn:"1hr"});

//auth middleware
import Jwt  from "jsonwebtoken";
const jwtAuth = (req,res,next)=>{
    // 1. Read token from request header's authorization
    const token = req.headers["authorization"]
    console.log(req.headers) // this is to see the spelling of authorization in request header object
    // 2. If token invalid return error
    if(!token){
        return res.status(401).send("Invalid Credentials")
    }
    // 3. verify the token >>> jwt.verify(token, secret key) // this return the payload assign to it in controller.
    try{
        const payload = Jwt.verify(token, "xT2pP6IZiyiuhmQgaQhcPji8FTJ1UvJg");
        console.log(payload);
        req.userid = payload.userid //attaching the userid with the req objecct through payload
    } catch(err){
        return res.status(401).send("Invalid Credentials")
    }

    // 4. call next middleware
    next();

}

export default jwtAuth
```

# 49 Rate product::
update the product model with fn = rateProduct
update the product controller with fn = rateProduct
uddate the routing file with /rate api. and check using postman.

How to check

1. first sign in using /signin api(post request) use fetch email password from user array and put in body>>raw json
2. now JWT token is generated.
3. now in the new post request /rate paste the jwt token in header>>authorization // for each request we now have to post the jwt token in header>>authorization.
   this post request is of type query parameter so use localhost1000/api/products/rate?userId=--&productId=**&ratings=**
   query paramete can be added manually by above url this is automatically visible in params>>querypameter
   or can be writeen in params>>queryparameter.


# 50 Managing Carts::

Cart feature works for a specific user to to get userid for each request attach it with the req body using jwt token as it already contains the userid so with each request we will have the userid attached to it.
see JWT middleware >>>syntax>>> req.body = payload.userId

pending validation in cart feature::

1. check the userid is still exits that we are receiveing in token.
2. check product id
3. if user trying to add the same item again it should replace the same item.
4. Add api = updating existing cart item quantity. para = productid,updatedquantity, id and userid.

---

Delet item from cart feature

Always try to retrieve userid from token instead of requesting it from client .
userid from token
cartid from url parameter

---

# 51 API Documentation::Swagger
This is a documentation to our apis to make the customer aware of the apis and to make them understand how to use them.
Most popular API Documentation is Swagger UI.

1. install = swagger-ui-express https://www.npmjs.com/package/swagger-ui-express
2. create a json file that will be used by the swagger to create tthe documentation
3. The json file will have the structure as see urll >> https://swagger.io/docs/specification/2-0/basic-structure/
4. implement belows on main server page::
   import swagger from 'swagger-ui-express'
   import apidocs from "./swagger.json" assert {type:"json"}
   server.use("/api-docs", swagger.serve, swagger.setup(apidocs))

> > Always make third parry import at the first and then others

Api documentation with Swagger 3.0::

added new json file with few changes

Handling error

suppose a client enter a wrong api/url that doesnot exist in that case we will be using a middleware api at the last of the server page as 404 request(that these request doesnot exist)

server.use((req,res)=>{
res.status(404).send("API Doesnot Exist")
})

---

# 52 CORS == trying to fetch data from here to CORS file in week4.>>

Cross-origin resource sharing (CORS) is a browser security feature that allows web pages to access resources from other domains. For example, a web page can embed images, stylesheets, scripts, iframes, and videos from other domains. CORS also allows client web applications to interact with resources in different domains. For example, an application may use a browser to access videos from a video platform API, fonts from a public font library, or weather data from a national database. This allows the browser to check with third-party servers before transferring data.

setting Cors responses:

```javascript
//CORS policy
server.use((req,res,next)=>{
// in all three response header passing _ as second parameters refers to all instead of any specific origin(other port numbers),headers(content-type,Authorization), or methods(get,post,put,delete)
res.header("Access-Control-Allow-Origin", "http://localhost:5500/")
res.header("Access-Control-Allow-Headers", "_")
res.header("Access-Control-Allow-Methods", "\*")
    // return "OK" for preflight request.
    if (req.method == "OPTIONS"){
        return res.sendStatus(200)
    }
    next()
})
```

# 53 CORS using Library

use https://www.npmjs.com/package/cors

1. npm i cors
2. import cors from "cors"
3. server.use(cors())
   so doing this bydefaults allows access to all origin,headers and methods, therefore to make access limited we have to configure pass option is middlerware as below

```javascript
import cors from "cors"

//this is bydefault but we can change origin and othe parameters or even remove any parameter and then pass.
var corsOptions = {
"origin": "\*",
"methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
"preflightContinue": false,
"optionsSuccessStatus": 204
}

server.use(cors(corsOptions))

```

# 54 Winston (Logger npm library) Pending code and note

Handling error BY creating LOgger Middleware

1 Way = Using FS promise object.

2 Way = Using Winston Library

step
npm i winston
Import winston
see middlware fn.

---

# 55 Error handling 

1. User defined Error = using try catch throw and Error. >> Implemented in product rating fn (model and controller)
2. Application level Error Middleware= 503 for server unavalilabe and 500 for server error
3. Application Level Error Class ie custom error class
   instanceof is JS keyword which tell the type of instance

Error Handling using middleware with inbuilt class Error and with out own class.
// All API should come before this middleware.

using THROW keyword= is called userdefined Error.
using THROW keyword in modelling and then try to catch error in controller using try-catch-block .

So to not use try-catch block for each controller function it is better idea to have application level error handler. so any error if we have not handle will automatically be handled by that middleware. This will also prevent internal to the customer.

So now this will catch all the error from the model

```javascript

**on model/REpository page
throw new ApplicationError(statuscode, message)

** CONTROLLER page
Importance of next,try,catch in controller to pass error to middleware
one moere addition to controller after avoiding try-catch due to throw err from 
model, we can still addd try catch in controller for but for this time for application level error ie the server error typing mistake which then pass to errror middleware

try{
}catch(err){
return next(err) //this will pass err to middleware
}

or 

try{
}catch(err){
return next(new applicationErrorHandler(400, message)) //this will pass err to middleware
}


**on index page
server.use(errorHandlerMiddleware)

MIDDLEWare

** Error handling page
export const errorHandlerMiddleware = (err, req, res, next) => {

//becoz user defined error
  if (err instanceof applicationErrorHandler){
    return res.status(err.statusCode).send(err.errMessage)
  }
// due to application ie typo error, mistake in code so console log would be a better idea
  console.log(err)
  res.status(500).send("Oops! Something went wrong... Please try again later!")
};

//these are user defined error i.e why called custom error handler
export class applicationErrorHandler extends Error {
  constructor(statusCode, errMessage) {
    super(errMessage);
    this.statusCode = statusCode;
  }
}
```

--------------------------------------------------

# 1 Blocking and Non blocking Code

``` Javascript

Javascript Code
for(let i = 0;i<100000000000;i++){
    //doing nothing just consuming time
}
console.log('Task to be performed after loop');
console.log('I have to wait for this long loop to finish');


//nonblocking code

setTimeout(() => {
    console.log('Task to be performed after 5 seconds');
}, 5000);

console.log('I do not have to wait for this long loop to finish');
```
# 2 HTTP Server

create a server using Node JS http protocol.

steps:
1. Import http library/module (syntax = require("http"))

2. create server (syntax = createServer(requestlistener)) 
    this fn belongs to http module.
    ctrl+click leads to typescript file. 
    It return instance of that server. 
    it take parameter ie a callback fn request-listener
    requeslistener fn parameter itself takes two parameter - request and response (not a keyword)
    call back fn request listner has access to resquest and response

3. Specify a portno to listen to client's request(syntax = server.listen(portnumber))
    Note there can be multiple Nodejs server so to identify on which server do i have to send the response. use different port numbers
    for multiple server have different port number.
    server.listen can have parameters = portno, callback fn and a number

type in chrome brower = localhost:portnumber or http://localhost:3000/
this will display the console.
brower = inspect = network(it is for all the request sent from the browser) = refresh = localhost = see section header and response

``` Javascript
const http = require("http");
const server = http.createServer((request, response) =>{
    response.end('Welcome to NodeJS Server') // sending back response to client
})
server.listen(3100,()=>{
    console.log('Server is listening on port 3100');
})
```

# 3 Multiple Request

require("http")
createServer(req,res)
listen(portno, (cbFN))

Notes
one server can receive multiple request and send multiple response
res.end print message in localhost browers
listen port will print message in terminal
 localhost/address(it specify the page you want to visit)

 ``` Javascript
 const request = require("http");
const server = request.createServer((req,res)=>{
    console.log(req.url);
    // instead of cosole we can also write (res.write("message"))
    // both res.end and res.write messages will get printed
    // difference is res.write modify the message ie add more message but res.end ends the response.(res is a name of parameter)
    res.write("welcome to my application")

    // checking the type of url and based on that sending the different responses 
    if (req.url == '/product'){
        return res.end("This is a product page")
    }
    else if (req.url == '/user'){
       return res.end("This is a user page")
    }

    //return keyword is not necessary if i want to do some console/operations after the response ends. 
    // res.end("This is a response message")
})

server.listen(1200,()=>{
    console.log('This is listen message');
    
})
```
# 4 Render HTML/static file with http

currently we are rendering only static content of html page see below
if we want to render dynamic content (api and all) then template engine and view engine are needed to 
rendering dynamic content of the html page
<!-- <body>
  <div>
    <h1>Welcome to my Page</h1>
    <marquee behavior="" direction="">    
      <span style="text-align: center; color: blue;">importing HTML Page using nodejs  http module</span>
    </marquee>
  </div>
</body>
</html> -->

``` Javascript
const http = require("http"); // importing http module
const fs = require("fs"); // importing file system module

// syntax = fsmodule.readFileSync("htmlfilename") this return the data fetch from the html page 
const server = http.createServer((req,res)=>{
    const data = fs.readFileSync("node.html").toString();
    res.end(data);
});

server.listen(1400);
console.log("This is the html file")
```

# 5 Common JS Module

Two ways to create module 
    1. Common JS
    2. ES6 Module

1. Common JS (Four ways)
  ****Filename = above.js 
one way
    export multiple class,fn,properties and datastructure in a single go.
    export fn as property
    mostly used this. becoz 1st statement

```Javascript
module.exports = {
        add:sum // syntax = (anyName:function/propertyName)
    }
```

second way
    export a single property or fn or datastructure or class.
    export fn as property
```Javascript
module.exports.product = (x,y) => {
        return x*y
    }
```
    
    
third way
    export fn
    
```Javascript
module.exports = function(x,y){
        return x-y;
    }
```
    
fourth way(shorthand)
    exporting property

```Javascript
 exports.division = (x,y)=>{
        return x/y;
    }
    
    function sum(x,y){
        return x+y
    }
```

Importing from above.js js file

brick icon represents a fn
cube icon represents a property

importing = syntax => require("path") and now store in varialbe 

Result importing from above.js file

In above.js file sum and product are fn but when exported it become property of "export.module"

Every time when we use the above require fn it will run the above.js file so to see this just console 
any message in the above.js file. and when run in this file that message will get printed.
it doesnot matter if we execute "require" module multiple time it will only get printed once as it is saved as cache.

```Javascript
const result = require("./above.js");

const answer = result.add(5,4);
console.log(answer)

const answer1 = result.division(12,6)
console.log(answer1)
```
# 6 ES-6 Module

just write export or export default

"export" is for exporting multiple var,fn,class from single module
"export default" for exporting sigle var,fn,class from single module

```Javascript
export function sum(a,b){
    return a+b;
}

export const num = 100;

const num = 100;

export default num;
```
    
Importing for ES6 Module
Advantage:
    1.Increase readability
    2.increase performance by tree shaking only import that will be used will be imported and unused imports
        will be remove when import-all syntax is used.

Every file in JS is treated as a module.
use mjs as extension on both export and import i.e filename.mjs

To export all exportable item at once, syntax is (import * as any_Name from "./path") see codition
```Javascript
import * as file from './2from.mjs';

console.log(file.sum(5,6))
console.log(file.num)
```

To export few exportable item out of some , syntax is (import {fn/propertyName as anyName} from "./path")
```Javascript
import {sum,num} from './2from.js';

console.log(sum(5,6))
console.log(num)
```
# 7 Types of Modules

1. Internal/user Module (that are created,imported and exported by ourselved) == Application
2. Core Module (eg HTTp,fs module of nodejs) see... search nodejs coremodule/ api docs on web == Nodejs
3. External Module (api owner, db owner) ie third party
        If there is any database module that is not supported by inbuilt module of nodejs then who ever has created the database
        same company they will also build a tool  which  you can import in your application (internal module)
        process involes installing the third party library. see 4npm formore ddetails.

External module >> core Module >>> internal Module

# 8 Types of Modules

External module
All third party module  are also called as packages are handled by Package Manager
Roles of Package mmanager:

1. Installation of packages.
2. Version Management.
3. Managing Dependencies. = external packages
4. Pusblishing Packages. -- so other can use

Name of Package Manager for Nodejs,angularjs,reactjs is == NPM
Npm is bydefault installed in machine when we install NODEJS.that is wwhy called as defauld package manager and it is widely used
yarn is also a Package manager.
package manager is a concept and has nothing to do with nodesjs but npm has with nodejs. few expampleof package manage of different language
java has maven 
.net has Nuget,
python has pip.

Installing nodemon (in terminal write "npm i nodemon")
nodemon autorestart the server if there is any change in the code.
so now package is installed for this application only(VSCode).

# 9 Global Installation of Packages

Installing nodemon globally (in terminal write "npm i -g nodemon")
use this if not above (in terminal write "sudo npm i -g nodemon") administrator password will be required.
this can be seen in node_module folder > nodemon(folder) to check if installed.
now to run command (syntax is "nodemon filename.js")
so it basically restart the server on any changes. 

Note
The dependencies section in package.json file lists all the external dependencies 
required by the project. These dependencies are installed using the npm install command and 
are required for the project to function correctly. Examples of external dependencies 
include libraries, frameworks, and other packages that are not part of the Node.js core.

```Javascript
const http = require("http");
const server = http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url == "./product"){
        res.end("This is a Product page")
    } else if(req.url == "./user"){
        res.end("This is a User page")
    }
    res.end("client is listening on port 1111 on cient side")
})

server.listen(1111, ()=>{
    console.log("server is listening on port 1111 on server side")
})
```

# 10 Package.json file working/usecases
   
1. Manage dependencies.

2. manage scripts - starting app "(ie shorthand cmd to run program in terminal)", testing app
setting shorthand of any large command (eg for node pacakage manage = npm)

3. Details of application - Name,version,author,githuburl

Feature of package-lock.json
1. Auto generated by npm installtion
2. Helps with consistency of version on different machines.
3. prevents unwanted updates.

"npm init" command is used to provide details for the package.json file.

    Step::
    a. initializes npm package cmp=("npm init") with detais: name,version, liscense etc.
        Delet  packages.json, packages-lock.json and modules and then use above command if already have.
    b. provide details of the question asked in terminal give such as entrypoint (file you want to provide as     first) etc etc . to skip any question press ENTER.
        in created file you willl see the "scripts section" where shorthand command are mentioned.
        Modify the cmd anyName can be used. (anyname: "filename.js")
        To run = "npm run anyname"

    now if we again innstall the nodemon file it will not create the file but add the dependencies into the same file we created manually.

# 11 Dev Dependencies
imp to understand diff in "dev dependencies" and dependencies
Another type of Dependencies other then external and internal are dev dependencies
dev dependencies are part of development only and not production
to make any dependecies as "dev dependencies" syntax is (npm i -D packagename(ie nodemon etc))
now in the package.json file inplaace of "dependencies" we will see "devDependencies"
if i install mongodb it will add another dependecy in the same file.
to test the project the "dev dependencies" are used becoz it is in development phase and not the production phase

    for normal run
    becoz package.json file use "start" as shorthand notatation to run the program instead of writing "node filename.js" after package installation ("start": "node server.js")

    for normal run
    ("anyname": "nodemon filename.js") in package json file

    syntax to initiate shorthand ("anyname": "packageName filename.js") it will create the shorthand property
    syntax to run is ("npm run anyname")

    we dont commit git node modules so create a file name == (syntax = ".gitignore")

 NOTE::
if i delet the node_module then will have to run ("npm i") command to install all the dependencies.
this will install all the packages.
but this npm i command will also update the version of package such a nodemon or mongodb but our application is following the old version code only...otherwise application will start breaking or gives error. so to overcome this "package-lock.json" will help. It get created on its own while installlation.(by "npm i")




# 12 version understanding

semantic versioning

1. Major 1.0.0 = 1st digit represent major version = ie incompatible ChangeStream,may not fn as Before.
2. Minor 1.1.0 = 2nd digit Minor release = New feature with backward-compatibility.
3. Patch 1.1.1 = 3rd digit Patch version ie bug fixes, no significant change

patch means bug fixes, no significant change

symbols:: indicate the version of installation on doing "npm i"
1. "~" = npm can install latest patch release
3. "^" = npm can install latest minor release
3. no symbol = npm will install latest exact version

# 13 Removing MJS Extension::

steps::

1. initiate package.json file (using "npm init");
2. in package.json use "type:module" below "license" by doing so now we can replace ".mjs" with ".js"
3. Also can set shorthand property in script for any file.("npm run filename")

Description of type object::
When set to "module", the type field allows a package to specify all .js files within are ES modules. If the "type" field is omitted or set to "commonjs", all .js files are treated as CommonJS.

# 14 Understanding NVM (see pdf for installtion better understanding)

Different machines are using different version of nodes js npm: For that we have a tool "NODE Version Manager":
Understanding NVM to work with different versions of NODEJS.

Installing NVM on Windows

NVM is mostly supported on Linux and Mac. It doesn't have support for Windows.
nvm-windows, however, is a comparable utility developed by coreybutler to offer a
nvm experience in Windows.

To install NVM on Windows, follow these steps:

1. Download and run the NVM Windows installer from the following GitHub
   repository: https://github.com/coreybutler/nvm-windows/releases
2. Follow these instructions to complete the installation:
   use the link > Go to Assets > use nvm-setup.exe (install it) as shown in the
   following image.
3. Open a new command prompt window.
4. Verify that NVM is installed correctly by running the following command:
   nvm --version
   Basic NVM Commands
   Once you have installed NVM, you can use the following commands to manage your
   Node.js installations:
   ● To list all the available Node.js versions:
   nvm ls-remote
   ● To install a specific Node.js version:
   nvm install <version>
   ● To switch to a different Node.js version:
   nvm use <version>
   ● To set a default Node.js version to use in new shells:
   nvm alias default <version>

   Note: WE can install and use and set default by switching between multiple versions for node using NVM. by using above cmds.
   usage:: to switch b/w multiple version to use diffenrent feature of nodeJS

# 15 Axios

In a Node.js project, you need to fetch data from an API using the axios package. This package allows asynchronous HTTP requests in Node.js and simplifies the process of making API calls.

In this scenario, you'll use axios to fetch data from the https://api.codingninjas.com/api/v3/event_tags API endpoint.

read for full process --->> Documentation and usage guide for axios: https://rapidapi.com/guides/axios-async-await


Objectives

i) Install the axios package using npm.
ii) Make an HTTP GET request to the given API endpoint using axios to print the data as displayed in the expected output.
iii) Retrieve the response data.
iv) Print the response to the console as shown in the expected output section.

Note:
Ensure that you have the axios package installed in your Node.js project before proceeding.
Make use of asynchronous programming techniques while fetching data using axios.
Documentation and usage guide for axios: https://rapidapi.com/guides/axios-async-await

```Javascript
import axios from "axios";

One way 
    axios.get("https://api.codingninjas.com/api/v3/event_tags")
    .then((response)=>{
        console.log(response.data);
    }).catch(()=>{
        console.log("Data not fetched")
    });

Second way
    async function getData (){
        try{
            const response = await axios.get("https://api.codingninjas.com/api/v3/event_tags")
            const result = response.data
            console.log(result)
        }catch(err){
            console.log(err)
        }
    }
    getData()

```

# 16 Reading command line INPUT/terminal::

steps to use readline module

1. import readline module (syntax = require('readline'))

Note:: if type:"module" in package.json
require is not defined in ES module scope, you can use import instead
This file is being treated as an ES module because it has a '.js' file extension and 'C:\Users\package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension. or remove type:module in P'json file.

2. create-interface it takes two parameter as an objects readables and writable and return "interface"
            syntax = readline.createInterface({
                        input: process.stdin,
                        output: process.stdout
                    })
    process belogs to nodejs process which is carried by the OS.

3. using "interface" will read the value of the interface
    syntax = (interfaceName.question(para1, para2))
    question take two para || 1. answer:string  || 2. callback fn(parameter : string) => (return string bydefault) 

    we can create chain of "interfaceName.question()"

4. The close() method is needed to properly close the readline interface and release associated resources.

When you create a readline interface, it starts listening to the stdin stream (standard input). If you don't close the interface explicitly, it keeps the Node.js process running, waiting for more input. This might cause your program to appear to hang or not exit properly.
By calling close(), you're signaling to Node.js that you're done with the readline interface and it can release any resources it's using. This ensures that your program exits cleanly and doesn't unnecessarily consume system resources.

usage = To build command-line applications eg: (npm,nvm,git,OS)

```JavaScript
const readline = require('readline');
const enterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

enterface.question("Enter first Number", (num1)=>{
    enterface.question('Enter second Number', (num2)=>{
        const sum_concated = num1+num2; /// becoz by default is string
        const sum = Number(num1) + Number(num1); /// conversion to number
        console.log(sum_concated);
        console.log(sum);
        enterface.close(); //prevents the program from hanging;

    })
})
```

# 17 Filesystem Module Synch "fs" - Blocking


1. create file, update file and use data file
2. Two ways of working == (depends on you)
   blocking (manage by maintread) = for small file
   nonblocking way (manage by threadpool) = for large file
3. working with FS is I/O operation becoz Fs is mangaged by host OS and therefore progamming language have to depend on OS for accesses.

steps:

1. import fs module using require
2. fs.readFileSync("path",{encoding:"utf-8"}) ie it is sync operation it take two parameter 1. path || 2. {encoding:"utf-8"}
   fs.readFileSync() return buffer (bufer is a storage system as difference in speed of receive and sending, the transit data (between two stroage) to store that data).
   here sync refers to blocking or main tread working.
3. Either use string method "fs.readFileSync().toString()" method or use 2nd parameter as {encoding:"utf-8"} to get the correct format.

```JavaScript
// understanding FS Module.

const fs = require("fs");

//to read file content using blockingcode.
console.log("starting to read content")

// Tostring method
const buffer1 = fs.readFileSync("11data.txt");
console.log(buffer1.toString())

// {encoding:"utf-8"} method
const buffer2 = fs.readFileSync("11data.txt",{encoding:"utf-8"});
console.log(buffer2)


console.log("done reading")
```

steps

1. import fs module of core-nodejs (require("fs"))

2.  create and writing a file using fn (writeFileSync):  takes  name/path of file and  content as a parameter.   (return : void) ie why use try catch.
     If we run the program again with same file name it will overwrite / append in the existing file. or else recreate a file.

3. Append = fs.appendFileSync(file/path, "content")

Deleting a file :: syntax(fs.unlinkSync(path))
    fs.unlinkSync(path) :: return errror if name is incorrect. use try catch to handle such error
    so nodejs is unlinking the file from system and delet is being done by OS so named as unlinking.


```JavaScript
//importing fs module of core-nodejs
const fs = require("fs");

console.log("operating being perform")

//create and writing
try{
    fs.writeFileSync("data2.txt", "name:rahul, age:26")
}catch(err){
    console.log('err');
    
}

//appending data to existing file
fs.appendFileSync("data2.txt", "/nname:nancy, age:22")

// deleting a file
try{
    fs.unlinkSync("data2.txt")
}catch(err){
    console.log("File doesnot exist")
}

console.log("operation done")

```

# 18 Filesystem Module Asynch "fs" - Nonblocking 


Node js give more priority to asynch operation over synch operation
This code will now be performed by the tread pool.

steps:

1. import fs module of core-nodejs (require("fs"))
2. Readfile() = takes 2 parameter =-- filename/path and callbackfn. Now cbfn take two paramenter err and data :: so either return err or data:buffer(use tostring method.)
3. Reading Data


```JavaScript
//import fs module
const fs = require("fs");

//Read data
fs.readFile("11data.txt", (err, data)=>{
    if(err){
        console.log(err);
    } else{
        return data.toString();
    }
})

//write data
fs.writeFile("11data2.txt", (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('file has been treated');
        
    }
})

//append data

fs.appendFile("11data2.txt", "/n parashant:fathername", (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('File is updated');
    }
})

//delet file

fs.unlink("11data.txt", (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('File is Deleted');
    }
})

```

# 19 Path Moduel 

if data is in any other path or folder
1. import path module
2. pathmodule.join("rootfolder", "innerfolder",...,"filename.txt")
3. pathmodule.resolve("rootfolder", "innerfolder",...,"filename.txt")
4. Tofind file Extension = pathmodule.extname(join or resolve)


```JavaScript
const fsmodule = require("fs")
const pathmodule = require("path")

//join = return actual
const filepath = pathmodule.join("12src","home","data.txt")
console.log(filepath);

// resolve = return absolute path
const filepathResolve = pathmodule.resolve("12src","home","data.txt")
console.log(filepathResolve);

//extension
console.log(pathmodule.extname(filepathResolve));


// can use either of the above two path will give the same result.
fsmodule.readFile(filepath, (err,data)=>{
    if(err){
        console.log(err); 
    }else{
        console.log(data.toString());
    }
});
```
# 20 Debugging 



Why Debugging ?

1. Understand why our code isn't working as expected.
2. Improve the quality and reliability of our applications.
3. Learn from our mistakes and become better developers.

Debugging::
// debug commands
// 1. start debug cmd = node inspect filename.js
// 2. set breakpoints = setBreakpoint("filename.js", lineno.)
// 3. to see the operation = watch("variable name")
// 4. continue debug to go breakpioint after debug = cont
// keep on contnue and change the watch variable name to find the error
// 5. exit the debug = ctrl + c

// How debugging in Node.js is different than in JavaScript ?

1. Environment: Node.js runs in a server-side environment, whereas JavaScript typically runs in the browser.
2. Debugging tools: Node.js has its built-in debugger, while JavaScript relies on browser-based tools like Chrome DevTools.
3. Access to server-side resources: When debugging Node.js, you have access to server-side resources like the file system, databases, and network connections.

---

Debugging in VSCODE::

1. go to left panel on debug setion >> click on create launch debug >> choose the languague as node
2. set the breakpoint >> by adding red dots on the page numbering panel.
3. now click on start button at top in debug panel.

4. debug has section that willl show the breakpoints, variable, watch, callstack whre we can see the coder run.

5. imp = varialble, watch for inspection write variable name by outselves
6. stepover = go to next line ie the next break point.
7. stepinto = enter the loop or fn else will complete the whole loop/fn in one go.(if no BP)
   Note::In stepinto even though if there is no breakpoint at any step still it will move to that step.
8. stepout = to come out of fn or loop even when it is half done.



# 21 Nodemailer 1

Email in Nodejs::

usecases : Getting verifiaction email on signup or activity email on the account changes/updates etc.

steps::

1.  Intall library (npm i nodemailer)
2.  Import nodemailer (require"nodemailer")
3.  Fn to configure email and send it. (This Asynch operation therefore required ASYNCH AND AWAIT)
    a. create a Email trasporter = it take our email and send it to the email server. and according send the email to the user(ie what kind of email is to be sent to user).

    b. For that SMPT protocol will be required. 2option :: 1. Either we can configure out our own SMTP server that take lot of complexity. (for big companies)

        2. take 3rd party email server eg google email server. (small company)

        3. creating trasporter below :: createTransport() takes options as parameter see below:
        nodeMailer.createTransport({
            service:"gmail",
            auth:{
                    user: "rahuls.sumeru@gmail.com",
                    pass: "" //go to account security>>2step verification page >> inlast see "App password" >> customise the name "anyname">> 16 character passcode will be generated and then use it here.
                }
            })

    c. configure email content :: uses to,from,subject, text... read in nodemailer documentation for more details.

    d. send the Emails:: (sendMails(contentVariable)) :: return promise
    Use try catch to avoid below.
    condition ::
    sender email credentials are not correct.
    receiver email is not correct.
    Internet is not working
    SMTP protocol is not working.

Email in Nodejs
usecases : Getting verifiaction email on signup or activity email on the account changes/updates etc.

steps::
1. Intall library (npm i nodemailer)
2. import nodemailer
3.   configure email and send it. (This Asynch operation therefore required ASYNCH AND AWAIT)

```Javascript
const nodeMailer = require("nodemailer");
async function sendMail(){
    // create an email transporter
    // SMTP (simple mail transfer protocol)
    const transporter = nodeMailer.createTransport({
        service:"gmail",
        auth:{
            user: "rahuls.sumeru@gmail.com",
            pass: "heooryhucuchdmho" //go to account security>>2step verification page >> inlast see "App password" >> customise the name "anyname">> 16 character passcode will be generated and then use it here.
        }
    })

    // configure email content

    const mailOptions = {
        from: "rahuls.sumeru@gmail.com",
        to:"rajsoni9644@gmail.com",
        subject:"Testing the Nodemailer library",
        text:"This is a email using Nodemailer in NOdesjs"
    }

    // send email :: return promise

    try{
        const result = await transporter.sendMail(mailOptions);
        console.log("sent Email successfully")
    } catch(err){
        console.log(`Email send failed with error` + err)
    }
}

sendMail()
```

# 21 Nodemailer 2 (readline and promises)
```Javascript
import readline from 'readline';

const einterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


/// Use of promise
function askQuestion(question) {
  return new Promise((resolve) => {
    einterface.question(question, (answer) => {
      resolve(answer);
    });
  });
}

//here the problem was email variable was accessed before it was declared due to async nature of code. so when you returned a promise it will resolve when it will get the answer
// promise is used when you have to wait for the response for indefinitely
// settimeout can also be used but it not a good practise.

async function getEmail() {
  const email = await askQuestion("Enter Email address: ");
  einterface.close();
  console.log("Email entered:", email);
}

getEmail();

const Solution = async () => {
  // Write your code here
  const trasport = nodemailer.createTransport({
    service:"gmail",
    auth: {
      mail: "codingninjas2k16@gmail.com",
      password: "slwvvlczduktvhdj"
    }
  })

  const mailoptions ={
    from: "codingninjas2k16@gmail.com",
    to: email,
    subject: "Coding Ninjas",
    text: "The world has enough coders; be a coding ninja!"
  }

  try {
    const result = await trasport.sendMail(mailoptions)
  } catch(err){
    console.log("Error occured")
  }
};

```

# 22 Events in Nodejs 


Events in Nodejs::

here events are performing using http module

What are events ?

1. A click of button
2. A change in data
3. A change in file

Node.js has several built-in events, such as:

1. 'data': Triggered when a readable stream receives new data.
2. 'error': Fired when an error occurs in the application.
3. 'listening': Emitted when a server starts listening for incoming connections.
   Using events to read data on post request

When recieving the data from the client using the post method. eg
req.method=="GET"
req.method=="POST" = currently using post
req.method=="PUT"
req.method=="DELET"

Data is received in the form of chunks, chunks are added in the database one by one once received.
and the client data is sent is received by the on server body

request.on Event notify the server that the data has been sent from the client.
req.on("EventName", (chunk)=>{})

Eventname can be = error,data,listening,end
So every time data event is generated we received a chunk aand add/append it to the body.

End event notify that all the data/chunks has been received. ie request has been completed

we have checked "GET" by using the url eg localhost: 1200/product (here by "/product" we know its a get api) but in "POST"
we need a UI (eg Angular,React, HTML JS, Vanilla HTML JS) to test it but as a backend developer we have test our api without the help of browser/UI. so there are many such api tools to test. so we will se How POSTMAN works.

```Javascript
const http = require("http");
const server = http.createServer((req,res)=>{
    if (req.method=="POST"){
        let body = "";
        //expecting data from client
        req.on("data", (chunk)=>{
            body+=chunk.toString();
        })
        req.on("end",()=>{
            console.log(body);
            res.end("Data is received")
        })
    }
    res.end("Welcome to Node JS") // this will get printed irresptive of http method type post,get,put,delet.etc
});

server.listen(1111, ()=>{
    console.log("Server is listening on port 2222")
})

```

# 23 POSTMAN API - For Testing our API

Free to use for learning and small teams.
Need to install in the window for use.
We can test different types of API:
REST api
SOAP api
HTTP api = we are testing this rn
Graphql

working ::
POSTMAn act like a client/UI that sends the request to our server. select request type >> enter the localhost url (http://localhost:2222) >>> send. currently we will explore "body" >> raw > text >> JSON.
now save it if you want
before send the request make sure that our server is running.
on sent we will receive the last res.end message in the postMan Body. ie (welcome to nodesjs) and why we are not getting ("Data is received") even after the data has been receive in the terminal this is becoz the "request and all the below events " are happening asynchronously.

To check this see console of "body" is printing after console of "function ends here." so the second console it was giving undefined for console.log(req.body) in the first console.(note : console with for better understandin make each some data of own)

To check this see console of "body" is printing after console of "function ends here." so the second console it was giving undefined for console.log(req.body) in the first console.(note : console with for better understandin make each some data of own) ... Also before else was used we are getting "wecolme to nodejs" in postman response section after else statement we willl get "data is received" becoz now the if statement is also execute not the else as the request was of type POST.

now using else we have figure it oout so if the req is POST only then that code alone will execute and if it is of type (get, delet, put) then else code will be executed.

Note all these events are coming from http request in next lecture will see how to create our own event

```javascript
const http = require("http");
const server = http.createServer((req,res)=>{
    if (req.method=="POST"){
        // console.log(req.body);
        //expecting data from client
        let body = "";
        req.on("data", (chunk)=>{
            body+=chunk.toString();
        });
        req.on("end",()=>{
            console.log(body);
            res.end("Data is received");
        });
    } else{ 
        console.log('Function Ends here');
        res.end("Welcome to Node JS")
    }
    
});

server.listen(2222, ()=>{
    console.log("Server is listening on port 2222")
})

```

# 24 Request and response Objects

Understanding Response Methods and Use of return Keywords

Response method (previous we have studies "end" methods (res.end())) and // understanding when to use return keyword with "end" method

Response is a object in createserver method. which has methods suchas = end, write, end = ends the response as well as ends the write of the response so once response is ended there must not be any "write" or "end" typially but in case if we want to add more end then use return key with end of the previous response. to make sure fn is also ending with the response cycle ends. OR Also we can put the next "end" method in else block. so will only run if if-block is not satified "end" method ends your request response cycle and return the response back to client.

write = write the response to verify or check that response has been executed but doesnot end the response. It should always be written always before "end" method

Request is a object, its methods are = url,

originalurl = complete base url
url = last part of url this is same or modified during the process.

req.originalUrl = for original url
req.url = for part of url
req.body = request body
req.file.filename = for select file object(multer >> fileupload)
req.params.parameterName = for url parameterss
req.query.queryName = for query parameters
req.headers = for request headers
req.cookies 
req.ip = to get ipAddress
req.method = to check request methods

Response is a object, its methods are = url,
RESPONSE OBJECT::

response.end
response.write
response.flash
response.download

Express::
response.json
response.send
response.render
response.redirect
response.cookie
response.render
response.sendFile or sendFiles doubt


```Javascript
const http = require("http");

//createServer fn return the instance of server which has been created using http.

const server = http.createServer((req,res)=>{
res.write("This is coming from Nodejs server");
if (req.url == "/first"){
res.end("This is first response"); // either use return in this line or else put the next end in else-block. try both for practise
}else{
res.end("This is a default response");
}
})

// listen fn is asynchrounous fn so adding console to understand better
server.listen(3200,(req,res)=>{
console.log("server started listening at 3200");
});
```

# 25 Events 


here events are performing using "events" module

Creating our own custom Events:: //here events are performing using "events" module

How Event-Driven Apps work?
let take eg of instagram or facebook.

Event >> Event Listeners (see eg below::)

>>>> Save to Database(create post)
User creates a Post (event)>>>> Send Notifications (these 3 are event listeners)
>>>>Updates Timeline

will be using the core module of nodesjs ie events to form eventdriven architecture.

steps::
1. import "events" module
2. class will inheritate form event module.
3. module emits the events "this.emit(string)" = so basically through event "emitter" class we are creating our own events

emits the event
as require is not defined in ES6 module becoz mjs extension. "const eventEmitter = require("events")"
so will use import of es6

import \* as events from "events"

```Javascript
// so in events.EventEmitter = "events" is the module and Eventemitter is the single class from that module.
export class UserEvent extends events.EventEmitter{
//Events
    createPost(content){
    console.log("Post has been created");
    this.emit("postCreated"); //this is eventlistner first parameter
    }
}
```
see 5eventlistener file then see then studt the result below::
output::
Post has been created
saving to Database
Notification sent
Timeline updated

so all the fn are called synchorously in the order they were registered. so using this event emitter class we are able to create our own events and add as many listener as we need.
why we have used half of the code in the new file see in next lecture.


```Javascript

import { UserEvent } from "./5customEvents.mjs"; // importing the class

// calling the class by creating the userEvent object.
const userEvent = new UserEvent();

//now assigning the event listner to userEvent object.
userEvent.addListener("postCreated", savetoDB);
userEvent.addListener("postCreated", sendNotification);
userEvent.addListener("postCreated", updateTimeline);

// Add eventlistener fn take two parametet = name of event ie "this.emit" and callback fn.

// these are the three fn which will be execute once eventlistener(creating post) is executed.

function savetoDB(){
console.log("saving to Database")
}

function sendNotification(){
console.log("Notification sent")

}function updateTimeline(){
console.log("Timeline updated")
}

// calling the class' method using above object
userEvent.createPost("This is my first post");

```

Advantage of Eventdriven Architecture::

Advantage of Eventdriven Architecture::
why we have used eventlister becoz we can also call those 3 fns directly inside the "method" of the "class".

Advantages
1. Scalability ==>> when no. of user increases it will not affect the application so highly scalable.

2. Loose coupling ===>> (vv imp) ie if the methods has the power to call all those 3fn that will tightly couple them. ie why we have give the work to eventemitter. so when our fn dont know about eachother and still they are woking with each other so this thing is achieve by Event driven architecture.
Also easy to manage separately with making any change to the class and its methods
various concepts are based on this loose coupling things such as SOLIDS, Dependency-inversion, Seperation-concern, single-resposibility principle, Design patterns.

3. Better responsiveness ==>> ie highly performant.

# 26 Best Practises


1. Modularize your code: (more module rather than having less module doing multiple task)
2. Use descriptive naming conventions (fn performing a task use name as verb eg "updatingTimeline" instead of "timeline")
3. Keep module responsibilities clear (SRP - single responsibility principle or SOC - ) iewhy create 3 different Eventlisters for those 3 fns. (so our code has only one reason to change multiple could result in disruption.)
4. Use version control like Git

To ensure that your code remains easy to maintain, readable, and free of errors, it is crucial to adhere to coding standards and implement best practices. These guidelines can help you establish efficient coding habits and optimize your workflow. Some of the most commonly recommended coding standards and best practices include:

1. Consistent Naming Conventions:
   Use consistent naming conventions for variables, functions, and classes, following the guidelines of your programming language.

2. Meaningful Names:
   Use descriptive names for variables, functions, classes, and other identifiers. This makes your code self-explanatory.

3. Comments:
   Add comments to explain complex or non-obvious parts of your code. Comments should be concise but provide enough context.

4. Modularization:
   Break your code into small, modular functions or classes. Each should have a single responsibility (the Single Responsibility Principle).

5. Error Handling:
   Implement proper error handling to gracefully handle exceptions and errors. Don't ignore exceptions or use overly broad catch statements.

6. Version Control:
   Use a version control system like Git to track changes and collaborate with others. Follow branching and merging best practices.

7. Testing:
   Write unit tests to ensure your code works as expected. Follow test-driven development (TDD) principles if applicable.

8. Code Reviews:
   Encourage code reviews within your team to catch issues early and share knowledge.

9. Documentation:
   Provide clear and up-to-date documentation for your code, including how to use it and any dependencies.

10. Security:
    Be mindful of security best practices, like avoiding SQL injection, validating user inputs, and using secure authentication methods.

11. Continuous Integration/Continuous Deployment (CI/CD):
    Implement CI/CD pipelines to automate testing and deployment processes.

It's important to keep in mind that coding standards and best practices are not universal and may differ depending on the programming language and specific project requirements. Therefore, it's crucial to be adaptable and flexible with your coding practices to ensure they meet the needs of your team and project as they evolve.



# 27 Working with Express JS

Express is a Nodejs framework.

Framework = It help developers to create application in less time becoz it has alot of inbuilt feature and library which allows you to create your application in less time with moe sophisticaton.

programing languages(frameworks){
Nodejs: Express,
python: Djano,
Java: Springboot,
C-sharp: dotnet,
}

What problems does Express solve ?
Some of the main problems that express solves are::

1. Routing::
   make easy implement a routing to work with different URLs, for eg http://employee or http://employeeemployee/id

2. Middleware:: It is act as a pattern which express uses to handle requests and send responses.
   add Request in server >>>> middleware (get access to request to modify the request for if you want to log each request received by server) >>>>>> request-handler

3. TemplateEngine::
   Help send HTML Dynamic files (changing content)
   There are multiple template engine which we can use to send dynamic content(highperformance) to our server.

Advantages of Express

1. Easy to learn = use JS grammer and syntax only
2. High Performance - server side applicaton.
3. TemplateEngine - End to End MVC

creating server using a Express js
In-Terminal = For express we have to use "node filename.js" unlike other external module in which we have to use their name(ie external module name)

steps::(Note:: it is not a core part of Nodejs)
1. Install Express (syntax = npm i express)
2. Import Express(now we dont neeed to import http as it is internally taken care by express)
3. Creating a server by calling the express class/method of express-module.(syntax = express())
4. handle request using directory such as get,post,delet, post, use(is for all request-type).
"use" method take handler(ie a middleware)
"get" method take 2 parameters = a. Path, b. callbackfn c. next()fn

5. Listen to the request on specified post (syntax =listen(portNo, callbackfn)) similar to http

```JavaScript

//import
const express = require("express");
//create server by calling the express class/method of express-module.
const server = express();
//handle request
server.get("/", (req,res)=>{
    res.send("Welcome to Express Server") //it is wrapper fn (ie it internally calls the "end" fn of nodejs but add more properties such as request-header, content-type,content-length)
    //here we also have access to method properties of nodejs but if this block is executed then this confirm that it is a "get" request. becoz if it is not a get-method this fn will never be executed.
})
//listen request
server.listen(1478, ()=>{
    console.log("Server is listening on 1478")
})
```

# 28 Middlewares

Middleware

Express is also a open source justlike NodeJS
to see what is happening behind the scene below is the link
https://github.com/expressjs/express/tree/master/lib = here are vairous file too look upon

Defination:
Middleware :: Middleware are the request-handler which intercepts the request and modify them and then call the next middleware in the pipiline.

When a request is send by the client and by the time request reaches to the request-handler, in between if we want to do any work on the request that is where middleware (interseptors) helps us we can imagine it as a pipeline on far ends are client and request-handle(ie last middleware which doesnot call next middleware but return the response ie res.end or res.send object) and in between as many middleware we want.

Interceptor are just like request-handlers only::
Usecases:: Middleware
1. To verify if the request is authenticated.
2. To check data is valid or not.
3. To log the request.

creating the middleware:
Order of the middlwar is important 1middleware comes first in queue and then 2 3 4 and last. ow unexpected result.
res.send return the response so it will not go to the next middleware so instead we will do log(to check).

Now if the middleware is not ending/return the response then it is its responsibilty to call the next middleware in the pipeline. this should continue until the middleware return the response. other wise the browser kept loading as there is no response received from the server.

So to call the next middleware we will be using 3rd parameter of the callback fn ie "next" (req,res,next){next()}
Also if we return the response in any middle middleware then using next() will give error ==>Cannot set headers after they are sent to the client

```Javascript

const Express = require("express");
const server = Express();

//one way => server.get(path, cbfn, cbfn...lastcbfn)
server.get("/" ,
    (req,res,next)=>{
        // res.send("Hello, This is the 1st Middleware");
        console.log('C/L, 1st Middleware hit');
        next()
    } ,
    (req,res)=>{
        res.send("Hello, This is the 2nd Middleware");
    })

//second way  (better practise) => server.get(path, cbfn, next)>> server.get(path, cbfn, next) >> last-server.get(path, cbfn, next)

server.get("/" ,
    (req,res,next)=>{
        // res.send("Hello, This is the 1st Middleware");
        console.log('C/L, 1st Middleware hit');
        next();
        });

server.get("/" ,
    (req,res)=>{
        res.send("Hello, This is the 2nd Middleware");
    });


server.listen(1471,()=>{
    console.log("Server is listening to port 1471");
})
```

# 29 Application Level Middlewares

Middleware help in receive,handle,modify and pass the request in the pipeline.

Two ways to pass the array in the method function (get,post,put,delet,use(forall))
//one way = passing as a separate functions :: ordering of passing the fn is imp
secondway = passing as a array of function :: ordering of passing the fn is imp

Route level request
In this part of code below :: if in path we write "/send" in place of "/" then all the callback fn passed will be executed for that "/send" url only else will receive error(Cannot GET /) in the browser.
    // server.get("/send", [firstMiddleware, secondMiddleware],(req,res)=>{
    //     res.send("This is the 3rd Middleware");
    // })

Appplication-level request (Global)
So now if i want to create a middleware that run for all the paths and all the http-methods.ie works for all the request received on the server..we will use "USE" method of express-http-methods.


```Javascript
const Express = require("express");
const server = Express(); 

function globalMiddleware(req,res,next){
    console.log("Logging Application-level M'Ware");
    next();
}

function firstMiddleware(req,res,next){
    console.log("Logging 1st M'Ware");
    next();
}

function secondMiddleware(req,res,next){
    console.log("Logging 2nd M'Ware");
    next();
}

//for all kinds of requests and paths
server.use(globalMiddleware);

//one way = passing as a separate functions
// here path is "/"
server.get("/", firstMiddleware, secondMiddleware,(req,res)=>{
    res.send("This is the 3A Middleware");
})

//secondway = passing as a array of function
// here path is "/send"
server.get("/send", [firstMiddleware, secondMiddleware],(req,res)=>{
    res.send("This is the 3B Middleware");
})

server.listen(1234, ()=>{
    console.log("Sever side logging:: 1234");
})
```

# 30 Type of HTTP request

HTTP request has noting to do with JS its an Protocol which is implement across difference programming languages. see below link for more details.
https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

Get = to retrieve data from server
post = to add new-data to the database.
put = to replace/update the old-data with newdata.4
Delet = to delet a resource
CRUD opeation (create(POST),read(GET),update(PUT) and delet(DELET)) = above four request are part of this operaton

Handling get(done in previous lecture), post,put and delet request 
path must be same in all.
using postman to test the http api.

In Node we are using if-else block to identify the request type but in express it makes it easy.

```javascript
const Express = require("express");
const server = Express();

// get
server.get("/",(req,res)=>{
    res.send("This is a GET request to read the resource")
})

//post
server.post("/",(req,res)=>{
    res.send("This is a POST request to create the resource")
})

//put
server.put("/",(req,res)=>{
    res.send("This is a PUT request to update/replace the resource")
})

//Delet
server.delete("/",(req,res)=>{
    res.send("This is a DELET request to delet the resource")
})

server.listen(4100, ()=>{
    console.log("Server is listening on port number :: 4100")
})

```

# 31 HTTP Headers

1. Provide metadata about the request or response, such as the content type or length.
2. Set cookies to store user-specific data.
3. Control caching behavior. (caching is a optimization technique to store some data in memory to avoid pulling data from the database every time when open an application), IT is a advance concept.
4. Communicate server-specific information to the client.module

Popular HTTP Headers

1. Content-Type = server sending data to client or viceversa, decides the type of contents.
2. Authorization = to pass authorization data ie login,JWT token to verify the client
3. Accept-Language
4. User-Agent = (reqest is receiveing from which type of device= mobile,desktop,webapplication etc)
   There are many more header here = https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers

How express handles the Header-method of http api.
so response object has a methods set
==(ie res.set("header-type","any"))==

in postman >> in response section >> header >> find content-type (there are few already present that are bydefaut estd during client server communication)

HTTP header has noting to do with nodejs or expressjs it is relation to webapplications.

status codes:: It is a bydefaut header (https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
Informational responses (100 – 199)
Successful responses (200 – 299)
Redirection messages (300 – 399)
Client error responses (400 – 499)
Server error responses (500 – 599)
syntax == res.status(number(eg from 100 to 599)).send("xyz")
use case:: clients able to understand the response better. ie what happened to the request they send.

```Javascript

const Express = require("express");
const server = Express();

// get
server.get("/",(req,res)=>{
    res.set("content-type","plain/text")
    res.send("This is a GET request to read the resource")
})

//post
server.post("/",(req,res)=>{
    res.status(201).send("This is a POST request to create the resource")
})

//put
server.put("/",(req,res)=>{
    res.send("This is a PUT request to update/replace the resource")
})

//Delet
server.delete("/",(req,res)=>{
    res.send("This is a DELET request to delet the resource")
})

server.listen(4111, ()=>{
    console.log("Server is listening on port number :: 4111")
})
```
# 32 Loading Static(html,css) file using Express

Learn how to serve HTML file using Express Server (this time Dynamic content)
we can server any kind of file html,css,js

Import Express
create server
use http method on server
In express we dont need "fs" (module >> convert to string >> send to browser) rather we can just do it directly using static method (is a built-in middleware function ) of express. It take path as input. and then take the wrapper fn "use" that takes middleware. //again order of middleware
eg. of static files are cssfiles, bootstrapFiles, CDN files.(we dont make any modification to those file we send as it is
Most used practise :: will create a public folder and store all static files in that. so access these file we dont need any kind of authorization or authentication ie to server directly to the clients.

```Javascript
const Express = require("express");
const server = Express();

//middleware
server.get("/", (req,res)=>{
    return res.send("Welcome to Express")
})

// as we are returning above so will not show directly using (locahost1245/"index.html") we can access it is same as get method of http.

//only files inside public will accessbile so homefile that is outside the public folder is not accessible.
server.use(Express.static("public")); //middleware
// server.use(Express.static(__dirname,"public")); //can be use check


server.listen(5678, ()=>{
    console.log("server listening on 5678")
})
```

# 33 MVC 

Express - A Web Framework
• Modern = Data-intensive applications (fb,insta etc)
• High-Performance = less-time to process query.
• Scalable = application in size(eg user grow or feature grow.)

Webdevelopment require a architectural-pattern there are dozens of patterns available but we will be studying 3 most popular and efficients architectural-patterns. ie MVC, RESTAPI, MICROServices.

1. MVC - Separation of Concerns = It is designed for DEsktop based browser,webbroweser.
   view = present HTML page
   MODEL = represent your data
   CONTROLLER = handle request

MODEL
↓ ↓
UPDATES MANIPULATES
↓ ↓
VIEW CONTROLLER
↓ ↓
SEES→ USER → USES

2. REST = The purpose of restAPI is to provide a cross platform support for servers and clients. So all the below three clients (Desktop/mobile/television) communicates to a singel Server(RESTAPI_SERVER). Which is not POssible with MVC.
   That is why most popular platform to build application

Desktop/mobile/television Client >>>> REST Server
Desktop/mobile/television Client <<<< REST Server

REST = Representational State Transfer Protocol

3. Microservices:: Highly Scalable architecture (eg fb,ola,netflix)
   Distributes of your application on accross machines/multiple-server so that to serve more clients and more request without server failing. So any of the services/server fails, it doesnot affect the whole application.
   Also we can create the copy of the feature/server to handle some request and another set of request to be handle by the origin server. In this way we can scale up and scale-down our applicattion. see image in SS.

---

MVC (Model View Controller)

1. Model = Represents Data and Business-logic (It take attribute and fuction)
2. View = UI and Display-data.
3. Controller = Handle Request, Update model and send responses. it the IMp componenet and estb communication between model and view

---

Project - Inventory Management (MVC based pattern Project using Express)
Description :: It stores the product like backend system of e-commerece applciation like amazon

Creating view by creating html and css files in view folder
creating js file in controller folder

Now controller has multiple methods to server request to client

ViewEngines/ View Templates = Allows you to embed your JS Data or your Dynamic content which could be inside model or controller to be added into the HTML FILE.
In express there are many different options/templates of view engines such as Pug,Handlebars and EJS. We will study EJS. syntax => <div><%= variable %></div>
// It has Apache liscense ie free to use.
// by converting the format of html to ejs and then while rendering browser convert the ejs file into html again.

---

Creating Layout
We need to install express ejs layout it is library of express(syntax = npm i express-ejs-layout)
In layout we will be putting reusable html components.

# 34 Linking CSS in MVC Application 
 app.use(express.static("public"))
 1. create a public folder in root directory, inside it create CSS folder and then style.css file
 2. now in layout page link with href as path "/css/style.css"
 we are not going to root then public and then css to file becoz public is directly accessible to the client
 via 
server.use(Express.static("source/views")); //through it serach for the static-file



# 35 A Express Validators

export default keywords takes three things
    1.hoisted declaration (can be used even before declaration)
    2. class
    3. assignment declaration

Using express-validator 
install express-validator (npm i express-validator);

then below are the next steps

```javascript
import {body} from "express-validator" //this refers to the body of our request
import { validationResult } from "express-validator";

const validateRequest = async (req,res,next) => {
    console.log(req.body)

    //1. Setup rules for validation
        // import body method of express-validator
        // "gt" stands for greater thatn
    const rules = [
        body("name").notEmpty().withMessage("Name is required"),
        body("price").isFloat({gt:0}).withMessage("Price should be a positive Value"),
        body("imageUrl").isURL().withMessage("Invalid Url")
    ];

    //2. run those rules
        // running these above rules is async operation ie I/O opeation so we need to use promises here
        // will run every rule of that rules array
        // rule.run(req) (.run is a method of expressvalidator and  takes the request object as parameter)
    await Promise.all(rules.map((rule)=>{
        rule.run(req);
    }));

    //3. check if there are any errors after running the rules.
        // importing validationResult from express validator
        // this take reqest object as parameter
        // this validaterequest return all the error which occurs in the above three rules.
    var validationErrors = validationResult(req);

    //4. If there are errors then return the error message.
    if (!validationErrors.isEmpty()){
        res.render("new-product", {errorMessage: validationErrors.array()[0].msg}) //convert to array and return 1 error.
    }
    next()

}
```


# 35 File Upload Multer

fIXING ISSUE = filename = new Date().toISOString().replace(/:/g, '_')

FileUpload = Using 3rd party Library Multer (very popular) in express.
++++++++++++++++TO test this middleware we use Form-data in POSTMAN ++++++++++++++=
More features of multer are puting vaidation,filters,uploading files and others.

Steps::
1. Install Multer
 path as "./public/avatar"
or 
path.resolve("public", "avatar")
2. Changes in View(type of file to be upload). png or jpeg or img

3a. Handling the form to make use of files(till now only text)
3b. Middleware to handle file (we will take the file from the cient and save to our folder and then take that url and store that url).
3c. Apply the Middleware
Update Controller to update urls of Images.

```JAVASCRIPT
import multer from 'multer';
import path from "path";

const storageConfig = multer.diskStorage({
  // Write your code here
  destination:(req,file,cb)=>{
    cb(null, path.resolve("public", "uploads")); // orUse cb (null, "./uploads/images/") //null is whre we can appply validation if folder exist of not or do you have tthe permission to aceess the folder etc.
	
  },
  filename:(req,file,cb)=>{
//nameAlternatives = new Date().toISOString() + file.originalname
    const name = new Date().toISOString().replace(/:/g, '_');
    cb(null, name);
  }

});

export const uploadFile = multer({
  storage: storageConfig,
});

//indexpage=
app.post("/", uploadFile.single("image"), formValidation, registerUser); //singlefile


app.post("/", uploadFile.array(input-field-name, maxcount), formValidation, registerUser); //multiplefile
	also add "multiple" in inputfield to add multiple files.
```


# 36 Sessions & cookies

Client(cookies) >>>>>>>>>>>>   Server(Sessions)

Http is a stateless protocol that means there no state b/w client and Server which means every request sent from c2s and response send from s2c are independent of eachother ie one request has notting todo with other request

So how would a Server got to know it is the same client who send the request previosly. using Sessions Server got to know who is that person.

Using Sessions, server creates a uniques session ID of the client using this id server identify the client and client store that seesion ID in something called as cookies

Session Id is stored by session on the server and same is stored on the client, it is a same mechanism, which is used in the browser, cookies has nothing to do with server, server uses seesion and cilent uses cookies so whatever data is sent by server is stored in the cookies on clientside and on every request sessionid/cookies is also sent to server which then identify the client.

So seesion help in statefull communication on stateless http protocol

```javascript
npm i express-session

import session from "express-session";

//index page = now with the for each request, session obj will also get attached to request.
app.use(
  session({
    secret: "keyboard cat", //(takeany complex key)
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, //becoz communitcation is happening on http not on https
  })
);

// controller page == implement in login fn after authentication of the entered mail id and password so that client will now send session object along with the request

req.session.userEmail = req.body.email;

// middleware page
export const auth = (req, res, next) => {
  // Write your code here
  if (req.session.userEmail){ // userEmail is the key that is attached in the session object in above code
    next()
  } else{
    res.redirect("/login") // will sent the request to this address ie login
  }

};


// index

add middlerware on all request except for login and register.

***destroying session..also the cookes
// on controller page = along with the session destroy it end it will cear the cookie as well
logout(req, res) {
    // on logout, destroy the session
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect('/login');
      }
    });
    res.clearCookie('lastVisit');
  }

```

# 37 cookies::

can store last browsed item
preference item they added in list
cookie-Parser middleware
cookies are inbuild function of js and work of cookier parser is to parse the data in readable and writable format.

cookies are sent to the client on the res object from the server and are used using req object in thr server 

creating own cookies using cookies parser


```javascript

//response object to send cookies on login/accessing api

Setting cookie
res.cookie("Name", data, {age,httpOnly})
res.cookie("jwtToken", token, { maxAge: 900000, httpOnly: false })

Accessing cookies
//request object to access cookies object on api request
req.locals.paramenterName
req.cookies = return object
req.cookies.parametername = return object property/parameter

res>>>>Code 

// on index page
import cookieParser from 'cookie-parser';
import { setLastVisit } from './src/middlewares/lastVisit.middleware.js';
app.use(cookieParser());

// middleware page 
export const setLastVisit = (req, res, next) => {
  // 1. if cookie is set, then add a local variable with last visit time data.
  if (req.cookies.lastVisit) {
    res.locals.lastVisit = new Date(s
      req.cookies.lastVisit
    ).toLocaleString();
  }
  res.cookie(
    'lastVisit',
    new Date().toISOString(),
    {
      maxAge: 2 * 24 * 60 * 60 * 1000,
    }
  );
  next();
};


// on controller page = along with the session destroy it end it will cear the cookie as well

logout(req, res) {
    // on logout, destroy the session
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect('/login');
      }
    });
    res.clearCookie('lastVisit');
  }

```

# 38 Best Practises::
1. Separation of Concerns = Data(model),view,Controller.
    Job of Controller is to take the req and send the response rest all request proceesion should be done by middleware in any other js file such as creating a middleware folder for eg in valdating the userinfomation while login and registration.

2. DRY - Dont repear youself. resuable fns. and layouts eg layout in out application

3. Using Middleware = Decouples the complexity from the controller helps in loose coupling

4. Modularize;; Separation, dividing application in small-small component

5. Naming Convention: Help in reading code easy and help saving time.
    Name of fn should be verb
    eg any.model.js
        any.view.js
        any.controller.js
        any.middleware.js

6. Security Implementations: such as authorization, authentication, validation of data.


# 39 Understanding REST API::

Cons with MVC:

1.  Tight couppled with single view type (only mobile or desktop) (SOC)
    Due to Tight-Coupling,
    Complexity as application grows.
    Difficult to make changes.
    Difficult to Scale

with the Help of API we can solve this problem

    So the APi is kind of socket which server all type of views, that is what makes if loosely coupled, Api doesnot dont who is the client, the controller(server) will only send the data and not the view.

Types of API::

1. SOAP - simple object access protocol (oldest api), not used now.
   IT is heavy
   Slow
   More complex

2. REST API = MOst popular
   light Weight
   fast
   Easy to work with.
   Widely supported.

3. GRAPH-QL = New tech, Popular
   Complex
   much better.

---

# 40 Understanding RESTful APIs

1. Representational State Transfer == Sending data from database to client into JSON/XML format only, data that client is need
2. Stateless Architecture == opposite of "Information the server stores about a client." as we have sseen in session.
3. Architectural guideline == guidelines to build the application along with the potocols.
4. Popularly used across different types of systems. ==

// Benefits REST API

1. Simplicity = It make framerwork/library such as react/angular to communicating to server. ie the frontend will make use of these api to make use of the server or to avail the services.
2. Highly Scalable == Replicating server to handle more request by balancing the load. becoz backend api is independent of the client/views ie why microsevies use resfulapis.
3. Interoperability == support multiple views.
4. Great support for Caching = Caching is the ability to provide quicker response. is a informaton that user needs frequently we cache that data inside our server (aplication server). So instead of going to database (database server) we directly send to client eliminating the need of data base. Increase the preformace of application

// REST Methods
Every request contains = URL, headers, data, method
GET - Get a resource
POST - Create a resource
PUT - Update a resource
DELETE - Delete a resource

// Application/Uses cases of REST APIs::

1. Third Party Integration
2. Backend- API
3. MIcroservices

# 41  Extra SAAS

// SaaS stands for Software as a Service, which is a cloud-based model that allows users to access and use applications over the internet. SaaS applications are also known as on-demand, web-based, or hosted software

Git problem for :: warning: in the working copy of 'package.json', LF will be replaced by CRLF the next time Git touches it

This error message is Git's way of warning you that it's going to automatically change line endings in your files to match the expected format for your operating system. It's important to have consistent line endings in a project to avoid conflicts and unexpected behavior.

Configure Git to handle line endings correctly for your operating system by setting the core.autocrlf configuration option.
For Windows:
git config --global core.autocrlf true
For macOS/Linux:
git config --global core.autocrlf input
The "true" setting instructs Git to convert line endings to CRLF when checking out files and to LF when committing files.
In contrast, the "input" setting directs Git to convert line endings to LF during commits while preserving them as is during checkouts.

Hope this can help you!

--- **\*\***\***\*\***Gettting started with the Project

# 42 Project = Ecom

1. create folder with the project name
2. npm init
3. npm express
4. create express server.
5. create folder structure
   create folder based on the modules ie product,user,order,cart.
   Each modules can have multiple controllers.

---

// Setting up routes for product::

1. Get products
2. Add products
3. Get one Product
4. Rate Product

**create controller folder.
**create class and its methods (class = productcontroller and method = getallproduct, addproduct, rateproduct, getoneproduct)
**create product.route file
mange route/paths to productcontroller
** import express
** Initialise express router
** export router to server.js
\*\* all methods will be now routed from server to this file with path as "/api/product" + "/"

** import router in server file
** /api/product will now send route all req of poructs to route controller.

---

Product Model/controller::
create model classs with contructor
create an array with VAR of product
\*\*make chages in controller now here will not use render fn as API will only send data and not the views.

How it works
First request will come to server.js file with route as = localhost:1000/api/product >> it will go the the product.route file with the help of ProductRouter fn , there the router fn will check the path & method and send the response with the help of product.controller file.
so over all path will be :: below are the example
"localhost:1000/api/product" + "/" = default path
"localhost:1000/api/product" + "/id" = specific product
"localhost:1000/api/product" + "/detail" = specific product details

So now any frontend library or framework call these api and get the data

---

# 43 Understanding/Handle POST Request

NOw as in post request it receive data so we have to use body-parser to receive the data in correct format else give undefine. in previous MVC we are using \\app.use(express.urlencoded({extended:true})) and app.use(express.json());

\*\* npm i body-parser //this is a middleware = application level ie will implement with USE method
** Import the body-parser from bodyparser.
\*\* implementt just after express is called. 

server.use(bodyParser.json())

** for Testing we have to use postman APi. send request using body >> raw >> JSON.

---

Add product API::
** use multer (detail in notes)
** modify the product controller's productAdd fn and model's add fn.
\*\* send the POSTrequest using postman API >> body >> form-data
\*\* in getrequest status is 200 and in post request statuscode is 201. while sending.

---

Get One product API:

** same as done in routes
Guidelines -
** Use of correct HTTP method to send or receive request.
** Sending correct response status code on each HTTP Request
200 = found/done, 201=created/updated/added, 404 = not found
** api/product/:id is also called as endpoint api.

---

# 44 Implementing Filter Product API using QUERY Parameter

here main question is how to pass data/parameter from client to server becoz
** req.body is used to modify the data/resource on server which is for PoST and PUT request
** or using root parameter = cons have to works with multiple root parameters.also all the parametes of filter fn will become must which musts not be the case becoz user can pass only one or two filter and not all.
\*\* QUERY parameter ::
**\*\*\*\***url OR path will look like = localhost:1000/api/products/filter?minPrice=10&maxPrice=20&category=Clothing
**\*\*\*\***server.get("/filter", controllerFN) // path name can be any
**\*\*\*\***now to access url use ==>> "const minprice = req.query.minPrice "//same for all.

1. create route
2. specify controller and model.

Note :: always place ut filter API above all API.
// save all the notes of mvc and this lecture

---

# 45 Understanding Security

Securing Application::
\*\*Why do we secure apps?
For controlled access
Data Privacy

\*\*How do we secure apps ?
Verify who user is
Verify what users can access.

Two Important concepts are Authentication and Authorization::

1. Authentication >> to register on any platform. to very identity.
   Verifying user's identity.
   Confirms that a user is who they claim to be.
   Examples include verifying credentials, tokens.

2. Authorization >> To check if authorize to Access to data after logged in.
   Granting or denying access to specific resources based on user's privileges.
   Controls access to resources based on the user's privileges.
   Examples include checking if the authenticated user has the permissions to access a resource.

Types of Authentication::

1. Basic Authentication >> Requires user's credentials on each request.
2. API Keys >> API Keys are provided by signing up users on developer portals.
3. OAuth (Open-Authentication) >> Third-party app integration . Eg login any website using google,fb accounts.
4. JWT (JSON web-Token)>> Creates a reusable token with option to refresh.

---

# 46 Securing application By USermodel implementation

create user = model,controller,routes and implements the class and routes in them.
user route setup, signup and signin fn in controller and model.

**//** suggestion of route or any thing is called intelliSense

after all signin and signup we are still able to see the product without siginin.

---

# 47 Basic Authentication

** header are part of the http request.
** we can send/ receive multiple header
\*\* headers are present in the form of array and can be accessed using "request.headers["anyName"]"
\*\* headers are encoded with base-64 it is popular encoding techniques which encodes the data which is usually transferred from the client to the server.

\*\*401 = request status is for unauthorized accessed/wrong credentials

** implement the basicauthorization middleware.
** change user array from var to let // good practise
** import array from model to middleware and verify the credentials
** apply the middleware in the server.js file in product api only.

now to check use get request >> authorization -choose basicauto >> enter mailid and password and >> send request

---

COns with Basic authentication ::

1. No encryption, hence not very secure (it decode but not encrypt)
2. client need to store credentials which can be exposed through cross script attacks easily.
3. Easy to crack using BruteForce attacks.

```javascript
import UserModel from "../features/user/user.model.js"

const basicAuthorizer = (req,res,next)=>{
    //1. Check if authorization header is empty
    const authHeader = req.headers["authorization"]; //object[key] >> ouput value
    if(!authHeader){
        return res.status(401).send("No authorization details found")
    }
    console.log(authHeader)

    //2. Extract Credentials output = [Basic, "qwertydif46465fjjf"]
    const base64Creds = authHeader.replace("Basic ","")
    console.log(base64Creds)

    //3. Decode credentials
    const decodedCreds = Buffer.from(base64Creds, "base64").toString("utf8")
    console.log(decodedCreds) //output = [username:password]
    const creds = decodedCreds.split(":"); //output = [username,password]

    //4. checking if the users data have to same username and password
    const user = UserModel.getAllUser().find((u)=> u.email==creds[0] && u.password==creds[1]);
    if(user){
        next();
    } else{
        res.status(401).send("Incorrect Credentials")
    }

};

export default basicAuthorizer;

// on server page

server.use("/api/products", basicAuthorizer, ProductRouter)

```

# 48 JWT Authentication :: JSON web token

Pros:

1. Encrypted token = use hashing technique once it is done can be reversed that means no decoding in hashing.
2. Stateless = loosely coupled
3. Easy to Scale
4. Can be used by Mobile and web Both.

\*\*\*\* Structure of JWT TOken

Structure => see more on >> jwt.io

header = eyJhbGciOiJlUzI1NilsInR5cCl6lkpXVCJ9.(Payload)eyJzdWliOilxMjM0NTY3ODkwliwibmFtZSI6lkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.(signature)TJVA950rM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ

 Header

{ "alg": "HS256",
"typ": "JWT"
}

 Payload = do not store sensitive data such as pasword as it is readable or decoded.

{ "sub": "1234567890", "name": "John Doe", "admin": true }

 Signature = using this token is created.

HMACSHA256( base64UrlEncode(header) + "." + base64UrlEncode(payload), secret)

Working :: Steps
client => Login with credentials
server => server create JWT Token and send to client
client => sends token to authorization header
server => verify JWT token, access client info and send response to client

Payload info::
The JWT payload can be read without the secret key as it is base64-encoded, not encrypted. However, including sensitive information in the payload is not recommended due to potential security issues if the token is intercepted or compromised. JWT's main security relies on its signature for data integrity and authenticity.

--- Implementation of JWT Authentication

steps:

1. npm i jsonwebtoken
2. Import jwt from "jsonwebtoken" in controller file
3. made changes in user - controller
   **create token >> const token = jwt.sign({key:value},"secret/privateKey", options) // can store user id and resources to which user has access but not sensitive data. see npm jwtwebtoken to see more about parameters options
   **send token >> res.send(token)
   > > [search for secret key on internet and paste](https://randomkeygen.com/) // or use node -e "console.log(require('crypto').randomBytes(32).toString('hex'))" website:: https://mojitocoder.medium.com/generate-a-random-jwt-secret-22a89e8be00d

now we can check the token send by the client using postman api using signin api. >>body>>raw>>json
copy the token and decode using jwt.io

4. create middleware folder fn
   import jwt again
   after fn is implement and middleware is added in the server.js file

5. check using get request for all product or any other product api
   then use HTTP get >> header >> authorization enter the token and send the request

```javascript
// Login route
import Jwt  from "jsonwebtoken";
const JWtToken = jwt.sign(payload, secretOrPrivateKey, [options, callback])
            const token = jwt.sign({payload}, "xT2pP6IZiyiuhmQgaQhcPji8FTJ1UvJg", {expiresIn:"1hr"});

//auth middleware
import Jwt  from "jsonwebtoken";
const jwtAuth = (req,res,next)=>{
    // 1. Read token from request header's authorization
    const token = req.headers["authorization"]
    console.log(req.headers) // this is to see the spelling of authorization in request header object
    // 2. If token invalid return error
    if(!token){
        return res.status(401).send("Invalid Credentials")
    }
    // 3. verify the token >>> jwt.verify(token, secret key) // this return the payload assign to it in controller.
    try{
        const payload = Jwt.verify(token, "xT2pP6IZiyiuhmQgaQhcPji8FTJ1UvJg");
        console.log(payload);
        req.userid = payload.userid //attaching the userid with the req objecct through payload
    } catch(err){
        return res.status(401).send("Invalid Credentials")
    }

    // 4. call next middleware
    next();

}

export default jwtAuth
```

# 49 Rate product::
update the product model with fn = rateProduct
update the product controller with fn = rateProduct
uddate the routing file with /rate api. and check using postman.

How to check

1. first sign in using /signin api(post request) use fetch email password from user array and put in body>>raw json
2. now JWT token is generated.
3. now in the new post request /rate paste the jwt token in header>>authorization // for each request we now have to post the jwt token in header>>authorization.
   this post request is of type query parameter so use localhost1000/api/products/rate?userId=--&productId=**&ratings=**
   query paramete can be added manually by above url this is automatically visible in params>>querypameter
   or can be writeen in params>>queryparameter.


# 50 Managing Carts::

Cart feature works for a specific user to to get userid for each request attach it with the req body using jwt token as it already contains the userid so with each request we will have the userid attached to it.
see JWT middleware >>>syntax>>> req.body = payload.userId

pending validation in cart feature::

1. check the userid is still exits that we are receiveing in token.
2. check product id
3. if user trying to add the same item again it should replace the same item.
4. Add api = updating existing cart item quantity. para = productid,updatedquantity, id and userid.

---

Delet item from cart feature

Always try to retrieve userid from token instead of requesting it from client .
userid from token
cartid from url parameter

---

# 51 API Documentation::Swagger
This is a documentation to our apis to make the customer aware of the apis and to make them understand how to use them.
Most popular API Documentation is Swagger UI.

1. install = swagger-ui-express https://www.npmjs.com/package/swagger-ui-express
2. create a json file that will be used by the swagger to create tthe documentation
3. The json file will have the structure as see urll >> https://swagger.io/docs/specification/2-0/basic-structure/
4. implement belows on main server page::
   import swagger from 'swagger-ui-express'
   import apidocs from "./swagger.json" assert {type:"json"}
   server.use("/api-docs", swagger.serve, swagger.setup(apidocs))

> > Always make third parry import at the first and then others

Api documentation with Swagger 3.0::

added new json file with few changes

Handling error

suppose a client enter a wrong api/url that doesnot exist in that case we will be using a middleware api at the last of the server page as 404 request(that these request doesnot exist)

server.use((req,res)=>{
res.status(404).send("API Doesnot Exist")
})

---

# 52 CORS == trying to fetch data from here to CORS file in week4.>>

Cross-origin resource sharing (CORS) is a browser security feature that allows web pages to access resources from other domains. For example, a web page can embed images, stylesheets, scripts, iframes, and videos from other domains. CORS also allows client web applications to interact with resources in different domains. For example, an application may use a browser to access videos from a video platform API, fonts from a public font library, or weather data from a national database. This allows the browser to check with third-party servers before transferring data.

setting Cors responses:

```javascript
//CORS policy
server.use((req,res,next)=>{
// in all three response header passing _ as second parameters refers to all instead of any specific origin(other port numbers),headers(content-type,Authorization), or methods(get,post,put,delete)
res.header("Access-Control-Allow-Origin", "http://localhost:5500/")
res.header("Access-Control-Allow-Headers", "_")
res.header("Access-Control-Allow-Methods", "\*")
    // return "OK" for preflight request.
    if (req.method == "OPTIONS"){
        return res.sendStatus(200)
    }
    next()
})
```

# 53 CORS using Library

use https://www.npmjs.com/package/cors

1. npm i cors
2. import cors from "cors"
3. server.use(cors())
   so doing this bydefaults allows access to all origin,headers and methods, therefore to make access limited we have to configure pass option is middlerware as below

```javascript
import cors from "cors"

//this is bydefault but we can change origin and othe parameters or even remove any parameter and then pass.
var corsOptions = {
"origin": "\*",
"methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
"preflightContinue": false,
"optionsSuccessStatus": 204
}

server.use(cors(corsOptions))

```

# 54 Winston (Logger npm library) Pending code and note

Handling error BY creating LOgger Middleware

1 Way = Using FS promise object.

2 Way = Using Winston Library

step
npm i winston
Import winston
see middlware fn.

---

# 55 Error handling 

1. User defined Error = using try catch throw and Error. >> Implemented in product rating fn (model and controller)
2. Application level Error Middleware= 503 for server unavalilabe and 500 for server error
3. Application Level Error Class ie custom error class
   instanceof is JS keyword which tell the type of instance

Error Handling using middleware with inbuilt class Error and with out own class.
// All API should come before this middleware.

using THROW keyword= is called userdefined Error.
using THROW keyword in modelling and then try to catch error in controller using try-catch-block .

So to not use try-catch block for each controller function it is better idea to have application level error handler. so any error if we have not handle will automatically be handled by that middleware. This will also prevent internal to the customer.

So now this will catch all the error from the model

```javascript

**on model/REpository page
throw new ApplicationError(statuscode, message)

** CONTROLLER page
Importance of next,try,catch in controller to pass error to middleware
one moere addition to controller after avoiding try-catch due to throw err from 
model, we can still addd try catch in controller for but for this time for application level error ie the server error typing mistake which then pass to errror middleware

try{
}catch(err){
return next(err) //this will pass err to middleware
}

or 

try{
}catch(err){
return next(new applicationErrorHandler(400, message)) //this will pass err to middleware
}


**on index page
server.use(errorHandlerMiddleware)

MIDDLEWare

** Error handling page
export const errorHandlerMiddleware = (err, req, res, next) => {

//becoz user defined error
  if (err instanceof applicationErrorHandler){
    return res.status(err.statusCode).send(err.errMessage)
  }
// due to application ie typo error, mistake in code so console log would be a better idea
  console.log(err)
  res.status(500).send("Oops! Something went wrong... Please try again later!")
};

//these are user defined error i.e why called custom error handler
export class applicationErrorHandler extends Error {
  constructor(statusCode, errMessage) {
    super(errMessage);
    this.statusCode = statusCode;
  }
}
```
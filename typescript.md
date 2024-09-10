# Typescript

- Built on top of javascript.
- TS is built to overcome shortcoming of JS.
- It is a subset of JS.
- why TS:
    - enables static typing = variable type is know [int,string] eg c++, c#, java, Ts
    - code completion
    - refactoring
    - shorthand notation
- Cons:
    - Compilation is involved. TS >> JS >> Runtime
    - used in Medium to large project.

Dynamically type = variable can be assigned any datatype 


## settingup environment for typescript

- install the npm.
- tsc -- init
- In tsconfig.json file = 
    - set the "target" as "press ctrl + space and choose"
    -  set the module rootdir: "./src" [add all file index.ts and all in src]
    - set "outDir:"./dist",
    - set "removeComments" as true
    - noEmitOnError as true,
- now run tsc .. it will create a dist folder with js file [index.js]
- set sourcemap as true
- set "strict":true
- set "noimplicit":true
- set "nousedparameter":true
- set "noimplicitreturn":true
- set "nounused declare:true
- set "strictnullcheck:false [optional]
## Fundamentals:

- TS - datatypes = any, unknown, never,enum,tuple
- JS - datatypes = number, string, boolean,null,undefined,object
- 
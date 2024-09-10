# Understanding Data:: what is Data.

Information such as orders, cartitem, users, products.

> > Provide persistent storage = data doesnot lost on restart application.
> > Must be arrange in such a way that operation can be performed in the Data.
> > Retrieving Data.
> > For this, we can use File Sytem but that is not good idea of the below three operation are not performable so we will be using DataBase.

# Understanding DataBase::

Database is a tool or software that allows us to store data and then that database is now then used by our application to carry out operations.

# Types of databases::

Relational Database = Most popular (older)
Object-oriented Database - Store in terms of objects
NoSql Database = Most popular (older)
Hierarchical Databases

# Relational Database = Most popular (older)

Data is stored in rows and columns. which is called as # schema

# Schema:: It is a structure of data

Schema tell you what are paramerts that is required for any particular object. ie for employee data, para should be employeeId, name, address, DeptID etc.

Schema consite of primary keys and foreign key eg for employee table employee id wiill be PK and DeptId wil be FK.
That is why it is called as relational database.

# Nosql Database

    It is a non-Schema Database.
    It is stored in a form of JSON format.
    It give more flexible structure.
    It is not a structured Database.

# Difference in Relational and NoSql database

# Relational
Has strict Schema/structure
Row-column format
predictable data
Perfomance issue while reading with large set of data & realtionships
Example = MySql, Postgres, Sql-server

# NON-Relational - NOSql
Schemaless
JSON format
Difficult to predict
Better at reading form large datasets as it supports complex nested structure.
Example- MongoDB, DynamicDB, CouchDB, NoSql


# Understanding MongoDB
 installation == MongoDB atlas is for the cloud and MongoDD is for the onpremises ie on the computer.
    Community version is free to use and entriprises is paid.
    MongoDB comapss is a UI tool to manage database.

Relational Database vs nonrelation Database -->> Terminologies
Tables === Collections
Rows === Documents
Column === Attributes

# Eg {{a,c},{d,k},{l,g}} = 1object is a collection , 3 objects inside are the documents, and a,c,d,k,l,g are the attribures
So one database object can have multiple collections adn each collection can have multiple documes and so on


# CRUD using commandline in Mongodb (https://www.mongodb.com/docs/manual/crud/)

# To list all databases
1.  "show dbs" command 

# To select/create and connect to the database for doing CRUD operations
2.  "use databaseName" 

# create/add collection
3. To add one document ==>> "db.NameofCollection.insertOne({title:"Da Vinci Code", author:"Dan Brown"})"
3. To add many document ==>> "db.NameofCollection.insertMany([{title:"Da Vinci Code", author:"Dan Brown"}, {title:"book 2", author:"Brown", released:"2019"}, {title:"Harry Potter"}])"

# To show all collection
4. "show collection" = to show the documents created.

# To find Documents of collection
5. "db.NameofCollection.find()" == show all the documents
5. "db.NameofCollection.find({title:"book 2"})" == show all documents contains title as book 2
5. "db.NameofCollection.findOne({title:"book 2"})" == show one first document contains title as book 2

# Update - "$set" is the operator which updates the attributes
6. "db.NameofCollection.updateOne({filter},{$set:{attributes}})" eg db.book.updateOne({title:"Harry"},{$set:{title:"Hp&Goblet of Fire"}})
6. "db.NameofCollection.updateMany({filter},{$set:{attributes}})" eg db.book.updateMany({released:2019},{$set:{title:"Harry Potter"}})
6. "db.NameofCollection.replaceOne({filter},{$set:{attributes}})" = it replace the complete document first occured

# Delet
7. "db.NameofCollection.deleteOne({filter})" eg db.book.deleteOne({title:"book3"})
7. "db.NameofCollection.deleteMany({filter})"eg db.book.deleteOne({released:2019})
7. "db.NameofCollection.deleteMany({})" = will delet all the collections as no filter is applied



 To drop the database >>>>>>> "db.dropDatabase()"

# Global Uniques Object ID(12bytes) = first 4 byte is timestamp, next 5 byte is machine byte, rest 3 are counter byte.
db.book.insertMany([{title:"book3", author:"JK Rowling"}, {title:"book4", author:"blck", released:2019}, {title:"Harry Potter and philosopher stone"}])

------

# How can the MongoDB driver be used to connect to a MongoDB database on a local machine?

Node JS(client) connection to MongoDB(server)
npm i mongodb

Connect Mongodb to Nodejs

npm i mongodb

//mongdb.js file create in config folder

import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017/ecomdb" // this is for local host in case of cloud there could be differenct url
// syntax = "mongodb://localhost:27017/anyName
// for more info >> https://www.mongodb.com/docs/manual/reference/connection-string/

const connectToMongoDB = ()=>{
    //returns promise/instace of mongoclient
    MongoClient.connect(url).then(client=>{
        console.log("MongoDB is connected")
    }).catch(err=>{
        console.log(err)
    }) 
}


export default connectToMongoDB 



// on index/server file
server.listen(3200,()=>{
  console.log('Server is running at 3200');
  connectToMongoDB()
});

-----------------

# Working with Mongo DB Database
File 1 and 2,
Working with these modules does not Adhere to SOR principle so there we will create a new module repository to get adhere to the SOR Guidelines.
current working (model >>  controller)
now (model >> repository >> controller)

# Understandig Repository Pattern
Note :: 
    All the most of the static function which uses database will now be the part of Repository and not the Model
    
    Using try catch in Asych and console and res.send error will be preferable instead of using error middleware.
Steps::
1. Now controller call the model to create object
2. model return object to the controller
3. controller now call the repository to add object/document to Database
4. await till complete and then send the response.

# Hashing password
 1. decrypt the password
 2. fetch the useremial's object during login with email
 3. Compare with the request password and hashed password

# Environment Variable
There might be some configuration eg(mongodb url, jwt secret key, pc setting,configuration detail,connections,passwords), that are differents for different computer so we need to remove the hard coded configuations and create the Environment Variable to make application compatible for all the systems/computers.

library = dotenv

//on server page
1. npm i dotenv.
2. import dotenv from "dotenv"
3. // will load all the enviornment variable from the .env file
        dotenv.config()
4. create ".env" file in root directory. (make it git ignore) and Populate the file like below(no comma, no double/single quote)
    MONGODB_URL=mongodb://localhost:27017/ecomdb
    SECRETKEY_JWT=AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz
5. Now to acces the data of the above file we will use process.env it is object which help in accessing these variable.
    eg const mongourl = process.env.MONGODB_URL;

# 1st Way = use 3 and 4 steps in server file as well as in other file whre enviorment variable are being using becoz it may happen before the dotnet config the other file start running that will make the variable as undefine. 2nd Way =  we can write import and config in top of all the import ie in 1 and 2 line then instead of storing the variable in some other variable and then using that variable directly use the process.env.variable in that place. 3rd Way create one more js module and move the 2 and 3 step in that module and then import that module on top of all module.

3rd is the best practise.

for eg 

# WRONG Way 
const url = process.env.MONGODB_URL
mongo.connect(url)

# Correct way
mongo.connect(process.env.MONGODB_URL)


# working on Product Repository:: Point to Remember

1. To compare id we need to convert id coming from the client to objectid to match the correct form.
import {ObjectId} from "mongodb";
const product = await collection.findOne({_id: new ObjectId(id)})
2. db.find().toArray(); To gett complete list of collection
3. https://www.mongodb.com/docs/manual/reference/operator/query-comparison/
    comparison Operator.

# Applying filter in mongo db using comparison Operators
async filter(minPrice, maxPrice, category){
        try{
            const db = getDB();
        const collection = db.collection(this.collection)
        const filterExpression = {}
        if(minPrice){
            filterExpression.price = {$gte:parseFloat(minPrice)}
        }
        if(maxPrice){
            filterExpression.price = {...filterExpression.price, $lte: parseFloat(maxPrice)}
        }
        if(category){
            filterExpression.category = category
        }
        const products = await collection.find(filterExpression).toArray()
        console.log(filterExpression)
        console.log(products)
        return products
        }catch(err){
            console.log(err)
            throw new ApplicationError("Error in filter", 400)
        }
        
    }

# update any product have object property as array using $push operator and updateOne function of Mongodb
async rateProduct(userID, productID, rating){
        try{
            const db = getDB();
            const collection = db.collection(this.collection);
            await collection.updateOne({_id:new ObjectId(productID)},{$push:{ratings:{userID,rating}}})
        }catch(err){
            console.log(err)
            throw new ApplicationError("Error in rate", 400)
        }
        
    }

# 7 rating product (pull fn of mongo)

# 8 UPsert fuction of Mongo cartItem product.

In a blog application, you want to update the number of likes for a specific post. If the post doesn't exist, you want to create it. Which MongoDB command would you use?

db.posts.updateOne({_id: postld }, { $set: {likes: newLikes } }, { upsert: true })

Solution description
Above MongoDB command uses the $set operator to update likes for a specific post and the upsert option to create the post if needed, simplifying post likes management and new post creation.
whereas
$inc operator is user to increment the parameter if present else create the paramenter if not present.

In MongoDB, the $set operator sets a new value, while the $inc operator increases a value by a specified amount. The $inc operator can also add a new field if the specified field doesn't exist.

# 9 Modifying the Id in MongoDB::
//create the counter funtion
//fetch the count value
// add the id as count 

# 10 Indexes in Mongodb
1. single field index(eg 1,2,3)
2. compounded index
3.  Text indexes(eg abc, xyz)
Write operation becomes slower but read operations are optimized so read query will be faster and write will be slower/expensive.
//single field index eg {property: 1}
await db.collection("documentName").createIndex({parameterName:1});
//Compound Index +1 is ascending and -1 if for descending eg {property: +1/-1}
await db.collection("documentName").createIndex({parameterName:1, parameterName:-1})
//text based index. eg {property: "text"}
await db.collection("documentName").createIndex({desc:"text"}) 
// in large paragraph if we want to find a string then text based indexes are used.

# MongoDB operators
1. comparison operator = gte, lte, gt, lt, in, ne, nin
2. Logical operator(and, or, not, nor)
3. Element query operator

# projection operator 
These operator helps in modify the result like what property to show and what what not to show.
project({attribute:1/0}) these attribute are the property of the objects. 
1 means display as true and zero means false 
Id is bydefault 1 so make it zero to not to project.

# slice operator help in display number of item in an array you want to display
It is used with in the projectionoperator.
It also works in nested array as well.
    (+ first n item and - last n items)

# Aggregation Pipeline and operators
$group on basis of $category attribute
db.collection("any").aggregate([{
    $group:{
    _id: "$category",
    averageprice:{$avg:"$price"}
}
}]).toArray() 

$group operatory makes the group based on the $attribute provide. above is category
and $avg give the average of the atrribute been passed.eg price.


# Find the average price of category
This is how it will show the results it will be array of objects of different category along with theprice.
[{_id:category1,
AveragePrice: 5000}]

Find the average rating of product
Steps
1 unwind create an individual document for each rating
2. Then the individual documents are gouped on the basis of $name and then $avg help in creating the average of the rating property of the ratings object.
db.collection("products").aggregate([
   {$unwind:"$ratings"},
   {$group:{_id:"$name", averageRating:{$avg:"$ratings.rating"}}}
])


# Find the counts of ratings for our products
Steps
1 project name and count of rating in countRating use $cond condition operatory in which $if else and $isArray check if array else 0 means false then $size operator which gives the length of the array
db.collection("products").aggregate([
    {$project:{name:1, 
        countOfRatings:{$cond:{$if:{$isArray:"$ratings"},
        then:{$size:"$ratings"}, else:0}}}
    }
 ])


# Find the product with the highest ratings.
// Steps
//1 project name and count of rating in countRating use $cond condition operatory in which $if $else and $isArray check if array then 1 else 0 means false then $size operator which gives the length of the array
//2 Sort the result we the getting in stage one.
 // -1 descending order and 1 is for ascending 
//3 to get only one product with highest rating

db.collection("products").aggregate([
    {$project:{name:1,
        countRatings:{$cond:{$if:{$isArray:"$ratings"},
    then:{$size:"$ratings"}, else:0}}
    }},
    {$sort:{countOfRatings:-1}},
    {$limit:1}

])

# Transaction :: So if any of the steps fails to operate the whole db will comes into its original state before the transaction.

// create a folder name order in feature and in which a file info.txt in order folder.
placeOrder
 steps of transaction
1. Get cart items of User, calculate the totalAmount.
2.  create a record for order.
3.  Reduce the stock(products quantity)
4. Clear the cart

** Not feaseble for now.
5. Deduct the payment,
6. Inform the sellers.
7. Infor the coureir.


# steps of transaction and replica creation

// Transaction >> works when we have replica of the db unless our ecom db is a standalone db it will not work.

// on mongo file 
export const getClient = ()=>{
    return client;
}

// in placeOrder function
const client = getClient()
const session = client.startSession()
//1. Get cartitem and calculate total amount
const db = getDB()
session.startTransaction();

// insert the session object in each of the mongodb operation {session}.

//Insert below commands just after the last trasaction db step
session.commitTransaction() //udate the database
session.endSession() //end the session

//Now in catch block in case of error use below two commands
await session.abortTransaction();
session.endSession() //end the session
# for some variable to be able to access by the catch block it should be wrriten outside the try block so that it is accesible to both the block  

# How to make replica of the db.
original
mongod --dbpath=mongodb-data 
make replica
mongod --replSet nameof --dbpath=mongodb-data 
mongod --replSet rs0 --dbpath=mongodb-data 

to shutdown if any error occured 
db.shutdownServer

To initiate the replica set
rs.initiate()


# Mongosh
This is library/ODM tools which simplifies the database interaction or opearations in the application
https://mongoosejs.com/
ODM = Object Data Modelling = for non relational database
ORM = Object relation mappers = for relational database

Advantages::

ODM
BetterStructure
Validatons - incase if express validator is bypassed then at database level request will be rejected.
More controls using Middlewares. = want to send email after operation is completed.
Rich APIs = Simplifies. CRUD, filter, and all other operation 

# connecting with mongodb using Mongoose::
     await mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser:true, useUnifiedTopology:true})

# Schemas in MongoDB:: 
These are the blue print of the how the data looks like. Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
Schema are required to perform the operation on database using mongoose.
Uses = structuring the database collection, validations

1. {type:mongoose.Schema.Types.ObjectId,ref:"collectionName"} = type refers to the objectID from another collection which can be reached by  ref:"collectionName".

2. min/max:anynumber = refers to minimum length 10 and maximum length 20 
3. require:true = refers to mandatory field
4. unique: true = refers to unique mail id for each object created using schema
5. enums are the predefined attributes for any property so here type can be either seller or customer 


# Operation using mongoose
using model will perform the operation through schema
// const UserModel = mongoose.model("collectionName", schema) = is refers to collection 
const document = new UserModel() = its instance refers to documents 

// Performing operation in database using mongoose library
import mongoose from "mongoose"
import { UserSchema } from "./user.schema.js"
// const UserModel = mongoose.model("collectionName", schema)
const UserModel = mongoose.model("Users", UserSchema)
// signup
const newUser = new UserModel(user);
await newUser.save();
//signin
await UserModel.findOne({email})
// reset password
const user = await UserModel.findById(userId); //if user exist then below two operations
user.password = newPassword;
user.save()
// here in userRoute filee we will use jwt auth but not in server user api this is this type of middleware is called functional level middleware.

# validations in Moongoose [https://mongoosejs.com/docs/validation.html]
In schema validators are 
for string = min, max, required:true 
for numbers = enum, minLength, maxLength, match , required:true
and also there are custom validator using bothasynch and synch.
usescase: email correct syntax and password  must be this or that.
name of product = max 20 lenght or descript must be 100 length etc.

# Mongoose part 2
If the collection documents has alot of realation between them then mongodb is not the right choice

# Different types of relationships in database:
1. One to One eg cartitem to product item
2. One to Many eg product item to review item (one product can have multiple reviews)
3. Many to Many eg product to category (one product can be of multiple category and one category can have multiple products)

# Mongoose Middlewares.
These middleware are operated on Schema level.
These middleware intercept the database information to perform operation before and after receiving on them and then send then.
For that hooks are used prehooks/posthooks before/after receiving  data to database. eg adding validation to any input fields.
pre = adding log if someone like the product
post = informing the server that post has been liked
[Middleware](https://mongoosejs.com/docs/middleware.html)

# Best Practises
1. Schema Design. = Flat schema and Nested Schema(merging two schema for complex dataset Also help in avoiding maintain the joining)
2. Indexing 
3. Error handling
4. Validation

# Mongodb Atlas = Cloud mongodb database
> Deploying Databse on the cloud
Signin with the Mongodb Atlas and go with the free version
setup and copy the link and paste in the url in mongo connect object.
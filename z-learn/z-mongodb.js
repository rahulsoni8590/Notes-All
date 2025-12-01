import mongoose from "mongoose";

 async function db(){
    try{
        await mongoose.connect(process.env.DB_HOST + process.env.DB_NAME);
        console.log("Db connected, databaseName is cft")
    }catch(err){
        console.log("Failed to connect Db")
    }
}

const categorySchema = new mongoose.Schema({
    name:{type:String, required:true}
})

const serviceSchema = new mongoose.Schema({
    categoryid:{type:mongoose.Schema.Types.ObjectId, ref:"Category", required:true},
    name: {type:String, required:true},
    type: {type:String, required:true, enum:["Normal", "VIP"], required:true, default:"Normal"},
})


const priceOptionSchema = new mongoose.Schema({
    serviceid:{type:mongoose.Schema.Types.ObjectId, ref:"Service", required:true},
    Duration: {type:Number, required:true},
    Price: {type:Number, required:true},
    type:{type:String, enum:["Hourly", "Weekly", "Monthly"], required:true, default:"Hourly"}
})

const categoryModel = mongoose.model("Category", categorySchema)
const serviceModel = mongoose.model("Service",serviceSchema)
const priceOptionsModel = mongoose.model("PriceOptions",priceOptionSchema)

async function addCategory(req,res,next){
    try{
        const {name} = req.body;
        if(!name){
            res.status(400).send("Category not found")
        }
        const newCategory = await new categoryModel({name}).save();
        res.status(200).send({
            "operation":"success",
            category:newCategory
        })
    }catch(err){
        console.log(err)
        next(err)
    }
}

async function getCategory(req,res,next){
    try{
        const allCategory = await categoryModel.find();
        res.status(200).send({
            "operation":"success",
            category:allCategory
        })
    }catch(err){
        console.log(err)
        next(err)
    }
}


async function updateCategory(req,res,next){
    try{
        const id = req.params.categoryId;
        const {name} = req.body;
        const category = await categoryModel.findByIdAndUpdate(id,{name},{new:true});
        res.status(200).send({
            "operation":"success",
            category:category
        })
    }catch(err){
        console.log(err)
        next(err)
    }
}

async function deleteCategory(req,res,next){
    try{
        const id = req.params.categoryId;
        const find = await serviceModel.findOne({id})
        console.log(find)
        if(find){
            res.status(400).send({
                operation:"fail",
                reason:"Category is linked to service"
            })
        }else{
            const category = await categoryModel.findByIdAndDelete(id);
            res.status(200).send({
                "operation":"success",
            })
        }
    }catch(err){
        console.log(err)
        next(err)
    }
}


async function findCategory(id){
    const category = await categoryModel.findById(id)
    return category
}

async function addService(req,res,next){
    try{
        const {name,type} = req.body;
        const categoryid = req.params.categoryId
        if (!name  || !categoryid){
            res.status(400).send({
                operation:"Failed",
                note:"Required name, type and categoryId"
            })
        }
        const category = findCategory(categoryid)
        if(!category){
            res.status(400).send({
                operation:"Failed",
                reason:"Category Not Found"
            })
        }
        const newService = await new serviceModel({name,type,categoryid}).save()
        res.status(200).send({
            operation:"Success",
            service:newService
        })
    }catch(err){
        next(err)
    }
}


async function getService(req,res,next){
    try{
        const categoryid = req.params.categoryId
        const category = await findCategory(categoryid)
        if(!category){
            res.status(400).send({
                operation:"Failed",
                reason:"Category Not Found"
            })
        }
        const allService = await serviceModel.find({categoryid})
        res.status(200).send({
            operation:"Success",
            allservice:allService
        })
    }catch(err){
        next(err)
    }
}

async function updateService(req,res,next){
    try{
        const {name,type} = req.body;
        const categoryid = req.params.categoryId
        const serviceid = req.params.serviceId
        if (!name || !type || !categoryid){
            res.status(400).send({
                operation:"Failed",
                note:"Required name, type and categoryId"
            })
        }
        const category = await findCategory(categoryid)
        if(!category){
            res.status(400).send({
                operation:"Failed",
                reason:"Category Not Found"
            })
        }
        const updateService = await serviceModel.findByIdAndUpdate(serviceid,{name,type},{new:true})
        res.status(200).send({
            operation:"Success",
            service:updateService
        })
    }catch(err){
        next(err)
    }
}

async function deleteService(req,res,next){
    try{
        const categoryid = req.params.categoryId
        const serviceid = req.params.serviceId
        const category = await findCategory(categoryid)
        if(!category){
            res.status(400).send({
                operation:"Failed",
                reason:"Category Not Found"
            })
        }
        const deleteService = await serviceModel.findByIdAndDelete(serviceid)
        res.status(200).send({
            operation:"Success",
        })
    }catch(err){
        next(err)
    }
}

export {addService,getService,updateService,deleteService}
export {addCategory,getCategory,updateCategory,deleteCategory, findCategory}
export {serviceModel,priceOptionsModel,categoryModel};

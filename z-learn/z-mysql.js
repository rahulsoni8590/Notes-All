// npm install sequelize mysql2
// const { Op } = require('sequelize');
// const { Project } = require('./models'); // Assuming you have a Project model

// const result = await Project.findAll({
//   attributes: [
//     'category', // Grouping by category
//     [sequelize.fn('COUNT', sequelize.col('id')), 'projectCount'], // Counting the number of projects per category
//   ],
//   where: {
//     // Example condition to filter based on creation date
//     createdAt: {
//       [Op.gte]: new Date('2023-01-01'),
//     },
//   },
//   group: ['category'], // Group by category
//   order: [
//     [sequelize.col('createdAt'), 'DESC'], // Order by creation date descending
//   ],
//   having: sequelize.literal('COUNT(id) > 1'), // Optional condition after grouping (filtering groups)
// });

// console.log(result);

// Op.eq for equality (=)
// Op.ne for inequality (!=)
// Op.gt for greater than (>)
// Op.gte for greater than or equal (>=)
// Op.lt for less than (<)
// Op.lte for less than or equal (<=)
// Op.in for matching values in a list
// Op.or for OR conditions

// In Sequelize, the fn method is used to represent SQL functions or aggregates within your queries. It allows you to perform operations on database columns that go beyond simple column selection, such as applying functions like COUNT(), AVG(), MAX(), MIN(), or SUM(), and it is particularly useful for grouping and aggregating data.
// const result = await Project.findAll({
//   attributes: [
//     [sequelize.fn('AVG', sequelize.col('price')), 'averagePrice'], // Average of 'price' column
//     [sequelize.fn('AVG', sequelize.col('price')), name_OF_COLUMN], // Average of 'price' column

//   ],
// });
// console.log(result);

import { Sequelize, DataTypes } from "sequelize";

// Create a new Sequelize instance
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "mysql",
  logging: false,
});

const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Db connected, databaseName is cft");
  } catch (err) {
    console.log("Failed to connect Db");
  }
};

import { sequelize } from "./db";

sequelize.sync({ force: false }).then(() => {
  console.log("Database & tables are ready!");
});


export { sequelize, connectDb };


// Category Model
const Category = sequelize.define("Category", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  
  // Service Model
  const Service = sequelize.define("Service", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [["Normal", "VIP"]],
      },
      defaultValue: "Normal",
    },
  });
  
  // PriceOption Model
  const PriceOption = sequelize.define("PriceOption", {
    Duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [["Hourly", "Weekly", "Monthly"]],
      },
      defaultValue: "Hourly",
    },
  });
  
  // Define Relationships
  Category.hasMany(Service, { foreignKey: "categoryId" });
  Service.belongsTo(Category, { foreignKey: "categoryId" });
  
  Service.hasMany(PriceOption, { foreignKey: "serviceId" });
  PriceOption.belongsTo(Service, { foreignKey: "serviceId" });
  

  // Add Category
const addCategory = async (req, res, next) => {
    try {
      const { name } = req.body;
      if (!name) {
        return res.status(400).send("Category name is required");
      }
      const newCategory = await Category.create({ name });
      res.status(200).send({
        operation: "success",
        category: newCategory,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  };
  
  // Get All Categories
  const getCategory = async (req, res, next) => {
    try {
      const allCategories = await Category.findAll();
      res.status(200).send({
        operation: "success",
        categories: allCategories,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  };
  
  // Update Category
  const updateCategory = async (req, res, next) => {
    try {
      const id = req.params.categoryId;
      const { name } = req.body;
      const updatedCategory = await Category.update(
        { name },
        { where: { id }, returning: true }
      );
      res.status(200).send({
        operation: "success",
        category: updatedCategory[1][0],
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  };
  
  // Delete Category
  const deleteCategory = async (req, res, next) => {
    try {
      const id = req.params.categoryId;
      const categoryLinkedToService = await Service.findOne({ where: { categoryId: id } });
      if (categoryLinkedToService) {
        return res.status(400).send({
          operation: "fail",
          reason: "Category is linked to service",
        });
      }
      await Category.destroy({ where: { id } });
      res.status(200).send({ operation: "success" });
    } catch (err) {
      console.log(err);
      next(err);
    }
  };

  
  // Add Service
const addService = async (req, res, next) => {
    try {
      const { name, type } = req.body;
      const categoryId = req.params.categoryId;
  
      if (!name || !categoryId) {
        return res.status(400).send({ operation: "Failed", note: "Required name, type and categoryId" });
      }
  
      const category = await Category.findByPk(categoryId);
      if (!category) {
        return res.status(400).send({ operation: "Failed", reason: "Category Not Found" });
      }
  
      const newService = await Service.create({ name, type, categoryId });
      res.status(200).send({ operation: "Success", service: newService });
    } catch (err) {
      next(err);
    }
  };
  
  // Get Services by Category
  const getService = async (req, res, next) => {
    try {
      const categoryId = req.params.categoryId;
      const category = await Category.findByPk(categoryId);
      if (!category) {
        return res.status(400).send({ operation: "Failed", reason: "Category Not Found" });
      }
  
      const services = await Service.findAll({ where: { categoryId } });
      res.status(200).send({ operation: "Success", services });
    } catch (err) {
      next(err);
    }
  };
  
  // Update Service
  const updateService = async (req, res, next) => {
    try {
      const { name, type } = req.body;
      const categoryId = req.params.categoryId;
      const serviceId = req.params.serviceId;
  
      if (!name || !type || !categoryId) {
        return res.status(400).send({ operation: "Failed", note: "Required name, type, and categoryId" });
      }
  
      const category = await Category.findByPk(categoryId);
      if (!category) {
        return res.status(400).send({ operation: "Failed", reason: "Category Not Found" });
      }
  
      const updatedService = await Service.update(
        { name, type },
        { where: { id: serviceId }, returning: true }
      );
      res.status(200).send({ operation: "Success", service: updatedService[1][0] });
    } catch (err) {
      next(err);
    }
  };
  
  // Delete Service
  const deleteService = async (req, res, next) => {
    try {
      const categoryId = req.params.categoryId;
      const serviceId = req.params.serviceId;
  
      const category = await Category.findByPk(categoryId);
      if (!category) {
        return res.status(400).send({ operation: "Failed", reason: "Category Not Found" });
      }
  
      await Service.destroy({ where: { id: serviceId } });
      res.status(200).send({ operation: "Success" });
    } catch (err) {
      next(err);
    }
  };
  
  export { Category, Service, PriceOption };
  

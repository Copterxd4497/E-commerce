const fs = require("fs");
const path = require("path");
const Category = require("./../models/categoriesModel");

exports.productsPage = (req, res) => {
  res.status(200).render("products");
};

exports.categories = async (req, res) => {
  try {
    const category = await Category.find();

    const categoriesPath = path.join(
      __dirname,
      "../dev-data/defaults/defaultCategories.json"
    );
    const categoriesData = fs.readFileSync(categoriesPath, "utf-8");
    const defaultCategories = JSON.parse(categoriesData);
       

    res.status(200).render("categories", { defaultCategories });
  } catch (err) {
    res.status(404).send(`There is error! ${err.message}`);
  }
};

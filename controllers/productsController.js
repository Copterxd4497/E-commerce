const fs = require("fs");
const path = require("path");
const Category = require("./../models/categoriesModel");

exports.productsPage = (req, res) => {
  res.status(200).render("products");
};

exports.categories = async (req, res) => {
  try {
    const categories = await Category.find();

    const categoriesPath = path.join(
      __dirname,
      "../dev-data/defaults/defaultCategories.json"
    );
    const categoriesData = fs.readFileSync(categoriesPath, "utf-8");
    const defaultCategories = JSON.parse(categoriesData);
    res.status(200).render("categories", { categories, defaultCategories });

    // res.status(200).json({
    //   message: "this is cool right",
    //   data: {
    //     defaultCategories,
    //     categories,
    //   },
    // });
  } catch (err) {
    res.status(404).send(`There is error! ${err.message}`);
  }
};

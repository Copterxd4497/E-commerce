const fs = require('fs');
const path = require('path');
const Products = require('./../models/productsModel');

exports.homePage = async (req, res) => {
  try{
    const productsPath = path.join(__dirname, '../dev-data/defaults/defaultProducts.json');
    const productsData = fs.readFileSync(productsPath, 'utf-8');
    const defaultProducts = JSON.parse(productsData);

    const featuredProducts = await Products.find();

    res.status(200).render("home", { featuredProducts, defaultProducts });
  }catch(err){
    res.status(404).send(`There is error! ${err.message}`);
  }
};

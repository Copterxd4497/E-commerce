const express = require("express");

const homePageController = require("../controllers/homePageController");
const productsController = require("./../controllers/productsController");
const contactController = require("./../controllers/contactController");

const router = express.Router();

router.route("/").get(homePageController.homePage);
router.route("/products").get(productsController.productsPage);
router.route("/categories").get(productsController.categories);
router.route("/contact").get(contactController.contactPage);

module.exports = router;

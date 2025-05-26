exports.productsPage = (req, res) => {
  res.status(200).render("products");
};

exports.catagories = (req, res) => {
  res.status(200).render("categories");
};

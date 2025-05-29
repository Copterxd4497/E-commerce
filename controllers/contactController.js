exports.contactPage =  (req, res) => {
  res.status(200).render('contact', {
    title: 'Contact Us',
    user: null,          // or req.user if using authentication
    cartCount: 0
  });
};

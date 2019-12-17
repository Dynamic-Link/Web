const User = require("../../models/User");

module.exports = app => {
  //Add link
  app.post("/api/addLink", (req, res, next) => {
    const {
      linkName,
      product,
      promotions,
      notes,
      defaultUrl,
      email,
      utmParameters
    } = req.body;
    User.findOne({
      email
    })
      .then(user => {
        user.links.push({
          email,
          linkName,
          product,
          promotions,
          notes,
          defaultUrl,
          utmParameters
        });
        user.save();
        res.json(user.links[user.links.length - 1]);
      })
      .catch(err => console.log(err));
  });
};

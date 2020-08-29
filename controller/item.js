const Item = require("../model/Item");

module.exports.postDetails = async (req, res, next) => {
  if (req.body.obj.password != req.body.rePassword) {
    return res.render("index", { error: "enter valid re password" });
  }
  try {
    let newItem = await Item.insertMany([req.body.obj]);
    res.render("index", { error: "User Registered" });
  } catch (error) {
    let err = error.errors[Object.keys(error.errors)[0]].path;
    res.render("index", { error: "enter valid " + err });
  }
};

module.exports = (req, res, next) => {
  // req.methods='POST'&&
  if (req.path === "/login") {
    console.log(req.body);
    if (req.body.username == "root" && req.body.password === "123456") {
      return res.status(200).json({
        user: {
          token: "123",
        },
      });
    } else {
      return res.status(400).json({
        msg: "瞎写饿。。。",
      });
    }
  }
  next();
};

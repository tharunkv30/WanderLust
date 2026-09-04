const express = require("express");
const router = express.Router({ mergeParams: true });
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveredirectUrl } = require("../middleware.js");
const {
  signup,
  renderSignUpForm,
  renderLoginForm,
  login,
  logout,
} = require("../controllers/users.js");

router.get("/signup", renderSignUpForm);

router.post("/signup", wrapAsync(signup));

router.get("/login", renderLoginForm);

router.post(
  "/login",
  saveredirectUrl,
  passport.authenticate("local", {
    failureRedirect: `/login`,
    failureFlash: true,
  }),
  login
);

router.get("/logout", logout);

module.exports = router;

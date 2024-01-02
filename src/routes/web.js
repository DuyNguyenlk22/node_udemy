const express = require("express");
const {
  getHomepage,
  getAbc,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  putUpdateUser,
  deleteUser,
  getUserDelete,
} = require("../controllers/homeController");

const router = express.Router();

router.get("/", getHomepage);
router.get("/abc", getAbc);
router.get("/create", getCreatePage);
router.get("/update/:userId", getUpdatePage);
router.get("/delete-user/:userId", getUserDelete);

router.post("/create-user", postCreateUser);
router.post("/update-user", putUpdateUser);
router.post("/delete-user", deleteUser);

module.exports = router;

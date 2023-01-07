const router = require("express").Router();
// const user = require("../controllers/user.controllers");
const food = require("../controllers/fridge.controllers")
const fridge = require("../controllers/user_fridge.controllers")
const user = require("../controllers/user.controllers")

//FOOD
router.get("/list-templates", food.getTemplates)
router.post("/add", food.addFood)
router.get("/food/:name", food.getOne);
router.post("/food2fridge",fridge.insert)
// router.post("/insert-food", board.insert);
// router.post("/update-food", board.update);
// router.delete("/delete-food", board.delete);

//USER
router.post("/login", user.login);
// router.post("/confirmEmail",user.confirmEmail);
// router.post("/insert-user", user.insert);
// router.post("/update-user",user.update);
// router.get("/setAvatar/:avatar",user.setAvatar);

// router.post("/passToEmail",user.passToEmail);
// router.post("/resetPass/:token", user.resetPass);
// router.post("/searchUser",user.searchUser);
// router.post("/delete-user", user.delete);
// router.get("/logged-user", user.getUserbyCookie)

module.exports = router;

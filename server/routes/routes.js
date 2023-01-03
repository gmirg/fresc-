const router = require("express").Router();
// const user = require("../controllers/user.controllers");
const food = require("../controllers/fridge.controllers")

//FOOD
router.get("/list-templates", food.getTemplates)
router.post("/add", food.addFood)
// router.post("/food",food.findFood)
// router.get("/food", food.sendFood)
// router.post("/insert-food", board.insert);
// router.get("/show-food/:id", board.show);
// router.post("/update-food", board.update);
// router.delete("/delete-food", board.delete);

//USER
// router.post("/confirmEmail",user.confirmEmail);
// router.post("/insert-user", user.insert);
// router.post("/update-user",user.update);
// router.get("/setAvatar/:avatar",user.setAvatar);
// router.post("/login", user.login);
// router.post("/passToEmail",user.passToEmail);
// router.post("/resetPass/:token", user.resetPass);
// router.post("/searchUser",user.searchUser);
// router.post("/delete-user", user.delete);
// router.get("/logged-user", user.getUserbyCookie)

module.exports = router;

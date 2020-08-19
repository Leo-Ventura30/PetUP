const express = require("express");

const routes = express.Router();

const auth = require("../middleware/auth");
const guest = require("../middleware/guest");

const UserController = require("../controllers/UserController");
const SessionController = require("../controllers/SessionController");
const DashboardController = require("../controllers/DashboardController");
const ScheduleController = require("../controllers/ScheduleController");

const multerConfig = require("../../config/multer");

const upload = require("multer")(multerConfig);

routes.get("/", guest, UserController.load);

routes.use("/signup", guest);
routes.get("/signup", UserController.signup);
routes.post("/signup/create", UserController.create);

routes.post("/signin", SessionController.signin);

routes.use("/dashboard/", auth);

routes.get("/dashboard/home", DashboardController.create);
routes.get("/dashboard/home/schedules", ScheduleController.index);
routes.get("/dashboard/home/schedules/:id", ScheduleController.details);

routes.post("/dashboard/home/schedule", ScheduleController.create);
routes.post(
  "/dashboard/home/uploadImage",
  upload.single("avatar"),
  DashboardController.updateImage
);

routes.get("/dashboard/logout", SessionController.DestroyCookie);

routes.get("/dashboard/home/pageSchedule");
routes.get(
  "/dashboard/home/schedules/:id/closed",
  ScheduleController.closeSchedule
);

module.exports = routes;

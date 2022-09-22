import express from "express";
import { CreateSurvey, getSurveys } from "../controllers/surveyController.js";

const router = express.Router();

router.route("/getAll").get(getSurveys);
router.route("/create").post(CreateSurvey);

export default router;

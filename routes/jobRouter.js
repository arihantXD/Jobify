import { Router } from "express";
import {
  validateIdParam,
  validateJobInput,
} from "../middleware/validateMiddleware.js";
const router = Router();

import {
  getAllJobs,
  getJob,
  deleteJob,
  updateJob,
  createJob,
  showStats,
} from "../controller/jobController.js";
import { checkForTestUser } from "../middleware/authMiddleware.js";

router
  .route("/")
  .get(getAllJobs)
  .post(checkForTestUser, validateJobInput, createJob);

router.route("/stats").get(showStats);

router
  .route("/:id")
  .get(checkForTestUser, validateIdParam, getJob)
  .patch(checkForTestUser, validateJobInput, validateIdParam, updateJob)
  .delete(checkForTestUser, validateIdParam, deleteJob);

export default router;

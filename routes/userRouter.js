import { Router } from "express";
import {
  getApplicationStats,
  getCurrentUser,
  updateUser,
} from "../controller/userController.js";
import { validateUpdateUserInput } from "../middleware/validateMiddleware.js";
import {
  authorizePermissions,
  checkForTestUser,
} from "../middleware/authMiddleware.js";
import upload from "../middleware/multerMiddleware.js";
const router = Router();

router.get("/current-user", getCurrentUser);
router.get(
  "/admin/app-stats",
  authorizePermissions("admin"),
  getApplicationStats
);
router.patch(
  "/update-user",
  upload.single("avatar"),
  checkForTestUser,
  validateUpdateUserInput,
  updateUser
);

export default router;

import express from "express";
import {
  getUsers,
  saveUser,
  getUserById,
  deleteUser,
  updateUser,
} from "../controllers/User.controller.js";
const router = express.Router();

router.get("/api/users", getUsers);
router.get("/api/users/:id", getUserById);
router.post("/api/users", saveUser);
router.patch("/api/users/:id", updateUser);
router.delete("/api/users/:id", deleteUser);

export default router;

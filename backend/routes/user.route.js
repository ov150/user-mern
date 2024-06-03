import express from "express"
import { newUser , getUser , allUsers } from "../controllers/user.controller.js"

const router = express.Router();

//localhost:4000/api/v1/user/new
router.post('/new', newUser);
//localhost:4000/api/v1/user/all
router.get('/all', allUsers)
//localhost:4000/api/v1/user/:id
router.get('/:id', getUser)

export default router;
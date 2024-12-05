import express from 'express'

import signUp from '../controllers/usercontroller.js';

const router = express.Router();
router.post("/register",signUp)

export default router

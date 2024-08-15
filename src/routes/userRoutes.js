import express from 'express';
import { getUsers, createUser } from '../controllers/usersController.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);

export default router;
import express from 'express';
import { register, login, updateProfile } from '../controllers/user.controller';
import isAuthenticated from '../middlewares/isAuthenticated';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('profile/update', isAuthenticated, updateProfile);

export default router;



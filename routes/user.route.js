import express from 'express';
import { register, login, updateProfile } from '../controllers/user.controller';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/profile/update', updateProfile);

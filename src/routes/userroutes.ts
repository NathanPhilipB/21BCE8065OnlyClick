import express from 'express';
import { signup, login } from '../controllers/usercontroller';

const router = express.Router();

router.post('/signup', (req, res, next) => {
  signup(req, res, next).catch(next);
});

router.post('/login', (req, res, next) => {
  login(req, res, next).catch(next);
});

export default router;
import { Router, Request, Response } from 'express';
import { register } from '../controllers/auth.controller';
import { login } from '../controllers/login.controller';
// import { authenticate } from '../middleware/middleware';
// import { IAuthRequest } from '../types/IAuthRequest';

const router = Router();
router.post('/register', register);
router.post('/login', login);
// router.get('/profile', authenticate, (req: IAuthRequest, res: Response) => {
//   res.json({ message: 'Welcome to your profile!', userId: req.user?.id });
// });
export default router;

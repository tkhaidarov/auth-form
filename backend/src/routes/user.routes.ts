import { Router } from 'express';
import { authenticate } from '../middleware/middleware';
import { blockUser, unblockUser, deleteUser, getAllUsers } from '../controllers/user.controller';
const router = Router();
router.get('/', authenticate, getAllUsers);
router.patch('/:id/block', authenticate, blockUser);
router.patch('/:id/unblock', authenticate, unblockUser);
router.delete('/:id', authenticate, deleteUser);

export default router;

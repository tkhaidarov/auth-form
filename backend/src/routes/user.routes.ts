import { Router } from 'express';
import { blockUser, unblockUser, deleteUser, getAllUsers } from '../controllers/user.controller';
const router = Router();
router.get('/', getAllUsers);
router.patch('/:id/block', blockUser);
router.patch('/:id/unblock', unblockUser);
router.delete('/:id', deleteUser);

export default router;

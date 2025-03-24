import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { Users } from '../models/Users';
import { IAuthRequest } from '../types/IAuthRequest';

export const authenticate = async (req: IAuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (!authHeader || typeof authHeader !== 'string' || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ message: 'No token provided' });
    return;
  }
  const token = authHeader.split(' ')[1]; // Берём токен из "Bearer <token>"
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret') as { id: string };
    const user = await Users.findByPk(decoded.id);
    if (!user) {
      res.status(401).json({ message: 'User not found, please login first' });
      return;
    }
    if (user.blocked) {
      res.status(401).json({ message: 'Your account is blocked' });
      return;
    }
    req.user = { id: user.id };
    next();
  } catch (error) {
    res.status(403).json({ message: 'Invalid token' });
    return;
  }
};

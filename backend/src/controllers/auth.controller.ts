import { Request, Response } from 'express';
import { Users } from '../models/Users';
import jwt from 'jsonwebtoken';

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password } = req.body;

    const existingEmail = await Users.findOne({ where: { email } });
    if (existingEmail) {
      res.status(400).json({ message: `User with ${existingEmail.email} already exists` });
      return;
    }
    const newUser = await Users.create({
      name,
      email,
      password,
    });
    const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET || 'secret', {
      expiresIn: '7d',
    });

    res.status(201).json({
      token,
      user: { id: newUser.id, name: newUser.name, email: newUser.email },
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error' });
    return;
  }
};

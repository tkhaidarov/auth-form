import { NextFunction, Response, Request } from 'express';
import { Users } from '../models/Users';
import { IAuthRequest } from '../types/IAuthRequest';

const findUserById = async (id: string, res: Response) => {
  const user = await Users.findByPk(id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  return user;
};
export const blockUser = async (req: IAuthRequest, res: Response) => {
  const user = await findUserById(req.params.id, res);
  if (!(user instanceof Users)) return;
  await user.update({ blocked: true });
  await user.save();
  res.json({ message: `User ${user.name} has been blocked` });
  return;
};
export const unblockUser = async (req: IAuthRequest, res: Response) => {
  const user = await findUserById(req.params.id, res);
  if (!(user instanceof Users)) return;
  await user.update({ blocked: false });
  await user.save();
  res.json({ message: `User ${user.name} has been unblocked` });
  return;
};
export const deleteUser = async (req: IAuthRequest, res: Response) => {
  const user = await findUserById(req.params.id, res);
  if (!(user instanceof Users)) return;
  await user.destroy();
  res.json({ message: `User ${user.name} has been deleted` });
  return;
};
export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await Users.findAll({
      attributes: ['id', 'name', 'email', 'is_blocked', 'last_seen'],
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error getting all users' });
    next(error);
  }
};

import express, { Application } from 'express';
import sequelize from './connectionToDB';
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';
import { authenticate } from './middleware/middleware';
import cors from 'cors';

const PORT = process.env.SERVER_PORT || 5000;
const app: Application = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/users', authenticate, userRoutes);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('connected successfully');
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  } catch (e) {
    console.error('Database connection error', e);
  }
};
startServer();

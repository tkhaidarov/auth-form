import dotenv from 'dotenv';
import { Sequelize } from 'sequelize-typescript';
dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL as string, {
  dialect: 'postgres',
  models: [__dirname + '/models'],
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
      require: true,
    },
  },
});

export default sequelize;

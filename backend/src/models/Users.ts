import { Table, Column, Model, DataType, BeforeCreate, BeforeUpdate } from 'sequelize-typescript';
import 'reflect-metadata';
import bcrypt from 'bcrypt';
@Table({
  timestamps: false,
  tableName: 'users',
})
export class Users extends Model {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  declare id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  declare email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare password: string;

  @Column({
    type: DataType.BOOLEAN,
    field: 'is_blocked',
    defaultValue: false,
  })
  declare blocked: boolean;

  @Column({
    type: DataType.DATE,
    field: 'last_seen',
    defaultValue: DataType.NOW,
  })
  declare lastSeen: Date;

  @BeforeCreate
  @BeforeUpdate
  static async hashPassword(user: Users) {
    if (user.changed('password')) {
      user.password = await bcrypt.hash(user.password, 10);
    }
  }
}

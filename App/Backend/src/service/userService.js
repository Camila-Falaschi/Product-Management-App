import md5 from 'md5';
import { Op } from 'sequelize';
import { User } from '../database/models';
import { createToken } from '../utils/createToken';

const create = async (data) => {
  const { name, email, password } = data;

  const user = await User.findOne({ where: { 
    [Op.or]: [
      { email },
      { name },
    ],
  } });

  if (user) throw new Error('User already exist');

  const token = createToken(name, email);

  const cryptPassword = md5(password);
  await User.create({
    name,
    email,
    password: cryptPassword,
  });

  return { name, email, token };
};

const login = async (email, loginPassword) => {
    const user = await User.findOne({ where: { email } });
  
    if (!user) throw new Error('User not found');
    if (md5(loginPassword) !== user.password) throw new Error('Incorrect password');
  
    const { password, id, ...userInfo } = user.dataValues;
    const token = createToken(userInfo);
    return { ...userInfo, token };
  };

export default {
  create,
  login
};
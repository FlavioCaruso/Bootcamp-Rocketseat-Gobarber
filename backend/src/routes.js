import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Flávio Caruso',
    email: 'fbcaruso@hotmail.com',
    password_hash: '12345',
  });

  return res.json(user);
});

export default routes;

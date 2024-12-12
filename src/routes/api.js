import express from 'express';
import { handleCreateUser, handleHelloWorld, handleUserPage } from '../controllers/homeController';

const router = express.Router();
router.get('/', handleHelloWorld);
router.get('/user', handleUserPage);
router.post('/user/create-user', handleCreateUser);

export { router };
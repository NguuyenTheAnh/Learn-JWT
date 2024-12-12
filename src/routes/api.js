import express from 'express';
import { handleCreateUser, handleDeleteUser, handleGetUpdateUser, handleHelloWorld, handleUpdateUser, handleUserPage } from '../controllers/homeController';

const router = express.Router();
router.get('/', handleHelloWorld);
router.get('/user', handleUserPage);
router.post('/user/create-user', handleCreateUser);
router.post('/delete-user/:userId', handleDeleteUser); // because html can't support delete
router.get('/update-user/:userId', handleGetUpdateUser);
router.post('/update-user', handleUpdateUser);

export { router };
import express from 'express';
import { handleHelloWorld } from '../controllers/homeController';

const router = express.Router();
router.get('/', handleHelloWorld);

export { router };
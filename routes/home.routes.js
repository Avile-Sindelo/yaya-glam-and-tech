import express from 'express';

import { getHomePage, getServicesPage } from '../controllers/home.controller.js';

const router = express.Router();

router.get('/', getHomePage);

router.get('/services', getServicesPage);

export default router;
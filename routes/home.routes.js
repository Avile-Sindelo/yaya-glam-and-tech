import express from 'express';

import HomeRoutes from '../controllers/home.controller.js';

const router = express.Router();

router.get('/', HomeRoutes.getHomePage);

router.get('/services', HomeRoutes.getServicesPage);

export default router;
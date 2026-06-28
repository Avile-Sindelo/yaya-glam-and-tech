import express from 'express';

import { validateBooking } from '../middleware/validation.middleware.js';

import { getBookingPage, createBooking } from '../controllers/booking.controller.js';

const router = express.Router();

router.get('/', getBookingPage);
router.post('/', validateBooking, createBooking);

export default router;
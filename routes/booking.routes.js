import express from 'express';

import { validateBooking } from '../middleware/validation.middleware.js';

import Booking from '../controllers/booking.controller.js';

const router = express.Router();

router.get('/', Booking.getBookingPage);
router.post('/', validateBooking, Booking.createBooking);

export default router;
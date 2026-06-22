import express from 'express';

import { getBookingPage, createBooking } from '../controllers/booking.controller.js';

const router = express.Router();

router.get('/', getBookingPage);
router.post('/', createBooking);

export default router;
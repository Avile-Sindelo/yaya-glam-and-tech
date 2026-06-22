import * as BookingService from '../services/booking.service.js';

export function getBookingPage(
    req,
    res
) {

    res.render('booking');

}

export async function createBooking(
    req,
    res
) {

    try {

        await BookingService.createBooking(
            req.body
        );

        res.redirect('/');

    } catch (error) {

        console.error(error);

        res.status(500).send(
            'Unable to create booking'
        );

    }

}
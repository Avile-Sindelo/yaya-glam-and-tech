import * as BookingModel from '../models/booking.model.js';
import { sendBookingConfirmation } from './notification.service.js';

export async function createBooking(data) {

    await BookingModel.createBooking(data);

    await sendBookingConfirmation(data);
}

export async function getBookings() {

    return BookingModel.getBookings();
}

export async function bookingByName(name) {
    return BookingModel.getBookingByName(name);
}

export async function bookingByNumber(number) {
    return BookingModel.getBookingByNumber(number);
}

export async function confirmBooking(
    bookingId
) {

    return BookingModel.updateBookingStatus(
        bookingId,
        'Confirmed'
    );
}

export async function cancelBooking(
    bookingId
) {

    return BookingModel.updateBookingStatus(
        bookingId,
        'Cancelled'
    );
}
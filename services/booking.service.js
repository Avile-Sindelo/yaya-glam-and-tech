import BookingModel from '../models/booking.model.js';
import { sendBookingConfirmation } from './notification.service.js';


async function createBooking(data) {

    await BookingModel.createBooking(data);

    await sendBookingConfirmation(data);

}

async function getBookings() {

    return BookingModel.getBookings();
}

async function bookingByName(name) {
    return BookingModel.getBookingByName(name);
}

async function bookingByNumber(number) {
    return BookingModel.getBookingByNumber(number);
}

async function confirmBooking(bookingId) {

    return BookingModel.updateBookingStatus(
        bookingId,
        'Confirmed'
    );
}

async function cancelBooking(bookingId) {

    return BookingModel.updateBookingStatus(
        bookingId,
        'Cancelled'
    );
}

export default {
    createBooking,
    getBookings,
    bookingByName,
    bookingByNumber,
    confirmBooking,
    cancelBooking
}
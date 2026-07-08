import BookingModel from '../models/booking.model.js';

async function getDashboard(req, res) {
    const bookings = await BookingModel.getBookings();
    
    // console.log(bookings);
    res.render('admin', { bookings });

};

export default {
    getDashboard
}
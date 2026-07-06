import BookingModel from '../models/booking.model.js';

async function getDashboard(req, res) {
    const bookings = await BookingModel.getBookings();
    

    // for(let i = 0; i < bookings.length - 1; i++){
    //    bookings[i].booking_date = bookings[i].booking_date.toISOString().split('T')[0];
    // }
    
    // console.log(bookings);
    res.render('admin', { bookings });

};

export default {
    getDashboard
}
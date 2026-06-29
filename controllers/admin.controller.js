import BookingModel from '../models/booking.model.js';

export const getDashboard = async (req, res) => {
    const bookings = await BookingModel.getBookings();
    
    // bookings.forEach((booking)=>{
    //     booking.booking_date;
    // });

    for(let i = 0; i < bookings.length; i++){
       bookings[i].booking_date = bookings[i].booking_date.toISOString().split('T')[0];
    }
    
    // console.log(bookings);
    res.render('admin', { bookings });

};
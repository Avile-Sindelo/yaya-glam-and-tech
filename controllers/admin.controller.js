import BookingModel from '../models/booking.model.js';

export const getDashboard = async (req, res) => {
    const bookings = await BookingModel.getAll();

    res.render('admin', { bookings });

};
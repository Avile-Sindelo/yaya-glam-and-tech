import BookingService from '../services/booking.service.js';
import { getServices } from '../models/service.model.js';

export async function getBookingPage(req, res) {
    //get the services from the database and pass them to 
    //the render method alongside the "booking" view
    const services = await getServices();
    
    res.render('booking', { services });

}

export async function createBooking(req, res) {

    try {
  
        await BookingService.createBooking(req.body);

        res.redirect('/');

    } catch (error) {

        console.error(error);

        res.status(500).send('Unable to create booking');

    }

}
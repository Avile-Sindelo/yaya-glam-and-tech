import BookingService from '../services/booking.service.js';
import  Services from '../models/service.model.js';

async function getBookingPage(req, res) {
    
    const services = await Services.getServices();
    
    res.render('booking', { services });
    
}

async function createBooking(req, res) {
    
    try {
        
        await BookingService.createBooking(req.body);
        
        res.redirect('/');
        
    } catch (error) {
        
        console.error(error);
        const services = await Services.getServices();
        const errors = [];
        errors.push(error);
        res.status(500).render('booking', { errors, services });

    }

}

export default {
    getBookingPage,
    createBooking
}
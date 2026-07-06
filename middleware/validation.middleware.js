import  Services from '../models/service.model.js';
import BookingModel from '../models/booking.model.js'

export async function validateBooking(req, res, next) {

       const {
        client_name,
        phone_number,
        service_id, 
        booking_date,
        booking_time
    } = req.body;

    const nameRegex = /^[A-Za-zÀ-ÿ]+(?:[\s'-][A-Za-zÀ-ÿ]+)*$/;

    const phoneRegex = /^(\+?\d{1,3}[\s-]?)?(\d{2,3}[\s-]?)?\d{3}[\s-]?\d{4}$/;

    const errors = [];

    if (!nameRegex.test(client_name)) {

        errors.push('Please enter a valid name.');

    }

    if (!phoneRegex.test(phone_number)) {

        errors.push('Please enter a valid South African phone number.');

    }

    
    function validateBookingDate(bookingDate) {
        
        const today = new Date();
        
        today.setHours(0, 0, 0, 0);
        
        const selectedDate = new Date(bookingDate);
    
        selectedDate.setHours(0, 0, 0, 0);
    
        if (selectedDate < today) {
    
            errors.push('Invalid date - Make sure you do not book the Past');
            
        }
    }
    
    async function validateAvailableSlot(bookingDate, bookingTime) {
        
        const booking = await BookingModel.bookingExists(bookingDate, bookingTime);
        
        if (booking) {
            
            errors.push('That slot has already been booked!');
            
        }
        
    }

    validateBookingDate(booking_date);
    await validateAvailableSlot(booking_date, booking_time);

    if (errors.length > 0) {
        const services = await Services.getServices();
    
        return res.status(500).render('booking', {errors, formData: req.body, services});
    
    }

    next();
    console.log('Errors, as per validation.middleware: ', errors);
    return errors;

}


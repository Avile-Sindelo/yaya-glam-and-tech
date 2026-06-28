export function validateBooking(req, res, next) {

    const {
        client_name,
        phone_number,
        service_id,
        booking_date,
        booking_time
    } = req.body;

    const nameRegex = /^[A-Za-zÀ-ÿ]+(?:[\s'-][A-Za-zÀ-ÿ]+)*$/;

    const phoneRegex = /^(\+?\d{1,3}[\s-]?)?(\d{2,3}[\s-]?)?\d{3}[\s-]?\d{4}$/;

    const serviceRegex = /^[0-9]+$/;

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

    const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

    const errors = [];

    if (!nameRegex.test(client_name)) {

        errors.push('Please enter a valid name.');

    }

    if (!phoneRegex.test(phone_number)) {

        errors.push('Please enter a valid South African phone number.');

    }

    if (!serviceRegex.test(service_id)) {

        errors.push('Invalid service selected.');

    }

    if (!dateRegex.test(booking_date)) {

        errors.push('Invalid booking date.');

    }

    if (!timeRegex.test(booking_time)) {

        errors.push('Invalid booking time.');

    }

    if (errors.length > 0) {

        return res.status(400).render('booking', {errors, formData: req.body});

    }

    next();

}
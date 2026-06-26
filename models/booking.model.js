import db from '../config/database.js';

async function createBooking(data) {

    return db.none(
        `
        INSERT INTO bookings
        (
            client_name,
            phone_number,
            service_id,
            booking_date,
            booking_time
        )
        VALUES
        (
            $1,$2,$3,$4,$5
        )
        `,
        [
            data.client_name,
            data.phone_number,
            data.service_id,
            data.booking_date,
            data.booking_time
        ]
    );
}

async function getBookings() {

    return await db.any(`
        SELECT
            b.*,
            s.service_name
        FROM bookings b
        JOIN services s
            ON b.service_id = s.service_id
        ORDER BY
            booking_date,
            booking_time
    `);
}

async function updateBookingStatus(bookingId, status) {

    return db.none(
        `
        UPDATE bookings
        SET status = $1
        WHERE booking_id = $2
        `,
        [status, bookingId]
    );
}

async function getBookingByName(client_name){
    return await db.manyOrNone(`SELECT * FROM bookings WHERE client_name=$1`, [client_name]);
}

async function getBookingByNumber(client_number){
    return await db.manyOrNone(`SELECT * FROM bookings WHERE phone_number=$1`, [client_number]);
}

export default {
    createBooking,
    getBookings,
    updateBookingStatus,
    getBookingByName,
    getBookingByNumber
}
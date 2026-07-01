-- The SERVICES table
CREATE TABLE services (
    service_id SERIAL PRIMARY KEY,
    service_name VARCHAR(100) NOT NULL,
    service_category VARCHAR(100) NOT NULL,
    description TEXT,
    duration_minutes INTEGER NOT NULL,
    price NUMERIC(10,2) NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT TRUE
);

-- The BOOKINGS table
CREATE TABLE bookings (
    booking_id SERIAL PRIMARY KEY,

    client_name VARCHAR(100) NOT NULL,

    phone_number VARCHAR(20) NOT NULL,

    service_id INTEGER NOT NULL,

    booking_date DATE NOT NULL,

    booking_time TIME NOT NULL,

    status VARCHAR(20) NOT NULL DEFAULT 'Pending',

    notes TEXT,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_booking_service
        FOREIGN KEY (service_id)
        REFERENCES services(service_id)
);

-- The ADMIN USERS table
CREATE TABLE admin_users (
    admin_id SERIAL PRIMARY KEY,

    full_name VARCHAR(100) NOT NULL,

    email VARCHAR(255) NOT NULL UNIQUE,

    password_hash TEXT NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- The PAYMENTS table
CREATE TABLE payments (
    payment_id SERIAL PRIMARY KEY,

    booking_id INTEGER NOT NULL,

    amount NUMERIC(10,2) NOT NULL,

    payment_method VARCHAR(50),

    payment_status VARCHAR(30) DEFAULT 'Pending',

    transaction_reference VARCHAR(255),

    paid_at TIMESTAMP,

    CONSTRAINT fk_payment_booking
        FOREIGN KEY (booking_id)
        REFERENCES bookings(booking_id)
);

-- The NOTIFICATIONS table 
CREATE TABLE notifications (
    notification_id SERIAL PRIMARY KEY,

    booking_id INTEGER NOT NULL,

    notification_type VARCHAR(20),

    recipient VARCHAR(100),

    message TEXT,

    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    status VARCHAR(20),

    CONSTRAINT fk_notification_booking
        FOREIGN KEY (booking_id)
        REFERENCES bookings(booking_id)
);
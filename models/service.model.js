import db from '../config/database.js';

export async function getServices() {

    return db.any(`
        SELECT *
        FROM services
        WHERE is_active = TRUE
        ORDER BY service_name
    `);

}
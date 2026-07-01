import db from '../config/database.js';

async function getServices() {

    return db.any(`
        SELECT * FROM services WHERE is_active = TRUE ORDER BY service_name
    `);

}

async function getPedicureServices () {
    return db.any(`
        SELECT * FROM services WHERE service_category='Pedicure'
    `);
}

async function getManicureServices () {
    return db.any(`
        SELECT * FROM services WHERE service_category='Manicure'
    `);
}

async function getExtraServices () {
    return db.any(`
        SELECT * FROM services WHERE service_category='Extra Services'
    `);
}

export default {
    getServices,
    getPedicureServices,
    getExtraServices,
    getManicureServices
}


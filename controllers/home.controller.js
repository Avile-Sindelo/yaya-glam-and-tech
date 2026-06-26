import * as ServiceService
from '../services/service.service.js';

export async function getHomePage(
    req,
    res
) {

    const services =
        await ServiceService.getServices();

    res.render(
        'home',
        {
            title: "Yaya's Glam and Tech",
            services
        }
    );

}

export async function getServicesPage(
    req,
    res
) {

    const services =
        await ServiceService.getServices();

    res.render(
        'services',
        {
            title: 'Our Services',
            services
        }
    );

}
import ServiceService from '../services/service.service.js';
import ServiceModel from '../models/service.model.js';

async function getHomePage(req, res) {

    const services = await ServiceService.getServices();

    res.render('home', { title: "Yaya's Glam and Tech", services}
    );

}

async function getServicesPage(req, res) {

    const pedicureServices = await ServiceModel.getPedicureServices();
    const manicureServices = await ServiceModel.getManicureServices();
    const extraServices = await ServiceModel.getExtraServices();
    

    res.render('services', { title: 'Our Services', extraServices, pedicureServices, manicureServices }
    );

}

export default {
    getHomePage,
    getServicesPage
}
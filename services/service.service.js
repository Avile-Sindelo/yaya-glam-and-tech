import ServiceModel from '../models/service.model.js';

async function getServices() {

    return ServiceModel.getServices();

}

export default {
    getServices
}
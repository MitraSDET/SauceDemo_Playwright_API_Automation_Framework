const ApiClient = require('../utils/ApiClient');
const testData = require('../data/testData.json');

class BookingService {

    constructor(request){
        this.apiClient = new ApiClient(request);
    }


    async createBooking(){

        return await this.apiClient.post(
            '/booking',
            testData.booking
        );

    }


    async getBooking(id){

        return await this.apiClient.get(
            `/booking/${id}`
        );

    }


    async updateBooking(id,payload,token){

        return await this.apiClient.put(
            `/booking/${id}`,
            payload,
            {
                headers:{
                    Cookie:`token=${token}`
                }
            }
        );
    }


    async patchBooking(id,payload,token){

        return await this.apiClient.patch(
            `/booking/${id}`,
            payload,
            {
                headers:{
                    Cookie:`token=${token}`
                }
            }
        );
    }


    async deleteBooking(id,token){

        return await this.apiClient.delete(
            `/booking/${id}`,
            {
                headers:{
                    Cookie:`token=${token}`
                }
            }
        );
    }

}


module.exports = BookingService;
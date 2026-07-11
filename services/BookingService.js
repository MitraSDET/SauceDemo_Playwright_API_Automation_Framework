class BookingService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    async createBooking(payload) {
        return this.apiClient.post('/booking', payload);
    }

    async getBooking(id) {
        return this.apiClient.get(`/booking/${id}`);
    }

    async updateBooking(id, payload, token) {
        return this.apiClient.put(
            `/booking/${id}`,
            payload,
            {
                headers: {
                    Cookie: `token=${token}`
                }
            }
        );
    }

    async patchBooking(id, payload, token) {
        return this.apiClient.patch(
            `/booking/${id}`,
            payload,
            {
                headers: {
                    Cookie: `token=${token}`
                }
            }
        );
    }

    async deleteBooking(id, token) {
        return this.apiClient.delete(
            `/booking/${id}`,
            {
                headers: {
                    Cookie: `token=${token}`
                }
            }
        );
    }
}

module.exports = BookingService;
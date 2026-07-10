const ApiConfig = require('../config/apiConfig');

class ApiClient {
    constructor(request) {
        this.request = request;
    }

    async post(endpoint, payload, options = {}) {
        return await this.request.post(
            `${ApiConfig.baseURL}${endpoint}`,
            {
                data: payload,
                headers: {
                    'Content-Type': 'application/json',
                    ...(options.headers || {})
                }
            }
        );
    }

    async get(endpoint, options = {}) {
        return await this.request.get(
            `${ApiConfig.baseURL}${endpoint}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    ...(options.headers || {})
                }
            }
        );
    }

    async put(endpoint, payload, options = {}) {
        return await this.request.put(
            `${ApiConfig.baseURL}${endpoint}`,
            {
                data: payload,
                headers: {
                    'Content-Type': 'application/json',
                    ...(options.headers || {})
                }
            }
        );
    }

    async patch(endpoint, payload, options = {}) {
        return await this.request.patch(
            `${ApiConfig.baseURL}${endpoint}`,
            {
                data: payload,
                headers: {
                    'Content-Type': 'application/json',
                    ...(options.headers || {})
                }
            }
        );
    }

    async delete(endpoint, options = {}) {
        return await this.request.delete(
            `${ApiConfig.baseURL}${endpoint}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    ...(options.headers || {})
                }
            }
        );
    }
}

module.exports = ApiClient;
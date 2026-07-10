const ApiConfig = require('../config/apiConfig');
const TokenManager = require('../utils/TokenManager');

class AuthService {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    async generateToken() {
        const response = await this.apiClient.post(
            ApiConfig.endpoints.AUTH,
            {
                username: ApiConfig.credentials.username,
                password: ApiConfig.credentials.password
            }
        );

        if (!response.ok()) {
            throw new Error(
                `Authentication failed. Status: ${response.status()} - ${await response.text()}`
            );
        }

        const body = await response.json();

        TokenManager.setToken(body.token);

        return body.token;
    }

    async getToken() {
        let token = TokenManager.getToken();

        if (!token) {
            token = await this.generateToken();
        }

        return token;
    }
}

module.exports = AuthService;
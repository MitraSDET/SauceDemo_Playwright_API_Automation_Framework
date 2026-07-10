let token = null;

class TokenManager {
    static setToken(value) {
        token = value;
    }

    static getToken() {
        return token;
    }
}

module.exports = TokenManager;
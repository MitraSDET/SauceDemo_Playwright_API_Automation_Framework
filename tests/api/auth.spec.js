const { test, expect } = require('@playwright/test');
const ApiClient = require('../../utils/ApiClient');
const AuthService = require('../../services/AuthService');

test.describe('Authentication API', () => {

    test('Generate authentication token', async ({ request }) => {

        const apiClient = new ApiClient(request);
        const authService = new AuthService(apiClient);
        

        const token = await authService.generateToken();

        expect(token).toBeTruthy();

    });

});
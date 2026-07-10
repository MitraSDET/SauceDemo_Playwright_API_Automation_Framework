const base = require('@playwright/test');

const { request } = require('@playwright/test');

const env = require('../config/env');

const ApiClient = require('../utils/ApiClient');

const AuthService = require('../services/AuthService');

const BookingService = require('../services/BookingService');

exports.test = base.test.extend({

    apiClient: async ({}, use) => {

        const requestContext = await request.newContext({

            baseURL: env.baseURL

        });

        const apiClient = new ApiClient(requestContext);

        await use(apiClient);

        await requestContext.dispose();

    },

    authService: async ({ apiClient }, use) => {

        const authService = new AuthService(apiClient);

        await authService.generateToken(

            env.username,

            env.password

        );

        await use(authService);

    },

    bookingService: async ({ apiClient, authService }, use) => {

        const bookingService = new BookingService(apiClient);

        await use(bookingService);

    }

});

exports.expect = base.expect;
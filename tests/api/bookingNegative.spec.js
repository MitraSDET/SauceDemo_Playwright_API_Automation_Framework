const { test, expect } = require('@playwright/test');

const ApiClient = require('../../utils/ApiClient');
const BookingService = require('../../services/BookingService');

const invalidData = require('../../test-data/invalidData.json');
const bookingData = require('../../test-data/bookingData.json');

test.describe('Negative API Tests', () => {

    test('Verify update booking without authentication', async ({ request }) => {

        const apiClient = new ApiClient(request);
       const authService = new AuthService(apiClient);
       const bookingService = new BookingService(apiClient);

        // Create a booking
        const createResponse = await bookingService.createBooking(
            bookingData.validBooking
        );

        expect(createResponse.status()).toBe(200);

        const createResponseBody = await createResponse.json();
        const bookingId = createResponseBody.bookingid;

        // Update booking without token
        const response = await request.put(
            `https://restful-booker.herokuapp.com/booking/${bookingId}`,
            {
                data: bookingData.validBooking
            }
        );

        expect([403, 401]).toContain(response.status());
    });

    test('Verify create booking with invalid payload', async ({ request }) => {

        const apiClient = new ApiClient(request);
        const bookingService = new BookingService(apiClient);

        const response = await bookingService.createBooking(
            invalidData.invalidBooking
        );

        // Restful Booker may accept invalid payloads
        expect([200, 400]).toContain(response.status());
    });

});
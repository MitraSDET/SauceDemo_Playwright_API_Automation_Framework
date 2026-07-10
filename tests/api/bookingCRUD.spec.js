const { test, expect } = require('@playwright/test');

const ApiClient = require('../../utils/ApiClient');
const AuthService = require('../../services/AuthService');
const BookingService = require('../../services/BookingService');
const bookingData = require('../../test-data/bookingData.json');

test.describe('Booking CRUD API', () => {

    test('Create booking and verify booking details', async ({ request }) => {

       const apiClient = new ApiClient(request);
       const authService = new AuthService(apiClient);
       const bookingService = new BookingService(apiClient);

        await authService.generateToken();

        const createResponse = await bookingService.createBooking(
            bookingData.validBooking
        );

        expect(createResponse.status()).toBe(200);

        const createBody = await createResponse.json();

        const bookingId = createBody.bookingid;

        const getResponse = await bookingService.getBooking(bookingId);

        expect(getResponse.status()).toBe(200);

        const booking = await getResponse.json();

        expect(booking.firstname).toBe(
            bookingData.validBooking.firstname
        );

        expect(booking.lastname).toBe(
            bookingData.validBooking.lastname
        );

        expect(booking.totalprice).toBe(
            bookingData.validBooking.totalprice
        );

        expect(booking.depositpaid).toBe(
            bookingData.validBooking.depositpaid
        );

        expect(booking.bookingdates.checkin).toBe(
            bookingData.validBooking.bookingdates.checkin
        );

        expect(booking.bookingdates.checkout).toBe(
            bookingData.validBooking.bookingdates.checkout
        );

        expect(booking.additionalneeds).toBe(
            bookingData.validBooking.additionalneeds
        );

    });

});
const { test, expect } = require('@playwright/test');

const AuthService = require('../../services/AuthService');
const BookingService = require('../../services/BookingService');

const ApiClient = require('../../utils/ApiClient');

const bookingData = require('../../test-data/bookingData.json');
const updateData = require('../../test-data/updateBooking.json');
const partialData = require('../../test-data/partialUpdate.json');


test.describe('Booking Lifecycle', () => {

    test('Create, Update, Patch and Delete Booking', async ({ request }) => {

        const apiClient = new ApiClient(request);
       const authService = new AuthService(apiClient);
       const bookingService = new BookingService(apiClient);

        const token = await authService.getToken();

        const createResponse = await bookingService.createBooking(
            bookingData.validBooking
        );

        const bookingId = (await createResponse.json()).bookingid;

        const putResponse = await bookingService.updateBooking(
            bookingId,
            token,
            updateData.updatedBooking
        );

        expect(putResponse.status()).toBe(200);

        const updatedBooking = await putResponse.json();

        expect(updatedBooking.firstname).toBe(
            updateData.updatedBooking.firstname
        );

        const patchResponse = await bookingService.partialUpdateBooking(
            bookingId,
            token,
            partialData.partialUpdate
        );

        expect(patchResponse.status()).toBe(200);

        const patchedBooking = await patchResponse.json();

        expect(patchedBooking.firstname).toBe(
            partialData.partialUpdate.firstname
        );

        expect(patchedBooking.additionalneeds).toBe(
            partialData.partialUpdate.additionalneeds
        );

        const deleteResponse = await bookingService.deleteBooking(
            bookingId,
            token
        );

        expect(deleteResponse.status()).toBe(201);

        const getResponse = await bookingService.getBooking(bookingId);

        expect(getResponse.status()).toBe(404);

    });

});
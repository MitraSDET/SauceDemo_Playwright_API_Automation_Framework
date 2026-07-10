class BookingPayload {

    static createBooking() {

        return {

            firstname: "John",

            lastname: "Smith",

            totalprice: 500,

            depositpaid: true,

            bookingdates: {

                checkin: "2026-07-20",

                checkout: "2026-07-30"

            },

            additionalneeds: "Breakfast"

        };

    }

}

module.exports = BookingPayload;
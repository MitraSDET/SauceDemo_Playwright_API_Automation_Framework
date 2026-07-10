class UpdatePayload {

    static updateBooking() {

        return {

            firstname: "David",

            lastname: "Warner",

            totalprice: 800,

            depositpaid: false,

            bookingdates: {

                checkin: "2026-08-01",

                checkout: "2026-08-10"

            },

            additionalneeds: "Dinner"

        };

    }

}

module.exports = UpdatePayload;
module.exports = {
    baseURL: 'https://restful-booker.herokuapp.com',

    endpoints: {
        AUTH: '/auth',
        BOOKING: '/booking',
        BOOKING_BY_ID: (id) => `/booking/${id}`
    },

    credentials: {
        username: 'admin',
        password: 'password123'
    }
};
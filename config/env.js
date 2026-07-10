const environments = {

    qa: {
        baseURL: "https://restful-booker.herokuapp.com",
        username: "admin",
        password: "password123"
    },

    uat: {
        baseURL: "https://restful-booker.herokuapp.com",
        username: "admin",
        password: "password123"
    }

};

const environment = process.env.TEST_ENV || "qa";

module.exports = environments[environment];
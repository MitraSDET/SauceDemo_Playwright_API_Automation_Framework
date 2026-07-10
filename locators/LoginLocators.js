//***I have kept login page locators inside this Folder ...***


class LoginLocators {

    static login = {
        username: '#user-name',
        password: '#password',
        loginButton: '#login-button',
        errorMessage: '[data-test="error"]'
    };

}

module.exports = LoginLocators;
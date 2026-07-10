class CommonUtils {

    static getCurrentDate() {
        return new Date().toLocaleDateString();
    }

    static getCurrentTime() {
        return new Date().toLocaleTimeString();
    }

    static getRandomNumber(max = 10000) {
        return Math.floor(Math.random() * max);
    }

    static generateRandomEmail() {
        return `user${this.getRandomNumber()}@gmail.com`;
    }

    static async wait(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

}

module.exports = CommonUtils;
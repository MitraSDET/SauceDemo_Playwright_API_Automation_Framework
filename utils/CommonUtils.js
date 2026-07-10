class CommonUtils {

    static getRandomNumber() {
        return Math.floor(Math.random() * 100000);
    }

    static getCurrentDate() {
        return new Date().toISOString().split('T')[0];
    }

    static addDays(days) {
        const date = new Date();
        date.setDate(date.getDate() + days);
        return date.toISOString().split('T')[0];
    }

}

module.exports = CommonUtils;
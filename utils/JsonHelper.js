const fs = require('fs');

class JsonHelper {

    static readJson(filePath) {
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }

    static writeJson(filePath, data) {
        fs.writeFileSync(
            filePath,
            JSON.stringify(data, null, 2)
        );
    }

}

module.exports = JsonHelper;
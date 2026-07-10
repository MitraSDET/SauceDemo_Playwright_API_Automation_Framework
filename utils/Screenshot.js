const path = require('path');
const fs = require('fs');

class Screenshot {

    static async capture(page, fileName) {

        const folder = path.join(process.cwd(), 'screenshots');

        if (!fs.existsSync(folder)) {
            fs.mkdirSync(folder);
        }

        await page.screenshot({
            path: `${folder}/${fileName}.png`,
            fullPage: true
        });

    }

}

module.exports = Screenshot;
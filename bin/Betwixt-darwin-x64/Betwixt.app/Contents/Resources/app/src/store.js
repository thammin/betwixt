const electron = require('electron');
const fs = require('fs');
const defaultCwd = (electron.app || electron.remote.app).getPath('userData');

const fileName = 'filter-url.txt';

module.exports = {
    set: input => {
        return fs.writeFileSync(`${defaultCwd}/${fileName}`, input, 'utf8');
    },
    get: () => {
        try {
            return fs.readFileSync(`${defaultCwd}/${fileName}`, 'utf8');
        } catch (e) {
            return '';
        }
    }
};

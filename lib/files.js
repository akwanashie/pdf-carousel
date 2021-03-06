const db = require('./db');
const appLogger = require('./logger');
const config = require('./config');

async function saveFileInfo(fileInfo) {
    return await db.none(`INSERT into files(filename, title, description, enabled)
        VALUES ($/filename/, $/title/, $/description/, $/enabled/)`, fileInfo);
}

async function storeFile(fileInfo) {
    appLogger.info(`Saving file ${fileInfo.filename}. To s3? ${config.s3.enabled}`);    
}

async function saveFile(fileInfo) {
    await storeFile(fileInfo)
    await saveFileInfo(fileInfo);
}

module.exports = { saveFile }

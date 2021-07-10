const db = require('./db');

async function saveFileInfo(fileInfo) {
    return await db.none(`INSERT into files(filename, title, description, enabled)
        VALUES ($/filename/, $/title/, $/description/, $/enabled/)`, fileInfo);
}

async function storeFile(fileInfo) {
    console.log(`Saving file ${fileInfo.filename}`);    
}

async function saveFile(fileInfo) {
    await storeFile(fileInfo)
    await saveFileInfo(fileInfo);
}

module.exports = { saveFile }

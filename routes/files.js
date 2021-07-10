const router = require('express').Router();
const multer  = require('multer')
const { saveFile } = require('../lib/files');
const config = require('../lib/config');

function getTemplateData(req) {
    return {
        title: 'Manage Files',
        subTitle: 'Create, manage and display PDF carousels',
        fullName: req.session.fullName,
        role: req.session.role
    };
}

const upload = multer({ dest: config.uploadDir });

router.get('/add-file', function(req, res) {
    res.render('files-form', getTemplateData(req));
});

router.post('/add-file', upload.single('file'), async function(req, res) {
    if (!!req.file) {
        const fileInfo = { ...req.body };
        fileInfo.filename = req.file.filename;
        fileInfo.path = req.file.path;
        await saveFile(fileInfo);
    }
    res.render('index', getTemplateData(req));
});

module.exports = router;

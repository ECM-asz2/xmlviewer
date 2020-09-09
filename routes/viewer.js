const express = require('express');
const authenticate = require('../modules/idp')();
// const configLoader = require('../global.config');

// let localConfig = {};

module.exports = (assetBasePath) => {
    const router = express.Router();
    router.use(authenticate);
    router.get('/', (req, res) => {
        // localConfig = configLoader.getLocalConfig(req.get('x-dv-tenant-id'));
        res.format({
            'text/html': () => {
                res.render('xmlviewer', {
                    title: 'XML Viewer',
                    stylesheet: `${assetBasePath}/global.css`,
                    script: `${assetBasePath}/viewer.js`,
                    body: '/../views/viewer.hbs',
                });
            },
            default: () => {
                res.status(406).send('Not Acceptable');
            },
        });
    });
    return router;
};

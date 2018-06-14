#!/usr/bin/env node

'use strict';

const readjson = require('readjson');
const writejson = require('writejson');

const configPath = './node_modules/cloudcmd/json/config.json';

updateJsonSync(configPath, {
    terminal: true,
    terminalPath: 'gritty',
});

function updateJsonSync(path, fields) {
    const config = readjson.sync(configPath);
    
    writejson.sync(configPath, {
        ...config,
        ...fields,
    });
}


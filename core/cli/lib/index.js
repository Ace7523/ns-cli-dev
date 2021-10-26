'use strict';

module.exports = core;

const semver = require('semver')
const colors = require('colors')
const log = require('@ns-cli-dev/log')

const pkg = require('../package.json')
const constant = require('./const')

function core() {
    try {
        checkPackageVersion()
        checkNodeVersion()
    } catch (e) {
        log.error(e.message)
    }
    
}

function checkNodeVersion() {
    const curVersion = process.version
    const lowestVersion = constant.LOWEST_NODE_VERSION
    console.log(process.version)
    console.log(constant.LOWEST_NODE_VERSION)
    if(!semver.gte(curVersion, lowestVersion)){
        throw new Error(colors.red(`需要node版本再${lowestVersion}以上`))
    }

}

function checkPackageVersion() {
    console.log(pkg.version)
    log.notice('cli版本为： ', pkg.version)
}

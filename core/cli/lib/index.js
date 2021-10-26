'use strict';

module.exports = core;

const pkg = require('../package.json')
const log = require('@ns-cli-dev/log')

function core() {
    console.log('lib/index core方法执行了')
    checkPackageVersion()
}

function checkPackageVersion() {
    console.log(pkg.version)
    log.notice('cli版本为： ', pkg.version)
}

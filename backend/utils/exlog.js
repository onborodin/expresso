
const path = require('path')
const fs = require('fs')
const util = require('util')
const exmkdir = require('exmkdir')

module.exports = function(logDir) {

    exmkdir(logDir)

    if (!exmkdir(logDir)) {
        console.log('Cannot write to log directory ' + logDir + '. Exit process.')
        process.exit(1)
    }

    var consoleLog = function(data) {
        var date = new Date().toISOString()
        const logFile = fs.createWriteStream(logDir + '/debug.log', {flags : 'a'})
        const logStdout = process.stdout
        logFile.write(date + ' ' + util.format(data) + '\n')
        logStdout.write(date + ' ' + util.format(data) + '\n')
    }

    return consoleLog
}

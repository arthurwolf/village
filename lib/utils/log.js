// Libraries 
const fs = require('fs');

// A general tool for logging to the console and to log files. 
module.exports = class Log {
    
    constructor() {
    }

    // Log a message
    log(message) {
        console.log(message);
    }

}
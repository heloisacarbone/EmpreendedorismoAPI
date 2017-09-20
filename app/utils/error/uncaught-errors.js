'use strict';

module.exports = function () {
    process.on('uncaughtException', (err) => {
        console.log({'uncaughtException': err});
    });
};

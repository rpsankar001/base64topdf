`use strict`

const fs = require('fs');

module.exports = {
        /**
         * @return (Buffer)
         * @param (string) File
         * @desc Function to encode file data to base64 encoded string
         */
        base64Encode : (file) => {
            // read binary data
            var bitmap = fs.readFileSync(file);
            // convert binary data to base64 encoded string
            return new Buffer(bitmap).toString('base64');
        },
        /**
         * @param (string) base64str
         * @param (string) file
         * @desc Function to create file from base64 encoded string
         */
        base64Decode : (base64str, file) => {
            // create buffer object from base64 encoded string, it is important to tell the constructor that the string is base64 encoded
            var bitmap = new Buffer(base64str, 'base64');
            // write buffer to file
            fs.writeFileSync(file, bitmap);
        }
};




# base64topdf
Here we are going to convert the base64 content to pdf and neither converts the pdf to base64

For importing this library
##Importing
```
const base64 = require('base64topdf');
```
## Encoding
If you wants to encode the pdf file to base64 means you can use this function to Encode it.
```
var s = base64.base64Encode('normal.pdf');
```
## Decoding
If you wants to decode the base64 string to pdf means you can use this function to Decode it
```
var y = base64.base64Decode('base64Str', 'PdfFileNameToWrite');
```
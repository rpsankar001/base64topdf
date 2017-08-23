# base64topdf
Here we are going to convert the base64 content to pdf and neither converts the pdf to base64.
Also we can convert rtfText to plain text and vise versa.

For importing this library
## Importing
```
const base64 = require('base64topdf');
```
## Encoding PDF to Base64
If you wants to encode the pdf file to base64 means you can use this function to Encode it.
```
let encodedPdf = base64.base64Encode('normal.pdf');
```
## Decoding Base64 to PDF
If you wants to decode the base64 string to pdf means you can use this function to Decode it
```
let decodedBase64 = base64.base64Decode('base64Str', 'PdfFileNameToWrite');
```
## Converting RTF to Plain Text
If you wants to convert the rtf format to plain text means you can use this function as mentioned below.
```
let plainText = base64.rtfToText('rtfStr');
```
## Converting PlainText to RTF
If you wants to convert the plain text into rtf format means you can use this function.
```
let rtfText = base64.textToRtf('textStr');
```
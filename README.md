# base64topdf
Here we are going to convert the base64 content to pdf and neither converts the pdf to base64.
Also we can convert rtfText to plain text and vise versa.



## Importing
```
const base64 = require('base64topdf');
```
## Using npm:
```
$ npm i -g npm
$ npm i --save base64topdf
```


## Why base64topdf?
    Its easy to use and we can convert the pdf as base64 content and vise versa.
    * We can convert RTF content to base64.
    * We can convert String to base64.
    * We can convert pdf to base64.
    * We can convert base64 to pdf.
    * We can convert base64 to string.
    * We can convert plain text to RTF.

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
## Converting String to Base64
If you wants to convert the String into base64 format means you can use this function.
```
let base64Str = base64.strToBase64('String');
```
## Converting Base64 to String
If you wants to convert the Base64 format to String means you can use this function.
```
let str = base64.base64ToStr('base64Str');
```
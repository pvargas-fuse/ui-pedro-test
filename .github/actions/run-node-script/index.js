const body = process.argv[2];

console.log('Hello, world!', {
  raw: body,
  body: body
    .replace(/\uFEFF/g, '') // BOM
    .replace(/\\r(\\n)?/g, ' - '), // CRLF -> LF
});

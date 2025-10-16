const body = process.argv[2];

console.log('Hello, world!', {
  raw: body,
  body: body.replace('\\r\\n', '\n'),
});

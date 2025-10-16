const body = process.argv[2];

console.log('Hello, world!', {
  raw: body,
  body: JSON.parse(body),
});

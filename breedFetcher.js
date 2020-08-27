const request = require('request');
const breed = process.argv[2];
const domain = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed;
request(domain, (error, response, body) => {
  if (error) {
    return console.log(error);
  }

  const data = JSON.parse(body);
  if (data.length === 0) {
    return console.log('The requested breed was not found.');
  }
  console.log(data[0].description);
});

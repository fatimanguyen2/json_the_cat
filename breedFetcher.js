const request = require('request');

const fetchBreedDescription = (breedName, cb) => {
  const domain = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  request(domain, (error, response, body) => {
    if (error) {
      cb(error, null);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        cb('The requested breed was not found', null);
      } else {
        cb(null, data[0].description);
      }
    }
  });
};

module.exports = {fetchBreedDescription};
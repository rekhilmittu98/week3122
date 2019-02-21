var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  var changed = true;
  res.render('index', { title: 'Express' });
});

/* GET About-Us page. */
router.get('/about-us', function(req, res, next) {
  res.render('about-us', {
    title: 'About Us',
    name: 'Chris Naismith',
    company: {
      name: 'Smash Reality',
      city: 'Collingwood'
    },
    age: 23,
    college: {
      program: 'COPA'
    },
    likes: ['Cats', 'Rocket League', 'React', 'Food']
  });
});

/* GET Contact-Us page. */
router.get('/contact-us', function(req, res, next) {
  res.render('contact-us', { title: 'Contact Us' });
});

/* GET Contact-Us page. */
router.post('/contact-us', function(request, response, next) {
  fs.writeFile('./submitted.txt', JSON.stringify(request.body), function(
    error
  ) {
    return response.render('contact-us', {
      failure: error,
      success: !error,
      title: 'Contact Us'
    });
  });
});

module.exports = router;

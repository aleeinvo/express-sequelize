var express = require('express');
var router = express.Router();

const { Sequelize } = require('sequelize');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/dev', function(req, res, next) {
  const sequelize = new Sequelize();

  try {
    sequelize.authenticate();

    res.json({
      status: 'good'
    });
  } catch(error) {
    res.json({
      status: error
    })
  }
})

module.exports = router;

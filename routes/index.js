var express = require('express');
var router = express.Router();
const classroomController = require('../controllers').classroom;

const { Sequelize } = require('sequelize');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/dev', function(req, res, next) {
  return res.send({
    message: 'Hello Dev!',
    data: {}
  });
});

router.get('/api/classrooms', classroomController.index);
router.get('/api/classrooms/:id', classroomController.show);
router.post('/api/classrooms', classroomController.store);
router.put('/api/classrooms/:id', classroomController.update);
router.delete('/api/classrooms/:id', classroomController.delete);

module.exports = router;

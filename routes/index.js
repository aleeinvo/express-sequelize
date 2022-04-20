var express = require('express');
var router = express.Router();
const classroomController = require('../controllers').classroom;
const dev = require('../controllers').dev;

const { Sequelize } = require('sequelize');

// router.use((req, res, next) => {
//   console.log('Router level global middleware');

//   next();
// })

/**
 * @api {get} /dev Request dev information
 * @apiName GetDev
 * @apiGroup Dev
 *
 * @apiSuccess {String} Message string and Data object.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.get('/dev', dev.index);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/classrooms', classroomController.index);
router.get('/api/classrooms/:id', classroomController.show);
router.post('/api/classrooms', classroomController.store);
router.put('/api/classrooms/:id', classroomController.update);
router.delete('/api/classrooms/:id', classroomController.delete);

module.exports = router;

const Classroom = require('../models').Classroom;
const Student = require('../models').Student;

module.exports = {
    index(req, res) {
        return Classroom
            .findAll({
                include: [
                    { model: Student, as: 'students' }
                ],
                order: [
                    ['createdAt', 'DESC'],
                    [{ model: Student, as: 'students' }, 'createdAt', 'DESC']
                ]
            }).then((classrooms) => {
                return res.status(200).send(classrooms)
            }).catch(error => {
                return res.status(400).send(error);
            })
    },

    show(req, res) {
        return Classroom
            .findByPk(req.params.id, {
                include: [
                    {
                        model: Student,
                        as: 'students'
                    }
                ]
            }).then(classroom => {
                if(!classroom) {
                    return res.status(404).send({
                        message: 'Classroom not found'
                    })
                }

                return res.status(200).send(classroom)
            })
            .catch(error => {
                return res.status(400).send(error);
            })
    },

    store(req, res) {
        if(!req.body.name) {
            return res.status(400).send({
                message: 'name is required'
            });
        }
        return Classroom
            .create({
                name: req.body.name
            }).then(classroom => {
                return res.status(201).json(classroom);
            }).catch(error => {
                return res.status(400).json(error);
            })
    },

    update(req, res) {
        if(!req.body.name) {
            return res.status(400).send({
                message: 'name is required'
            });
        }
        return Classroom
            .findByPk(req.params.id)
            .then(classroom => {
                if(!classroom) {
                    return res.status(404).send({
                        message: 'Classroom not found'
                    })
                }

                return classroom
                    .update({
                        name: req.body.name
                    })
                    .then(() => {
                        res.status(200).send(classroom);
                    })
                    .catch(error => {
                        return res.status(400).send(error);
                    })
            })
            .catch(error => {
                return res.status(400).send(error);
            })
    },

    delete(req, res) {
        return Classroom
            .findByPk(req.params.id)
            .then(classroom => {
                if(!classroom) {
                    return res.status(404).send({
                        message: 'Classroom not found'
                    })
                }

                return classroom
                    .destroy()
                    .then(() => {
                        res.status(204).send();
                    })
                    .catch(error => {
                        return res.status(400).send(error);
                    })
            })
            .catch(error => {
                return res.status(400).send(error);
            })
    }
}
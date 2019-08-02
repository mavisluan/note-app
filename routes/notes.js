const express = require('express');
const router = express.Router();
const {Note} = require('../models/note');
const {User} = require('../models/user');
const {authenticate} = require('../middleware/authenticate');
const _ = require('lodash');
const {ObjectID} = require('mongodb');

// CREATE
router.post('/', authenticate, async (req, res) => {
    const {title, description} = req.body;
    const note = new Note({
        title,
        description,
        _creator: req.user._id
    });

    try {
        const doc = await note.save();
        res.send(doc);
    } catch (e) {
        res.status(400).send(e);
    }
});


// GET ALL
router.get('/', authenticate, async (req, res) => {
    try {
        const notes = await Note.find({_creator: req.user._id});
        res.send({notes});
    } catch (e) {
        res.status(400).send(e);
    }
});


// GET ONE
router.get(`/:id`, authenticate, async (req, res) => {
    const {id} = req.params;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    try {
        const note = await Note.findOne({
            _id: id,
            _creator: req.user._id
        });

        if (!note) {
            return res.status(404).send();
        }
        res.send({note});
    } catch (e) {
        res.status(400).send();
    }
});


// UPDATE
router.patch('/:id', authenticate, async (req, res) => {
    const {id} = req.params;
    const body = _.pick(req.body, ['title', 'description']);

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    body.updatedAt = new Date().getTime();

    try {
        const note = await Note.findOneAndUpdate({
            _id: id,
            _creator: req.user._id
        }, {$set: body}, {new: true});

        if (!note) {
            return res.status(404).send();
        }
        res.send({note});
    } catch (e) {
        res.status(400).send(e);
    }
});


// TOGGLE DELETE
router.patch('/toggle/delete/:id', authenticate, async (req, res) => {
    const {id} = req.params;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    try {
        const note = await Note.findOne({
            _id: id,
            _creator: req.user._id
        });

        if (!note) {
            return res.status(404).send();
        }

        note.deleted = !note.deleted;
        await note.save();
        res.send({note});
    } catch (e) {
        res.status(400).send(e);
    }
});

// SHARE -- Add viewers
router.patch('/:id/viewers/:userEmail', authenticate, async (req, res) => {
    const {id, userEmail} = req.params;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    // req.body.updatedAt = new Date().getTime();

    try {
        const note = await Note.findOne({
            _id: id,
            _creator: req.user._id
        });

        if (!note) {
            return res.status(404).send();
        }

        const user = await User.findOne({
            email: userEmail,
        });

        if (!user) {
            return res.status(404).send();
        }
        note.updatedAt = new Date().getTime();
        note._viewers.push(user._id);
        await note.save();

        res.send({note});
    } catch (e) {
        res.status(400).send(e);
    }
});

module.exports = router;

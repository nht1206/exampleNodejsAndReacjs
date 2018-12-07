const router = require('express').Router();
const Notes = require('../models/Note');
router.post('/addnew', (req, res, next) => {
    let newNote = new Notes();
    newNote.title = req.body.title;
    newNote.content = req.body.content;
    newNote.save().then((result) => {
        res.json(result);
    });
    // Notes.find({}, (e, docs) => {
    //     res.json(docs);
    // })
});

router.post('/getnotes', (req, res) => {
    Notes.find({}, (e, docs) => {
        res.json(docs);
    })
});

router.put('/updatenote', (req, res) => {
    var { _id } = req.body;
    var { content } = req.body;
    var { title } = req.body;
    Notes.findOneAndUpdate({ _id: _id }, { _id: _id, title: title ,content: content }).then((res, err) => {
    });
});

router.post('/deletenote', (req, res) => {
    var { _id } = req.body;
    Notes.findByIdAndDelete(_id).then((res, err) => {
    });
});

module.exports = router;
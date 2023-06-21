const express = require('express');
const router = express.Router();
const { getData, updateData, createData, deleteData, getDataById } = require('../controllers/mainController.js');
// import multer
const multer = require('multer');

var upload = multer({dest:'./upload'});

// get method
router.get('/', getData);

// post method
router.post('/create', upload.array('documents'), createData);

// put method
router.put('/update/:id', upload.array('documents'), updateData);

// delete method
router.delete('/delete/:id', deleteData);

// Get single data
router.get('/:id', getDataById);

module.exports = router;
const express = require('express');
const router = express.Router();
const { getData, updateData, createData, deleteData, getDataById } = require('../controllers/mainController.js');

// get method
router.get('/', getData);

// post method
router.post('/create', createData);

// put method
router.put('/update/:id', updateData);

// delete method
router.delete('/delete/:id', deleteData);

// Get single data
router.get('/:id', getDataById);

module.exports = router;
const mongoose = require('mongoose');

const crudSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const CrudSchema = mongoose.model('Crud', crudSchema);

module.exports = CrudSchema;
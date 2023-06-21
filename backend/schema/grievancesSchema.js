const mongoose = require('mongoose');

const grievancesSchema = mongoose.Schema({
    parents_name: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    block: {
        type: String,
        required: true
    },
    cluster: {
        type: String,
        required: true
    },
    school_name: {
        type: String,
        required: true
    },
    student_name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    // schema for arrays of objects
    documents: {
        type: Array,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const GrievancesSchema = mongoose.model('grievances', grievancesSchema);

module.exports = GrievancesSchema;
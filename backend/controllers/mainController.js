const CrudSchema = require('../schema/crudSchema.js');

exports.getData = async (req, res) => {
    try {
        // find all data from database with particular attributes
        // sort data by date in descending order

        const data = await CrudSchema.find({},{'name':1,'date':1}).sort({date:-1});
        
        res.status(200).send({
            error: false,
            message: "",
            data: data
        });
    }
    catch (e) {
        res.status(404).send("Error : " + e.message);
    }
}

exports.createData = async (req, res) => {
    try {
        await CrudSchema.create(req.body);
        
        res.status(200).send({
            error: false,
            message: "Data added successfully.",
            data: null
        });
    }
    catch (e) {
        res.status(404).send("Error : " + e.message);
    }
}

exports.updateData = async (req, res) => {
    try {
        await CrudSchema.updateOne(
            { _id: req.params.id },
            { $set: req.body, date: Date.now() }
        );
        
        res.status(200).send({
            error: false,
            message: "Data Updated successfully.",
            data: null
        });
    }
    catch (e) {
        res.status(404).send("Error : " + e.message);
    }
}

exports.deleteData = async (req, res) => {
    try {
        await CrudSchema.deleteOne(
            { _id: req.params.id }
        );
        
        res.status(200).send({
            error: false,
            message: "Data deleted successfully.",
            data: null
        });
    }
    catch (e) {
        res.status(404).send("Error : " + e.message);
    }
}

exports.getDataById = async (req, res) => {
    try {
        const data = await CrudSchema.findById(req.params.id);
        
        res.status(200).send({
            error: false,
            message: "",
            data: data
        });
    }
    catch (e) {
        res.status(404).send("Error : " + e.message);
    }
}
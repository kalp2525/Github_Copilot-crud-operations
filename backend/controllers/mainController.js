const GrievancesSchema = require('../schema/grievancesSchema.js');
// import path module
const path = require('path');
// import fs module
const fs = require('fs');

exports.getData = async (req, res) => {
    try {

        const data = await GrievancesSchema.find({}).sort({ date: -1 });

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

        const uploadedFiles = req.files;

        var filesData = []

        uploadedFiles.forEach((file) => {
            const fileExtension = path.extname(file.originalname);

            const newFilename = file.filename + fileExtension;
            const newPath = path.join(file.destination, newFilename);

            fs.rename(file.path, newPath, (error) => {
                if (error) {
                    return res.status(500).send('Internal Server Error');
                }
            });
            filesData.push(newFilename)
        });

        const grievanceData = await GrievancesSchema.create(req.body);

        // update documents field with photo name in database
        await GrievancesSchema.updateOne(
            { _id: grievanceData._id.toString() },
            { $set: { documents: filesData } }
        )

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
        const data = await GrievancesSchema.findById(
            { _id: req.params.id },
        );

        // Delete file from upload folder
        const files = data.documents;

        files.forEach((file) => {
            const filePath = path.join('./upload', file);
            
            fs.unlink(filePath, (error) => {
                if (error) {
                    return res.status(500).send('Internal Server Error');
                }
            });
        });

        const uploadedFiles = req.files;

        var filesData = []

        uploadedFiles.forEach((file) => {
            const fileExtension = path.extname(file.originalname);

            const newFilename = file.filename + fileExtension;
            const newPath = path.join(file.destination, newFilename);

            fs.rename(file.path, newPath, (error) => {
                if (error) {
                    return res.status(500).send('Internal Server Error');
                }
            });
            filesData.push(newFilename)
        });

        await GrievancesSchema.updateOne({ _id: req.params.id }, req.body);

        // update documents field with photo name in database
        await GrievancesSchema.updateOne(
            { _id: req.params.id },
            { documents: filesData }
        )

        res.status(200).send({
            error: false,
            message: "Data updated successfully.",
            data: null
        });
    }
    catch (e) {
        res.status(404).send("Error : " + e.message);
    }
}

exports.deleteData = async (req, res) => {
    try {
        await GrievancesSchema.deleteOne(
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
        const data = await GrievancesSchema.findById(req.params.id);

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
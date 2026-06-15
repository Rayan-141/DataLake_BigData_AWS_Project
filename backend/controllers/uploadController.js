const { PutObjectCommand } = require("@aws-sdk/client-s3");
const fs = require("fs");
const s3 = require("../s3");
const db = require("../db/connection");
const logger = require("../logs/logger");

exports.uploadDataset = async (req, res) => {
    try {

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "No file uploaded"
            });
        }

        const command = new PutObjectCommand({
            Bucket: process.env.S3_BUCKET_NAME,
            Key: `datasets/${Date.now()}-${req.file.originalname}`,
            Body: fs.createReadStream(req.file.path)
        });

        console.log("Controller reached");
        console.log(req.file);

        await s3.send(command);

        logger.info(
            `Dataset Uploaded : ${req.file.originalname}`
        );

        await db.execute(
            `
      INSERT INTO uploaded_datasets
      (filename, s3_key, size_bytes)
      VALUES (?,?,?)
      `,
            [
                req.file.originalname,
                command.input.Key,
                req.file.size || 0
            ]
        );

        res.json({
            success: true,
            message: "Dataset uploaded to S3"
        });

    } catch (err) {

        logger.error(err.message);
        console.error(err);

        res.status(500).json({
            success: false,
            message: "Upload failed"
        });

    }
};
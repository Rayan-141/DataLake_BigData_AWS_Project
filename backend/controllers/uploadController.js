const { PutObjectCommand } = require("@aws-sdk/client-s3");
const fs = require("fs");
const s3 = require("../s3");

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

    await s3.send(command);

    res.json({
      success: true,
      message: "Dataset uploaded to S3"
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      success: false,
      message: "Upload failed"
    });

  }
};
const { S3Client, ListBucketsCommand } = require("@aws-sdk/client-s3");
require("dotenv").config();

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

async function testConnection() {
  try {
    const result = await s3.send(
      new ListBucketsCommand({})
    );

    console.log("Connected to AWS S3");
    console.log(result.Buckets);
  } catch (err) {
    console.error("Connection Failed");
    console.error(err);
  }
}

testConnection();

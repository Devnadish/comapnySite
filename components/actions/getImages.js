"use server";
import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

// Create an S3 client
const s3Client = new S3Client({
  region: process.env.GALLARY_BUCKET_REGION,
  credentials: {
    accessKeyId: process.env.S3AWS_ACCESS_KEY,
    secretAccessKey: process.env.S3AWS_SECRET_KEY,
  },
});

const awsUrl = "https://dreamtoapp-worksample.s3.eu-north-1.amazonaws.com/";

export async function getImages(prefix) {
  const params = {
    Bucket: process.env.GALLARY_BUCKET_NAME,
    Prefix: prefix,
  };

  try {
    const command = new ListObjectsV2Command(params);
    const { Contents = [] } = await s3Client.send(command);

    // Filter out invalid image keys and return full URLs
    const validUrls = Contents.filter(
      ({ Key }) => Key && !Key.endsWith("/")
    ).map(({ Key }) => `${awsUrl}${Key}`);

    console.log(validUrls);
    return validUrls;
  } catch (error) {
    console.error("Error fetching images:", error.message);
    throw new Error("Unable to fetch images. Please try again later.");
  }
}

"use server";
import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

// Create an S3 client
const s3Client = new S3Client({
  region: process.env.AWS_BUCKET_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  },
});

export async function getImages(Prefix) {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Prefix: Prefix,
    edits: {
      resize: {
        fit: "cover",
      },
      grayscale: true,
    },
  };

  try {
    const command = new ListObjectsV2Command(params);
    const data = await s3Client.send(command);

    // Check if data.Contents exists and filter out invalid images
    if (data.Contents) {
      return data.Contents.filter((image) => {
        const imageKey = image.Key;
        // Ensure the key is valid and does not end with '/'

        return imageKey && !imageKey.endsWith("/");
      });
    }

    // Return an empty array if no valid images are found
    return [];
  } catch (error) {
    console.error("Error fetching images:", error);
    throw new Error("Error fetching images");
  }
}

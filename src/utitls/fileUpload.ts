import { fromIni } from "@aws-sdk/credential-providers";
import { DeleteObjectsCommand, ObjectCannedACL, PutObjectCommand, S3Client, } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { env } from "../config/envConfig";




let credentials;

if (env.local &&env.local.profile) {
	credentials = fromIni({ profile: `${env.profile}`});
}
const s3Client = new S3Client({
	region:env.local.region,
	credentials
});

/**
 * delete the file from s3 bucket
 * @param filePath file path in the bucket
 * @returns true
 */
export const deleteFileFromS3 = async (item: string) => {
    try {
      if (!item || item.length === 0) {
        console.log("No item provided for deletion.");
        return;
      }
      let fileUrl:string;
      if (item.startsWith("http://") || item.startsWith("https://")) {
        fileUrl = item; 
      } else {
        fileUrl = `https://${env.bucket}.s3.amazonaws.com/${item}`;
      }
      const url = new URL(fileUrl);
      const pathname = url.pathname.substring(1); // Remove leading slash
  
      const params = {
        Bucket: env.local.bucket,
        Delete: {
          Objects: [
            {
              Key: pathname,
            },
          ],
        },
      };
      const command = new DeleteObjectsCommand(params);
      const data = await s3Client.send(command);
      console.log("Deleted image from bucket", data);
    } catch (err) {
      console.error("Error deleting file from S3", err);
    }
  };
  
  export const gettingPreSignedUrl = async (
    filePath: string,
    fileFormat: string
  ): Promise<string> => {
  
    const params = {
      Bucket: env.local.bucket,
      Key: filePath,
      ContentType: fileFormat,
      ACL: ObjectCannedACL.public_read,
    };
    try {
      const command = new PutObjectCommand(params);
      const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
      return url;
    } catch (error) {
      throw new Error(`Failed to get signed URL: ${error}`);
    }
  };
  
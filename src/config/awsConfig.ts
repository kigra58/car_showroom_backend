import {SecretsManager,} from "@aws-sdk/client-secrets-manager";
import { S3 } from "@aws-sdk/client-s3";
import { env } from "./envConfig";




let secretKeys: {[key:string]:string} | undefined;

export const getSecretKeys = async (
  isForceSync = false
): Promise<any> =>
  new Promise((resolve, reject) => {
    if (!secretKeys || isForceSync) {
      const client = new SecretsManager({
        region: env.local.region,
      });

      client.getSecretValue(
        {
          SecretId: env.local.secretManagerKey,
        },
        (err: Error, { SecretString }:any) => {
          if (err) {
            reject(err);
          } else {
            secretKeys = JSON.parse(SecretString||"{}");
            resolve(secretKeys);
          }
        }
      );
    } else {
      resolve(secretKeys);
    }
  });

export default {
	s3: new S3({ region: env.local.bucket }),
};

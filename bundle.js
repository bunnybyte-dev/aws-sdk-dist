import * as AmazonCognitoIdentity from "amazon-cognito-identity-js";
import { S3Client, ListObjectsCommand, GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";

const Aws = {
  S3Client,
  ListObjectsCommand,
  GetObjectCommand,
  PutObjectCommand,
  getSignedUrl,
  CognitoIdentityClient,
  fromCognitoIdentityPool,
};

if (typeof window !== "undefined") {
  window.AmazonCognitoIdentity = AmazonCognitoIdentity;
  window.Aws = Aws;
}
import { CognitoUserPool, CognitoUser, CognitoUserAttribute, AuthenticationDetails } from "amazon-cognito-identity-js";
import { S3Client, ListObjectsCommand, GetObjectCommand, GetObjectAttributesCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";

const Aws = {
  // authentication service requires
  CognitoUserPool,
  CognitoUser,
  CognitoUserAttribute,
  AuthenticationDetails,

  // asset service requires
  S3Client,
  ListObjectsCommand,
  GetObjectCommand,
  GetObjectAttributesCommand,
  PutObjectCommand,
  getSignedUrl,
  CognitoIdentityClient,
  fromCognitoIdentityPool,
};

if (typeof window !== 'undefined') {
  window.Aws = Aws;
}
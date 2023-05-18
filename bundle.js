import * as AmazonCognitoIdentity from "amazon-cognito-identity-js";
import { S3Client, ListObjectsCommand } from "@aws-sdk/client-s3";
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import {fromCognitoIdentityPool} from "@aws-sdk/credential-provider-cognito-identity";

const Aws = {
  S3Client,
  ListObjectsCommand,
  CognitoIdentityClient,
  fromCognitoIdentityPool,
};

if (typeof window !== "undefined") {
  window.AmazonCognitoIdentity = AmazonCognitoIdentity;
  window.Aws = Aws;
}
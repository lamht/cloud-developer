// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'gqessbj8m2'
//export const apiEndpoint = `https://d39019gtu04ve3.cloudfront.net/dev`
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'dev-xkdox7v8jiqc317u.us.auth0.com',            // Auth0 domain
  clientId: 'Mxp26N8nJUBkka4h0CHen6DKlMTTjbak',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
  //callbackUrl: 'http://serverless-todo-app-frontend-dev-9skd.s3-website-us-east-1.amazonaws.com/callback'
}

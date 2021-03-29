import * as contentful from "contentful";
export const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: '<space_id>',
  accessToken: '<access_token>'
});
// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.

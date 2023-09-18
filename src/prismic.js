import * as prismic from '@prismicio/client'

// Fill in your repository name
export const repositoryName = 'rkmedical'

export const client = prismic.createClient(repositoryName, {
  // If your repository is private, add an access token
  accessToken: '3bfc2fa55ec168c9c023a0f07eb95120',

  // This defines how you will structure URL paths in your project.
  // Update the types to match the custom types in your project, and edit
  // the paths to match the routing in your project.
  //
  // If you are not using a router in your project, you can change this
  // to an empty array or remove the option entirely.
  routes: [
    {
      type: 'home',
      path: '/',
    },
  ],
})
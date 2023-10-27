## Your assigment

Make a newspaper frontpage. We do not expect you to spend more than 4-5 hours making this assignment, and it is *not important* that you complete.
The assignment will be the basis of the 2. interview, where we discuss your thought processes and implementations.

Do not be discouraged if you do not manage to get very far, just try and show us what you can do.

If you struggle with the assignment, feel free to make it in another framework. Preferably a Javascript based framework.


## Getting Started

First install the NPM packages

```bash
npm install
```

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Content endpoints

### All Articles Endpoint

URL: http://localhost:3000/api/articles

Description: This endpoint provides a list of all available articles.

### Article by ID

URL: http://localhost:3000/api/articles?id=001

Description: Use this endpoint to retrieve a specific article by its unique ID.

### Images by image name
URL: http://localhost:3000/api/images?imagename=rubber_duck.jpg

Description: This endpoint allows you to access images by specifying the image name. Simply provide the image name as a parameter to retrieve the desired image.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

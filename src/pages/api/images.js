import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export default (req, res) => {
    // Get the image name from the query parameters
    const { imagename } = req.query;

    // Construct the path to the image
    const imagesFolderPath = path.resolve('src/pages/api/images'); // Replace with the correct absolute path

    // Construct the path to the image using the absolute path
    const imagePath = path.join(imagesFolderPath, imagename);


    try {
        // Read the image file
        const imageBuffer = fs.readFileSync(imagePath);

        const imageType = 'image/jpeg'; // Change this based on your image file types

        // Send the image as a response
        res.setHeader('Content-Type', imageType);
        res.end(imageBuffer);
    } catch (error) {
        // Handle errors, e.g., image not found
        res.status(404).send('Image not found');
    }
};

import express from 'express';
import path from 'path';
/**
 * a bunch of boilerplate to get __dirname working in ES6 modules
 */
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(__dirname + '/public'));






app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
})
import multer from 'multer'
import { resolve } from 'path';
import randomstring from 'randomstring'


const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${randomstring.generate()}-${file.originalname}`)
    }
});


export const upload = multer({storage: storageConfig})
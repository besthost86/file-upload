import multer from 'multer'
import { resolve } from 'path';
import randomBytes from 'randombytes'


const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, resolve('images'));
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${randomBytes(16)}-${file.originalname}`)
    }
});


export const upload = multer({storage: storageConfig})
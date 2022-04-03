import {Router}  from 'express'
import {upload} from '../utils/fileUpload.js'
const router  = Router();

router.get('/', (req, res)=>{
    res.render('../views/index');
});

router.get('/new-user', (req, res)=>{
    res.render('../views/new-user');
});

router.post('/profile',upload.single('image'), (req, res)=>{
    const uploadedFile = req.file
    console.log(uploadedFile);
    res.redirect('/')
});

 
export default router


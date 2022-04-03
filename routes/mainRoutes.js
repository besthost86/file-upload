import {Router}  from 'express'
import {upload} from '../utils/fileUpload.js'
import db from '../utils/mongodb.js'

const router  = Router();

router.get('/', (req, res)=>{
    res.render('../views/index');
});

router.get('/new-user', (req, res)=>{
    res.render('../views/new-user');
});

router.post('/profile',upload.single('image'), async (req, res)=>{
    const uploadedFile = req.file
    await db.collection('users').insertOne({
        name: req.body.username,
        imagePath: uploadedFile.path
    }); 
    res.redirect('/photo')
});

router.get('/photo', async (req, res) => {
    const users = await db.collection('users').find().toArray();
    users ? res.render('../views/profiles', {users: users}) : res.redirect('/');
})
 


export default router


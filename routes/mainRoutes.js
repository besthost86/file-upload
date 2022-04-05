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
 
router.get('/home', (req, res, next)=>{
   req.data = {
       author: 'Sebastian',
       text: 'Passed to the second middleware as expected'
   } 
    next()
});

router.get('/home', (req, res)=>{
    const { author, text} = req.data;
    res.render('../views/home', {data: {author, text}});
});

router.use((err, req, res, next) => {
    res.render('../views/error', {error: err});
  })

  export default router
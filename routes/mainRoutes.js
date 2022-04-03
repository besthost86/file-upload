import {Router}  from 'express'
const router  = Router();

router.get('/', (req, res)=>{
    res.render('../views/index');
});

router.get('/new-user', (req, res)=>{
    res.render('../views/new-user');
});

router.post('/profile', (req, res)=>{
    res.render('../views/new-user');
});

 
export default router


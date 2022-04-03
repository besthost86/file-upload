import 'dotenv/config'
import config, { app } from './utils/config.js'
import mainRoutes from './routes/mainRoutes.js'
import express from 'express'

app.use(express.static('public'));
app.use('/images',express.static('images'));
app.use(mainRoutes)
config();

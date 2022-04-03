import 'dotenv/config'
import app from './utils/config.js'
import mainRoutes from './routes/mainRoutes.js'
import {connection} from './utils/mongodb.js'

app.use(mainRoutes)
connection(app);

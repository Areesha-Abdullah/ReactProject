const express = require('express');
const cors = require('cors');
const projectRoutes = require('./routes/projectRoutes');
const logger = require('./middleware/logger');

const app = express()
const PORT = process.env.PORT || 5000;

//Middleware
app.use(cors())
app.use(express.json())
app.use(logger)

//routess
app.use('/api/projects', projectRoutes);



app.listen(PORT, ()=>{
    console.log(`The server is listening on port ${PORT}`)
})
import express from 'express';
import bodyParser  from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import blogRoutes from './routes/blogs.js';


// Initialize the express application
const app = express();

// Database Connection for Mongoose
const PORT =  5000;
const CONNECTION_URL = 'mongodb+srv://shuvo:shuvo7670@cluster0.iqc1nhp.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true,useUniFiedTopology: true })
        .then( () => app.listen( process.env.PORT, () => console.log(`Server is running on port ${PORT}`)))
        .catch(err => console.log(err));


// Configure the application to use body-parser
app.use(bodyParser.json({limit: '50mb',extended: true}));
app.use(bodyParser.urlencoded({limit: '50mb',extended: true}));
app.use(cors());


// Start Routes
app.get('/',(req,res) => {
    res.send('Welcome to Simple Mern Blog Projects API');
})
app.use('/blogs', blogRoutes);


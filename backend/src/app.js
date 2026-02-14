import express from 'express';
import router from './api/app.js';


const app = express();

app.use(express.json());

app.use('/api', router);

app.get('/', (req, res) => {
    res.status(200).json({
        status: "ok"
    });
});





export default app;
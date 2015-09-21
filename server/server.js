import express from 'express';
import api from './api/api';

let app = express();
app.use(express.static('dist'));
app.use('/api/v1', api);


let port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

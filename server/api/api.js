import Router from 'express';
var api = Router();

api.get('/helloworld', (req, res) => {
  res.send('Hello world!');
});

export default api;

import express from 'express'
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json({limit : "100kb"}));
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/mail', (req, res) => {
    console.log(req.body)
    res.send('Ready to mail2')
})

app.listen(3003, function () {
  console.log('Example app listening on port 3003!');
});
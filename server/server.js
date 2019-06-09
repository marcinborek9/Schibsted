import express from 'express';
import path from 'path';

let app = express();

app.get('/test', (req, res) => res.send('Express started!'));

app.use(express.static(path.join(__dirname, '/../dist')));
app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname + '/../dist/index.html'));
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

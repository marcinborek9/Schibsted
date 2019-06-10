const express = require('express');
const images = require('./routes/api/images');

const app = express();

app.use('/api/images', images);
app.use(express.static('dist'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

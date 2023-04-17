require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use('/api', routes);

app.use('/static', express.static('public'));

app.listen(process.env.PORT, () => {
	console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
});

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express();
const PORT = 1611;

const dbURI = 'mongodb://127.0.0.1:27017/rcc';
mongoose.connect(dbURI, { })
	.then(() => console.log('Connected to DB'))
	.catch(err => console.error('Database failed to connect:', err));
const quoteSchema = new mongoose.Schema({
	reference: String,
	title: String,
	body: String
});

//const Quote = mongoose.model('Quote', quoteSchema, 'thirtynine');

app.use(cors());
app.use(express.json());

app.get('/reformed', (req, res) => {
	const search = req.query.search;
	const colName = req.query.col;
	const Quote = mongoose.model('Quote', quoteSchema, colName);	
	if (search) {
		Quote.find({ body: { $regex: search, $options: 'i' } })
			.then(rcc => res.json(rcc))
			.catch(err => res.status(400).json('Error: ' + err));
	} else {
		Quote.find()
			.then(rcc => res.json(rcc))
			.catch(err => res.status(400).json('Error: ' + err));
	}
});
app.listen(PORT, () => {
	console.log(`ReformedAPI is running on port 1611.`);
});


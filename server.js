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

const confessionSchema = new mongoose.Schema({
    prettyName: String
}, { collection: 'confessions' }); 
const Confession = mongoose.model('Confession', confessionSchema);

app.use(cors());
app.use(express.json());

app.get('/cccapi', (req, res) => {
	const search = req.query.search;
	const colName = req.query.doc;
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

app.get('/cccapi/getcollections', async (req, res) => {
	try {
        const prettyNames = await Confession.find({}, 'name prettyname -_id'); // Select only the prettyName field, exclude _id
        res.json(prettyNames);
    } catch (error) {
        console.error("Failed to retrieve collections:", error);
        res.status(500).send("Failed to retrieve collections");
    }
});

app.get('/cccapi/getcollections', async (req, res) => {
	try {
        const prettyNames = await Confession.find({}, 'prettyname -_id'); // Select only the prettyName field, exclude _id
        res.json(prettyNames);
    } catch (error) {
        console.error("Failed to retrieve collections:", error);
        res.status(500).send("Failed to retrieve collections");
    }
});

app.listen(PORT, () => {
	console.log(`CCCAPI is running on port 1611.`);
});


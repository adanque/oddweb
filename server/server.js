// server/server.js   
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();   
const PORT = 5000;
app.use(cors());
app.use(bodyParser.json());
app.post('/api/chat', (req, res) => {
	const userMessage = req.body.message;
	//Here, you can add your logic to generate response
	const botResponse = `Bot: You said: "${userMessage}"`;
	res.json({ response: botResponse });
	});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
	});
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';


function App() {
   const [input, setInput] = useState('');
   const [responses, setResponses] = useState([]);

   const handleSend = async () => {
	   if (input) {
		   const result = await axios.post('http://localhost:5000/api/chat', { message: input });
		   setResponses([...responses, { user: input, bot: result.data.response }]);
		   setInput('');
	   }
   };
	
  return (
	<div className="App">
	  <header className="App-header">

		
			<div style={{ padding: '20px' }}>
		   <h1>Chatbot</h1>
		   <div style={{ border: '1px solid #ccc', padding: '10px', height: '300px', overflowY: 'scroll' }}>
			   {responses.map((res, index) => (
				   <div key={index}>
					   <strong>You:</strong> {res.user}<br />
					   <strong>{res.bot}</strong><br />
				   </div>
			   ))}
		   </div>
		   <input
			   type="text"
			   value={input}
			   onChange={(e) => setInput(e.target.value)}
			   placeholder="Type your message here..."
			   style={{ width: '100%', marginRight: '10px' }}
		   />
		   <button onClick={handleSend}>Send</button>
			</div>
		
		<img src={logo} className="App-logo" alt="logo" />
		<p>
		  Edit <code>src/App.js</code> and save to reload.
		</p>		
		
		<a
		  className="App-link"
		  href="https://reactjs.org"
		  target="_blank"
		  rel="noopener noreferrer"
		>
		  Learn React
		</a>
	  </header>
	</div>
  );
}

export default App;

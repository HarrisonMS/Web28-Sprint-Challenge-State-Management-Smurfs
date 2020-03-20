// import React, { useState } from 'react';
// import { connect } from 'react-redux'
// import { addSmurf } from '../actions'

// const AddSmurfForm =(props => {
// 	const [ fields, setFields ] = useState({
// 		name   : '',
// 		age    : '',
// 		height : '',
// 	});

// 	const handleChange = (event) => {
// 		setFields({
// 			...fields,
// 			[event.target.name]: event.target.value,
// 		});
// 	};

// 	const handleSubmit = (event) => {
// 		event.preventDefault();
// 		console.log(fields);
// 		props.addSmurf(fields);
// 		setFields({
// 			name   : '',
// 			age    : '',
// 			height : '',
// 		});
// 	};

// 	return (
// 		<div className='App'>
// 			<h1>SMURF VILLAGE</h1>
// 			<h2>Welcome to Smurf Village!</h2>
// 			<p>Meet some of our small blue peeps!</p>
// 			<form>
// 				<label>
// 					Add Smurfs to the Village:
// 					<input name='name' onChange={handleChange} type='text' value={fields.name} placeholder='Name' />
// 					<input name='age' onChange={handleChange} type='text' value={fields.age} placeholder='Age' />
// 					<input name='height' onChange={handleChange} type='text' value={fields.height} placeholder='Height' />
// 				</label>
// 				<button type='submit' onClick={handleSubmit}>
// 					Add a new Smurf!
// 				</button>
// 			</form>
// 			<SmurfPeople />
// 		</div>
// 	);
// }
// export default connect(null, { addSmurf })(App);
import '../App.css';
import React, { Component, useState } from 'react'
// import Form from 'react-bootstrap/lib/Form';
import DatePicker from "react-datepicker";
// import axios from 'axios'
import "react-datepicker/dist/react-datepicker.css";
 
class Reg_Form extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name:'',	
			tel:'',	
			WhatsApp:'',
			profession:'',
			email:'',
			state:'',
			city:'',
            workshop:'',
			age:'',
			// startdate:'',

		}
		this.handleChange = this.handleChange.bind(this);
	}
// e is a representative varible of this.state
changeHandler = e => {
	this.setState({ [e.target.name]: e.target.value })//json object key value pair
}

handleChange(date) {
	this.setState({
	startDate: date
	})
	}



submitHandler = e => {
	var user_obj;
	e.preventDefault()
	console.log(this.state)//line used to print on console
	// axios // used for post requests also works similar to promises
	// 	.post('https://yesplus-event-reg-backend.herokuapp.com/add_user', this.state) //data is the function name written for login in backend also this line helps to pass the data to backend server from frontend server
	// 	.then(response => { //this line helps use to rececive response from backend 
	// 		user_obj=response.data;
	// 		if(user_obj.status === 200){ //user_obj is the response rececived from the backend
	// 			this.props.history.push('/Tq')
	// 		}
	// 		else
	// 			alert('Please try registering again.');
	// 	})

    	.catch(error => {
			console.log(error)// if u find some error catch gets exceuted
		})
}


	render() {
		const { name,tel,WhatsApp,email,profession,workshop,age,city,state,date } = this.state
		

		return (
			<div className="yp_form">
				<form onSubmit={this.submitHandler}>
				<div>
					<center><h2>Register Here</h2></center>
					<label><b>Name:</b></label>
					<input
						type="text"
						name="name"
						placeholder="Enter your Name"
						value={name}
						onChange={this.changeHandler}
						required
					/>
				</div>
				<div>
					<label><b>Email ID:</b></label>
					<input
						type="email"
						name="email"
						placeholder="Enter your Email"
						value={email}
						onChange={this.changeHandler}
						required
					/>
				</div>
				<div>
					<label><b>Phone Number:</b></label>
					<input
						type="tel"
						name="tel"
						placeholder="Enter your Phone number"
						value={tel}
						onChange={this.changeHandler}
						required
					/>
				</div>

				<div>
					<label><b>WhatsApp Number:</b></label>
					<input
						type="tel"
						name="WhatsApp"
						placeholder="Enter your WhatsApp number"
						value={WhatsApp}
						onChange={this.changeHandler}
						
					/>
				</div>		
								
				<div>					
					<div>
						<label><b>State:</b></label>
						<select name="state" id="state" onChange={this.changeHandler}>
							<option value="select State">Select State</option>
							<option value="Andhra Pradesh">Andhra Pradesh </option>
							<option value="Arunachal Pradesh">Arunachal Pradesh </option>
							<option value="Assam">Assam </option>
							<option vlaue="Bihar">Bihar </option>
							<option value="Chattisgarh">Chhattisgarh </option>
							<option value="Goa">Goa </option>
							<option value="Gujarat">Gujarat </option>
							<option value="Haryana">Haryana </option>
							<option value="Himachal Pradesh">Himachal Pradesh </option>
							<option value="Jharkhand">Jharkhand</option> 
							<option value="Karnataka">Karnataka </option>
							<option value="Kerala">Kerala </option>
							<option value="Madhya Pradesh">Madhya Pradesh </option>
							<option vlaue="Maharashtra">Maharashtra </option>
							<option vlaue="Manipur">Manipur </option>
							<option vlaue="Meghalaya">Meghalaya </option>
							<option value="Mizoram">Mizoram </option>
							<option value="Nagaland">Nagaland </option>
							<option value="Odisha">Odisha </option>
							<option value="Punjab">Punjab </option>
							<option value="Rajasthan">Rajasthan </option>
							<option value="Sikkim">Sikkim </option>
							<option value="Tamil Nadu">Tamil Nadu </option>
							<option value="Telangana">Telangana </option> 
							<option value="Tripura">Tripura </option>
							<option value="Uttar Pradesh">Uttar Pradesh </option>
							<option value="Uttrakhand">Uttarakhand </option>
							<option value="West Bengal">West Bengal </option>
						</select>
					</div>

					<div>
						<label><b>City:</b></label>
						<input
							type="text"
							name="city"
							placeholder="Enter your City"
							value={city}
							onChange={this.changeHandler}
							required
						/>
					</div>
				</div>
				<div>
				
				<div>			
                   <label><b>Age group:</b></label><br/>
					<select name="age" id="workshop" onChange={this.changeHandler}>
						<option value="select the age group">Select the age group</option>
						<option value="18-25">18-25</option>
						<option value="26-30">26-30</option>
					</select>
				</div> 

				<div>
					<label ><b>Profession:</b></label><br/>
					<select name="profession" id="workshop" onChange={this.changeHandler}>
						<option value="select profession">Select profession</option>
						<option value="Student">Student</option>
						<option value="Working">Working</option>
						<option value="Others">Others</option>							
					</select>

				</div>
				<div>
					<label><b>The workshop you attended</b> </label><br/>					
					<select name="workshop" id="workshop" onChange={this.changeHandler}>
						<option value="select the workshop">Select the workshop</option>
						<option value="Yes!+">Yes!+</option>
						<option value="Happiness Program for Youth">Happiness Program for Youth</option>
						<option value="Happiness Program">Happiness Program</option>
						<option value="Online Meditation and Breath Workshop">Online Meditation and Breath Workshop</option>
						<option value="Online Happiness Program">Online Happiness Program</option>
					</select>
				</div>       

				<div>
				<label><b>When did you do the workshop</b> </label><br/>
				<DatePicker
					name="date"
					value={date}
					selected={ this.state.startDate }
					onChange={ this.handleChange }
					dateFormat="MM./yyyy"
					placeholderText="MM/yyyy"
					showMonthYearPicker
				/>
				</div>
					
				</div>
				<button type="submit" className="submit-button">Submit</button>
				
				</form>				
			</div>
		)
	}
}


export default Reg_Form
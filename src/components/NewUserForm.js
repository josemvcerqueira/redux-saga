import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class NewUserForm extends Component {
	state = {
		firstName: "",
		lastName: ""
	};

	handleFirstNameChange = event => {
		this.setState({
			firstName: event.target.value
		});
	};

	handleLastNameChange = event => {
		this.setState({
			lastName: event.target.value
		});
	};

	handleSubmit = event => {
		event.preventDefault();

		this.props.onSubmit({
			firstName: this.state.firstName,
			lastName: this.state.lastName
		});

		this.setState({
			firstName: "",
			lastName: ""
		});
	};

	render() {
		const { firstName, lastName } = this.state;
		return (
			<Form onSubmit={this.handleSubmit}>
				<FormGroup>
					<Label>First name</Label>
					<Input
						required
						placeholder="First name"
						onChange={this.handleFirstNameChange}
						value={firstName}
					/>
				</FormGroup>
				<FormGroup>
					<Label>Last name</Label>
					<Input
						required
						placeholder="Last name"
						onChange={this.handleLastNameChange}
						value={lastName}
					/>
				</FormGroup>
				<Button block outline type="submit" color="primary">
					Create
				</Button>
				<FormGroup />
			</Form>
		);
	}
}

export default NewUserForm;

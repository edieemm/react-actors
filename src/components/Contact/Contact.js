import React, { Component } from 'react';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            impresson: '',
        };

    }

    handleFirstName = (event) => {
        this.setState({
            ...this.state,
            firstName: event.target.value
        });
    }
    handleLastName = (event) => {
        this.setState({
            ...this.state,
            lastName: event.target.value
        });
    }
    handleImpression = (event) => {
        this.setState({
            ...this.state,
            impression: event.target.value
        });
    }



    render() {
        return (
            <div>
                <h2>Contact</h2>
                <input placeholder="First Name" onChange={this.handleFirstName} />
                <input placeholder="Last Name" onChange={this.handleLastName} />
                <input placeholder="Best Impression" onChange={this.handleImpression} />
                <button onClick = "handleClick">Join Us!</button>
                <p>{this.state.firstName} {this.state.lastName}'s best impression is {this.state.impression}</p>
                <p>Phone number: 908-765-4321</p>
                <p>Email: actors@reactactors.com</p>
            </div>
        );
    }
}

export default Contact;
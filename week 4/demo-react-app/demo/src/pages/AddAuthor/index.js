import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class AddAuthor extends React.Component {
    state = {
        name: "",
        country: "",
        age: 0
    }

    handleNameChange = event => {
        this.setState({ name: event.target.value });
    }

    handleCountryChange = event => {
        this.setState({ country: event.target.value });
    }
    
    handleAgeChange = event => {
        this.setState({ age: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        const { history } = this.props;
        const user = {
            name: this.state.name,
            country: this.state.country,
            age: this.state.age
        };
        console.log(user);
        axios.post(`http://localhost:8081/api/v1/author`, user)
        .then(res => {
            console.log(this.props);
            history.goBack();
        })
    }

  render() {
        return (
        <div className="container">
            <h1>Add Author</h1>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label for="name" >Name</label>
                    <input type="text" name="name" className="form-control" onChange={this.handleNameChange} />
                </div>
                <div className="form-group">
                    <label for="name" >Country</label>
                    <input type="text" name="name" className="form-control" onChange={this.handleCountryChange} />
                </div>
                <div className="form-group">
                    <label for="name">Age</label>
                    <input type="number" min="0" max="120" className="form-control" onChange={this.handleAgeChange}/>
                </div>
                <button type="submit" className="btn btn-success">Add</button>
            </form>
        </div>
    )
  }
}

export default AddAuthor;

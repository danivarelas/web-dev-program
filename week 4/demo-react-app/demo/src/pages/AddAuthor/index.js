import React from 'react';
import axios from 'axios';

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
        const author = {
            name: this.state.name,
            country: this.state.country,
            age: this.state.age
        };
        console.log(author);
        axios.post(`http://localhost:8081/api/v1/author`, author)
        .then(res => {
            console.log(res);
            history.goBack();
        })
    }

    handleBack = event => {
        event.preventDefault();
        this.props.history.goBack();
    }

    render() {
            return (
            <div className="container">
                <h1>Add Author</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name" >Name</label>
                        <input type="text" name="name" className="form-control" onChange={this.handleNameChange} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="country" >Country</label>
                        <input type="text" name="country" className="form-control" onChange={this.handleCountryChange} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age</label>
                        <input type="number" name="age" min="0" max="120" className="form-control" onChange={this.handleAgeChange} required/>
                    </div>
                    <div className="float-right">
                        <button type="submit" className="btn btn-success m-1">Add</button>
                        <button type="cancel" className="btn btn-danger m-1" onClick={this.handleBack}>Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddAuthor;

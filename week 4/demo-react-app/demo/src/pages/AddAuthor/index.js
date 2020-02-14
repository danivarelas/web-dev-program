import React, { useState } from 'react';
import axios from 'axios';
import FormSubmitButtons from '../../components/FormSubmitButtons';

function AddAuthor(props) {

    const [authorName, setAuthorName] = useState("");
    const [authorCountry, setAuthorCountry] = useState("");
    const [authorAge, setAuthorAge] = useState(0);

    const handleNameChange = event => {
        setAuthorName(event.target.value);
    }

    const handleCountryChange = event => {
        setAuthorCountry(event.target.value);
    }
    
    const handleAgeChange = event => {
        setAuthorAge(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        const { history } = props;
        const author = {
            name: authorName,
            country: authorCountry,
            age: authorAge
        };
        console.log(author);
        //axios.post(`http://localhost:8081/api/v1/author`, author)
        axios.post(`http://localhost:3001/authors`, author)
        .then(res => {
            console.log(res);
            history.goBack();
        })
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center my-2">Add Author</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name" >Name</label>
                    <input type="text" name="name" className="form-control" onChange={handleNameChange} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="country" >Country</label>
                    <input type="text" name="country" className="form-control" onChange={handleCountryChange} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input type="number" name="age" min="0" max="120" className="form-control" onChange={handleAgeChange} required/>
                </div>
                <FormSubmitButtons history={props.history}></FormSubmitButtons>
            </form>
        </div>
    )
}

export default AddAuthor;

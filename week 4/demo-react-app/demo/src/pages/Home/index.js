import React from 'react';
import axios from 'axios';
import Table from '../../components/Table';
import { Link } from 'react-router-dom';

class Home extends React.Component{

    state = {
        authors: []
    }

    componentDidMount() {
        axios.get("http://localhost:8081/api/v1/author")
            .then(res => {
                const authors = res.data;
                this.setState({ authors });
        })
    }
    render() {
        const headers = ['Name', 'Country', 'Age', 'Books']
        return (
            <div className="container  m-3 ">
                <h1 className="mx-auto">Authors List</h1>
                <Link className="btn btn-primary" to="/author">Add Author</Link>
                <Table headers={headers} rows={this.state.authors} emptyMessage="There are no authors available."></Table>
            </div>
        );
    }
}

export default Home;
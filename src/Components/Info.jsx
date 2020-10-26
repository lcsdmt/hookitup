import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Info = (props) => {

    const [users, setUser] = useState([]);

    const getUser = async () => {
        let res = await fetch('https://jsonplaceholder.typicode.com/users/' + props.match.params.id);
        let users = await res.json();

        setUser(users);
    }

    useEffect(() => {
        getUser();
    }, []);

    return (

        <div className="py-1">
            <p><Link to="/"><button className="btn btn-danger btn-outline-dark rounded-pill shadow">Back to Catalog</button></Link></p>
            <div className="card">
                <div className="card-body shadow">
                    <p className="body-text">ID: {users.id}</p>
                    <p className="body-text">name: {users.name}</p>
                    <p className="body-text">username: {users.username}</p>
                    <p className="body-text">email: {users.email}</p>
                    <p className="body-text">website: {users.website}</p>
                </div>
            </div>
        </div>
    )
}

export default Info;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Display = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    let users = await res.json();
    setUsers(users);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <section className="py-1">
      <h1 className="seeThrough jumbotron text-center text-uppercase font-weight-bold shadow-lg" style={{color:"black", textShadow: "2px 2px 4px white"}}><ins>JSON fake User Catalog</ins></h1>
      <div className="seeThrough">
        <div className="card-body shadow-lg">
          <ul className="list-group">
            {users.map(user => (
              <p key={user.id} className="shadow">
                <li className="list-group-item body-text"> <Link className="btn btn-info btn-outline-dark rounded-pill" to={`${user.id}/details`}>View Details for ID: {user.id}</Link></li>
                <li className="list-group-item body-text">{user.name}</li>
                <li className="list-group-item body-text">{user.username}</li>
                <li className="list-group-item body-text">{user.email}</li>
              </p>
            ))}
          </ul>
        </div>
      </div>
    </section>

  )

}

export default Display;
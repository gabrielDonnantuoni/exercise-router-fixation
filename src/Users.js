import React from 'react';

const Users = ({ greetings = 'Hi there', match: { params: { id } } }) => (
  <div>
    <h2> Users </h2>
    <p> { greetings }, { id }. This is my awesome Users component! </p>
  </div>
);

export default Users;
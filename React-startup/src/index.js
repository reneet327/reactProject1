import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  React.createElement('table', null,
    React.createElement('tr', null,
      React.createElement('th', null, 'First Name'),
      React.createElement('th', null, 'Last Name')),
    React.createElement('tr', null,
      React.createElement('td', null, 'Janet'),
      React.createElement('tr', null, 'James')),
    React.createElement('tr', null,
      React.createElement('td', null, 'John'),
      React.createElement('tr', null, 'Jameson'))


    )  ,document.getElementById('root')
);

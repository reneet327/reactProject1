import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  React.createElement('table', null,
    React.createElement('tr', null,
      React.createElement('th', null, 'First Name'),
      React.createElement('th', null, 'Last Name')),
    React.createElement('tr', null,
      React.createElement('td', null, 'Lisa'),
      React.createElement('tr', null, 'Jones')),
    React.createElement('tr', null,
      React.createElement('td', null, 'Bill'),
      React.createElement('tr', null, 'Jaffey'))


    )  ,document.getElementById('root')
);

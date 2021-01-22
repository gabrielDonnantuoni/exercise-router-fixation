import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';

class StrictAccess extends Component {
  componentDidMount() {
    console.log('Montou');
    console.log(this);
  }

  componentWillUnmount() {
    console.log('vai desmontar');
  }

  render() {
    const { user: { username, password } } = this.props;
    console.log('Renderizou');
    if (username === 'joao' && password === '1234') return (<p>Welcome joao</p>);
    alert('Access denied');
    return ( <Redirect to="/" /> );
  }
}

StrictAccess.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
};

export default StrictAccess;

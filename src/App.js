import React from 'react';
import PropTypes from 'prop-types';
import Stars from './components/Stars.js';
import './App.css';

function App() {
  return (
    <ul className="card-body-stars u-clearfix">
      <Stars count={4} />
    </ul>
  );
};

App.propTypes = {
  count: PropTypes.number
};

export default App;

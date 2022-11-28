import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star.js';

function Stars(props) {
    const {count} = props;

    if (count > 5 || count < 1 || typeof count !== "number") {
        return null;
    };

    let starsCount = [];

    function renderStars(arr) {
        for (let i = 0; i < count; i++) {
            arr.push(i)
        };
    };

    renderStars(starsCount);

    return (
        starsCount.map((el) => <li key={el} style={{listStyleType: "none"}}><Star /></li>)
    );
};

Stars.propTypes = {
    count: PropTypes.number
};

export default Stars;
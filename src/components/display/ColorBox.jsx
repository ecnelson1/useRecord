import React from 'react';
import PropTypes from 'prop-types';

const ColorBox = ({style}) => {
    return (
        <div style={style} aria-label="color-display">

        </div>
    );
};

ColorBox.propTypes = {
    style: PropTypes.shape({
        backgroundColor: PropTypes.string.isRequired,
        height: PropTypes.string.isRequired,
        width: PropTypes.string.isRequired,
    }).isRequired
};

export default ColorBox;

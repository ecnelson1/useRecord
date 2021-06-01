import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({currentColor, handleColorChange, handleUndo, handleRedo}) => {
    return (
    <div>
        <input 
        aria-label='color-select'
        type='color'
        value={currentColor}
        onChange={handleColorChange}/>
        <button
        aria-label='undo'
        onClick={handleUndo}>
            UNDO
        </button>

        <button
        aria-label='redo'
        onClick={handleRedo}
        >
            REDO
        </button>
        
    </div>
    );
};

Controls.propTypes = {
    currentColor: PropTypes.string.isRequired,
    handleColorChange: PropTypes.func.isRequired,
    handleUndo: PropTypes.func.isRequired,
    handleRedo: PropTypes.func.isRequired,
};

export default Controls;

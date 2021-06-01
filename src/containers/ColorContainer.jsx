import React from 'react';
import { useRecord } from '../hooks/useRecord';
import Controls from '../components/controls/Controls'
import ColorBox from '../components/display/ColorBox';

const ColorContainer = () => {
    const {currentColor, record, undo, redo} = useRecord('#32CD32');
    return(
        <div>
            <Controls
            currentColor={currentColor}
            handleColorChange={e => record(e.target.value)}
            handleUndo={undo} 
            handleRedo={redo}
            />

            <ColorBox
            style={{backgroundColor: currentColor, height:'10rem', width:'10rem' }}
            />

        </div>
    );
};

export default ColorContainer;

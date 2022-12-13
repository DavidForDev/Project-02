import React from 'react';
import './gridContainer.style.scss'

const GridContainer = ({children, width}) => {
    const style = {
        gridTemplateColumns: `repeat(auto-fill, minmax(${width ? width : '250px'}, 1fr))`
    }
    return ( 
        <div className='grid_container' style={style}>
            {children}
        </div>
    );
}
 
export default GridContainer;
import React from 'react';

// =========== Components ========== \\
import GridContainer from '../gridContainer/gridContainer';
import StepCard from '../stepCard/stepCard';

const WorkSection = ({data}) => {
    return ( 
        <GridContainer>
            {data.map((el, index) => {
                return (
                    <StepCard 
                    key={index}
                    title={el.name} 
                    step={el.step}
                    image={el.image}
                    />
                )
            })}
        </GridContainer>
    );
}
 
export default WorkSection;
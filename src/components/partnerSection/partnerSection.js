import React from 'react';

// =========== Components ========== \\
import GridContainer from '../gridContainer/gridContainer';
import PartnerCard from '../partnerCard/partnerCard';

const PartnerSection = ({data}) => {
    return ( 
        <GridContainer width='180px'>
            {data.map((el, index) => {
                const even = index % 2 !== 0
                return (
                    <PartnerCard
                    key={index}
                    title={el.title} 
                    frame={even} 
                    image={el.image} />
                )
            })}
        </GridContainer>
    );
}
 
export default PartnerSection;
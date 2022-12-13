import React from 'react';

// =========== Components ========== \\
import GridContainer from '../gridContainer/gridContainer';
import CollectionCard from '../collectionCard/collectionCard';

const CollectionSection = ({data}) => {
    return ( 
        <GridContainer>
            {data.map((el, index) => {
                return (
                    <CollectionCard 
                        key={index}
                        name={el.name}
                        image={el.image}
                    />
                )
            })}
        </GridContainer>
    );
}
 
export default CollectionSection;
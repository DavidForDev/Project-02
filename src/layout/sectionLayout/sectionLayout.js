import React from 'react';
import './sectionLayout.style.scss'

const SectionLayout = ({ title, titleAlign, children }) => {
    return ( 
        <section className='section_container'>
            {title && 
            <div className='section_header' style={{textAlign: titleAlign}}>
                <h2 className='font-uppercase' dangerouslySetInnerHTML={{__html: title}} />
            </div>}
            <div className='section_body'>
                {children}
            </div>
        </section>
    );
}
 
export default SectionLayout;
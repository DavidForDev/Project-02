import React, { useEffect, useRef } from 'react';
import './partnerCard.style.scss'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)

const PartnerCard = ({image, title, frame}) => {
    const partnerRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();
        
        tl.fromTo(partnerRef.current, {
            opacity: 0,
            y: 50,
        }, {
            y: 0,
            duration: 2,
            opacity: 1,
            scrollTrigger: {
                trigger: partnerRef.current
            }
        })

        return () => tl.kill()
    }, [])

    return ( 
        <div ref={partnerRef} className={`partner_card ${frame ? 'with_frame' : ''}`} title={title}>
            <img src={image} alt='partnerImg' />
        </div>
    );
}
 
export default PartnerCard;
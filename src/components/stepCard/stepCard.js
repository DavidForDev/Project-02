import React, { useEffect, useRef } from 'react';
import './stepCard.style.scss'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)

const StepCard = ({image, title, step}) => {
    const stepRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline();
        
        tl.fromTo(stepRef.current, {
            opacity: 0,
            y: 50,
        }, {
            y: 0,
            duration: 2,
            opacity: 1,
            scrollTrigger: {
                trigger: stepRef.current
            }
        })

        return () => tl.kill()
    }, [])

    return ( 
        <div ref={stepRef} id='stepSection' className='step_card card_frame flex gap-10 justify-start direction-column'>
            <img src={image} alt='stepImg' />
            <div className='card_title flex direction-column gap-10'>
                <h5 className='step'>{step}</h5>
                <h5>{title}</h5>
            </div>
        </div>
    );
}
 
export default StepCard;
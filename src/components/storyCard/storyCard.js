import React, { useEffect, useRef } from 'react';
import './storyCard.style.scss'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)

const StoryCard = ({ name, description, id }) => {
    const storyRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(storyRef.current, {
            opacity: 0
        }, {
            duration: 2,
            opacity: 1,
            scrollTrigger: {
                trigger: storyRef.current
            }
        })

        return () => tl.kill();
    }, [])

    return ( 
        <div className='story_card text-center' ref={storyRef}>
            <div className='story_detail text-center gap-10 flex align-items-center direction-column'>
                <span className='list_number'>0{id}</span>
                <h5>{name}</h5>
                <p>{description}</p>
            </div>
        </div>
    );
}
 
export default StoryCard;
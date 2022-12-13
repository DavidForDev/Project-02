import React, { useEffect, useRef } from 'react';
import './collectionCard.style.scss'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)

const CollectionCard = ({ image, name }) => {
    const collectionRef = useRef(null)


    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(collectionRef.current, {
            y: 80, 
            opacity: 0,
            onComplete() {
                ScrollTrigger.refresh(true);
            }
        } ,{ 
            y: 0,
            opacity: 1,
            duration: 2,
            scrollTrigger: {
                trigger: collectionRef.current
            },
            onComplete() {
                ScrollTrigger.refresh(true);
            }
        })

        return () => tl.kill();
    }, [])

    return ( 
        <div className='collection_card card_frame' ref={collectionRef}>
            <img src={image} alt='collImage' />
            <h4 className='font-uppercase'>{name}</h4>
        </div>
    );
}
 
export default CollectionCard;
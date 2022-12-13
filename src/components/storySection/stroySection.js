import React, { useRef, useEffect } from 'react';
import './storySection.style.scss'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

// =========== Components ========== \\
import GridContainer from '../gridContainer/gridContainer';
import StoryCard from '../storyCard/storyCard'

gsap.registerPlugin(ScrollTrigger)

const StorySection = ({data}) => {
    const storyRef = useRef(null)
    const h3 = useRef(null);
    const p = useRef(null)
    const analytics = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(h3.current, {
            opacity: 0
        }, {
            duration: 1,
            opacity: 1,
            scrollTrigger: {
                trigger: storyRef.current
            }
        }).fromTo(p.current, {opacity: 0} ,{
            duration: 1,
            opacity: 1,
            scrollTrigger: {
                trigger: storyRef.current
            }
        }).fromTo(analytics.current, {opacity: 0}, {
            duration: 1,
            opacity: 1,
            scrollTrigger: {
                trigger: storyRef.current
            }
        })

        return () => tl.kill();
    }, [])

    return ( 
        <div ref={storyRef} className='story_container flex flex-wrap justify-between align-items-center'>
            <div className='story_about flex direction-column gap-30'>
                <div className='flex direction-column gap-15'>
                    <h3 ref={h3} className='font-uppercase'>the story</h3>
                    <p ref={p}>Our collection's priority is to reward NFT holders by developing utilities they can use in their current everyday life. Not in a hypothetical future.</p>
                </div>
                <div className='analytics_container flex flex-wrap'>
                    <div ref={analytics} className='flex justify-center gap-15 align-items-center direction-column'>
                        <h5>Total Item</h5>
                        <span>2240+</span>
                    </div>
                    <div ref={analytics} className='flex justify-center gap-15 align-items-center direction-column'>
                        <h5>Profiles whitelisted</h5>
                        <span>1000+</span>
                    </div>
                </div>
            </div>
            <div className='story_cards'>
                <GridContainer width='230px'>
                    {data.map((el, index) => {
                        return (
                            <StoryCard 
                            key={index}
                            name={el.name} 
                            description={el.description}
                            id={el.id}
                            />
                        )
                    })}
                </GridContainer>
            </div>
        </div>
    );
}
 
export default StorySection;
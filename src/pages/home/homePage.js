import React, { useEffect, useRef } from 'react';
import './homePage.style.scss'
import gsap from 'gsap'

// =========== Components ========== \\
import StorySection from '../../components/storySection/stroySection';
import CollectionSection from '../../components/collectionSection/collectionSection';
import WorkSection from '../../components/workSection/workSection';
import PartnerSection from '../../components/partnerSection/partnerSection';

// =========== Images ========== \\
import banner from '../../assets/images/banner.png'

// =========== layout ========== \\
import SectionLayout from '../../layout/sectionLayout/sectionLayout';

// =========== layout ========== \\
import { dataBase } from '../../lib/dataBase';

const HomePage = () => {
    const homeTitle = useRef(null)
    const h1 = useRef(null)
    const p = useRef(null)
    const tool = useRef(null)
    
    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(tool.current, {opacity: 0}, {duration: 1, opacity: 1})
          .from(h1.current, {opacity: 0})
          .to(h1.current, {duration: 0.5, opacity: 1})
          .from(p.current, {opacity: 0})
          .to(p.current, {duration: 0.5, opacity: 1})
          

        return () => tl.kill();
    }, [])

    return ( 
        <div className='home_page'>
            <div className='banner_container'>
                <div className='banner_image'>
                    <img src={banner} alt='banner' />
                    <div className='shadow'></div>
                </div>
                <div ref={homeTitle} className='banner_title flex gap-15 text-center direction-column justify-center align-items-center'>
                    <h1 ref={h1} className='font-uppercase'>EXPLORE NFT COLLECTION</h1>
                    <p ref={p}>A collection of 2525 highly-fashionable NFTs on the ETH Blockchain. Unique, 
                    metaverse-ready, and designed to benefit their holders.</p>
                    <div ref={tool} className='tool flex align-items-center gap-25 justify-center'>
                        <button className='secondary_button'>
                            connect wallet
                        </button>
                        <button className='secondary_button out_border'>
                            whitelist now
                        </button>
                    </div>
                </div>
            </div>
            <div className='sections_container container'>
                <SectionLayout titleAlign='center' title='how to <span>nftalien</span> work'>
                    <WorkSection data={dataBase.work}/>
                </SectionLayout>
                <SectionLayout title='hot collection'>
                    <CollectionSection data={dataBase.collection}/>
                </SectionLayout>
                <SectionLayout>
                    <StorySection data={dataBase.story}/>
                </SectionLayout>
                <SectionLayout titleAlign='center' title='<span>binabox</span> partner'>
                    <PartnerSection data={dataBase.partner}/>
                </SectionLayout>
            </div>
        </div>
    );
}
 
export default HomePage;
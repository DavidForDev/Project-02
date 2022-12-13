import React, { useState, useRef, useEffect } from 'react';
import './navigation.style.scss'
import gsap from 'gsap'

// =========== Logo ========== \\
import Logo from '../../assets/images/logo.png'

// =========== Icons ========== \\
import DiscordSvg from '../../assets/icons/discord';
import WalletSvg from '../../assets/icons/wallet'
import SunSvg from '../../assets/icons/sun'
import ArrowSvg from '../../assets/icons/arrow'

// =========== navMobile ========== \\
import NavMobile from './mobile/navMobile';

// =========== navDesktop ========== \\
import NavDesktop from './desktop/navDesktop';

const Navigation = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const navRef = useRef(null)
  
    useEffect(() => {
        const tl = gsap.timeline()
        
        tl.fromTo(navRef.current, {opacity: 0}, {duration: 2, opacity: 1})

        return () => tl.kill();
    }, [])

    const navList = [
        {
            name: 'home',
            dropdown: [
                {
                    name: 'home'
                },{
                    name: 'home1'
                },{
                    name: 'home2'
                }
            ]
        },{
            name: 'about',
            dropdown: [
                {
                    name: 'about'
                },{
                    name: 'about1'
                },{
                    name: 'about3'
                },{
                    name: 'about4'
                }
            ]
        },{
            name: 'roadmap',
            dropdown: [
                {
                    name: 'roadmap'
                },{
                    name: 'roadmap1'
                }
            ]
        },{
            name: 'collection'
        },{
            name: 'faqs',
            dropdown: [
                {
                    name: 'faqs'
                },{
                    name: 'faqs1'
                }
            ]
        },
    ]

    return ( 
        <div className='nav flex flex-wrap' ref={navRef}>
            <div className='container flex justify-between align-items-center'>
                {screenWidth > 900 ? 
                <NavDesktop 
                navList={navList} 
                DiscordSvg={DiscordSvg} 
                WalletSvg={WalletSvg}
                SunSvg={SunSvg}
                ArrowSvg={ArrowSvg}
                Logo={Logo}
                /> : 
                <NavMobile 
                navList={navList} 
                DiscordSvg={DiscordSvg} 
                WalletSvg={WalletSvg}
                SunSvg={SunSvg}
                ArrowSvg={ArrowSvg}
                Logo={Logo}
                />}
            </div>
        </div>
    );
}
 
export default Navigation;
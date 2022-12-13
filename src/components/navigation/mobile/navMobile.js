import React, { useRef, useState } from 'react';
import './navMobile.style.scss'

const NavMobile = ({
    navList,
    DiscordSvg,
    WalletSvg,
    SunSvg,
    ArrowSvg,
    Logo,
}) => {
    const [dropName, setDropName] = useState(null)
    const [openNav, setOpenNav] = useState({
        width: '0px'
    })
    const filterDrop = navList.find(x => x.name === dropName)
    const navRef = useRef();

    const openNavHandl = () => {
        setOpenNav({
            width: '100%'
        })
    }

    const closeNavHandl = () => {
        setOpenNav({
            width: '0%'
        })
    }

    const switchDrop = (arg) => {
        if(arg !== dropName) return setDropName(arg)

        setDropName(null)
    }
    

    return ( 
        <>
            <div className='burger' onClick={openNavHandl}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='logo flex align-items-center gap-15'>
                <img src={Logo} alt='logo' />
                <h4 className='font-uppercase'>ntfalien</h4>
            </div>
            <ul 
            className='nav-ul-mobile justify-center flex direction-column gap-30 align-items-center'
            ref={navRef}
            style={openNav}
            >
            <span className='closer' onClick={closeNavHandl}>&times;</span>
                {navList.map((el, index) => {
                    return (
                   <>
                         <li 
                        key={index}
                        className='ul-li flex align-items-center gap-15 font-uppercase'
                        onClick={() => switchDrop(el.name)}
                        >
                            {el.name}
                            {el.dropdown ? <ArrowSvg /> : ''}
                        </li>
                        <div className='dropdown_container' style={{display: dropName === el.name ? 'block' : 'none', position: 'unset'}}>
                            <div className='container text-center'>
                                <ul className='drop-ul flex gap-20 direction-column'>
                                    {filterDrop?.dropdown.map((el, index) => {
                                        return (
                                            <li className='drop-li' key={index}>{el.name}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                   </>
                    )
                })}
                <div className='flex direction-column  align-items-center gap-20'>
                    <button className='primary_button'>
                        <DiscordSvg />
                        discord
                    </button>
                    <button className='secondary_button'>
                        <WalletSvg />
                        conntect
                    </button>
                </div>
            </ul>
        </>
    );
}
 
export default NavMobile;
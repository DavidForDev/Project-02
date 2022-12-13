import React, { useRef, useState } from 'react';

const NavDesktop = ({
    navList,
    DiscordSvg,
    WalletSvg,
    SunSvg,
    ArrowSvg,
    Logo,
}) => {
    const [dropName, setDropName] = useState(null)
    const filterDrop = navList.find(x => x.name === dropName)

    const openDrop = (arg) => {
        if(arg !== dropName) return setDropName(arg)

        setDropName(null)
    }


    return ( 
        <>
            <div className='logo flex align-items-center gap-15'>
                <img src={Logo} alt='logo' />
                <h4 className='font-uppercase'>ntfalien</h4>
            </div>
            <ul className='nav-ul flex flex-wrap gap-30 align-items-center'>
                {navList.map((el, index) => {
                    return (
                        <li 
                        key={index}
                        className='ul-li flex align-items-center gap-15 font-uppercase' 
                        onClick={() => el.dropdown ? openDrop(el.name) : ''}
                        >
                            {el.name}
                            {el.dropdown ? <ArrowSvg /> : ''}
                        </li>
                    )
                })}
            </ul>
            <div className='dropdown_container' style={{display: dropName ? 'block' : 'none'}}>
                <div className='container'>
                    <ul className='drop-ul flex gap-20'>
                        {filterDrop?.dropdown.map((el, index) => {
                            return (
                                <li className='drop-li' key={index}>{el.name}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className='flex align-items-center gap-20'>
                <button className='primary_button'>
                    <DiscordSvg />
                    discord
                </button>
                <button className='secondary_button'>
                    <WalletSvg />
                    conntect
                </button>
            </div>
        </>
    );
}
 
export default NavDesktop;
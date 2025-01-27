import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

function Navbar() {
    const location = useLocation();

    return (
        <>
            <div className='absolute top-0 w-full z-20 bg-transparent'>
                <div className='grid grid-flow-col text-center mx-[400px] text-custom font-bold py-3 text-sm'>
                    <NavLink to="/">

                        <div className="flex flex-col items-center">
                            <div>gameX</div>
                            <div className={`w-1 h-1 bg-custom rounded-full mt-[-2px] transition-opacity 
                ${location.pathname === '/' ? 'opacity-100' : 'opacity-0'}`}></div>
                        </div>

                    </NavLink>

                    <NavLink to="/shooter">
                        <div className="flex flex-col items-center">
                            <div>Shooter</div>
                            <div className={`w-1 h-1 bg-custom rounded-full mt-[-2px] transition-opacity
                            ${location.pathname === '/shooter' ? 'opacity-100' : 'opacity-0'
                                }`}></div>
                        </div>
                    </NavLink>

                    <NavLink to="/Strategy">
                        <div className="flex flex-col items-center">
                            <div>Strategy</div>
                            <div className={`w-1 h-1 bg-custom rounded-full mt-[-2px] transition-opacity
                            ${location.pathname === '/Strategy' ? 'opacity-100' : 'opacity-0'
                                }`}></div>
                        </div>
                    </NavLink>


                    <NavLink to="/Sci-Fi">

                        <div className="flex flex-col items-center">
                            <div>Sci-Fi</div>
                            <div className={`w-1 h-1 bg-custom rounded-full mt-[-2px] transition-opacity
                            ${location.pathname === '/Sci-Fi' ? 'opacity-100' : 'opacity-0'
                                }`}></div>
                        </div>
                    </NavLink>

                    <NavLink to="/Sports">
                        <div className="flex flex-col items-center">
                            <div>Sports</div>
                            <div className={`w-1 h-1 bg-custom rounded-full mt-[-2px] transition-opacity
                            ${location.pathname === '/Sports' ? 'opacity-100' : 'opacity-0'
                                }`}></div>
                        </div>
                    </NavLink>

                    <NavLink to="/Anime">
                        <div className="flex flex-col items-center">
                            <div>Anime</div>
                            <div className={`w-1 h-1 bg-custom rounded-full mt-[-2px] transition-opacity
                            ${location.pathname === '/Anime' ? 'opacity-100' : 'opacity-0'
                                }`}></div>
                        </div>
                    </NavLink>

                    <NavLink to="/Horror">
                        <div className="flex flex-col items-center">
                            <div>Horror</div>
                            <div className={`w-1 h-1 bg-custom rounded-full mt-[-2px] transition-opacity
                            ${location.pathname === '/Horror' ? 'opacity-100' : 'opacity-0'
                                }`}></div>
                        </div>
                    </NavLink>

                </div>
            </div>
        </>
    )
}

export default Navbar

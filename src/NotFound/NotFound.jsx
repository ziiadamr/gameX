import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className="min-h-screen bg-[#1A1A1A] flex items-center justify-center px-4">
            <div className="text-center">
                {/* Glitch Effect */}
                <div className="relative mb-8">
                    <h1 className="text-[150px] font-extrabold text-[#FBF9F6] 
                                 animate-pulse leading-none">
                        404
                    </h1>
                </div>

                <div className="space-y-4 mb-4">
                    <h2 className="text-3xl font-bold text-[#FBF9F6]">
                    Game Over! Page Not Found
                    </h2>
                    <p className="text-[#B4B4B4] text-lg max-w-xl mx-auto">
                    Looks like you've ventured into uncharted territory.<br/> 
                    This level doesn't exist in our gameX world.
                    </p>
                </div>

                <div className="space-y-4">
                    <Link 
                        to="/" 
                        className="inline-block text-[#FBF9F6] text-lg font-bold
                                 hover:text-[#B4B4B4] transition-all duration-300
                                 transform hover:translate-x-2"
                    >
                        → Return to gameX
                    </Link>
                    <p className="text-[#B4B4B4] text-sm ">
                        Need help? Visit our{' '}
                        <Link 
                            to="/games" 
                            className="text-[#FBF9F6] hover:text-[#B4B4B4] 
                                      transition-colors duration-300"
                        >
                            games collection
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NotFound
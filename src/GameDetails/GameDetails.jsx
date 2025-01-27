import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import Loading from '../Loading/Loading'
import NotFound from '../NotFound/NotFound'
import { Helmet } from 'react-helmet'

function GameDetails() {
    const { id } = useParams() // للحصول على ID من URL
    const [game, setGame] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const options = {
            method: 'GET',
            url: `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
            params: { id: id },
            headers: {
		    'x-rapidapi-key': 'f9ea172ee3mshf0037570413e34bp14c0e8jsn6eb6c5e3c505',
		    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        axios.request(options)
            .then(response => {
                setGame(response.data)
                setLoading(false)
                console.log(response.data)
            })
            .catch(error => {
                setError(error.message)
                setLoading(false)
                console.error(error)
            })
    }, [id])


    if (loading ) return <Loading/>
    if (error) {
        return (
            <NotFound/>
        );
      }
    if (!game) return <NotFound/>

    
    return (
        <>
        <Helmet>
          <title>{game.title}</title>
          </Helmet>
          
          <div className=' grid grid-cols-3 gap-20 my-20 mx-20'>
            
            <div className=' sticky top-20 h-fit'>
            <div className='overflow-hidden'>
            <a href={game.game_url} target='_blank'>
            <img 
                    src={game.thumbnail} 
                    alt={game.title} 
                    className=" hover:scale-105 duration-150"
                />
            </a>

            </div>
            <a href={game.game_url} target='_blank'>
            <h3 className='text-base font-extrabold text-custom text-center py-4'>Play Now</h3>
            </a>
            </div>

            <div className='col-span-2'>
                <h2 className=' font-extrabold text-custom text-lg pb-2'>{game.title}</h2>
                <p className=' text-mute font-semibold pb-4'>{game.description}</p>

                <p className='text-base font-bold text-white pb-0'>
                Additional Information
                </p>
                <span className=' text-mute text-xs font-semibold'><FontAwesomeIcon 
                        icon={faCircleExclamation} 
                        className="text-mute text-xs pe-1"/>
                        Please note this free-to-play game may or may not offer optional in-game purchases.
                </span>

                <div className=' grid grid-cols-3 gap-x-20 gap-y-3 my-2'>
                    <div className=' font-semibold text-xs'>
                        <span className=' text-mute block'>Title</span>
                        <span className='text-custom'>{game.title}</span>
                    </div>
                    <div className=' font-semibold text-xs'>
                        <span className=' text-mute block'>Developer</span>
                        <span className='text-custom'>{game.developer}</span>
                    </div>
                    <div className=' font-semibold text-xs'>
                        <span className=' text-mute block'>Publisher</span>
                        <span className='text-custom'>{game.publisher}</span>
                    </div>
                    <div className=' font-semibold text-xs'>
                        <span className=' text-mute block'>Release Date</span>
                        <span className='text-custom'>{game.release_date}</span>
                    </div>
                    <div className=' font-semibold text-xs'>
                        <span className=' text-mute block'>Genre</span>
                        <span className='text-custom'>{game.genre}</span>
                    </div>
                    <div className=' font-semibold text-xs'>
                        <span className=' text-mute block'>Platform</span>
                        <span className='text-custom'>{game.platform}</span>
                    </div>

                </div>

                <p className='text-base font-bold text-white pb-2 pt-4'>
                {game.title} Screenshots
                </p>
                <div className='grid grid-cols-3 gap-x-20 gap-y-3 my-2 pb-4'>
                    
    {game.screenshots && game.screenshots.length > 0 ? (
        // إذا وجدت صور، اعرض أول 3 صور
        game.screenshots.slice(0, 3).map((screenshot) => (
            <div key={screenshot.id} className='overflow-hidden'>
                <img 
                    src={screenshot.image} 
                    alt={`Screenshot ${screenshot.id}`}
                    className="w-full h-full object-cover "
                />
            </div>
        ))
    ) : (
        // إذا لم توجد صور، اعرض رسالة
        <div className='col-span-3'>
                <span className=' text-mute text-xs font-semibold'><FontAwesomeIcon 
                        icon={faCircleExclamation} 
                        className="text-mute text-xs pe-1"/>
                No screenshots available for this game.
                </span>

        </div>
    )}
</div>

                <p className='text-base font-bold text-white pb-0'>
                Minimum System Requirements <span className='text-mute text-xs ps-1'>(Windows)</span>
                </p>
                
                <div className=' grid grid-cols-3 gap-x-20 gap-y-3 my-2'>
                    <div className=' font-semibold text-xs'>
                        <span className=' text-mute block'>OS</span>
                        {game.minimum_system_requirements ? (
                        <span className='text-custom'>
                        {game.minimum_system_requirements.os}
                        </span>) : (
                            <span className="text-custom">Empty</span>
                        )}
                    </div>

                    <div className=' font-semibold text-xs'>
                        <span className=' text-mute block'>Processor</span>
                       {game.minimum_system_requirements ? (
                        <span className='text-custom'>
                        {game.minimum_system_requirements.processor}
                        </span>) : (
                            <span className="text-custom">Empty</span>
                        )}
                        </div>
                    <div className=' font-semibold text-xs'>
                        <span className=' text-mute block'>Memory</span>
                        {game.minimum_system_requirements ? (
                        <span className='text-custom'>
                        {game.minimum_system_requirements.memory}
                        </span>) : (
                            <span className="text-custom">Empty</span>
                        )}
                    </div>
                    <div className=' font-semibold text-xs'>
                        <span className=' text-mute block'>Graphics </span>
                        {game.minimum_system_requirements ? (
                        <span className='text-custom'>
                        {game.minimum_system_requirements.graphics}
                        </span>) : (
                            <span className="text-custom">Empty</span>
                        )}
                        </div>
                    <div className=' font-semibold text-xs'>
                        <span className=' text-mute block'>Storage</span>
                        {game.minimum_system_requirements ? (
                        <span className='text-custom'>
                        {game.minimum_system_requirements.storage}
                        </span>) : (
                            <span className="text-custom">Empty</span>
                        )}                    </div>
                    <div className=' font-semibold text-xs'>
                        <span className=' text-mute block'>Additional Notes</span>
                        <span className='text-custom'>{game.platform}</span>
                    </div>
                </div>

                <div className=' pt-4'>
                <span className=' text-mute text-xs font-semibold'>
                    <FontAwesomeIcon 
                        icon={faCircleExclamation} 
                        className="text-mute text-xs pe-1"/>
All material on this page is copyrighted by ©Epic Games and their respective licensors.<br/>All other trademarks are the property of their respective owners.
                </span>
                </div>

            </div>


        </div>
        </>
    )
}

export default GameDetails

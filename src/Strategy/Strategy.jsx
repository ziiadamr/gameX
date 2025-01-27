import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import { Helmet } from 'react-helmet';


function Strategy() {
  const [gameData, setGameData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


  useEffect(() => {
      // GET request
  axios.get('https://api.allorigins.win/raw?url=https://www.freetogame.com/api/games?category=strategy')
          .then(response => {
              setGameData(response.data)
              setTimeout(() => {
                setLoading(false)
              }, 1500)
            })
          .catch(error => {
              setError(error.message)
              setLoading(false)
          })
  }, [])

  if (loading) return <Loading/>
  if (error) {
    return (
        <NotFound/>
    );
  }
    return (
        <>
        <Helmet>
          <title>Strategy</title>
        </Helmet>
                        <div className='py-20 mt-4 z-50 relative'>
          <div className='container mx-auto text-center flex flex-col items-center'>
          <h2 className=' text-custom text-3xl font-extrabold '>Strategy gameX</h2>
          <p className='text-base font-semibold pt-4 mb-20 max-w-md text-mute'>Top Free Strategy Games for PC and Browser In 2025!
          <br/>113 free-to-play Strategy games found in our games list!
</p>
          </div>
          <div className='grid grid-cols-3 mx-20 gap-20'>
          {gameData && gameData.map(game => (
            <div key={game.id}>
            <div className='overflow-hidden'>
            <Link to={`/game/${game.id}`}>
            <img 
                    src={game.thumbnail}
                    alt={game.title} 
                    className=" hover:scale-105 duration-150"
                />
            </Link>
            
            </div>
            <h3 className=' text-custom text-lg text-center py-2 font-extrabold title'>{game.title}</h3>
            <p className='font-semibold text-custom text-xs text-center mb-2 h-[32px] shortdesc'>{game.short_description}</p>
            <div className=' grid grid-cols-2 font-semibold text-center text-custom'>
              <span className='text-xs '>{game.genre}</span>
              <span className=' text-xs '>{game.platform}</span>
            </div>

            </div>

            ))}


          </div>
      </div>
        </>
    )
}

export default Strategy

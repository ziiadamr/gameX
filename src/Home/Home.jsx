import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Loading from '../Loading/Loading';
import GameDetails from '../GameDetails/GameDetails';
import NotFound from '../NotFound/NotFound';
import { Helmet } from 'react-helmet';


function Home() {
  const [gameData, setGameData] = useState(null)
  const [popData, setPopData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // جلب البيانات بشكل متوازي
        const [newGamesResponse, popularGamesResponse] = await Promise.all([
          axios.get('https://api.allorigins.win/raw?url=https://www.freetogame.com/api/games?sort-by=release-date'),
          axios.get('https://api.allorigins.win/raw?url=https://www.freetogame.com/api/games?sort-by=popularity')
        ]);

        setGameData(newGamesResponse.data);
        setPopData(popularGamesResponse.data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // عرض Loading component أثناء تحميل البيانات
  if (loading || !gameData || !popData) {
    return <Loading />;
  }

  // عرض رسالة الخطأ إذا حدث خطأ
  if (error) {
    return (
        <NotFound/>
    );
  }

    return (<>

        <Helmet>
          <title>gameX</title>
        </Helmet>

        <div className="relative h-screen"> {/* غيرنا min-h-screen لـ h-[800px] */}

            <div className="absolute inset-0">
                <img 
                    src={`${process.env.PUBLIC_URL}/homei.jpg`}
                    alt="Hero Background" 
                    className="w-full h-full object-cover object-bottom opacity-70"
                />
            </div>

            {/* Content Section */}
            <div className="relative z-10 flex flex-col items-center justify-end h-full text-custom text-center px-4 pb-20"> {/* عدلنا min-h-screen لـ h-full */}
            <h1 className=' text-5xl font-bold pb-2 pt-80'>Discover the best <span className=' font-extrabold'>gameX</span></h1>
            
            <h2 className='text-5xl font-bold'>Where Fun Meets Free !</h2>
            
            <p className='text-xl font-semibold max-w-4xl py-4'>At GameX, we're committed to bringing you the ultimate collection of free games
               across all your favorite genres. Whether you're a fan of heart-pounding shooters,
                strategic challenges, high-octane racing, or immersive anime worlds,
                 we've got something for everyone.</p>
            <div className='text-base font-extrabold pb-2'>
            <Link to="/about" >Learn More</Link>
            </div>
            </div>
        </div>

        <div className='py-20 z-50 relative'>
          <div className='container mx-auto text-center flex flex-col items-center'>
          <h2 className=' text-custom text-3xl font-extrabold '>New Releases</h2>
          <p className='text-base font-semibold pt-4 mb-20 max-w-4xl text-mute'>Explore our curated selection of newly
           released games across various genres. Dive into endless fun and excitement with gameX!</p>
          </div>
          <div className='grid grid-cols-3 mx-20 gap-20'>

          {gameData && gameData.slice(0, 9).map(game => (
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


          <div className='text-base font-extrabold pb-2 text-custom text-center pt-20'>
          <Link to="/games">View More</Link>
          </div>
      </div>

      <div className='grid grid-cols-3 mx-20 gap-x-20'>

      <div className='col-span-2'>
          <h2 className=' text-custom text-3xl font-extrabold '>Recommendations</h2>
          <p className='text-base font-semibold pt-4 max-w-xl text-mute'>
          Discover games our community loves. Find new favorites recommended by players like you on gameX!
          </p>
      </div>

      <div className=''>
          <h2 className=' text-custom text-3xl font-extrabold '>Most Played</h2>
          <p className='text-base font-semibold pt-4 text-mute'>
          Explore top games across all genres.
          Jump into the most played adventures !
          </p>
      </div>

      </div>

      <div className='grid grid-cols-3 mx-20 gap-20'>
        
        <div className=' col-span-2 mb-20'>
        
        <div className='grid grid-cols-2 my-20'>
          
            <div className='overflow-hidden max-w-fit max-h-fit'>
              <Link to="/game/:475">
            <img 
                    src={`${process.env.PUBLIC_URL}/genshin.JPG`}

                    alt="game" 
                    className=" hover:scale-105 duration-150"
                />
                </Link>
            </div>
            <div className='ms-10 relative'>
            <h3 className=' text-custom text-lg text-start pb-2 font-extrabold'>Genshin Impact</h3>
            
            <span className=' font-semibold text-mute text-start pb-2'>
            <FontAwesomeIcon icon={faQuoteLeft} className='me-2' style={{color: "#b4b4b4",}} />I like this game, finally found my dream game. Not like the others games i know, and now i'm at AR 59 so anyone if wanna be my online friends, feel free t add me !! oh btw i'm on Asia server. Bye-bye !!
            </span>

            <span className=' block absolute bottom-0 font-semibold text-mute text-start'>By mary_haychooo</span>
            </div>
            
            </div>
        <div className='grid grid-cols-2 mb-20'>
          
            <div className='overflow-hidden max-w-fit max-h-fit'>
            <Link to="/game/:466">
            <img 
                    src={`${process.env.PUBLIC_URL}/valorant.JPG`}
                      alt="game" 
                    className=" hover:scale-105 duration-150"
                />
              </Link>
            </div>
            <div className='ms-10 relative'>
            <h3 className=' text-custom text-lg text-start pb-2 font-extrabold'>Valorant</h3>
            
            <span className=' font-semibold text-mute text-start pb-2'>
            <FontAwesomeIcon icon={faQuoteLeft} className='me-2' style={{color: "#b4b4b4",}} />
            Competitive FPS that works great. Its different modes, fast and effective gameplay, and enjoyable graphics.
            </span>

            <span className=' block absolute bottom-0 font-semibold text-mute text-start'>By Axel0689</span>
            </div>
            
            </div>
            <div className='col-span-2'>
          <h2 className=' text-custom text-3xl font-extrabold '>Frequently Asked Questions
          </h2>
          <p className='text-base font-semibold pt-4 max-w-xl text-mute'>
          Find answers to common questions about gameX, including game availability, downloads, and compatibility.
          </p>
          <p className='text-base font-bold pt-20 max-w-xl text-white'>
          Are all the games on GameX completely free?
          </p>
          <p className='text-base font-semibold pt-2 max-w-xl text-mute'>
          Yes, every game available on gameX is 100% free. We provide you with a curated selection of free games to suit all interests.
          </p>
          <p className='text-base font-bold pt-4 max-w-xl text-white'>
          Can I download the games directly from the website?
          </p>
          <p className='text-base font-semibold pt-2 max-w-xl text-mute'>
          gameX provides direct links to download games from their official sources, ensuring safe downloads and ease of use.
          </p>
          <p className='text-base font-bold pt-4 max-w-xl text-white'>
          How often are new games added to GameX?
          </p>
          <p className='text-base font-semibold pt-2 max-w-xl text-mute'>
          We regularly update our library to include the latest free games, ensuring you never miss out on new releases.
          </p>
      </div>
        </div>
          
        <div className='my-20'>
        {popData && popData.filter((_, index) => [0, 1, 3].includes(index)).map(game => (
          <div key={game.id} className='mb-20'>
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
            <p className='font-semibold text-custom text-xs text-center mb-2 h-[32px] shortdesc'>
            {game.short_description}
            </p>
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

export default Home
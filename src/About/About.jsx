import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import Loading from '../Loading/Loading'
import NotFound from '../NotFound/NotFound'
import { Helmet } from 'react-helmet'

function About() {
        const scrollToContent = () => {
        document.getElementById('content-section').scrollIntoView({ 
            behavior: 'smooth' 
        });
    }

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // محاكاة تحميل المحتوى
    setTimeout(() => {
      setLoading(false)
    }, 1500) // 1.5 ثانية للتحميل
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
          <title>About gameX</title>
          </Helmet>
         <div className="relative h-screen"> {/* غيرنا min-h-screen لـ h-[800px] */}

<div className="absolute inset-0">
    <img 
        src={`${process.env.PUBLIC_URL}/about.jpg`}
        alt="Hero Background" 
        className="w-full h-full object-cover object-bottom opacity-70"
    />
</div>

{/* Content Section */}
<div className="relative z-10 flex flex-col items-center justify-end h-full text-custom text-center px-4 pb-20"> {/* عدلنا min-h-screen لـ h-full */}
<span className=' text-5xl font-bold pb-2 pt-80'>About</span>
<h1 className=' font-extrabold text-5xl'>gameX</h1>

<p className='text-xl font-semibold max-w-4xl py-4'>At gameX, our passion for gaming drives us to deliver an unparalleled experience where fun truly meets free. We're not just a gaming platform; we are a vibrant community of enthusiasts dedicated to bringing you the ultimate collection of free games across all your favorite genres.
</p>
<h3 onClick={scrollToContent} className='text-base font-extrabold pb-2 cursor-pointer'>Scroll Down</h3>
</div>
</div>

<div id="content-section" className='py-20 z-50 relative h-screen'>
          <div className='container mx-auto text-center flex flex-col items-center'>
          <h2 className=' text-custom text-3xl font-extrabold '>But What’s the Story Behind gameX</h2>
          
          <p className='text-base font-semibold pt-4 mb-2 max-w-4xl text-mute'>gameX isn’t just another gaming website – it’s a project that embodies my passion as a UI/UX designer and web developer. By leveraging the power of the Free-to-Game APIs, I set out to build a platform that is smooth, visually captivating, and filled with all the games you love.

          </p>
          <p className='text-base font-semibold pt-2 mb-20 max-w-4xl text-mute'>Every detail on this site – from the layout to the navigation – has been meticulously designed to provide an effortless and enjoyable gaming discovery experience. My vision? To create a space where gamers can explore, enjoy, and share the excitement of free gaming without boundaries.

          </p>

          <h2 className=' text-custom text-3xl font-extrabold '>Behind the Scenes of gameX</h2>
          
          <p className='text-base font-semibold pt-4 mb-4 max-w-4xl text-mute'>As the creator, I wanted to go beyond functional design. I focused on crafting a website that feels intuitive, fast, and visually engaging by combining my expertise in UI/UX design and web development. Every page, button, and interaction has been thoughtfully developed to ensure you have the best experience possible.

          </p>

            <span className=' text-mute text-xs font-semibold'>
                <FontAwesomeIcon 
                icon={faCircleExclamation} 
                className="text-mute text-xs pe-1"/>
            gameX has no commercial purpose – it’s purely a showcase of my skills
            </span>

          </div>
</div>
        </>
    )
}

export default About

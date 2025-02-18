import { useNavigate } from 'react-router-dom';
import CollaborateIcon from '../assets/undraw_collaborators_rgw4.svg'
import PostIcon from '../assets/undraw_post_eok2.svg'
import MentorIcon from '../assets/undraw_solution-mindset_pit7.svg'
import CommunityIcon from '../assets/undraw_group-chat_4xw0.svg'

const LandingPage = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

  return (
    <div className='bg-black text-white min-h-screen font-sans'>
      {/* Navbar */}
      <nav className='flex justify-between items-center p-6 border-b border-gray-700'>
        <div className='w-32 h-8'>
          <h1 className='text-bold text-3xl'>IdeaNest</h1>
        </div>
        <div className='flex space-x-10 text-xl items-center'>
          <a href='#' className='hover:text-gray-400'>
            Home
          </a>
          <a href='#' className='hover:text-gray-400'>
            Events
          </a>
          <a href='#' className='hover:text-gray-400'>
            Ideas
          </a>
          <a href='/community-chat' className='hover:text-gray-400'>
            Community
          </a>
          <a href='#' className='hover:text-gray-400'>
            ChatBot
          </a>
          {!token && (
              <button 
              onClick={() => navigate('/register')}
              className="px-6 py-2 bg-[#B697E1] rounded-lg hover:bg-[#341539]"
            >
              Login
            </button>
            )}
            {token && (
              <button 
              onClick={() => navigate('/')}
              className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700"
            >
              Logout
            </button>
            )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className='pt-10 pr-10 pl-10 flex flex-col md:flex-row justify-between'>
        <div className='pt-30 ml-10'>
          <h1 className='text-3xl md:text-7xl font-bold max-w-md font-poppins'>
            Make your imagination a reality
          </h1>
          <div className='mt-6 flex space-x-4'>
            <button className='bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold py-4 px-10 rounded-3xl shadow-md transition duration-300'>
              Join Us
            </button>
            <button className='bg-white/10 backdrop-blur-lg border border-white/20 text-white font-semibold py-4 px-10 rounded-3xl hover:bg-white/20 transition duration-300'>
              Explore
            </button>
          </div>
        </div>

        <div className='grid gap-6 mr-10'>
          <div className='bg-[#E0D492] pl-20 pr-20 rounded-lg text-black flex justify-between items-center ml-10'>
            <img
              src={CollaborateIcon}
              alt='Collaborate'
              className='w-60 h-60'
            />
            <div>
              <h2 className='text-2xl font-bold mb-2'>Collaborate</h2>
              <p>
                Join a team or make <br /> your own
              </p>
            </div>
          </div>
          <div className='grid grid-cols-2 col-span-1 gap-6 pt-3'>
            <div className='flex flex-col row-span-2 gap-8'>
              <div className='bg-[#C1E5E6] rounded-lg text-black flex items-center gap-5 p-5 ml-10 mr-3'>
                <img src={PostIcon} alt='Post' className='w-40 h-40' />
                <div className='flex flex-col gap-1'>
                  <h2 className='text-xl font-bold'>Post</h2>
                  <p>
                    Post your <br /> ideas to
                    <br />
                    the world{' '}
                  </p>
                </div>
              </div>
              <div className='bg-[#B697E1] rounded-lg text-black flex gap-9 items-center p-3'>
                <img src={MentorIcon} alt='Mentor' className='w-40 h-40' />
                <div className='flex flex-col gap-1'>
                  <h2 className='text-xl font-bold'>Mentors</h2>
                  <p>
                    ask best <br /> mentors for <br />
                    support{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className='bg-[#B6EDD7] rounded-lg text-black flex flex-col gap-2 pl-10 pr-10 pb-17'>
              <img src={CommunityIcon} alt='Community' className='w-60 h-60' />
              <div className='flex flex-col gap-3'>
                <h2 className='text-2xl font-bold'>Community</h2>
                <p>
                  Ask your doubts,
                  <br /> chat and form new <br /> connections
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage

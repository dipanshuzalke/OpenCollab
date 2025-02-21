import { useState } from 'react'
import { FaUserEdit, FaCalendarAlt, FaUsers } from 'react-icons/fa'
import { MdEventNote } from 'react-icons/md'
import {
  FaRegComment,
  FaRegBookmark,
  FaEllipsisH,
  FaRegThumbsUp
} from 'react-icons/fa'

export default function ProfilePage () {
  const [activeTab, setActiveTab] = useState('ideas')

  return (
    <div className='min-h-screen bg-black text-white p-6 w-240'>
      {/* Profile Section */}
      <div className='bg-gray-900 p-6 rounded-lg flex items-center max-w-lg mx-auto mb-6'>
        <div className='flex items-center'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAGoCcF7eRTEP3w78U3_dZqrvQWG3hHZKWY2nzC_eWjO1bVi9rVLCxI2wL46aYwDSkFeg&usqp=CAU'
            alt='Profile'
            className='w-25 h-25 rounded-full border border-gray-600 mr-4'
          />
          <div>
            <div className='flex gap-3'>
              <h2 className='text-xl font-semibold'>Rahul A Agrasain</h2>
              <button className='px-4 py-1 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 rounded-full flex items-center shadow-md transition-all duration-300 transform'>
                <FaUserEdit className='mr-2 text-white' />
                Edit Profile
              </button>
            </div>
            <p className='text-gray-400'>203 Contributions • 12 Projects</p>
            <p className='text-gray-500'>
              Web Developer
              <hr />
              React &nbsp; Express &nbsp; Node
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className='flex border-b border-gray-700 mb-4'>
        <button
          className={`p-2 flex-1 text-center ${
            activeTab === 'ideas'
              ? 'border-b-2 border-blue-500'
              : 'text-gray-400'
          }`}
          onClick={() => setActiveTab('ideas')}
        >
          Ideas
        </button>
        <button
          className={`p-2 flex-1 text-center ${
            activeTab === 'projects'
              ? 'border-b-2 border-blue-500'
              : 'text-gray-400'
          }`}
          onClick={() => setActiveTab('projects')}
        >
          Projects
        </button>
      </div>

      {/* Project List */}

      <div>
        {/* Content */}
        <div className='p-4 bg-gray-800 rounded-lg'>
          {activeTab === 'projects' ? (
            <div className='max-w-3xl mx-auto'>
              {[1, 2].map((_, index) => (
                <div key={index} className='bg-gray-900 p-4 rounded-lg mb-4'>
                  <div className='flex items-center mb-2'>
                    <img
                      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Pu1PHdV99JqMidxoBkuC0NNiemj2naIEPQ&s0'
                      alt='Project Icon'
                      className='w-12 h-12 rounded-full mr-3'
                    />
                    <div>
                      <div className='flex justify-between items-center gap-80'>
                        <h3 className='text-lg font-semibold'>
                          Automated Traffic Controller
                        </h3>
                        <div className='flex items-center gap-2 text-gray-400'>
                          <FaCalendarAlt /> 02 | 02 | 2025
                        </div>
                      </div>

                      <p className='text-gray-400 text-sm'>
                        Software &nbsp; Python
                      </p>
                    </div>
                  </div>
                  <p className='text-gray-300 text-sm mb-2'>
                    An Automated Traffic Controller is a smart system that
                    optimizes traffic flow...
                  </p>
                  <div className='flex justify-between items-center text-gray-400 text-sm'>
                  <button className='mt-3 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-2xl'>
                    View Details
                  </button>
                    <div className='flex items-center'>
                      <FaUsers className='mr-2 text-green-400' /> 51
                      Contributors
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className='bg-gray-900 text-white p-4 rounded-lg w-full max-w-lg mx-auto shadow-lg'>
              {/* Header */}
              <div className='flex justify-between items-center mb-3'>
                <div className='flex items-center gap-3'>
                  <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAGoCcF7eRTEP3w78U3_dZqrvQWG3hHZKWY2nzC_eWjO1bVi9rVLCxI2wL46aYwDSkFeg&usqp=CAU'
                    alt='Profile'
                    className='w-10 h-10 rounded-full'
                  />
                  <div>
                    <h3 className='font-semibold text-lg pb-0.5'>Epsilon</h3>
                    <div className='flex gap-1 items-center'>
                      <MdEventNote className='text-[15px] text-gray-400' />{' '}
                      <p className='text-gray-400 text-sm'>An hour ago</p>
                    </div>
                  </div>
                </div>
                <button className='text-gray-400 hover:text-white'>
                  <FaEllipsisH />
                </button>
              </div>
              <div className='text-gray-300'>
                <h2 className='text-2xl pb-2'>Title of the project.</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  asperiores minima odio minus. Hic nam perspiciatis ab quos!
                  Nobis deleniti veniam a praesentium corporis minus similique
                  dolores repellat fugit pariatur. Ab aspernatur fuga magni
                  placeat cumque pariatur maxime quam unde perspiciatis possimus
                  atque eum ut sit, fugiat asperiores iusto ad commodi.
                  Deleniti, enim. Odit ad illum nihil quas delectus repellat.
                </p>
              </div>
              <hr className='border-t-2 border-gray-500 my-4 opacity-70' />
              {/* Action Buttons */}
              <div className='flex justify-between items-center mt-4 text-gray-400'>
                <div className='flex gap-5'>
                  <button className='flex items-center gap-1 hover:text-white'>
                    <FaRegThumbsUp /> Like
                  </button>
                  <button className='flex items-center gap-1 hover:text-white'>
                    <FaRegComment /> Comment
                  </button>
                </div>
                <button className='flex items-center gap-1 hover:text-white'>
                  <FaRegBookmark /> Save
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

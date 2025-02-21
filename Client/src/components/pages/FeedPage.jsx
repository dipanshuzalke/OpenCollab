import { useState } from 'react'
import { BsPencilSquare } from 'react-icons/bs'
import { GoFileMedia } from 'react-icons/go'
import { MdEventNote } from "react-icons/md";
import {
  FaRegComment,
  FaRegBookmark,
  FaEllipsisH,
  FaRegThumbsUp
} from 'react-icons/fa'

export default function FeedPage () {
  const [activeTab, setActiveTab] = useState('ideas')
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='bg-gray-900 text-white p-4 w-240 h-full'>
      <h2 className='text-3xl pb-3'>Stay Informed and Inspired</h2>
      <p className='text-xl pb-5'>
        Explore, engage, and discover a world of knowledge and inspiration in
        our feed
      </p>
      {/* Create Section */}
      <div className='bg-gray-800 rounded-lg mb-4'>
        <div
          className='p-4 flex items-center gap-2'
          onClick={() => setIsOpen(true)}
        >
          <BsPencilSquare className='text-2xl text-blue-500' />
          <h2 className='text-2xl border-r-2 border-gray-500 pr-5'>Create</h2>
        </div>
        <hr className="border-t-2 border-gray-500 opacity-70" />
        <div className='pt-3 p-4 flex items-center gap-3'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAGoCcF7eRTEP3w78U3_dZqrvQWG3hHZKWY2nzC_eWjO1bVi9rVLCxI2wL46aYwDSkFeg&usqp=CAU'
            alt='Profile'
            className='w-10 h-10 rounded-full bg-cover bg-center bg-no-repeat'
          />
          <p>Ignite Conversations, Share Your Brilliance</p>
        </div>

        {/* Popup Modal */}
        {isOpen && (
          <div className='fixed inset-0 flex items-center justify-center bg-opacity-60 backdrop-blur-md'>
            <div className='bg-gray-800 text-white p-6 rounded-lg w-full max-w-lg relative'>
              <button
                className='absolute top-2 right-4 text-gray-400 hover:text-white'
                onClick={() => setIsOpen(false)}
              >
                ✖
              </button>
              <div className='flex justify-between items-center'>
                <div className='flex gap-3'>
                  <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAGoCcF7eRTEP3w78U3_dZqrvQWG3hHZKWY2nzC_eWjO1bVi9rVLCxI2wL46aYwDSkFeg&usqp=CAU'
                    alt='Profile'
                    className='w-15 h-15 rounded-full bg-cover bg-center bg-no-repeat'
                  />
                  <div>
                    <h2 className='text-xl font-semibold mb-2'>
                      Dipanshu Zalke
                    </h2>
                    <p className='text-gray-400 mb-4'>Creating new post</p>
                  </div>
                </div>
                <div>
                  <button className='relative px-6 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-800 to-indigo-900 hover:from-purple-700 hover:to-indigo-800 transition-all duration-300 shadow-lg overflow-hidden'>
                    <span className='absolute inset-0 bg-gradient-to-r from-purple-700 to-indigo-800 opacity-40 blur-xl'></span>
                    <span className='absolute inset-0 animate-pulse bg-purple-500 opacity-20 blur-lg'></span>
                    <span className='relative z-10'>Ask AI</span>
                  </button>
                </div>
              </div>
              <textarea
                className='w-full p-2 bg-gray-700 text-white rounded-lg focus:outline-none'
                placeholder='Title of your project.'
                rows={2}
              ></textarea>
              <textarea
                className='w-full p-2 bg-gray-700 text-white rounded-lg focus:outline-none'
                placeholder='What do you want to talk about?'
                rows={7}
              ></textarea>


              {/* Buttons */}
              <div className='flex items-center justify-between'>
                {/* Add Photos */}
                <div className=''>
                  <button className=' mt-4 flex items-center gap-2'>
                    <GoFileMedia className='text-2xl  text-green-400' />{' '}
                    <h2>Media</h2>
                  </button>
                </div>
                <div className='flex gap-3 mt-3'>
                  <button
                    className='px-4 py-2 bg-gray-600 rounded-lg hover:bg-gray-500'
                    onClick={() => setIsOpen(false)}
                  >
                    Cancel
                  </button>
                  <button className='px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500'>
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Tabs */}
      <div className='flex border-b border-gray-700 mb-4'>
        <button
          className={`p-2 flex-1 text-center ${
            activeTab === 'ideas' ? 'border-b-2 border-blue-500' : 'text-gray-400'
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

      {/* Content */}
      <div className='p-4 bg-gray-800 rounded-lg'>
        {activeTab === 'ideas' ? (
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
                  <MdEventNote className='text-[15px] text-gray-400' /> <p className='text-gray-400 text-sm'>An hour ago</p>
                  </div>
                </div>
              </div>
              <button className='text-gray-400 hover:text-white'>
                <FaEllipsisH />
              </button>
            </div>
            <div className='text-gray-300'>
                <h2 className='text-2xl pb-2'>Title of the project.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla asperiores minima odio minus. Hic nam perspiciatis ab quos! Nobis deleniti veniam a praesentium corporis minus similique dolores repellat fugit pariatur.
                Ab aspernatur fuga magni placeat cumque pariatur maxime quam unde perspiciatis possimus atque eum ut sit, fugiat asperiores iusto ad commodi. Deleniti, enim. Odit ad illum nihil quas delectus repellat.</p>
            </div>
            <hr className="border-t-2 border-gray-500 my-4 opacity-70" />
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
        ) : (
          <div>
            <h3 className='text-lg font-semibold'>Mentor Content</h3>
            <p>Guidance, strategies, and insights from experienced mentors.</p>
            <p className='mt-2'>
              Connect with experts for personalized advice.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

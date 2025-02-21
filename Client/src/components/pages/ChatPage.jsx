import { useState } from 'react'

const ChatPage = () => {
  const [activeTab, setActiveTab] = useState('chats')

  return (
    <div className='bg-[#121212] text-white h-screen p-6 flex flex gap-6'>
      {/* Tabs */}
      <div className='flex flex-col'>
        <div className='flex space-x-6 border-b border-gray-700 pb-4'>
          {[
            { id: 'chats', label: 'Chats' },
            { id: 'community', label: 'Community' },
            { id: 'support', label: 'Support' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gray-700 text-white'
                  : 'bg-gray-900 text-gray-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Section Content */}
        <div className='flex-1 mt-4'>
          {activeTab === 'chats' && (
            <div className='flex gap-6'>
              <div className='flex-1 bg-gray-800 p-4 rounded-lg'>Peers</div>
              <div className='flex-1 bg-gray-800 p-4 rounded-lg'>Mentors</div>
              <div className='flex-1 bg-gray-800 p-4 rounded-lg'>Sessions</div>
            </div>
          )}
          {activeTab === 'community' && (
            <div className='bg-gray-800 p-6 rounded-lg'>
              Community Section Content
            </div>
          )}
          {activeTab === 'support' && (
            <div className='bg-gray-800 p-6 rounded-lg'>
              Support Section Content
            </div>
          )}
        </div>
      </div>

      <div className='bg-blue-600 w-200 h-full'>
        <h1>Chat section</h1>
      </div>
    </div>
  )
}

export default ChatPage

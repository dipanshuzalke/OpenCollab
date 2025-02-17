import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { FaUser, FaHome, FaCog, FaUserCircle, FaSearch } from 'react-icons/fa';
import { MdChat, MdOutlineCreateNewFolder } from 'react-icons/md';

const Sidebar = () => {
  return (
    <div className='bg-black text-white h-screen w-1/5 p-5 flex flex-col gap-4'>
      <h2 className='text-3xl font-bold ml-8'>IdeaNest</h2>
      <hr />
      <nav className='flex text-lg flex-col gap-6 items-start pl-4'>
        <Link to='/' className='flex items-center gap-2 hover:text-gray-400'>
          <FaHome /> Home
        </Link>
        <Link to='/events' className='flex items-center gap-2 hover:text-gray-400'>
          <FaUser /> Events
        </Link>
        <Link to='/create' className='flex items-center gap-2 hover:text-gray-400'>
          <MdOutlineCreateNewFolder /> Create Idea
        </Link>
        <Link to='/community-chat' className='flex items-center gap-2 hover:text-gray-400'>
          <MdChat /> Community Chat
        </Link>
        <Link to='/search' className='flex items-center gap-2 hover:text-gray-400'>
          <FaSearch /> Search
        </Link>
        <Link to='/account' className='flex items-center gap-2 hover:text-gray-400'>
          <FaUserCircle /> Account
        </Link>
      </nav>
    </div>
  );
};

const events = [
  {
    title: 'DSA + System Design To Crack FAANG Interviews?',
    creator: 'Varun',
    role: 'Senior SDE @ Microsoft',
    companies: ['Microsoft', 'Salesforce'],
    description:
      'Master DSA and System Design to land your dream job in product-based companies.',
    joined: 74,
    seatsRemaining: 41,
    startDate: 'January 12, 2025',
    endDate: 'February 09, 2025',
  },
  {
    title: 'January DSA + Development Bootcamp',
    creator: 'Parikh Jain',
    role: 'FOUNDER @ ProPeers',
    companies: ['ProPeers', 'Coding Ninjas', 'Amazon'],
    description:
      "A bootcamp to refine problem-solving skills, foster intuition, and build unique projects.",
    joined: 86,
    seatsRemaining: 39,
    startDate: 'January 12, 2025',
    endDate: 'February 09, 2025',
  },
];

const EventCard = ({ event }) => {
  return (
    <div className='bg-gray-800 text-white p-6 rounded-xl shadow-lg w-4/5 md:w-3/5'>
      <h3 className='text-xl font-semibold'>{event.title}</h3>
      <p className='text-sm text-gray-400'>
        Created by <span className='text-blue-400'>{event.creator}</span> ({event.role})
      </p>
      <p className='mt-2 text-gray-300'>{event.description}</p>
      <div className='mt-4 flex gap-2 text-sm'>
        {event.companies.map((company, index) => (
          <span key={index} className='bg-blue-600 px-3 py-1 rounded-full'>
            {company}
          </span>
        ))}
      </div>
      <p className='mt-4 text-green-400'>{event.joined} Peers already joined!</p>
      <p className='text-yellow-400'>Hurry only {event.seatsRemaining} Seats Remaining!</p>
      <p className='mt-2 text-gray-300'>📅 {event.startDate} - {event.endDate}</p>
      <button className='mt-4 w-full bg-blue-500 py-2 rounded-lg hover:bg-blue-600'>
        View Details
      </button>
    </div>
  );
};

const EventPage = () => {
  return (
    <Router>
      <div className='min-h-screen bg-gray-900 flex'>
        <Sidebar />
        <div className='flex flex-col items-center w-full p-10'>
          <h2 className='text-2xl font-bold text-white mb-6'>Upcoming Events</h2>
          <div className='flex flex-col gap-6 w-full items-center'>
            {events.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </div>
      </div>
    </Router>
  );
};

export default EventPage;

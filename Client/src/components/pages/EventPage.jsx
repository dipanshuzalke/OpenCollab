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
    endDate: 'February 09, 2025'
  },
  {
    title: 'January DSA + Development Bootcamp',
    creator: 'Parikh Jain',
    role: 'FOUNDER @ ProPeers',
    companies: ['ProPeers', 'Coding Ninjas', 'Amazon'],
    description:
      'A bootcamp to refine problem-solving skills, foster intuition, and build unique projects.',
    joined: 86,
    seatsRemaining: 39,
    startDate: 'January 12, 2025',
    endDate: 'February 09, 2025'
  }
]

const EventCard = ({ event }) => {
  return (
    <div className='bg-gray-800 text-white p-6 rounded-xl shadow-lg w-full md:w-3/5'>
      <h3 className='text-xl font-semibold'>{event.title}</h3>
      <p className='text-sm text-gray-400'>
        Created by <span className='text-blue-400'>{event.creator}</span> (
        {event.role})
      </p>
      <p className='mt-2 text-gray-300'>{event.description}</p>
      <div className='mt-4 flex gap-2 text-sm'>
        {event.companies.map((company, index) => (
          <span key={index} className='bg-blue-600 px-3 py-1 rounded-full'>
            {company}
          </span>
        ))}
      </div>
      <p className='mt-4 text-green-400'>
        {event.joined} Peers already joined!
      </p>
      <p className='text-yellow-400'>
        Hurry only {event.seatsRemaining} Seats Remaining!
      </p>
      <p className='mt-2 text-gray-300'>
        📅 {event.startDate} - {event.endDate}
      </p>
      <button className='mt-4 w-full bg-blue-500 py-2 rounded-lg hover:bg-blue-600'>
        View Details
      </button>
    </div>
  )
}

const EventPage = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex-1 bg-green-500 mx-auto p-6'>
        <h2 className='text-2xl font-bold text-black mb-6'>Upcoming Events</h2>
        <div className='flex flex-col gap-6'>
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default EventPage

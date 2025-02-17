import React from "react";

const events = [
  {
    title: "DSA + System Design To Crack FAANG Interviews?",
    creator: "Varun",
    role: "Senior SDE @ Microsoft",
    companies: ["Microsoft", "Salesforce"],
    description:
      "Enroll in our bootcamp to become a job-ready programmer by mastering Data Structures and Algorithms & System Design, and land your dream job in Product-Based Companies.",
    joined: 74,
    seatsRemaining: 41,
    startDate: "January 12, 2025",
    endDate: "February 09, 2025",
  },
  {
    title: "January DSA + Development Bootcamp",
    creator: "Parikh Jain",
    role: "FOUNDER @ ProPeers",
    companies: ["ProPeers", "Coding Ninjas", "Amazon"],
    description:
      "Join our bootcamp to become a job-ready programmer, mastering both DSA and development. Through interactive sessions, you'll refine problem-solving skills, foster intuition, create unique projects, and more.",
    joined: 86,
    seatsRemaining: 39,
    startDate: "January 12, 2025",
    endDate: "February 09, 2025",
  },
];

const EventCard = ({ event }) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-2xl shadow-lg w-full md:w-1/2 lg:w-2/5">
      <h3 className="text-xl font-semibold">{event.title}</h3>
      <p className="text-sm text-gray-400">Created by <span className="text-blue-400">{event.creator}</span> ({event.role})</p>
      <p className="mt-2 text-gray-300">{event.description}</p>
      <div className="mt-4 flex gap-2 text-sm">
        {event.companies.map((company, index) => (
          <span key={index} className="bg-blue-600 px-3 py-1 rounded-full">{company}</span>
        ))}
      </div>
      <p className="mt-4 text-green-400">{event.joined} Peers already joined!</p>
      <p className="text-yellow-400">Hurry only {event.seatsRemaining} Seats Remaining!</p>
      <p className="mt-2 text-gray-300">
        📅 Starts on <span className="text-blue-300">{event.startDate}</span> - Ends on <span className="text-red-300">{event.endDate}</span>
      </p>
      <button className="mt-4 w-full bg-blue-500 py-2 rounded-lg hover:bg-blue-600">View Details</button>
    </div>
  );
};

const EventPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center py-10">
      <h2 className="text-2xl font-bold text-white mb-6">Upcoming Bootcamps</h2>
      <div className="flex flex-col gap-6 items-center w-full">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventPage;

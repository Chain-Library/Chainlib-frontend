import { useState } from "react";

interface ClubDiscussionProps {
  startEvent: () => void;
}

export default function ClubDiscussion({ startEvent }: ClubDiscussionProps) {
  const [activeTab, setActiveTab] = useState("discussion");

  const tabs = [
    { id: "discussion", label: "Discussion" },
    { id: "live", label: "Live", badge: 1 },
    { id: "about", label: "About" },
    { id: "members", label: "Members" },
  ];

  const eventTabs = [
    {
      id: "discussion",
      label: "Discussion",
      badge: 2,
      event: {
        title: "Native Invisibility",
        author: "Darrin Collins",
        verified: true,
        description:
          "Delves into the complex and often insidious ways in which indigenous peoples and their unique experiences are rendered unseen and unheard in the modern era.",
        live: false,
        timeAgo: "2 weeks ago",
        image: "/images/bookCover1.png",
      },
    },
    {
      id: "live",
      label: "Live",
      badge: null,
      event: {
        title: "Native Invisibility",
        author: "Darrin Collins",
        verified: true,
        description:
          "Delves into the complex and often insidious ways in which indigenous peoples and their unique experiences are rendered unseen and unheard in the modern era.",
        live: true,
        timeAgo: "Live now",
        image: "/images/bookCover1.png",
      },
    },

    {
      id: "discussion",
      label: "Discussion",
      badge: null,
      event: {
        title: "Native Invisibility",
        author: "Darrin Collins",
        verified: true,
        description:
          "Delves into the complex and often insidious ways in which indigenous peoples and their unique experiences are rendered unseen and unheard in the modern era.",
        live: true,
        timeAgo: "Live now",
        image: "/images/bookCover1.png",
      },
    },
  ];

  return (
    <div className=" mx-auto p-6 rounded-xl shadow-sm">
      <div className="flex gap-6 mb-6 bg-white px-10 py-5">
        <div className="w-50 h-50 bg-gray-300 rounded-md flex-shrink-0"></div>
        <div className="flex flex-col justify-center flex-grow">
          <h1 className="text-[28px] font-semibold text-gray-900 mb-1">
            Fantasy Enthusiasts
          </h1>
          <p className="text-sm text-[#888888]">
            Vibrant book club dedicated to exploring the vast and magical realms
            of fantasy literature. From epic sagas and dark fantasy to urban
            magic and whimsical tales, we delve into all corners of the genre.
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <Badge icon="🌐" label="Public" />
            <Badge icon="👥" label="1.5k+ Members" />
            <Badge icon="📅" label="2+ Session a Month" />
          </div>
          <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Author 1"
              className="w-6 h-6 rounded-full border border-white shadow-sm"
            />
            <img
              src="https://randomuser.me/api/portraits/men/34.jpg"
              alt="Author 2"
              className="w-6 h-6 rounded-full border border-white shadow-sm -ml-2"
            />
            <span className="text-[#888888]">
              2 Authors you follow are members
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white py-5 px-5 rounded-xl">
        <div className="flex items-center justify-between mb-6">
          <nav className="flex space-x-8" aria-label="Tabs">
            {tabs.map(({ id, label, badge }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`relative py-2 px-3 text-[#5D5D5D] text-sm font-medium rounded-md focus:outline-none ${
                  activeTab === id ? "] text-[#5D5D5D] bg-[#F6F6F6]" : ""
                }`}
                aria-current={activeTab === id ? "page" : undefined}
              >
                {label}
                {badge && (
                  <span className="ml-1 inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-semibold bg-red-600 text-white">
                    {badge}
                  </span>
                )}
              </button>
            ))}
          </nav>
          <button
            type="button"
            onClick={startEvent}
            className="inline-flex items-center px-4 py-2 text-sm font-semibold rounded-full bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition"
          >
            Start Event
          </button>
        </div>
        <div>
       
          {eventTabs.map(({ id, event }) =>
            activeTab === id ? (
              <EventCard
                key={id}
                author={event.author}
                title={event.title}
                description={event.description}
                image={event.image}
              />
            ) : <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

function Badge({ icon, label }: { icon: string; label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-gray-300 px-2 py-2 text-xs text-[#888888] select-none">
      <span className="mr-1">{icon}</span> {label}
    </span>
  );
}

function EventCard({
  title,
  author,
  verified,
  description,
  live,
  timeAgo,
  image,
}: {
  title: string;
  author: string;
  verified?: boolean;
  description: string;
  live?: boolean;
  timeAgo?: string;
  image: string;
}) {
  return (
    <div className="flex gap-4 p-4 px-6 rounded-lg border border-gray-200 shadow-sm mb-4 bg-white">
      <img
        src={image}
        alt={title}
        className="w-40 h-40 rounded-md object-cover flex-shrink-0"
      />
      <div className="flex flex-col justify-between flex-grow">
        <div>
          <div className="flex flex-col items-start gap-2">
              <span className="text-xs font-semibold  bg-[#FF5C5C] text-white rounded-full px-2 py-0.5 select-none">
                Live
              </span>
            <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          </div>
          <p className="text-sm text-[#5D5D5D] mb-2">
            By {author}{" "}
              <svg
                className="inline-block w-4 h-4 text-blue-600"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-label="Verified"
              >
                <path d="M22.25 12l-2.197 4.317.353 4.474-4.42-1.616L12 22.5l-4.015-3.325-4.42 1.616.353-4.474L1.75 12l2.197-4.317-.353-4.474 4.42 1.616L12 1.5l4.015 3.325 4.42-1.616-.353 4.474L22.25 12zM10.5 16.5l7.5-7.5-1.5-1.5-6 6-2.25-2.25-1.5 1.5 3.75 3.75z" />
              </svg>
            
          </p>
          <p className="mt-1 text-xs text-[#888888]">Book Description</p>
          <p className=" text-[#888888] mt-1">{description}</p>
        </div>
        {timeAgo && <p className="text-xs text-gray-400 mt-4">{timeAgo}</p>}
      </div>
    </div>
  );
}

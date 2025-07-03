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

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      <div className="flex gap-6 mb-6">
        <div className="w-24 h-24 bg-gray-300 rounded-md flex-shrink-0"></div>
        <div className="flex flex-col justify-center flex-grow">
          <h1 className="text-xl font-semibold text-gray-900 mb-1">
            Fantasy Enthusiasts
          </h1>
          <p className="text-sm text-gray-500 max-w-lg">
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
            <span>2 Authors you follow are members</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-b border-gray-200 mb-6">
        <nav className="flex space-x-8" aria-label="Tabs">
          {tabs.map(({ id, label, badge }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`relative py-2 px-3 text-sm font-medium rounded-md focus:outline-none ${
                activeTab === id
                  ? "text-blue-700 border-b-2 border-blue-600 font-semibold"
                  : "text-gray-500 hover:text-gray-700"
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
          className="inline-flex items-center px-4 py-2 text-sm font-semibold rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition"
        >
          Start Event
        </button>
      </div>

      <div>
        {activeTab === "discussion" && (
          <EventCard
            title="Native Invisibility"
            author="Darrin Collins"
            verified
            description="Delves into the complex and often insidious ways in which indigenous peoples and their unique experiences are rendered unseen and unheard in the modern era."
            live
            timeAgo="2 weeks ago"
            image="https://images-na.ssl-images-amazon.com/images/I/51f7ypv+5wL._SX329_BO1,204,203,200_.jpg"
          />
        )}

        {activeTab === "live" && (
          <EventCard
            title="Native Invisibility"
            author="Darrin Collins"
            verified
            description="Delves into the complex and often insidious ways in which indigenous peoples and their unique experiences are rendered unseen and unheard in the modern era."
            live
            timeAgo="Live now"
            image="https://images-na.ssl-images-amazon.com/images/I/51f7ypv+5wL._SX329_BO1,204,203,200_.jpg"
          />
        )}
      </div>
    </div>
  );
}

function Badge({ icon, label }: { icon: string; label: string }) {
  return (
    <span className="inline-flex items-center rounded-md border border-gray-300 px-2 py-0.5 text-xs font-semibold text-gray-600 bg-gray-100 select-none">
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
    <div className="flex gap-4 p-4 rounded-lg border border-gray-200 shadow-sm mb-4 bg-white">
      <img
        src={image}
        alt={title}
        className="w-24 h-32 rounded-md object-cover flex-shrink-0"
      />
      <div className="flex flex-col justify-between flex-grow">
        <div>
          <div className="flex items-center gap-2">
            {live && (
              <span className="text-xs font-semibold text-red-600 bg-red-100 rounded-full px-2 py-0.5 select-none">
                Live
              </span>
            )}
            <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          </div>
          <p className="text-sm text-gray-600">
            By {author}{" "}
            {verified && (
              <svg
                className="inline-block w-4 h-4 text-blue-600"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-label="Verified"
              >
                <path d="M22.25 12l-2.197 4.317.353 4.474-4.42-1.616L12 22.5l-4.015-3.325-4.42 1.616.353-4.474L1.75 12l2.197-4.317-.353-4.474 4.42 1.616L12 1.5l4.015 3.325 4.42-1.616-.353 4.474L22.25 12zM10.5 16.5l7.5-7.5-1.5-1.5-6 6-2.25-2.25-1.5 1.5 3.75 3.75z" />
              </svg>
            )}
          </p>
          <p className="mt-1 text-xs text-gray-500">Book Description</p>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>
        {timeAgo && <p className="text-xs text-gray-400 mt-4">{timeAgo}</p>}
      </div>
    </div>
  );
}



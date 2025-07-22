"use client";
import { Header } from "@/components/dashboard/header";
import React, { useState } from "react";
import ClubsToolbar from "./components/ClubToolBar";
import ClubCard from "./ClubCard";
import { ClubDetailsProps } from "@/lib/types";
import ClubModal from "./components/ClubDetails";
import CreateClubModal from "./components/CreateEvent";
import ClubDiscussion from "./components/ClubDiscussion";
import StartEventModal from "./components/StartEvent";
import ScheduleEvent from "./components/ScheduleEvent";
import EventScheduleModal from "./components/SuccessModal";

const clubCards: ClubDetailsProps[] = [
  {
    id: "1",
    name: "Fantasy Enthusiasts",
    isPublic: true,
    memberCount: 1500,
    sessionsInfo: "2+ Sessions a month",
    unreadNotifications: 3,
    authorAvatars: [
      "https://randomuser.me/api/portraits/men/32.jpg",
      "https://randomuser.me/api/portraits/women/44.jpg",
      "https://randomuser.me/api/portraits/men/32.jpg"
    ],
  },
  {
    id: "2",
    name: "Book Lovers",
    isPublic: false,
    memberCount: 1500,
    sessionsInfo: "2+ Sessions in three months",
    unreadNotifications: 2,
    authorAvatars: [
      "https://randomuser.me/api/portraits/men/32.jpg",
      "https://randomuser.me/api/portraits/women/44.jpg",
    ],
  },
  {
    id: "3",
    name: "Fantasy Enthusiasts",
    isPublic: true,
    memberCount: 1500,
    sessionsInfo: "2+ Sessions a month",
    unreadNotifications: 3,
    authorAvatars: [
      "https://randomuser.me/api/portraits/men/32.jpg",
      "https://randomuser.me/api/portraits/women/44.jpg",
            "https://randomuser.me/api/portraits/men/32.jpg"

    ],
  },
  {
    id: "4",
    name: "Book Lovers",
    isPublic: false,
    memberCount: 1500,
    sessionsInfo: "2+ Sessions a month",
    unreadNotifications: 10,
    authorAvatars: [
      "https://randomuser.me/api/portraits/men/32.jpg",
      "https://randomuser.me/api/portraits/women/44.jpg",
    ],
  },
];

export default function DiscussionDashboard() {
  const [selectedClub, setSelectedClub] = useState<ClubDetailsProps | null>(
    null
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [createEventOpen, setCreateEventOpen] = useState(false);
  const [startEventOpen, setStartEventOpen] = useState(false);
  const [scheduleEventOpen, setScheduleEventOpen] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  const [activePage, setActivePage] = useState<
    "index" | "discussion" | "start"
  >("index");

  function openModal(club: ClubDetailsProps) {
    setSelectedClub(club);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setSelectedClub(null);
  }

  function joinClub() {
    setCreateEventOpen(true);
    closeModal();
  }



  return (
    <div>
      <Header title="Discussions and Clubs" />
      <div className="p-6 mt-[60px] rounded-2xl">
        {activePage === "index" ? (
          <div>
            <div className="bg-white p-6 rounded space-y-8">
              <ClubsToolbar />

              {clubCards.map(
                ({
                  id,
                  name,
                  isPublic,
                  memberCount,
                  sessionsInfo,
                  authorAvatars,
                  unreadNotifications,
                }) => (
                  <ClubCard
                    id={id}
                    key={id}
                    name={name}
                    isPublic={isPublic}
                    memberCount={memberCount}
                    sessionsInfo={sessionsInfo}
                    authorAvatars={authorAvatars}
                    unreadNotifications={unreadNotifications}
                    onOpen={openModal}
                  />
                )
              )}
            </div>
          </div>
        ) : (
          <div>
            <ClubDiscussion startEvent={() => setStartEventOpen(true)} />
          </div>
        )}

        <StartEventModal
          startEvent={() => setCreateEventOpen(true)}
          instantEvent={() => setScheduleEventOpen(true)}
          isOpen={startEventOpen}
          onClose={() => setStartEventOpen(false)}
        />

        <ClubModal
          club={selectedClub}
          isOpen={modalOpen}
          onClose={closeModal}
          onJoin={joinClub}
        />

        <CreateClubModal
          isOpen={createEventOpen}
          onClose={() => setCreateEventOpen(false)}
          onSubmit={() => setActivePage("discussion")}
        />

        <ScheduleEvent
          isOpen={scheduleEventOpen}
          onClose={() => setScheduleEventOpen(false)}
          onSubmit={() => setSuccessModal(true)}
        />

        <EventScheduleModal
          isOpen={successModal}
          onClose={() => setSuccessModal(false)}
          onSubmit={() => {}}
        />
      </div>
    </div>
  );
}

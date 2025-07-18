import { ClubDetailsProps } from "@/lib/types";
import { Globe, PlusIcon } from "lucide-react";
import Modal from "./Modal";

type ClubModalProps = {
  club: ClubDetailsProps | null;
  isOpen: boolean;
  onClose: () => void;
  onJoin: () => void;
};

export default function ClubModal({
  club,
  isOpen,
  onClose,
  onJoin,
}: ClubModalProps) {
  if (!club) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <section className="p-6 space-y-6">
        <div className="flex flex-col justify-center items-center space-x-3">
          <div className="w-30 h-30 bg-gray-200 rounded-md" />

          <h2 className="text-xl font-semibold text-[#0F265C] truncate mt-2">
            {club.name}
          </h2>

          <div className="flex flex-col space-y-1">
            <div className="flex flex-wrap items-center text-sm space-x-3 mt-2 mb-1">
              <Badge text={club.isPublic ? "Public" : "Private"} icon="globe" />
              <Badge text={String(club.memberCount)} icon="plus" />
              <Badge text={club.sessionsInfo} />
            </div>

            <div className="flex items-center space-x-2 mt-2">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <AvatarGroup urls={club.authorAvatars} />
              </div>
              {club.authorAvatars?.length > 0 && (
                <span className="truncate text-[#5D5D5D] text-sm">
                  {club.authorAvatars.length} Authors you follow are members
                </span>
              )}
            </div>
          </div>
        </div>

        <div>
          <SectionTitle title="About Club" />
          <p className="text-[#3D3D3D] ">
            Vibrant book club dedicated to exploring the vast and magical realms
            of fantasy literature. From epic sagas and dark fantasy to urban
            magic and whimsical tales, we delve into all corners of the genre.
          </p>
        </div>

        <div>
          <SectionTitle title="Genre Focus" />
          <div className="flex flex-wrap gap-2">
            <Tag text="Fiction" />
            <Tag text="Drama" />
          </div>
        </div>
      </section>

      <footer className="flex justify-between gap-3 p-4 bg-gray-50">
        <button
          onClick={onClose}
          className="text-[#0F265C] py-4 px-8 w-full rounded-[10px] bg-[linear-gradient(to_bottom,_#EDF7FF_100%,_#096CFF_30%)] hover:bg-gray-200 transition"
        >
          Cancel
        </button>
        <button
          onClick={onJoin}
          className="px-6 py-4 w-full rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Join Club
        </button>
      </footer>
    </Modal>
  );
}

function Badge({ text, icon }: { text: string; icon?: "globe" | "plus" }) {
  const icons = {
    globe: <Globe className="w-4 h-4 text-[#888888]" />,
    plus: <PlusIcon className="w-4 h-4 text-[#888888]" />,
  };

  return (
    <div className="flex text-xs items-center space-x-1  border border-[#D1D1D1] rounded-full px-2 py-1">
      {icon && icons[icon]}
      <span className="text-[#888888]">{text}</span>
    </div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="rounded-full bg-[#F6F6F6] w-fit text-center px-2 py-2 mb-2">
      <p className="text-sm">{title}</p>
    </div>
  );
}

function Tag({ text }: { text: string }) {
  return (
    <span className="text-xs border border-[#E7E7E7] rounded-full px-3 py-1">
      {text}
    </span>
  );
}

function AvatarGroup({ urls }: { urls: string[] }) {
  return (
    <div className="flex -space-x-2">
      {urls.map((url, i) => (
        <img
          key={i}
          src={url}
          alt={`Author ${i + 1}`}
          className="w-6 h-6 rounded-full border-2 border-white"
        />
      ))}
    </div>
  );
}

"use client"

import { useSearchParams } from "next/navigation";
import { ProfileForm } from "./_components/ProfileForm";
import UpdateSocialLinks from "./_components/Social";
import UpdatePasswordForm from "./_components/UpdatePasswordForm";
import Followers from "./_components/followers";
import GenreSelector from "./_components/genre";
import { ProfileSidebar } from "./_components/profilesidebar";
import SignOut from "./_components/signOut";

function ProfilePage() {
  const searchparams = useSearchParams()
  const page = searchparams.get("page")

  return (
    <>
      {page === "social" ? <UpdateSocialLinks /> :
        page === "password" ? <UpdatePasswordForm /> :
          page === "genre" ? <GenreSelector /> :
            page === "followers" ? <Followers /> :
              page === "sign-out" ? <SignOut /> :
                page === "my-profile" ? <ProfileForm /> : <div>
                  <div className="md:hidden block">
                    <ProfileSidebar />
                  </div>
                  <div className="hidden md:block">
                    <ProfileForm />
                  </div>
                </div>
      }
    </>
  );
}
export default ProfilePage;

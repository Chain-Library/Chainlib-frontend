"use client";

import { ProfileForm } from "./component/ProfileForm";

function ProfilePage() {
  return (
    <main className="flex flex-col lg:flex-row min-h-screen ">

      <div className="flex-1 p-4 lg:p-8 w-full ">
        <ProfileForm />
      </div>
    </main>
  );
}
export default ProfilePage;

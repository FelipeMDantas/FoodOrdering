"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useState } from "react";

const ProfilePage = () => {
  const session = useSession();
  const { status } = session;

  const [userName, setUserName] = useState(session?.data?.user?.name || "");

  if (status === "loading") return "Loading...";

  if (status === "unauthenticated") return redirect("/login");

  const userImage = session.data.user.image;
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Profile</h1>
      <div className="max-w-md mx-auto">
        <div className="flex gap-4 items-center">
          <div className="p-2 rounded-lg relative">
            <Image
              src={userImage}
              width={250}
              height={250}
              alt="avatar"
              className="rounded-lg w-full h-full mb-1"
            />
            <button type="button">Edit</button>
          </div>

          <div className="grow">
            <input
              type="text"
              placeholder="First and last name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="email"
              disabled={true}
              value={session.data.user.email}
            />
            <button type="submit">Save</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;

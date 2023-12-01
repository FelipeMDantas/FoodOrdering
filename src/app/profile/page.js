"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const session = useSession();
  const { status } = session;

  const [userName, setUserName] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (status === "authenticated") {
      setUserName(session.data.user.name);
      setImage(session.data.user.image);
    }
  }, [session, status]);

  async function handleProfileInfoUpdate(e) {
    e.preventDefault();
    toast("Saving...");
    const response = await fetch("/api/profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: userName, image }),
    });
    if (response.ok) {
      toast.success("Profile saved!");
    }
  }

  async function handleFileChange(e) {
    const files = e.target.files;

    if (files?.length === 1) {
      const data = new FormData();
      data.set("file", files[0]);
      toast("Uploading...");
      await fetch("/api/upload", {
        method: "POST",
        body: data,
      });
      if (response.ok) {
        toast.success("Upload complete!");
      } else {
        toast.error("Upload error!");
      }
      const link = await response.json();
      setImage(link);
    }
  }

  if (status === "loading") return "Loading...";

  if (status === "unauthenticated") return redirect("/login");

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Profile</h1>
      <div className="max-w-md mx-auto">
        <div className="flex gap-4 items-center">
          <div className="p-2 rounded-lg relative max-w-[120px]">
            {image && (
              <Image
                src={image}
                width={250}
                height={250}
                alt="avatar"
                className="rounded-lg w-full h-full mb-1"
              />
            )}
            <label>
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
              <span className="block border border-gray-300 rounded-lg p-2 text-center cursor-pointer">
                Edit
              </span>
            </label>
          </div>

          <form className="grow" onSubmit={handleProfileInfoUpdate}>
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
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;

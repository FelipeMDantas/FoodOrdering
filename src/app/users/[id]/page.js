"use client";

import { useProfile } from "@/components/useProfile";
import UserTabs from "@/components/layout/UserTabs";
import UserForm from "@/components/layout/UserForm";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditUserPage() {
  const { loading, data } = useProfile();
  const { id } = useParams();

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/user").then((res) => {
      res.json().then((users) => {
        const user = users.find((u) => u._id === id);
        setUser(user);
      });
    });
  }, []);

  if (loading) return "Loading user profile...";
  if (!data.admin) return "Not an admin";

  return (
    <section className="mt-8 mx-auto max-w-2xl">
      <UserTabs isAdmin={true} />
      <div className="mt-8">
        <UserForm user={user} onSave={handleSaveButtonClick} />
      </div>
    </section>
  );
}

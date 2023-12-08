"use client";

import { useProfile } from "@/components/useProfile";
import UserTabs from "@/components/layout/UserTabs";
import EditableImage from "@/components/layout/EditableImage";
import { useState } from "react";

export default function MenuItemsPage() {
  const { loading, data } = useProfile();

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [basePrice, setBasePrice] = useState("");

  async function handleFormSubmit(e) {
    e.preventDefault();

    const data = { image, name, description, basePrice };

    const response = await fetch("/api/menu-items", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
  }

  if (loading) {
    return "Loading user info...";
  }

  if (!data.admin) {
    return "Not and admin.";
  }

  return (
    <section className="mt-8">
      <UserTabs isAdmin={true} />
      <form className="mt-8 max-w-md mx-auto" onSubmit={handleFormSubmit}>
        <div
          className="grid items-start gap-4"
          style={{ gridTemplateColumns: ".3fr .7fr" }}
        >
          <div>
            <EditableImage link={image} setLink={setImage} />
          </div>
          <div className="grow">
            <label>Item name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <label>Base price</label>
            <input
              type="text"
              value={basePrice}
              onChange={(e) => setBasePrice(e.target.value)}
            />
            <button type="submit">Save</button>
          </div>
        </div>
      </form>
    </section>
  );
}

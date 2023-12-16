"use client";

import EditableImage from "@/components/layout/EditableImage";
import { useState } from "react";

export default function UserForm({ user, onSave }) {
  const [userName, setUserName] = useState(user?.name || "");
  const [image, setImage] = useState(user?.image || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [streetAddress, setStreetAddress] = useState(user?.streetAddress || "");
  const [postalCode, setPostalCode] = useState(user?.postalCode || "");
  const [city, setCity] = useState(user?.city || "");
  const [country, setCountry] = useState(user?.country || "");

  return (
    <div className="flex gap-4">
      <div className="p-2 rounded-lg relative max-w-[120px]">
        <EditableImage link={image} setLink={setImage} />
      </div>

      <form
        className="grow"
        onSubmit={(e) =>
          onSave(e, {
            name: userName,
            image,
            phone,
            streetAddress,
            city,
            country,
            postalCode,
          })
        }
      >
        <label>First and last name</label>
        <input
          type="text"
          placeholder="First and last name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          disabled={true}
          value={user.email}
          placeholder="email"
        />
        <label>Phone</label>
        <input
          type="tel"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label>Street Address</label>
        <input
          type="text"
          placeholder="Street address"
          value={streetAddress}
          onChange={(e) => setStreetAddress(e.target.value)}
        />
        <div className="flex gap-2">
          <div>
            <label>Postal code</label>
            <input
              type="text"
              placeholder="Postal code"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </div>

          <div>
            <label>City</label>
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
        </div>
        <label>Country</label>
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
"use client";

import { useEffect, useState } from "react";
import UserTabs from "../../components/layout/UserTabs";
import { useProfile } from "../../components/UseProfile";
import toast from "react-hot-toast";

const CategoriesPage = () => {
  const [newCategoryName, setNewCategoryName] = useState("");
  const [categories, setCategories] = useState([]);

  const { loading: profileLoading, data: profileData } = useProfile();

  useEffect(() => {
    fetch("/api/categories").then((res) => {
      res.json().then((categories) => {
        setCategories(categories);
      });
    });
  }, []);

  async function handleNewCategorySubmit(e) {
    e.preventDefault();

    const creationPromise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newCategoryName }),
      });

      if (response.ok) resolve();
      else reject();
    });

    await toast.promise(creationPromise, {
      loading: "Creating your new category",
      success: "Category created",
      error: "Error, sorry",
    });
  }

  if (profileLoading) {
    return "Loading user info...";
  }

  if (!profileData.admin) {
    return "Not an admin";
  }

  return (
    <section className="mt-8 max-w-md mx-auto">
      <UserTabs isAdmin={true} />
      <form className="mt-8" onSubmit={handleNewCategorySubmit}>
        <div className="flex gap-2 items-end">
          <div className="grow">
            <label>New category name</label>
            <input
              type="text"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
            />
          </div>
          <div className="pb-2">
            <button className="border border-primary" type="submit">
              Create
            </button>
          </div>
        </div>
      </form>
      <div>
        <h2 className="mt-8 text-sm text-gray-500">Edit category:</h2>
        {categories?.length > 0 &&
          categories.map((c) => (
            <div className="bg-gray-200 rounded-xl p-2 px-4 flex gap-1 cursor-pointer">
              <span>c.name</span>
            </div>
          ))}
      </div>
    </section>
  );
};

export default CategoriesPage;

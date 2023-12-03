"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const UserTabs = ({ isAdmin }) => {
  const path = usePathname();
  return (
    <div className="flex gap-2 tabs mx-auto justify-center">
      <Link href={"/profile"} className={path === "/profile" ? "active" : ""}>
        Profile
      </Link>
      {isAdmin && (
        <>
          <Link
            href={"/categories"}
            className={path === "/categories" ? "active" : ""}
          >
            Categories
          </Link>
          <Link
            href={"/menu-items"}
            className={path === "/menu-items" ? "active" : ""}
          >
            Menu items
          </Link>
          <Link href={"/users"} className={path === "/users" ? "active" : ""}>
            Users
          </Link>
        </>
      )}
    </div>
  );
};

export default UserTabs;

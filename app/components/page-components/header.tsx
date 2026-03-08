"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <header className="bg-stone-500 text-white font-bold p-4 flex items-center space-x-4">
      <h3 className="text-3xl">Bespeak</h3>
      {!isAuth && <GeneralLinks />}
      {isAuth && <AuthLinks />}
    </header>
  );
}

export function GeneralLinks() {
  const authLinks = [
    {
      title: "Bookings",
      href: "/bookings",
    },
    {
      title: "Add Room",
      href: "/add_room",
    },
    {
      title: "My Rooms",
      href: "/my_rooms",
    },
    {
      title: "Sign Out",
      href: "/sign_out",
    },
  ];
  return (
    <nav className="flex justify-between w-full">
      <Link href="/rooms">Rooms</Link>
      <div className="flex space-x-4">
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </div>
    </nav>
  );
}

export function AuthLinks() {
  return (
    <nav className="flex justify-between w-full">
      <div className="flex space-x-4">
        <Link href="/rooms">Rooms</Link>
        <Link href="/bookings">Bookings</Link>
        <Link href="/add_room">Add Room</Link>
      </div>

      <div className="flex space-x-4">
        <Link href="/my_rooms">My Rooms</Link>
        <Link href="/sign_out">Sign Out</Link>
      </div>
    </nav>
  );
}

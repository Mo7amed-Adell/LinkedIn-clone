"use client";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
   
  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-black/10 z-50 px-6 md:px-8">
      <div className="flex items-center justify-between max-w-[1128px] mx-auto min-h-[60px]">
        <Link href="/" className="flex items-center">
          <Image
            src="/home-logo.svg"
            alt="Logo"
            width={35}
            height={35}
            className="w-[35px] h-[35px] object-contain"
          />
        </Link>

        <div className="flex-grow max-w-[280px] relative hidden sm:block ml-6">
          <input
            type="text"
            placeholder="Search"
            className="w-full h-[34px] pl-10 pr-3 rounded bg-[#eef3f8] text-[14px] text-black/90 border border-[#dce6f1] outline-none"
          />
          <div className="absolute top-[8px] left-[6px] pointer-events-none">
            <Image
              src="/search-icon.svg"
              alt="Search Icon"
              width={20}
              height={20}
            />
          </div>
        </div>

        <nav className="ml-auto hidden md:block">
          <ul className="flex list-none m-0 p-0">
            <NavItem icon="/nav-home.svg" label="Home" active />
            <NavItem icon="/nav-network.svg" label="My Network" />
            <NavItem icon="/nav-jobs.svg" label="Jobs" />
            <NavItem icon="/nav-messaging.svg" label="Messaging" />
            <NavItem icon="/nav-notifications.svg" label="Notifications" />
            <UserMenu />
            <WorkMenu />
          </ul>
        </nav>
      </div>

      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-black/10">
        <ul className="flex justify-around py-2">
          <NavItem icon="/nav-home.svg" label="Home" />
          <NavItem icon="/nav-network.svg" label="Network" />
          <NavItem icon="/nav-jobs.svg" label="Jobs" />
          <NavItem icon="/nav-messaging.svg" label="Messages" />
          <NavItem icon="/nav-notifications.svg" label="Alerts" />
        </ul>
      </nav>
    </header>
  );
}

function NavItem({ icon, label, active }: { icon: string; label: string; active?: boolean }) {
  return (
    <li className="flex flex-col items-center justify-center min-w-[80px] relative hover:text-black">
      <a
        href="#"
        className={`flex flex-col items-center text-xs text-black/60 hover:text-black transition ${
          active ? "font-semibold text-black" : ""
        }`}
      >
        <Image src={icon} alt={label} width={24} height={24} className="mb-1" />
        <span>{label}</span>
      </a>
      {active && (
        <span className="absolute bottom-0 left-0 w-full border-b-2 border-black"></span>
      )}
    </li>
  );
}

function UserMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSignOut = async () => {
    await signOut(auth);
    router.push("/LogIn");
  };

  return (
    <li className="flex flex-col items-center min-w-[80px] relative cursor-pointer">
      <div
        onClick={handleToggle}
        className="flex flex-col items-center text-xs text-black/60"
      >
        <Image
          src="/user.svg"
          alt="User"
          width={24}
          height={24}
          className="rounded-full mb-1"
        />
        <span className="flex items-center">
          Me
          <Image
            src="/down-icon.svg"
            alt="Down"
            width={10}
            height={10}
            className="ml-1"
          />
        </span>
      </div>

      {menuOpen && (
        <div
          className="absolute top-[52px] bg-white w-[100px] h-[40px]
          flex items-center justify-center text-[14px] text-center border rounded shadow-md"
        >
          <button
            onClick={handleSignOut}
            className="text-black/80 hover:underline"
          >
            Sign out
          </button>
        </div>
      )}
    </li>
  );
}

function WorkMenu() {
  return (
    <li className="flex flex-col items-center min-w-[80px] relative border-l border-black/10 pl-3 max-[575px]:hidden">
      <div className="flex flex-col items-center text-xs text-black/60">
        <Image
          src="/nav-work.svg"
          alt="Work"
          width={24}
          height={24}
          className="mb-1"
        />
        <span className="flex items-center">
          Work
          <Image
            src="/down-icon.svg"
            alt="Down"
            width={10}
            height={10}
            className="ml-1"
          />
        </span>
      </div>
    </li>
  );
}

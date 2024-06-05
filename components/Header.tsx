import Link from "next/link";
import { Bell, LogOut } from "lucide-react";
import Image from "next/image";
import Avatar from "@/public/mouhamed.jpg";
import Online from "@/public/Small.svg";

export default function Header() {
  return (
    <header className=" mt-3 pb-3 border-b">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/dashboard" className="font-bold text-2xl">
            Dashboard
          </Link>
        </div>
        <div className="flex items-center space-x-5">
          <div>
            <input
              type="text"
              placeholder="Recherche"
              className="pl-8 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Bell />
            </div>
            <div className="relative">
              <Image
                src={Avatar}
                alt="avatar"
                width={30}
                className="rounded-full"
              />
              <Image
                src={Online}
                alt="avatar"
                width={10}
                className="z-20 absolute top-6 left-5"
              />
            </div>
            <div>
              <LogOut />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

{
  /**

     */
}

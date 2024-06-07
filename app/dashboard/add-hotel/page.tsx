"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function page() {
  const [nameHotel, setNameHotel] = useState("");
  const [adress, setAdress] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [price, setPrice] = useState("");
  const [device, setDevice] = useState("");
  const [addImage, setAddImage] = useState("");

  return (
    <div className="px-16 py-5">
      <div className="flex items-center space-x-4">
        <Link href="/dashboard">
          <ArrowLeft />
        </Link>
        <h2 className="uppercase font-light text-2xl">
          Creer un nouveau hotel
        </h2>
      </div>
      <form>
        <div className=" pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Nom de l'hotel
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  value={nameHotel}
                  onChange={(e) => setNameHotel(e.target.value)}
                  placeholder="CAP mamiane"
                  className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2   sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Adresse
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  value={adress}
                  onChange={(e) => setAdress(e.target.value)}
                  placeholder="les iles du saloum, nfar"
                  className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2   sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="demo@demo.tech"
                  className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2   sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Numeros de Telephone
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                  placeholder="77 777 77 77"
                  className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2   sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Prix par nuit
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="25 000 XOF"
                  className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2   sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Devise
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  value={device}
                  onChange={(e) => setDevice(e.target.value)}
                  className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2   sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </form>

      <div className="col-span-full">
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Ajouter une photo
        </label>
        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
          <div className="text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-300"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                clip-rule="evenodd"
              />
            </svg>
            <div className="mt-4 flex text-sm leading-6 text-gray-600">
              <label className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                <span>Ajouter une photo</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  value={addImage}
                  onChange={(e) => setAddImage(e.target.value)}
                  className="sr-only"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row-reverse mt-5">
        <button className="px-6 py-2 bg-[#555555] text-white rounded-lg">
          Enregistrer
        </button>
      </div>
    </div>
  );
}

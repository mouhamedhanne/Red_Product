"use client";

import Link from "next/link";
import { register } from "@/services/auth";
import { useState } from "react";
import { error } from "console";

interface InscriptionProps {
  error?: any;
}

export default function page() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register({ email, password, role: "user" });
      // Rediriger vers la page de connexion ou une autre action
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="bg-custom-bg bg-cover bg-center h-screen">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="uppercase text-white font-bold text-2xl text-center pb-7">
            red product
          </h1>
          <div className=" bg-white px-12 py-12 rounded-[8px]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3>Inscrivez-vous en tant que Admin</h3>
              <div className="block">
                <label htmlFor="username" className="block">
                  Nom
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="border border-gray-500 rounded-[5px] py-1"
                />
              </div>
              <div className="block">
                <label htmlFor="email" className="block">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border border-gray-500 rounded-[5px] py-1"
                />
              </div>
              <div>
                <label htmlFor="password">Mot de passe</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="border border-gray-500 rounded-[5px] py-1"
                />
              </div>

              {error && <p className="text-red-500 text-center">{error}</p>}

              <div className="flex justify-center mt-2">
                <button
                  type="submit"
                  className="bg-[#45484B] font-bold text-white px-[5.8rem] py-2"
                >
                  Se Connecter
                </button>
              </div>
            </form>
          </div>
          <div className="text-center pt-4">
            <span className="mt-10 text-white">
              Vous avez un compte ?{" "}
              <Link href="/" className="text-[#FFD964]">
                Se connecter
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

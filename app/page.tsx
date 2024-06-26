import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-custom-bg bg-cover bg-center h-screen">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="uppercase text-white font-bold text-2xl text-center pb-7">
            red product
          </h1>
          <div className=" bg-white px-12 py-12 rounded-[8px]">
            <form action="" className="space-y-6">
              <h3>Connectez-vous en tant que admin</h3>
              <div className="block">
                <label htmlFor="" className="block">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="border border-gray-500 rounded-[5px] py-1"
                />
              </div>
              <div>
                <label htmlFor="">Mot de passe</label>
                <input
                  type="password"
                  required
                  className="border border-gray-500 rounded-[5px] py-1"
                />
              </div>
              <div className="space-x-2">
                <input type="checkbox" />
                <label htmlFor="">Gardez-moi connecte</label>
              </div>
              <div className="flex justify-center mt-2">
                <button className="bg-[#45484B] font-bold text-white px-[5.8rem] py-2">
                  Se Connecter
                </button>
              </div>
            </form>
          </div>
          <div className="text-center pt-4">
            <Link href="/reset-passworld" className="text-[#FFD964] block">
              Mot de passe oublie ?
            </Link>
            <span className="mt-10 text-white">
              Vous n'avez pas de compte ?{" "}
              <Link href="/inscription" className="text-[#FFD964]">
                S'inscrire
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function page() {
  return (
    <div className="bg-custom-bg bg-cover bg-center h-screen">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="uppercase text-white font-bold text-2xl text-center pb-7">
            red product
          </h1>
          <div className=" bg-white px-12 py-12 rounded-[8px]">
            <form className="space-y-6">
              <h3>Mot de passe oublier ?</h3>

              <div>
                <p className="text-[15px]">
                  Entrez votre adresse e-mail ci-dessous et nous vous envoyons
                  des instructions sur la façon de modifier votre mot de passe.
                </p>
              </div>

              <div className="block">
                <label htmlFor="email" className="block">
                  votre e-mail
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="border border-gray-500 rounded-[5px] py-1"
                />
              </div>

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
              Revenir à la{" "}
              <Link href="/" className="text-[#FFD964]">
                connexion
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
